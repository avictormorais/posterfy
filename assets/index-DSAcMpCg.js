import{r as g,a as En,e as q,g as On,c as lt}from"./vendor-DZStNbcm.js";import{d as h,G as P,m as V,l as Vt}from"./ui-C8-z_EEw.js";import{u as J,i as An,a as Dn}from"./i18n-DbQiQmPR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Ar={exports:{}},Me={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn=g,zn=Symbol.for("react.element"),Mn=Symbol.for("react.fragment"),$n=Object.prototype.hasOwnProperty,Fn=Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ln={key:!0,ref:!0,__self:!0,__source:!0};function Dr(e,t,n){var u,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(u in t)$n.call(t,u)&&!Ln.hasOwnProperty(u)&&(r[u]=t[u]);if(e&&e.defaultProps)for(u in t=e.defaultProps,t)r[u]===void 0&&(r[u]=t[u]);return{$$typeof:zn,type:e,key:a,ref:o,props:r,_owner:Fn.current}}Me.Fragment=Mn;Me.jsx=Dr;Me.jsxs=Dr;Ar.exports=Me;var c=Ar.exports,Pr,Yt=En;Pr=Yt.createRoot,Yt.hydrateRoot;function $e({width:e,height:t,fill:n}){return c.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:n,xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},ze.apply(this,arguments)}function Bn(e,t){if(e==null)return{};var n={},u=Object.keys(e),r,a;for(a=0;a<u.length;a++)r=u[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var qn=["cdnSuffix","cdnUrl","countryCode","style","svg"],Un="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Hn="svg",Qn=127397,zr=function(t){var n=t.cdnSuffix,u=n===void 0?Hn:n,r=t.cdnUrl,a=r===void 0?Un:r,o=t.countryCode,s=t.style,l=t.svg,d=l===void 0?!1:l,f=Bn(t,qn);if(typeof o!="string")return null;if(d){var p=""+a+o.toLowerCase()+"."+u;return g.createElement("img",Object.assign({},f,{src:p,style:ze({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},s)}))}var x=o.toUpperCase().replace(/./g,function(_){return String.fromCodePoint(_.charCodeAt(0)+Qn)});return g.createElement("span",Object.assign({role:"img"},f,{style:ze({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},s)}),x)};const Nn=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},Kt=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Je=(e,t="image",n="")=>{const u=n?`${n} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:u,file_type:t,album_name:e,artist_name:n})},Gn=(e,t="")=>{const n=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:n,album_name:e,artist_name:t})},Jt=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},Wn=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},Vn=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},Yn=h.div`
  position: relative;
`,Kn=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid var(--borderColor);
  
  &:hover {
    background-color: var(--glassBackground);
  }
`,Jn=h.div`
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
    width: 2.5em !important;
    height: 2.5em !important;
    object-fit: cover !important;
    display: block !important;
  }
`,Xn=h.div`
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
`,Zn=h.div`
  position: absolute;
  top: -15px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,eo=h.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,me=h.button`
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
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--glassBackground);
  }

  &:hover svg {
    transform: scale(1.2);
  }
`,ge=h.span`
  margin-left: 8px;
`,xe=h(zr)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function to(){const[e,t]=g.useState(!1),{i18n:n}=J();g.useEffect(()=>{const o=localStorage.getItem("language");o&&n.changeLanguage(o);const s=l=>{l.target.closest(".language-selector")||t(!1)};return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[n]);const u=o=>{o.stopPropagation(),t(!e)},r=o=>{n.changeLanguage(o),localStorage.setItem("language",o),t(!1),Vn(o)},a=()=>{switch(n.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return c.jsxs(Yn,{className:"language-selector",children:[c.jsx(Kn,{onClick:u,"aria-label":"Select language",children:c.jsx(Jn,{children:c.jsx(zr,{countryCode:a(),svg:!0,style:{width:"2.5em",height:"2.5em",borderRadius:"50%",objectFit:"cover"}})})}),e&&c.jsxs(Xn,{children:[c.jsx(Zn,{}),c.jsxs(eo,{children:[c.jsxs(me,{onClick:()=>r("pt"),children:[c.jsx(xe,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(ge,{children:"Português"})]}),c.jsxs(me,{onClick:()=>r("en"),children:[c.jsx(xe,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(ge,{children:"English"})]}),c.jsxs(me,{onClick:()=>r("es"),children:[c.jsx(xe,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(ge,{children:"Español"})]}),c.jsxs(me,{onClick:()=>r("zh"),children:[c.jsx(xe,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),c.jsx(ge,{children:"中文"})]})]})]})]})}const ro=h.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({scrolled:e})=>e?"rgba(0, 0, 0, 0.15)":"transparent"};
  backdrop-filter: ${({scrolled:e})=>e?"blur(5px)":"none"};
  padding: ${({scrolled:e})=>e?"10px 0":"20px 0"};
  box-shadow: ${({scrolled:e})=>e?"0 4px 30px var(--shadowColor)":"none"};
`,no=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,oo=h.div`
  display: flex;
  align-items: center;
`,io=h.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--PosterfyGreen);
`,ao=h.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,so=h.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,lo=h.div`
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
`;function co(){const[e,t]=g.useState(!1),n=".space";return g.useEffect(()=>{const u=()=>{const r=window.scrollY>10;r!==e&&t(r)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[e]),c.jsxs(ro,{scrolled:e,children:[c.jsxs(no,{children:[c.jsxs(oo,{children:[c.jsx(lo,{children:c.jsx($e,{fill:"#01b755",width:"40px",height:"44.05px"})}),c.jsxs(io,{children:["Posterfy",c.jsx(ao,{children:n})]})]}),c.jsx(to,{})]}),c.jsx(so,{scrolled:e})]})}function uo(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function fo(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const ho="/assets/Posterfy%20-%20KTT%20ZOO-CxBnzqPo.png",po="/assets/Posterfy%20-%20Starboy-D-DENvRF.png",mo="/assets/Posterfy%20-%20CHROMAKOPIA-CM4CsO5a.png",go="/assets/Posterfy%20-%20ZIMA-D5rEFrR_.png",xo="/assets/Posterfy%20-%20Sobrevivendo%20no%20inferno-JOZ3yMud.png",vo=[{id:1,coverImage:ho},{id:2,coverImage:po},{id:3,coverImage:mo},{id:4,coverImage:go},{id:5,coverImage:xo}],bo=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  perspective: 1000px;
  padding: 80px 0;
  overflow: hidden;
`,yo=h.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:n,hoveredIndex:u,isMobile:r}=e;if(r)return"scale(1)";let a="scale(0.95)";if(t)a="scale(1.08) translateY(-8px)";else if(u!==null){let o=0;switch(u){case 0:n>0&&(o=70);break;case 1:n>=2&&(o=70);break;case 2:o=0;break;case 3:n<=2&&(o=-70);break;case 4:n<4&&(o=-70);break}o!==0&&(a=`scale(0.95) translateX(${o}px)`)}return a}};
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
`,wo=h.div`
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
`,_o=h.div`
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
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }
`,Co=h.button`
  position: absolute;
  top: -10px;
  right: 50px;
  background: var(--glassBackground);
  border: 2px solid var(--borderColor);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--textColor);
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(8px);

  &:hover {
    background: var(--borderColor);
    border-color: var(--textSecondary);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`,ko=()=>{const[e,t]=g.useState(null),[n,u]=g.useState(!1),[r,a]=g.useState(!1),[o,s]=g.useState(null);g.useEffect(()=>{const f=()=>{u(window.innerWidth<=770),a(window.innerWidth>480&&window.innerWidth<=1200)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const l=f=>{s(f),document.body.style.overflow="hidden"},d=()=>{s(null),document.body.style.overflow="auto"};return c.jsxs(c.Fragment,{children:[c.jsx(bo,{children:vo.map((f,p)=>c.jsx(yo,{index:p,isHovered:e===p,hoveredIndex:e,otherIsHovered:e!==null,isMobile:n,isTablet:r,onMouseEnter:()=>t(p),onMouseLeave:()=>t(null),onClick:()=>l(f.coverImage||"/placeholder.svg"),children:c.jsx("img",{src:f.coverImage||"/placeholder.svg",alt:`${f.artist} - ${f.title}`})},f.id))}),o&&c.jsx(wo,{onClick:d,children:c.jsxs(_o,{onClick:f=>f.stopPropagation(),children:[c.jsx(Co,{onClick:d,children:"×"}),c.jsx("img",{src:o,alt:"Album cover"})]})})]})},To=h.div`
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
`,jo=()=>c.jsx(To,{children:c.jsx(ko,{})}),Io=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},So=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Ro=()=>{let e=[25,50,75,90],t=[];const n=()=>{const u=window.pageYOffset||document.documentElement.scrollTop,r=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(u/r*100);e.forEach(o=>{a>=o&&!t.includes(o)&&(t.push(o),So(o))})};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},Mr=g.createContext(),xt=()=>{const e=g.useContext(Mr);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Eo=({children:e})=>{const[t,n]=g.useState(()=>localStorage.getItem("theme")||"dark");g.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),Io(t)},[t]);const a={theme:t,toggleTheme:()=>{n(o=>o==="light"?"dark":"light")},setSpecificTheme:o=>{n(o)},isLight:t==="light",isDark:t==="dark"};return c.jsx(Mr.Provider,{value:a,children:e})},Oo=h.div`
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
`,Ao=h.div`
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
`,Do=h.h1`
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
`,Xt=h.p`
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
`,Po=h.div`
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
`,zo=h(uo)`
    font-size: 2em;
    color: var(--textColor);
    margin: 10px;
    opacity: ${e=>e.visible?.2:0};
    position: absolute;
    bottom: 7%;
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function Mo({showAnimation:e=!1}){const{t}=J(),{theme:n}=xt(),[u,r]=g.useState(!1);g.useEffect(()=>{if(e){const o=setTimeout(()=>{r(!0)},50);return()=>clearTimeout(o)}},[e]);const a=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return c.jsxs(c.Fragment,{children:[c.jsx(Oo,{children:c.jsxs(Ao,{children:[c.jsx(Do,{visible:u,animationDelay:200,children:"Posterfy"}),c.jsx(Xt,{visible:u,animationDelay:400,children:t("paragraphHero1")}),c.jsx(Xt,{visible:u,animationDelay:600,children:t("paragraphHero2")}),c.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[c.jsx("h2",{children:"Free Album Poster Generator"}),c.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),c.jsx("h3",{children:"Features:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Free album poster maker"}),c.jsx("li",{children:"Spotify integration"}),c.jsx("li",{children:"Custom poster design"}),c.jsx("li",{children:"High-quality downloads"}),c.jsx("li",{children:"Multiple format options"}),c.jsx("li",{children:"Professional templates"})]})]}),c.jsx(Po,{visible:u,animationDelay:800,children:c.jsx($e,{fill:n==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),c.jsx(zo,{visible:u,animationDelay:1e3,onClick:a})]})}),c.jsx(jo,{})]})}const $o=h.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-inline: auto;
`,Fo=h.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function ct({text:e,type:t}){return c.jsx(c.Fragment,{children:t==1?c.jsx($o,{children:e}):c.jsx(Fo,{children:e})})}const Lo=h.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,Bo=h.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,qo=h.p`
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
`,Zt=h.div`
    display: flex;
`;function Uo({title:e,paragraph:t}){return c.jsxs(Lo,{children:[c.jsx(Zt,{children:c.jsx(Bo,{children:e})}),c.jsx(Zt,{children:c.jsx(qo,{children:t})})]})}function Ho(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Qo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function No(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Go(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Wo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Vo(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Yo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Ko(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Jo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Xo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function er(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"},child:[]}]})(e)}function Zo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function ei(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const ti=h.div`
    width: 100%;
