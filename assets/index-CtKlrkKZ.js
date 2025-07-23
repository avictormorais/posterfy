import{r as g,a as zn,e as q,g as Mn,c as ct}from"./vendor-DZStNbcm.js";import{d as p,G as P,m as Y,l as Yt}from"./ui-C8-z_EEw.js";import{u as X,i as $n,a as Fn}from"./i18n-DbQiQmPR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var Or={exports:{}},Me={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln=g,Bn=Symbol.for("react.element"),qn=Symbol.for("react.fragment"),Un=Object.prototype.hasOwnProperty,Hn=Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qn={key:!0,ref:!0,__self:!0,__source:!0};function Ar(e,t,n){var d,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(d in t)Un.call(t,d)&&!Qn.hasOwnProperty(d)&&(r[d]=t[d]);if(e&&e.defaultProps)for(d in t=e.defaultProps,t)r[d]===void 0&&(r[d]=t[d]);return{$$typeof:Bn,type:e,key:a,ref:o,props:r,_owner:Hn.current}}Me.Fragment=qn;Me.jsx=Ar;Me.jsxs=Ar;Or.exports=Me;var c=Or.exports,Dr,Vt=zn;Dr=Vt.createRoot,Vt.hydrateRoot;function $e({width:e,height:t,fill:n}){return c.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:n,xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e},ze.apply(this,arguments)}function Nn(e,t){if(e==null)return{};var n={},d=Object.keys(e),r,a;for(a=0;a<d.length;a++)r=d[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var Gn=["cdnSuffix","cdnUrl","countryCode","style","svg"],Wn="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Yn="svg",Vn=127397,Pr=function(t){var n=t.cdnSuffix,d=n===void 0?Yn:n,r=t.cdnUrl,a=r===void 0?Wn:r,o=t.countryCode,s=t.style,l=t.svg,u=l===void 0?!1:l,f=Nn(t,Gn);if(typeof o!="string")return null;if(u){var m=""+a+o.toLowerCase()+"."+d;return g.createElement("img",Object.assign({},f,{src:m,style:ze({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},s)}))}var x=o.toUpperCase().replace(/./g,function(_){return String.fromCodePoint(_.charCodeAt(0)+Vn)});return g.createElement("span",Object.assign({role:"img"},f,{style:ze({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},s)}),x)};const Kn=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},Kt=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Je=(e,t="image",n="")=>{const d=n?`${n} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:d,file_type:t,album_name:e,artist_name:n})},Xn=(e,t="")=>{const n=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:n,album_name:e,artist_name:t})},Xt=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},Jn=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},Zn=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},eo=p.div`
  position: relative;
`,to=p.button`
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
`,ro=p.div`
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
`,no=p.div`
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
`,oo=p.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,ao=p.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,he=p.button`
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
`,ge=p.span`
  margin-left: 8px;
`,xe=p(Pr)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function io(){const[e,t]=g.useState(!1),[n,d]=g.useState(!1),{i18n:r}=X();g.useEffect(()=>{const u=localStorage.getItem("language");u&&r.changeLanguage(u);const f=m=>{m.target.closest(".language-selector")||a()};return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[r]);const a=()=>{d(!0),setTimeout(()=>{t(!1),d(!1)},150)},o=u=>{u.stopPropagation(),e?a():t(!0)},s=u=>{r.changeLanguage(u),localStorage.setItem("language",u),a(),Zn(u)},l=()=>{switch(r.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return c.jsxs(eo,{className:"language-selector",children:[c.jsx(to,{onClick:o,"aria-label":"Select language",children:c.jsx(ro,{children:c.jsx(Pr,{countryCode:l(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&c.jsxs(no,{className:n?"closing":"",children:[c.jsx(oo,{}),c.jsxs(ao,{children:[c.jsxs(he,{onClick:()=>s("pt"),children:[c.jsx(xe,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(ge,{children:"Português"})]}),c.jsxs(he,{onClick:()=>s("en"),children:[c.jsx(xe,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(ge,{children:"English"})]}),c.jsxs(he,{onClick:()=>s("es"),children:[c.jsx(xe,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(ge,{children:"Español"})]}),c.jsxs(he,{onClick:()=>s("zh"),children:[c.jsx(xe,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),c.jsx(ge,{children:"中文"})]})]})]})]})}const so=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},lo=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},co=()=>{let e=[25,50,75,90],t=[];const n=()=>{const d=window.pageYOffset||document.documentElement.scrollTop,r=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(d/r*100);e.forEach(o=>{a>=o&&!t.includes(o)&&(t.push(o),lo(o))})};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},zr=g.createContext(),Fe=()=>{const e=g.useContext(zr);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},uo=({children:e})=>{const[t,n]=g.useState(()=>localStorage.getItem("theme")||"light");g.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),so(t)},[t]);const a={theme:t,toggleTheme:()=>{n(o=>o==="light"?"dark":"light")},setSpecificTheme:o=>{n(o)},isLight:t==="light",isDark:t==="dark"};return c.jsx(zr.Provider,{value:a,children:e})};function fo(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function mo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function po(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Mr(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function $r(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function ho(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Fr(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Lr(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Br(e){return P({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function go(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function xo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function qr(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const vo=p.div`
  position: relative;
`,bo=p.button`
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
`,yo=p.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.themeColor};
  
  svg {
    font-size: 1.2em;
    fill: ${e=>e.isLight?"#000000":"#ffffff"};
  }
`,wo=p.div`
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
`,_o=p.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Co=p.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,ko=p.button`
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
`,To=p.div`
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
`,jo=p.span`
  margin-left: 4px;
  font-weight: 500;
`;function Io(){const[e,t]=g.useState(!1),[n,d]=g.useState(!1),{theme:r,setSpecificTheme:a}=Fe(),o=[{id:"light",name:"Light",color:"#f0efeb",icon:c.jsx(qr,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:c.jsx(Lr,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:c.jsx(Fr,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:c.jsx(Mr,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:c.jsx($r,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:c.jsx(Br,{}),isLight:!1}],s=o.find(m=>m.id===r)||o[0];g.useEffect(()=>{const m=x=>{x.target.closest(".theme-selector")||l()};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[]);const l=()=>{d(!0),setTimeout(()=>{t(!1),d(!1)},150)},u=m=>{m.stopPropagation(),e?l():t(!0)},f=m=>{a(m),l()};return c.jsxs(vo,{className:"theme-selector",children:[c.jsx(bo,{onClick:u,"aria-label":"Select theme",children:c.jsx(yo,{themeColor:s.color,isLight:s.isLight,children:s.icon})}),e&&c.jsxs(wo,{className:n?"closing":"",children:[c.jsx(_o,{}),c.jsx(Co,{children:o.map(m=>c.jsxs(ko,{onClick:()=>f(m.id),children:[c.jsx(To,{className:"theme-preview",color:m.color,isLight:m.isLight,children:m.icon}),c.jsx(jo,{children:m.name})]},m.id))})]})]})}const So=p.header`
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
`,Ro=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Eo=p.div`
  display: flex;
  align-items: center;
`,Oo=p.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--PosterfyGreen);

  @media (max-width: 400px) {
    display: none;
  }
`,Ao=p.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,Do=p.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,Po=p.div`
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
`,zo=p.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;function Mo(){const[e,t]=g.useState(!1),[n,d]=g.useState(!0),[r,a]=g.useState(0),o=".space";return g.useEffect(()=>{const s=()=>{const l=window.scrollY;l<=10?(d(!0),t(!1)):(l<r?d(!0):d(!1),t(!0)),a(l)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[r]),c.jsxs(So,{scrolled:e,visible:n,children:[c.jsxs(Ro,{children:[c.jsxs(Eo,{children:[c.jsx(Po,{children:c.jsx($e,{fill:"#01b755",width:"40px",height:"44.05px"})}),c.jsxs(Oo,{children:["Posterfy",c.jsx(Ao,{children:o})]})]}),c.jsxs(zo,{children:[c.jsx(Io,{}),c.jsx(io,{})]})]}),c.jsx(Do,{scrolled:e})]})}function $o(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Fo(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const Lo="/assets/Posterfy%20-%20KTT%20ZOO-CxBnzqPo.png",Bo="/assets/Posterfy%20-%20Starboy-D-DENvRF.png",qo="/assets/Posterfy%20-%20CHROMAKOPIA-CM4CsO5a.png",Uo="/assets/Posterfy%20-%20ZIMA-D5rEFrR_.png",Ho="/assets/Posterfy%20-%20Sobrevivendo%20no%20inferno-JOZ3yMud.png",Qo=[{id:1,coverImage:Lo},{id:2,coverImage:Bo},{id:3,coverImage:qo},{id:4,coverImage:Uo},{id:5,coverImage:Ho}],No=p.div`
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
`,Go=p.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:n,hoveredIndex:d,isMobile:r}=e;if(r)return"scale(1)";let a="scale(0.95)";if(t)a="scale(1.08) translateY(-8px)";else if(d!==null){let o=0;switch(d){case 0:n>0&&(o=70);break;case 1:n>=2&&(o=70);break;case 2:o=0;break;case 3:n<=2&&(o=-70);break;case 4:n<4&&(o=-70);break}o!==0&&(a=`scale(0.95) translateX(${o}px)`)}return a}};
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
`,Wo=p.div`
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
`,Yo=p.div`
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
`,Vo=p.button`
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
`,Ko=()=>{const[e,t]=g.useState(null),[n,d]=g.useState(!1),[r,a]=g.useState(!1),[o,s]=g.useState(null);g.useEffect(()=>{const f=()=>{d(window.innerWidth<=770),a(window.innerWidth>480&&window.innerWidth<=1200)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const l=f=>{s(f),document.body.style.overflow="hidden"},u=()=>{s(null),document.body.style.overflow="auto"};return c.jsxs(c.Fragment,{children:[c.jsx(No,{children:Qo.map((f,m)=>c.jsx(Go,{index:m,isHovered:e===m,hoveredIndex:e,otherIsHovered:e!==null,isMobile:n,isTablet:r,onMouseEnter:()=>t(m),onMouseLeave:()=>t(null),onClick:()=>l(f.coverImage||"/placeholder.svg"),children:c.jsx("img",{src:f.coverImage||"/placeholder.svg",alt:`${f.artist} - ${f.title}`})},f.id))}),o&&c.jsx(Wo,{onClick:u,children:c.jsxs(Yo,{onClick:f=>f.stopPropagation(),children:[c.jsx(Vo,{onClick:u,children:"×"}),c.jsx("img",{src:o,alt:"Album cover"})]})})]})},Xo=p.div`
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
`,Jo=()=>c.jsx(Xo,{children:c.jsx(Ko,{})}),Zo=p.div`
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
`,ea=p.div`
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
`,ta=p.h1`
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
`,Jt=p.p`
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
`,ra=p.div`
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
`,na=`
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
`,oa=p($o)`
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
    ${na}
`;function aa({showAnimation:e=!1}){const{t}=X(),{theme:n}=Fe(),[d,r]=g.useState(!1);g.useEffect(()=>{if(e){const o=setTimeout(()=>{r(!0)},50);return()=>clearTimeout(o)}},[e]);const a=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return c.jsxs(c.Fragment,{children:[c.jsx(Zo,{children:c.jsxs(ea,{children:[c.jsx(ta,{visible:d,animationDelay:200,children:"Posterfy"}),c.jsx(Jt,{visible:d,animationDelay:400,children:t("paragraphHero1")}),c.jsx(Jt,{visible:d,animationDelay:600,children:t("paragraphHero2")}),c.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[c.jsx("h2",{children:"Free Album Poster Generator"}),c.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),c.jsx("h3",{children:"Features:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Free album poster maker"}),c.jsx("li",{children:"Spotify integration"}),c.jsx("li",{children:"Custom poster design"}),c.jsx("li",{children:"High-quality downloads"}),c.jsx("li",{children:"Multiple format options"}),c.jsx("li",{children:"Professional templates"})]})]}),c.jsx(ra,{visible:d,animationDelay:800,children:c.jsx($e,{fill:n==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),c.jsx(oa,{visible:d,animationDelay:1e3,onClick:a})]})}),c.jsx(Jo,{})]})}const ia=p.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-inline: auto;
`,sa=p.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function ut({text:e,type:t}){return c.jsx(c.Fragment,{children:t==1?c.jsx(ia,{children:e}):c.jsx(sa,{children:e})})}const la=p.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,ca=p.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,ua=p.p`
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
`,Zt=p.div`
    display: flex;
`;function da({title:e,paragraph:t}){return c.jsxs(la,{children:[c.jsx(Zt,{children:c.jsx(ca,{children:e})}),c.jsx(Zt,{children:c.jsx(ua,{children:t})})]})}function fa(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function ma(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const pa=p.div`
    width: 100%;
`,ha=p.div`
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
`,ga=p(xo)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,xa=p(ma)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,va=p.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,ba=p.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function ya({onSearch:e,value:t=""}){const{t:n}=X(),[d,r]=g.useState(t);g.useEffect(()=>{r(t)},[t]);const a=l=>{l.key==="Enter"&&(e(d),d.trim()&&Xt(d.trim()))},o=l=>{r(l.target.value)},s=()=>{e(d),d.trim()&&Xt(d.trim())};return c.jsx(pa,{children:c.jsxs(ha,{role:"search","aria-label":"Album search for poster creation",children:[c.jsx(ga,{"aria-hidden":"true"}),c.jsx(va,{}),c.jsx(ba,{placeholder:n("SearchPlaceholder"),value:d,onChange:o,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),c.jsx(xa,{onClick:s,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const wa=Y`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,_a=Y`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,Ca=p.div`
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
`,ka=p.div`
    animation: ${e=>e.isExiting?_a:wa} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Ta({isVisible:e}){const{theme:t}=Fe(),[n,d]=g.useState(!1),[r,a]=g.useState(!1);return g.useEffect(()=>{!e&&!n&&(d(!0),setTimeout(()=>{a(!0)},800))},[e,n]),c.jsx(Ca,{isVisible:e,fadeOutContainer:r,children:c.jsx(ka,{isExiting:n,children:c.jsx($e,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"118.23px"})})})}const ja=Y`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Ia=Y`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,vt=Y`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Sa=Y`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,Ra=p.div`
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
`,Ea=p.div`
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
`,Oa=p.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${vt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,Aa=p.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${ja} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${Ia} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,Da=p.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,Pa=p.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,za=p.div`
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
    animation: ${Sa} 6s linear infinite;
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
`,Ma=p.div`
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
`,$a=p.div`
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
    color: var(--PosterfyGreen);
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;const Fa=p.div`
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
`,La=p.button`
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
`,Ba=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,qa=p.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,Ua=p.div`
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
`,Ha=p.a`
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
`;function Qa(){const{t:e}=X(),{theme:t,setSpecificTheme:n}=Fe(),d=o=>{n(o)},r=[{id:"light",name:"Light",color:"#f0efeb",icon:c.jsx(qr,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:c.jsx(Lr,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:c.jsx(Fr,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:c.jsx(Mr,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:c.jsx($r,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:c.jsx(Br,{}),isLight:!1}],a=new Date().getFullYear();return c.jsxs(Ra,{children:[c.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:c.jsxs("footer",{children:[c.jsx("h4",{children:"Album Poster Generator Links"}),c.jsxs("nav",{children:[c.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),c.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),c.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),c.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),c.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),c.jsxs(Ea,{children:[c.jsxs(Oa,{children:[c.jsxs(Aa,{children:[c.jsx(Pa,{className:"icon-shadow"}),c.jsx(Da,{className:"icon-main",children:c.jsx($e,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),c.jsx(za,{children:c.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",c.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),c.jsxs(Ma,{children:[c.jsx(ho,{})," © ",a," Posterfy. ",e("AllRights","All rights reserved.")]})]}),c.jsx($a,{children:c.jsx(Fa,{children:r.map(o=>c.jsxs(Ba,{children:[c.jsx(La,{color:o.color,active:t===o.id,themeId:o.id,onClick:()=>d(o.id),"aria-label":`${e("SwitchTo","Switch to")} ${o.name} ${e("Theme").toLowerCase()}`,children:o.icon},o.id),c.jsx(qa,{active:t===o.id,children:o.name})]},o.id))})}),c.jsx(Ua,{children:c.jsxs(Ha,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[c.jsx(fo,{})," ",e("ViewGitHub","GitHub")]})})]})]})}const Na=p.div`
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

`,Ga=p.img`
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
`,Wa=p.h3`
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
`,Ya=p.p`
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
`,Va=p.div`
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
`;function Ka({title:e,artist:t,cover:n,id:d,onClick:r,animationDelay:a=0}){const[o,s]=g.useState(!1);return g.useEffect(()=>{const l=setTimeout(()=>{s(!0)},a);return()=>clearTimeout(l)},[a]),c.jsxs(Na,{onClick:()=>r(d),visible:o,children:[c.jsx(Ga,{src:n}),c.jsxs(Va,{children:[c.jsx(Wa,{children:e}),c.jsx(Ya,{children:t})]})]})}function Ur(e){return P({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const Xa=p.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,Ja=p.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,Za=p.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,ei=p(Ur)`
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
`;function Hr(){const{t:e}=X();return c.jsxs(Xa,{children:[c.jsx(ei,{}),c.jsx(Ja,{children:e("Loading")}),c.jsx(Za,{children:e("LoadingText")})]})}const ti=p.div`
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
`;function er({query:e,onclick:t}){const[n,d]=g.useState([]),[r,a]=g.useState("");return g.useEffect(()=>{(async()=>{const f=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();a(f.access_token)})()},[]),g.useEffect(()=>{(async()=>{if(r)try{let s;if(e?s=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album`,{headers:{Authorization:`Bearer ${r}`}}):s=await fetch("https://api.spotify.com/v1/browse/new-releases?offset=0&limit=14&locale=en-US",{headers:{Authorization:`Bearer ${r}`}}),!s.ok){const f=await s.text();throw new Error(`Erro na API: ${f}`)}const l=await s.json(),u=l.albums.items.filter(f=>f!=null);d(u.map(f=>{var m,x;return{id:f.id,title:f.name,artist:(m=f.artists)==null?void 0:m.map(_=>_.name).join(", "),cover:(x=f.images[0])==null?void 0:x.url}}))}catch(s){console.error(s)}})()},[e,r]),c.jsx(c.Fragment,{children:n.length===0?c.jsx(Hr,{}):c.jsx(ti,{children:n.map((o,s)=>c.jsx(Ka,{onClick:()=>t(o.id),cover:o.cover,title:o.title,artist:o.artist,id:o.id,animationDelay:s*100},o.id))})})}function ri(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function ni(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const oi=p.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,ai=p(ri)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,ii=p.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,si=p.hr`
    opacity: 0.15;
    margin: 5px;
`,li=p.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,ci=p.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function se({q:e,a:t}){const[n,d]=g.useState(!1);function r(){d(!n)}return c.jsxs(c.Fragment,{children:[c.jsxs(oi,{onClick:r,children:[c.jsx(ai,{showA:n}),c.jsx(ii,{children:e})]}),c.jsx(si,{}),c.jsx(li,{showA:n,children:c.jsx(ci,{showA:n,children:t})})]})}const ui=p.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`,di=p.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function fi(){const{t:e}=X();return c.jsxs(ui,{id:"faq",children:[c.jsx(ut,{text:"FAQ",type:1}),c.jsxs(di,{children:[c.jsx(se,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),c.jsx(se,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),c.jsx(se,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),c.jsx(se,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),c.jsx(se,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const mi=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,pi=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,hi=p.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function K({title:e,value:t,onChange:n}){return c.jsxs(mi,{children:[c.jsx(pi,{children:e}),c.jsx(hi,{placeholder:e,value:t,onChange:n})]})}const gi=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,xi=p.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,vi=p.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function tr({title:e,value:t,onChangeTitle:n,onChangeDate:d}){return c.jsxs(gi,{children:[c.jsx(xi,{placeholder:e,value:e,onChange:n}),c.jsx(vi,{placeholder:e,value:t,onChange:d})]})}const bi=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,yi=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,wi=p.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,_i=p.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,Ci=p.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function le({title:e,value:t,onClick:n}){return c.jsxs(bi,{children:[c.jsx(yi,{children:e}),c.jsxs(wi,{onClick:n,children:[c.jsx(_i,{style:{backgroundColor:t}}),c.jsx(Ci,{children:t})]})]})}function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e}).apply(this,arguments)}function Qr(e,t){if(e==null)return{};var n,d,r={},a=Object.keys(e);for(d=0;d<a.length;d++)t.indexOf(n=a[d])>=0||(r[n]=e[n]);return r}function dt(e){var t=g.useRef(e),n=g.useRef(function(d){t.current&&t.current(d)});return t.current=e,n.current}var ue=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},ce=function(e){return"touches"in e},ft=function(e){return e&&e.ownerDocument.defaultView||self},rr=function(e,t,n){var d=e.getBoundingClientRect(),r=ce(t)?function(a,o){for(var s=0;s<a.length;s++)if(a[s].identifier===o)return a[s];return a[0]}(t.touches,n):t;return{left:ue((r.pageX-(d.left+ft(e).pageXOffset))/d.width),top:ue((r.pageY-(d.top+ft(e).pageYOffset))/d.height)}},nr=function(e){!ce(e)&&e.preventDefault()},Nr=q.memo(function(e){var t=e.onMove,n=e.onKey,d=Qr(e,["onMove","onKey"]),r=g.useRef(null),a=dt(t),o=dt(n),s=g.useRef(null),l=g.useRef(!1),u=g.useMemo(function(){var _=function(w){nr(w),(ce(w)?w.touches.length>0:w.buttons>0)&&r.current?a(rr(r.current,w,s.current)):h(!1)},v=function(){return h(!1)};function h(w){var C=l.current,T=ft(r.current),b=w?T.addEventListener:T.removeEventListener;b(C?"touchmove":"mousemove",_),b(C?"touchend":"mouseup",v)}return[function(w){var C=w.nativeEvent,T=r.current;if(T&&(nr(C),!function(k,I){return I&&!ce(k)}(C,l.current)&&T)){if(ce(C)){l.current=!0;var b=C.changedTouches||[];b.length&&(s.current=b[0].identifier)}T.focus(),a(rr(T,C,s.current)),h(!0)}},function(w){var C=w.which||w.keyCode;C<37||C>40||(w.preventDefault(),o({left:C===39?.05:C===37?-.05:0,top:C===40?.05:C===38?-.05:0}))},h]},[o,a]),f=u[0],m=u[1],x=u[2];return g.useEffect(function(){return x},[x]),q.createElement("div",Le({},d,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:r,onKeyDown:m,tabIndex:0,role:"slider"}))}),bt=function(e){return e.filter(Boolean).join(" ")},Gr=function(e){var t=e.color,n=e.left,d=e.top,r=d===void 0?.5:d,a=bt(["react-colorful__pointer",e.className]);return q.createElement("div",{className:a,style:{top:100*r+"%",left:100*n+"%"}},q.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},L=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},ki=function(e){return Ri(mt(e))},mt=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?L(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?L(parseInt(e.substring(6,8),16)/255,2):1}},Ti=function(e){return Si(Ii(e))},ji=function(e){var t=e.s,n=e.v,d=e.a,r=(200-t)*n/100;return{h:L(e.h),s:L(r>0&&r<200?t*n/100/(r<=100?r:200-r)*100:0),l:L(r/2),a:L(d,2)}},pt=function(e){var t=ji(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},Ii=function(e){var t=e.h,n=e.s,d=e.v,r=e.a;t=t/360*6,n/=100,d/=100;var a=Math.floor(t),o=d*(1-n),s=d*(1-(t-a)*n),l=d*(1-(1-t+a)*n),u=a%6;return{r:L(255*[d,s,o,o,l,d][u]),g:L(255*[l,d,d,s,o,o][u]),b:L(255*[o,o,l,d,d,s][u]),a:L(r,2)}},ve=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Si=function(e){var t=e.r,n=e.g,d=e.b,r=e.a,a=r<1?ve(L(255*r)):"";return"#"+ve(t)+ve(n)+ve(d)+a},Ri=function(e){var t=e.r,n=e.g,d=e.b,r=e.a,a=Math.max(t,n,d),o=a-Math.min(t,n,d),s=o?a===t?(n-d)/o:a===n?2+(d-t)/o:4+(t-n)/o:0;return{h:L(60*(s<0?s+6:s)),s:L(a?o/a*100:0),v:L(a/255*100),a:r}},Ei=q.memo(function(e){var t=e.hue,n=e.onChange,d=bt(["react-colorful__hue",e.className]);return q.createElement("div",{className:d},q.createElement(Nr,{onMove:function(r){n({h:360*r.left})},onKey:function(r){n({h:ue(t+360*r.left,0,360)})},"aria-label":"Hue","aria-valuenow":L(t),"aria-valuemax":"360","aria-valuemin":"0"},q.createElement(Gr,{className:"react-colorful__hue-pointer",left:t/360,color:pt({h:t,s:100,v:100,a:1})})))}),Oi=q.memo(function(e){var t=e.hsva,n=e.onChange,d={backgroundColor:pt({h:t.h,s:100,v:100,a:1})};return q.createElement("div",{className:"react-colorful__saturation",style:d},q.createElement(Nr,{onMove:function(r){n({s:100*r.left,v:100-100*r.top})},onKey:function(r){n({s:ue(t.s+100*r.left,0,100),v:ue(t.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+L(t.s)+"%, Brightness "+L(t.v)+"%"},q.createElement(Gr,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:pt(t)})))}),Wr=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},Ai=function(e,t){return e.toLowerCase()===t.toLowerCase()||Wr(mt(e),mt(t))};function Di(e,t,n){var d=dt(n),r=g.useState(function(){return e.toHsva(t)}),a=r[0],o=r[1],s=g.useRef({color:t,hsva:a});g.useEffect(function(){if(!e.equal(t,s.current.color)){var u=e.toHsva(t);s.current={hsva:u,color:t},o(u)}},[t,e]),g.useEffect(function(){var u;Wr(a,s.current.hsva)||e.equal(u=e.fromHsva(a),s.current.color)||(s.current={hsva:a,color:u},d(u))},[a,e,d]);var l=g.useCallback(function(u){o(function(f){return Object.assign({},f,u)})},[]);return[a,l]}var Pi=typeof window<"u"?g.useLayoutEffect:g.useEffect,zi=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},or=new Map,Mi=function(e){Pi(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!or.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,or.set(t,n);var d=zi();d&&n.setAttribute("nonce",d),t.head.appendChild(n)}},[])},$i=function(e){var t=e.className,n=e.colorModel,d=e.color,r=d===void 0?n.defaultColor:d,a=e.onChange,o=Qr(e,["className","colorModel","color","onChange"]),s=g.useRef(null);Mi(s);var l=Di(n,r,a),u=l[0],f=l[1],m=bt(["react-colorful",t]);return q.createElement("div",Le({},o,{ref:s,className:m}),q.createElement(Oi,{hsva:u,onChange:f}),q.createElement(Ei,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},Fi={defaultColor:"000",toHsva:ki,fromHsva:function(e){return Ti({h:e.h,s:e.s,v:e.v,a:1})},equal:Ai},Li=function(e){return q.createElement($i,Le({},e,{colorModel:Fi}))};function Bi(e){return P({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}const qi=p.div`
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
`,Ui=p(Li)`
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
`,Ze=p.div`
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
`,Hi=p.div`
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
`,Qi=p.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Ni=p.input`
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
`,Gi=p(po)`
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
`,Wi=p(go)`
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
`,Yi=p(Bi)`
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
`,Vi=p(mo)`
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
        color: var(--PosterfyGreen);
        background-color: rgba(76, 175, 80, 0.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`,Ki=p.img`
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
`;function Xi({DefaultColor:e,image:t,predefinedColors:n,position:d,onDone:r,onClose:a}){const[o,s]=g.useState(e),[l,u]=g.useState(!1),f=g.useRef(null),m=g.useRef(null);function x(){u(!l)}function _(h){s(h.target.value===""?"#":h.target.value)}function v(h){const w=f.current,T=m.current.getBoundingClientRect(),b=w.getContext("2d"),k=h.clientX-T.left,I=h.clientY-T.top,S=`#${[...b.getImageData(k,I,1,1).data].slice(0,3).map(R=>R.toString(16).padStart(2,"0")).join("")}`;s(S),x()}return c.jsxs(qi,{style:{position:"absolute",top:d.top,left:d.left,zIndex:1e3},children:[c.jsx("canvas",{ref:f,style:{display:"none"}}),l?c.jsx(Ki,{ref:m,crossOrigin:"anonymous",draggable:"false",src:t,onClick:v,onLoad:()=>{const h=f.current,w=h.getContext("2d"),C=m.current;h.width=C.width,h.height=C.height,w.drawImage(C,0,0,C.width,C.height)}}):c.jsx(Ui,{color:o,onChange:s}),c.jsx(Ze,{children:n.map(h=>c.jsx(Hi,{style:{backgroundColor:h},onClick:()=>s(h)},h))}),c.jsxs(Ze,{children:[c.jsx(Qi,{children:"Hex"}),c.jsx(Ni,{value:o,onChange:_})]}),c.jsxs(Ze,{children:[l?c.jsx(Wi,{onClick:x}):c.jsx(Gi,{onClick:x}),c.jsx(Yi,{onClick:a}),c.jsx(Vi,{onClick:()=>{r(o),Jn(o)}})]})]})}const Ji=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Zi=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,es=p.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,ts=p.input`
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
`,rs=p.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function be({title:e,text:t,value:n,onChange:d}){const r=()=>d(!n);return c.jsxs(Ji,{children:[c.jsx(Zi,{children:e}),c.jsxs(es,{onClick:r,children:[c.jsx(ts,{checked:n,readOnly:!0,type:"checkbox"}),c.jsx(rs,{active:n,children:t})]})]})}function ns(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function os(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const as=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,is=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ss=p.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,ls=p.input`
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
`,cs=p.p`
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
`,us=p(ns)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function ds({title:e,text:t,onChange:n}){const d=g.useRef(),r=()=>{d.current.click()},a=o=>{const s=o.target.files[0];t=s.name,s&&n(s)};return c.jsxs(as,{onClick:r,children:[c.jsx(is,{children:e}),c.jsxs(ss,{children:[c.jsx(us,{}),c.jsx(ls,{ref:d,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:a}),c.jsx(cs,{active:!0,children:t})]})]})}const fs=p.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,ms=p.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ps=p.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,hs=p.input`
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
`,gs=p.p`
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
`,xs=p(os)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function vs({title:e,text:t,onChange:n}){const d=g.useRef(),r=()=>{d.current.click()},a=o=>{const s=o.target.files[0];t=s.name,s&&n(s)};return c.jsxs(fs,{onClick:r,children:[c.jsx(ms,{children:e}),c.jsxs(ps,{children:[c.jsx(xs,{}),c.jsx(hs,{ref:d,type:"file",accept:".ttf,.otf",onChange:a}),c.jsx(gs,{active:!0,children:t})]})]})}var Q={};/*! *****************************************************************************
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
***************************************************************************** */var ht=function(e,t){return ht=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,d){n.__proto__=d}||function(n,d){for(var r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r])},ht(e,t)};function bs(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ht(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var gt=function(){return gt=Object.assign||function(t){for(var n,d=1,r=arguments.length;d<r;d++){n=arguments[d];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},gt.apply(this,arguments)};function ys(e,t){var n={};for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&t.indexOf(d)<0&&(n[d]=e[d]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,d=Object.getOwnPropertySymbols(e);r<d.length;r++)t.indexOf(d[r])<0&&Object.prototype.propertyIsEnumerable.call(e,d[r])&&(n[d[r]]=e[d[r]]);return n}function ws(e,t,n,d){var r=arguments.length,a=r<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,n):d,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,d);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function _s(e,t){return function(n,d){t(n,d,e)}}function Cs(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function ks(e,t,n,d){function r(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(f){try{u(d.next(f))}catch(m){o(m)}}function l(f){try{u(d.throw(f))}catch(m){o(m)}}function u(f){f.done?a(f.value):r(f.value).then(s,l)}u((d=d.apply(e,t||[])).next())})}function Ts(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},d,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(f){return l([u,f])}}function l(u){if(d)throw new TypeError("Generator is already executing.");for(;n;)try{if(d=1,r&&(a=u[0]&2?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,r=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],r=0}finally{d=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var yt=Object.create?function(e,t,n,d){d===void 0&&(d=n),Object.defineProperty(e,d,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,d){d===void 0&&(d=n),e[d]=t[n]};function js(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&yt(t,e,n)}function xt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],d=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&d>=e.length&&(e=void 0),{value:e&&e[d++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yr(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var d=n.call(e),r,a=[],o;try{for(;(t===void 0||t-- >0)&&!(r=d.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=d.return)&&n.call(d)}finally{if(o)throw o.error}}return a}function Is(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Yr(arguments[t]));return e}function Ss(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var d=Array(e),r=0,t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,r++)d[r]=a[o];return d}function Rs(e,t,n){if(n||arguments.length===2)for(var d=0,r=t.length,a;d<r;d++)(a||!(d in t))&&(a||(a=Array.prototype.slice.call(t,0,d)),a[d]=t[d]);return e.concat(a||t)}function de(e){return this instanceof de?(this.v=e,this):new de(e)}function Es(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var d=n.apply(e,t||[]),r,a=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(x){d[x]&&(r[x]=function(_){return new Promise(function(v,h){a.push([x,_,v,h])>1||s(x,_)})})}function s(x,_){try{l(d[x](_))}catch(v){m(a[0][3],v)}}function l(x){x.value instanceof de?Promise.resolve(x.value.v).then(u,f):m(a[0][2],x)}function u(x){s("next",x)}function f(x){s("throw",x)}function m(x,_){x(_),a.shift(),a.length&&s(a[0][0],a[0][1])}}function Os(e){var t,n;return t={},d("next"),d("throw",function(r){throw r}),d("return"),t[Symbol.iterator]=function(){return this},t;function d(r,a){t[r]=e[r]?function(o){return(n=!n)?{value:de(e[r](o)),done:r==="return"}:a?a(o):o}:a}}function As(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof xt=="function"?xt(e):e[Symbol.iterator](),n={},d("next"),d("throw"),d("return"),n[Symbol.asyncIterator]=function(){return this},n);function d(a){n[a]=e[a]&&function(o){return new Promise(function(s,l){o=e[a](o),r(s,l,o.done,o.value)})}}function r(a,o,s,l){Promise.resolve(l).then(function(u){a({value:u,done:s})},o)}}function Ds(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var Ps=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function zs(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&yt(t,e,n);return Ps(t,e),t}function Ms(e){return e&&e.__esModule?e:{default:e}}function $s(e,t,n,d){if(n==="a"&&!d)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!d:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?d:n==="a"?d.call(e):d?d.value:t.get(e)}function Fs(e,t,n,d,r){if(d==="m")throw new TypeError("Private method is not writable");if(d==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return d==="a"?r.call(e,n):r?r.value=n:t.set(e,n),n}const Ls=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return gt},__asyncDelegator:Os,__asyncGenerator:Es,__asyncValues:As,__await:de,__awaiter:ks,__classPrivateFieldGet:$s,__classPrivateFieldSet:Fs,__createBinding:yt,__decorate:ws,__exportStar:js,__extends:bs,__generator:Ts,__importDefault:Ms,__importStar:zs,__makeTemplateObject:Ds,__metadata:Cs,__param:_s,__read:Yr,__rest:ys,__spread:Is,__spreadArray:Rs,__spreadArrays:Ss,__values:xt},Symbol.toStringTag,{value:"Module"})),V=Mn(Ls);var ye={},we={},et={},_e={},ar;function Bs(){if(ar)return _e;ar=1,_e.__esModule=!0;var e=g;function t(n,d){e.useEffect(function(){var r=!0,a=function(){return r},o=n(a);return function(){r=!1,o&&o()}},d)}return _e.useCurrentEffect=t,_e}var Ce={},ir;function qs(){if(ir)return Ce;ir=1,Ce.__esModule=!0;var e=g;function t(n,d){var r=!0,a=function(){return r};return e.useEffect(function(){return function(){r=!1}},d),e.useCallback(n(a),d)}return Ce.useCurrentCallback=t,Ce}var sr;function Vr(){return sr||(sr=1,function(e){function t(n){for(var d in n)e.hasOwnProperty(d)||(e[d]=n[d])}e.__esModule=!0,t(Bs()),t(qs())}(et)),et}var tt={},ke={},lr;function Kr(){if(lr)return ke;lr=1,Object.defineProperty(ke,"__esModule",{value:!0});var e={loading:!0,data:void 0,error:void 0};return ke.default=e,ke}var Te={},cr;function Us(){if(cr)return Te;cr=1,Object.defineProperty(Te,"__esModule",{value:!0});var e=V,t=e.__importDefault(Kr());function n(d,r){var a={start:function(){return t.default},resolve:function(){return e.__assign(e.__assign({},d),{data:r.payload,loading:!1})},reject:function(){return e.__assign(e.__assign({},d),{error:r.payload,loading:!1})}};return a[r.type]()}return Te.default=n,Te}var je={},rt,ur;function Hs(){return ur||(ur=1,rt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),rt}var nt,dr;function Xr(){if(dr)return nt;dr=1;const e=Hs(),t={};for(const r of Object.keys(e))t[e[r]]=r;const n={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};nt=n;for(const r of Object.keys(n)){if(!("channels"in n[r]))throw new Error("missing channels property: "+r);if(!("labels"in n[r]))throw new Error("missing channel labels property: "+r);if(n[r].labels.length!==n[r].channels)throw new Error("channel and label counts mismatch: "+r);const{channels:a,labels:o}=n[r];delete n[r].channels,delete n[r].labels,Object.defineProperty(n[r],"channels",{value:a}),Object.defineProperty(n[r],"labels",{value:o})}n.rgb.hsl=function(r){const a=r[0]/255,o=r[1]/255,s=r[2]/255,l=Math.min(a,o,s),u=Math.max(a,o,s),f=u-l;let m,x;u===l?m=0:a===u?m=(o-s)/f:o===u?m=2+(s-a)/f:s===u&&(m=4+(a-o)/f),m=Math.min(m*60,360),m<0&&(m+=360);const _=(l+u)/2;return u===l?x=0:_<=.5?x=f/(u+l):x=f/(2-u-l),[m,x*100,_*100]},n.rgb.hsv=function(r){let a,o,s,l,u;const f=r[0]/255,m=r[1]/255,x=r[2]/255,_=Math.max(f,m,x),v=_-Math.min(f,m,x),h=function(w){return(_-w)/6/v+1/2};return v===0?(l=0,u=0):(u=v/_,a=h(f),o=h(m),s=h(x),f===_?l=s-o:m===_?l=1/3+a-s:x===_&&(l=2/3+o-a),l<0?l+=1:l>1&&(l-=1)),[l*360,u*100,_*100]},n.rgb.hwb=function(r){const a=r[0],o=r[1];let s=r[2];const l=n.rgb.hsl(r)[0],u=1/255*Math.min(a,Math.min(o,s));return s=1-1/255*Math.max(a,Math.max(o,s)),[l,u*100,s*100]},n.rgb.cmyk=function(r){const a=r[0]/255,o=r[1]/255,s=r[2]/255,l=Math.min(1-a,1-o,1-s),u=(1-a-l)/(1-l)||0,f=(1-o-l)/(1-l)||0,m=(1-s-l)/(1-l)||0;return[u*100,f*100,m*100,l*100]};function d(r,a){return(r[0]-a[0])**2+(r[1]-a[1])**2+(r[2]-a[2])**2}return n.rgb.keyword=function(r){const a=t[r];if(a)return a;let o=1/0,s;for(const l of Object.keys(e)){const u=e[l],f=d(r,u);f<o&&(o=f,s=l)}return s},n.keyword.rgb=function(r){return e[r]},n.rgb.xyz=function(r){let a=r[0]/255,o=r[1]/255,s=r[2]/255;a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,o=o>.04045?((o+.055)/1.055)**2.4:o/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92;const l=a*.4124+o*.3576+s*.1805,u=a*.2126+o*.7152+s*.0722,f=a*.0193+o*.1192+s*.9505;return[l*100,u*100,f*100]},n.rgb.lab=function(r){const a=n.rgb.xyz(r);let o=a[0],s=a[1],l=a[2];o/=95.047,s/=100,l/=108.883,o=o>.008856?o**(1/3):7.787*o+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const u=116*s-16,f=500*(o-s),m=200*(s-l);return[u,f,m]},n.hsl.rgb=function(r){const a=r[0]/360,o=r[1]/100,s=r[2]/100;let l,u,f;if(o===0)return f=s*255,[f,f,f];s<.5?l=s*(1+o):l=s+o-s*o;const m=2*s-l,x=[0,0,0];for(let _=0;_<3;_++)u=a+1/3*-(_-1),u<0&&u++,u>1&&u--,6*u<1?f=m+(l-m)*6*u:2*u<1?f=l:3*u<2?f=m+(l-m)*(2/3-u)*6:f=m,x[_]=f*255;return x},n.hsl.hsv=function(r){const a=r[0];let o=r[1]/100,s=r[2]/100,l=o;const u=Math.max(s,.01);s*=2,o*=s<=1?s:2-s,l*=u<=1?u:2-u;const f=(s+o)/2,m=s===0?2*l/(u+l):2*o/(s+o);return[a,m*100,f*100]},n.hsv.rgb=function(r){const a=r[0]/60,o=r[1]/100;let s=r[2]/100;const l=Math.floor(a)%6,u=a-Math.floor(a),f=255*s*(1-o),m=255*s*(1-o*u),x=255*s*(1-o*(1-u));switch(s*=255,l){case 0:return[s,x,f];case 1:return[m,s,f];case 2:return[f,s,x];case 3:return[f,m,s];case 4:return[x,f,s];case 5:return[s,f,m]}},n.hsv.hsl=function(r){const a=r[0],o=r[1]/100,s=r[2]/100,l=Math.max(s,.01);let u,f;f=(2-o)*s;const m=(2-o)*l;return u=o*l,u/=m<=1?m:2-m,u=u||0,f/=2,[a,u*100,f*100]},n.hwb.rgb=function(r){const a=r[0]/360;let o=r[1]/100,s=r[2]/100;const l=o+s;let u;l>1&&(o/=l,s/=l);const f=Math.floor(6*a),m=1-s;u=6*a-f,f&1&&(u=1-u);const x=o+u*(m-o);let _,v,h;switch(f){default:case 6:case 0:_=m,v=x,h=o;break;case 1:_=x,v=m,h=o;break;case 2:_=o,v=m,h=x;break;case 3:_=o,v=x,h=m;break;case 4:_=x,v=o,h=m;break;case 5:_=m,v=o,h=x;break}return[_*255,v*255,h*255]},n.cmyk.rgb=function(r){const a=r[0]/100,o=r[1]/100,s=r[2]/100,l=r[3]/100,u=1-Math.min(1,a*(1-l)+l),f=1-Math.min(1,o*(1-l)+l),m=1-Math.min(1,s*(1-l)+l);return[u*255,f*255,m*255]},n.xyz.rgb=function(r){const a=r[0]/100,o=r[1]/100,s=r[2]/100;let l,u,f;return l=a*3.2406+o*-1.5372+s*-.4986,u=a*-.9689+o*1.8758+s*.0415,f=a*.0557+o*-.204+s*1.057,l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,f=f>.0031308?1.055*f**(1/2.4)-.055:f*12.92,l=Math.min(Math.max(0,l),1),u=Math.min(Math.max(0,u),1),f=Math.min(Math.max(0,f),1),[l*255,u*255,f*255]},n.xyz.lab=function(r){let a=r[0],o=r[1],s=r[2];a/=95.047,o/=100,s/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,o=o>.008856?o**(1/3):7.787*o+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const l=116*o-16,u=500*(a-o),f=200*(o-s);return[l,u,f]},n.lab.xyz=function(r){const a=r[0],o=r[1],s=r[2];let l,u,f;u=(a+16)/116,l=o/500+u,f=u-s/200;const m=u**3,x=l**3,_=f**3;return u=m>.008856?m:(u-16/116)/7.787,l=x>.008856?x:(l-16/116)/7.787,f=_>.008856?_:(f-16/116)/7.787,l*=95.047,u*=100,f*=108.883,[l,u,f]},n.lab.lch=function(r){const a=r[0],o=r[1],s=r[2];let l;l=Math.atan2(s,o)*360/2/Math.PI,l<0&&(l+=360);const f=Math.sqrt(o*o+s*s);return[a,f,l]},n.lch.lab=function(r){const a=r[0],o=r[1],l=r[2]/360*2*Math.PI,u=o*Math.cos(l),f=o*Math.sin(l);return[a,u,f]},n.rgb.ansi16=function(r,a=null){const[o,s,l]=r;let u=a===null?n.rgb.hsv(r)[2]:a;if(u=Math.round(u/50),u===0)return 30;let f=30+(Math.round(l/255)<<2|Math.round(s/255)<<1|Math.round(o/255));return u===2&&(f+=60),f},n.hsv.ansi16=function(r){return n.rgb.ansi16(n.hsv.rgb(r),r[2])},n.rgb.ansi256=function(r){const a=r[0],o=r[1],s=r[2];return a===o&&o===s?a<8?16:a>248?231:Math.round((a-8)/247*24)+232:16+36*Math.round(a/255*5)+6*Math.round(o/255*5)+Math.round(s/255*5)},n.ansi16.rgb=function(r){let a=r%10;if(a===0||a===7)return r>50&&(a+=3.5),a=a/10.5*255,[a,a,a];const o=(~~(r>50)+1)*.5,s=(a&1)*o*255,l=(a>>1&1)*o*255,u=(a>>2&1)*o*255;return[s,l,u]},n.ansi256.rgb=function(r){if(r>=232){const u=(r-232)*10+8;return[u,u,u]}r-=16;let a;const o=Math.floor(r/36)/5*255,s=Math.floor((a=r%36)/6)/5*255,l=a%6/5*255;return[o,s,l]},n.rgb.hex=function(r){const o=(((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255)).toString(16).toUpperCase();return"000000".substring(o.length)+o},n.hex.rgb=function(r){const a=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!a)return[0,0,0];let o=a[0];a[0].length===3&&(o=o.split("").map(m=>m+m).join(""));const s=parseInt(o,16),l=s>>16&255,u=s>>8&255,f=s&255;return[l,u,f]},n.rgb.hcg=function(r){const a=r[0]/255,o=r[1]/255,s=r[2]/255,l=Math.max(Math.max(a,o),s),u=Math.min(Math.min(a,o),s),f=l-u;let m,x;return f<1?m=u/(1-f):m=0,f<=0?x=0:l===a?x=(o-s)/f%6:l===o?x=2+(s-a)/f:x=4+(a-o)/f,x/=6,x%=1,[x*360,f*100,m*100]},n.hsl.hcg=function(r){const a=r[1]/100,o=r[2]/100,s=o<.5?2*a*o:2*a*(1-o);let l=0;return s<1&&(l=(o-.5*s)/(1-s)),[r[0],s*100,l*100]},n.hsv.hcg=function(r){const a=r[1]/100,o=r[2]/100,s=a*o;let l=0;return s<1&&(l=(o-s)/(1-s)),[r[0],s*100,l*100]},n.hcg.rgb=function(r){const a=r[0]/360,o=r[1]/100,s=r[2]/100;if(o===0)return[s*255,s*255,s*255];const l=[0,0,0],u=a%1*6,f=u%1,m=1-f;let x=0;switch(Math.floor(u)){case 0:l[0]=1,l[1]=f,l[2]=0;break;case 1:l[0]=m,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=f;break;case 3:l[0]=0,l[1]=m,l[2]=1;break;case 4:l[0]=f,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=m}return x=(1-o)*s,[(o*l[0]+x)*255,(o*l[1]+x)*255,(o*l[2]+x)*255]},n.hcg.hsv=function(r){const a=r[1]/100,o=r[2]/100,s=a+o*(1-a);let l=0;return s>0&&(l=a/s),[r[0],l*100,s*100]},n.hcg.hsl=function(r){const a=r[1]/100,s=r[2]/100*(1-a)+.5*a;let l=0;return s>0&&s<.5?l=a/(2*s):s>=.5&&s<1&&(l=a/(2*(1-s))),[r[0],l*100,s*100]},n.hcg.hwb=function(r){const a=r[1]/100,o=r[2]/100,s=a+o*(1-a);return[r[0],(s-a)*100,(1-s)*100]},n.hwb.hcg=function(r){const a=r[1]/100,s=1-r[2]/100,l=s-a;let u=0;return l<1&&(u=(s-l)/(1-l)),[r[0],l*100,u*100]},n.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},n.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},n.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},n.gray.hsl=function(r){return[0,0,r[0]]},n.gray.hsv=n.gray.hsl,n.gray.hwb=function(r){return[0,100,r[0]]},n.gray.cmyk=function(r){return[0,0,0,r[0]]},n.gray.lab=function(r){return[r[0],0,0]},n.gray.hex=function(r){const a=Math.round(r[0]/100*255)&255,s=((a<<16)+(a<<8)+a).toString(16).toUpperCase();return"000000".substring(s.length)+s},n.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]},nt}var ot,fr;function Qs(){if(fr)return ot;fr=1;const e=Xr();function t(){const a={},o=Object.keys(e);for(let s=o.length,l=0;l<s;l++)a[o[l]]={distance:-1,parent:null};return a}function n(a){const o=t(),s=[a];for(o[a].distance=0;s.length;){const l=s.pop(),u=Object.keys(e[l]);for(let f=u.length,m=0;m<f;m++){const x=u[m],_=o[x];_.distance===-1&&(_.distance=o[l].distance+1,_.parent=l,s.unshift(x))}}return o}function d(a,o){return function(s){return o(a(s))}}function r(a,o){const s=[o[a].parent,a];let l=e[o[a].parent][a],u=o[a].parent;for(;o[u].parent;)s.unshift(o[u].parent),l=d(e[o[u].parent][u],l),u=o[u].parent;return l.conversion=s,l}return ot=function(a){const o=n(a),s={},l=Object.keys(o);for(let u=l.length,f=0;f<u;f++){const m=l[f];o[m].parent!==null&&(s[m]=r(m,o))}return s},ot}var at,mr;function Ns(){if(mr)return at;mr=1;const e=Xr(),t=Qs(),n={},d=Object.keys(e);function r(o){const s=function(...l){const u=l[0];return u==null?u:(u.length>1&&(l=u),o(l))};return"conversion"in o&&(s.conversion=o.conversion),s}function a(o){const s=function(...l){const u=l[0];if(u==null)return u;u.length>1&&(l=u);const f=o(l);if(typeof f=="object")for(let m=f.length,x=0;x<m;x++)f[x]=Math.round(f[x]);return f};return"conversion"in o&&(s.conversion=o.conversion),s}return d.forEach(o=>{n[o]={},Object.defineProperty(n[o],"channels",{value:e[o].channels}),Object.defineProperty(n[o],"labels",{value:e[o].labels});const s=t(o);Object.keys(s).forEach(u=>{const f=s[u];n[o][u]=a(f),n[o][u].raw=r(f)})}),at=n,at}var Ie={},pr;function Jr(){if(pr)return Ie;pr=1,Object.defineProperty(Ie,"__esModule",{value:!0});function e(t,n,d){return"rgb("+t+", "+n+", "+d+")"}return Ie.default=e,Ie}var Se={},hr;function Gs(){if(hr)return Se;hr=1,Object.defineProperty(Se,"__esModule",{value:!0});function e(t){return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}return Se.default=e,Se}var Re={},gr;function Ws(){if(gr)return Re;gr=1,Object.defineProperty(Re,"__esModule",{value:!0});function e(t){return"#"+t.toLowerCase()}return Re.default=e,Re}var xr;function Ys(){if(xr)return je;xr=1,Object.defineProperty(je,"__esModule",{value:!0});var e=V,t=e.__importDefault(Ns()),n=e.__importDefault(Jr()),d=e.__importDefault(Gs()),r=e.__importDefault(Ws());function a(o,s){var l={rgbString:function(){return n.default.apply(void 0,o)},hex:function(){var u;return r.default((u=t.default.rgb).hex.apply(u,o))},rgbArray:function(){return o},hslString:function(){var u;return d.default((u=t.default.rgb).hsl.apply(u,o))},hslArray:function(){var u;return(u=t.default.rgb).hsl.apply(u,o)},keyword:function(){var u;return(u=t.default.rgb).keyword.apply(u,o)}};return l[s]()}return je.default=a,je}var Ee={},it={exports:{}},vr;function Zr(){return vr||(vr=1,function(e,t){(function(n,d){e.exports=d()})(ct,function(){if(!n)var n={map:function(o,s){var l={};return s?o.map(function(u,f){return l.index=f,s.call(l,u)}):o.slice()},naturalOrder:function(o,s){return o<s?-1:o>s?1:0},sum:function(o,s){var l={};return o.reduce(s?function(u,f,m){return l.index=m,u+s.call(l,f)}:function(u,f){return u+f},0)},max:function(o,s){return Math.max.apply(null,s?n.map(o,s):o)}};var d=function(){var o=5,s=8-o,l=1e3;function u(v,h,w){return(v<<2*o)+(h<<o)+w}function f(v){var h=[],w=!1;function C(){h.sort(v),w=!0}return{push:function(T){h.push(T),w=!1},peek:function(T){return w||C(),T===void 0&&(T=h.length-1),h[T]},pop:function(){return w||C(),h.pop()},size:function(){return h.length},map:function(T){return h.map(T)},debug:function(){return w||C(),h}}}function m(v,h,w,C,T,b,k){this.r1=v,this.r2=h,this.g1=w,this.g2=C,this.b1=T,this.b2=b,this.histo=k}function x(){this.vboxes=new f(function(v,h){return n.naturalOrder(v.vbox.count()*v.vbox.volume(),h.vbox.count()*h.vbox.volume())})}function _(v,h){if(h.count()){var w=h.r2-h.r1+1,C=h.g2-h.g1+1,T=n.max([w,C,h.b2-h.b1+1]);if(h.count()==1)return[h.copy()];var b,k,I,j,S=0,R=[],O=[];if(T==w)for(b=h.r1;b<=h.r2;b++){for(j=0,k=h.g1;k<=h.g2;k++)for(I=h.b1;I<=h.b2;I++)j+=v[u(b,k,I)]||0;R[b]=S+=j}else if(T==C)for(b=h.g1;b<=h.g2;b++){for(j=0,k=h.r1;k<=h.r2;k++)for(I=h.b1;I<=h.b2;I++)j+=v[u(k,b,I)]||0;R[b]=S+=j}else for(b=h.b1;b<=h.b2;b++){for(j=0,k=h.r1;k<=h.r2;k++)for(I=h.g1;I<=h.g2;I++)j+=v[u(k,I,b)]||0;R[b]=S+=j}return R.forEach(function(D,M){O[M]=S-D}),function(D){var M,z,$,U,B,H=D+"1",N=D+"2",Z=0;for(b=h[H];b<=h[N];b++)if(R[b]>S/2){for($=h.copy(),U=h.copy(),B=(M=b-h[H])<=(z=h[N]-b)?Math.min(h[N]-1,~~(b+z/2)):Math.max(h[H],~~(b-1-M/2));!R[B];)B++;for(Z=O[B];!Z&&R[B-1];)Z=O[--B];return $[N]=B,U[H]=$[N]+1,[$,U]}}(T==w?"r":T==C?"g":"b")}}return m.prototype={volume:function(v){return this._volume&&!v||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(v){var h=this.histo;if(!this._count_set||v){var w,C,T,b=0;for(w=this.r1;w<=this.r2;w++)for(C=this.g1;C<=this.g2;C++)for(T=this.b1;T<=this.b2;T++)b+=h[u(w,C,T)]||0;this._count=b,this._count_set=!0}return this._count},copy:function(){return new m(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(v){var h=this.histo;if(!this._avg||v){var w,C,T,b,k=0,I=1<<8-o,j=0,S=0,R=0;for(C=this.r1;C<=this.r2;C++)for(T=this.g1;T<=this.g2;T++)for(b=this.b1;b<=this.b2;b++)k+=w=h[u(C,T,b)]||0,j+=w*(C+.5)*I,S+=w*(T+.5)*I,R+=w*(b+.5)*I;this._avg=k?[~~(j/k),~~(S/k),~~(R/k)]:[~~(I*(this.r1+this.r2+1)/2),~~(I*(this.g1+this.g2+1)/2),~~(I*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(v){var h=v[0]>>s;return gval=v[1]>>s,bval=v[2]>>s,h>=this.r1&&h<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},x.prototype={push:function(v){this.vboxes.push({vbox:v,color:v.avg()})},palette:function(){return this.vboxes.map(function(v){return v.color})},size:function(){return this.vboxes.size()},map:function(v){for(var h=this.vboxes,w=0;w<h.size();w++)if(h.peek(w).vbox.contains(v))return h.peek(w).color;return this.nearest(v)},nearest:function(v){for(var h,w,C,T=this.vboxes,b=0;b<T.size();b++)((w=Math.sqrt(Math.pow(v[0]-T.peek(b).color[0],2)+Math.pow(v[1]-T.peek(b).color[1],2)+Math.pow(v[2]-T.peek(b).color[2],2)))<h||h===void 0)&&(h=w,C=T.peek(b).color);return C},forcebw:function(){var v=this.vboxes;v.sort(function(T,b){return n.naturalOrder(n.sum(T.color),n.sum(b.color))});var h=v[0].color;h[0]<5&&h[1]<5&&h[2]<5&&(v[0].color=[0,0,0]);var w=v.length-1,C=v[w].color;C[0]>251&&C[1]>251&&C[2]>251&&(v[w].color=[255,255,255])}},{quantize:function(v,h){if(!v.length||h<2||h>256)return!1;var w=function(j){var S,R=new Array(1<<3*o);return j.forEach(function(O){S=u(O[0]>>s,O[1]>>s,O[2]>>s),R[S]=(R[S]||0)+1}),R}(v);w.forEach(function(){});var C=function(j,S){var R,O,D,M=1e6,z=0,$=1e6,U=0,B=1e6,H=0;return j.forEach(function(N){(R=N[0]>>s)<M?M=R:R>z&&(z=R),(O=N[1]>>s)<$?$=O:O>U&&(U=O),(D=N[2]>>s)<B?B=D:D>H&&(H=D)}),new m(M,z,$,U,B,H,S)}(v,w),T=new f(function(j,S){return n.naturalOrder(j.count(),S.count())});function b(j,S){for(var R,O=j.size(),D=0;D<l;){if(O>=S||D++>l)return;if((R=j.pop()).count()){var M=_(w,R),z=M[0],$=M[1];if(!z)return;j.push(z),$&&(j.push($),O++)}else j.push(R),D++}}T.push(C),b(T,.75*h);for(var k=new f(function(j,S){return n.naturalOrder(j.count()*j.volume(),S.count()*S.volume())});T.size();)k.push(T.pop());b(k,h);for(var I=new x;k.size();)I.push(k.pop());return I}}}().quantize,r=function(o){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=o.naturalWidth,this.height=this.canvas.height=o.naturalHeight,this.context.drawImage(o,0,0,this.width,this.height)};r.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var a=function(){};return a.prototype.getColor=function(o,s){return s===void 0&&(s=10),this.getPalette(o,5,s)[0]},a.prototype.getPalette=function(o,s,l){var u=function(_){var v=_.colorCount,h=_.quality;if(v!==void 0&&Number.isInteger(v)){if(v===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");v=Math.max(v,2),v=Math.min(v,20)}else v=10;return(h===void 0||!Number.isInteger(h)||h<1)&&(h=10),{colorCount:v,quality:h}}({colorCount:s,quality:l}),f=new r(o),m=function(_,v,h){for(var w=_,C=[],T=0,b=void 0,k=void 0,I=void 0,j=void 0,S=void 0;T<v;T+=h)k=w[0+(b=4*T)],I=w[b+1],j=w[b+2],((S=w[b+3])===void 0||S>=125)&&(k>250&&I>250&&j>250||C.push([k,I,j]));return C}(f.getImageData().data,f.width*f.height,u.quality),x=d(m,u.colorCount);return x?x.palette():null},a.prototype.getColorFromUrl=function(o,s,l){var u=this,f=document.createElement("img");f.addEventListener("load",function(){var m=u.getPalette(f,5,l);s(m[0],o)}),f.src=o},a.prototype.getImageData=function(o,s){var l=new XMLHttpRequest;l.open("GET",o,!0),l.responseType="arraybuffer",l.onload=function(){if(this.status==200){var u=new Uint8Array(this.response);i=u.length;for(var f=new Array(i),m=0;m<u.length;m++)f[m]=String.fromCharCode(u[m]);var x=f.join(""),_=window.btoa(x);s("data:image/png;base64,"+_)}},l.send()},a.prototype.getColorAsync=function(o,s,l){var u=this;this.getImageData(o,function(f){var m=document.createElement("img");m.addEventListener("load",function(){var x=u.getPalette(m,5,l);s(x[0],this)}),m.src=f})},a})}(it)),it.exports}var br;function en(){if(br)return Ee;br=1,Object.defineProperty(Ee,"__esModule",{value:!0});var e=V,t=e.__importDefault(Zr()),n=Be();function d(r,a,o,s,l){return a===void 0&&(a=2),s===void 0&&(s=null),l===void 0&&(l=10),e.__awaiter(this,void 0,void 0,function(){var u,f,m;return e.__generator(this,function(x){switch(x.label){case 0:return[4,n.loadImage(r,s)];case 1:return u=x.sent(),f=new t.default,m=f.getPalette(u,a,l),[2,m.map(function(_){return n.formatRGB(_,o)})]}})})}return Ee.default=d,Ee}var Oe={},yr;function tn(){if(yr)return Oe;yr=1,Object.defineProperty(Oe,"__esModule",{value:!0});var e=V,t=e.__importDefault(Zr()),n=Be();function d(r,a,o,s){return o===void 0&&(o=null),s===void 0&&(s=10),e.__awaiter(this,void 0,void 0,function(){var l,u,f;return e.__generator(this,function(m){switch(m.label){case 0:return[4,n.loadImage(r,o)];case 1:return l=m.sent(),u=new t.default,f=u.getColor(l,s),[2,n.formatRGB(f,a)]}})})}return Oe.default=d,Oe}var Ae={},wr;function Vs(){if(wr)return Ae;wr=1,Object.defineProperty(Ae,"__esModule",{value:!0});function e(t,n){return n===void 0&&(n=null),new Promise(function(d,r){var a=new Image;a.addEventListener("load",function(){d(a)}),a.addEventListener("error",function(){r(new Error("Color Thief React | Failed to load image URL: "+t))}),a.crossOrigin=n,a.src=t})}return Ae.default=e,Ae}var _r;function Be(){return _r||(_r=1,function(e){var t=ct&&ct.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadImage=e.getPredominantColorFromImgURL=e.rgbStringfy=e.getColorsPaletteFromImgUrl=e.formatRGB=e.reducer=e.initialReducerState=void 0;var n=Kr();Object.defineProperty(e,"initialReducerState",{enumerable:!0,get:function(){return t(n).default}});var d=Us();Object.defineProperty(e,"reducer",{enumerable:!0,get:function(){return t(d).default}});var r=Ys();Object.defineProperty(e,"formatRGB",{enumerable:!0,get:function(){return t(r).default}});var a=en();Object.defineProperty(e,"getColorsPaletteFromImgUrl",{enumerable:!0,get:function(){return t(a).default}});var o=Jr();Object.defineProperty(e,"rgbStringfy",{enumerable:!0,get:function(){return t(o).default}});var s=tn();Object.defineProperty(e,"getPredominantColorFromImgURL",{enumerable:!0,get:function(){return t(s).default}});var l=Vs();Object.defineProperty(e,"loadImage",{enumerable:!0,get:function(){return t(l).default}})}(tt)),tt}var Cr;function rn(){if(Cr)return we;Cr=1,Object.defineProperty(we,"__esModule",{value:!0});var e=V,t=e.__importStar(g),n=Vr(),d=Be();function r(a,o,s){s===void 0&&(s={});var l=s.crossOrigin,u=l===void 0?null:l,f=s.quality,m=f===void 0?10:f,x=t.useReducer(d.reducer,d.initialReducerState),_=x[0],v=x[1];return n.useCurrentEffect(function(h){v({type:"start",payload:null}),d.getPredominantColorFromImgURL(a,o,u,m).then(function(w){h()&&v({type:"resolve",payload:w})}).catch(function(w){h()&&v({type:"reject",payload:w})})},[a]),_}return we.default=r,we}var kr;function Ks(){if(kr)return ye;kr=1,Object.defineProperty(ye,"__esModule",{value:!0});var e=V,t=e.__importStar(g),n=e.__importDefault(rn());function d(r){var a=r.src,o=r.format,s=r.crossOrigin,l=s===void 0?void 0:s,u=r.quality,f=u===void 0?10:u,m=r.children,x=n.default(a,o,{crossOrigin:l,quality:f});return t.createElement(t.Fragment,null,m(x))}return ye.default=d,ye}var De={},Pe={},Tr;function nn(){if(Tr)return Pe;Tr=1,Object.defineProperty(Pe,"__esModule",{value:!0});var e=V,t=e.__importStar(g),n=Vr(),d=Be();function r(a,o,s,l){o===void 0&&(o=2),l===void 0&&(l={});var u=l.crossOrigin,f=u===void 0?null:u,m=l.quality,x=m===void 0?10:m,_=t.useReducer(d.reducer,d.initialReducerState),v=_[0],h=_[1];return n.useCurrentEffect(function(w){h({type:"start",payload:null}),d.getColorsPaletteFromImgUrl(a,o,s,f,x).then(function(C){w()&&h({type:"resolve",payload:C})}).catch(function(C){w()&&h({type:"reject",payload:C})})},[a]),v}return Pe.default=r,Pe}var jr;function Xs(){if(jr)return De;jr=1,Object.defineProperty(De,"__esModule",{value:!0});var e=V,t=e.__importStar(g),n=e.__importDefault(nn());function d(r){var a=r.src,o=r.colorCount,s=o===void 0?2:o,l=r.format,u=r.crossOrigin,f=u===void 0?void 0:u,m=r.quality,x=m===void 0?10:m,_=r.children,v=n.default(a,s,l,{crossOrigin:f,quality:x});return t.createElement(t.Fragment,null,_(v))}return De.default=d,De}Object.defineProperty(Q,"__esModule",{value:!0});Q.getPalette=Q.usePalette=an=Q.Palette=Q.getColor=Q.Color=Q.useColor=void 0;var re=V,on=re.__importDefault(Ks());Q.Color=on.default;var Js=re.__importDefault(rn());Q.useColor=Js.default;var Zs=re.__importDefault(en());Q.getPalette=Zs.default;var el=re.__importDefault(Xs()),an=Q.Palette=el.default,tl=re.__importDefault(nn());Q.usePalette=tl.default;var rl=re.__importDefault(tn());Q.getColor=rl.default;Q.default=on.default;const nl="/assets/waterMarkBlack-OUzafaTn.png",ol="/assets/waterMarkWhite-DfVw0Drc.png",al=({onImageReady:e,posterData:t,generatePoster:n,onTitleSizeAdjust:d,customFont:r})=>{const a=g.useRef(null);return g.useEffect(()=>{(async()=>{if(!n)return;const s=a.current,l=s.getContext("2d"),u=2480,f=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0;const m=async b=>{const k=new Image;return k.crossOrigin="anonymous",k.src=b,new Promise(I=>{k.onload=()=>{if(l.drawImage(k,t.marginCover,t.marginCover,u-t.marginCover*2,u-t.marginCover*2),t.useFade){let j=l.createLinearGradient(0,0,0,3e3);const S=h(t.backgroundColor);j.addColorStop(.5,`rgba(${S.r}, ${S.g}, ${S.b}, 0)`),j.addColorStop(.8,t.backgroundColor),l.fillStyle=j,l.fillRect(0,0,s.width,2500)}I()}})},x=async()=>{const b=new Image;b.crossOrigin="anonymous";const k=h(t.backgroundColor),I=w(k);return b.src=I==="black"?nl:ol,new Promise(j=>{b.onload=()=>{l.globalAlpha="0.15",l.drawImage(b,u-70-500,50,500,134),l.globalAlpha="1",j()}})},_=async()=>{let b=t.titleSize?parseInt(t.titleSize):230;const k=r||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){l.font=`bold ${b}px ${k}`;let S=l.measureText(t.albumName).width;for(;S>2480-t.marginSide*2;)b-=1,l.font=`bold ${b}px ${k}`,S=l.measureText(t.albumName).width;d(b,!0)}else l.font=`bold ${b}px ${k}`;l.fillStyle=t.textColor,t.showTracklist?l.fillText(t.albumName,t.marginSide,2500+t.marginTop):l.fillText(t.albumName,t.marginSide,2790+t.marginTop);let I=t.artistsSize?parseInt(t.artistsSize):110;l.font=`bold ${I}px ${r||"Montserrat"}`,t.showTracklist?l.fillText(t.artistsName,t.marginSide,2500+t.marginTop+I*1.3):l.fillText(t.artistsName,t.marginSide,2820+t.marginTop+I),l.font=`bold 70px ${r||"Montserrat"}`,l.fillText(t.titleRelease,t.marginSide,3310);let j=l.measureText(t.titleRelease).width;l.fillText(t.titleRuntime,j+t.marginSide+100,3310),l.globalAlpha=.7,l.font=`bold 60px ${r||"Montserrat"}`,l.fillText(t.runtime,j+t.marginSide+100,3390),l.fillText(t.releaseDate,t.marginSide,3390),l.globalAlpha=1,l.fillStyle=t.color1,l.fillRect(2045-t.marginSide,3368,145,30),l.fillStyle=t.color2,l.fillRect(2190-t.marginSide,3368,145,30),l.fillStyle=t.color3,l.fillRect(2335-t.marginSide,3368,145,30)},v=async()=>{l.fillStyle=t.textColor;let b=t.marginSide+10,k=0,I=0;const j=t.tracksSize?parseInt(t.tracksSize):50;l.font=`bold ${j}px ${r||"Montserrat"}`;const S=j,R=parseInt(t.marginTop||0),O=parseInt(t.artistsSize)?2500+R+parseInt(t.artistsSize)*1.3+130:2500+R+110*1.2+130,D=500,M=u-t.marginSide*2,z=parseInt(t.marginSide),$=O+D-10-parseInt(t.marginTop);let U=O;t.tracklist.split(`
`).forEach(B=>{if(U+S*1.3>=$){if(U=O,b=k+S*2.5+I,b>=z+M)return;I=b-S*2.5,k=0}const H=l.measureText(`${B}`).width+t.marginSide;H>k&&(k=H),l.fillText(`${B}`,b,U),U+=S*1.3})},h=b=>{const k=parseInt(b.replace("#",""),16);return{r:k>>16&255,g:k>>8&255,b:k&255}},w=b=>{const k=j=>{const S=j/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)};return .2126*k(b.r)+.7152*k(b.g)+.0722*k(b.b)>.179?"black":"white"},C=async()=>{const b=h(t.backgroundColor),k=w(b),I=t.textColor,j=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${k}/640/spotify:album:${t.albumID}`;let R=await(await fetch(j)).text();k=="black"?R=R.replace(/fill="#000000"/g,`fill="${I}"`):R=R.replace(/fill="#ffffff"/g,`fill="${I}"`);const O=new Blob([R],{type:"image/svg+xml"}),D=URL.createObjectURL(O);return new Promise(M=>{const z=new Image;z.src=D,z.onload=function(){l.drawImage(z,2020-t.marginSide,3235,480,120);const $=s.toDataURL("image/png");e($),M()}})},T=async()=>{l.fillStyle=t.backgroundColor,l.fillRect(0,2500,u,f-2500)};l.clearRect(0,0,u,f),t.useUncompressed?await m(await t.uncompressedAlbumCover):await m(t.albumCover),await T(),await _(),t.showTracklist&&await v(),t.useWatermark&&await x(),await C()})()},[n,t,e]),c.jsx("canvas",{ref:a,width:2480,height:3508,style:{display:"none"}})},il=p.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function A({children:e,animationDelay:t=0,...n}){const[d,r]=g.useState(!1);return g.useEffect(()=>{const a=setTimeout(()=>{r(!0)},t);return()=>clearTimeout(a)},[t]),c.jsx(il,{visible:d,animationDelay:t,...n,children:e})}const sl=p.div`
    width: 80%;
    margin-inline: auto;
`,ll=p.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,cl=p(fa)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,ul=p.h3`
    font-size: 1.3em;
    font-weight: bold;
`,dl=p.div`
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
`,fl=p.img`
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
`,ml=p.div`
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
`,pl=p(Ur)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?Y`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,hl=p.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,gl=p.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,Ir=p.div`
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
`,xl=p.div`
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
`,vl=p.div`
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
`,bl=p.div`
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
`,Sr=p.button`
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
`,yl=p.textarea`
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
`,wl=p.div`
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
`,st=p.div`
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
`,lt=p.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,Rr=p(ni)`
    font-size: 1.15em;
