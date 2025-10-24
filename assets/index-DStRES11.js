import{r as d,a as To,e as W,c as So}from"./vendor-C_1HgqiI.js";import{m as q,d as p,G as L,l as Tr}from"./ui-DJvbdRdB.js";import{u as N,i as jo,a as _o}from"./i18n-yS3FBAcD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var tn={exports:{}},We={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=d,Ro=Symbol.for("react.element"),Eo=Symbol.for("react.fragment"),zo=Object.prototype.hasOwnProperty,Mo=Io.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ao={key:!0,ref:!0,__self:!0,__source:!0};function rn(e,t,n){var o,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)zo.call(t,o)&&!Ao.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:Ro,type:e,key:s,ref:l,props:a,_owner:Mo.current}}We.Fragment=Eo;We.jsx=rn;We.jsxs=rn;tn.exports=We;var r=tn.exports,nn,Sr=To;nn=Sr.createRoot,Sr.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jr="popstate";function Oo(e={}){function t(o,a){let{pathname:s,search:l,hash:u}=o.location;return Tt("",{pathname:s,search:l,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:Te(a)}return Po(t,n,null,e)}function D(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Z(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lo(){return Math.random().toString(36).substring(2,10)}function _r(e,t){return{usr:e.state,key:e.key,idx:t}}function Tt(e,t,n=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?de(t):t,state:n,key:t&&t.key||o||Lo()}}function Te({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function de(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function Po(e,t,n,o={}){let{window:a=document.defaultView,v5Compat:s=!1}=o,l=a.history,u="POP",c=null,f=m();f==null&&(f=0,l.replaceState({...l.state,idx:f},""));function m(){return(l.state||{idx:null}).idx}function b(){u="POP";let w=m(),v=w==null?null:w-f;f=w,c&&c({action:u,location:y.location,delta:v})}function S(w,v){u="PUSH";let C=Tt(y.location,w,v);f=m()+1;let g=_r(C,f),T=y.createHref(C);try{l.pushState(g,"",T)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(T)}s&&c&&c({action:u,location:y.location,delta:1})}function x(w,v){u="REPLACE";let C=Tt(y.location,w,v);f=m();let g=_r(C,f),T=y.createHref(C);l.replaceState(g,"",T),s&&c&&c({action:u,location:y.location,delta:0})}function h(w){return $o(w)}let y={get action(){return u},get location(){return e(a,l)},listen(w){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(jr,b),c=w,()=>{a.removeEventListener(jr,b),c=null}},createHref(w){return t(a,w)},createURL:h,encodeLocation(w){let v=h(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:x,go(w){return l.go(w)}};return y}function $o(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),D(n,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Te(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=n+o),new URL(o,n)}function on(e,t,n="/"){return Ho(e,t,n,!1)}function Ho(e,t,n,o){let a=typeof t=="string"?de(t):t,s=te(a.pathname||"/",n);if(s==null)return null;let l=an(e);Do(l);let u=null;for(let c=0;u==null&&c<l.length;++c){let f=Zo(s);u=Qo(l[c],f,o)}return u}function an(e,t=[],n=[],o="",a=!1){let s=(l,u,c=a,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(o)&&c)return;D(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length)}let b=ee([o,m.relativePath]),S=n.concat(m);l.children&&l.children.length>0&&(D(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),an(l.children,t,S,b,c)),!(l.path==null&&!l.index)&&t.push({path:b,score:qo(b,l.index),routesMeta:S})};return e.forEach((l,u)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))s(l,u);else for(let f of sn(l.path))s(l,u,!0,f)}),t}function sn(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let l=sn(o.join("/")),u=[];return u.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&u.push(...l),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function Do(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Go(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}var Fo=/^:[\w-]+$/,Bo=3,No=2,Vo=1,Uo=10,Wo=-2,Ir=e=>e==="*";function qo(e,t){let n=e.split("/"),o=n.length;return n.some(Ir)&&(o+=Wo),t&&(o+=No),n.filter(a=>!Ir(a)).reduce((a,s)=>a+(Fo.test(s)?Bo:s===""?Vo:Uo),o)}function Go(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function Qo(e,t,n=!1){let{routesMeta:o}=e,a={},s="/",l=[];for(let u=0;u<o.length;++u){let c=o[u],f=u===o.length-1,m=s==="/"?t:t.slice(s.length)||"/",b=Ve({path:c.relativePath,caseSensitive:c.caseSensitive,end:f},m),S=c.route;if(!b&&f&&n&&!o[o.length-1].route.index&&(b=Ve({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!b)return null;Object.assign(a,b.params),l.push({params:a,pathname:ee([s,b.pathname]),pathnameBase:ea(ee([s,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(s=ee([s,b.pathnameBase]))}return l}function Ve(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Yo(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:o.reduce((f,{paramName:m,isOptional:b},S)=>{if(m==="*"){let h=u[S]||"";l=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}const x=u[S];return b&&!x?f[m]=void 0:f[m]=(x||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:l,pattern:e}}function Yo(e,t=!1,n=!0){Z(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,c)=>(o.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function Zo(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Z(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function te(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Jo(e,t="/"){let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?de(e):e;return{pathname:n?n.startsWith("/")?n:Ko(n,t):t,search:ta(o),hash:ra(a)}}function Ko(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function vt(e,t,n,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xo(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ln(e){let t=Xo(e);return t.map((n,o)=>o===t.length-1?n.pathname:n.pathnameBase)}function cn(e,t,n,o=!1){let a;typeof e=="string"?a=de(e):(a={...e},D(!a.pathname||!a.pathname.includes("?"),vt("?","pathname","search",a)),D(!a.pathname||!a.pathname.includes("#"),vt("#","pathname","hash",a)),D(!a.search||!a.search.includes("#"),vt("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,u;if(l==null)u=n;else{let b=t.length-1;if(!o&&l.startsWith("..")){let S=l.split("/");for(;S[0]==="..";)S.shift(),b-=1;a.pathname=S.join("/")}u=b>=0?t[b]:"/"}let c=Jo(a,u),f=l&&l!=="/"&&l.endsWith("/"),m=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||m)&&(c.pathname+="/"),c}var ee=e=>e.join("/").replace(/\/\/+/g,"/"),ea=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ta=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ra=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function na(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var dn=["POST","PUT","PATCH","DELETE"];new Set(dn);var oa=["GET",...dn];new Set(oa);var ue=d.createContext(null);ue.displayName="DataRouter";var qe=d.createContext(null);qe.displayName="DataRouterState";d.createContext(!1);var un=d.createContext({isTransitioning:!1});un.displayName="ViewTransition";var aa=d.createContext(new Map);aa.displayName="Fetchers";var ia=d.createContext(null);ia.displayName="Await";var J=d.createContext(null);J.displayName="Navigation";var je=d.createContext(null);je.displayName="Location";var K=d.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var Et=d.createContext(null);Et.displayName="RouteError";function sa(e,{relative:t}={}){D(_e(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:o}=d.useContext(J),{hash:a,pathname:s,search:l}=Ie(e,{relative:t}),u=s;return n!=="/"&&(u=s==="/"?n:ee([n,s])),o.createHref({pathname:u,search:l,hash:a})}function _e(){return d.useContext(je)!=null}function ae(){return D(_e(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(je).location}var pn="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hn(e){d.useContext(J).static||d.useLayoutEffect(e)}function fn(){let{isDataRoute:e}=d.useContext(K);return e?Ca():la()}function la(){D(_e(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(ue),{basename:t,navigator:n}=d.useContext(J),{matches:o}=d.useContext(K),{pathname:a}=ae(),s=JSON.stringify(ln(o)),l=d.useRef(!1);return hn(()=>{l.current=!0}),d.useCallback((c,f={})=>{if(Z(l.current,pn),!l.current)return;if(typeof c=="number"){n.go(c);return}let m=cn(c,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ee([t,m.pathname])),(f.replace?n.replace:n.push)(m,f.state,f)},[t,n,s,a,e])}var ca=d.createContext(null);function da(e){let t=d.useContext(K).outlet;return t&&d.createElement(ca.Provider,{value:e},t)}function Ie(e,{relative:t}={}){let{matches:n}=d.useContext(K),{pathname:o}=ae(),a=JSON.stringify(ln(n));return d.useMemo(()=>cn(e,JSON.parse(a),o,t==="path"),[e,a,o,t])}function ua(e,t){return mn(e,t)}function mn(e,t,n,o,a){var C;D(_e(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=d.useContext(J),{matches:l}=d.useContext(K),u=l[l.length-1],c=u?u.params:{},f=u?u.pathname:"/",m=u?u.pathnameBase:"/",b=u&&u.route;{let g=b&&b.path||"";gn(f,!b||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let S=ae(),x;if(t){let g=typeof t=="string"?de(t):t;D(m==="/"||((C=g.pathname)==null?void 0:C.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${g.pathname}" was given in the \`location\` prop.`),x=g}else x=S;let h=x.pathname||"/",y=h;if(m!=="/"){let g=m.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let w=on(e,{pathname:y});Z(b||w!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Z(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=ga(w&&w.map(g=>Object.assign({},g,{params:Object.assign({},c,g.params),pathname:ee([m,s.encodeLocation?s.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?m:ee([m,s.encodeLocation?s.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),l,n,o,a);return t&&v?d.createElement(je.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},v):v}function pa(){let e=wa(),t=na(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},s={padding:"2px 4px",backgroundColor:o},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:s},"ErrorBoundary")," or"," ",d.createElement("code",{style:s},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:a},n):null,l)}var ha=d.createElement(pa,null),fa=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?d.createElement(K.Provider,{value:this.props.routeContext},d.createElement(Et.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ma({routeContext:e,match:t,children:n}){let o=d.useContext(ue);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(K.Provider,{value:e},n)}function ga(e,t=[],n=null,o=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=n==null?void 0:n.errors;if(l!=null){let f=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);D(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,c=-1;if(n)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:b,errors:S}=n,x=m.route.loader&&!b.hasOwnProperty(m.route.id)&&(!S||S[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,m,b)=>{let S,x=!1,h=null,y=null;n&&(S=l&&m.route.id?l[m.route.id]:void 0,h=m.route.errorElement||ha,u&&(c<0&&b===0?(gn("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,y=null):c===b&&(x=!0,y=m.route.hydrateFallbackElement||null)));let w=t.concat(s.slice(0,b+1)),v=()=>{let C;return S?C=h:x?C=y:m.route.Component?C=d.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=f,d.createElement(ma,{match:m,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:C})};return n&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?d.createElement(fa,{location:n.location,revalidation:n.revalidation,component:h,error:S,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0},unstable_onError:o}):v()},null)}function zt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xa(e){let t=d.useContext(ue);return D(t,zt(e)),t}function va(e){let t=d.useContext(qe);return D(t,zt(e)),t}function ba(e){let t=d.useContext(K);return D(t,zt(e)),t}function Mt(e){let t=ba(e),n=t.matches[t.matches.length-1];return D(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ya(){return Mt("useRouteId")}function wa(){var o;let e=d.useContext(Et),t=va("useRouteError"),n=Mt("useRouteError");return e!==void 0?e:(o=t.errors)==null?void 0:o[n]}function Ca(){let{router:e}=xa("useNavigate"),t=Mt("useNavigate"),n=d.useRef(!1);return hn(()=>{n.current=!0}),d.useCallback(async(a,s={})=>{Z(n.current,pn),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...s}))},[e,t])}var Rr={};function gn(e,t,n){!t&&!Rr[e]&&(Rr[e]=!0,Z(!1,n))}d.memo(ka);function ka({routes:e,future:t,state:n,unstable_onError:o}){return mn(e,void 0,n,o,t)}function Ta(e){return da(e.context)}function ce(e){D(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Sa({basename:e="/",children:t=null,location:n,navigationType:o="POP",navigator:a,static:s=!1}){D(!_e(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),u=d.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);typeof n=="string"&&(n=de(n));let{pathname:c="/",search:f="",hash:m="",state:b=null,key:S="default"}=n,x=d.useMemo(()=>{let h=te(c,l);return h==null?null:{location:{pathname:h,search:f,hash:m,state:b,key:S},navigationType:o}},[l,c,f,m,b,S,o]);return Z(x!=null,`<Router basename="${l}"> is not able to match the URL "${c}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:d.createElement(J.Provider,{value:u},d.createElement(je.Provider,{children:t,value:x}))}function ja({children:e,location:t}){return ua(St(e),t)}function St(e,t=[]){let n=[];return d.Children.forEach(e,(o,a)=>{if(!d.isValidElement(o))return;let s=[...t,a];if(o.type===d.Fragment){n.push.apply(n,St(o.props.children,s));return}D(o.type===ce,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),D(!o.props.index||!o.props.children,"An index route cannot have child routes.");let l={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=St(o.props.children,s)),n.push(l)}),n}var Be="get",Ne="application/x-www-form-urlencoded";function Ge(e){return e!=null&&typeof e.tagName=="string"}function _a(e){return Ge(e)&&e.tagName.toLowerCase()==="button"}function Ia(e){return Ge(e)&&e.tagName.toLowerCase()==="form"}function Ra(e){return Ge(e)&&e.tagName.toLowerCase()==="input"}function Ea(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function za(e,t){return e.button===0&&(!t||t==="_self")&&!Ea(e)}var Oe=null;function Ma(){if(Oe===null)try{new FormData(document.createElement("form"),0),Oe=!1}catch{Oe=!0}return Oe}var Aa=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bt(e){return e!=null&&!Aa.has(e)?(Z(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ne}"`),null):e}function Oa(e,t){let n,o,a,s,l;if(Ia(e)){let u=e.getAttribute("action");o=u?te(u,t):null,n=e.getAttribute("method")||Be,a=bt(e.getAttribute("enctype"))||Ne,s=new FormData(e)}else if(_a(e)||Ra(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||u.getAttribute("action");if(o=c?te(c,t):null,n=e.getAttribute("formmethod")||u.getAttribute("method")||Be,a=bt(e.getAttribute("formenctype"))||bt(u.getAttribute("enctype"))||Ne,s=new FormData(u,e),!Ma()){let{name:f,type:m,value:b}=e;if(m==="image"){let S=f?`${f}.`:"";s.append(`${S}x`,"0"),s.append(`${S}y`,"0")}else f&&s.append(f,b)}}else{if(Ge(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Be,o=null,a=Ne,l=e}return s&&a==="text/plain"&&(l=s,s=void 0),{action:o,method:n.toLowerCase(),encType:a,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function At(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function La(e,t,n){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname=`_root.${n}`:t&&te(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${n}`,o}async function Pa(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $a(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ha(e,t,n){let o=await Promise.all(e.map(async a=>{let s=t.routes[a.route.id];if(s){let l=await Pa(s,n);return l.links?l.links():[]}return[]}));return Na(o.flat(1).filter($a).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Er(e,t,n,o,a,s){let l=(c,f)=>n[f]?c.route.id!==n[f].route.id:!0,u=(c,f)=>{var m;return n[f].pathname!==c.pathname||((m=n[f].route.path)==null?void 0:m.endsWith("*"))&&n[f].params["*"]!==c.params["*"]};return s==="assets"?t.filter((c,f)=>l(c,f)||u(c,f)):s==="data"?t.filter((c,f)=>{var b;let m=o.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,f)||u(c,f))return!0;if(c.route.shouldRevalidate){let S=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((b=n[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Da(e,t,{includeHydrateFallback:n}={}){return Fa(e.map(o=>{let a=t.routes[o.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function Fa(e){return[...new Set(e)]}function Ba(e){let t={},n=Object.keys(e).sort();for(let o of n)t[o]=e[o];return t}function Na(e,t){let n=new Set;return new Set(t),e.reduce((o,a)=>{let s=JSON.stringify(Ba(a));return n.has(s)||(n.add(s),o.push({key:s,link:a})),o},[])}function xn(){let e=d.useContext(ue);return At(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Va(){let e=d.useContext(qe);return At(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ot=d.createContext(void 0);Ot.displayName="FrameworkContext";function vn(){let e=d.useContext(Ot);return At(e,"You must render this element inside a <HydratedRouter> element"),e}function Ua(e,t){let n=d.useContext(Ot),[o,a]=d.useState(!1),[s,l]=d.useState(!1),{onFocus:u,onBlur:c,onMouseEnter:f,onMouseLeave:m,onTouchStart:b}=t,S=d.useRef(null);d.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let y=v=>{v.forEach(C=>{l(C.isIntersecting)})},w=new IntersectionObserver(y,{threshold:.5});return S.current&&w.observe(S.current),()=>{w.disconnect()}}},[e]),d.useEffect(()=>{if(o){let y=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(y)}}},[o]);let x=()=>{a(!0)},h=()=>{a(!1),l(!1)};return n?e!=="intent"?[s,S,{}]:[s,S,{onFocus:be(u,x),onBlur:be(c,h),onMouseEnter:be(f,x),onMouseLeave:be(m,h),onTouchStart:be(b,x)}]:[!1,S,{}]}function be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Wa({page:e,...t}){let{router:n}=xn(),o=d.useMemo(()=>on(n.routes,e,n.basename),[n.routes,e,n.basename]);return o?d.createElement(Ga,{page:e,matches:o,...t}):null}function qa(e){let{manifest:t,routeModules:n}=vn(),[o,a]=d.useState([]);return d.useEffect(()=>{let s=!1;return Ha(e,t,n).then(l=>{s||a(l)}),()=>{s=!0}},[e,t,n]),o}function Ga({page:e,matches:t,...n}){let o=ae(),{manifest:a,routeModules:s}=vn(),{basename:l}=xn(),{loaderData:u,matches:c}=Va(),f=d.useMemo(()=>Er(e,t,c,a,o,"data"),[e,t,c,a,o]),m=d.useMemo(()=>Er(e,t,c,a,o,"assets"),[e,t,c,a,o]),b=d.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let h=new Set,y=!1;if(t.forEach(v=>{var g;let C=a.routes[v.route.id];!C||!C.hasLoader||(!f.some(T=>T.route.id===v.route.id)&&v.route.id in u&&((g=s[v.route.id])!=null&&g.shouldRevalidate)||C.hasClientLoader?y=!0:h.add(v.route.id))}),h.size===0)return[];let w=La(e,l,"data");return y&&h.size>0&&w.searchParams.set("_routes",t.filter(v=>h.has(v.route.id)).map(v=>v.route.id).join(",")),[w.pathname+w.search]},[l,u,o,a,f,t,e,s]),S=d.useMemo(()=>Da(m,a),[m,a]),x=qa(m);return d.createElement(d.Fragment,null,b.map(h=>d.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...n})),S.map(h=>d.createElement("link",{key:h,rel:"modulepreload",href:h,...n})),x.map(({key:h,link:y})=>d.createElement("link",{key:h,nonce:n.nonce,...y})))}function Qa(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var bn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bn&&(window.__reactRouterVersion="7.8.2")}catch{}function Ya({basename:e,children:t,window:n}){let o=d.useRef();o.current==null&&(o.current=Oo({window:n,v5Compat:!0}));let a=o.current,[s,l]=d.useState({action:a.action,location:a.location}),u=d.useCallback(c=>{d.startTransition(()=>l(c))},[l]);return d.useLayoutEffect(()=>a.listen(u),[a,u]),d.createElement(Sa,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:a})}var yn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wn=d.forwardRef(function({onClick:t,discover:n="render",prefetch:o="none",relative:a,reloadDocument:s,replace:l,state:u,target:c,to:f,preventScrollReset:m,viewTransition:b,...S},x){let{basename:h}=d.useContext(J),y=typeof f=="string"&&yn.test(f),w,v=!1;if(typeof f=="string"&&y&&(w=f,bn))try{let z=new URL(window.location.href),E=f.startsWith("//")?new URL(z.protocol+f):new URL(f),M=te(E.pathname,h);E.origin===z.origin&&M!=null?f=M+E.search+E.hash:v=!0}catch{Z(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=sa(f,{relative:a}),[g,T,_]=Ua(o,S),j=Xa(f,{replace:l,state:u,target:c,preventScrollReset:m,relative:a,viewTransition:b});function I(z){t&&t(z),z.defaultPrevented||j(z)}let R=d.createElement("a",{...S,..._,href:w||C,onClick:v||s?t:I,ref:Qa(x,T),target:c,"data-discover":!y&&n==="render"?"true":void 0});return g&&!y?d.createElement(d.Fragment,null,R,d.createElement(Wa,{page:C})):R});wn.displayName="Link";var Za=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:o="",end:a=!1,style:s,to:l,viewTransition:u,children:c,...f},m){let b=Ie(l,{relative:f.relative}),S=ae(),x=d.useContext(qe),{navigator:h,basename:y}=d.useContext(J),w=x!=null&&oi(b)&&u===!0,v=h.encodeLocation?h.encodeLocation(b).pathname:b.pathname,C=S.pathname,g=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(C=C.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase()),g&&y&&(g=te(g,y)||g);const T=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let _=C===v||!a&&C.startsWith(v)&&C.charAt(T)==="/",j=g!=null&&(g===v||!a&&g.startsWith(v)&&g.charAt(v.length)==="/"),I={isActive:_,isPending:j,isTransitioning:w},R=_?t:void 0,z;typeof o=="function"?z=o(I):z=[o,_?"active":null,j?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(I):s;return d.createElement(wn,{...f,"aria-current":R,className:z,ref:m,style:E,to:l,viewTransition:u},typeof c=="function"?c(I):c)});Za.displayName="NavLink";var Ja=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:o,replace:a,state:s,method:l=Be,action:u,onSubmit:c,relative:f,preventScrollReset:m,viewTransition:b,...S},x)=>{let h=ri(),y=ni(u,{relative:f}),w=l.toLowerCase()==="get"?"get":"post",v=typeof u=="string"&&yn.test(u),C=g=>{if(c&&c(g),g.defaultPrevented)return;g.preventDefault();let T=g.nativeEvent.submitter,_=(T==null?void 0:T.getAttribute("formmethod"))||l;h(T||g.currentTarget,{fetcherKey:t,method:_,navigate:n,replace:a,state:s,relative:f,preventScrollReset:m,viewTransition:b})};return d.createElement("form",{ref:x,method:w,action:y,onSubmit:o?c:C,...S,"data-discover":!v&&e==="render"?"true":void 0})});Ja.displayName="Form";function Ka(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cn(e){let t=d.useContext(ue);return D(t,Ka(e)),t}function Xa(e,{target:t,replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l}={}){let u=fn(),c=ae(),f=Ie(e,{relative:s});return d.useCallback(m=>{if(za(m,t)){m.preventDefault();let b=n!==void 0?n:Te(c)===Te(f);u(e,{replace:b,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[c,u,f,n,o,t,e,a,s,l])}var ei=0,ti=()=>`__${String(++ei)}__`;function ri(){let{router:e}=Cn("useSubmit"),{basename:t}=d.useContext(J),n=ya();return d.useCallback(async(o,a={})=>{let{action:s,method:l,encType:u,formData:c,body:f}=Oa(o,t);if(a.navigate===!1){let m=a.fetcherKey||ti();await e.fetch(m,n,a.action||s,{preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await e.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function ni(e,{relative:t}={}){let{basename:n}=d.useContext(J),o=d.useContext(K);D(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),s={...Ie(e||".",{relative:t})},l=ae();if(e==null){s.search=l.search;let u=new URLSearchParams(s.search),c=u.getAll("index");if(c.some(m=>m==="")){u.delete("index"),c.filter(b=>b).forEach(b=>u.append("index",b));let m=u.toString();s.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:ee([n,s.pathname])),Te(s)}function oi(e,{relative:t}={}){let n=d.useContext(un);D(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Cn("useViewTransitionState"),a=Ie(e,{relative:t});if(!n.isTransitioning)return!1;let s=te(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=te(n.nextLocation.pathname,o)||n.nextLocation.pathname;return Ve(a.pathname,l)!=null||Ve(a.pathname,s)!=null}function pe({width:e,height:t,fill:n}){return r.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:n,xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}const ai=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},ii=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},si=()=>{let e=[25,50,75,90],t=[];const n=()=>{const o=window.pageYOffset||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(o/a*100);e.forEach(l=>{s>=l&&!t.includes(l)&&(t.push(l),ii(l))})};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},kn=d.createContext(),Qe=()=>{const e=d.useContext(kn);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},li=({children:e})=>{const[t,n]=d.useState(()=>localStorage.getItem("theme")||"light");d.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),ai(t)},[t]);const s={theme:t,toggleTheme:()=>{n(l=>l==="light"?"dark":"light")},setSpecificTheme:l=>{n(l)},isLight:t==="light",isDark:t==="dark"};return r.jsx(kn.Provider,{value:s,children:e})},ci=q`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,di=q`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,ui=q`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,pi=p.div`
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
    animation: ${e=>e.initialFade?ui:"none"} 0.5s ease-in;