`,ri=h.div`
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
`,ni=h(Jo)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,oi=h(ei)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,ii=h.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,ai=h.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function si({onSearch:e,value:t=""}){const{t:n}=J(),[u,r]=g.useState(t);g.useEffect(()=>{r(t)},[t]);const a=l=>{l.key==="Enter"&&(e(u),u.trim()&&Jt(u.trim()))},o=l=>{r(l.target.value)},s=()=>{e(u),u.trim()&&Jt(u.trim())};return c.jsx(ti,{children:c.jsxs(ri,{role:"search","aria-label":"Album search for poster creation",children:[c.jsx(ni,{"aria-hidden":"true"}),c.jsx(ii,{}),c.jsx(ai,{placeholder:n("SearchPlaceholder"),value:u,onChange:o,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),c.jsx(oi,{onClick:s,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const li=V`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,ci=V`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,ui=h.div`
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
`,di=h.div`
    animation: ${e=>e.isExiting?ci:li} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function fi({isVisible:e}){const{theme:t}=xt(),[n,u]=g.useState(!1),[r,a]=g.useState(!1);return g.useEffect(()=>{!e&&!n&&(u(!0),setTimeout(()=>{a(!0)},800))},[e,n]),c.jsx(ui,{isVisible:e,fadeOutContainer:r,children:c.jsx(di,{isExiting:n,children:c.jsx($e,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"118.23px"})})})}const hi=V`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,pi=V`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,vt=V`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,mi=V`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,gi=h.div`
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
    background: linear-gradient(190deg, transparent, var(--PosterfyGreen), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    padding: 25px 0;
  }
`,xi=h.div`
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
`,vi=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${vt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,bi=h.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${hi} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${pi} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,yi=h.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,wi=h.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,_i=h.div`
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
    animation: ${mi} 6s linear infinite;
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
    color: var(--PosterfyGreen);
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
      background: var(--PosterfyGreen);
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
`,Ci=h.div`
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
`,ki=h.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${vt} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;h.h3`
  font-size: 1.1em;
  font-weight: 600;
  color: var(--textColor);
  margin-bottom: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--PosterfyGreen);
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;const Ti=h.div`
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
`,ji=h.button`
  background-color: ${e=>e.color};
  border: none;
  border-radius: 8px;
  width: 45px;
  height: 45px;
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
  border: ${e=>e.active?"1px solid var(--PosterfyGreen)":"1px solid var(--borderColor)"};
  
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
`,Ii=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,Si=h.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,Ri=h.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${vt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,Ei=h.a`
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
`;function Oi(){const{t:e}=J(),{theme:t,setSpecificTheme:n}=xt(),u=o=>{n(o)},r=[{id:"light",name:"Light",color:"#f0efeb",icon:c.jsx(Xo,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:c.jsx(Yo,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:c.jsx(Vo,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:c.jsx(Go,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:c.jsx(er,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:c.jsx(er,{}),isLight:!1}],a=new Date().getFullYear();return c.jsxs(gi,{children:[c.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:c.jsxs("footer",{children:[c.jsx("h4",{children:"Album Poster Generator Links"}),c.jsxs("nav",{children:[c.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),c.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),c.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),c.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),c.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),c.jsxs(xi,{children:[c.jsxs(vi,{children:[c.jsxs(bi,{children:[c.jsx(wi,{className:"icon-shadow"}),c.jsx(yi,{className:"icon-main",children:c.jsx($e,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),c.jsx(_i,{children:c.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",c.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),c.jsxs(Ci,{children:[c.jsx(Wo,{})," © ",a," Posterfy. ",e("AllRights","All rights reserved.")]})]}),c.jsx(ki,{children:c.jsx(Ti,{children:r.map(o=>c.jsxs(Ii,{children:[c.jsx(ji,{color:o.color,active:t===o.id,themeId:o.id,onClick:()=>u(o.id),"aria-label":`${e("SwitchTo","Switch to")} ${o.name} ${e("Theme").toLowerCase()}`,children:o.icon},o.id),c.jsx(Si,{active:t===o.id,children:o.name})]},o.id))})}),c.jsx(Ri,{children:c.jsxs(Ei,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[c.jsx(Ho,{})," ",e("ViewGitHub","GitHub")]})})]})]})}const Ai=h.div`
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
    transition: opacity 0.6s ease, transform 0.6s ease;

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
    }

    :hover::before {
        background-color: var(--borderColor);
        border: 1px solid var(--textSecondary);
    }

    @media (max-width: 650px) {
        width: 96%;
        min-width: unset;
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

    @media (max-width: 6374px) {
        width: 92%;
        min-width: unset;
    }

`,Di=h.img`
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
`,Pi=h.h3`
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

    @media (max-width: 650px) {
        max-width: unset;
        font-size: 0.9em;
    }
`,zi=h.p`
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
`,Mi=h.div`
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
`;function $i({title:e,artist:t,cover:n,id:u,onClick:r,animationDelay:a=0}){const[o,s]=g.useState(!1);return g.useEffect(()=>{const l=setTimeout(()=>{s(!0)},a);return()=>clearTimeout(l)},[a]),c.jsxs(Ai,{onClick:()=>r(u),visible:o,children:[c.jsx(Di,{src:n}),c.jsxs(Mi,{children:[c.jsx(Pi,{children:e}),c.jsx(zi,{children:t})]})]})}function $r(e){return P({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const Fi=h.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,Li=h.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,Bi=h.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,qi=h($r)`
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
`;function Fr(){const{t:e}=J();return c.jsxs(Fi,{children:[c.jsx(qi,{}),c.jsx(Li,{children:e("Loading")}),c.jsx(Bi,{children:e("LoadingText")})]})}const Ui=h.div`
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
`;function tr({query:e,onclick:t}){const[n,u]=g.useState([]),[r,a]=g.useState("");return g.useEffect(()=>{(async()=>{const f=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();a(f.access_token)})()},[]),g.useEffect(()=>{(async()=>{if(r)try{let s;if(e?s=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album`,{headers:{Authorization:`Bearer ${r}`}}):s=await fetch("https://api.spotify.com/v1/browse/new-releases?offset=0&limit=14&locale=en-US",{headers:{Authorization:`Bearer ${r}`}}),!s.ok){const f=await s.text();throw new Error(`Erro na API: ${f}`)}const l=await s.json(),d=l.albums.items.filter(f=>f!=null);u(d.map(f=>{var p,x;return{id:f.id,title:f.name,artist:(p=f.artists)==null?void 0:p.map(_=>_.name).join(", "),cover:(x=f.images[0])==null?void 0:x.url}}))}catch(s){console.error(s)}})()},[e,r]),c.jsx(c.Fragment,{children:n.length===0?c.jsx(Fr,{}):c.jsx(Ui,{children:n.map((o,s)=>c.jsx($i,{onClick:()=>t(o.id),cover:o.cover,title:o.title,artist:o.artist,id:o.id,animationDelay:s*100},o.id))})})}function Hi(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Qi(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Ni=h.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,Gi=h(Hi)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Wi=h.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,Vi=h.hr`
    opacity: 0.15;
    margin: 5px;
`,Yi=h.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,Ki=h.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function se({q:e,a:t}){const[n,u]=g.useState(!1);function r(){u(!n)}return c.jsxs(c.Fragment,{children:[c.jsxs(Ni,{onClick:r,children:[c.jsx(Gi,{showA:n}),c.jsx(Wi,{children:e})]}),c.jsx(Vi,{}),c.jsx(Yi,{showA:n,children:c.jsx(Ki,{showA:n,children:t})})]})}const Ji=h.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`,Xi=h.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Zi(){const{t:e}=J();return c.jsxs(Ji,{id:"faq",children:[c.jsx(ct,{text:"FAQ - Album Poster Generator",type:1}),c.jsxs(Xi,{children:[c.jsx(se,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),c.jsx(se,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),c.jsx(se,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),c.jsx(se,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),c.jsx(se,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const ea=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ta=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ra=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function K({title:e,value:t,onChange:n}){return c.jsxs(ea,{children:[c.jsx(ta,{children:e}),c.jsx(ra,{placeholder:e,value:t,onChange:n})]})}const na=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,oa=h.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,ia=h.input`
    font-size: .85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function rr({title:e,value:t,onChangeTitle:n,onChangeDate:u}){return c.jsxs(na,{children:[c.jsx(oa,{placeholder:e,value:e,onChange:n}),c.jsx(ia,{placeholder:e,value:t,onChange:u})]})}const aa=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,sa=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,la=h.div`
    font-size: .85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,ca=h.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,ua=h.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function le({title:e,value:t,onClick:n}){return c.jsxs(aa,{children:[c.jsx(sa,{children:e}),c.jsxs(la,{onClick:n,children:[c.jsx(ca,{style:{backgroundColor:t}}),c.jsx(ua,{children:t})]})]})}function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e}).apply(this,arguments)}function Lr(e,t){if(e==null)return{};var n,u,r={},a=Object.keys(e);for(u=0;u<a.length;u++)t.indexOf(n=a[u])>=0||(r[n]=e[n]);return r}function ut(e){var t=g.useRef(e),n=g.useRef(function(u){t.current&&t.current(u)});return t.current=e,n.current}var ue=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},ce=function(e){return"touches"in e},dt=function(e){return e&&e.ownerDocument.defaultView||self},nr=function(e,t,n){var u=e.getBoundingClientRect(),r=ce(t)?function(a,o){for(var s=0;s<a.length;s++)if(a[s].identifier===o)return a[s];return a[0]}(t.touches,n):t;return{left:ue((r.pageX-(u.left+dt(e).pageXOffset))/u.width),top:ue((r.pageY-(u.top+dt(e).pageYOffset))/u.height)}},or=function(e){!ce(e)&&e.preventDefault()},Br=q.memo(function(e){var t=e.onMove,n=e.onKey,u=Lr(e,["onMove","onKey"]),r=g.useRef(null),a=ut(t),o=ut(n),s=g.useRef(null),l=g.useRef(!1),d=g.useMemo(function(){var _=function(w){or(w),(ce(w)?w.touches.length>0:w.buttons>0)&&r.current?a(nr(r.current,w,s.current)):m(!1)},v=function(){return m(!1)};function m(w){var C=l.current,T=dt(r.current),b=w?T.addEventListener:T.removeEventListener;b(C?"touchmove":"mousemove",_),b(C?"touchend":"mouseup",v)}return[function(w){var C=w.nativeEvent,T=r.current;if(T&&(or(C),!function(k,I){return I&&!ce(k)}(C,l.current)&&T)){if(ce(C)){l.current=!0;var b=C.changedTouches||[];b.length&&(s.current=b[0].identifier)}T.focus(),a(nr(T,C,s.current)),m(!0)}},function(w){var C=w.which||w.keyCode;C<37||C>40||(w.preventDefault(),o({left:C===39?.05:C===37?-.05:0,top:C===40?.05:C===38?-.05:0}))},m]},[o,a]),f=d[0],p=d[1],x=d[2];return g.useEffect(function(){return x},[x]),q.createElement("div",Fe({},u,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:r,onKeyDown:p,tabIndex:0,role:"slider"}))}),bt=function(e){return e.filter(Boolean).join(" ")},qr=function(e){var t=e.color,n=e.left,u=e.top,r=u===void 0?.5:u,a=bt(["react-colorful__pointer",e.className]);return q.createElement("div",{className:a,style:{top:100*r+"%",left:100*n+"%"}},q.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},L=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},da=function(e){return ga(ft(e))},ft=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?L(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?L(parseInt(e.substring(6,8),16)/255,2):1}},fa=function(e){return ma(pa(e))},ha=function(e){var t=e.s,n=e.v,u=e.a,r=(200-t)*n/100;return{h:L(e.h),s:L(r>0&&r<200?t*n/100/(r<=100?r:200-r)*100:0),l:L(r/2),a:L(u,2)}},ht=function(e){var t=ha(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},pa=function(e){var t=e.h,n=e.s,u=e.v,r=e.a;t=t/360*6,n/=100,u/=100;var a=Math.floor(t),o=u*(1-n),s=u*(1-(t-a)*n),l=u*(1-(1-t+a)*n),d=a%6;return{r:L(255*[u,s,o,o,l,u][d]),g:L(255*[l,u,u,s,o,o][d]),b:L(255*[o,o,l,u,u,s][d]),a:L(r,2)}},ve=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},ma=function(e){var t=e.r,n=e.g,u=e.b,r=e.a,a=r<1?ve(L(255*r)):"";return"#"+ve(t)+ve(n)+ve(u)+a},ga=function(e){var t=e.r,n=e.g,u=e.b,r=e.a,a=Math.max(t,n,u),o=a-Math.min(t,n,u),s=o?a===t?(n-u)/o:a===n?2+(u-t)/o:4+(t-n)/o:0;return{h:L(60*(s<0?s+6:s)),s:L(a?o/a*100:0),v:L(a/255*100),a:r}},xa=q.memo(function(e){var t=e.hue,n=e.onChange,u=bt(["react-colorful__hue",e.className]);return q.createElement("div",{className:u},q.createElement(Br,{onMove:function(r){n({h:360*r.left})},onKey:function(r){n({h:ue(t+360*r.left,0,360)})},"aria-label":"Hue","aria-valuenow":L(t),"aria-valuemax":"360","aria-valuemin":"0"},q.createElement(qr,{className:"react-colorful__hue-pointer",left:t/360,color:ht({h:t,s:100,v:100,a:1})})))}),va=q.memo(function(e){var t=e.hsva,n=e.onChange,u={backgroundColor:ht({h:t.h,s:100,v:100,a:1})};return q.createElement("div",{className:"react-colorful__saturation",style:u},q.createElement(Br,{onMove:function(r){n({s:100*r.left,v:100-100*r.top})},onKey:function(r){n({s:ue(t.s+100*r.left,0,100),v:ue(t.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+L(t.s)+"%, Brightness "+L(t.v)+"%"},q.createElement(qr,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ht(t)})))}),Ur=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},ba=function(e,t){return e.toLowerCase()===t.toLowerCase()||Ur(ft(e),ft(t))};function ya(e,t,n){var u=ut(n),r=g.useState(function(){return e.toHsva(t)}),a=r[0],o=r[1],s=g.useRef({color:t,hsva:a});g.useEffect(function(){if(!e.equal(t,s.current.color)){var d=e.toHsva(t);s.current={hsva:d,color:t},o(d)}},[t,e]),g.useEffect(function(){var d;Ur(a,s.current.hsva)||e.equal(d=e.fromHsva(a),s.current.color)||(s.current={hsva:a,color:d},u(d))},[a,e,u]);var l=g.useCallback(function(d){o(function(f){return Object.assign({},f,d)})},[]);return[a,l]}var wa=typeof window<"u"?g.useLayoutEffect:g.useEffect,_a=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},ir=new Map,Ca=function(e){wa(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!ir.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ir.set(t,n);var u=_a();u&&n.setAttribute("nonce",u),t.head.appendChild(n)}},[])},ka=function(e){var t=e.className,n=e.colorModel,u=e.color,r=u===void 0?n.defaultColor:u,a=e.onChange,o=Lr(e,["className","colorModel","color","onChange"]),s=g.useRef(null);Ca(s);var l=ya(n,r,a),d=l[0],f=l[1],p=bt(["react-colorful",t]);return q.createElement("div",Fe({},o,{ref:s,className:p}),q.createElement(va,{hsva:d,onChange:f}),q.createElement(xa,{hue:d.h,onChange:f,className:"react-colorful__last-control"}))},Ta={defaultColor:"000",toHsva:da,fromHsva:function(e){return fa({h:e.h,s:e.s,v:e.v,a:1})},equal:ba},ja=function(e){return q.createElement(ka,Fe({},e,{colorModel:Ta}))};function Ia(e){return P({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}const Sa=h.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 3px solid var(--borderColor);
`,Ra=h(ja)`
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
    }

    .react-colorful__pointer{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        border-width: 1px;
    }
`,Xe=h.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`,Ea=h.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-inline: auto;
    cursor: pointer;
`,Oa=h.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Aa=h.input`
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
`,Da=h(No)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }
`,Pa=h(Ko)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }
`,za=h(Ia)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    margin-inline: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
        color: #ff4444;
    }