`,_l=p(Fo)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Yt`
                  animation: ${Y`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Yt`
                  animation: ${Y`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,Cl=p.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,kl=p.p`
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
`;function Tl({albumID:e,handleClickBack:t}){const{t:n}=X(),d=g.useRef(null),[r,a]=g.useState(""),[o,s]=g.useState(""),[l,u]=g.useState("200"),[f,m]=g.useState("110"),[x,_]=g.useState("50"),[v,h]=g.useState(""),[w,C]=g.useState(160),[T,b]=g.useState(0),[k,I]=g.useState("#5900ff"),[j,S]=g.useState("#ff9100"),[R,O]=g.useState("#ff0000"),[D,M]=g.useState("#00ff40"),[z,$]=g.useState("#2600ff"),[U,B]=g.useState(!0),[H,N]=g.useState(!0),[Z,_t]=g.useState(!1),[ne,Ct]=g.useState(""),[qe,kt]=g.useState(""),[sn,ln]=g.useState(""),[ee,cn]=g.useState(null),[Ue,Tt]=g.useState("information");g.useEffect(()=>{if(ee){const y=new FileReader;y.onload=async E=>{const F="CustomFont",J=new FontFace(F,E.target.result);try{const G=await J.load();document.fonts.add(G),ln(F)}catch(G){console.error("Erro ao carregar fonte:",G)}},y.readAsArrayBuffer(ee)}},[ee]);const[He,Qe]=g.useState(!1),[un,dn]=g.useState("Original"),[fe,me]=g.useState(""),[jt,It]=g.useState(""),[St,Rt]=g.useState(""),[Et,Ot]=g.useState(""),[At,Dt]=g.useState(""),[fn,Pt]=g.useState(!1),[zt,Mt]=g.useState(null),[te,mn]=g.useState(null),[$t,Ft]=g.useState(!1),[Lt,pn]=g.useState(!1),hn=y=>{u(y.target.value),Ft(!0)},gn=(y,E)=>{E&&!Lt?(u(y),pn(!0)):$t||u(y)},xn={albumCover:ne,uncompressedAlbumCover:qe,useUncompressed:He,albumName:r,artistsName:o,titleSize:l,artistsSize:f,tracksSize:x,marginTop:v,marginSide:w,marginCover:T,titleRelease:jt,releaseDate:St,titleRuntime:Et,runtime:At,backgroundColor:k,textColor:j,useWatermark:U,useFade:H,showTracklist:Z,tracklist:fe,color1:R,color2:D,color3:z,albumID:e,userAdjustedTitleSize:$t,initialTitleSizeSet:Lt},[oe,vn]=g.useState(null),[Ne,Bt]=g.useState(!1),[bn,Ge]=g.useState(!1),[yn,wn]=g.useState(!1),[_n,qt]=g.useState(!1),[Cn,We]=g.useState(!1);g.useEffect(()=>{if(Ne){Ge(!1);const y=setTimeout(()=>{We(!0)},100);return()=>clearTimeout(y)}else We(!1)},[Ne]);const kn=y=>{vn(y),Bt(!1),qt(!1),Xn(r,o),setTimeout(()=>{We(!1),setTimeout(()=>{Ge(!0)},300)},100)},Ye=()=>{Ft(!1),Ge(!1),requestAnimationFrame(()=>{if(qt(!0),Bt(!0),d.current){const y=d.current.getBoundingClientRect(),E=y.top+window.scrollY,F=y.height,G=(window.innerHeight-F)/2;window.scrollTo({top:E-G,behavior:"smooth"})}})},Tn=y=>{Ct(URL.createObjectURL(y)),Qe(!1),kt(""),dn(y.name)},Ve=()=>{if(!oe)return;const y=document.createElement("a");y.href=oe,y.download=`Posterfy - ${r}.png`,y.click(),Je(r,"poster",o)},jn=async()=>{if(He){if(!qe)return;const y=await(await fetch(await qe)).blob(),E=Object.assign(document.createElement("a"),{href:URL.createObjectURL(y),download:`Posterfy - ${r} Uncompressed Cover.png`});E.click(),URL.revokeObjectURL(E.href),Je(r,"uncompressed_cover",o)}else{if(!ne)return;const y=await(await fetch(ne)).blob(),E=Object.assign(document.createElement("a"),{href:URL.createObjectURL(y),download:`Posterfy - ${r} Cover.png`});E.click(),URL.revokeObjectURL(E.href),Je(r,"cover",o)}};function ae(y,E){const F=y.target.getBoundingClientRect();Mt({top:F.top+window.scrollY,left:F.left+window.scrollX}),mn(E),Pt(!0)}function In(){Pt(!1)}const Sn=()=>{const E=fe.split(`
`).map(F=>F.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());me(E.join(`
`))},Rn=()=>{const E=fe.split(`
`).map(F=>F.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());me(E.join(`
`))};async function En(y,E="us"){var F;try{let J=`https://itunes.apple.com/search?term=${encodeURIComponent(y)}&country=${E}&entity=album&limit=1`,G=await fetch(J);if(!G.ok)throw new Error(`HTTP Error: ${G.status}`);let Ke=await G.json();if(!((F=Ke.results)!=null&&F.length))return console.warn("No album data found."),Qe(!1),"";let W=Ke.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return W.length===2?`https://a5.mzstatic.com/us/r1000/0/${W[1].split("/").slice(0,-1).join("/")}`:""}catch(J){return console.error("Error fetching album cover:",J.message),""}}return g.useEffect(()=>{It(n("EDITOR_ReleaseTitle")),Ot(n("EDITOR_RuntimeTitle"))},[n]),g.useEffect(()=>{e&&(async()=>{var E;try{const Ut=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,W=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Ut}`}})).json(),Xe=W.artists.map(ie=>ie.name).join(", ");a(W.name),s(Xe),Ct((E=W.images[0])==null?void 0:E.url),Rt(W.release_date),kt(await En(W.name+" "+Xe));const An=W.tracks.items.reduce((ie,pe)=>ie+pe.duration_ms,0),Ht=Math.floor(An/1e3),Qt=Math.floor(Ht/60),Nt=Math.floor(Qt/60),Gt=Ht%60,Wt=Qt%60,Dn=Nt>0?`${Nt}h ${Wt}min ${Gt}s`:`${Wt}min ${Gt}s`;Dt(Dn);const Pn=W.tracks.items.map((ie,pe)=>(pe==3&&_t(!0),`${pe+1}. ${ie.name}`));me(Pn.join(`
`)),wn(!0)}catch(F){console.error("Error trying to fetch album data:",F)}})()},[e]),g.useEffect(()=>{const y=E=>{E.ctrlKey&&E.key==="s"?(E.preventDefault(),Ye()):E.ctrlKey&&E.key==="d"&&(E.preventDefault(),Ve())};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[oe,r,Ve]),c.jsx(c.Fragment,{children:yn?c.jsxs(sl,{children:[c.jsx(an,{src:ne,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:y})=>(g.useEffect(()=>{y&&y.length>0&&(I(y[0]),S(y[1]),O(y[2]),M(y[3]),$(y[4]),Ye())},[y]),null)}),c.jsxs(ll,{onClick:t,children:[c.jsx(cl,{}),c.jsx(ul,{children:n("GoBack")})]}),c.jsxs(dl,{children:[c.jsx(al,{onImageReady:kn,posterData:xn,generatePoster:Ne,onTitleSizeAdjust:gn,customFont:sn}),c.jsxs(ml,{children:[oe?c.jsx(fl,{src:oe,ref:d,visible:bn}):c.jsx(Cl,{ref:d}),c.jsx(pl,{visible:Cn})]}),c.jsxs(hl,{children:[c.jsx(A,{animationDelay:50,children:c.jsxs(gl,{children:[c.jsx(Ir,{$active:Ue==="information",onClick:()=>Tt("information"),children:n("EDITOR_InformationTab")}),c.jsx(Ir,{$active:Ue==="tracklist",onClick:()=>Tt("tracklist"),children:n("EDITOR_TracklistTab")})]})}),Ue==="information"?c.jsxs(xl,{children:[c.jsx(A,{animationDelay:0,children:c.jsx(K,{title:n("EDITOR_AlbumName"),value:r,onChange:y=>a(y.target.value)})}),c.jsx(A,{animationDelay:50,children:c.jsx(K,{title:n("EDITOR_ArtistName"),value:o,onChange:y=>s(y.target.value)})}),c.jsx(A,{animationDelay:100,children:c.jsx(K,{title:n("EDITOR_TitleSize"),value:l,onChange:hn})}),c.jsx(A,{animationDelay:150,children:c.jsx(K,{title:n("EDITOR_ArtistSize"),value:f,onChange:y=>m(y.target.value)})}),c.jsx(A,{animationDelay:200,children:c.jsx(K,{title:n("EDITOR_TracksSize"),value:x,onChange:y=>_(y.target.value)})}),c.jsx(A,{animationDelay:250,children:c.jsx(K,{title:n("EDITOR_MarginTop"),value:v,onChange:y=>h(y.target.value)})}),c.jsx(A,{animationDelay:300,children:c.jsx(K,{title:n("EDITOR_MarginSide"),value:w,onChange:y=>C(y.target.value)})}),c.jsx(A,{animationDelay:350,children:c.jsx(K,{title:n("EDITOR_MarginCover"),value:T,onChange:y=>b(y.target.value)})}),c.jsx(A,{animationDelay:400,children:c.jsx(tr,{title:jt,value:St,onChangeTitle:y=>It(y.target.value),onChangeDate:y=>Rt(y.target.value)})}),c.jsx(A,{animationDelay:450,children:c.jsx(tr,{title:Et,value:At,onChangeTitle:y=>Ot(y.target.value),onChangeDate:y=>Dt(y.target.value)})}),c.jsx(A,{animationDelay:500,children:c.jsx(le,{title:n("EDITOR_BackgroundColor"),value:k,onClick:y=>ae(y,"backgroundColor")})}),c.jsx(A,{animationDelay:550,children:c.jsx(le,{title:n("EDITOR_TextColor"),value:j,onClick:y=>ae(y,"textColor")})}),c.jsx(A,{animationDelay:600,children:c.jsx(le,{title:`${n("EDITOR_Color")} 1`,value:R,onClick:y=>ae(y,"color1")})}),c.jsx(A,{animationDelay:650,children:c.jsx(le,{title:`${n("EDITOR_Color")} 2`,value:D,onClick:y=>ae(y,"color2")})}),c.jsx(A,{animationDelay:700,children:c.jsx(le,{title:`${n("EDITOR_Color")} 3`,value:z,onClick:y=>ae(y,"color3")})}),c.jsx(A,{animationDelay:750,children:c.jsx(be,{title:n("EDITOR_Watermark"),value:U,onChange:y=>B(y),text:n("EDITOR_WatermarkText")})}),c.jsx(A,{animationDelay:800,children:c.jsx(be,{title:n("EDITOR_Fade"),value:H,onChange:y=>N(y),text:n("EDITOR_FadeText")})}),c.jsx(A,{animationDelay:850,children:c.jsx(be,{title:n("EDITOR_Uncompressed"),value:He,onChange:y=>Qe(y),text:n("EDITOR_UncompressedText")})}),c.jsx(A,{animationDelay:900,children:c.jsx(be,{title:n("EDITOR_Tracklist"),value:Z,onChange:y=>_t(y),text:n("EDITOR_TracklistText")})}),c.jsx(A,{animationDelay:950,children:c.jsx(ds,{title:n("EDITOR_Cover"),onChange:Tn,text:un})}),c.jsx(A,{animationDelay:1e3,children:c.jsx(vs,{title:n("EDITOR_Font"),text:(ee==null?void 0:ee.name)||n("EDITOR_DefaultFont"),onChange:cn})}),fn&&zt&&te&&c.jsx(Xi,{DefaultColor:te==="backgroundColor"?k:te==="textColor"?j:te==="color1"?R:te==="color2"?D:z,image:ne,predefinedColors:[R,D,z,k,j],onDone:y=>{switch(te){case"backgroundColor":I(y);break;case"textColor":S(y);break;case"color1":O(y);break;case"color2":M(y);break;case"color3":$(y);break}Mt(null)},position:zt,onClose:In})]}):c.jsxs(vl,{children:[c.jsx(yl,{value:fe,onChange:y=>me(y.target.value),placeholder:n("EDITOR_TracklistPlaceholder")}),c.jsxs(bl,{children:[c.jsx(Sr,{onClick:Sn,children:n("EDITOR_RemoveParentheses")}),c.jsx(Sr,{onClick:Rn,children:n("EDITOR_RemoveBrackets")})]})]}),c.jsx(A,{animationDelay:1050,children:c.jsxs(wl,{children:[c.jsxs(st,{onClick:jn,children:[c.jsx(Rr,{}),c.jsx(lt,{children:n("EDITOR_DownloadCover")})]}),c.jsxs(st,{onClick:Ve,children:[c.jsx(Rr,{}),c.jsx(lt,{children:n("EDITOR_Download")})]}),c.jsxs(st,{onClick:Ye,children:[c.jsx(_l,{$spinning:_n}),c.jsx(lt,{children:n("EDITOR_Apply")})]})]})}),c.jsx(A,{animationDelay:1100,children:c.jsxs(kl,{children:[n("EDITOR_Shortcuts"),": Ctrl+S (",n("EDITOR_Apply"),"), Ctrl+D (",n("EDITOR_Download"),")"]})})]})]})]}):c.jsx(Hr,{})})}const Er=e=>{if(!e)return"";const n=(e.replace(/\/$/,"")||"/").split("/");return n.length>2&&(n[2]=n[2].toLowerCase()),n.join("/")},wt=()=>"https://posterfy.space"+"/",jl=e=>{const t=wt(),n=Er(e),d=Er(t),r=e.includes("://www."),a=e.startsWith("http://");return r||a||n!==d},Il=()=>{const e=window.location.href,t=wt(),n=[];return jl(e)&&n.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:n.length===0,issues:n,currentUrl:e,canonicalUrl:t}},Sl=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:n="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(g.useEffect(()=>{const r="https://posterfy.space",a=wt(),o=r+"/albuns.png";document.title=e;const s=document.querySelector('meta[name="description"]');s&&s.setAttribute("content",t);const l=document.querySelector('meta[name="keywords"]');l&&l.setAttribute("content",n);let u=document.querySelector('link[rel="canonical"]');u?u.setAttribute("href",a):(u=document.createElement("link"),u.setAttribute("rel","canonical"),u.setAttribute("href",a),document.head.appendChild(u));const f=document.querySelector('meta[property="og:title"]');f&&f.setAttribute("content",e);const m=document.querySelector('meta[property="og:description"]');m&&m.setAttribute("content",t);const x=document.querySelector('meta[property="og:image"]');x&&x.setAttribute("content",o);const _=document.querySelector('meta[property="og:url"]');_&&_.setAttribute("content",a);const v=document.querySelector('meta[name="twitter:title"]');v&&v.setAttribute("content",e);const h=document.querySelector('meta[name="twitter:description"]');h&&h.setAttribute("content",t);const w=document.querySelector('meta[name="twitter:image"]');w&&w.setAttribute("content",o);const C={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:r+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},T=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');T&&T.remove();const b=document.createElement("script");b.type="application/ld+json",b.id="dynamic-structured-data",b.innerHTML=JSON.stringify(C),document.head.appendChild(b)},[e,t,n]),null),Rl=()=>(g.useEffect(()=>{setTimeout(()=>{const n=[],d=document.querySelector('link[rel="canonical"]');(!d||!d.href)&&n.push("Missing canonical URL");const r=document.querySelector('meta[name="description"]');(!r||r.content.length<120)&&n.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&n.push("Title too short or missing");const a=Il();a.isValid||a.issues.forEach(l=>{n.push(`${l.type}: ${l.message}`)});const o=document.querySelector('meta[name="robots"]');return o&&o.content.includes("noindex")&&n.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||n.push("Missing structured data"),n},1e3),(()=>{const n=window.location.href;n.includes("www.")||n.startsWith("http://")})()},[]),null),El=()=>(g.useEffect(()=>{Kn()},[]),null),Ol=()=>{g.useEffect(()=>{Kt(document.title,window.location.href);const e=new MutationObserver(n=>{n.forEach(d=>{d.type==="childList"&&d.target.nodeName==="TITLE"&&Kt(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function Al(){const{t:e}=X(),[t,n]=g.useState(!0),[d,r]=g.useState(!1),[a,o]=g.useState(""),[s,l]=g.useState(null);Ol(),g.useEffect(()=>co(),[]);function u(x){l(x)}function f(){l(null)}g.useEffect(()=>{const x=setTimeout(()=>{n(!1),setTimeout(()=>{r(!0)},1e3)},1100);return()=>clearTimeout(x)},[]),g.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const m=x=>{o(x)};return c.jsxs(uo,{children:[c.jsx(Sl,{}),c.jsx(Rl,{}),c.jsx(El,{}),c.jsx(Mo,{}),c.jsx(aa,{showAnimation:d}),c.jsx(ut,{text:e("anchorArt"),type:1}),c.jsx(da,{title:e("ArtTitle"),paragraph:e("ArtParagraph")}),s?c.jsx(Tl,{albumID:s,handleClickBack:f}):c.jsxs(c.Fragment,{children:[c.jsx(ya,{onSearch:m,value:a}),a&&c.jsx(er,{query:a,onclick:u}),c.jsxs("div",{style:{display:a?"none":"block"},children:[c.jsx(ut,{text:e("TryTrend"),type:2}),c.jsx(er,{onclick:u})]})]}),c.jsx(fi,{}),c.jsx(Qa,{}),c.jsx(Ta,{isVisible:t})]})}$n.use(Fn).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]"}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]"}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]"}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});Dr(document.getElementById("root")).render(c.jsx(g.StrictMode,{children:c.jsx(Al,{})}));