`,hi=p.div`
    animation: ${e=>e.isExiting?di:ci} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function fi({isVisible:e,initialFade:t=!1}){const{theme:n}=Qe(),[o,a]=d.useState(!1),[s,l]=d.useState(!1);return d.useEffect(()=>{!e&&!o&&(a(!0),setTimeout(()=>{l(!0)},800))},[e,o]),r.jsx(pi,{isVisible:e,fadeOutContainer:s,initialFade:t,children:r.jsx(hi,{isExiting:o,children:r.jsx(pe,{fill:"var(--AccentColor)",width:"100px",height:"118.23px"})})})}const zr=e=>{if(!e)return"";const n=(e.replace(/\/$/,"")||"/").split("/");return n.length>2&&(n[2]=n[2].toLowerCase()),n.join("/")},Lt=()=>"https://posterfy.space"+"/",mi=e=>{const t=Lt(),n=zr(e),o=zr(t),a=e.includes("://www."),s=e.startsWith("http://");return a||s||n!==o},gi=()=>{const e=window.location.href,t=Lt(),n=[];return mi(e)&&n.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:n.length===0,issues:n,currentUrl:e,canonicalUrl:t}},xi=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:n="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(d.useEffect(()=>{const a="https://posterfy.space",s=Lt(),l=a+"/albuns.png";document.title=e;const u=document.querySelector('meta[name="description"]');u&&u.setAttribute("content",t);const c=document.querySelector('meta[name="keywords"]');c&&c.setAttribute("content",n);let f=document.querySelector('link[rel="canonical"]');f?f.setAttribute("href",s):(f=document.createElement("link"),f.setAttribute("rel","canonical"),f.setAttribute("href",s),document.head.appendChild(f));const m=document.querySelector('meta[property="og:title"]');m&&m.setAttribute("content",e);const b=document.querySelector('meta[property="og:description"]');b&&b.setAttribute("content",t);const S=document.querySelector('meta[property="og:image"]');S&&S.setAttribute("content",l);const x=document.querySelector('meta[property="og:url"]');x&&x.setAttribute("content",s);const h=document.querySelector('meta[name="twitter:title"]');h&&h.setAttribute("content",e);const y=document.querySelector('meta[name="twitter:description"]');y&&y.setAttribute("content",t);const w=document.querySelector('meta[name="twitter:image"]');w&&w.setAttribute("content",l);const v={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:a+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},C=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');C&&C.remove();const g=document.createElement("script");g.type="application/ld+json",g.id="dynamic-structured-data",g.innerHTML=JSON.stringify(v),document.head.appendChild(g)},[e,t,n]),null),vi=()=>(d.useEffect(()=>{setTimeout(()=>{const n=[],o=document.querySelector('link[rel="canonical"]');(!o||!o.href)&&n.push("Missing canonical URL");const a=document.querySelector('meta[name="description"]');(!a||a.content.length<120)&&n.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&n.push("Title too short or missing");const s=gi();s.isValid||s.issues.forEach(c=>{n.push(`${c.type}: ${c.message}`)});const l=document.querySelector('meta[name="robots"]');return l&&l.content.includes("noindex")&&n.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||n.push("Missing structured data"),n},1e3),(()=>{const n=window.location.href;n.includes("www.")||n.startsWith("http://")})()},[]),null),bi=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},yi=(e,t="General",n="",o=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:n,value:o})},Mr=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},wi=(e,t="image",n="")=>{const o=n?`${n} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:o,file_type:t,album_name:e,artist_name:n})},Ci=(e,t="")=>{const n=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:n,album_name:e,artist_name:t})},Ar=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},ki=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},Ti=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},Si=(e,t="",n="",o="album_collection")=>{const a=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:a,album_name:e,artist_name:t,album_id:n,source:o})},ji=()=>(d.useEffect(()=>{bi()},[]),null),_i=()=>{d.useEffect(()=>{Mr(document.title,window.location.href);const e=new MutationObserver(n=>{n.forEach(o=>{o.type==="childList"&&o.target.nodeName==="TITLE"&&Mr(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function Tn(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function Ii(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Ri(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const Ei=q`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,zi=q`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,Mi=q`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,Ai=q`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Oi=p.div`
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
    animation: ${e=>e.isClosing?Ai:Mi} 0.3s ease-in-out forwards;