`,Ma=h(Qo)`
    font-size: 1em;
    background-color: var(--glassBackground);
    color: var(--textColor);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
        color: var(--PosterfyGreen);
    }
`,$a=h.img`
    border-radius: 5px;
    max-width: 200px;
    height: auto;
    height: 200px;
    background-color: var(--glassBackground);
    border: 1px solid var(--borderColor);
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    cursor: crosshair;
`;function Fa({DefaultColor:e,image:t,predefinedColors:n,position:u,onDone:r,onClose:a}){const[o,s]=g.useState(e),[l,d]=g.useState(!1),f=g.useRef(null),p=g.useRef(null);function x(){d(!l)}function _(m){s(m.target.value===""?"#":m.target.value)}function v(m){const w=f.current,T=p.current.getBoundingClientRect(),b=w.getContext("2d"),k=m.clientX-T.left,I=m.clientY-T.top,S=`#${[...b.getImageData(k,I,1,1).data].slice(0,3).map(R=>R.toString(16).padStart(2,"0")).join("")}`;s(S),x()}return c.jsxs(Sa,{style:{position:"absolute",top:u.top,left:u.left,zIndex:1e3},children:[c.jsx("canvas",{ref:f,style:{display:"none"}}),l?c.jsx($a,{ref:p,crossOrigin:"anonymous",draggable:"false",src:t,onClick:v,onLoad:()=>{const m=f.current,w=m.getContext("2d"),C=p.current;m.width=C.width,m.height=C.height,w.drawImage(C,0,0,C.width,C.height)}}):c.jsx(Ra,{color:o,onChange:s}),c.jsx(Xe,{children:n.map(m=>c.jsx(Ea,{style:{backgroundColor:m},onClick:()=>s(m)},m))}),c.jsxs(Xe,{children:[c.jsx(Oa,{children:"Hex"}),c.jsx(Aa,{value:o,onChange:_})]}),c.jsxs(Xe,{children:[l?c.jsx(Pa,{onClick:x}):c.jsx(Da,{onClick:x}),c.jsx(za,{onClick:a}),c.jsx(Ma,{onClick:()=>{r(o),Wn(o)}})]})]})}const La=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Ba=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,qa=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Ua=h.input`
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
        background-color: var(--PosterfyGreen);
        border-color: var(--PosterfyGreen);
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
        border-color: var(--PosterfyGreen);
        opacity: 0.8;
    }
`,Ha=h.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function be({title:e,text:t,value:n,onChange:u}){const r=()=>u(!n);return c.jsxs(La,{children:[c.jsx(Ba,{children:e}),c.jsxs(qa,{onClick:r,children:[c.jsx(Ua,{checked:n,readOnly:!0,type:"checkbox"}),c.jsx(Ha,{active:n,children:t})]})]})}function Qa(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function Na(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const Ga=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Wa=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Va=h.div`
    font-size: 0.85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Ya=h.input`
    appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;
    display: none;

    &:checked {
        background-color: var(--PosterfyGreen);
    }
`,Ka=h.p`
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
`,Ja=h(Qa)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function Xa({title:e,text:t,onChange:n}){const u=g.useRef(),r=()=>{u.current.click()},a=o=>{const s=o.target.files[0];t=s.name,s&&n(s)};return c.jsxs(Ga,{onClick:r,children:[c.jsx(Wa,{children:e}),c.jsxs(Va,{children:[c.jsx(Ja,{}),c.jsx(Ya,{ref:u,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:a}),c.jsx(Ka,{active:!0,children:t})]})]})}const Za=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,es=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ts=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,rs=h.input`
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
        background-color: var(--PosterfyGreen);
    }
`,ns=h.p`
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
`,os=h(Na)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function is({title:e,text:t,onChange:n}){const u=g.useRef(),r=()=>{u.current.click()},a=o=>{const s=o.target.files[0];t=s.name,s&&n(s)};return c.jsxs(Za,{onClick:r,children:[c.jsx(es,{children:e}),c.jsxs(ts,{children:[c.jsx(os,{}),c.jsx(rs,{ref:u,type:"file",accept:".ttf,.otf",onChange:a}),c.jsx(ns,{active:!0,children:t})]})]})}var Q={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pt=function(e,t){return pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,u){n.__proto__=u}||function(n,u){for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r])},pt(e,t)};function as(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");pt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var mt=function(){return mt=Object.assign||function(t){for(var n,u=1,r=arguments.length;u<r;u++){n=arguments[u];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},mt.apply(this,arguments)};function ss(e,t){var n={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&t.indexOf(u)<0&&(n[u]=e[u]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,u=Object.getOwnPropertySymbols(e);r<u.length;r++)t.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(e,u[r])&&(n[u[r]]=e[u[r]]);return n}function ls(e,t,n,u){var r=arguments.length,a=r<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,n):u,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,u);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function cs(e,t){return function(n,u){t(n,u,e)}}function us(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function ds(e,t,n,u){function r(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(f){try{d(u.next(f))}catch(p){o(p)}}function l(f){try{d(u.throw(f))}catch(p){o(p)}}function d(f){f.done?a(f.value):r(f.value).then(s,l)}d((u=u.apply(e,t||[])).next())})}function fs(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},u,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(d){return function(f){return l([d,f])}}function l(d){if(u)throw new TypeError("Generator is already executing.");for(;n;)try{if(u=1,r&&(a=d[0]&2?r.return:d[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,d[1])).done)return a;switch(r=0,a&&(d=[d[0]&2,a.value]),d[0]){case 0:case 1:a=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,r=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!a||d[1]>a[0]&&d[1]<a[3])){n.label=d[1];break}if(d[0]===6&&n.label<a[1]){n.label=a[1],a=d;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(d);break}a[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(f){d=[6,f],r=0}finally{u=a=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}var yt=Object.create?function(e,t,n,u){u===void 0&&(u=n),Object.defineProperty(e,u,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,u){u===void 0&&(u=n),e[u]=t[n]};function hs(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&yt(t,e,n)}function gt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],u=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&u>=e.length&&(e=void 0),{value:e&&e[u++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Hr(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var u=n.call(e),r,a=[],o;try{for(;(t===void 0||t-- >0)&&!(r=u.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return a}function ps(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Hr(arguments[t]));return e}function ms(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var u=Array(e),r=0,t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,r++)u[r]=a[o];return u}function gs(e,t,n){if(n||arguments.length===2)for(var u=0,r=t.length,a;u<r;u++)(a||!(u in t))&&(a||(a=Array.prototype.slice.call(t,0,u)),a[u]=t[u]);return e.concat(a||t)}function de(e){return this instanceof de?(this.v=e,this):new de(e)}function xs(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u=n.apply(e,t||[]),r,a=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(x){u[x]&&(r[x]=function(_){return new Promise(function(v,m){a.push([x,_,v,m])>1||s(x,_)})})}function s(x,_){try{l(u[x](_))}catch(v){p(a[0][3],v)}}function l(x){x.value instanceof de?Promise.resolve(x.value.v).then(d,f):p(a[0][2],x)}function d(x){s("next",x)}function f(x){s("throw",x)}function p(x,_){x(_),a.shift(),a.length&&s(a[0][0],a[0][1])}}function vs(e){var t,n;return t={},u("next"),u("throw",function(r){throw r}),u("return"),t[Symbol.iterator]=function(){return this},t;function u(r,a){t[r]=e[r]?function(o){return(n=!n)?{value:de(e[r](o)),done:r==="return"}:a?a(o):o}:a}}function bs(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof gt=="function"?gt(e):e[Symbol.iterator](),n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n);function u(a){n[a]=e[a]&&function(o){return new Promise(function(s,l){o=e[a](o),r(s,l,o.done,o.value)})}}function r(a,o,s,l){Promise.resolve(l).then(function(d){a({value:d,done:s})},o)}}function ys(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var ws=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function _s(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&yt(t,e,n);return ws(t,e),t}function Cs(e){return e&&e.__esModule?e:{default:e}}function ks(e,t,n,u){if(n==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!u:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?u:n==="a"?u.call(e):u?u.value:t.get(e)}function Ts(e,t,n,u,r){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?r.call(e,n):r?r.value=n:t.set(e,n),n}const js=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return mt},__asyncDelegator:vs,__asyncGenerator:xs,__asyncValues:bs,__await:de,__awaiter:ds,__classPrivateFieldGet:ks,__classPrivateFieldSet:Ts,__createBinding:yt,__decorate:ls,__exportStar:hs,__extends:as,__generator:fs,__importDefault:Cs,__importStar:_s,__makeTemplateObject:ys,__metadata:us,__param:cs,__read:Hr,__rest:ss,__spread:ps,__spreadArray:gs,__spreadArrays:ms,__values:gt},Symbol.toStringTag,{value:"Module"})),Y=On(js);var ye={},we={},Ze={},_e={},ar;function Is(){if(ar)return _e;ar=1,_e.__esModule=!0;var e=g;function t(n,u){e.useEffect(function(){var r=!0,a=function(){return r},o=n(a);return function(){r=!1,o&&o()}},u)}return _e.useCurrentEffect=t,_e}var Ce={},sr;function Ss(){if(sr)return Ce;sr=1,Ce.__esModule=!0;var e=g;function t(n,u){var r=!0,a=function(){return r};return e.useEffect(function(){return function(){r=!1}},u),e.useCallback(n(a),u)}return Ce.useCurrentCallback=t,Ce}var lr;function Qr(){return lr||(lr=1,function(e){function t(n){for(var u in n)e.hasOwnProperty(u)||(e[u]=n[u])}e.__esModule=!0,t(Is()),t(Ss())}(Ze)),Ze}var et={},ke={},cr;function Nr(){if(cr)return ke;cr=1,Object.defineProperty(ke,"__esModule",{value:!0});var e={loading:!0,data:void 0,error:void 0};return ke.default=e,ke}var Te={},ur;function Rs(){if(ur)return Te;ur=1,Object.defineProperty(Te,"__esModule",{value:!0});var e=Y,t=e.__importDefault(Nr());function n(u,r){var a={start:function(){return t.default},resolve:function(){return e.__assign(e.__assign({},u),{data:r.payload,loading:!1})},reject:function(){return e.__assign(e.__assign({},u),{error:r.payload,loading:!1})}};return a[r.type]()}return Te.default=n,Te}var je={},tt,dr;function Es(){return dr||(dr=1,tt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),tt}var rt,fr;function Gr(){if(fr)return rt;fr=1;const e=Es(),t={};for(const r of Object.keys(e))t[e[r]]=r;const n={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};rt=n;for(const r of Object.keys(n)){if(!("channels"in n[r]))throw new Error("missing channels property: "+r);if(!("labels"in n[r]))throw new Error("missing channel labels property: "+r);if(n[r].labels.length!==n[r].channels)throw new Error("channel and label counts mismatch: "+r);const{channels:a,labels:o}=n[r];delete n[r].channels,delete n[r].labels,Object.defineProperty(n[r],"channels",{value:a}),Object.defineProperty(n[r],"labels",{value:o})}n.rgb.hsl=function(r){const a=r[0]/255,o=r[1]/255,s=r[2]/255,l=Math.min(a,o,s),d=Math.max(a,o,s),f=d-l;let p,x;d===l?p=0:a===d?p=(o-s)/f:o===d?p=2+(s-a)/f:s===d&&(p=4+(a-o)/f),p=Math.min(p*60,360),p<0&&(p+=360);const _=(l+d)/2;return d===l?x=0:_<=.5?x=f/(d+l):x=f/(2-d-l),[p,x*100,_*100]},n.rgb.hsv=function(r){let a,o,s,l,d;const f=r[0]/255,p=r[1]/255,x=r[2]/255,_=Math.max(f,p,x),v=_-Math.min(f,p,x),m=function(w){return(_-w)/6/v+1/2};return v===0?(l=0,d=0):(d=v/_,a=m(f),o=m(p),s=m(x),f===_?l=s-o:p===_?l=1/3+a-s:x===_&&(l=2/3+o-a),l<0?l+=1:l>1&&(l-=1)),[l*360,d*100,_*100]},n.rgb.hwb=function(r){const a=r[0],o=r[1];let s=r[2];const l=n.rgb.hsl(r)[0],d=1/255*Math.min(a,Math.min(o,s));return s=1-1/255*Math.max(a,Math.max(o,s)),[l,d*100,s*100]},n.rgb.cmyk=function(r){const a=r[0]/255,o=r[1]/255,s=r[2]/255,l=Math.min(1-a,1-o,1-s),d=(1-a-l)/(1-l)||0,f=(1-o-l)/(1-l)||0,p=(1-s-l)/(1-l)||0;return[d*100,f*100,p*100,l*100]};function u(r,a){return(r[0]-a[0])**2+(r[1]-a[1])**2+(r[2]-a[2])**2}return n.rgb.keyword=function(r){const a=t[r];if(a)return a;let o=1/0,s;for(const l of Object.keys(e)){const d=e[l],f=u(r,d);f<o&&(o=f,s=l)}return s},n.keyword.rgb=function(r){return e[r]},n.rgb.xyz=function(r){let a=r[0]/255,o=r[1]/255,s=r[2]/255;a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,o=o>.04045?((o+.055)/1.055)**2.4:o/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92;const l=a*.4124+o*.3576+s*.1805,d=a*.2126+o*.7152+s*.0722,f=a*.0193+o*.1192+s*.9505;return[l*100,d*100,f*100]},n.rgb.lab=function(r){const a=n.rgb.xyz(r);let o=a[0],s=a[1],l=a[2];o/=95.047,s/=100,l/=108.883,o=o>.008856?o**(1/3):7.787*o+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const d=116*s-16,f=500*(o-s),p=200*(s-l);return[d,f,p]},n.hsl.rgb=function(r){const a=r[0]/360,o=r[1]/100,s=r[2]/100;let l,d,f;if(o===0)return f=s*255,[f,f,f];s<.5?l=s*(1+o):l=s+o-s*o;const p=2*s-l,x=[0,0,0];for(let _=0;_<3;_++)d=a+1/3*-(_-1),d<0&&d++,d>1&&d--,6*d<1?f=p+(l-p)*6*d:2*d<1?f=l:3*d<2?f=p+(l-p)*(2/3-d)*6:f=p,x[_]=f*255;return x},n.hsl.hsv=function(r){const a=r[0];let o=r[1]/100,s=r[2]/100,l=o;const d=Math.max(s,.01);s*=2,o*=s<=1?s:2-s,l*=d<=1?d:2-d;const f=(s+o)/2,p=s===0?2*l/(d+l):2*o/(s+o);return[a,p*100,f*100]},n.hsv.rgb=function(r){const a=r[0]/60,o=r[1]/100;let s=r[2]/100;const l=Math.floor(a)%6,d=a-Math.floor(a),f=255*s*(1-o),p=255*s*(1-o*d),x=255*s*(1-o*(1-d));switch(s*=255,l){case 0:return[s,x,f];case 1:return[p,s,f];case 2:return[f,s,x];case 3:return[f,p,s];case 4:return[x,f,s];case 5:return[s,f,p]}},n.hsv.hsl=function(r){const a=r[0],o=r[1]/100,s=r[2]/100,l=Math.max(s,.01);let d,f;f=(2-o)*s;const p=(2-o)*l;return d=o*l,d/=p<=1?p:2-p,d=d||0,f/=2,[a,d*100,f*100]},n.hwb.rgb=function(r){const a=r[0]/360;let o=r[1]/100,s=r[2]/100;const l=o+s;let d;l>1&&(o/=l,s/=l);const f=Math.floor(6*a),p=1-s;d=6*a-f,f&1&&(d=1-d);const x=o+d*(p-o);let _,v,m;switch(f){default:case 6:case 0:_=p,v=x,m=o;break;case 1:_=x,v=p,m=o;break;case 2:_=o,v=p,m=x;break;case 3:_=o,v=x,m=p;break;case 4:_=x,v=o,m=p;break;case 5:_=p,v=o,m=x;break}return[_*255,v*255,m*255]},n.cmyk.rgb=function(r){const a=r[0]/100,o=r[1]/100,s=r[2]/100,l=r[3]/100,d=1-Math.min(1,a*(1-l)+l),f=1-Math.min(1,o*(1-l)+l),p=1-Math.min(1,s*(1-l)+l);return[d*255,f*255,p*255]},n.xyz.rgb=function(r){const a=r[0]/100,o=r[1]/100,s=r[2]/100;let l,d,f;return l=a*3.2406+o*-1.5372+s*-.4986,d=a*-.9689+o*1.8758+s*.0415,f=a*.0557+o*-.204+s*1.057,l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92,d=d>.0031308?1.055*d**(1/2.4)-.055:d*12.92,f=f>.0031308?1.055*f**(1/2.4)-.055:f*12.92,l=Math.min(Math.max(0,l),1),d=Math.min(Math.max(0,d),1),f=Math.min(Math.max(0,f),1),[l*255,d*255,f*255]},n.xyz.lab=function(r){let a=r[0],o=r[1],s=r[2];a/=95.047,o/=100,s/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,o=o>.008856?o**(1/3):7.787*o+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const l=116*o-16,d=500*(a-o),f=200*(o-s);return[l,d,f]},n.lab.xyz=function(r){const a=r[0],o=r[1],s=r[2];let l,d,f;d=(a+16)/116,l=o/500+d,f=d-s/200;const p=d**3,x=l**3,_=f**3;return d=p>.008856?p:(d-16/116)/7.787,l=x>.008856?x:(l-16/116)/7.787,f=_>.008856?_:(f-16/116)/7.787,l*=95.047,d*=100,f*=108.883,[l,d,f]},n.lab.lch=function(r){const a=r[0],o=r[1],s=r[2];let l;l=Math.atan2(s,o)*360/2/Math.PI,l<0&&(l+=360);const f=Math.sqrt(o*o+s*s);return[a,f,l]},n.lch.lab=function(r){const a=r[0],o=r[1],l=r[2]/360*2*Math.PI,d=o*Math.cos(l),f=o*Math.sin(l);return[a,d,f]},n.rgb.ansi16=function(r,a=null){const[o,s,l]=r;let d=a===null?n.rgb.hsv(r)[2]:a;if(d=Math.round(d/50),d===0)return 30;let f=30+(Math.round(l/255)<<2|Math.round(s/255)<<1|Math.round(o/255));return d===2&&(f+=60),f},n.hsv.ansi16=function(r){return n.rgb.ansi16(n.hsv.rgb(r),r[2])},n.rgb.ansi256=function(r){const a=r[0],o=r[1],s=r[2];return a===o&&o===s?a<8?16:a>248?231:Math.round((a-8)/247*24)+232:16+36*Math.round(a/255*5)+6*Math.round(o/255*5)+Math.round(s/255*5)},n.ansi16.rgb=function(r){let a=r%10;if(a===0||a===7)return r>50&&(a+=3.5),a=a/10.5*255,[a,a,a];const o=(~~(r>50)+1)*.5,s=(a&1)*o*255,l=(a>>1&1)*o*255,d=(a>>2&1)*o*255;return[s,l,d]},n.ansi256.rgb=function(r){if(r>=232){const d=(r-232)*10+8;return[d,d,d]}r-=16;let a;const o=Math.floor(r/36)/5*255,s=Math.floor((a=r%36)/6)/5*255,l=a%6/5*255;return[o,s,l]},n.rgb.hex=function(r){const o=(((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255)).toString(16).toUpperCase();return"000000".substring(o.length)+o},n.hex.rgb=function(r){const a=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!a)return[0,0,0];let o=a[0];a[0].length===3&&(o=o.split("").map(p=>p+p).join(""));const s=parseInt(o,16),l=s>>16&255,d=s>>8&255,f=s&255;return[l,d,f]},n.rgb.hcg=function(r){const a=r[0]/255,o=r[1]/255,s=r[2]/255,l=Math.max(Math.max(a,o),s),d=Math.min(Math.min(a,o),s),f=l-d;let p,x;return f<1?p=d/(1-f):p=0,f<=0?x=0:l===a?x=(o-s)/f%6:l===o?x=2+(s-a)/f:x=4+(a-o)/f,x/=6,x%=1,[x*360,f*100,p*100]},n.hsl.hcg=function(r){const a=r[1]/100,o=r[2]/100,s=o<.5?2*a*o:2*a*(1-o);let l=0;return s<1&&(l=(o-.5*s)/(1-s)),[r[0],s*100,l*100]},n.hsv.hcg=function(r){const a=r[1]/100,o=r[2]/100,s=a*o;let l=0;return s<1&&(l=(o-s)/(1-s)),[r[0],s*100,l*100]},n.hcg.rgb=function(r){const a=r[0]/360,o=r[1]/100,s=r[2]/100;if(o===0)return[s*255,s*255,s*255];const l=[0,0,0],d=a%1*6,f=d%1,p=1-f;let x=0;switch(Math.floor(d)){case 0:l[0]=1,l[1]=f,l[2]=0;break;case 1:l[0]=p,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=f;break;case 3:l[0]=0,l[1]=p,l[2]=1;break;case 4:l[0]=f,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=p}return x=(1-o)*s,[(o*l[0]+x)*255,(o*l[1]+x)*255,(o*l[2]+x)*255]},n.hcg.hsv=function(r){const a=r[1]/100,o=r[2]/100,s=a+o*(1-a);let l=0;return s>0&&(l=a/s),[r[0],l*100,s*100]},n.hcg.hsl=function(r){const a=r[1]/100,s=r[2]/100*(1-a)+.5*a;let l=0;return s>0&&s<.5?l=a/(2*s):s>=.5&&s<1&&(l=a/(2*(1-s))),[r[0],l*100,s*100]},n.hcg.hwb=function(r){const a=r[1]/100,o=r[2]/100,s=a+o*(1-a);return[r[0],(s-a)*100,(1-s)*100]},n.hwb.hcg=function(r){const a=r[1]/100,s=1-r[2]/100,l=s-a;let d=0;return l<1&&(d=(s-l)/(1-l)),[r[0],l*100,d*100]},n.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},n.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},n.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},n.gray.hsl=function(r){return[0,0,r[0]]},n.gray.hsv=n.gray.hsl,n.gray.hwb=function(r){return[0,100,r[0]]},n.gray.cmyk=function(r){return[0,0,0,r[0]]},n.gray.lab=function(r){return[r[0],0,0]},n.gray.hex=function(r){const a=Math.round(r[0]/100*255)&255,s=((a<<16)+(a<<8)+a).toString(16).toUpperCase();return"000000".substring(s.length)+s},n.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]},rt}var nt,hr;function Os(){if(hr)return nt;hr=1;const e=Gr();function t(){const a={},o=Object.keys(e);for(let s=o.length,l=0;l<s;l++)a[o[l]]={distance:-1,parent:null};return a}function n(a){const o=t(),s=[a];for(o[a].distance=0;s.length;){const l=s.pop(),d=Object.keys(e[l]);for(let f=d.length,p=0;p<f;p++){const x=d[p],_=o[x];_.distance===-1&&(_.distance=o[l].distance+1,_.parent=l,s.unshift(x))}}return o}function u(a,o){return function(s){return o(a(s))}}function r(a,o){const s=[o[a].parent,a];let l=e[o[a].parent][a],d=o[a].parent;for(;o[d].parent;)s.unshift(o[d].parent),l=u(e[o[d].parent][d],l),d=o[d].parent;return l.conversion=s,l}return nt=function(a){const o=n(a),s={},l=Object.keys(o);for(let d=l.length,f=0;f<d;f++){const p=l[f];o[p].parent!==null&&(s[p]=r(p,o))}return s},nt}var ot,pr;function As(){if(pr)return ot;pr=1;const e=Gr(),t=Os(),n={},u=Object.keys(e);function r(o){const s=function(...l){const d=l[0];return d==null?d:(d.length>1&&(l=d),o(l))};return"conversion"in o&&(s.conversion=o.conversion),s}function a(o){const s=function(...l){const d=l[0];if(d==null)return d;d.length>1&&(l=d);const f=o(l);if(typeof f=="object")for(let p=f.length,x=0;x<p;x++)f[x]=Math.round(f[x]);return f};return"conversion"in o&&(s.conversion=o.conversion),s}return u.forEach(o=>{n[o]={},Object.defineProperty(n[o],"channels",{value:e[o].channels}),Object.defineProperty(n[o],"labels",{value:e[o].labels});const s=t(o);Object.keys(s).forEach(d=>{const f=s[d];n[o][d]=a(f),n[o][d].raw=r(f)})}),ot=n,ot}var Ie={},mr;function Wr(){if(mr)return Ie;mr=1,Object.defineProperty(Ie,"__esModule",{value:!0});function e(t,n,u){return"rgb("+t+", "+n+", "+u+")"}return Ie.default=e,Ie}var Se={},gr;function Ds(){if(gr)return Se;gr=1,Object.defineProperty(Se,"__esModule",{value:!0});function e(t){return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}return Se.default=e,Se}var Re={},xr;function Ps(){if(xr)return Re;xr=1,Object.defineProperty(Re,"__esModule",{value:!0});function e(t){return"#"+t.toLowerCase()}return Re.default=e,Re}var vr;function zs(){if(vr)return je;vr=1,Object.defineProperty(je,"__esModule",{value:!0});var e=Y,t=e.__importDefault(As()),n=e.__importDefault(Wr()),u=e.__importDefault(Ds()),r=e.__importDefault(Ps());function a(o,s){var l={rgbString:function(){return n.default.apply(void 0,o)},hex:function(){var d;return r.default((d=t.default.rgb).hex.apply(d,o))},rgbArray:function(){return o},hslString:function(){var d;return u.default((d=t.default.rgb).hsl.apply(d,o))},hslArray:function(){var d;return(d=t.default.rgb).hsl.apply(d,o)},keyword:function(){var d;return(d=t.default.rgb).keyword.apply(d,o)}};return l[s]()}return je.default=a,je}var Ee={},it={exports:{}},br;function Vr(){return br||(br=1,function(e,t){(function(n,u){e.exports=u()})(lt,function(){if(!n)var n={map:function(o,s){var l={};return s?o.map(function(d,f){return l.index=f,s.call(l,d)}):o.slice()},naturalOrder:function(o,s){return o<s?-1:o>s?1:0},sum:function(o,s){var l={};return o.reduce(s?function(d,f,p){return l.index=p,d+s.call(l,f)}:function(d,f){return d+f},0)},max:function(o,s){return Math.max.apply(null,s?n.map(o,s):o)}};var u=function(){var o=5,s=8-o,l=1e3;function d(v,m,w){return(v<<2*o)+(m<<o)+w}function f(v){var m=[],w=!1;function C(){m.sort(v),w=!0}return{push:function(T){m.push(T),w=!1},peek:function(T){return w||C(),T===void 0&&(T=m.length-1),m[T]},pop:function(){return w||C(),m.pop()},size:function(){return m.length},map:function(T){return m.map(T)},debug:function(){return w||C(),m}}}function p(v,m,w,C,T,b,k){this.r1=v,this.r2=m,this.g1=w,this.g2=C,this.b1=T,this.b2=b,this.histo=k}function x(){this.vboxes=new f(function(v,m){return n.naturalOrder(v.vbox.count()*v.vbox.volume(),m.vbox.count()*m.vbox.volume())})}function _(v,m){if(m.count()){var w=m.r2-m.r1+1,C=m.g2-m.g1+1,T=n.max([w,C,m.b2-m.b1+1]);if(m.count()==1)return[m.copy()];var b,k,I,j,S=0,R=[],O=[];if(T==w)for(b=m.r1;b<=m.r2;b++){for(j=0,k=m.g1;k<=m.g2;k++)for(I=m.b1;I<=m.b2;I++)j+=v[d(b,k,I)]||0;R[b]=S+=j}else if(T==C)for(b=m.g1;b<=m.g2;b++){for(j=0,k=m.r1;k<=m.r2;k++)for(I=m.b1;I<=m.b2;I++)j+=v[d(k,b,I)]||0;R[b]=S+=j}else for(b=m.b1;b<=m.b2;b++){for(j=0,k=m.r1;k<=m.r2;k++)for(I=m.g1;I<=m.g2;I++)j+=v[d(k,I,b)]||0;R[b]=S+=j}return R.forEach(function(D,M){O[M]=S-D}),function(D){var M,z,$,U,B,H=D+"1",N=D+"2",Z=0;for(b=m[H];b<=m[N];b++)if(R[b]>S/2){for($=m.copy(),U=m.copy(),B=(M=b-m[H])<=(z=m[N]-b)?Math.min(m[N]-1,~~(b+z/2)):Math.max(m[H],~~(b-1-M/2));!R[B];)B++;for(Z=O[B];!Z&&R[B-1];)Z=O[--B];return $[N]=B,U[H]=$[N]+1,[$,U]}}(T==w?"r":T==C?"g":"b")}}return p.prototype={volume:function(v){return this._volume&&!v||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(v){var m=this.histo;if(!this._count_set||v){var w,C,T,b=0;for(w=this.r1;w<=this.r2;w++)for(C=this.g1;C<=this.g2;C++)for(T=this.b1;T<=this.b2;T++)b+=m[d(w,C,T)]||0;this._count=b,this._count_set=!0}return this._count},copy:function(){return new p(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(v){var m=this.histo;if(!this._avg||v){var w,C,T,b,k=0,I=1<<8-o,j=0,S=0,R=0;for(C=this.r1;C<=this.r2;C++)for(T=this.g1;T<=this.g2;T++)for(b=this.b1;b<=this.b2;b++)k+=w=m[d(C,T,b)]||0,j+=w*(C+.5)*I,S+=w*(T+.5)*I,R+=w*(b+.5)*I;this._avg=k?[~~(j/k),~~(S/k),~~(R/k)]:[~~(I*(this.r1+this.r2+1)/2),~~(I*(this.g1+this.g2+1)/2),~~(I*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(v){var m=v[0]>>s;return gval=v[1]>>s,bval=v[2]>>s,m>=this.r1&&m<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},x.prototype={push:function(v){this.vboxes.push({vbox:v,color:v.avg()})},palette:function(){return this.vboxes.map(function(v){return v.color})},size:function(){return this.vboxes.size()},map:function(v){for(var m=this.vboxes,w=0;w<m.size();w++)if(m.peek(w).vbox.contains(v))return m.peek(w).color;return this.nearest(v)},nearest:function(v){for(var m,w,C,T=this.vboxes,b=0;b<T.size();b++)((w=Math.sqrt(Math.pow(v[0]-T.peek(b).color[0],2)+Math.pow(v[1]-T.peek(b).color[1],2)+Math.pow(v[2]-T.peek(b).color[2],2)))<m||m===void 0)&&(m=w,C=T.peek(b).color);return C},forcebw:function(){var v=this.vboxes;v.sort(function(T,b){return n.naturalOrder(n.sum(T.color),n.sum(b.color))});var m=v[0].color;m[0]<5&&m[1]<5&&m[2]<5&&(v[0].color=[0,0,0]);var w=v.length-1,C=v[w].color;C[0]>251&&C[1]>251&&C[2]>251&&(v[w].color=[255,255,255])}},{quantize:function(v,m){if(!v.length||m<2||m>256)return!1;var w=function(j){var S,R=new Array(1<<3*o);return j.forEach(function(O){S=d(O[0]>>s,O[1]>>s,O[2]>>s),R[S]=(R[S]||0)+1}),R}(v);w.forEach(function(){});var C=function(j,S){var R,O,D,M=1e6,z=0,$=1e6,U=0,B=1e6,H=0;return j.forEach(function(N){(R=N[0]>>s)<M?M=R:R>z&&(z=R),(O=N[1]>>s)<$?$=O:O>U&&(U=O),(D=N[2]>>s)<B?B=D:D>H&&(H=D)}),new p(M,z,$,U,B,H,S)}(v,w),T=new f(function(j,S){return n.naturalOrder(j.count(),S.count())});function b(j,S){for(var R,O=j.size(),D=0;D<l;){if(O>=S||D++>l)return;if((R=j.pop()).count()){var M=_(w,R),z=M[0],$=M[1];if(!z)return;j.push(z),$&&(j.push($),O++)}else j.push(R),D++}}T.push(C),b(T,.75*m);for(var k=new f(function(j,S){return n.naturalOrder(j.count()*j.volume(),S.count()*S.volume())});T.size();)k.push(T.pop());b(k,m);for(var I=new x;k.size();)I.push(k.pop());return I}}}().quantize,r=function(o){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=o.naturalWidth,this.height=this.canvas.height=o.naturalHeight,this.context.drawImage(o,0,0,this.width,this.height)};r.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var a=function(){};return a.prototype.getColor=function(o,s){return s===void 0&&(s=10),this.getPalette(o,5,s)[0]},a.prototype.getPalette=function(o,s,l){var d=function(_){var v=_.colorCount,m=_.quality;if(v!==void 0&&Number.isInteger(v)){if(v===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");v=Math.max(v,2),v=Math.min(v,20)}else v=10;return(m===void 0||!Number.isInteger(m)||m<1)&&(m=10),{colorCount:v,quality:m}}({colorCount:s,quality:l}),f=new r(o),p=function(_,v,m){for(var w=_,C=[],T=0,b=void 0,k=void 0,I=void 0,j=void 0,S=void 0;T<v;T+=m)k=w[0+(b=4*T)],I=w[b+1],j=w[b+2],((S=w[b+3])===void 0||S>=125)&&(k>250&&I>250&&j>250||C.push([k,I,j]));return C}(f.getImageData().data,f.width*f.height,d.quality),x=u(p,d.colorCount);return x?x.palette():null},a.prototype.getColorFromUrl=function(o,s,l){var d=this,f=document.createElement("img");f.addEventListener("load",function(){var p=d.getPalette(f,5,l);s(p[0],o)}),f.src=o},a.prototype.getImageData=function(o,s){var l=new XMLHttpRequest;l.open("GET",o,!0),l.responseType="arraybuffer",l.onload=function(){if(this.status==200){var d=new Uint8Array(this.response);i=d.length;for(var f=new Array(i),p=0;p<d.length;p++)f[p]=String.fromCharCode(d[p]);var x=f.join(""),_=window.btoa(x);s("data:image/png;base64,"+_)}},l.send()},a.prototype.getColorAsync=function(o,s,l){var d=this;this.getImageData(o,function(f){var p=document.createElement("img");p.addEventListener("load",function(){var x=d.getPalette(p,5,l);s(x[0],this)}),p.src=f})},a})}(it)),it.exports}var yr;function Yr(){if(yr)return Ee;yr=1,Object.defineProperty(Ee,"__esModule",{value:!0});var e=Y,t=e.__importDefault(Vr()),n=Le();function u(r,a,o,s,l){return a===void 0&&(a=2),s===void 0&&(s=null),l===void 0&&(l=10),e.__awaiter(this,void 0,void 0,function(){var d,f,p;return e.__generator(this,function(x){switch(x.label){case 0:return[4,n.loadImage(r,s)];case 1:return d=x.sent(),f=new t.default,p=f.getPalette(d,a,l),[2,p.map(function(_){return n.formatRGB(_,o)})]}})})}return Ee.default=u,Ee}var Oe={},wr;function Kr(){if(wr)return Oe;wr=1,Object.defineProperty(Oe,"__esModule",{value:!0});var e=Y,t=e.__importDefault(Vr()),n=Le();function u(r,a,o,s){return o===void 0&&(o=null),s===void 0&&(s=10),e.__awaiter(this,void 0,void 0,function(){var l,d,f;return e.__generator(this,function(p){switch(p.label){case 0:return[4,n.loadImage(r,o)];case 1:return l=p.sent(),d=new t.default,f=d.getColor(l,s),[2,n.formatRGB(f,a)]}})})}return Oe.default=u,Oe}var Ae={},_r;function Ms(){if(_r)return Ae;_r=1,Object.defineProperty(Ae,"__esModule",{value:!0});function e(t,n){return n===void 0&&(n=null),new Promise(function(u,r){var a=new Image;a.addEventListener("load",function(){u(a)}),a.addEventListener("error",function(){r(new Error("Color Thief React | Failed to load image URL: "+t))}),a.crossOrigin=n,a.src=t})}return Ae.default=e,Ae}var Cr;function Le(){return Cr||(Cr=1,function(e){var t=lt&&lt.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadImage=e.getPredominantColorFromImgURL=e.rgbStringfy=e.getColorsPaletteFromImgUrl=e.formatRGB=e.reducer=e.initialReducerState=void 0;var n=Nr();Object.defineProperty(e,"initialReducerState",{enumerable:!0,get:function(){return t(n).default}});var u=Rs();Object.defineProperty(e,"reducer",{enumerable:!0,get:function(){return t(u).default}});var r=zs();Object.defineProperty(e,"formatRGB",{enumerable:!0,get:function(){return t(r).default}});var a=Yr();Object.defineProperty(e,"getColorsPaletteFromImgUrl",{enumerable:!0,get:function(){return t(a).default}});var o=Wr();Object.defineProperty(e,"rgbStringfy",{enumerable:!0,get:function(){return t(o).default}});var s=Kr();Object.defineProperty(e,"getPredominantColorFromImgURL",{enumerable:!0,get:function(){return t(s).default}});var l=Ms();Object.defineProperty(e,"loadImage",{enumerable:!0,get:function(){return t(l).default}})}(et)),et}var kr;function Jr(){if(kr)return we;kr=1,Object.defineProperty(we,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),n=Qr(),u=Le();function r(a,o,s){s===void 0&&(s={});var l=s.crossOrigin,d=l===void 0?null:l,f=s.quality,p=f===void 0?10:f,x=t.useReducer(u.reducer,u.initialReducerState),_=x[0],v=x[1];return n.useCurrentEffect(function(m){v({type:"start",payload:null}),u.getPredominantColorFromImgURL(a,o,d,p).then(function(w){m()&&v({type:"resolve",payload:w})}).catch(function(w){m()&&v({type:"reject",payload:w})})},[a]),_}return we.default=r,we}var Tr;function $s(){if(Tr)return ye;Tr=1,Object.defineProperty(ye,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),n=e.__importDefault(Jr());function u(r){var a=r.src,o=r.format,s=r.crossOrigin,l=s===void 0?void 0:s,d=r.quality,f=d===void 0?10:d,p=r.children,x=n.default(a,o,{crossOrigin:l,quality:f});return t.createElement(t.Fragment,null,p(x))}return ye.default=u,ye}var De={},Pe={},jr;function Xr(){if(jr)return Pe;jr=1,Object.defineProperty(Pe,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),n=Qr(),u=Le();function r(a,o,s,l){o===void 0&&(o=2),l===void 0&&(l={});var d=l.crossOrigin,f=d===void 0?null:d,p=l.quality,x=p===void 0?10:p,_=t.useReducer(u.reducer,u.initialReducerState),v=_[0],m=_[1];return n.useCurrentEffect(function(w){m({type:"start",payload:null}),u.getColorsPaletteFromImgUrl(a,o,s,f,x).then(function(C){w()&&m({type:"resolve",payload:C})}).catch(function(C){w()&&m({type:"reject",payload:C})})},[a]),v}return Pe.default=r,Pe}var Ir;function Fs(){if(Ir)return De;Ir=1,Object.defineProperty(De,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),n=e.__importDefault(Xr());function u(r){var a=r.src,o=r.colorCount,s=o===void 0?2:o,l=r.format,d=r.crossOrigin,f=d===void 0?void 0:d,p=r.quality,x=p===void 0?10:p,_=r.children,v=n.default(a,s,l,{crossOrigin:f,quality:x});return t.createElement(t.Fragment,null,_(v))}return De.default=u,De}Object.defineProperty(Q,"__esModule",{value:!0});Q.getPalette=Q.usePalette=en=Q.Palette=Q.getColor=Q.Color=Q.useColor=void 0;var re=Y,Zr=re.__importDefault($s());Q.Color=Zr.default;var Ls=re.__importDefault(Jr());Q.useColor=Ls.default;var Bs=re.__importDefault(Yr());Q.getPalette=Bs.default;var qs=re.__importDefault(Fs()),en=Q.Palette=qs.default,Us=re.__importDefault(Xr());Q.usePalette=Us.default;var Hs=re.__importDefault(Kr());Q.getColor=Hs.default;Q.default=Zr.default;const Qs="/assets/waterMarkBlack-OUzafaTn.png",Ns="/assets/waterMarkWhite-DfVw0Drc.png",Gs=({onImageReady:e,posterData:t,generatePoster:n,onTitleSizeAdjust:u,customFont:r})=>{const a=g.useRef(null);return g.useEffect(()=>{(async()=>{if(!n)return;const s=a.current,l=s.getContext("2d"),d=2480,f=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0;const p=async b=>{const k=new Image;return k.crossOrigin="anonymous",k.src=b,new Promise(I=>{k.onload=()=>{if(l.drawImage(k,t.marginCover,t.marginCover,d-t.marginCover*2,d-t.marginCover*2),t.useFade){let j=l.createLinearGradient(0,0,0,3e3);const S=m(t.backgroundColor);j.addColorStop(.5,`rgba(${S.r}, ${S.g}, ${S.b}, 0)`),j.addColorStop(.8,t.backgroundColor),l.fillStyle=j,l.fillRect(0,0,s.width,2500)}I()}})},x=async()=>{const b=new Image;b.crossOrigin="anonymous";const k=m(t.backgroundColor),I=w(k);return b.src=I==="black"?Qs:Ns,new Promise(j=>{b.onload=()=>{l.globalAlpha="0.15",l.drawImage(b,d-70-500,50,500,134),l.globalAlpha="1",j()}})},_=async()=>{let b=t.titleSize?parseInt(t.titleSize):230;const k=r||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){l.font=`bold ${b}px ${k}`;let S=l.measureText(t.albumName).width;for(;S>2480-t.marginSide*2;)b-=1,l.font=`bold ${b}px ${k}`,S=l.measureText(t.albumName).width;u(b,!0)}else l.font=`bold ${b}px ${k}`;l.fillStyle=t.textColor,t.showTracklist?l.fillText(t.albumName,t.marginSide,2500+t.marginTop):l.fillText(t.albumName,t.marginSide,2790+t.marginTop);let I=t.artistsSize?parseInt(t.artistsSize):110;l.font=`bold ${I}px ${r||"Montserrat"}`,t.showTracklist?l.fillText(t.artistsName,t.marginSide,2500+t.marginTop+I*1.3):l.fillText(t.artistsName,t.marginSide,2820+t.marginTop+I),l.font=`bold 70px ${r||"Montserrat"}`,l.fillText(t.titleRelease,t.marginSide,3310);let j=l.measureText(t.titleRelease).width;l.fillText(t.titleRuntime,j+t.marginSide+100,3310),l.globalAlpha=.7,l.font=`bold 60px ${r||"Montserrat"}`,l.fillText(t.runtime,j+t.marginSide+100,3390),l.fillText(t.releaseDate,t.marginSide,3390),l.globalAlpha=1,l.fillStyle=t.color1,l.fillRect(2045-t.marginSide,3368,145,30),l.fillStyle=t.color2,l.fillRect(2190-t.marginSide,3368,145,30),l.fillStyle=t.color3,l.fillRect(2335-t.marginSide,3368,145,30)},v=async()=>{l.fillStyle=t.textColor;let b=t.marginSide+10,k=0,I=0;const j=t.tracksSize?parseInt(t.tracksSize):50;l.font=`bold ${j}px ${r||"Montserrat"}`;const S=j,R=parseInt(t.marginTop||0),O=parseInt(t.artistsSize)?2500+R+parseInt(t.artistsSize)*1.3+130:2500+R+110*1.2+130,D=500,M=d-t.marginSide*2,z=parseInt(t.marginSide),$=O+D-10-parseInt(t.marginTop);let U=O;t.tracklist.split(`
`).forEach(B=>{if(U+S*1.3>=$){if(U=O,b=k+S*2.5+I,b>=z+M)return;I=b-S*2.5,k=0}const H=l.measureText(`${B}`).width+t.marginSide;H>k&&(k=H),l.fillText(`${B}`,b,U),U+=S*1.3})},m=b=>{const k=parseInt(b.replace("#",""),16);return{r:k>>16&255,g:k>>8&255,b:k&255}},w=b=>{const k=j=>{const S=j/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)};return .2126*k(b.r)+.7152*k(b.g)+.0722*k(b.b)>.179?"black":"white"},C=async()=>{const b=m(t.backgroundColor),k=w(b),I=t.textColor,j=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${k}/640/spotify:album:${t.albumID}`;let R=await(await fetch(j)).text();k=="black"?R=R.replace(/fill="#000000"/g,`fill="${I}"`):R=R.replace(/fill="#ffffff"/g,`fill="${I}"`);const O=new Blob([R],{type:"image/svg+xml"}),D=URL.createObjectURL(O);return new Promise(M=>{const z=new Image;z.src=D,z.onload=function(){l.drawImage(z,2020-t.marginSide,3235,480,120);const $=s.toDataURL("image/png");e($),M()}})};await(async()=>{l.clearRect(0,0,d,f),l.fillStyle=t.backgroundColor,l.fillRect(0,0,d,f)})(),t.useUncompressed?await p(await t.uncompressedAlbumCover):await p(t.albumCover),await _(),t.showTracklist&&await v(),t.useWatermark&&await x(),await C()})()},[n,t,e]),c.jsx("canvas",{ref:a,width:2480,height:3508,style:{display:"none"}})},Ws=h.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function A({children:e,animationDelay:t=0,...n}){const[u,r]=g.useState(!1);return g.useEffect(()=>{const a=setTimeout(()=>{r(!0)},t);return()=>clearTimeout(a)},[t]),c.jsx(Ws,{visible:u,animationDelay:t,...n,children:e})}const Vs=h.div`
    width: 80%;
    margin-inline: auto;
`,Ys=h.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,Ks=h(Zo)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,Js=h.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Xs=h.div`
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
`,Zs=h.img`
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
`,el=h.div`
    width: 388px;
    height: 548px;
    margin-right: 20px;
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
`,tl=h($r)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?V`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,rl=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,nl=h.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,Sr=h.div`
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    color: ${({$active:e})=>e?"var(--textColor)":"var(--textSecondary)"};
    cursor: pointer;
    border-bottom: ${({$active:e})=>e?"2px solid var(--PosterfyGreen)":"none"};
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
        color: var(--textColor);
    }