`,Li=p.div`
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
    animation: ${e=>e.isClosing?zi:Ei} 0.3s ease-in-out forwards;

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
`,Pi=p.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,$i=p.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,Hi=p(Ii)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Di=p.div`
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
`,Sn=p.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,Fi=p.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,Bi=p.button`
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
`,yt=p.button`
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
`,Or=p.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,Ni=p(Sn)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,Vi=p.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,Ui=p.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function Wi({title:e,paragraph:t,imageURL:n,postImageText:o,canClose:a,confirmText:s,onConfirm:l,cancelText:u,onCancel:c,isClosing:f}){return document.body.style.overflow="hidden",r.jsx(Oi,{isClosing:f,children:r.jsxs(Li,{isClosing:f,children:[r.jsxs(Pi,{children:[r.jsx(Vi,{children:r.jsx(pe,{width:25,height:25,fill:"var(--textColor)"})}),e&&r.jsx($i,{children:e}),a&&r.jsx(Di,{onClick:c,children:r.jsx(Hi,{})})]}),r.jsx(Ui,{}),t&&r.jsx(Sn,{children:t}),n&&r.jsx(Fi,{src:n}),o&&r.jsx(Ni,{children:o}),u&&s?r.jsxs(Or,{children:[r.jsx(Bi,{onClick:c,children:u}),r.jsx(yt,{onClick:l,children:s})]}):r.jsx(Or,{style:{justifyContent:"center"},children:u?r.jsx(yt,{onClick:c,children:u}):r.jsx(yt,{onClick:l,children:s})})]})})}const qi="/assets/models-4pKGew8b.png",Gi=d.createContext(),Qi=({children:e})=>{const{t,i18n:n}=N(),[o,a]=d.useState(null),[s,l]=d.useState(!1),[u,c]=d.useState(()=>{const j=localStorage.getItem("shownAlerts");return j?JSON.parse(j):{}}),f=()=>{const j={en:{title:"🚀 Pre-made models",paragraph:"Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.",confirmText:"Ok, I'll try!",postImageText:"The models can be chosen after selecting a album."},pt:{title:"🚀 Modelos pré-definidos",paragraph:"Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.",confirmText:"Ok, vou tentar!",postImageText:"Os modelos podem ser escolhidos após selecionar um álbum."},es:{title:"🚀 Modelos predefinidos",paragraph:"Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.",confirmText:"¡Ok, lo intentaré!",postImageText:"Los modelos se pueden elegir después de seleccionar un álbum."},zh:{title:"🚀 预制模型",paragraph:"预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。",confirmText:"好的，我试试！",postImageText:"可以在选择专辑后选择模型。"}},I=n.language||"en",R=j[I]||j.en;return{id:"default-premade-models",persistentId:"premade-models-intro",title:R.title,paragraph:R.paragraph,imageURL:qi,postImageText:R.postImageText,confirmText:R.confirmText,canClose:!0,type:"alert",limitDate:"2025-11-11T23:59:59.999Z"}},m=j=>u[j]===!0,b=j=>{if(!m(j)){const I={...u,[j]:!0};c(I),localStorage.setItem("shownAlerts",JSON.stringify(I))}};d.useEffect(()=>{const j=f();!m(j.persistentId)&&!o&&y(j)&&a(j)},[n.language,u,o]);const S=j=>{y(j)&&(a(j),l(!1))},x=j=>{y(j)&&S({...j,type:"alert"})},h=j=>{S({...j,type:"confirmation"})},y=j=>{if(!j.limitDate)return!0;const I=new Date(j.limitDate);return new Date<=I},w=j=>{if(!j.persistentId){y(j)&&x(j);return}!m(j.persistentId)&&y(j)&&S({...j,type:"alert"})},v=()=>{(o==null?void 0:o.type)==="alert"&&T(),!(!o||s)&&(l(!0),setTimeout(()=>{a(null),l(!1),document.body.style.overflow="unset"},300))},C=()=>{o!=null&&o.onConfirm&&o.onConfirm(),(o==null?void 0:o.type)==="alert"&&T(),v()},g=()=>{o!=null&&o.onCancel&&o.onCancel(),(o==null?void 0:o.type)==="alert"&&T(),v()},T=()=>{o!=null&&o.persistentId&&b(o.persistentId)},_={modal:o,showModal:S,showAlert:x,showConfirmation:h,showConditionalAlert:w,closeModal:v,isModalVisible:!!o,hasAlertBeenShown:m,markSpecificAlertAsShown:b};return r.jsxs(Gi.Provider,{value:_,children:[e,o&&r.jsx(Wi,{title:o.title,paragraph:o.paragraph,imageURL:o.imageURL,postImageText:o.postImageText,canClose:o.canClose,confirmText:o.confirmText,onConfirm:o.confirmText?C:null,cancelText:o.cancelText||null,onCancel:o.cancelText?g:o.canClose?v:null,isClosing:s})]})};function Ue(){return Ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ue.apply(this,arguments)}function Yi(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var Zi=["cdnSuffix","cdnUrl","countryCode","style","svg"],Ji="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Ki="svg",Xi=127397,jn=function(t){var n=t.cdnSuffix,o=n===void 0?Ki:n,a=t.cdnUrl,s=a===void 0?Ji:a,l=t.countryCode,u=t.style,c=t.svg,f=c===void 0?!1:c,m=Yi(t,Zi);if(typeof l!="string")return null;if(f){var b=""+s+l.toLowerCase()+"."+o;return d.createElement("img",Object.assign({},m,{src:b,style:Ue({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},u)}))}var S=l.toUpperCase().replace(/./g,function(x){return String.fromCodePoint(x.charCodeAt(0)+Xi)});return d.createElement("span",Object.assign({role:"img"},m,{style:Ue({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},u)}),S)};const es=p.div`
  position: relative;
`,ts=p.button`
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
`,rs=p.div`
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
`,ns=p.div`
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
`,os=p.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,as=p.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,Le=p.button`
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
`,Pe=p.span`
  margin-left: 8px;
`,$e=p(jn)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function is(){const[e,t]=d.useState(!1),[n,o]=d.useState(!1),{i18n:a}=N();d.useEffect(()=>{const f=localStorage.getItem("language");f&&a.changeLanguage(f);const m=b=>{b.target.closest(".language-selector")||s()};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[a]);const s=()=>{o(!0),setTimeout(()=>{t(!1),o(!1)},150)},l=f=>{f.stopPropagation(),e?s():t(!0)},u=f=>{a.changeLanguage(f),localStorage.setItem("language",f),s(),Ti(f)},c=()=>{switch(a.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return r.jsxs(es,{className:"language-selector",children:[r.jsx(ts,{onClick:l,"aria-label":"Select language",children:r.jsx(rs,{children:r.jsx(jn,{countryCode:c(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&r.jsxs(ns,{className:n?"closing":"",children:[r.jsx(os,{}),r.jsxs(as,{children:[r.jsxs(Le,{onClick:()=>u("pt"),children:[r.jsx($e,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(Pe,{children:"Português"})]}),r.jsxs(Le,{onClick:()=>u("en"),children:[r.jsx($e,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(Pe,{children:"English"})]}),r.jsxs(Le,{onClick:()=>u("es"),children:[r.jsx($e,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),r.jsx(Pe,{children:"Español"})]}),r.jsxs(Le,{onClick:()=>u("zh"),children:[r.jsx($e,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),r.jsx(Pe,{children:"中文"})]})]})]})]})}function ss(e){return L({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function ls(e){return L({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function cs(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function ds(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function _n(e){return L({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function In(e){return L({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Rn(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function us(e){return L({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function En(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function zn(e){return L({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function ps(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function hs(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Mn(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const fs=p.div`
  position: relative;
`,ms=p.button`
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
`,gs=p.div`
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
`,xs=p.div`
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
`,vs=p.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,bs=p.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,ys=p.button`
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
`,ws=p.div`
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
`,Cs=p.span`
  margin-left: 4px;
  font-weight: 500;
`;function ks(){const[e,t]=d.useState(!1),[n,o]=d.useState(!1),{theme:a,setSpecificTheme:s}=Qe(),l=[{id:"light",name:"Light",color:"#f0efeb",icon:r.jsx(Mn,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:r.jsx(En,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:r.jsx(_n,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:r.jsx(In,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:r.jsx(zn,{}),isLight:!1}],u=l.find(b=>b.id===a)||l[0];d.useEffect(()=>{const b=S=>{S.target.closest(".theme-selector")||c()};return document.addEventListener("click",b),()=>document.removeEventListener("click",b)},[]);const c=()=>{o(!0),setTimeout(()=>{t(!1),o(!1)},150)},f=b=>{b.stopPropagation(),e?c():t(!0)},m=b=>{s(b),c()};return r.jsxs(fs,{className:"theme-selector",children:[r.jsx(ms,{onClick:f,"aria-label":"Select theme",children:r.jsx(gs,{themeColor:u.color,isLight:u.isLight,children:u.icon})}),e&&r.jsxs(xs,{className:n?"closing":"",children:[r.jsx(vs,{}),r.jsx(bs,{children:l.map(b=>r.jsxs(ys,{onClick:()=>m(b.id),children:[r.jsx(ws,{className:"theme-preview",color:b.color,isLight:b.isLight,children:b.icon}),r.jsx(Cs,{children:b.name})]},b.id))})]})]})}function Ts(e){return L({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}function Ss(e){return L({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"},child:[]}]})(e)}const js=p.header`
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
`,_s=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Is=p.div`
  display: flex;
  align-items: center;