`,ol=h.div`
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
`,il=h.div`
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`,al=h.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
`,Rr=h.button`
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
`,sl=h.textarea`
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
`,ll=h.div`
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
`,at=h.div`
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
`,st=h.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,Er=h(Qi)`
    font-size: 1.15em;
`,cl=h(fo)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Vt`
                  animation: ${V`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Vt`
                  animation: ${V`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,ul=h.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,dl=h.p`
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
`;function fl({albumID:e,handleClickBack:t}){const{t:n}=J(),u=g.useRef(null),[r,a]=g.useState(""),[o,s]=g.useState(""),[l,d]=g.useState("200"),[f,p]=g.useState("110"),[x,_]=g.useState("50"),[v,m]=g.useState(""),[w,C]=g.useState(160),[T,b]=g.useState(0),[k,I]=g.useState("#5900ff"),[j,S]=g.useState("#ff9100"),[R,O]=g.useState("#ff0000"),[D,M]=g.useState("#00ff40"),[z,$]=g.useState("#2600ff"),[U,B]=g.useState(!0),[H,N]=g.useState(!0),[Z,_t]=g.useState(!1),[ne,Ct]=g.useState(""),[Be,kt]=g.useState(""),[tn,rn]=g.useState(""),[ee,nn]=g.useState(null),[qe,Tt]=g.useState("information");g.useEffect(()=>{if(ee){const y=new FileReader;y.onload=async E=>{const F="CustomFont",X=new FontFace(F,E.target.result);try{const G=await X.load();document.fonts.add(G),rn(F)}catch(G){console.error("Erro ao carregar fonte:",G)}},y.readAsArrayBuffer(ee)}},[ee]);const[Ue,He]=g.useState(!1),[on,an]=g.useState("Original"),[fe,he]=g.useState(""),[jt,It]=g.useState(""),[St,Rt]=g.useState(""),[Et,Ot]=g.useState(""),[At,Dt]=g.useState(""),[sn,Pt]=g.useState(!1),[zt,Mt]=g.useState(null),[te,ln]=g.useState(null),[$t,Ft]=g.useState(!1),[Lt,cn]=g.useState(!1),un=y=>{d(y.target.value),Ft(!0)},dn=(y,E)=>{E&&!Lt?(d(y),cn(!0)):$t||d(y)},fn={albumCover:ne,uncompressedAlbumCover:Be,useUncompressed:Ue,albumName:r,artistsName:o,titleSize:l,artistsSize:f,tracksSize:x,marginTop:v,marginSide:w,marginCover:T,titleRelease:jt,releaseDate:St,titleRuntime:Et,runtime:At,backgroundColor:k,textColor:j,useWatermark:U,useFade:H,showTracklist:Z,tracklist:fe,color1:R,color2:D,color3:z,albumID:e,userAdjustedTitleSize:$t,initialTitleSizeSet:Lt},[oe,hn]=g.useState(null),[Qe,Bt]=g.useState(!1),[pn,Ne]=g.useState(!1),[mn,gn]=g.useState(!1),[xn,qt]=g.useState(!1),[vn,Ge]=g.useState(!1);g.useEffect(()=>{if(Qe){Ne(!1);const y=setTimeout(()=>{Ge(!0)},100);return()=>clearTimeout(y)}else Ge(!1)},[Qe]);const bn=y=>{hn(y),Bt(!1),qt(!1),Gn(r,o),setTimeout(()=>{Ge(!1),setTimeout(()=>{Ne(!0)},300)},100)},We=()=>{Ft(!1),Ne(!1),requestAnimationFrame(()=>{if(qt(!0),Bt(!0),u.current){const y=u.current.getBoundingClientRect(),E=y.top+window.scrollY,F=y.height,G=(window.innerHeight-F)/2;window.scrollTo({top:E-G,behavior:"smooth"})}})},yn=y=>{Ct(URL.createObjectURL(y)),He(!1),kt(""),an(y.name)},Ve=()=>{if(!oe)return;const y=document.createElement("a");y.href=oe,y.download=`Posterfy - ${r}.png`,y.click(),Je(r,"poster",o)},wn=async()=>{if(Ue){if(!Be)return;const y=await(await fetch(await Be)).blob(),E=Object.assign(document.createElement("a"),{href:URL.createObjectURL(y),download:`Posterfy - ${r} Uncompressed Cover.png`});E.click(),URL.revokeObjectURL(E.href),Je(r,"uncompressed_cover",o)}else{if(!ne)return;const y=await(await fetch(ne)).blob(),E=Object.assign(document.createElement("a"),{href:URL.createObjectURL(y),download:`Posterfy - ${r} Cover.png`});E.click(),URL.revokeObjectURL(E.href),Je(r,"cover",o)}};function ie(y,E){const F=y.target.getBoundingClientRect();Mt({top:F.top+window.scrollY,left:F.left+window.scrollX}),ln(E),Pt(!0)}function _n(){Pt(!1)}const Cn=()=>{const E=fe.split(`
`).map(F=>F.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());he(E.join(`
`))},kn=()=>{const E=fe.split(`
`).map(F=>F.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());he(E.join(`
`))};async function Tn(y,E="us"){var F;try{let X=`https://itunes.apple.com/search?term=${encodeURIComponent(y)}&country=${E}&entity=album&limit=1`,G=await fetch(X);if(!G.ok)throw new Error(`HTTP Error: ${G.status}`);let Ye=await G.json();if(!((F=Ye.results)!=null&&F.length))return console.warn("No album data found."),He(!1),"";let W=Ye.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return W.length===2?`https://a5.mzstatic.com/us/r1000/0/${W[1].split("/").slice(0,-1).join("/")}`:""}catch(X){return console.error("Error fetching album cover:",X.message),""}}return g.useEffect(()=>{It(n("EDITOR_ReleaseTitle")),Ot(n("EDITOR_RuntimeTitle"))},[n]),g.useEffect(()=>{e&&(async()=>{var E;try{const Ut=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,W=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Ut}`}})).json(),Ke=W.artists.map(ae=>ae.name).join(", ");a(W.name),s(Ke),Ct((E=W.images[0])==null?void 0:E.url),Rt(W.release_date),kt(await Tn(W.name+" "+Ke));const In=W.tracks.items.reduce((ae,pe)=>ae+pe.duration_ms,0),Ht=Math.floor(In/1e3),Qt=Math.floor(Ht/60),Nt=Math.floor(Qt/60),Gt=Ht%60,Wt=Qt%60,Sn=Nt>0?`${Nt}h ${Wt}min ${Gt}s`:`${Wt}min ${Gt}s`;Dt(Sn);const Rn=W.tracks.items.map((ae,pe)=>(pe==3&&_t(!0),`${pe+1}. ${ae.name}`));he(Rn.join(`
`)),gn(!0)}catch(F){console.error("Error trying to fetch album data:",F)}})()},[e]),g.useEffect(()=>{const y=E=>{E.ctrlKey&&E.key==="s"?(E.preventDefault(),We()):E.ctrlKey&&E.key==="d"&&(E.preventDefault(),Ve())};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[oe,r,Ve]),c.jsx(c.Fragment,{children:mn?c.jsxs(Vs,{children:[c.jsx(en,{src:ne,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:y})=>(g.useEffect(()=>{y&&y.length>0&&(I(y[0]),S(y[1]),O(y[2]),M(y[3]),$(y[4]),We())},[y]),null)}),c.jsxs(Ys,{onClick:t,children:[c.jsx(Ks,{}),c.jsx(Js,{children:n("GoBack")})]}),c.jsxs(Xs,{children:[c.jsx(Gs,{onImageReady:bn,posterData:fn,generatePoster:Qe,onTitleSizeAdjust:dn,customFont:tn}),c.jsxs(el,{children:[oe?c.jsx(Zs,{src:oe,ref:u,visible:pn}):c.jsx(ul,{ref:u}),c.jsx(tl,{visible:vn})]}),c.jsxs(rl,{children:[c.jsx(A,{animationDelay:50,children:c.jsxs(nl,{children:[c.jsx(Sr,{$active:qe==="information",onClick:()=>Tt("information"),children:n("EDITOR_InformationTab")}),c.jsx(Sr,{$active:qe==="tracklist",onClick:()=>Tt("tracklist"),children:n("EDITOR_TracklistTab")})]})}),qe==="information"?c.jsxs(ol,{children:[c.jsx(A,{animationDelay:0,children:c.jsx(K,{title:n("EDITOR_AlbumName"),value:r,onChange:y=>a(y.target.value)})}),c.jsx(A,{animationDelay:50,children:c.jsx(K,{title:n("EDITOR_ArtistName"),value:o,onChange:y=>s(y.target.value)})}),c.jsx(A,{animationDelay:100,children:c.jsx(K,{title:n("EDITOR_TitleSize"),value:l,onChange:un})}),c.jsx(A,{animationDelay:150,children:c.jsx(K,{title:n("EDITOR_ArtistSize"),value:f,onChange:y=>p(y.target.value)})}),c.jsx(A,{animationDelay:200,children:c.jsx(K,{title:n("EDITOR_TracksSize"),value:x,onChange:y=>_(y.target.value)})}),c.jsx(A,{animationDelay:250,children:c.jsx(K,{title:n("EDITOR_MarginTop"),value:v,onChange:y=>m(y.target.value)})}),c.jsx(A,{animationDelay:300,children:c.jsx(K,{title:n("EDITOR_MarginSide"),value:w,onChange:y=>C(y.target.value)})}),c.jsx(A,{animationDelay:350,children:c.jsx(K,{title:n("EDITOR_MarginCover"),value:T,onChange:y=>b(y.target.value)})}),c.jsx(A,{animationDelay:400,children:c.jsx(rr,{title:jt,value:St,onChangeTitle:y=>It(y.target.value),onChangeDate:y=>Rt(y.target.value)})}),c.jsx(A,{animationDelay:450,children:c.jsx(rr,{title:Et,value:At,onChangeTitle:y=>Ot(y.target.value),onChangeDate:y=>Dt(y.target.value)})}),c.jsx(A,{animationDelay:500,children:c.jsx(le,{title:n("EDITOR_BackgroundColor"),value:k,onClick:y=>ie(y,"backgroundColor")})}),c.jsx(A,{animationDelay:550,children:c.jsx(le,{title:n("EDITOR_TextColor"),value:j,onClick:y=>ie(y,"textColor")})}),c.jsx(A,{animationDelay:600,children:c.jsx(le,{title:`${n("EDITOR_Color")} 1`,value:R,onClick:y=>ie(y,"color1")})}),c.jsx(A,{animationDelay:650,children:c.jsx(le,{title:`${n("EDITOR_Color")} 2`,value:D,onClick:y=>ie(y,"color2")})}),c.jsx(A,{animationDelay:700,children:c.jsx(le,{title:`${n("EDITOR_Color")} 3`,value:z,onClick:y=>ie(y,"color3")})}),c.jsx(A,{animationDelay:750,children:c.jsx(be,{title:n("EDITOR_Watermark"),value:U,onChange:y=>B(y),text:n("EDITOR_WatermarkText")})}),c.jsx(A,{animationDelay:800,children:c.jsx(be,{title:n("EDITOR_Fade"),value:H,onChange:y=>N(y),text:n("EDITOR_FadeText")})}),c.jsx(A,{animationDelay:850,children:c.jsx(be,{title:n("EDITOR_Uncompressed"),value:Ue,onChange:y=>He(y),text:n("EDITOR_UncompressedText")})}),c.jsx(A,{animationDelay:900,children:c.jsx(be,{title:n("EDITOR_Tracklist"),value:Z,onChange:y=>_t(y),text:n("EDITOR_TracklistText")})}),c.jsx(A,{animationDelay:950,children:c.jsx(Xa,{title:n("EDITOR_Cover"),onChange:yn,text:on})}),c.jsx(A,{animationDelay:1e3,children:c.jsx(is,{title:n("EDITOR_Font"),text:(ee==null?void 0:ee.name)||n("EDITOR_DefaultFont"),onChange:nn})}),sn&&zt&&te&&c.jsx(Fa,{DefaultColor:te==="backgroundColor"?k:te==="textColor"?j:te==="color1"?R:te==="color2"?D:z,image:ne,predefinedColors:[R,D,z,k,j],onDone:y=>{switch(te){case"backgroundColor":I(y);break;case"textColor":S(y);break;case"color1":O(y);break;case"color2":M(y);break;case"color3":$(y);break}Mt(null)},position:zt,onClose:_n})]}):c.jsxs(il,{children:[c.jsx(sl,{value:fe,onChange:y=>he(y.target.value),placeholder:n("EDITOR_TracklistPlaceholder")}),c.jsxs(al,{children:[c.jsx(Rr,{onClick:Cn,children:n("EDITOR_RemoveParentheses")}),c.jsx(Rr,{onClick:kn,children:n("EDITOR_RemoveBrackets")})]})]}),c.jsx(A,{animationDelay:1050,children:c.jsxs(ll,{children:[c.jsxs(at,{onClick:wn,children:[c.jsx(Er,{}),c.jsx(st,{children:n("EDITOR_DownloadCover")})]}),c.jsxs(at,{onClick:Ve,children:[c.jsx(Er,{}),c.jsx(st,{children:n("EDITOR_Download")})]}),c.jsxs(at,{onClick:We,children:[c.jsx(cl,{$spinning:xn}),c.jsx(st,{children:n("EDITOR_Apply")})]})]})}),c.jsx(A,{animationDelay:1100,children:c.jsxs(dl,{children:[n("EDITOR_Shortcuts"),": Ctrl+S (",n("EDITOR_Apply"),"), Ctrl+D (",n("EDITOR_Download"),")"]})})]})]})]}):c.jsx(Fr,{})})}const Or=e=>{if(!e)return"";const n=(e.replace(/\/$/,"")||"/").split("/");return n.length>2&&(n[2]=n[2].toLowerCase()),n.join("/")},wt=()=>"https://posterfy.space"+"/",hl=e=>{const t=wt(),n=Or(e),u=Or(t),r=e.includes("://www."),a=e.startsWith("http://");return r||a||n!==u},pl=()=>{const e=window.location.href,t=wt(),n=[];return hl(e)&&n.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:n.length===0,issues:n,currentUrl:e,canonicalUrl:t}},ml=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:n="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(g.useEffect(()=>{const r="https://posterfy.space",a=wt(),o=r+"/albuns.png";document.title=e;const s=document.querySelector('meta[name="description"]');s&&s.setAttribute("content",t);const l=document.querySelector('meta[name="keywords"]');l&&l.setAttribute("content",n);let d=document.querySelector('link[rel="canonical"]');d?d.setAttribute("href",a):(d=document.createElement("link"),d.setAttribute("rel","canonical"),d.setAttribute("href",a),document.head.appendChild(d));const f=document.querySelector('meta[property="og:title"]');f&&f.setAttribute("content",e);const p=document.querySelector('meta[property="og:description"]');p&&p.setAttribute("content",t);const x=document.querySelector('meta[property="og:image"]');x&&x.setAttribute("content",o);const _=document.querySelector('meta[property="og:url"]');_&&_.setAttribute("content",a);const v=document.querySelector('meta[name="twitter:title"]');v&&v.setAttribute("content",e);const m=document.querySelector('meta[name="twitter:description"]');m&&m.setAttribute("content",t);const w=document.querySelector('meta[name="twitter:image"]');w&&w.setAttribute("content",o);const C={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:r+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},T=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');T&&T.remove();const b=document.createElement("script");b.type="application/ld+json",b.id="dynamic-structured-data",b.innerHTML=JSON.stringify(C),document.head.appendChild(b)},[e,t,n]),null),gl=()=>(g.useEffect(()=>{setTimeout(()=>{const n=[],u=document.querySelector('link[rel="canonical"]');(!u||!u.href)&&n.push("Missing canonical URL");const r=document.querySelector('meta[name="description"]');(!r||r.content.length<120)&&n.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&n.push("Title too short or missing");const a=pl();a.isValid||a.issues.forEach(l=>{n.push(`${l.type}: ${l.message}`)});const o=document.querySelector('meta[name="robots"]');return o&&o.content.includes("noindex")&&n.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||n.push("Missing structured data"),n},1e3),(()=>{const n=window.location.href;n.includes("www.")||n.startsWith("http://")})()},[]),null),xl=()=>(g.useEffect(()=>{Nn()},[]),null),vl=()=>{g.useEffect(()=>{Kt(document.title,window.location.href);const e=new MutationObserver(n=>{n.forEach(u=>{u.type==="childList"&&u.target.nodeName==="TITLE"&&Kt(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function bl(){const{t:e}=J(),[t,n]=g.useState(!0),[u,r]=g.useState(!1),[a,o]=g.useState(""),[s,l]=g.useState(null);vl(),g.useEffect(()=>Ro(),[]);function d(x){l(x)}function f(){l(null)}g.useEffect(()=>{const x=setTimeout(()=>{n(!1),setTimeout(()=>{r(!0)},1e3)},1100);return()=>clearTimeout(x)},[]),g.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const p=x=>{o(x)};return c.jsxs(Eo,{children:[c.jsx(ml,{}),c.jsx(gl,{}),c.jsx(xl,{}),c.jsx(co,{}),c.jsx(Mo,{showAnimation:u}),c.jsx(ct,{text:e("anchorArt"),type:1}),c.jsx(Uo,{title:e("ArtTitle"),paragraph:e("ArtParagraph")}),s?c.jsx(fl,{albumID:s,handleClickBack:f}):c.jsxs(c.Fragment,{children:[c.jsx(si,{onSearch:p,value:a}),a&&c.jsx(tr,{query:a,onclick:d}),c.jsxs("div",{style:{display:a?"none":"block"},children:[c.jsx(ct,{text:e("TryTrend"),type:2}),c.jsx(tr,{onclick:d})]})]}),c.jsx(Zi,{}),c.jsx(Oi,{}),c.jsx(fi,{isVisible:t})]})}An.use(Dn).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]"}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]"}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]"}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});Pr(document.getElementById("root")).render(c.jsx(g.StrictMode,{children:c.jsx(bl,{})}));