`,Rs=p.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,Es=p.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,zs=p.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,Ms=p.div`
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
`,As=p.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,Os=p.button`
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
`,Ls=p.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
`,Ps=p(Ss)`
  font-size: 1.5em;
  color: var(--textColor);
`,$s=p.p`
  font-size: 0.7em;
  font-weight: bolder;
`;function An(){const[e,t]=d.useState(!1),[n,o]=d.useState(!0),[a,s]=d.useState(0),[l,u]=d.useState(!1),c=".space";d.useEffect(()=>{const m=()=>{const b=window.scrollY;b<=10?(o(!0),t(!1)):(b<a?o(!0):o(!1),t(!0)),s(b)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[a]);const f=()=>{u(!0),setTimeout(()=>{u(!1)},3e3)};return r.jsxs(js,{scrolled:e,visible:n,children:[r.jsxs(_s,{children:[r.jsxs(Is,{children:[r.jsx(Ms,{children:r.jsx(pe,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),r.jsxs(Rs,{children:["Posterfy",r.jsx(Es,{children:c})]})]}),r.jsxs(As,{children:[r.jsx(is,{}),r.jsx(ks,{}),r.jsx(Os,{onClick:f,children:r.jsx(Ls,{children:l?r.jsx($s,{children:"Soon!"}):r.jsx(Ps,{})})})]})]}),r.jsx(zs,{scrolled:e})]})}const Hs=q`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Ds=q`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,Pt=q`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Fs=q`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,Bs=p.div`
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
`,Ns=p.div`
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
`,Vs=p.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${Pt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,Us=p.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${Hs} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${Ds} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,Ws=p.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,qs=p.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,Gs=p.div`
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
    animation: ${Fs} 6s linear infinite;
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
`,Qs=p.div`
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
`,Ys=p.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${Pt} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;p.h3`
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
`;const Zs=p.div`
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
`,Js=p.button`
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
`,Ks=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,Xs=p.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,el=p.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${Pt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,tl=p.a`
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
`;function rl(){const{t:e}=N(),{theme:t,setSpecificTheme:n}=Qe(),o=l=>{n(l)},a=[{id:"light",name:"Light",color:"#f0efeb",icon:r.jsx(Mn,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:r.jsx(En,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:r.jsx(us,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:r.jsx(_n,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:r.jsx(In,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:r.jsx(zn,{}),isLight:!1}],s=new Date().getFullYear();return r.jsxs(Bs,{children:[r.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:r.jsxs("footer",{children:[r.jsx("h4",{children:"Album Poster Generator Links"}),r.jsxs("nav",{children:[r.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),r.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),r.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),r.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),r.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),r.jsxs(Ns,{children:[r.jsxs(Vs,{children:[r.jsxs(Us,{children:[r.jsx(qs,{className:"icon-shadow"}),r.jsx(Ws,{className:"icon-main",children:r.jsx(pe,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),r.jsx(Gs,{children:r.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",r.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),r.jsxs(Qs,{children:[r.jsx(Rn,{})," © ",s," Posterfy. ",e("AllRights","All rights reserved.")]})]}),r.jsx(Ys,{children:r.jsx(Zs,{children:a.map(l=>r.jsxs(Ks,{children:[r.jsx(Js,{color:l.color,active:t===l.id,themeId:l.id,onClick:()=>o(l.id),"aria-label":`${e("SwitchTo","Switch to")} ${l.name} ${e("Theme").toLowerCase()}`,children:l.icon},l.id),r.jsx(Xs,{active:t===l.id,children:l.name})]},l.id))})}),r.jsx(el,{children:r.jsxs(tl,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[r.jsx(ss,{})," ",e("ViewGitHub","GitHub")]})})]})]})}function Lr({showNavbar:e=!0,showFooter:t=!0}){return r.jsxs(r.Fragment,{children:[e&&r.jsx(An,{}),r.jsx(Ta,{}),t&&r.jsx(rl,{})]})}function nl(e){return L({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function ol(e){return L({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const al="/assets/Posterfy%20-%20KTT%20ZOO-EGMOdvc1.png",il="/assets/Posterfy%20-%20JACKBOYS%202-5mh4sLb1.png",sl="/assets/Posterfy%20-%20SOS-BR7qvD22.png",ll="/assets/Posterfy%20-%20F-1%20Trillion-D1gH0Ecz.png",cl="/assets/Posterfy%20-%20Nevermind-DmVmVnus.png",dl=[{id:1,coverImage:al,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b2732715c405b0b118516627add4",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/15/e0/31/15e031a3-d975-91a7-5dc4-31dda64d1f52/8445162931182.jpg",useUncompressed:!0,albumName:"KTT ZOO",artistsName:"Sain",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"200",marginSide:160,marginCover:0,marginBackground:"5",titleRelease:"Release date",releaseDate:"2023-07-07",titleRuntime:"Runtime",runtime:"23min 33s",backgroundColor:"#638f98",textColor:"#0c191d",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Aquelas Coisas Mais Pra Frente
2. Demanda
3. Relíquia Do Boom Bap
4. Lucro
5. Skit Visão
6. Ebi no Tempura
7. Iori Incorporado
8. Noturno KGL
9. Ignorante
10. Momentos`,color1:"#0c191d",color2:"#3381ae",color3:"#aab8b4",albumID:"7lJibQ9XRhBDUIWgkP4wZm",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:2,coverImage:il,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273b547c9858fee61547e6b0fd8",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music221/v4/bb/00/09/bb0009b4-37e3-b924-b703-eb3d3a7f362d/196873402772.jpg",useUncompressed:!0,albumName:"JACKBOYS 2",artistsName:"JACKBOYS, Travis Scott",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"50",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2025-07-13",titleRuntime:"Runtime",runtime:"55min 50s",backgroundColor:"#b4aba6",textColor:"#79736e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. JB2 RADIO
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
17. FLORIDA FLOW`,color1:"#7a736f",color2:"#938c8c",color3:"#94948c",albumID:"32lGAqeVkdJxEj2iv2Q01B",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:3,coverImage:sl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:ll,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27388208159b1b3c69eefdeb2e0",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg",useUncompressed:!1,albumName:"F-1 Trillion",artistsName:"Post Malone",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:200,marginSide:160,marginCover:-500,marginBackground:-700,titleRelease:"Release date",releaseDate:"2024-08-15",titleRuntime:"Runtime",runtime:"57min 58s",backgroundColor:"#cdd1d6",textColor:"#3c484c",useWatermark:!0,useFade:!0,showTracklist:!1,tracklist:`1. Wrong Ones (Feat. Tim McGraw)
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
18. Yours`,color1:"#86939b",color2:"#6a5f59",color3:"#81735d",albumID:"4BbsHmXEghoPPevQjPnHXx",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:5,coverImage:cl,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",uncompressedAlbumCover:"",useUncompressed:!1,albumName:"",artistsName:"",titleSize:"200",artistsSize:"110",tracksSize:"70",marginTop:"-200",marginSide:"115",marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"1991-09-26",titleRuntime:"Runtime",runtime:"49min 15s",backgroundColor:"#0064b0",textColor:"#01010e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Smells Like Teen Spirit
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
13. Endless, Nameless`,color1:"#a6b6ba",color2:"#43bdd1",color3:"#052a5e",albumID:"2UJcKiJxNryhL050F5Z1Fk",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}}],ul=p.div`
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
`,pl=p.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:n,hoveredIndex:o,isMobile:a}=e;if(a)return"scale(1)";let s="scale(0.95)";if(t)s="scale(1.08) translateY(-8px)";else if(o!==null){let l=0;switch(o){case 0:n>0&&(l=70);break;case 1:n>=2&&(l=70);break;case 2:l=0;break;case 3:n<=2&&(l=-70);break;case 4:n<4&&(l=-70);break}l!==0&&(s=`scale(0.95) translateX(${l}px)`)}return s}};
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
`,hl=p.div`
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
`,fl=p.div`
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
`,ml=p.div`
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
`,gl=p.button`
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
`,xl=p.button`
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
`,vl=({onRecreate:e})=>{const{t}=N(),[n,o]=d.useState(null),[a,s]=d.useState(!1),[l,u]=d.useState(!1),[c,f]=d.useState(null),[m,b]=d.useState(null);d.useEffect(()=>{const y=()=>{s(window.innerWidth<=770),u(window.innerWidth>480&&window.innerWidth<=1200)};return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const S=(y,w)=>{f(y),b(w),document.body.style.overflow="hidden"},x=()=>{f(null),document.body.style.overflow="auto"},h=()=>{f(null),e(m),document.body.style.overflow="auto"};return r.jsxs(r.Fragment,{children:[r.jsx(ul,{children:dl.map((y,w)=>r.jsx(pl,{index:w,isHovered:n===w,hoveredIndex:n,otherIsHovered:n!==null,isMobile:a,isTablet:l,onMouseEnter:()=>o(w),onMouseLeave:()=>o(null),onClick:()=>S(y.coverImage||"/placeholder.svg",y.JSONConfig),children:r.jsx("img",{src:y.coverImage||"/placeholder.svg",alt:`${y.artist} - ${y.title}`})},y.id))}),c&&r.jsx(hl,{onClick:x,children:r.jsxs(fl,{onClick:y=>y.stopPropagation(),children:[r.jsxs(ml,{children:[r.jsx(gl,{onClick:x,children:"×"}),r.jsx(xl,{onClick:h,children:t("RecreatePoster")})]}),r.jsx("img",{src:c,alt:"Album cover"})]})})]})},bl=p.div`
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
`,yl=({onRecreate:e})=>r.jsx(bl,{children:r.jsx(vl,{onRecreate:e})}),wl=p.div`
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
`,Cl=p.div`
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
`,kl=p.h1`
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
`,Pr=p.p`
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
`,Tl=p.div`
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
`,Sl=`
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
`,jl=p(nl)`
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
    ${Sl}
`;function _l({showAnimation:e=!1,onRecreate:t}){const{t:n}=N(),{theme:o}=Qe(),[a,s]=d.useState(!1);d.useEffect(()=>{if(e){const u=setTimeout(()=>{s(!0)},50);return()=>clearTimeout(u)}},[e]);const l=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx(wl,{children:r.jsxs(Cl,{children:[r.jsx(kl,{visible:a,animationDelay:200,children:"Posterfy"}),r.jsx(Pr,{visible:a,animationDelay:400,children:n("paragraphHero1")}),r.jsx(Pr,{visible:a,animationDelay:600,children:n("paragraphHero2")}),r.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[r.jsx("h2",{children:"Free Album Poster Generator"}),r.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),r.jsx("h3",{children:"Features:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Free album poster maker"}),r.jsx("li",{children:"Spotify integration"}),r.jsx("li",{children:"Custom poster design"}),r.jsx("li",{children:"High-quality downloads"}),r.jsx("li",{children:"Multiple format options"}),r.jsx("li",{children:"Professional templates"})]})]}),r.jsx(Tl,{visible:a,animationDelay:800,children:r.jsx(pe,{fill:o==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),r.jsx(jl,{visible:a,animationDelay:1e3,onClick:l})]})}),r.jsx(yl,{onRecreate:t})]})}const Il=p.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,Rl=p.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function Re({text:e,type:t}){return r.jsx(r.Fragment,{children:t==1?r.jsx(Il,{children:e}):r.jsx(Rl,{children:e})})}const El=p.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,zl=p.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Ml=p.p`
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
`,$r=p.div`
    display: flex;
`;function $t({title:e,paragraph:t}){return r.jsxs(El,{children:[r.jsx($r,{children:r.jsx(zl,{children:e})}),r.jsx($r,{children:r.jsx(Ml,{children:t})})]})}function Al(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Ol(e){return L({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Ll=p.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,Pl=p(Al)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,$l=p.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,Hl=p.hr`
    opacity: 0.15;
    margin: 5px;
`,Dl=p.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,Fl=p.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function ye({q:e,a:t}){const[n,o]=d.useState(!1);function a(){o(!n)}return r.jsxs(r.Fragment,{children:[r.jsxs(Ll,{onClick:a,children:[r.jsx(Pl,{showA:n}),r.jsx($l,{children:e})]}),r.jsx(Hl,{}),r.jsx(Dl,{showA:n,children:r.jsx(Fl,{showA:n,children:t})})]})}const Bl=p.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,Nl=p.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Vl(){const{t:e}=N();return r.jsxs(Bl,{id:"faq",children:[r.jsx(Re,{text:"FAQ",type:1}),r.jsxs(Nl,{children:[r.jsx(ye,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),r.jsx(ye,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),r.jsx(ye,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),r.jsx(ye,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),r.jsx(ye,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const Ul=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:n="var(--PosterShare-shadeFrames)",darkFrames:o="var(--PosterShare-darkFrames)",posterColor:a="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>r.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),r.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:n}),r.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:o}),r.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:n}),r.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:o}),r.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:n}),r.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:n}),r.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:n}),r.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:o}),r.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:n}),r.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:n}),r.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:n}),r.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:n}),r.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:n}),r.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:o}),r.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:n}),r.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:n}),r.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:a}),r.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:a}),r.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:a}),r.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:a}),r.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:a}),r.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),Wl=p.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,ql=p.div`
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
`,Gl=p.p`
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
`,Ql=p.button`
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
`;function Yl(){const{t:e}=N();return r.jsxs(Wl,{id:"share",children:[r.jsx(Re,{text:e("Share"),type:1}),r.jsx($t,{title:e("ShareTitle")}),r.jsx(ql,{children:r.jsx(Ul,{width:"100%"})}),r.jsx(Gl,{children:e("ShareDescription")}),r.jsx(Ql,{children:e("ComingSoon")})]})}const Zl=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:o="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[r.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),r.jsx("path",{fill:n,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),r.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),r.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),r.jsx("path",{fill:o,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),r.jsx("path",{fill:o,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),r.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),r.jsx("path",{fill:o,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),r.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),r.jsx("path",{fill:o,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),r.jsx("path",{fill:o,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),r.jsx("g",{fill:n,opacity:"0.3",children:r.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),r.jsxs("g",{fill:t,opacity:"0.2",children:[r.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),r.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),r.jsx("path",{fill:n,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),r.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),r.jsx("path",{fill:o,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),r.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),r.jsx("path",{fill:n,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),r.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),r.jsx("path",{fill:n,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),r.jsx("path",{fill:o,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),r.jsx("path",{fill:n,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),r.jsx("path",{fill:n,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),r.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),r.jsx("path",{fill:o,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),r.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),r.jsx("path",{fill:o,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),r.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),r.jsx("path",{fill:o,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),r.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),r.jsx("path",{fill:o,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),r.jsx("path",{fill:n,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),r.jsx("path",{fill:a,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),r.jsx("path",{fill:a,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),r.jsx("path",{fill:o,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),r.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),r.jsx("path",{fill:o,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),r.jsx("g",{clipPath:"url(#clip0_1_72)",children:r.jsx("path",{fill:a,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_1_72",children:r.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Jl=p.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Kl=p.div`
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
`,Xl=p.p`
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
`,e1=p.button`
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
`;function t1(){const{t:e}=N();return r.jsxs(Jl,{id:"share",children:[r.jsx(Re,{text:e("Community"),type:1}),r.jsx($t,{title:e("CommunityTitle")}),r.jsx(Kl,{children:r.jsx(Zl,{width:"100%"})}),r.jsx(Xl,{children:e("CommunityDescription")}),r.jsx(e1,{children:e("ComingSoon")})]})}const Hr=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],r1=p.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,n1=p.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,o1=p.div`
    display: flex;
    align-items: center;
    position: relative;
`,a1=p.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,i1=p(Rn)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,s1=p.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,l1=p.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,c1=p.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,d1=p.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,u1=p.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,p1=p.a`
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
`;function h1(){var s,l,u;const{i18n:e}=N(),{t}=N(),n=((s=e.language)==null?void 0:s.split("-")[0])||"en",o=Hr.filter(c=>c.key!=="contribute_area"),a=Hr.find(c=>c.key==="contribute_area");return r.jsxs(r1,{id:"thanks",children:[r.jsx(Re,{text:t("Thanks"),type:1}),o.map((c,f)=>r.jsxs(n1,{children:[r.jsxs(o1,{children:[r.jsx(a1,{className:"circle"}),r.jsx(i1,{className:"heart"}),r.jsx(s1,{tabIndex:0,role:"button",onClick:()=>window.open(c.url,"_blank","noopener,noreferrer"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&window.open(c.url,"_blank","noopener,noreferrer")},onMouseEnter:m=>{const b=m.target.parentNode;b.querySelector(".circle").style.opacity=0,b.querySelector(".heart").style.opacity=1},onMouseLeave:m=>{const b=m.target.parentNode;b.querySelector(".circle").style.opacity=.8,b.querySelector(".heart").style.opacity=0},children:c.title[n]||c.title.en})]}),r.jsx(l1,{children:c.text[n]||c.text.en})]},c.key)),a&&r.jsxs(c1,{children:[r.jsx(d1,{children:a.title[n]||a.title.en}),r.jsx(u1,{children:a.text[n]||a.text.en}),r.jsx(p1,{href:a.url,target:"_blank",rel:"noopener noreferrer",children:((l=a.button)==null?void 0:l[n])||((u=a.button)==null?void 0:u.en)||"Github"})]})]})}const f1=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,m1=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,g1=p.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function X({title:e,value:t,onChange:n}){return r.jsxs(f1,{children:[r.jsx(m1,{children:e}),r.jsx(g1,{placeholder:e,value:t,onChange:n})]})}const x1=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,v1=p.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,b1=p.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Dr({title:e,value:t,onChangeTitle:n,onChangeDate:o}){return r.jsxs(x1,{children:[r.jsx(v1,{placeholder:e,value:e,onChange:n}),r.jsx(b1,{placeholder:e,value:t,onChange:o})]})}const y1=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,w1=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,C1=p.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,k1=p.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,T1=p.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function we({title:e,value:t,onClick:n}){return r.jsxs(y1,{children:[r.jsx(w1,{children:e}),r.jsxs(C1,{onClick:n,children:[r.jsx(k1,{style:{backgroundColor:t}}),r.jsx(T1,{children:t})]})]})}function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function On(e,t){if(e==null)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t.indexOf(n=s[o])>=0||(a[n]=e[n]);return a}function jt(e){var t=d.useRef(e),n=d.useRef(function(o){t.current&&t.current(o)});return t.current=e,n.current}var Se=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},ke=function(e){return"touches"in e},_t=function(e){return e&&e.ownerDocument.defaultView||self},Fr=function(e,t,n){var o=e.getBoundingClientRect(),a=ke(t)?function(s,l){for(var u=0;u<s.length;u++)if(s[u].identifier===l)return s[u];return s[0]}(t.touches,n):t;return{left:Se((a.pageX-(o.left+_t(e).pageXOffset))/o.width),top:Se((a.pageY-(o.top+_t(e).pageYOffset))/o.height)}},Br=function(e){!ke(e)&&e.preventDefault()},Ln=W.memo(function(e){var t=e.onMove,n=e.onKey,o=On(e,["onMove","onKey"]),a=d.useRef(null),s=jt(t),l=jt(n),u=d.useRef(null),c=d.useRef(!1),f=d.useMemo(function(){var x=function(w){Br(w),(ke(w)?w.touches.length>0:w.buttons>0)&&a.current?s(Fr(a.current,w,u.current)):y(!1)},h=function(){return y(!1)};function y(w){var v=c.current,C=_t(a.current),g=w?C.addEventListener:C.removeEventListener;g(v?"touchmove":"mousemove",x),g(v?"touchend":"mouseup",h)}return[function(w){var v=w.nativeEvent,C=a.current;if(C&&(Br(v),!function(T,_){return _&&!ke(T)}(v,c.current)&&C)){if(ke(v)){c.current=!0;var g=v.changedTouches||[];g.length&&(u.current=g[0].identifier)}C.focus(),s(Fr(C,v,u.current)),y(!0)}},function(w){var v=w.which||w.keyCode;v<37||v>40||(w.preventDefault(),l({left:v===39?.05:v===37?-.05:0,top:v===40?.05:v===38?-.05:0}))},y]},[l,s]),m=f[0],b=f[1],S=f[2];return d.useEffect(function(){return S},[S]),W.createElement("div",Ye({},o,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:a,onKeyDown:b,tabIndex:0,role:"slider"}))}),Ht=function(e){return e.filter(Boolean).join(" ")},Pn=function(e){var t=e.color,n=e.left,o=e.top,a=o===void 0?.5:o,s=Ht(["react-colorful__pointer",e.className]);return W.createElement("div",{className:s,style:{top:100*a+"%",left:100*n+"%"}},W.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},U=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},S1=function(e){return E1(It(e))},It=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?U(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?U(parseInt(e.substring(6,8),16)/255,2):1}},j1=function(e){return R1(I1(e))},_1=function(e){var t=e.s,n=e.v,o=e.a,a=(200-t)*n/100;return{h:U(e.h),s:U(a>0&&a<200?t*n/100/(a<=100?a:200-a)*100:0),l:U(a/2),a:U(o,2)}},Rt=function(e){var t=_1(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},I1=function(e){var t=e.h,n=e.s,o=e.v,a=e.a;t=t/360*6,n/=100,o/=100;var s=Math.floor(t),l=o*(1-n),u=o*(1-(t-s)*n),c=o*(1-(1-t+s)*n),f=s%6;return{r:U(255*[o,u,l,l,c,o][f]),g:U(255*[c,o,o,u,l,l][f]),b:U(255*[l,l,c,o,o,u][f]),a:U(a,2)}},He=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},R1=function(e){var t=e.r,n=e.g,o=e.b,a=e.a,s=a<1?He(U(255*a)):"";return"#"+He(t)+He(n)+He(o)+s},E1=function(e){var t=e.r,n=e.g,o=e.b,a=e.a,s=Math.max(t,n,o),l=s-Math.min(t,n,o),u=l?s===t?(n-o)/l:s===n?2+(o-t)/l:4+(t-n)/l:0;return{h:U(60*(u<0?u+6:u)),s:U(s?l/s*100:0),v:U(s/255*100),a}},z1=W.memo(function(e){var t=e.hue,n=e.onChange,o=Ht(["react-colorful__hue",e.className]);return W.createElement("div",{className:o},W.createElement(Ln,{onMove:function(a){n({h:360*a.left})},onKey:function(a){n({h:Se(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":U(t),"aria-valuemax":"360","aria-valuemin":"0"},W.createElement(Pn,{className:"react-colorful__hue-pointer",left:t/360,color:Rt({h:t,s:100,v:100,a:1})})))}),M1=W.memo(function(e){var t=e.hsva,n=e.onChange,o={backgroundColor:Rt({h:t.h,s:100,v:100,a:1})};return W.createElement("div",{className:"react-colorful__saturation",style:o},W.createElement(Ln,{onMove:function(a){n({s:100*a.left,v:100-100*a.top})},onKey:function(a){n({s:Se(t.s+100*a.left,0,100),v:Se(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+U(t.s)+"%, Brightness "+U(t.v)+"%"},W.createElement(Pn,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:Rt(t)})))}),$n=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},A1=function(e,t){return e.toLowerCase()===t.toLowerCase()||$n(It(e),It(t))};function O1(e,t,n){var o=jt(n),a=d.useState(function(){return e.toHsva(t)}),s=a[0],l=a[1],u=d.useRef({color:t,hsva:s});d.useEffect(function(){if(!e.equal(t,u.current.color)){var f=e.toHsva(t);u.current={hsva:f,color:t},l(f)}},[t,e]),d.useEffect(function(){var f;$n(s,u.current.hsva)||e.equal(f=e.fromHsva(s),u.current.color)||(u.current={hsva:s,color:f},o(f))},[s,e,o]);var c=d.useCallback(function(f){l(function(m){return Object.assign({},m,f)})},[]);return[s,c]}var L1=typeof window<"u"?d.useLayoutEffect:d.useEffect,P1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Nr=new Map,$1=function(e){L1(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Nr.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Nr.set(t,n);var o=P1();o&&n.setAttribute("nonce",o),t.head.appendChild(n)}},[])},H1=function(e){var t=e.className,n=e.colorModel,o=e.color,a=o===void 0?n.defaultColor:o,s=e.onChange,l=On(e,["className","colorModel","color","onChange"]),u=d.useRef(null);$1(u);var c=O1(n,a,s),f=c[0],m=c[1],b=Ht(["react-colorful",t]);return W.createElement("div",Ye({},l,{ref:u,className:b}),W.createElement(M1,{hsva:f,onChange:m}),W.createElement(z1,{hue:f.h,onChange:m,className:"react-colorful__last-control"}))},D1={defaultColor:"000",toHsva:S1,fromHsva:function(e){return j1({h:e.h,s:e.s,v:e.v,a:1})},equal:A1},F1=function(e){return W.createElement(H1,Ye({},e,{colorModel:D1}))};const B1=p.div`
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
`,N1=p(F1)`
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
`,wt=p.div`
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
`,V1=p.div`
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
`,U1=p.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,W1=p.input`
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
`,q1=p(ds)`
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
`,G1=p(ps)`
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
`,Q1=p(Ts)`
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
`,Y1=p(cs)`
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
`,Z1=p.img`
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
`;function J1({DefaultColor:e,image:t,predefinedColors:n,position:o,onDone:a,onClose:s}){const[l,u]=d.useState(e),[c,f]=d.useState(!1),[m,b]=d.useState(null),S=d.useRef(null),x=d.useRef(null);function h(){f(!c)}function y(g){u(g.target.value===""?"#":g.target.value)}function w(g){const T=S.current,j=x.current.getBoundingClientRect(),I=T.getContext("2d"),R=Math.floor(g.clientX-j.left),z=Math.floor(g.clientY-j.top),M=`#${[...I.getImageData(R,z,1,1).data].slice(0,3).map(A=>A.toString(16).padStart(2,"0")).join("")}`;u(M),h()}function v(g){const T=S.current,j=x.current.getBoundingClientRect(),I=Math.floor(g.clientX-j.left),R=Math.floor(g.clientY-j.top);if(T){const z=T.getContext("2d");try{const M=`#${[...z.getImageData(I,R,1,1).data].slice(0,3).map(A=>A.toString(16).padStart(2,"0")).join("")}`;b(M)}catch{b(null)}}}function C(){b(null)}return r.jsxs(B1,{style:{position:"absolute",top:o.top,left:o.left,zIndex:1e3},children:[r.jsx("canvas",{ref:S,style:{display:"none"}}),c?r.jsx(Z1,{ref:x,crossOrigin:"anonymous",draggable:"false",src:t,onClick:w,onMouseMove:v,onMouseLeave:C,onLoad:()=>{const g=S.current,T=g.getContext("2d"),_=x.current;g.width=_.width,g.height=_.height,T.drawImage(_,0,0,_.width,_.height)},style:m?{borderColor:m}:{}}):r.jsx(N1,{color:l,onChange:u}),r.jsx(wt,{children:n.map(g=>r.jsx(V1,{style:{backgroundColor:g},onClick:()=>u(g)},g))}),r.jsxs(wt,{children:[r.jsx(U1,{children:"Hex"}),r.jsx(W1,{value:l,onChange:y})]}),r.jsxs(wt,{children:[c?r.jsx(G1,{onClick:h}):r.jsx(q1,{onClick:h}),r.jsx(Q1,{onClick:s}),r.jsx(Y1,{onClick:()=>{a(l),ki(l)}})]})]})}const K1=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,X1=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,ec=p.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,tc=p.input`
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
`,rc=p.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function Ct({title:e,text:t,value:n,onChange:o}){const a=()=>o(!n);return r.jsxs(K1,{children:[r.jsx(X1,{children:e}),r.jsxs(ec,{onClick:a,children:[r.jsx(tc,{checked:n,readOnly:!0,type:"checkbox"}),r.jsx(rc,{active:n,children:t})]})]})}function nc(e){return L({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function oc(e){return L({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const ac=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,ic=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,sc=p.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,lc=p.input`
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
`,cc=p.p`
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
`,dc=p(nc)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function uc({title:e,text:t,onChange:n}){const o=d.useRef(),a=()=>{o.current.click()},s=l=>{const u=l.target.files[0];t=u.name,u&&n(u)};return r.jsxs(ac,{onClick:a,children:[r.jsx(ic,{children:e}),r.jsxs(sc,{children:[r.jsx(dc,{}),r.jsx(lc,{ref:o,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:s}),r.jsx(cc,{active:!0,children:t})]})]})}const pc=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,hc=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,fc=p.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,mc=p.input`
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
`,gc=p.p`
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
`,xc=p(oc)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function vc({title:e,text:t,onChange:n}){const o=d.useRef(),a=()=>{o.current.click()},s=l=>{const u=l.target.files[0];t=u.name,u&&n(u)};return r.jsxs(pc,{onClick:a,children:[r.jsx(hc,{children:e}),r.jsxs(fc,{children:[r.jsx(xc,{}),r.jsx(mc,{ref:o,type:"file",accept:".ttf,.otf",onChange:s}),r.jsx(gc,{active:!0,children:t})]})]})}function Hn(e){return L({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const bc=p.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,yc=p.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,wc=p.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,Cc=p(Hn)`
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
`;function Dn(){const{t:e}=N();return r.jsxs(bc,{children:[r.jsx(Cc,{}),r.jsx(yc,{children:e("Loading")}),r.jsx(wc,{children:e("LoadingText")})]})}var Fn={},Ze={},Bn={exports:{}},kc="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Tc=kc,Sc=Tc;function Nn(){}function Vn(){}Vn.resetWarningCache=Nn;var jc=function(){function e(o,a,s,l,u,c){if(c!==Sc){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vn,resetWarningCache:Nn};return n.PropTypes=n,n};Bn.exports=jc();var Un=Bn.exports,Dt={},Je={},Wn={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(So,function(){var n=function(c,f){return c<f?-1:c>f?1:0},o=function(c){return c.reduce(function(f,m){return f+m},0)},a=function(){function c(m){this.colors=m}var f=c.prototype;return f.palette=function(){return this.colors},f.map=function(m){return m},c}(),s=function(){function c(x,h,y){return(x<<10)+(h<<5)+y}function f(x){var h=[],y=!1;function w(){h.sort(x),y=!0}return{push:function(v){h.push(v),y=!1},peek:function(v){return y||w(),v===void 0&&(v=h.length-1),h[v]},pop:function(){return y||w(),h.pop()},size:function(){return h.length},map:function(v){return h.map(v)},debug:function(){return y||w(),h}}}function m(x,h,y,w,v,C,g){var T=this;T.r1=x,T.r2=h,T.g1=y,T.g2=w,T.b1=v,T.b2=C,T.histo=g}function b(){this.vboxes=new f(function(x,h){return n(x.vbox.count()*x.vbox.volume(),h.vbox.count()*h.vbox.volume())})}function S(x,h){if(h.count()){var y=h.r2-h.r1+1,w=h.g2-h.g1+1,v=Math.max.apply(null,[y,w,h.b2-h.b1+1]);if(h.count()==1)return[h.copy()];var C,g,T,_,j=0,I=[],R=[];if(v==y)for(C=h.r1;C<=h.r2;C++){for(_=0,g=h.g1;g<=h.g2;g++)for(T=h.b1;T<=h.b2;T++)_+=x[c(C,g,T)]||0;I[C]=j+=_}else if(v==w)for(C=h.g1;C<=h.g2;C++){for(_=0,g=h.r1;g<=h.r2;g++)for(T=h.b1;T<=h.b2;T++)_+=x[c(g,C,T)]||0;I[C]=j+=_}else for(C=h.b1;C<=h.b2;C++){for(_=0,g=h.r1;g<=h.r2;g++)for(T=h.g1;T<=h.g2;T++)_+=x[c(g,T,C)]||0;I[C]=j+=_}return I.forEach(function(z,E){R[E]=j-z}),function(z){var E,M,A,P,O,B=z+"1",F=z+"2",G=0;for(C=h[B];C<=h[F];C++)if(I[C]>j/2){for(A=h.copy(),P=h.copy(),O=(E=C-h[B])<=(M=h[F]-C)?Math.min(h[F]-1,~~(C+M/2)):Math.max(h[B],~~(C-1-E/2));!I[O];)O++;for(G=R[O];!G&&I[O-1];)G=R[--O];return A[F]=O,P[B]=A[F]+1,[A,P]}}(v==y?"r":v==w?"g":"b")}}return m.prototype={volume:function(x){var h=this;return h._volume&&!x||(h._volume=(h.r2-h.r1+1)*(h.g2-h.g1+1)*(h.b2-h.b1+1)),h._volume},count:function(x){var h=this,y=h.histo;if(!h._count_set||x){var w,v,C,g=0;for(w=h.r1;w<=h.r2;w++)for(v=h.g1;v<=h.g2;v++)for(C=h.b1;C<=h.b2;C++)g+=y[c(w,v,C)]||0;h._count=g,h._count_set=!0}return h._count},copy:function(){var x=this;return new m(x.r1,x.r2,x.g1,x.g2,x.b1,x.b2,x.histo)},avg:function(x){var h=this,y=h.histo;if(!h._avg||x){var w,v,C,g,T=0,_=0,j=0,I=0;if(h.r1===h.r2&&h.g1===h.g2&&h.b1===h.b2)h._avg=[h.r1<<3,h.g1<<3,h.b1<<3];else{for(v=h.r1;v<=h.r2;v++)for(C=h.g1;C<=h.g2;C++)for(g=h.b1;g<=h.b2;g++)T+=w=y[c(v,C,g)]||0,_+=w*(v+.5)*8,j+=w*(C+.5)*8,I+=w*(g+.5)*8;h._avg=T?[~~(_/T),~~(j/T),~~(I/T)]:[~~(8*(h.r1+h.r2+1)/2),~~(8*(h.g1+h.g2+1)/2),~~(8*(h.b1+h.b2+1)/2)]}}return h._avg},contains:function(x){var h=this,y=x[0]>>3;return gval=x[1]>>3,bval=x[2]>>3,y>=h.r1&&y<=h.r2&&gval>=h.g1&&gval<=h.g2&&bval>=h.b1&&bval<=h.b2}},b.prototype={push:function(x){this.vboxes.push({vbox:x,color:x.avg()})},palette:function(){return this.vboxes.map(function(x){return x.color})},size:function(){return this.vboxes.size()},map:function(x){for(var h=this.vboxes,y=0;y<h.size();y++)if(h.peek(y).vbox.contains(x))return h.peek(y).color;return this.nearest(x)},nearest:function(x){for(var h,y,w,v=this.vboxes,C=0;C<v.size();C++)((y=Math.sqrt(Math.pow(x[0]-v.peek(C).color[0],2)+Math.pow(x[1]-v.peek(C).color[1],2)+Math.pow(x[2]-v.peek(C).color[2],2)))<h||h===void 0)&&(h=y,w=v.peek(C).color);return w},forcebw:function(){var x=this.vboxes;x.sort(function(v,C){return n(o(v.color),o(C.color))});var h=x[0].color;h[0]<5&&h[1]<5&&h[2]<5&&(x[0].color=[0,0,0]);var y=x.length-1,w=x[y].color;w[0]>251&&w[1]>251&&w[2]>251&&(x[y].color=[255,255,255])}},{quantize:function(x,h){if(!Number.isInteger(h)||h<1||h>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!x.length||h<2||h>256||!x.length||h<2||h>256)return!1;for(var y=[],w=new Set,v=0;v<x.length;v++){var C=x[v],g=C.join(",");w.has(g)||(w.add(g),y.push(C))}if(y.length<=h)return new a(y);var T=function(E){var M,A=new Array(32768);return E.forEach(function(P){M=c(P[0]>>3,P[1]>>3,P[2]>>3),A[M]=(A[M]||0)+1}),A}(x);T.forEach(function(){});var _=function(E,M){var A,P,O,B=1e6,F=0,G=1e6,re=0,ne=1e6,he=0;return E.forEach(function(fe){(A=fe[0]>>3)<B?B=A:A>F&&(F=A),(P=fe[1]>>3)<G?G=P:P>re&&(re=P),(O=fe[2]>>3)<ne?ne=O:O>he&&(he=O)}),new m(B,F,G,re,ne,he,M)}(x,T),j=new f(function(E,M){return n(E.count(),M.count())});function I(E,M){for(var A,P=E.size(),O=0;O<1e3;){if(P>=M||O++>1e3)return;if((A=E.pop()).count()){var B=S(T,A),F=B[0],G=B[1];if(!F)return;E.push(F),G&&(E.push(G),P++)}else E.push(A),O++}}j.push(_),I(j,.75*h);for(var R=new f(function(E,M){return n(E.count()*E.volume(),M.count()*M.volume())});j.size();)R.push(j.pop());I(R,h);for(var z=new b;R.size();)z.push(R.pop());return z}}}().quantize,l=function(c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=c.naturalWidth,this.height=this.canvas.height=c.naturalHeight,this.context.drawImage(c,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var u=function(){};return u.prototype.getColor=function(c,f){return f===void 0&&(f=10),this.getPalette(c,5,f)[0]},u.prototype.getPalette=function(c,f,m){var b=function(y){var w=y.colorCount,v=y.quality;if(w!==void 0&&Number.isInteger(w)){if(w===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");w=Math.max(w,2),w=Math.min(w,20)}else w=10;return(v===void 0||!Number.isInteger(v)||v<1)&&(v=10),{colorCount:w,quality:v}}({colorCount:f,quality:m}),S=new l(c),x=function(y,w,v){for(var C,g,T,_,j,I=y,R=[],z=0;z<w;z+=v)g=I[0+(C=4*z)],T=I[C+1],_=I[C+2],((j=I[C+3])===void 0||j>=125)&&(g>250&&T>250&&_>250||R.push([g,T,_]));return R}(S.getImageData().data,S.width*S.height,b.quality),h=s(x,b.colorCount);return h?h.palette():null},u.prototype.getColorFromUrl=function(c,f,m){var b=this,S=document.createElement("img");S.addEventListener("load",function(){var x=b.getPalette(S,5,m);f(x[0],c)}),S.src=c},u.prototype.getImageData=function(c,f){var m=new XMLHttpRequest;m.open("GET",c,!0),m.responseType="arraybuffer",m.onload=function(){if(this.status==200){var b=new Uint8Array(this.response);i=b.length;for(var S=new Array(i),x=0;x<b.length;x++)S[x]=String.fromCharCode(b[x]);var h=S.join(""),y=window.btoa(h);f("data:image/png;base64,"+y)}},m.send()},u.prototype.getColorAsync=function(c,f,m){var b=this;this.getImageData(c,function(S){var x=document.createElement("img");x.addEventListener("load",function(){var h=b.getPalette(x,5,m);f(h[0],this)}),x.src=S})},u})})(Wn);var qn=Wn.exports,Ke={},Ft={};Object.defineProperty(Ft,"__esModule",{value:!0});Ft.default=_c;function _c(e,t,n){return`rgb(${e}, ${t}, ${n})`}var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.default=Ic;function Ic(e,t,n){return`#${[e,t,n].map(o=>{const a=o.toString(16);return a.length===1?`0${a}`:a}).join("")}`}Object.defineProperty(Ke,"__esModule",{value:!0});Ke.default=zc;var Rc=Gn(Ft),Ec=Gn(Bt);function Gn(e){return e&&e.__esModule?e:{default:e}}function zc(e,t){switch(t){case"rgbString":return(0,Rc.default)(e[0],e[1],e[2]);case"hex":return(0,Ec.default)(e[0],e[1],e[2]);default:return e}}var Xe={};Object.defineProperty(Xe,"__esModule",{value:!0});Xe.default=Mc;function Mc(e,t=void 0){return new Promise((n,o)=>{const a=new Image;a.addEventListener("load",()=>{n(a)}),a.addEventListener("error",()=>{o(new Error(`Failed to load image's URL: ${e}`))}),a.crossOrigin=t,a.src=e})}Object.defineProperty(Je,"__esModule",{value:!0});Je.default=Pc;var Ac=Nt(qn),Oc=Nt(Ke),Lc=Nt(Xe);function Nt(e){return e&&e.__esModule?e:{default:e}}async function Pc(e,t="rgbString",n=null,o=10){const a=await(0,Lc.default)(e,n),l=new Ac.default().getColor(a,o);return(0,Oc.default)(l,t)}Object.defineProperty(Dt,"__esModule",{value:!0});Dt.default=Fc;var Vr=d,$c=Hc(Je);function Hc(e){return e&&e.__esModule?e:{default:e}}const Qn={loading:!0,data:null,error:void 0};function Dc(e,t){switch(t.type){case"getColor":return Qn;case"resolveColor":return{...e,data:t.payload,loading:!1};case"rejectColor":return{...e,error:t.payload,loading:!1};default:return e}}function Fc(e,t="rgbString",n={}){const{crossOrigin:o=null,quality:a=10}=n,[s,l]=(0,Vr.useReducer)(Dc,Qn);return(0,Vr.useEffect)(()=>{l({type:"getColor"}),(0,$c.default)(e,t,o,a).then(u=>{l({type:"resolveColor",payload:u})}).catch(u=>{l({type:"rejectColor",payload:u})})},[e]),s}Object.defineProperty(Ze,"__esModule",{value:!0});Ze.default=void 0;var Ur=Vt(d),Ce=Vt(Un),Bc=Vt(Dt);function Vt(e){return e&&e.__esModule?e:{default:e}}const Ut=({src:e,format:t,crossOrigin:n,quality:o,children:a})=>{const s=(0,Bc.default)(e,t,{crossOrigin:n,quality:o});return Ur.default.createElement(Ur.default.Fragment,null,a(s))};Ut.defaultProps={format:"rgbString",crossOrigin:null,quality:10};Ut.propTypes={children:Ce.default.any.isRequired,src:Ce.default.string.isRequired,format:Ce.default.oneOf(["rgbString","rgbArray","hex"]),crossOrigin:Ce.default.string,quality:Ce.default.number};var Nc=Ut;Ze.default=Nc;var et={},Wt={},tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.default=qc;var Vc=qt(qn),Uc=qt(Ke),Wc=qt(Xe);function qt(e){return e&&e.__esModule?e:{default:e}}async function qc(e,t=2,n="rgbString",o=null,a=10){const s=await(0,Wc.default)(e,o);return new Vc.default().getPalette(s,t,a).map(c=>(0,Uc.default)(c,n))}Object.defineProperty(Wt,"__esModule",{value:!0});Wt.default=Zc;var Wr=d,Gc=Qc(tt);function Qc(e){return e&&e.__esModule?e:{default:e}}const Yn={loading:!0,data:[],error:void 0};function Yc(e,t){switch(t.type){case"getPalette":return Yn;case"resolvePalette":return{...e,data:t.payload,loading:!1};case"rejectPalette":return{...e,error:t.payload,loading:!1};default:return e}}function Zc(e,t=2,n="rgbString",o={}){const{crossOrigin:a=null,quality:s=10}=o,[l,u]=(0,Wr.useReducer)(Yc,Yn);return(0,Wr.useEffect)(()=>{u({type:"getPalette"}),(0,Gc.default)(e,t,n,a,s).then(c=>{u({type:"resolvePalette",payload:c})}).catch(c=>{u({type:"rejectPalette",payload:c})})},[e]),l}Object.defineProperty(et,"__esModule",{value:!0});et.default=void 0;var qr=Gt(d),le=Gt(Un),Jc=Gt(Wt);function Gt(e){return e&&e.__esModule?e:{default:e}}const Qt=({src:e,colorCount:t,format:n,crossOrigin:o,quality:a,children:s})=>{const l=(0,Jc.default)(e,t,n,{crossOrigin:o,quality:a});return qr.default.createElement(qr.default.Fragment,null,s(l))};Qt.defaultProps={format:"rgbString",colorCount:2,crossOrigin:null,quality:10};Qt.propTypes={children:le.default.any.isRequired,src:le.default.string.isRequired,format:le.default.oneOf(["rgbString","rgbArray","hex"]),colorCount:le.default.number,crossOrigin:le.default.string,quality:le.default.number};var Kc=Qt;et.default=Kc;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Palette",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"getColor",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getPalette",{enumerable:!0,get:function(){return a.default}}),e.default=void 0;var t=s(Ze),n=s(et),o=s(Je),a=s(tt);function s(u){return u&&u.__esModule?u:{default:u}}var l=t.default;e.default=l})(Fn);const Xc=(e,t=500,n=134)=>`
        <svg width="${t}" height="${n}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,e0=({onImageReady:e,posterData:t,generatePoster:n,onTitleSizeAdjust:o,customFont:a})=>{const s=d.useRef(null);return d.useEffect(()=>{(async()=>{if(!n)return;const u=s.current,c=u.getContext("2d"),f=2480,m=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0;const b=async g=>{const T=new Image;return T.crossOrigin="anonymous",T.src=g,new Promise(_=>{T.onload=()=>{if(c.drawImage(T,t.marginCover,t.marginCover,f-t.marginCover*2,f-t.marginCover*2),t.useFade){let j=c.createLinearGradient(0,0,0,3e3-t.marginBackground);const I=y(t.backgroundColor);j.addColorStop(.5,`rgba(${I.r}, ${I.g}, ${I.b}, 0)`),j.addColorStop(.8,t.backgroundColor),c.fillStyle=j,c.fillRect(0,0,u.width,2500-t.marginBackground)}_()}})},S=async()=>{const g=Xc(t.textColor,500,134),T=new Blob([g],{type:"image/svg+xml;charset=utf-8"}),_=URL.createObjectURL(T),j=new Image;return j.src=_,new Promise(I=>{j.onload=()=>{c.globalAlpha="0.5",c.drawImage(j,f-70-500,50,500,134),c.globalAlpha="1",URL.revokeObjectURL(_),I()}})},x=async()=>{let g=t.titleSize?parseInt(t.titleSize):230;const T=a||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){c.font=`bold ${g}px ${T}`;let I=c.measureText(t.albumName).width;for(;I>2480-t.marginSide*2;)g-=1,c.font=`bold ${g}px ${T}`,I=c.measureText(t.albumName).width;o(g,!0)}else c.font=`bold ${g}px ${T}`;c.fillStyle=t.textColor,t.showTracklist?c.fillText(t.albumName,t.marginSide,2500+t.marginTop):c.fillText(t.albumName,t.marginSide,2790+t.marginTop);let _=t.artistsSize?parseInt(t.artistsSize):110;c.font=`bold ${_}px ${a||"Montserrat"}`,t.showTracklist?c.fillText(t.artistsName,t.marginSide,2500+t.marginTop+_*1.3):c.fillText(t.artistsName,t.marginSide,2820+t.marginTop+_),c.font=`bold 70px ${a||"Montserrat"}`,c.fillText(t.titleRelease,t.marginSide,3310);let j=c.measureText(t.titleRelease).width;c.fillText(t.titleRuntime,j+t.marginSide+100,3310),c.globalAlpha=.7,c.font=`bold 60px ${a||"Montserrat"}`,c.fillText(t.runtime,j+t.marginSide+100,3390),c.fillText(t.releaseDate,t.marginSide,3390),c.globalAlpha=1,c.fillStyle=t.color1,c.fillRect(2045-t.marginSide,3368,145,30),c.fillStyle=t.color2,c.fillRect(2190-t.marginSide,3368,145,30),c.fillStyle=t.color3,c.fillRect(2335-t.marginSide,3368,145,30)},h=async()=>{c.fillStyle=t.textColor;let g=t.marginSide+10,T=0,_=0;const j=t.tracksSize?parseInt(t.tracksSize):50;c.font=`bold ${j}px ${a||"Montserrat"}`;const I=j,R=parseInt(t.marginTop||0),z=parseInt(t.artistsSize)?2500+R+parseInt(t.artistsSize)*1.3+130:2500+R+110*1.2+130,E=500,M=f-t.marginSide*2,A=parseInt(t.marginSide),P=z+E-10-parseInt(t.marginTop);let O=z;t.tracklist.split(`
`).forEach(B=>{if(O+I*1.3>=P){if(O=z,g=T+I*2.5+_,g>=A+M)return;_=g-I*2.5,T=0}const F=c.measureText(`${B}`).width+t.marginSide;F>T&&(T=F),c.fillText(`${B}`,g,O),O+=I*1.3})},y=g=>{const T=parseInt(g.replace("#",""),16);return{r:T>>16&255,g:T>>8&255,b:T&255}},w=g=>{const T=j=>{const I=j/255;return I<=.03928?I/12.92:Math.pow((I+.055)/1.055,2.4)};return .2126*T(g.r)+.7152*T(g.g)+.0722*T(g.b)>.179?"black":"white"},v=async()=>{const g=y(t.backgroundColor),T=w(g),_=t.textColor,j=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${T}/640/spotify:album:${t.albumID}`;let R=await(await fetch(j)).text();T=="black"?R=R.replace(/fill="#000000"/g,`fill="${_}"`):R=R.replace(/fill="#ffffff"/g,`fill="${_}"`),R=R.replace(t.backgroundColor,"transparent");const z=new Blob([R],{type:"image/svg+xml"}),E=URL.createObjectURL(z);return new Promise(M=>{const A=new Image;A.src=E,A.onload=function(){c.drawImage(A,2020-t.marginSide,3235,480,120);const P=u.toDataURL("image/png");e(P),M()}})},C=async()=>{c.fillStyle=t.backgroundColor,c.fillRect(0,2480-t.marginBackground,f,m-2480+t.marginBackground)};c.clearRect(0,0,f,m),c.fillStyle=t.backgroundColor,c.fillRect(0,0,f,m),t.useUncompressed?await b(await t.uncompressedAlbumCover):await b(t.albumCover),await C(),await x(),t.showTracklist&&await h(),t.useWatermark&&await S(),await v()})()},[n,t,e]),r.jsx("canvas",{ref:s,width:2480,height:3508,style:{display:"none"}})},t0=p.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function $({children:e,animationDelay:t=0,...n}){const[o,a]=d.useState(!1);return d.useEffect(()=>{const s=setTimeout(()=>{a(!0)},t);return()=>clearTimeout(s)},[t]),r.jsx(t0,{visible:o,animationDelay:t,...n,children:e})}const r0=p.div`
    width: 80%;
    margin-inline: auto;
`,n0=p.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,o0=p(Tn)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,a0=p.h3`
    font-size: 1.3em;
    font-weight: bold;
`,i0=p.div`
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
`,s0=p.img`
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
`,l0=p.div`
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
`,c0=p(Hn)`
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
`,d0=p.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,u0=p.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,Gr=p.div`
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
`,p0=p.div`
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
`,h0=p.div`
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
`,f0=p.div`
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
`,Qr=p.button`
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
`,m0=p.textarea`
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
`,g0=p.div`
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
`,Yr=p.div`
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
`,Zr=p.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,x0=p(Ol)`
    font-size: 1.15em;
`,v0=p(ol)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Tr`
                  animation: ${q`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Tr`
                  animation: ${q`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,b0=p.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,y0=p.p`
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
`,Yt=d.forwardRef(({albumID:e,handleClickBack:t,model:n,modelParams:o,initialPosterJson:a},s)=>{const{t:l}=N(),u=d.useRef(null),[c,f]=d.useState(""),[m,b]=d.useState(""),[S,x]=d.useState("200"),[h,y]=d.useState("110"),[w,v]=d.useState("50"),[C,g]=d.useState((o==null?void 0:o.marginTop)??""),[T,_]=d.useState(160),[j,I]=d.useState((o==null?void 0:o.marginCover)??0),[R,z]=d.useState((o==null?void 0:o.marginBackground)??0),[E,M]=d.useState("#5900ff"),[A,P]=d.useState("#ff9100"),[O,B]=d.useState("#ff0000"),[F,G]=d.useState("#00ff40"),[re,ne]=d.useState("#2600ff"),[he,fe]=d.useState(!0),[Jt,Kt]=d.useState((o==null?void 0:o.useFade)??!0),[Xt,rt]=d.useState((o==null?void 0:o.showTracklist)??!1),[nt,ot]=d.useState(""),[Jn,at]=d.useState(""),[Kn,er]=d.useState(""),[ie,Xn]=d.useState(null),[it,tr]=d.useState("information");function rr(k){ut(!0),f(k.albumName||""),b(k.artistsName||""),x(k.titleSize||"200"),y(k.artistsSize||"110"),v(k.tracksSize||"50"),g(k.marginTop||""),_(k.marginSide||160),I(k.marginCover||0),z(k.marginBackground||0),M(k.backgroundColor||"#5900ff"),P(k.textColor||"#ff9100"),B(k.color1||"#ff0000"),G(k.color2||"#00ff40"),ne(k.color3||"#2600ff"),fe(k.useWatermark!==void 0?k.useWatermark:!0),Kt(k.useFade!==void 0?k.useFade:!0),rt(k.showTracklist!==void 0?k.showTracklist:!1),Ee(k.useUncompressed!==void 0?k.useUncompressed:!1),ot(k.albumCover||""),at(k.uncompressedAlbumCover||""),er(k.customFont||""),me(k.tracklist||""),st(k.titleRelease||""),lt(k.releaseDate||""),ct(k.titleRuntime||""),dt(k.runtime||""),Me()}d.useEffect(()=>{if(ie){const k=new FileReader;k.onload=async H=>{const V="CustomFont",oe=new FontFace(V,H.target.result);try{const Q=await oe.load();document.fonts.add(Q),er(V)}catch(Q){console.error("Erro ao carregar fonte:",Q)}},k.readAsArrayBuffer(ie)}},[ie]),d.useEffect(()=>{a&&rr(a)},[a]);const[nr,Ee]=d.useState(!1),[eo,to]=d.useState("Original"),[ze,me]=d.useState(""),[or,st]=d.useState(""),[ar,lt]=d.useState(""),[ir,ct]=d.useState(""),[sr,dt]=d.useState(""),[ro,lr]=d.useState(!1),[cr,dr]=d.useState(null),[se,no]=d.useState(null),[ur,pr]=d.useState(!1),[hr,oo]=d.useState(!1),[fr,ut]=d.useState(!1),ao=k=>{x(k.target.value),pr(!0)},io=(k,H)=>{H&&!hr?(x(k),oo(!0)):ur||x(k)},so={albumCover:nt,uncompressedAlbumCover:Jn,useUncompressed:nr,albumName:c,artistsName:m,titleSize:S,artistsSize:h,tracksSize:w,marginTop:C,marginSide:T,marginCover:j,marginBackground:R,titleRelease:or,releaseDate:ar,titleRuntime:ir,runtime:sr,backgroundColor:E,textColor:A,useWatermark:he,useFade:Jt,showTracklist:Xt,tracklist:ze,color1:O,color2:F,color3:re,albumID:e,userAdjustedTitleSize:ur,initialTitleSizeSet:hr},[ge,lo]=d.useState(null),[pt,mr]=d.useState(!1),[co,ht]=d.useState(!1),[uo,gr]=d.useState(!1),[po,xr]=d.useState(!1),[ho,ft]=d.useState(!1);d.useEffect(()=>{if(pt){ht(!1);const k=setTimeout(()=>{ft(!0)},100);return()=>clearTimeout(k)}else ft(!1)},[pt]);const fo=k=>{lo(k),mr(!1),xr(!1),Ci(c,m),setTimeout(()=>{ft(!1),setTimeout(()=>{ht(!0)},300)},100)},Me=()=>{pr(!1),ht(!1),requestAnimationFrame(()=>{if(xr(!0),mr(!0),u.current){const k=u.current.getBoundingClientRect(),H=k.top+window.scrollY,V=k.height,Q=(window.innerHeight-V)/2;window.scrollTo({top:H-Q,behavior:"smooth"})}})},mo=k=>{ot(URL.createObjectURL(k)),Ee(!1),at(""),to(k.name),ut(!1)},mt=()=>{if(!ge)return;const k=document.createElement("a");k.href=ge,k.download=`Posterfy - ${c}.png`,k.click(),wi(c,"poster",m)};function xe(k,H){const V=k.target.getBoundingClientRect();dr({top:V.top+window.scrollY,left:V.left+window.scrollX}),no(H),lr(!0)}function go(){lr(!1)}const xo=()=>{const H=ze.split(`
`).map(V=>V.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());me(H.join(`
`))},vo=()=>{const H=ze.split(`
`).map(V=>V.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());me(H.join(`
`))};async function bo(k,H="us"){var V;try{let oe=`https://itunes.apple.com/search?term=${encodeURIComponent(k)}&country=${H}&entity=album&limit=1`,Q=await fetch(oe);if(!Q.ok)throw new Error(`HTTP Error: ${Q.status}`);let gt=await Q.json();if(!((V=gt.results)!=null&&V.length))return console.warn("No album data found."),fr||Ee(!1),"";let Y=gt.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Y.length===2?`https://a5.mzstatic.com/us/r1000/0/${Y[1].split("/").slice(0,-1).join("/")}`:""}catch(oe){return console.error("Error fetching album cover:",oe.message),""}}return d.useEffect(()=>{st(l("EDITOR_ReleaseTitle")),ct(l("EDITOR_RuntimeTitle"))},[l]),d.useEffect(()=>{const k=async()=>{var H;try{const vr=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Y=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${vr}`}})).json(),xt=Y.artists.map(ve=>ve.name).join(", ");f(Y.name),b(xt),ot((H=Y.images[0])==null?void 0:H.url),lt(Y.release_date),at(await bo(Y.name+" "+xt));const wo=Y.tracks.items.reduce((ve,Ae)=>ve+Ae.duration_ms,0),br=Math.floor(wo/1e3),yr=Math.floor(br/60),wr=Math.floor(yr/60),Cr=br%60,kr=yr%60,Co=wr>0?`${wr}h ${kr}min ${Cr}s`:`${kr}min ${Cr}s`;dt(Co);const ko=Y.tracks.items.map((ve,Ae)=>(Ae===3&&typeof(o==null?void 0:o.showTracklist)>"u"&&rt(!0),`${Ae+1}. ${ve.name}`));me(ko.join(`
`)),gr(!0)}catch(V){console.error("Error trying to fetch album data:",V)}};a?(rr(a),gr(!0)):(ut(!1),k())},[e]),d.useEffect(()=>{const k=H=>{H.ctrlKey&&H.key==="s"?(H.preventDefault(),Me()):H.ctrlKey&&H.key==="d"&&(H.preventDefault(),mt())};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[ge,c,mt]),r.jsx(r.Fragment,{children:uo?r.jsxs(r0,{ref:s,children:[r.jsx(Fn.Palette,{src:nt,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:k})=>(d.useEffect(()=>{k&&k.length>0&&!fr&&(M(k[0]),P(k[1]),B(k[2]),G(k[3]),ne(k[4]),Me())},[k]),null)}),r.jsxs(n0,{onClick:t,children:[r.jsx(o0,{}),r.jsx(a0,{children:l("GoBack")})]}),r.jsxs(i0,{children:[r.jsx(e0,{onImageReady:fo,posterData:so,generatePoster:pt,onTitleSizeAdjust:io,customFont:Kn}),r.jsxs(l0,{children:[ge?r.jsx(s0,{src:ge,ref:u,visible:co}):r.jsx(b0,{ref:u}),r.jsx(c0,{visible:ho})]}),r.jsxs(d0,{children:[r.jsx($,{animationDelay:50,children:r.jsxs(u0,{children:[r.jsx(Gr,{$active:it==="information",onClick:()=>tr("information"),children:l("EDITOR_InformationTab")}),r.jsx(Gr,{$active:it==="tracklist",onClick:()=>tr("tracklist"),children:l("EDITOR_TracklistTab")})]})}),it==="information"?r.jsxs(p0,{children:[r.jsx($,{animationDelay:0,children:r.jsx(X,{title:l("EDITOR_AlbumName"),value:c,onChange:k=>f(k.target.value)})}),r.jsx($,{animationDelay:50,children:r.jsx(X,{title:l("EDITOR_ArtistName"),value:m,onChange:k=>b(k.target.value)})}),r.jsx($,{animationDelay:100,children:r.jsx(X,{title:l("EDITOR_TitleSize"),value:S,onChange:ao})}),r.jsx($,{animationDelay:150,children:r.jsx(X,{title:l("EDITOR_ArtistSize"),value:h,onChange:k=>y(k.target.value)})}),r.jsx($,{animationDelay:200,children:r.jsx(X,{title:l("EDITOR_TracksSize"),value:w,onChange:k=>v(k.target.value)})}),r.jsx($,{animationDelay:250,children:r.jsx(X,{title:l("EDITOR_MarginTop"),value:C,onChange:k=>g(k.target.value)})}),r.jsx($,{animationDelay:300,children:r.jsx(X,{title:l("EDITOR_MarginSide"),value:T,onChange:k=>_(k.target.value)})}),r.jsx($,{animationDelay:350,children:r.jsx(X,{title:l("EDITOR_MarginCover"),value:j,onChange:k=>I(k.target.value)})}),r.jsx($,{animationDelay:375,children:r.jsx(X,{title:l("EDITOR_MarginBackground"),value:R,onChange:k=>z(k.target.value)})}),r.jsx($,{animationDelay:400,children:r.jsx(Dr,{title:or,value:ar,onChangeTitle:k=>st(k.target.value),onChangeDate:k=>lt(k.target.value)})}),r.jsx($,{animationDelay:450,children:r.jsx(Dr,{title:ir,value:sr,onChangeTitle:k=>ct(k.target.value),onChangeDate:k=>dt(k.target.value)})}),r.jsx($,{animationDelay:500,children:r.jsx(we,{title:l("EDITOR_BackgroundColor"),value:E,onClick:k=>xe(k,"backgroundColor")})}),r.jsx($,{animationDelay:550,children:r.jsx(we,{title:l("EDITOR_TextColor"),value:A,onClick:k=>xe(k,"textColor")})}),r.jsx($,{animationDelay:600,children:r.jsx(we,{title:`${l("EDITOR_Color")} 1`,value:O,onClick:k=>xe(k,"color1")})}),r.jsx($,{animationDelay:650,children:r.jsx(we,{title:`${l("EDITOR_Color")} 2`,value:F,onClick:k=>xe(k,"color2")})}),r.jsx($,{animationDelay:700,children:r.jsx(we,{title:`${l("EDITOR_Color")} 3`,value:re,onClick:k=>xe(k,"color3")})}),r.jsx($,{animationDelay:800,children:r.jsx(Ct,{title:l("EDITOR_Fade"),value:Jt,onChange:k=>Kt(k),text:l("EDITOR_FadeText")})}),r.jsx($,{animationDelay:850,children:r.jsx(Ct,{title:l("EDITOR_Uncompressed"),value:nr,onChange:k=>Ee(k),text:l("EDITOR_UncompressedText")})}),r.jsx($,{animationDelay:900,children:r.jsx(Ct,{title:l("EDITOR_Tracklist"),value:Xt,onChange:k=>rt(k),text:l("EDITOR_TracklistText")})}),r.jsx($,{animationDelay:950,children:r.jsx(uc,{title:l("EDITOR_Cover"),onChange:mo,text:eo})}),r.jsx($,{animationDelay:1e3,children:r.jsx(vc,{title:l("EDITOR_Font"),text:(ie==null?void 0:ie.name)||l("EDITOR_DefaultFont"),onChange:Xn})}),ro&&cr&&se&&r.jsx(J1,{DefaultColor:se==="backgroundColor"?E:se==="textColor"?A:se==="color1"?O:se==="color2"?F:re,image:nt,predefinedColors:[O,F,re,E,A],onDone:k=>{switch(se){case"backgroundColor":M(k);break;case"textColor":P(k);break;case"color1":B(k);break;case"color2":G(k);break;case"color3":ne(k);break}dr(null)},position:cr,onClose:go})]}):r.jsxs(h0,{children:[r.jsx(m0,{value:ze,onChange:k=>me(k.target.value),placeholder:l("EDITOR_TracklistPlaceholder")}),r.jsxs(f0,{children:[r.jsx(Qr,{onClick:xo,children:l("EDITOR_RemoveParentheses")}),r.jsx(Qr,{onClick:vo,children:l("EDITOR_RemoveBrackets")})]})]}),r.jsx($,{animationDelay:1050,children:r.jsxs(g0,{children:[r.jsxs(Yr,{onClick:mt,children:[r.jsx(x0,{}),r.jsx(Zr,{children:l("EDITOR_Download")})]}),r.jsxs(Yr,{onClick:Me,children:[r.jsx(v0,{$spinning:po}),r.jsx(Zr,{children:l("EDITOR_Apply")})]})]})}),r.jsx($,{animationDelay:1100,children:r.jsxs(y0,{children:[l("EDITOR_Shortcuts"),": Ctrl+S (",l("EDITOR_Apply"),"), Ctrl+D (",l("EDITOR_Download"),")"]})})]})]})]}):r.jsx(Dn,{})})});Yt.displayName="PosterEditor";const w0=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:n="var(--PosterShare-shadeFrames)"})=>{const o=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},C0=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:n="var(--PosterShare-shadeFrames)"})=>{const o=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:n,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},k0=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:n="var(--PosterShare-shadeFrames)",fillOpacity:o=1})=>{const a=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:a,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:n,fillOpacity:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),r.jsx("path",{fill:n,fillOpacity:.13*o,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},T0=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:n="var(--PosterShare-shadeFrames)"})=>{const o=e*264/186;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o,viewBox:"0 0 186 264",fill:"none",children:[r.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),r.jsx("path",{fill:n,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},S0=p.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,j0=p(Tn)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,_0=p.h3`
  font-size: 1.3em;
  font-weight: bold;
`,Zt=q`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,I0=p.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${Zt} 0.7s cubic-bezier(0.23, 1, 0.32, 1);

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
`,De=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${Zt} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Fe=p.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${Zt} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,R0=p.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,E0=p.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function z0({onSelectModel:e,onBack:t}){const{t:n}=N(),o={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},a={marginCover:160,useFade:!1,marginTop:20},s={marginCover:-1100,marginBackground:-1200,useFade:!1},l={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function u(f,m){yi("select_model","ModelSelector",f),e&&e(f,m)}const c=[0,.08,.16,.24];return r.jsxs(r.Fragment,{children:[r.jsxs(S0,{onClick:t,children:[r.jsx(j0,{}),r.jsx(_0,{children:n("GoBack")})]}),r.jsx(R0,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:n("ModelTitle")}),r.jsx(E0,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:n("ModelText")}),r.jsxs(I0,{children:[r.jsxs(De,{delay:c[0],onClick:()=>u("standart",l),children:[r.jsx(w0,{width:200}),r.jsx(Fe,{delay:c[0],children:"Standard"})]}),r.jsxs(De,{delay:c[1],onClick:()=>u("frame",a),children:[r.jsx(T0,{width:200}),r.jsx(Fe,{delay:c[1],children:"Frame"})]}),r.jsxs(De,{delay:c[2],onClick:()=>u("basic",o),children:[r.jsx(C0,{width:200}),r.jsx(Fe,{delay:c[2],children:"Basic"})]}),r.jsxs(De,{delay:c[3],onClick:()=>u("fullcover",s),children:[r.jsx(k0,{width:200}),r.jsx(Fe,{delay:c[3],children:"Full Cover"})]})]})]})}const M0=p.div`
    width: 100%;
`,A0=p.div`
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
`,O0=p(hs)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,L0=p(Ri)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,P0=p.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,$0=p.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function H0({onSearch:e,value:t=""}){const{t:n}=N(),[o,a]=d.useState(t);d.useEffect(()=>{a(t)},[t]);const s=c=>{c.key==="Enter"&&(e(o),o.trim()&&Ar(o.trim()))},l=c=>{a(c.target.value)},u=()=>{e(o),o.trim()&&Ar(o.trim())};return r.jsx(M0,{children:r.jsxs(A0,{role:"search","aria-label":"Album search for poster creation",children:[r.jsx(O0,{"aria-hidden":"true"}),r.jsx(P0,{}),r.jsx($0,{placeholder:n("SearchPlaceholder"),value:o,onChange:l,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),r.jsx(L0,{onClick:u,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const D0=p.div`
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

`,F0=p.img`
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
`,B0=p.h3`
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
`,N0=p.p`
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
`,V0=p.div`
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
`;function U0({title:e,artist:t,cover:n,id:o,onClick:a,animationDelay:s=0}){const[l,u]=d.useState(!1);return d.useEffect(()=>{const c=setTimeout(()=>{u(!0)},s);return()=>clearTimeout(c)},[s]),r.jsxs(D0,{onClick:()=>a(o),visible:l,children:[r.jsx(F0,{src:n}),r.jsxs(V0,{children:[r.jsx(B0,{children:e}),r.jsx(N0,{children:t})]})]})}const W0=p.div`
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
`,q0=p.button`
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
`,G0=p.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;function Jr({query:e,onclick:t}){const{t:n}=N(),[o,a]=d.useState([]),[s,l]=d.useState(""),[u,c]=d.useState(0),[f,m]=d.useState(!0),[b,S]=d.useState(!1),[x,h]=d.useState(!1),y=20;d.useEffect(()=>{(async()=>{const _=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();l(_.access_token)})()},[]),d.useEffect(()=>{a([]),c(0),m(!0)},[e]),d.useEffect(()=>{const v=async(C=!1)=>{if(s){C?h(!0):S(!0);try{let g;const T=C?u:0;if(e?g=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${y}&offset=${T}`,{headers:{Authorization:`Bearer ${s}`}}):g=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${T}&limit=${y}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!g.ok){const E=await g.text();throw new Error(`Erro na API: ${E}`)}const _=await g.json(),I=_.albums.items.filter(E=>E!=null).map(E=>{var M,A;return{id:E.id,title:E.name,artist:(M=E.artists)==null?void 0:M.map(P=>P.name).join(", "),cover:(A=E.images[0])==null?void 0:A.url}});a(C?E=>[...E,...I]:I);const R=_.albums.total,z=C?o.length+I.length:I.length;m(z<R&&I.length===y)}catch(g){console.error(g)}finally{S(!1),h(!1)}}};s&&(o.length===0||u===0)&&v(!1)},[e,s]);const w=async()=>{if(!s||!f||x)return;const v=u+y;c(v);try{h(!0);let C;if(e?C=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${y}&offset=${v}`,{headers:{Authorization:`Bearer ${s}`}}):C=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${v}&limit=${y}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!C.ok){const R=await C.text();throw new Error(`Erro na API: ${R}`)}const g=await C.json(),_=g.albums.items.filter(R=>R!=null).map(R=>{var z,E;return{id:R.id,title:R.name,artist:(z=R.artists)==null?void 0:z.map(M=>M.name).join(", "),cover:(E=R.images[0])==null?void 0:E.url}});a(R=>[...R,..._]);const j=g.albums.total,I=o.length+_.length;m(I<j&&_.length===y)}catch(C){console.error(C)}finally{h(!1)}};return r.jsx(r.Fragment,{children:b&&o.length===0?r.jsx(Dn,{}):r.jsxs(r.Fragment,{children:[r.jsx(W0,{children:o.map((v,C)=>r.jsx(U0,{onClick:()=>t(v.id),cover:v.cover,title:v.title,artist:v.artist,id:v.id,animationDelay:C-u*100},v.id))}),f&&r.jsx(G0,{children:r.jsx(q0,{onClick:w,disabled:x,children:n(x?"LoadingMore":"LoadMore")})})]})})}const Q0=({onBack:e})=>{const[t,n]=d.useState(""),[o,a]=d.useState(null),[s,l]=d.useState(!1),[u,c]=d.useState(null),[f,m]=d.useState(null),b=d.useRef(null);d.useEffect(()=>{s&&o&&b.current&&setTimeout(()=>{b.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[s,o]);function S(y){a(y),l(!0),c(null),m(null)}function x(){a(null),l(!1),c(null),m(null),e&&e()}const h=y=>{n(y)};return o&&u&&f?r.jsx(Yt,{albumID:o,handleClickBack:x,model:u,modelParams:f,source:"search_creation"}):o&&s?r.jsx("div",{ref:b,children:r.jsx(z0,{onSelectModel:(y,w)=>{c(y),m(w),l(!1)},onBack:x})}):r.jsxs(r.Fragment,{children:[r.jsx(H0,{onSearch:h,value:t}),t.trim()?r.jsx(Jr,{query:t,onclick:S}):r.jsx("div",{children:r.jsx(Jr,{onclick:S})})]})};function Y0({loadingComplete:e}){const{t}=N(),[n,o]=d.useState(null),a=d.useRef(null),s=u=>{Si(u.albumName||"Unknown Album",u.artistsName||"Unknown Artist",u.albumID||"","album_collection"),o(u),setTimeout(()=>{if(a.current){const c=a.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:c,behavior:"smooth"})}},100)},l=()=>{o(null)};return r.jsxs(r.Fragment,{children:[r.jsx(_l,{showAnimation:e,onRecreate:s}),r.jsx(Re,{text:t("anchorArt"),type:1}),r.jsx($t,{title:t("ArtTitle"),paragraph:t("ArtParagraph")}),n?r.jsx(Yt,{ref:a,albumID:n.albumID,initialPosterJson:n,handleClickBack:l}):r.jsx(Q0,{}),r.jsx(t1,{}),r.jsx(Yl,{}),r.jsx(Vl,{}),r.jsx(h1,{})]})}function Z0(e){return L({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"},child:[]}]})(e)}const J0=p.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    flex-direction: column;
`,K0=p.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`,X0=p.h1`
    color: var(--textColor);
    font-size: 2rem;
    text-align: center;
    font-weight: bolder;
`,e2=p.p`
    color: var(--textColor);
    font-size: 1em;
    text-align: center;
    opacity: 0.7;
    max-width: 500px;
`,t2=p.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`,Kr=p.button`
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
`,Xr=p.p`
    font-size: 1em;
    font-weight: bolder;
    min-width: 200px;
`,r2=p(ls)`
    width: 20px;
    height: 20px;
`,n2=p(Z0)`
    width: 20px;
    height: 20px;
`,o2=p.div`
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
`,en=p.div`
    height: 1px;
    background-color: var(--textColor);
    opacity: 0.25;
    flex-grow: 1;
`,a2=p.p`
    color: var(--textColor);
`;function i2(){const{t:e}=N();return r.jsxs(J0,{children:[r.jsx(An,{iconColor:"var(--AccentColor)"}),r.jsxs(K0,{children:[r.jsx(pe,{fill:"var(--textColor)",width:"100px"}),r.jsx(X0,{children:e("LOGIN_Welcome")}),r.jsx(e2,{children:e("LOGIN_JoinCommunity")}),r.jsxs(t2,{children:[r.jsxs(Kr,{children:[r.jsx(r2,{}),r.jsx(Xr,{children:e("LOGIN_GoogleSignIn")})]}),r.jsxs(o2,{children:[r.jsx(en,{}),r.jsx(a2,{children:e("LOGIN_Or")}),r.jsx(en,{})]}),r.jsxs(Kr,{children:[r.jsx(n2,{}),r.jsx(Xr,{children:e("LOGIN_SpotifySignIn")})]})]})]})]})}const s2=({width:e,height:t,fillHeart:n,fillQuestion:o,pulse:a=!1,onClick:s})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 306 338",children:[r.jsx("path",{fill:n,d:"M277.237 186.298v29.656h-32.538v31.633h-27.606v30.644h-31.552v29.655h-65.079v-29.655H88.909v-30.644H61.304v-31.632H28.763v-29.657H.168V59.769H31.72V30.114h95.644v30.644h51.272V30.114h95.643v29.655h31.553v126.529zM153 101.39a65.8 65.8 0 0 0-28.216 6.371 66 66 0 0 0-22.793 17.858 66.3 66.3 0 0 0-12.993 25.917 66.4 66.4 0 0 0-.7 29.001 66.3 66.3 0 0 0 11.727 26.518 66.1 66.1 0 0 0 21.904 18.944 65.83 65.83 0 0 0 56.372 2.771 66.05 66.05 0 0 0 29.621-24.386 66.368 66.368 0 0 0-.015-73.574 66.08 66.08 0 0 0-29.638-24.385A65.9 65.9 0 0 0 153 101.39"}),r.jsx("path",{fill:o,style:{animation:a?"pulse 2s infinite":"none",cursor:a?"pointer":"default"},onClick:s,d:"M140.182 184.727v-2.045q0-7.031 1.108-11.208 1.107-4.176 3.281-6.69 2.173-2.557 5.327-4.602a74 74 0 0 0 4.858-3.452q2.173-1.662 3.409-3.537 1.278-1.875 1.278-4.261 0-2.131-1.023-3.75a6.95 6.95 0 0 0-2.769-2.514q-1.748-.895-3.878-.895-2.301 0-4.262 1.065a8.57 8.57 0 0 0-3.11 2.94q-1.15 1.875-1.151 4.347h-21.818q.085-9.375 4.261-15.213 4.176-5.881 11.08-8.608 6.903-2.77 15.17-2.77 9.12 0 16.279 2.685 7.159 2.642 11.292 8.011 4.134 5.326 4.134 13.338 0 5.156-1.79 9.077a21.6 21.6 0 0 1-4.901 6.861q-3.11 2.94-7.287 5.369-3.068 1.79-5.156 3.707-2.088 1.875-3.153 4.304-1.065 2.387-1.066 5.796v2.045zm10.398 28.637q-4.944 0-8.481-3.452-3.494-3.495-3.451-8.48-.043-4.858 3.451-8.31 3.537-3.452 8.481-3.452 4.687 0 8.267 3.452 3.621 3.452 3.664 8.31-.042 3.324-1.747 6.051a12.86 12.86 0 0 1-4.346 4.304 11.33 11.33 0 0 1-5.838 1.577"})]}),Zn=document.createElement("style");Zn.textContent=`
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
`;document.head.appendChild(Zn);const l2="/assets/kanye-BMPu-Gq3.png",c2="/assets/runaway-DjODmQSR.mp3",d2=()=>{const e=fn(),{t}=N(),[n,o]=d.useState(0),a=d.useRef(null),[s,l]=d.useState(!1),u=()=>{o(n+1),console.log(n)},c=()=>{a.current&&(a.current.loop=!0,a.current.paused?(a.current.play(),l(!0)):(a.current.pause(),l(!1)))};return r.jsxs(u2,{playing:s,children:[r.jsx(s2,{width:"150px",height:"150px",fillHeart:s?"#edcd6b":"var(--textColor)",fillQuestion:s?"#edcd6b":"var(--textColor)",pulse:!0,onClick:u}),r.jsxs(g2,{children:[r.jsx(kt,{playing:s,active:n>=1}),r.jsx(kt,{playing:s,active:n>=2}),r.jsx(kt,{playing:s,active:n>=3})]}),r.jsx(p2,{children:t("errorTitle")}),r.jsx(h2,{children:t("errorMessage")}),r.jsx(f2,{playing:s,onClick:()=>e("/"),children:t("errorBackToHome")}),n>=3&&r.jsxs(r.Fragment,{children:[r.jsx(m2,{src:l2,alt:"Kanye",onClick:c}),r.jsx("audio",{ref:a,src:c2})]})]})},u2=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${e=>e.playing?"#d12741":"var(--backgroundColor)"};
  color: ${e=>e.playing?"#edcd6b":"var(--TextColor)"};
`,p2=p.h1`
  font-size: 1.5em;
  color: var(--TextColor);
  margin-top: 25px;
`,h2=p.p`
  font-size: 1em;
  color: var(--TextColor);
  margin: 20px 0;
  opacity: 0.7;
`,f2=p.button`
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
`,m2=p.img`
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
`,g2=p.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-top: 25px;
`,kt=p.div`
  width: 10px;
  height: 10px;
  background-color: ${e=>e.playing?"#edcd6b":e.active?"var(--AccentColor)":"var(--textColor)"};
  border-radius: 50%;
  margin: 0 5px;
`;function x2(){const[e,t]=d.useState(!0),[n,o]=d.useState(!1);return _i(),d.useEffect(()=>si(),[]),d.useEffect(()=>{const a=setTimeout(()=>{t(!1),setTimeout(()=>{o(!0)},1e3)},1100);return()=>clearTimeout(a)},[]),d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),r.jsx(li,{children:r.jsxs(Qi,{children:[r.jsx(xi,{}),r.jsx(vi,{}),r.jsx(ji,{}),r.jsx(Ya,{children:r.jsxs(ja,{children:[r.jsx(ce,{path:"/",element:r.jsx(Lr,{showNavbar:!0,showFooter:!0}),children:r.jsx(ce,{index:!0,element:r.jsx(Y0,{loadingComplete:n})})}),r.jsx(ce,{path:"/login",element:r.jsx(Lr,{showNavbar:!1,showFooter:!1}),children:r.jsx(ce,{index:!0,element:r.jsx(i2,{})})}),r.jsx(ce,{path:"*",element:r.jsx(d2,{})})]})}),r.jsx(fi,{isVisible:e})]})})}jo.use(_o).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more...",errorTitle:"Oops! Something went wrong.",errorMessage:"Let's get back to the melody.",errorBackToHome:"Back to Home",LOGIN_Or:"Or",LOGIN_GoogleSignIn:"Sign in with Google",LOGIN_SpotifySignIn:"Sign in with Spotify",LOGIN_Welcome:"Welcome to Posterfy!",LOGIN_JoinCommunity:"Join our community and start creating amazing posters."}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais...",errorTitle:"Oops! Algo deu errado.",errorMessage:"Vamos recomeçar a melodia.",errorBackToHome:"Voltar para Home",LOGIN_Or:"Ou",LOGIN_GoogleSignIn:"Entrar com Google",LOGIN_SpotifySignIn:"Entrar com Spotify",LOGIN_Welcome:"Bem-vindo ao Posterfy!",LOGIN_JoinCommunity:"Junte-se à nossa comunidade e comece a criar pôsteres incríveis."}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más...",errorTitle:"¡Vaya! Algo salió mal.",errorMessage:"Vamos a volver a la melodía.",errorBackToHome:"Volver a la página de inicio",LOGIN_Or:"O",LOGIN_GoogleSignIn:"Iniciar sesión con Google",LOGIN_SpotifySignIn:"Iniciar sesión con Spotify",LOGIN_Welcome:"¡Bienvenido a Posterfy!",LOGIN_JoinCommunity:"Únete a nuestra comunidad y comienza a crear carteles increíbles."}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多...",errorTitle:"哎呀！出错了。",errorMessage:"让我们重新开始旋律。",errorBackToHome:"返回首页",LOGIN_Or:"或者",LOGIN_GoogleSignIn:"用谷歌登录",LOGIN_SpotifySignIn:"用Spotify登录",LOGIN_Welcome:"欢迎来到 Posterfy！",LOGIN_JoinCommunity:"加入我们的社区，开始创建惊人的海报。"}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const n=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(n)?n:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});nn(document.getElementById("root")).render(r.jsx(d.StrictMode,{children:r.jsx(x2,{})}));
