import{r as m,a as Dr,e as H,g as Ar,c as it}from"./vendor-DZStNbcm.js";import{d as h,G as A,m as Y,l as Vt}from"./ui-C8-z_EEw.js";import{u as V,i as $r,a as Lr}from"./i18n-DbQiQmPR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var On={exports:{}},De={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=m,Hr=Symbol.for("react.element"),Br=Symbol.for("react.fragment"),qr=Object.prototype.hasOwnProperty,Ur=Fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qr={key:!0,ref:!0,__self:!0,__source:!0};function zn(e,t,n){var d,r={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(d in t)qr.call(t,d)&&!Qr.hasOwnProperty(d)&&(r[d]=t[d]);if(e&&e.defaultProps)for(d in t=e.defaultProps,t)r[d]===void 0&&(r[d]=t[d]);return{$$typeof:Hr,type:e,key:a,ref:s,props:r,_owner:Ur.current}}De.Fragment=Br;De.jsx=zn;De.jsxs=zn;On.exports=De;var o=On.exports,Pn,Nt=Dr;Pn=Nt.createRoot,Nt.hydrateRoot;function Ae({width:e,height:t,fill:n}){return o.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:n,xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e},Me.apply(this,arguments)}function Vr(e,t){if(e==null)return{};var n={},d=Object.keys(e),r,a;for(a=0;a<d.length;a++)r=d[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var Nr=["cdnSuffix","cdnUrl","countryCode","style","svg"],Gr="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Wr="svg",Yr=127397,Mn=function(t){var n=t.cdnSuffix,d=n===void 0?Wr:n,r=t.cdnUrl,a=r===void 0?Gr:r,s=t.countryCode,l=t.style,c=t.svg,u=c===void 0?!1:c,f=Vr(t,Nr);if(typeof s!="string")return null;if(u){var p=""+a+s.toLowerCase()+"."+d;return m.createElement("img",Object.assign({},f,{src:p,style:Me({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},l)}))}var x=s.toUpperCase().replace(/./g,function(_){return String.fromCodePoint(_.charCodeAt(0)+Yr)});return m.createElement("span",Object.assign({role:"img"},f,{style:Me({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},l)}),x)};const Zr=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},Gt=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},Kr=(e,t="image",n="")=>{const d=n?`${n} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:d,file_type:t,album_name:e,artist_name:n})},Xr=(e,t="")=>{const n=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:n,album_name:e,artist_name:t})},Wt=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},Jr=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},eo=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},to=h.div`
  position: relative;
`,no=h.button`
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
`,ro=h.div`
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
`,oo=h.div`
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
`,io=h.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,ao=h.div`
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
`,ge=h.span`
  margin-left: 8px;
`,xe=h(Mn)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function so(){const[e,t]=m.useState(!1),[n,d]=m.useState(!1),{i18n:r}=V();m.useEffect(()=>{const u=localStorage.getItem("language");u&&r.changeLanguage(u);const f=p=>{p.target.closest(".language-selector")||a()};return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[r]);const a=()=>{d(!0),setTimeout(()=>{t(!1),d(!1)},150)},s=u=>{u.stopPropagation(),e?a():t(!0)},l=u=>{r.changeLanguage(u),localStorage.setItem("language",u),a(),eo(u)},c=()=>{switch(r.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return o.jsxs(to,{className:"language-selector",children:[o.jsx(no,{onClick:s,"aria-label":"Select language",children:o.jsx(ro,{children:o.jsx(Mn,{countryCode:c(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&o.jsxs(oo,{className:n?"closing":"",children:[o.jsx(io,{}),o.jsxs(ao,{children:[o.jsxs(me,{onClick:()=>l("pt"),children:[o.jsx(xe,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(ge,{children:"Português"})]}),o.jsxs(me,{onClick:()=>l("en"),children:[o.jsx(xe,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(ge,{children:"English"})]}),o.jsxs(me,{onClick:()=>l("es"),children:[o.jsx(xe,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),o.jsx(ge,{children:"Español"})]}),o.jsxs(me,{onClick:()=>l("zh"),children:[o.jsx(xe,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),o.jsx(ge,{children:"中文"})]})]})]})]})}const lo=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},co=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},uo=()=>{let e=[25,50,75,90],t=[];const n=()=>{const d=window.pageYOffset||document.documentElement.scrollTop,r=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(d/r*100);e.forEach(s=>{a>=s&&!t.includes(s)&&(t.push(s),co(s))})};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}},Dn=m.createContext(),$e=()=>{const e=m.useContext(Dn);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},fo=({children:e})=>{const[t,n]=m.useState(()=>localStorage.getItem("theme")||"light");m.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),lo(t)},[t]);const a={theme:t,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")},setSpecificTheme:s=>{n(s)},isLight:t==="light",isDark:t==="dark"};return o.jsx(Dn.Provider,{value:a,children:e})};function ho(e){return A({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function po(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function mo(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function An(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function $n(e){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Ln(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Fn(e){return A({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Hn(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Bn(e){return A({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function go(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function xo(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function qn(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const vo=h.div`
  position: relative;
`,bo=h.button`
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
`,yo=h.div`
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
`,wo=h.div`
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
`,_o=h.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Co=h.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,jo=h.button`
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
`,ko=h.div`
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
`,To=h.span`
  margin-left: 4px;
  font-weight: 500;
`;function So(){const[e,t]=m.useState(!1),[n,d]=m.useState(!1),{theme:r,setSpecificTheme:a}=$e(),s=[{id:"light",name:"Light",color:"#f0efeb",icon:o.jsx(qn,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:o.jsx(Hn,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:o.jsx(Fn,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:o.jsx(An,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:o.jsx($n,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:o.jsx(Bn,{}),isLight:!1}],l=s.find(p=>p.id===r)||s[0];m.useEffect(()=>{const p=x=>{x.target.closest(".theme-selector")||c()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[]);const c=()=>{d(!0),setTimeout(()=>{t(!1),d(!1)},150)},u=p=>{p.stopPropagation(),e?c():t(!0)},f=p=>{a(p),c()};return o.jsxs(vo,{className:"theme-selector",children:[o.jsx(bo,{onClick:u,"aria-label":"Select theme",children:o.jsx(yo,{themeColor:l.color,isLight:l.isLight,children:l.icon})}),e&&o.jsxs(wo,{className:n?"closing":"",children:[o.jsx(_o,{}),o.jsx(Co,{children:s.map(p=>o.jsxs(jo,{onClick:()=>f(p.id),children:[o.jsx(ko,{className:"theme-preview",color:p.color,isLight:p.isLight,children:p.icon}),o.jsx(To,{children:p.name})]},p.id))})]})]})}const Io=h.header`
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
`,Ro=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Eo=h.div`
  display: flex;
  align-items: center;
`,Oo=h.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--PosterfyGreen);

  @media (max-width: 400px) {
    display: none;
  }
`,zo=h.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,Po=h.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,Mo=h.div`
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
`,Do=h.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;function Ao(){const[e,t]=m.useState(!1),[n,d]=m.useState(!0),[r,a]=m.useState(0),s=".space";return m.useEffect(()=>{const l=()=>{const c=window.scrollY;c<=10?(d(!0),t(!1)):(c<r?d(!0):d(!1),t(!0)),a(c)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[r]),o.jsxs(Io,{scrolled:e,visible:n,children:[o.jsxs(Ro,{children:[o.jsxs(Eo,{children:[o.jsx(Mo,{children:o.jsx(Ae,{fill:"#01b755",width:"40px",height:"44.05px"})}),o.jsxs(Oo,{children:["Posterfy",o.jsx(zo,{children:s})]})]}),o.jsxs(Do,{children:[o.jsx(So,{}),o.jsx(so,{})]})]}),o.jsx(Po,{scrolled:e})]})}function $o(e){return A({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function Lo(e){return A({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const Fo="/assets/Posterfy%20-%20KTT%20ZOO-CxBnzqPo.png",Ho="/assets/Posterfy%20-%20Starboy-D-DENvRF.png",Bo="/assets/Posterfy%20-%20CHROMAKOPIA-CM4CsO5a.png",qo="/assets/Posterfy%20-%20ZIMA-D5rEFrR_.png",Uo="/assets/Posterfy%20-%20Sobrevivendo%20no%20inferno-JOZ3yMud.png",Qo=[{id:1,coverImage:Fo},{id:2,coverImage:Ho},{id:3,coverImage:Bo},{id:4,coverImage:qo},{id:5,coverImage:Uo}],Vo=h.div`
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
`,No=h.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:n,hoveredIndex:d,isMobile:r}=e;if(r)return"scale(1)";let a="scale(0.95)";if(t)a="scale(1.08) translateY(-8px)";else if(d!==null){let s=0;switch(d){case 0:n>0&&(s=70);break;case 1:n>=2&&(s=70);break;case 2:s=0;break;case 3:n<=2&&(s=-70);break;case 4:n<4&&(s=-70);break}s!==0&&(a=`scale(0.95) translateX(${s}px)`)}return a}};
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
`,Go=h.div`
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
`,Wo=h.div`
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
`,Yo=h.button`
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
`,Zo=()=>{const[e,t]=m.useState(null),[n,d]=m.useState(!1),[r,a]=m.useState(!1),[s,l]=m.useState(null);m.useEffect(()=>{const f=()=>{d(window.innerWidth<=770),a(window.innerWidth>480&&window.innerWidth<=1200)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const c=f=>{l(f),document.body.style.overflow="hidden"},u=()=>{l(null),document.body.style.overflow="auto"};return o.jsxs(o.Fragment,{children:[o.jsx(Vo,{children:Qo.map((f,p)=>o.jsx(No,{index:p,isHovered:e===p,hoveredIndex:e,otherIsHovered:e!==null,isMobile:n,isTablet:r,onMouseEnter:()=>t(p),onMouseLeave:()=>t(null),onClick:()=>c(f.coverImage||"/placeholder.svg"),children:o.jsx("img",{src:f.coverImage||"/placeholder.svg",alt:`${f.artist} - ${f.title}`})},f.id))}),s&&o.jsx(Go,{onClick:u,children:o.jsxs(Wo,{onClick:f=>f.stopPropagation(),children:[o.jsx(Yo,{onClick:u,children:"×"}),o.jsx("img",{src:s,alt:"Album cover"})]})})]})},Ko=h.div`
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
`,Xo=()=>o.jsx(Ko,{children:o.jsx(Zo,{})}),Jo=h.div`
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
`,ei=h.div`
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
`,ti=h.h1`
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
`,Yt=h.p`
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
`,ni=h.div`
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
`,ri=`
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
`,oi=h($o)`
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
    ${ri}
`;function ii({showAnimation:e=!1}){const{t}=V(),{theme:n}=$e(),[d,r]=m.useState(!1);m.useEffect(()=>{if(e){const s=setTimeout(()=>{r(!0)},50);return()=>clearTimeout(s)}},[e]);const a=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsx(Jo,{children:o.jsxs(ei,{children:[o.jsx(ti,{visible:d,animationDelay:200,children:"Posterfy"}),o.jsx(Yt,{visible:d,animationDelay:400,children:t("paragraphHero1")}),o.jsx(Yt,{visible:d,animationDelay:600,children:t("paragraphHero2")}),o.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[o.jsx("h2",{children:"Free Album Poster Generator"}),o.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),o.jsx("h3",{children:"Features:"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Free album poster maker"}),o.jsx("li",{children:"Spotify integration"}),o.jsx("li",{children:"Custom poster design"}),o.jsx("li",{children:"High-quality downloads"}),o.jsx("li",{children:"Multiple format options"}),o.jsx("li",{children:"Professional templates"})]})]}),o.jsx(ni,{visible:d,animationDelay:800,children:o.jsx(Ae,{fill:n==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),o.jsx(oi,{visible:d,animationDelay:1e3,onClick:a})]})}),o.jsx(Xo,{})]})}const ai=h.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-inline: auto;
`,si=h.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function ne({text:e,type:t}){return o.jsx(o.Fragment,{children:t==1?o.jsx(ai,{children:e}):o.jsx(si,{children:e})})}const li=h.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,ci=h.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,di=h.p`
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
`;function ht({title:e,paragraph:t}){return o.jsxs(li,{children:[o.jsx(Zt,{children:o.jsx(ci,{children:e})}),o.jsx(Zt,{children:o.jsx(di,{children:t})})]})}function ui(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function fi(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const hi=h.div`
    width: 100%;
`,pi=h.div`
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
`,mi=h(xo)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,gi=h(fi)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,xi=h.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,vi=h.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function bi({onSearch:e,value:t=""}){const{t:n}=V(),[d,r]=m.useState(t);m.useEffect(()=>{r(t)},[t]);const a=c=>{c.key==="Enter"&&(e(d),d.trim()&&Wt(d.trim()))},s=c=>{r(c.target.value)},l=()=>{e(d),d.trim()&&Wt(d.trim())};return o.jsx(hi,{children:o.jsxs(pi,{role:"search","aria-label":"Album search for poster creation",children:[o.jsx(mi,{"aria-hidden":"true"}),o.jsx(xi,{}),o.jsx(vi,{placeholder:n("SearchPlaceholder"),value:d,onChange:s,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),o.jsx(gi,{onClick:l,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const yi=Y`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,wi=Y`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,_i=h.div`
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
`,Ci=h.div`
    animation: ${e=>e.isExiting?wi:yi} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function ji({isVisible:e}){const{theme:t}=$e(),[n,d]=m.useState(!1),[r,a]=m.useState(!1);return m.useEffect(()=>{!e&&!n&&(d(!0),setTimeout(()=>{a(!0)},800))},[e,n]),o.jsx(_i,{isVisible:e,fadeOutContainer:r,children:o.jsx(Ci,{isExiting:n,children:o.jsx(Ae,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"118.23px"})})})}const ki=Y`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Ti=Y`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,pt=Y`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Si=Y`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,Ii=h.div`
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
`,Ri=h.div`
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
`,Ei=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${pt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,Oi=h.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${ki} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${Ti} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,zi=h.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,Pi=h.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,Mi=h.div`
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
    animation: ${Si} 6s linear infinite;
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
`,Di=h.div`
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
`,Ai=h.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${pt} 0.5s ease-out;
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
`;const $i=h.div`
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
`,Li=h.button`
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
`,Fi=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,Hi=h.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,Bi=h.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${pt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,qi=h.a`
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
`;function Ui(){const{t:e}=V(),{theme:t,setSpecificTheme:n}=$e(),d=s=>{n(s)},r=[{id:"light",name:"Light",color:"#f0efeb",icon:o.jsx(qn,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:o.jsx(Hn,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:o.jsx(Fn,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:o.jsx(An,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:o.jsx($n,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:o.jsx(Bn,{}),isLight:!1}],a=new Date().getFullYear();return o.jsxs(Ii,{children:[o.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:o.jsxs("footer",{children:[o.jsx("h4",{children:"Album Poster Generator Links"}),o.jsxs("nav",{children:[o.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),o.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),o.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),o.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),o.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),o.jsxs(Ri,{children:[o.jsxs(Ei,{children:[o.jsxs(Oi,{children:[o.jsx(Pi,{className:"icon-shadow"}),o.jsx(zi,{className:"icon-main",children:o.jsx(Ae,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),o.jsx(Mi,{children:o.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",o.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),o.jsxs(Di,{children:[o.jsx(Ln,{})," © ",a," Posterfy. ",e("AllRights","All rights reserved.")]})]}),o.jsx(Ai,{children:o.jsx($i,{children:r.map(s=>o.jsxs(Fi,{children:[o.jsx(Li,{color:s.color,active:t===s.id,themeId:s.id,onClick:()=>d(s.id),"aria-label":`${e("SwitchTo","Switch to")} ${s.name} ${e("Theme").toLowerCase()}`,children:s.icon},s.id),o.jsx(Hi,{active:t===s.id,children:s.name})]},s.id))})}),o.jsx(Bi,{children:o.jsxs(qi,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[o.jsx(ho,{})," ",e("ViewGitHub","GitHub")]})})]})]})}const Qi=h.div`
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

`,Vi=h.img`
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
`,Ni=h.h3`
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
`,Gi=h.p`
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
`,Wi=h.div`
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
`;function Yi({title:e,artist:t,cover:n,id:d,onClick:r,animationDelay:a=0}){const[s,l]=m.useState(!1);return m.useEffect(()=>{const c=setTimeout(()=>{l(!0)},a);return()=>clearTimeout(c)},[a]),o.jsxs(Qi,{onClick:()=>r(d),visible:s,children:[o.jsx(Vi,{src:n}),o.jsxs(Wi,{children:[o.jsx(Ni,{children:e}),o.jsx(Gi,{children:t})]})]})}function Un(e){return A({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const Zi=h.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,Ki=h.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,Xi=h.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,Ji=h(Un)`
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
`;function Qn(){const{t:e}=V();return o.jsxs(Zi,{children:[o.jsx(Ji,{}),o.jsx(Ki,{children:e("Loading")}),o.jsx(Xi,{children:e("LoadingText")})]})}const ea=h.div`
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
`;function Kt({query:e,onclick:t}){const[n,d]=m.useState([]),[r,a]=m.useState("");return m.useEffect(()=>{(async()=>{const f=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();a(f.access_token)})()},[]),m.useEffect(()=>{(async()=>{if(r)try{let l;if(e?l=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album`,{headers:{Authorization:`Bearer ${r}`}}):l=await fetch("https://api.spotify.com/v1/browse/new-releases?offset=0&limit=14&locale=en-US",{headers:{Authorization:`Bearer ${r}`}}),!l.ok){const f=await l.text();throw new Error(`Erro na API: ${f}`)}const c=await l.json(),u=c.albums.items.filter(f=>f!=null);d(u.map(f=>{var p,x;return{id:f.id,title:f.name,artist:(p=f.artists)==null?void 0:p.map(_=>_.name).join(", "),cover:(x=f.images[0])==null?void 0:x.url}}))}catch(l){console.error(l)}})()},[e,r]),o.jsx(o.Fragment,{children:n.length===0?o.jsx(Qn,{}):o.jsx(ea,{children:n.map((s,l)=>o.jsx(Yi,{onClick:()=>t(s.id),cover:s.cover,title:s.title,artist:s.artist,id:s.id,animationDelay:l*100},s.id))})})}function ta(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function na(e){return A({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const ra=h.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,oa=h(ta)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,ia=h.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,aa=h.hr`
    opacity: 0.15;
    margin: 5px;
`,sa=h.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,la=h.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function se({q:e,a:t}){const[n,d]=m.useState(!1);function r(){d(!n)}return o.jsxs(o.Fragment,{children:[o.jsxs(ra,{onClick:r,children:[o.jsx(oa,{showA:n}),o.jsx(ia,{children:e})]}),o.jsx(aa,{}),o.jsx(sa,{showA:n,children:o.jsx(la,{showA:n,children:t})})]})}const ca=h.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,da=h.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function ua(){const{t:e}=V();return o.jsxs(ca,{id:"faq",children:[o.jsx(ne,{text:"FAQ",type:1}),o.jsxs(da,{children:[o.jsx(se,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),o.jsx(se,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),o.jsx(se,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),o.jsx(se,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),o.jsx(se,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const fa=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ha=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,pa=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function K({title:e,value:t,onChange:n}){return o.jsxs(fa,{children:[o.jsx(ha,{children:e}),o.jsx(pa,{placeholder:e,value:t,onChange:n})]})}const ma=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ga=h.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,xa=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Xt({title:e,value:t,onChangeTitle:n,onChangeDate:d}){return o.jsxs(ma,{children:[o.jsx(ga,{placeholder:e,value:e,onChange:n}),o.jsx(xa,{placeholder:e,value:t,onChange:d})]})}const va=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ba=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,ya=h.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,wa=h.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,_a=h.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function le({title:e,value:t,onClick:n}){return o.jsxs(va,{children:[o.jsx(ba,{children:e}),o.jsxs(ya,{onClick:n,children:[o.jsx(wa,{style:{backgroundColor:t}}),o.jsx(_a,{children:t})]})]})}function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e}).apply(this,arguments)}function Vn(e,t){if(e==null)return{};var n,d,r={},a=Object.keys(e);for(d=0;d<a.length;d++)t.indexOf(n=a[d])>=0||(r[n]=e[n]);return r}function at(e){var t=m.useRef(e),n=m.useRef(function(d){t.current&&t.current(d)});return t.current=e,n.current}var de=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},ce=function(e){return"touches"in e},st=function(e){return e&&e.ownerDocument.defaultView||self},Jt=function(e,t,n){var d=e.getBoundingClientRect(),r=ce(t)?function(a,s){for(var l=0;l<a.length;l++)if(a[l].identifier===s)return a[l];return a[0]}(t.touches,n):t;return{left:de((r.pageX-(d.left+st(e).pageXOffset))/d.width),top:de((r.pageY-(d.top+st(e).pageYOffset))/d.height)}},en=function(e){!ce(e)&&e.preventDefault()},Nn=H.memo(function(e){var t=e.onMove,n=e.onKey,d=Vn(e,["onMove","onKey"]),r=m.useRef(null),a=at(t),s=at(n),l=m.useRef(null),c=m.useRef(!1),u=m.useMemo(function(){var _=function(w){en(w),(ce(w)?w.touches.length>0:w.buttons>0)&&r.current?a(Jt(r.current,w,l.current)):g(!1)},b=function(){return g(!1)};function g(w){var j=c.current,k=st(r.current),v=w?k.addEventListener:k.removeEventListener;v(j?"touchmove":"mousemove",_),v(j?"touchend":"mouseup",b)}return[function(w){var j=w.nativeEvent,k=r.current;if(k&&(en(j),!function(C,S){return S&&!ce(C)}(j,c.current)&&k)){if(ce(j)){c.current=!0;var v=j.changedTouches||[];v.length&&(l.current=v[0].identifier)}k.focus(),a(Jt(k,j,l.current)),g(!0)}},function(w){var j=w.which||w.keyCode;j<37||j>40||(w.preventDefault(),s({left:j===39?.05:j===37?-.05:0,top:j===40?.05:j===38?-.05:0}))},g]},[s,a]),f=u[0],p=u[1],x=u[2];return m.useEffect(function(){return x},[x]),H.createElement("div",Le({},d,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:r,onKeyDown:p,tabIndex:0,role:"slider"}))}),mt=function(e){return e.filter(Boolean).join(" ")},Gn=function(e){var t=e.color,n=e.left,d=e.top,r=d===void 0?.5:d,a=mt(["react-colorful__pointer",e.className]);return H.createElement("div",{className:a,style:{top:100*r+"%",left:100*n+"%"}},H.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},F=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Ca=function(e){return Ia(lt(e))},lt=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?F(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?F(parseInt(e.substring(6,8),16)/255,2):1}},ja=function(e){return Sa(Ta(e))},ka=function(e){var t=e.s,n=e.v,d=e.a,r=(200-t)*n/100;return{h:F(e.h),s:F(r>0&&r<200?t*n/100/(r<=100?r:200-r)*100:0),l:F(r/2),a:F(d,2)}},ct=function(e){var t=ka(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},Ta=function(e){var t=e.h,n=e.s,d=e.v,r=e.a;t=t/360*6,n/=100,d/=100;var a=Math.floor(t),s=d*(1-n),l=d*(1-(t-a)*n),c=d*(1-(1-t+a)*n),u=a%6;return{r:F(255*[d,l,s,s,c,d][u]),g:F(255*[c,d,d,l,s,s][u]),b:F(255*[s,s,c,d,d,l][u]),a:F(r,2)}},ve=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Sa=function(e){var t=e.r,n=e.g,d=e.b,r=e.a,a=r<1?ve(F(255*r)):"";return"#"+ve(t)+ve(n)+ve(d)+a},Ia=function(e){var t=e.r,n=e.g,d=e.b,r=e.a,a=Math.max(t,n,d),s=a-Math.min(t,n,d),l=s?a===t?(n-d)/s:a===n?2+(d-t)/s:4+(t-n)/s:0;return{h:F(60*(l<0?l+6:l)),s:F(a?s/a*100:0),v:F(a/255*100),a:r}},Ra=H.memo(function(e){var t=e.hue,n=e.onChange,d=mt(["react-colorful__hue",e.className]);return H.createElement("div",{className:d},H.createElement(Nn,{onMove:function(r){n({h:360*r.left})},onKey:function(r){n({h:de(t+360*r.left,0,360)})},"aria-label":"Hue","aria-valuenow":F(t),"aria-valuemax":"360","aria-valuemin":"0"},H.createElement(Gn,{className:"react-colorful__hue-pointer",left:t/360,color:ct({h:t,s:100,v:100,a:1})})))}),Ea=H.memo(function(e){var t=e.hsva,n=e.onChange,d={backgroundColor:ct({h:t.h,s:100,v:100,a:1})};return H.createElement("div",{className:"react-colorful__saturation",style:d},H.createElement(Nn,{onMove:function(r){n({s:100*r.left,v:100-100*r.top})},onKey:function(r){n({s:de(t.s+100*r.left,0,100),v:de(t.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+F(t.s)+"%, Brightness "+F(t.v)+"%"},H.createElement(Gn,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ct(t)})))}),Wn=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},Oa=function(e,t){return e.toLowerCase()===t.toLowerCase()||Wn(lt(e),lt(t))};function za(e,t,n){var d=at(n),r=m.useState(function(){return e.toHsva(t)}),a=r[0],s=r[1],l=m.useRef({color:t,hsva:a});m.useEffect(function(){if(!e.equal(t,l.current.color)){var u=e.toHsva(t);l.current={hsva:u,color:t},s(u)}},[t,e]),m.useEffect(function(){var u;Wn(a,l.current.hsva)||e.equal(u=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:u},d(u))},[a,e,d]);var c=m.useCallback(function(u){s(function(f){return Object.assign({},f,u)})},[]);return[a,c]}var Pa=typeof window<"u"?m.useLayoutEffect:m.useEffect,Ma=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},tn=new Map,Da=function(e){Pa(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!tn.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,tn.set(t,n);var d=Ma();d&&n.setAttribute("nonce",d),t.head.appendChild(n)}},[])},Aa=function(e){var t=e.className,n=e.colorModel,d=e.color,r=d===void 0?n.defaultColor:d,a=e.onChange,s=Vn(e,["className","colorModel","color","onChange"]),l=m.useRef(null);Da(l);var c=za(n,r,a),u=c[0],f=c[1],p=mt(["react-colorful",t]);return H.createElement("div",Le({},s,{ref:l,className:p}),H.createElement(Ea,{hsva:u,onChange:f}),H.createElement(Ra,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},$a={defaultColor:"000",toHsva:Ca,fromHsva:function(e){return ja({h:e.h,s:e.s,v:e.v,a:1})},equal:Oa},La=function(e){return H.createElement(Aa,Le({},e,{colorModel:$a}))};function Fa(e){return A({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}const Ha=h.div`
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
`,Ba=h(La)`
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
`,Ze=h.div`
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
`,qa=h.div`
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
`,Ua=h.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Qa=h.input`
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
`,Va=h(mo)`
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
`,Na=h(go)`
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
`,Ga=h(Fa)`
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
`,Wa=h(po)`
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
`,Ya=h.img`
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
`;function Za({DefaultColor:e,image:t,predefinedColors:n,position:d,onDone:r,onClose:a}){const[s,l]=m.useState(e),[c,u]=m.useState(!1),[f,p]=m.useState(null),x=m.useRef(null),_=m.useRef(null);function b(){u(!c)}function g(v){l(v.target.value===""?"#":v.target.value)}function w(v){const C=x.current,T=_.current.getBoundingClientRect(),I=C.getContext("2d"),R=Math.floor(v.clientX-T.left),E=Math.floor(v.clientY-T.top),D=`#${[...I.getImageData(R,E,1,1).data].slice(0,3).map(z=>z.toString(16).padStart(2,"0")).join("")}`;l(D),b()}function j(v){const C=x.current,T=_.current.getBoundingClientRect(),I=Math.floor(v.clientX-T.left),R=Math.floor(v.clientY-T.top);if(C){const E=C.getContext("2d");try{const D=`#${[...E.getImageData(I,R,1,1).data].slice(0,3).map(z=>z.toString(16).padStart(2,"0")).join("")}`;p(D)}catch{p(null)}}}function k(){p(null)}return o.jsxs(Ha,{style:{position:"absolute",top:d.top,left:d.left,zIndex:1e3},children:[o.jsx("canvas",{ref:x,style:{display:"none"}}),c?o.jsx(Ya,{ref:_,crossOrigin:"anonymous",draggable:"false",src:t,onClick:w,onMouseMove:j,onMouseLeave:k,onLoad:()=>{const v=x.current,C=v.getContext("2d"),S=_.current;v.width=S.width,v.height=S.height,C.drawImage(S,0,0,S.width,S.height)},style:f?{borderColor:f}:{}}):o.jsx(Ba,{color:s,onChange:l}),o.jsx(Ze,{children:n.map(v=>o.jsx(qa,{style:{backgroundColor:v},onClick:()=>l(v)},v))}),o.jsxs(Ze,{children:[o.jsx(Ua,{children:"Hex"}),o.jsx(Qa,{value:s,onChange:g})]}),o.jsxs(Ze,{children:[c?o.jsx(Na,{onClick:b}):o.jsx(Va,{onClick:b}),o.jsx(Ga,{onClick:a}),o.jsx(Wa,{onClick:()=>{r(s),Jr(s)}})]})]})}const Ka=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Xa=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Ja=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,es=h.input`
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
`,ts=h.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function Ke({title:e,text:t,value:n,onChange:d}){const r=()=>d(!n);return o.jsxs(Ka,{children:[o.jsx(Xa,{children:e}),o.jsxs(Ja,{onClick:r,children:[o.jsx(es,{checked:n,readOnly:!0,type:"checkbox"}),o.jsx(ts,{active:n,children:t})]})]})}function ns(e){return A({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function rs(e){return A({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const os=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,is=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,as=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,ss=h.input`
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
`,ls=h.p`
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
`,cs=h(ns)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function ds({title:e,text:t,onChange:n}){const d=m.useRef(),r=()=>{d.current.click()},a=s=>{const l=s.target.files[0];t=l.name,l&&n(l)};return o.jsxs(os,{onClick:r,children:[o.jsx(is,{children:e}),o.jsxs(as,{children:[o.jsx(cs,{}),o.jsx(ss,{ref:d,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:a}),o.jsx(ls,{active:!0,children:t})]})]})}const us=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,fs=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,hs=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,ps=h.input`
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
`,ms=h.p`
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
`,gs=h(rs)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function xs({title:e,text:t,onChange:n}){const d=m.useRef(),r=()=>{d.current.click()},a=s=>{const l=s.target.files[0];t=l.name,l&&n(l)};return o.jsxs(us,{onClick:r,children:[o.jsx(fs,{children:e}),o.jsxs(hs,{children:[o.jsx(gs,{}),o.jsx(ps,{ref:d,type:"file",accept:".ttf,.otf",onChange:a}),o.jsx(ms,{active:!0,children:t})]})]})}var Q={};/*! *****************************************************************************
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
***************************************************************************** */var dt=function(e,t){return dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,d){n.__proto__=d}||function(n,d){for(var r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r])},dt(e,t)};function vs(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");dt(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ut=function(){return ut=Object.assign||function(t){for(var n,d=1,r=arguments.length;d<r;d++){n=arguments[d];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ut.apply(this,arguments)};function bs(e,t){var n={};for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&t.indexOf(d)<0&&(n[d]=e[d]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,d=Object.getOwnPropertySymbols(e);r<d.length;r++)t.indexOf(d[r])<0&&Object.prototype.propertyIsEnumerable.call(e,d[r])&&(n[d[r]]=e[d[r]]);return n}function ys(e,t,n,d){var r=arguments.length,a=r<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,n):d,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,n,d);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}function ws(e,t){return function(n,d){t(n,d,e)}}function _s(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function Cs(e,t,n,d){function r(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function l(f){try{u(d.next(f))}catch(p){s(p)}}function c(f){try{u(d.throw(f))}catch(p){s(p)}}function u(f){f.done?a(f.value):r(f.value).then(l,c)}u((d=d.apply(e,t||[])).next())})}function js(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},d,r,a,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(u){return function(f){return c([u,f])}}function c(u){if(d)throw new TypeError("Generator is already executing.");for(;n;)try{if(d=1,r&&(a=u[0]&2?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,r=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],r=0}finally{d=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var gt=Object.create?function(e,t,n,d){d===void 0&&(d=n),Object.defineProperty(e,d,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,d){d===void 0&&(d=n),e[d]=t[n]};function ks(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&gt(t,e,n)}function ft(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],d=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&d>=e.length&&(e=void 0),{value:e&&e[d++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yn(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var d=n.call(e),r,a=[],s;try{for(;(t===void 0||t-- >0)&&!(r=d.next()).done;)a.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(n=d.return)&&n.call(d)}finally{if(s)throw s.error}}return a}function Ts(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Yn(arguments[t]));return e}function Ss(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var d=Array(e),r=0,t=0;t<n;t++)for(var a=arguments[t],s=0,l=a.length;s<l;s++,r++)d[r]=a[s];return d}function Is(e,t,n){if(n||arguments.length===2)for(var d=0,r=t.length,a;d<r;d++)(a||!(d in t))&&(a||(a=Array.prototype.slice.call(t,0,d)),a[d]=t[d]);return e.concat(a||t)}function ue(e){return this instanceof ue?(this.v=e,this):new ue(e)}function Rs(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var d=n.apply(e,t||[]),r,a=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(x){d[x]&&(r[x]=function(_){return new Promise(function(b,g){a.push([x,_,b,g])>1||l(x,_)})})}function l(x,_){try{c(d[x](_))}catch(b){p(a[0][3],b)}}function c(x){x.value instanceof ue?Promise.resolve(x.value.v).then(u,f):p(a[0][2],x)}function u(x){l("next",x)}function f(x){l("throw",x)}function p(x,_){x(_),a.shift(),a.length&&l(a[0][0],a[0][1])}}function Es(e){var t,n;return t={},d("next"),d("throw",function(r){throw r}),d("return"),t[Symbol.iterator]=function(){return this},t;function d(r,a){t[r]=e[r]?function(s){return(n=!n)?{value:ue(e[r](s)),done:r==="return"}:a?a(s):s}:a}}function Os(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof ft=="function"?ft(e):e[Symbol.iterator](),n={},d("next"),d("throw"),d("return"),n[Symbol.asyncIterator]=function(){return this},n);function d(a){n[a]=e[a]&&function(s){return new Promise(function(l,c){s=e[a](s),r(l,c,s.done,s.value)})}}function r(a,s,l,c){Promise.resolve(c).then(function(u){a({value:u,done:l})},s)}}function zs(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var Ps=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function Ms(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&gt(t,e,n);return Ps(t,e),t}function Ds(e){return e&&e.__esModule?e:{default:e}}function As(e,t,n,d){if(n==="a"&&!d)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!d:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?d:n==="a"?d.call(e):d?d.value:t.get(e)}function $s(e,t,n,d,r){if(d==="m")throw new TypeError("Private method is not writable");if(d==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return d==="a"?r.call(e,n):r?r.value=n:t.set(e,n),n}const Ls=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return ut},__asyncDelegator:Es,__asyncGenerator:Rs,__asyncValues:Os,__await:ue,__awaiter:Cs,__classPrivateFieldGet:As,__classPrivateFieldSet:$s,__createBinding:gt,__decorate:ys,__exportStar:ks,__extends:vs,__generator:js,__importDefault:Ds,__importStar:Ms,__makeTemplateObject:zs,__metadata:_s,__param:ws,__read:Yn,__rest:bs,__spread:Ts,__spreadArray:Is,__spreadArrays:Ss,__values:ft},Symbol.toStringTag,{value:"Module"})),Z=Ar(Ls);var be={},ye={},Xe={},we={},nn;function Fs(){if(nn)return we;nn=1,we.__esModule=!0;var e=m;function t(n,d){e.useEffect(function(){var r=!0,a=function(){return r},s=n(a);return function(){r=!1,s&&s()}},d)}return we.useCurrentEffect=t,we}var _e={},rn;function Hs(){if(rn)return _e;rn=1,_e.__esModule=!0;var e=m;function t(n,d){var r=!0,a=function(){return r};return e.useEffect(function(){return function(){r=!1}},d),e.useCallback(n(a),d)}return _e.useCurrentCallback=t,_e}var on;function Zn(){return on||(on=1,function(e){function t(n){for(var d in n)e.hasOwnProperty(d)||(e[d]=n[d])}e.__esModule=!0,t(Fs()),t(Hs())}(Xe)),Xe}var Je={},Ce={},an;function Kn(){if(an)return Ce;an=1,Object.defineProperty(Ce,"__esModule",{value:!0});var e={loading:!0,data:void 0,error:void 0};return Ce.default=e,Ce}var je={},sn;function Bs(){if(sn)return je;sn=1,Object.defineProperty(je,"__esModule",{value:!0});var e=Z,t=e.__importDefault(Kn());function n(d,r){var a={start:function(){return t.default},resolve:function(){return e.__assign(e.__assign({},d),{data:r.payload,loading:!1})},reject:function(){return e.__assign(e.__assign({},d),{error:r.payload,loading:!1})}};return a[r.type]()}return je.default=n,je}var ke={},et,ln;function qs(){return ln||(ln=1,et={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),et}var tt,cn;function Xn(){if(cn)return tt;cn=1;const e=qs(),t={};for(const r of Object.keys(e))t[e[r]]=r;const n={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};tt=n;for(const r of Object.keys(n)){if(!("channels"in n[r]))throw new Error("missing channels property: "+r);if(!("labels"in n[r]))throw new Error("missing channel labels property: "+r);if(n[r].labels.length!==n[r].channels)throw new Error("channel and label counts mismatch: "+r);const{channels:a,labels:s}=n[r];delete n[r].channels,delete n[r].labels,Object.defineProperty(n[r],"channels",{value:a}),Object.defineProperty(n[r],"labels",{value:s})}n.rgb.hsl=function(r){const a=r[0]/255,s=r[1]/255,l=r[2]/255,c=Math.min(a,s,l),u=Math.max(a,s,l),f=u-c;let p,x;u===c?p=0:a===u?p=(s-l)/f:s===u?p=2+(l-a)/f:l===u&&(p=4+(a-s)/f),p=Math.min(p*60,360),p<0&&(p+=360);const _=(c+u)/2;return u===c?x=0:_<=.5?x=f/(u+c):x=f/(2-u-c),[p,x*100,_*100]},n.rgb.hsv=function(r){let a,s,l,c,u;const f=r[0]/255,p=r[1]/255,x=r[2]/255,_=Math.max(f,p,x),b=_-Math.min(f,p,x),g=function(w){return(_-w)/6/b+1/2};return b===0?(c=0,u=0):(u=b/_,a=g(f),s=g(p),l=g(x),f===_?c=l-s:p===_?c=1/3+a-l:x===_&&(c=2/3+s-a),c<0?c+=1:c>1&&(c-=1)),[c*360,u*100,_*100]},n.rgb.hwb=function(r){const a=r[0],s=r[1];let l=r[2];const c=n.rgb.hsl(r)[0],u=1/255*Math.min(a,Math.min(s,l));return l=1-1/255*Math.max(a,Math.max(s,l)),[c,u*100,l*100]},n.rgb.cmyk=function(r){const a=r[0]/255,s=r[1]/255,l=r[2]/255,c=Math.min(1-a,1-s,1-l),u=(1-a-c)/(1-c)||0,f=(1-s-c)/(1-c)||0,p=(1-l-c)/(1-c)||0;return[u*100,f*100,p*100,c*100]};function d(r,a){return(r[0]-a[0])**2+(r[1]-a[1])**2+(r[2]-a[2])**2}return n.rgb.keyword=function(r){const a=t[r];if(a)return a;let s=1/0,l;for(const c of Object.keys(e)){const u=e[c],f=d(r,u);f<s&&(s=f,l=c)}return l},n.keyword.rgb=function(r){return e[r]},n.rgb.xyz=function(r){let a=r[0]/255,s=r[1]/255,l=r[2]/255;a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,l=l>.04045?((l+.055)/1.055)**2.4:l/12.92;const c=a*.4124+s*.3576+l*.1805,u=a*.2126+s*.7152+l*.0722,f=a*.0193+s*.1192+l*.9505;return[c*100,u*100,f*100]},n.rgb.lab=function(r){const a=n.rgb.xyz(r);let s=a[0],l=a[1],c=a[2];s/=95.047,l/=100,c/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,l=l>.008856?l**(1/3):7.787*l+16/116,c=c>.008856?c**(1/3):7.787*c+16/116;const u=116*l-16,f=500*(s-l),p=200*(l-c);return[u,f,p]},n.hsl.rgb=function(r){const a=r[0]/360,s=r[1]/100,l=r[2]/100;let c,u,f;if(s===0)return f=l*255,[f,f,f];l<.5?c=l*(1+s):c=l+s-l*s;const p=2*l-c,x=[0,0,0];for(let _=0;_<3;_++)u=a+1/3*-(_-1),u<0&&u++,u>1&&u--,6*u<1?f=p+(c-p)*6*u:2*u<1?f=c:3*u<2?f=p+(c-p)*(2/3-u)*6:f=p,x[_]=f*255;return x},n.hsl.hsv=function(r){const a=r[0];let s=r[1]/100,l=r[2]/100,c=s;const u=Math.max(l,.01);l*=2,s*=l<=1?l:2-l,c*=u<=1?u:2-u;const f=(l+s)/2,p=l===0?2*c/(u+c):2*s/(l+s);return[a,p*100,f*100]},n.hsv.rgb=function(r){const a=r[0]/60,s=r[1]/100;let l=r[2]/100;const c=Math.floor(a)%6,u=a-Math.floor(a),f=255*l*(1-s),p=255*l*(1-s*u),x=255*l*(1-s*(1-u));switch(l*=255,c){case 0:return[l,x,f];case 1:return[p,l,f];case 2:return[f,l,x];case 3:return[f,p,l];case 4:return[x,f,l];case 5:return[l,f,p]}},n.hsv.hsl=function(r){const a=r[0],s=r[1]/100,l=r[2]/100,c=Math.max(l,.01);let u,f;f=(2-s)*l;const p=(2-s)*c;return u=s*c,u/=p<=1?p:2-p,u=u||0,f/=2,[a,u*100,f*100]},n.hwb.rgb=function(r){const a=r[0]/360;let s=r[1]/100,l=r[2]/100;const c=s+l;let u;c>1&&(s/=c,l/=c);const f=Math.floor(6*a),p=1-l;u=6*a-f,f&1&&(u=1-u);const x=s+u*(p-s);let _,b,g;switch(f){default:case 6:case 0:_=p,b=x,g=s;break;case 1:_=x,b=p,g=s;break;case 2:_=s,b=p,g=x;break;case 3:_=s,b=x,g=p;break;case 4:_=x,b=s,g=p;break;case 5:_=p,b=s,g=x;break}return[_*255,b*255,g*255]},n.cmyk.rgb=function(r){const a=r[0]/100,s=r[1]/100,l=r[2]/100,c=r[3]/100,u=1-Math.min(1,a*(1-c)+c),f=1-Math.min(1,s*(1-c)+c),p=1-Math.min(1,l*(1-c)+c);return[u*255,f*255,p*255]},n.xyz.rgb=function(r){const a=r[0]/100,s=r[1]/100,l=r[2]/100;let c,u,f;return c=a*3.2406+s*-1.5372+l*-.4986,u=a*-.9689+s*1.8758+l*.0415,f=a*.0557+s*-.204+l*1.057,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,f=f>.0031308?1.055*f**(1/2.4)-.055:f*12.92,c=Math.min(Math.max(0,c),1),u=Math.min(Math.max(0,u),1),f=Math.min(Math.max(0,f),1),[c*255,u*255,f*255]},n.xyz.lab=function(r){let a=r[0],s=r[1],l=r[2];a/=95.047,s/=100,l/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const c=116*s-16,u=500*(a-s),f=200*(s-l);return[c,u,f]},n.lab.xyz=function(r){const a=r[0],s=r[1],l=r[2];let c,u,f;u=(a+16)/116,c=s/500+u,f=u-l/200;const p=u**3,x=c**3,_=f**3;return u=p>.008856?p:(u-16/116)/7.787,c=x>.008856?x:(c-16/116)/7.787,f=_>.008856?_:(f-16/116)/7.787,c*=95.047,u*=100,f*=108.883,[c,u,f]},n.lab.lch=function(r){const a=r[0],s=r[1],l=r[2];let c;c=Math.atan2(l,s)*360/2/Math.PI,c<0&&(c+=360);const f=Math.sqrt(s*s+l*l);return[a,f,c]},n.lch.lab=function(r){const a=r[0],s=r[1],c=r[2]/360*2*Math.PI,u=s*Math.cos(c),f=s*Math.sin(c);return[a,u,f]},n.rgb.ansi16=function(r,a=null){const[s,l,c]=r;let u=a===null?n.rgb.hsv(r)[2]:a;if(u=Math.round(u/50),u===0)return 30;let f=30+(Math.round(c/255)<<2|Math.round(l/255)<<1|Math.round(s/255));return u===2&&(f+=60),f},n.hsv.ansi16=function(r){return n.rgb.ansi16(n.hsv.rgb(r),r[2])},n.rgb.ansi256=function(r){const a=r[0],s=r[1],l=r[2];return a===s&&s===l?a<8?16:a>248?231:Math.round((a-8)/247*24)+232:16+36*Math.round(a/255*5)+6*Math.round(s/255*5)+Math.round(l/255*5)},n.ansi16.rgb=function(r){let a=r%10;if(a===0||a===7)return r>50&&(a+=3.5),a=a/10.5*255,[a,a,a];const s=(~~(r>50)+1)*.5,l=(a&1)*s*255,c=(a>>1&1)*s*255,u=(a>>2&1)*s*255;return[l,c,u]},n.ansi256.rgb=function(r){if(r>=232){const u=(r-232)*10+8;return[u,u,u]}r-=16;let a;const s=Math.floor(r/36)/5*255,l=Math.floor((a=r%36)/6)/5*255,c=a%6/5*255;return[s,l,c]},n.rgb.hex=function(r){const s=(((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255)).toString(16).toUpperCase();return"000000".substring(s.length)+s},n.hex.rgb=function(r){const a=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!a)return[0,0,0];let s=a[0];a[0].length===3&&(s=s.split("").map(p=>p+p).join(""));const l=parseInt(s,16),c=l>>16&255,u=l>>8&255,f=l&255;return[c,u,f]},n.rgb.hcg=function(r){const a=r[0]/255,s=r[1]/255,l=r[2]/255,c=Math.max(Math.max(a,s),l),u=Math.min(Math.min(a,s),l),f=c-u;let p,x;return f<1?p=u/(1-f):p=0,f<=0?x=0:c===a?x=(s-l)/f%6:c===s?x=2+(l-a)/f:x=4+(a-s)/f,x/=6,x%=1,[x*360,f*100,p*100]},n.hsl.hcg=function(r){const a=r[1]/100,s=r[2]/100,l=s<.5?2*a*s:2*a*(1-s);let c=0;return l<1&&(c=(s-.5*l)/(1-l)),[r[0],l*100,c*100]},n.hsv.hcg=function(r){const a=r[1]/100,s=r[2]/100,l=a*s;let c=0;return l<1&&(c=(s-l)/(1-l)),[r[0],l*100,c*100]},n.hcg.rgb=function(r){const a=r[0]/360,s=r[1]/100,l=r[2]/100;if(s===0)return[l*255,l*255,l*255];const c=[0,0,0],u=a%1*6,f=u%1,p=1-f;let x=0;switch(Math.floor(u)){case 0:c[0]=1,c[1]=f,c[2]=0;break;case 1:c[0]=p,c[1]=1,c[2]=0;break;case 2:c[0]=0,c[1]=1,c[2]=f;break;case 3:c[0]=0,c[1]=p,c[2]=1;break;case 4:c[0]=f,c[1]=0,c[2]=1;break;default:c[0]=1,c[1]=0,c[2]=p}return x=(1-s)*l,[(s*c[0]+x)*255,(s*c[1]+x)*255,(s*c[2]+x)*255]},n.hcg.hsv=function(r){const a=r[1]/100,s=r[2]/100,l=a+s*(1-a);let c=0;return l>0&&(c=a/l),[r[0],c*100,l*100]},n.hcg.hsl=function(r){const a=r[1]/100,l=r[2]/100*(1-a)+.5*a;let c=0;return l>0&&l<.5?c=a/(2*l):l>=.5&&l<1&&(c=a/(2*(1-l))),[r[0],c*100,l*100]},n.hcg.hwb=function(r){const a=r[1]/100,s=r[2]/100,l=a+s*(1-a);return[r[0],(l-a)*100,(1-l)*100]},n.hwb.hcg=function(r){const a=r[1]/100,l=1-r[2]/100,c=l-a;let u=0;return c<1&&(u=(l-c)/(1-c)),[r[0],c*100,u*100]},n.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},n.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},n.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},n.gray.hsl=function(r){return[0,0,r[0]]},n.gray.hsv=n.gray.hsl,n.gray.hwb=function(r){return[0,100,r[0]]},n.gray.cmyk=function(r){return[0,0,0,r[0]]},n.gray.lab=function(r){return[r[0],0,0]},n.gray.hex=function(r){const a=Math.round(r[0]/100*255)&255,l=((a<<16)+(a<<8)+a).toString(16).toUpperCase();return"000000".substring(l.length)+l},n.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]},tt}var nt,dn;function Us(){if(dn)return nt;dn=1;const e=Xn();function t(){const a={},s=Object.keys(e);for(let l=s.length,c=0;c<l;c++)a[s[c]]={distance:-1,parent:null};return a}function n(a){const s=t(),l=[a];for(s[a].distance=0;l.length;){const c=l.pop(),u=Object.keys(e[c]);for(let f=u.length,p=0;p<f;p++){const x=u[p],_=s[x];_.distance===-1&&(_.distance=s[c].distance+1,_.parent=c,l.unshift(x))}}return s}function d(a,s){return function(l){return s(a(l))}}function r(a,s){const l=[s[a].parent,a];let c=e[s[a].parent][a],u=s[a].parent;for(;s[u].parent;)l.unshift(s[u].parent),c=d(e[s[u].parent][u],c),u=s[u].parent;return c.conversion=l,c}return nt=function(a){const s=n(a),l={},c=Object.keys(s);for(let u=c.length,f=0;f<u;f++){const p=c[f];s[p].parent!==null&&(l[p]=r(p,s))}return l},nt}var rt,un;function Qs(){if(un)return rt;un=1;const e=Xn(),t=Us(),n={},d=Object.keys(e);function r(s){const l=function(...c){const u=c[0];return u==null?u:(u.length>1&&(c=u),s(c))};return"conversion"in s&&(l.conversion=s.conversion),l}function a(s){const l=function(...c){const u=c[0];if(u==null)return u;u.length>1&&(c=u);const f=s(c);if(typeof f=="object")for(let p=f.length,x=0;x<p;x++)f[x]=Math.round(f[x]);return f};return"conversion"in s&&(l.conversion=s.conversion),l}return d.forEach(s=>{n[s]={},Object.defineProperty(n[s],"channels",{value:e[s].channels}),Object.defineProperty(n[s],"labels",{value:e[s].labels});const l=t(s);Object.keys(l).forEach(u=>{const f=l[u];n[s][u]=a(f),n[s][u].raw=r(f)})}),rt=n,rt}var Te={},fn;function Jn(){if(fn)return Te;fn=1,Object.defineProperty(Te,"__esModule",{value:!0});function e(t,n,d){return"rgb("+t+", "+n+", "+d+")"}return Te.default=e,Te}var Se={},hn;function Vs(){if(hn)return Se;hn=1,Object.defineProperty(Se,"__esModule",{value:!0});function e(t){return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}return Se.default=e,Se}var Ie={},pn;function Ns(){if(pn)return Ie;pn=1,Object.defineProperty(Ie,"__esModule",{value:!0});function e(t){return"#"+t.toLowerCase()}return Ie.default=e,Ie}var mn;function Gs(){if(mn)return ke;mn=1,Object.defineProperty(ke,"__esModule",{value:!0});var e=Z,t=e.__importDefault(Qs()),n=e.__importDefault(Jn()),d=e.__importDefault(Vs()),r=e.__importDefault(Ns());function a(s,l){var c={rgbString:function(){return n.default.apply(void 0,s)},hex:function(){var u;return r.default((u=t.default.rgb).hex.apply(u,s))},rgbArray:function(){return s},hslString:function(){var u;return d.default((u=t.default.rgb).hsl.apply(u,s))},hslArray:function(){var u;return(u=t.default.rgb).hsl.apply(u,s)},keyword:function(){var u;return(u=t.default.rgb).keyword.apply(u,s)}};return c[l]()}return ke.default=a,ke}var Re={},ot={exports:{}},gn;function er(){return gn||(gn=1,function(e,t){(function(n,d){e.exports=d()})(it,function(){if(!n)var n={map:function(s,l){var c={};return l?s.map(function(u,f){return c.index=f,l.call(c,u)}):s.slice()},naturalOrder:function(s,l){return s<l?-1:s>l?1:0},sum:function(s,l){var c={};return s.reduce(l?function(u,f,p){return c.index=p,u+l.call(c,f)}:function(u,f){return u+f},0)},max:function(s,l){return Math.max.apply(null,l?n.map(s,l):s)}};var d=function(){var s=5,l=8-s,c=1e3;function u(b,g,w){return(b<<2*s)+(g<<s)+w}function f(b){var g=[],w=!1;function j(){g.sort(b),w=!0}return{push:function(k){g.push(k),w=!1},peek:function(k){return w||j(),k===void 0&&(k=g.length-1),g[k]},pop:function(){return w||j(),g.pop()},size:function(){return g.length},map:function(k){return g.map(k)},debug:function(){return w||j(),g}}}function p(b,g,w,j,k,v,C){this.r1=b,this.r2=g,this.g1=w,this.g2=j,this.b1=k,this.b2=v,this.histo=C}function x(){this.vboxes=new f(function(b,g){return n.naturalOrder(b.vbox.count()*b.vbox.volume(),g.vbox.count()*g.vbox.volume())})}function _(b,g){if(g.count()){var w=g.r2-g.r1+1,j=g.g2-g.g1+1,k=n.max([w,j,g.b2-g.b1+1]);if(g.count()==1)return[g.copy()];var v,C,S,T,I=0,R=[],E=[];if(k==w)for(v=g.r1;v<=g.r2;v++){for(T=0,C=g.g1;C<=g.g2;C++)for(S=g.b1;S<=g.b2;S++)T+=b[u(v,C,S)]||0;R[v]=I+=T}else if(k==j)for(v=g.g1;v<=g.g2;v++){for(T=0,C=g.r1;C<=g.r2;C++)for(S=g.b1;S<=g.b2;S++)T+=b[u(C,v,S)]||0;R[v]=I+=T}else for(v=g.b1;v<=g.b2;v++){for(T=0,C=g.r1;C<=g.r2;C++)for(S=g.g1;S<=g.g2;S++)T+=b[u(C,S,v)]||0;R[v]=I+=T}return R.forEach(function(O,D){E[D]=I-O}),function(O){var D,z,$,q,B,U=O+"1",N=O+"2",J=0;for(v=g[U];v<=g[N];v++)if(R[v]>I/2){for($=g.copy(),q=g.copy(),B=(D=v-g[U])<=(z=g[N]-v)?Math.min(g[N]-1,~~(v+z/2)):Math.max(g[U],~~(v-1-D/2));!R[B];)B++;for(J=E[B];!J&&R[B-1];)J=E[--B];return $[N]=B,q[U]=$[N]+1,[$,q]}}(k==w?"r":k==j?"g":"b")}}return p.prototype={volume:function(b){return this._volume&&!b||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(b){var g=this.histo;if(!this._count_set||b){var w,j,k,v=0;for(w=this.r1;w<=this.r2;w++)for(j=this.g1;j<=this.g2;j++)for(k=this.b1;k<=this.b2;k++)v+=g[u(w,j,k)]||0;this._count=v,this._count_set=!0}return this._count},copy:function(){return new p(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(b){var g=this.histo;if(!this._avg||b){var w,j,k,v,C=0,S=1<<8-s,T=0,I=0,R=0;for(j=this.r1;j<=this.r2;j++)for(k=this.g1;k<=this.g2;k++)for(v=this.b1;v<=this.b2;v++)C+=w=g[u(j,k,v)]||0,T+=w*(j+.5)*S,I+=w*(k+.5)*S,R+=w*(v+.5)*S;this._avg=C?[~~(T/C),~~(I/C),~~(R/C)]:[~~(S*(this.r1+this.r2+1)/2),~~(S*(this.g1+this.g2+1)/2),~~(S*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(b){var g=b[0]>>l;return gval=b[1]>>l,bval=b[2]>>l,g>=this.r1&&g<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},x.prototype={push:function(b){this.vboxes.push({vbox:b,color:b.avg()})},palette:function(){return this.vboxes.map(function(b){return b.color})},size:function(){return this.vboxes.size()},map:function(b){for(var g=this.vboxes,w=0;w<g.size();w++)if(g.peek(w).vbox.contains(b))return g.peek(w).color;return this.nearest(b)},nearest:function(b){for(var g,w,j,k=this.vboxes,v=0;v<k.size();v++)((w=Math.sqrt(Math.pow(b[0]-k.peek(v).color[0],2)+Math.pow(b[1]-k.peek(v).color[1],2)+Math.pow(b[2]-k.peek(v).color[2],2)))<g||g===void 0)&&(g=w,j=k.peek(v).color);return j},forcebw:function(){var b=this.vboxes;b.sort(function(k,v){return n.naturalOrder(n.sum(k.color),n.sum(v.color))});var g=b[0].color;g[0]<5&&g[1]<5&&g[2]<5&&(b[0].color=[0,0,0]);var w=b.length-1,j=b[w].color;j[0]>251&&j[1]>251&&j[2]>251&&(b[w].color=[255,255,255])}},{quantize:function(b,g){if(!b.length||g<2||g>256)return!1;var w=function(T){var I,R=new Array(1<<3*s);return T.forEach(function(E){I=u(E[0]>>l,E[1]>>l,E[2]>>l),R[I]=(R[I]||0)+1}),R}(b);w.forEach(function(){});var j=function(T,I){var R,E,O,D=1e6,z=0,$=1e6,q=0,B=1e6,U=0;return T.forEach(function(N){(R=N[0]>>l)<D?D=R:R>z&&(z=R),(E=N[1]>>l)<$?$=E:E>q&&(q=E),(O=N[2]>>l)<B?B=O:O>U&&(U=O)}),new p(D,z,$,q,B,U,I)}(b,w),k=new f(function(T,I){return n.naturalOrder(T.count(),I.count())});function v(T,I){for(var R,E=T.size(),O=0;O<c;){if(E>=I||O++>c)return;if((R=T.pop()).count()){var D=_(w,R),z=D[0],$=D[1];if(!z)return;T.push(z),$&&(T.push($),E++)}else T.push(R),O++}}k.push(j),v(k,.75*g);for(var C=new f(function(T,I){return n.naturalOrder(T.count()*T.volume(),I.count()*I.volume())});k.size();)C.push(k.pop());v(C,g);for(var S=new x;C.size();)S.push(C.pop());return S}}}().quantize,r=function(s){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=s.naturalWidth,this.height=this.canvas.height=s.naturalHeight,this.context.drawImage(s,0,0,this.width,this.height)};r.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var a=function(){};return a.prototype.getColor=function(s,l){return l===void 0&&(l=10),this.getPalette(s,5,l)[0]},a.prototype.getPalette=function(s,l,c){var u=function(_){var b=_.colorCount,g=_.quality;if(b!==void 0&&Number.isInteger(b)){if(b===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");b=Math.max(b,2),b=Math.min(b,20)}else b=10;return(g===void 0||!Number.isInteger(g)||g<1)&&(g=10),{colorCount:b,quality:g}}({colorCount:l,quality:c}),f=new r(s),p=function(_,b,g){for(var w=_,j=[],k=0,v=void 0,C=void 0,S=void 0,T=void 0,I=void 0;k<b;k+=g)C=w[0+(v=4*k)],S=w[v+1],T=w[v+2],((I=w[v+3])===void 0||I>=125)&&(C>250&&S>250&&T>250||j.push([C,S,T]));return j}(f.getImageData().data,f.width*f.height,u.quality),x=d(p,u.colorCount);return x?x.palette():null},a.prototype.getColorFromUrl=function(s,l,c){var u=this,f=document.createElement("img");f.addEventListener("load",function(){var p=u.getPalette(f,5,c);l(p[0],s)}),f.src=s},a.prototype.getImageData=function(s,l){var c=new XMLHttpRequest;c.open("GET",s,!0),c.responseType="arraybuffer",c.onload=function(){if(this.status==200){var u=new Uint8Array(this.response);i=u.length;for(var f=new Array(i),p=0;p<u.length;p++)f[p]=String.fromCharCode(u[p]);var x=f.join(""),_=window.btoa(x);l("data:image/png;base64,"+_)}},c.send()},a.prototype.getColorAsync=function(s,l,c){var u=this;this.getImageData(s,function(f){var p=document.createElement("img");p.addEventListener("load",function(){var x=u.getPalette(p,5,c);l(x[0],this)}),p.src=f})},a})}(ot)),ot.exports}var xn;function tr(){if(xn)return Re;xn=1,Object.defineProperty(Re,"__esModule",{value:!0});var e=Z,t=e.__importDefault(er()),n=Fe();function d(r,a,s,l,c){return a===void 0&&(a=2),l===void 0&&(l=null),c===void 0&&(c=10),e.__awaiter(this,void 0,void 0,function(){var u,f,p;return e.__generator(this,function(x){switch(x.label){case 0:return[4,n.loadImage(r,l)];case 1:return u=x.sent(),f=new t.default,p=f.getPalette(u,a,c),[2,p.map(function(_){return n.formatRGB(_,s)})]}})})}return Re.default=d,Re}var Ee={},vn;function nr(){if(vn)return Ee;vn=1,Object.defineProperty(Ee,"__esModule",{value:!0});var e=Z,t=e.__importDefault(er()),n=Fe();function d(r,a,s,l){return s===void 0&&(s=null),l===void 0&&(l=10),e.__awaiter(this,void 0,void 0,function(){var c,u,f;return e.__generator(this,function(p){switch(p.label){case 0:return[4,n.loadImage(r,s)];case 1:return c=p.sent(),u=new t.default,f=u.getColor(c,l),[2,n.formatRGB(f,a)]}})})}return Ee.default=d,Ee}var Oe={},bn;function Ws(){if(bn)return Oe;bn=1,Object.defineProperty(Oe,"__esModule",{value:!0});function e(t,n){return n===void 0&&(n=null),new Promise(function(d,r){var a=new Image;a.addEventListener("load",function(){d(a)}),a.addEventListener("error",function(){r(new Error("Color Thief React | Failed to load image URL: "+t))}),a.crossOrigin=n,a.src=t})}return Oe.default=e,Oe}var yn;function Fe(){return yn||(yn=1,function(e){var t=it&&it.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadImage=e.getPredominantColorFromImgURL=e.rgbStringfy=e.getColorsPaletteFromImgUrl=e.formatRGB=e.reducer=e.initialReducerState=void 0;var n=Kn();Object.defineProperty(e,"initialReducerState",{enumerable:!0,get:function(){return t(n).default}});var d=Bs();Object.defineProperty(e,"reducer",{enumerable:!0,get:function(){return t(d).default}});var r=Gs();Object.defineProperty(e,"formatRGB",{enumerable:!0,get:function(){return t(r).default}});var a=tr();Object.defineProperty(e,"getColorsPaletteFromImgUrl",{enumerable:!0,get:function(){return t(a).default}});var s=Jn();Object.defineProperty(e,"rgbStringfy",{enumerable:!0,get:function(){return t(s).default}});var l=nr();Object.defineProperty(e,"getPredominantColorFromImgURL",{enumerable:!0,get:function(){return t(l).default}});var c=Ws();Object.defineProperty(e,"loadImage",{enumerable:!0,get:function(){return t(c).default}})}(Je)),Je}var wn;function rr(){if(wn)return ye;wn=1,Object.defineProperty(ye,"__esModule",{value:!0});var e=Z,t=e.__importStar(m),n=Zn(),d=Fe();function r(a,s,l){l===void 0&&(l={});var c=l.crossOrigin,u=c===void 0?null:c,f=l.quality,p=f===void 0?10:f,x=t.useReducer(d.reducer,d.initialReducerState),_=x[0],b=x[1];return n.useCurrentEffect(function(g){b({type:"start",payload:null}),d.getPredominantColorFromImgURL(a,s,u,p).then(function(w){g()&&b({type:"resolve",payload:w})}).catch(function(w){g()&&b({type:"reject",payload:w})})},[a]),_}return ye.default=r,ye}var _n;function Ys(){if(_n)return be;_n=1,Object.defineProperty(be,"__esModule",{value:!0});var e=Z,t=e.__importStar(m),n=e.__importDefault(rr());function d(r){var a=r.src,s=r.format,l=r.crossOrigin,c=l===void 0?void 0:l,u=r.quality,f=u===void 0?10:u,p=r.children,x=n.default(a,s,{crossOrigin:c,quality:f});return t.createElement(t.Fragment,null,p(x))}return be.default=d,be}var ze={},Pe={},Cn;function or(){if(Cn)return Pe;Cn=1,Object.defineProperty(Pe,"__esModule",{value:!0});var e=Z,t=e.__importStar(m),n=Zn(),d=Fe();function r(a,s,l,c){s===void 0&&(s=2),c===void 0&&(c={});var u=c.crossOrigin,f=u===void 0?null:u,p=c.quality,x=p===void 0?10:p,_=t.useReducer(d.reducer,d.initialReducerState),b=_[0],g=_[1];return n.useCurrentEffect(function(w){g({type:"start",payload:null}),d.getColorsPaletteFromImgUrl(a,s,l,f,x).then(function(j){w()&&g({type:"resolve",payload:j})}).catch(function(j){w()&&g({type:"reject",payload:j})})},[a]),b}return Pe.default=r,Pe}var jn;function Zs(){if(jn)return ze;jn=1,Object.defineProperty(ze,"__esModule",{value:!0});var e=Z,t=e.__importStar(m),n=e.__importDefault(or());function d(r){var a=r.src,s=r.colorCount,l=s===void 0?2:s,c=r.format,u=r.crossOrigin,f=u===void 0?void 0:u,p=r.quality,x=p===void 0?10:p,_=r.children,b=n.default(a,l,c,{crossOrigin:f,quality:x});return t.createElement(t.Fragment,null,_(b))}return ze.default=d,ze}Object.defineProperty(Q,"__esModule",{value:!0});Q.getPalette=Q.usePalette=ar=Q.Palette=Q.getColor=Q.Color=Q.useColor=void 0;var re=Z,ir=re.__importDefault(Ys());Q.Color=ir.default;var Ks=re.__importDefault(rr());Q.useColor=Ks.default;var Xs=re.__importDefault(tr());Q.getPalette=Xs.default;var Js=re.__importDefault(Zs()),ar=Q.Palette=Js.default,el=re.__importDefault(or());Q.usePalette=el.default;var tl=re.__importDefault(nr());Q.getColor=tl.default;Q.default=ir.default;const nl="/assets/waterMarkBlack-OUzafaTn.png",rl="/assets/waterMarkWhite-DfVw0Drc.png",ol=({onImageReady:e,posterData:t,generatePoster:n,onTitleSizeAdjust:d,customFont:r})=>{const a=m.useRef(null);return m.useEffect(()=>{(async()=>{if(!n)return;const l=a.current,c=l.getContext("2d"),u=2480,f=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0;const p=async v=>{const C=new Image;return C.crossOrigin="anonymous",C.src=v,new Promise(S=>{C.onload=()=>{if(c.drawImage(C,t.marginCover,t.marginCover,u-t.marginCover*2,u-t.marginCover*2),t.useFade){let T=c.createLinearGradient(0,0,0,3e3);const I=g(t.backgroundColor);T.addColorStop(.5,`rgba(${I.r}, ${I.g}, ${I.b}, 0)`),T.addColorStop(.8,t.backgroundColor),c.fillStyle=T,c.fillRect(0,0,l.width,2500)}S()}})},x=async()=>{const v=new Image;v.crossOrigin="anonymous";const C=g(t.backgroundColor),S=w(C);return v.src=S==="black"?nl:rl,new Promise(T=>{v.onload=()=>{c.globalAlpha="0.15",c.drawImage(v,u-70-500,50,500,134),c.globalAlpha="1",T()}})},_=async()=>{let v=t.titleSize?parseInt(t.titleSize):230;const C=r||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){c.font=`bold ${v}px ${C}`;let I=c.measureText(t.albumName).width;for(;I>2480-t.marginSide*2;)v-=1,c.font=`bold ${v}px ${C}`,I=c.measureText(t.albumName).width;d(v,!0)}else c.font=`bold ${v}px ${C}`;c.fillStyle=t.textColor,t.showTracklist?c.fillText(t.albumName,t.marginSide,2500+t.marginTop):c.fillText(t.albumName,t.marginSide,2790+t.marginTop);let S=t.artistsSize?parseInt(t.artistsSize):110;c.font=`bold ${S}px ${r||"Montserrat"}`,t.showTracklist?c.fillText(t.artistsName,t.marginSide,2500+t.marginTop+S*1.3):c.fillText(t.artistsName,t.marginSide,2820+t.marginTop+S),c.font=`bold 70px ${r||"Montserrat"}`,c.fillText(t.titleRelease,t.marginSide,3310);let T=c.measureText(t.titleRelease).width;c.fillText(t.titleRuntime,T+t.marginSide+100,3310),c.globalAlpha=.7,c.font=`bold 60px ${r||"Montserrat"}`,c.fillText(t.runtime,T+t.marginSide+100,3390),c.fillText(t.releaseDate,t.marginSide,3390),c.globalAlpha=1,c.fillStyle=t.color1,c.fillRect(2045-t.marginSide,3368,145,30),c.fillStyle=t.color2,c.fillRect(2190-t.marginSide,3368,145,30),c.fillStyle=t.color3,c.fillRect(2335-t.marginSide,3368,145,30)},b=async()=>{c.fillStyle=t.textColor;let v=t.marginSide+10,C=0,S=0;const T=t.tracksSize?parseInt(t.tracksSize):50;c.font=`bold ${T}px ${r||"Montserrat"}`;const I=T,R=parseInt(t.marginTop||0),E=parseInt(t.artistsSize)?2500+R+parseInt(t.artistsSize)*1.3+130:2500+R+110*1.2+130,O=500,D=u-t.marginSide*2,z=parseInt(t.marginSide),$=E+O-10-parseInt(t.marginTop);let q=E;t.tracklist.split(`
`).forEach(B=>{if(q+I*1.3>=$){if(q=E,v=C+I*2.5+S,v>=z+D)return;S=v-I*2.5,C=0}const U=c.measureText(`${B}`).width+t.marginSide;U>C&&(C=U),c.fillText(`${B}`,v,q),q+=I*1.3})},g=v=>{const C=parseInt(v.replace("#",""),16);return{r:C>>16&255,g:C>>8&255,b:C&255}},w=v=>{const C=T=>{const I=T/255;return I<=.03928?I/12.92:Math.pow((I+.055)/1.055,2.4)};return .2126*C(v.r)+.7152*C(v.g)+.0722*C(v.b)>.179?"black":"white"},j=async()=>{const v=g(t.backgroundColor),C=w(v),S=t.textColor,T=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${C}/640/spotify:album:${t.albumID}`;let R=await(await fetch(T)).text();C=="black"?R=R.replace(/fill="#000000"/g,`fill="${S}"`):R=R.replace(/fill="#ffffff"/g,`fill="${S}"`);const E=new Blob([R],{type:"image/svg+xml"}),O=URL.createObjectURL(E);return new Promise(D=>{const z=new Image;z.src=O,z.onload=function(){c.drawImage(z,2020-t.marginSide,3235,480,120);const $=l.toDataURL("image/png");e($),D()}})},k=async()=>{c.fillStyle=t.backgroundColor,c.fillRect(0,2480,u,f-2480)};c.clearRect(0,0,u,f),t.useUncompressed?await p(await t.uncompressedAlbumCover):await p(t.albumCover),await k(),await _(),t.showTracklist&&await b(),t.useWatermark&&await x(),await j()})()},[n,t,e]),o.jsx("canvas",{ref:a,width:2480,height:3508,style:{display:"none"}})},il=h.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function M({children:e,animationDelay:t=0,...n}){const[d,r]=m.useState(!1);return m.useEffect(()=>{const a=setTimeout(()=>{r(!0)},t);return()=>clearTimeout(a)},[t]),o.jsx(il,{visible:d,animationDelay:t,...n,children:e})}const al=h.div`
    width: 80%;
    margin-inline: auto;
`,sl=h.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,ll=h(ui)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,cl=h.h3`
    font-size: 1.3em;
    font-weight: bold;
`,dl=h.div`
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
`,ul=h.img`
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
`,fl=h.div`
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
`,hl=h(Un)`
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
`,pl=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,ml=h.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,kn=h.div`
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
`,gl=h.div`
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
`,xl=h.div`
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
`,vl=h.div`
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
`,Tn=h.button`
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
`,bl=h.textarea`
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
`,yl=h.div`
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
`,Sn=h.div`
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
`,In=h.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,wl=h(na)`
    font-size: 1.15em;
`,_l=h(Lo)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Vt`
                  animation: ${Y`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Vt`
                  animation: ${Y`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,Cl=h.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,jl=h.p`
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
`;function kl({albumID:e,handleClickBack:t}){const{t:n}=V(),d=m.useRef(null),[r,a]=m.useState(""),[s,l]=m.useState(""),[c,u]=m.useState("200"),[f,p]=m.useState("110"),[x,_]=m.useState("50"),[b,g]=m.useState(""),[w,j]=m.useState(160),[k,v]=m.useState(0),[C,S]=m.useState("#5900ff"),[T,I]=m.useState("#ff9100"),[R,E]=m.useState("#ff0000"),[O,D]=m.useState("#00ff40"),[z,$]=m.useState("#2600ff"),[q,B]=m.useState(!0),[U,N]=m.useState(!0),[J,vt]=m.useState(!1),[He,bt]=m.useState(""),[sr,yt]=m.useState(""),[lr,cr]=m.useState(""),[ee,dr]=m.useState(null),[Be,wt]=m.useState("information");m.useEffect(()=>{if(ee){const y=new FileReader;y.onload=async P=>{const L="CustomFont",X=new FontFace(L,P.target.result);try{const G=await X.load();document.fonts.add(G),cr(L)}catch(G){console.error("Erro ao carregar fonte:",G)}},y.readAsArrayBuffer(ee)}},[ee]);const[_t,qe]=m.useState(!1),[ur,fr]=m.useState("Original"),[fe,he]=m.useState(""),[Ct,jt]=m.useState(""),[kt,Tt]=m.useState(""),[St,It]=m.useState(""),[Rt,Et]=m.useState(""),[hr,Ot]=m.useState(!1),[zt,Pt]=m.useState(null),[te,pr]=m.useState(null),[Mt,Dt]=m.useState(!1),[At,mr]=m.useState(!1),gr=y=>{u(y.target.value),Dt(!0)},xr=(y,P)=>{P&&!At?(u(y),mr(!0)):Mt||u(y)},vr={albumCover:He,uncompressedAlbumCover:sr,useUncompressed:_t,albumName:r,artistsName:s,titleSize:c,artistsSize:f,tracksSize:x,marginTop:b,marginSide:w,marginCover:k,titleRelease:Ct,releaseDate:kt,titleRuntime:St,runtime:Rt,backgroundColor:C,textColor:T,useWatermark:q,useFade:U,showTracklist:J,tracklist:fe,color1:R,color2:O,color3:z,albumID:e,userAdjustedTitleSize:Mt,initialTitleSizeSet:At},[oe,br]=m.useState(null),[Ue,$t]=m.useState(!1),[yr,Qe]=m.useState(!1),[wr,_r]=m.useState(!1),[Cr,Lt]=m.useState(!1),[jr,Ve]=m.useState(!1);m.useEffect(()=>{if(Ue){Qe(!1);const y=setTimeout(()=>{Ve(!0)},100);return()=>clearTimeout(y)}else Ve(!1)},[Ue]);const kr=y=>{br(y),$t(!1),Lt(!1),Xr(r,s),setTimeout(()=>{Ve(!1),setTimeout(()=>{Qe(!0)},300)},100)},Ne=()=>{Dt(!1),Qe(!1),requestAnimationFrame(()=>{if(Lt(!0),$t(!0),d.current){const y=d.current.getBoundingClientRect(),P=y.top+window.scrollY,L=y.height,G=(window.innerHeight-L)/2;window.scrollTo({top:P-G,behavior:"smooth"})}})},Tr=y=>{bt(URL.createObjectURL(y)),qe(!1),yt(""),fr(y.name)},Ge=()=>{if(!oe)return;const y=document.createElement("a");y.href=oe,y.download=`Posterfy - ${r}.png`,y.click(),Kr(r,"poster",s)};function ie(y,P){const L=y.target.getBoundingClientRect();Pt({top:L.top+window.scrollY,left:L.left+window.scrollX}),pr(P),Ot(!0)}function Sr(){Ot(!1)}const Ir=()=>{const P=fe.split(`
`).map(L=>L.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());he(P.join(`
`))},Rr=()=>{const P=fe.split(`
`).map(L=>L.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());he(P.join(`
`))};async function Er(y,P="us"){var L;try{let X=`https://itunes.apple.com/search?term=${encodeURIComponent(y)}&country=${P}&entity=album&limit=1`,G=await fetch(X);if(!G.ok)throw new Error(`HTTP Error: ${G.status}`);let We=await G.json();if(!((L=We.results)!=null&&L.length))return console.warn("No album data found."),qe(!1),"";let W=We.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return W.length===2?`https://a5.mzstatic.com/us/r1000/0/${W[1].split("/").slice(0,-1).join("/")}`:""}catch(X){return console.error("Error fetching album cover:",X.message),""}}return m.useEffect(()=>{jt(n("EDITOR_ReleaseTitle")),It(n("EDITOR_RuntimeTitle"))},[n]),m.useEffect(()=>{e&&(async()=>{var P;try{const Ft=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,W=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Ft}`}})).json(),Ye=W.artists.map(ae=>ae.name).join(", ");a(W.name),l(Ye),bt((P=W.images[0])==null?void 0:P.url),Tt(W.release_date),yt(await Er(W.name+" "+Ye));const zr=W.tracks.items.reduce((ae,pe)=>ae+pe.duration_ms,0),Ht=Math.floor(zr/1e3),Bt=Math.floor(Ht/60),qt=Math.floor(Bt/60),Ut=Ht%60,Qt=Bt%60,Pr=qt>0?`${qt}h ${Qt}min ${Ut}s`:`${Qt}min ${Ut}s`;Et(Pr);const Mr=W.tracks.items.map((ae,pe)=>(pe==3&&vt(!0),`${pe+1}. ${ae.name}`));he(Mr.join(`
`)),_r(!0)}catch(L){console.error("Error trying to fetch album data:",L)}})()},[e]),m.useEffect(()=>{const y=P=>{P.ctrlKey&&P.key==="s"?(P.preventDefault(),Ne()):P.ctrlKey&&P.key==="d"&&(P.preventDefault(),Ge())};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[oe,r,Ge]),o.jsx(o.Fragment,{children:wr?o.jsxs(al,{children:[o.jsx(ar,{src:He,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:y})=>(m.useEffect(()=>{y&&y.length>0&&(S(y[0]),I(y[1]),E(y[2]),D(y[3]),$(y[4]),Ne())},[y]),null)}),o.jsxs(sl,{onClick:t,children:[o.jsx(ll,{}),o.jsx(cl,{children:n("GoBack")})]}),o.jsxs(dl,{children:[o.jsx(ol,{onImageReady:kr,posterData:vr,generatePoster:Ue,onTitleSizeAdjust:xr,customFont:lr}),o.jsxs(fl,{children:[oe?o.jsx(ul,{src:oe,ref:d,visible:yr}):o.jsx(Cl,{ref:d}),o.jsx(hl,{visible:jr})]}),o.jsxs(pl,{children:[o.jsx(M,{animationDelay:50,children:o.jsxs(ml,{children:[o.jsx(kn,{$active:Be==="information",onClick:()=>wt("information"),children:n("EDITOR_InformationTab")}),o.jsx(kn,{$active:Be==="tracklist",onClick:()=>wt("tracklist"),children:n("EDITOR_TracklistTab")})]})}),Be==="information"?o.jsxs(gl,{children:[o.jsx(M,{animationDelay:0,children:o.jsx(K,{title:n("EDITOR_AlbumName"),value:r,onChange:y=>a(y.target.value)})}),o.jsx(M,{animationDelay:50,children:o.jsx(K,{title:n("EDITOR_ArtistName"),value:s,onChange:y=>l(y.target.value)})}),o.jsx(M,{animationDelay:100,children:o.jsx(K,{title:n("EDITOR_TitleSize"),value:c,onChange:gr})}),o.jsx(M,{animationDelay:150,children:o.jsx(K,{title:n("EDITOR_ArtistSize"),value:f,onChange:y=>p(y.target.value)})}),o.jsx(M,{animationDelay:200,children:o.jsx(K,{title:n("EDITOR_TracksSize"),value:x,onChange:y=>_(y.target.value)})}),o.jsx(M,{animationDelay:250,children:o.jsx(K,{title:n("EDITOR_MarginTop"),value:b,onChange:y=>g(y.target.value)})}),o.jsx(M,{animationDelay:300,children:o.jsx(K,{title:n("EDITOR_MarginSide"),value:w,onChange:y=>j(y.target.value)})}),o.jsx(M,{animationDelay:350,children:o.jsx(K,{title:n("EDITOR_MarginCover"),value:k,onChange:y=>v(y.target.value)})}),o.jsx(M,{animationDelay:400,children:o.jsx(Xt,{title:Ct,value:kt,onChangeTitle:y=>jt(y.target.value),onChangeDate:y=>Tt(y.target.value)})}),o.jsx(M,{animationDelay:450,children:o.jsx(Xt,{title:St,value:Rt,onChangeTitle:y=>It(y.target.value),onChangeDate:y=>Et(y.target.value)})}),o.jsx(M,{animationDelay:500,children:o.jsx(le,{title:n("EDITOR_BackgroundColor"),value:C,onClick:y=>ie(y,"backgroundColor")})}),o.jsx(M,{animationDelay:550,children:o.jsx(le,{title:n("EDITOR_TextColor"),value:T,onClick:y=>ie(y,"textColor")})}),o.jsx(M,{animationDelay:600,children:o.jsx(le,{title:`${n("EDITOR_Color")} 1`,value:R,onClick:y=>ie(y,"color1")})}),o.jsx(M,{animationDelay:650,children:o.jsx(le,{title:`${n("EDITOR_Color")} 2`,value:O,onClick:y=>ie(y,"color2")})}),o.jsx(M,{animationDelay:700,children:o.jsx(le,{title:`${n("EDITOR_Color")} 3`,value:z,onClick:y=>ie(y,"color3")})}),o.jsx(M,{animationDelay:800,children:o.jsx(Ke,{title:n("EDITOR_Fade"),value:U,onChange:y=>N(y),text:n("EDITOR_FadeText")})}),o.jsx(M,{animationDelay:850,children:o.jsx(Ke,{title:n("EDITOR_Uncompressed"),value:_t,onChange:y=>qe(y),text:n("EDITOR_UncompressedText")})}),o.jsx(M,{animationDelay:900,children:o.jsx(Ke,{title:n("EDITOR_Tracklist"),value:J,onChange:y=>vt(y),text:n("EDITOR_TracklistText")})}),o.jsx(M,{animationDelay:950,children:o.jsx(ds,{title:n("EDITOR_Cover"),onChange:Tr,text:ur})}),o.jsx(M,{animationDelay:1e3,children:o.jsx(xs,{title:n("EDITOR_Font"),text:(ee==null?void 0:ee.name)||n("EDITOR_DefaultFont"),onChange:dr})}),hr&&zt&&te&&o.jsx(Za,{DefaultColor:te==="backgroundColor"?C:te==="textColor"?T:te==="color1"?R:te==="color2"?O:z,image:He,predefinedColors:[R,O,z,C,T],onDone:y=>{switch(te){case"backgroundColor":S(y);break;case"textColor":I(y);break;case"color1":E(y);break;case"color2":D(y);break;case"color3":$(y);break}Pt(null)},position:zt,onClose:Sr})]}):o.jsxs(xl,{children:[o.jsx(bl,{value:fe,onChange:y=>he(y.target.value),placeholder:n("EDITOR_TracklistPlaceholder")}),o.jsxs(vl,{children:[o.jsx(Tn,{onClick:Ir,children:n("EDITOR_RemoveParentheses")}),o.jsx(Tn,{onClick:Rr,children:n("EDITOR_RemoveBrackets")})]})]}),o.jsx(M,{animationDelay:1050,children:o.jsxs(yl,{children:[o.jsxs(Sn,{onClick:Ge,children:[o.jsx(wl,{}),o.jsx(In,{children:n("EDITOR_Download")})]}),o.jsxs(Sn,{onClick:Ne,children:[o.jsx(_l,{$spinning:Cr}),o.jsx(In,{children:n("EDITOR_Apply")})]})]})}),o.jsx(M,{animationDelay:1100,children:o.jsxs(jl,{children:[n("EDITOR_Shortcuts"),": Ctrl+S (",n("EDITOR_Apply"),"), Ctrl+D (",n("EDITOR_Download"),")"]})})]})]})]}):o.jsx(Qn,{})})}const Rn=e=>{if(!e)return"";const n=(e.replace(/\/$/,"")||"/").split("/");return n.length>2&&(n[2]=n[2].toLowerCase()),n.join("/")},xt=()=>"https://posterfy.space"+"/",Tl=e=>{const t=xt(),n=Rn(e),d=Rn(t),r=e.includes("://www."),a=e.startsWith("http://");return r||a||n!==d},Sl=()=>{const e=window.location.href,t=xt(),n=[];return Tl(e)&&n.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:n.length===0,issues:n,currentUrl:e,canonicalUrl:t}},Il=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:n="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(m.useEffect(()=>{const r="https://posterfy.space",a=xt(),s=r+"/albuns.png";document.title=e;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",t);const c=document.querySelector('meta[name="keywords"]');c&&c.setAttribute("content",n);let u=document.querySelector('link[rel="canonical"]');u?u.setAttribute("href",a):(u=document.createElement("link"),u.setAttribute("rel","canonical"),u.setAttribute("href",a),document.head.appendChild(u));const f=document.querySelector('meta[property="og:title"]');f&&f.setAttribute("content",e);const p=document.querySelector('meta[property="og:description"]');p&&p.setAttribute("content",t);const x=document.querySelector('meta[property="og:image"]');x&&x.setAttribute("content",s);const _=document.querySelector('meta[property="og:url"]');_&&_.setAttribute("content",a);const b=document.querySelector('meta[name="twitter:title"]');b&&b.setAttribute("content",e);const g=document.querySelector('meta[name="twitter:description"]');g&&g.setAttribute("content",t);const w=document.querySelector('meta[name="twitter:image"]');w&&w.setAttribute("content",s);const j={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:r+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},k=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');k&&k.remove();const v=document.createElement("script");v.type="application/ld+json",v.id="dynamic-structured-data",v.innerHTML=JSON.stringify(j),document.head.appendChild(v)},[e,t,n]),null),Rl=()=>(m.useEffect(()=>{setTimeout(()=>{const n=[],d=document.querySelector('link[rel="canonical"]');(!d||!d.href)&&n.push("Missing canonical URL");const r=document.querySelector('meta[name="description"]');(!r||r.content.length<120)&&n.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&n.push("Title too short or missing");const a=Sl();a.isValid||a.issues.forEach(c=>{n.push(`${c.type}: ${c.message}`)});const s=document.querySelector('meta[name="robots"]');return s&&s.content.includes("noindex")&&n.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||n.push("Missing structured data"),n},1e3),(()=>{const n=window.location.href;n.includes("www.")||n.startsWith("http://")})()},[]),null),El=()=>(m.useEffect(()=>{Zr()},[]),null),Ol=()=>{m.useEffect(()=>{Gt(document.title,window.location.href);const e=new MutationObserver(n=>{n.forEach(d=>{d.type==="childList"&&d.target.nodeName==="TITLE"&&Gt(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])},zl=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:n="var(--PosterShare-shadeFrames)",darkFrames:d="var(--PosterShare-darkFrames)",posterColor:r="var(--PosterShare-posterColor)",logoColor:a="var(--PosterShare-logoColor)"})=>o.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),o.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:n}),o.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:d}),o.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:n}),o.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:d}),o.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:n}),o.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:n}),o.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:n}),o.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:d}),o.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:n}),o.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:n}),o.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:n}),o.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:n}),o.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:n}),o.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:d}),o.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:n}),o.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:n}),o.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:r}),o.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:r}),o.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:r}),o.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:r}),o.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:r}),o.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:a})]}),Pl=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Ml=h.div`
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
`,Dl=h.p`
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
`,Al=h.button`
    background-color: var(--PosterfyGreen);
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
`;function $l(){const{t:e}=V();return o.jsxs(Pl,{id:"share",children:[o.jsx(ne,{text:e("Share"),type:1}),o.jsx(ht,{title:e("ShareTitle")}),o.jsx(Ml,{children:o.jsx(zl,{width:"100%"})}),o.jsx(Dl,{children:e("ShareDescription")}),o.jsx(Al,{children:e("ComingSoon")})]})}const Ll=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:n="var(--PosterShare-darkFrames)",posterColor:d="var(--PosterShare-posterColor)",logoColor:r="var(--PosterShare-logoColor)"})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[o.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),o.jsx("path",{fill:n,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),o.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),o.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),o.jsx("path",{fill:d,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),o.jsx("path",{fill:d,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),o.jsx("path",{fill:n,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),o.jsx("path",{fill:d,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),o.jsx("path",{fill:n,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),o.jsx("path",{fill:d,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),o.jsx("path",{fill:d,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),o.jsx("g",{fill:n,opacity:"0.3",children:o.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),o.jsxs("g",{fill:t,opacity:"0.2",children:[o.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),o.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),o.jsx("path",{fill:n,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),o.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),o.jsx("path",{fill:d,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),o.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),o.jsx("path",{fill:n,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),o.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),o.jsx("path",{fill:n,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),o.jsx("path",{fill:d,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),o.jsx("path",{fill:n,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),o.jsx("path",{fill:n,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),o.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),o.jsx("path",{fill:d,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),o.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),o.jsx("path",{fill:d,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),o.jsx("path",{fill:n,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),o.jsx("path",{fill:d,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),o.jsx("path",{fill:n,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),o.jsx("path",{fill:d,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),o.jsx("path",{fill:n,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),o.jsx("path",{fill:r,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),o.jsx("path",{fill:r,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),o.jsx("path",{fill:d,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),o.jsx("path",{fill:n,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),o.jsx("path",{fill:d,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),o.jsx("g",{clipPath:"url(#clip0_1_72)",children:o.jsx("path",{fill:r,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_1_72",children:o.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Fl=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Hl=h.div`
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
`,Bl=h.p`
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
`,ql=h.button`
    background-color: var(--PosterfyGreen);
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
`;function Ul(){const{t:e}=V();return o.jsxs(Fl,{id:"share",children:[o.jsx(ne,{text:e("Community"),type:1}),o.jsx(ht,{title:e("CommunityTitle")}),o.jsx(Hl,{children:o.jsx(Ll,{width:"100%"})}),o.jsx(Bl,{children:e("CommunityDescription")}),o.jsx(ql,{children:e("ComingSoon")})]})}const En=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],Ql=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Vl=h.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,Nl=h.div`
    display: flex;
    align-items: center;
    position: relative;
`,Gl=h.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Wl=h(Ln)`
    fill: var(--PosterfyGreen);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,Yl=h.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,Zl=h.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,Kl=h.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,Xl=h.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--PosterfyGreen);
`,Jl=h.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,ec=h.a`
    color: var(--textColor);
    background: var(--PosterfyGreen);
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
`;function tc(){var a,s,l;const{i18n:e}=V(),{t}=V(),n=((a=e.language)==null?void 0:a.split("-")[0])||"en",d=En.filter(c=>c.key!=="contribute_area"),r=En.find(c=>c.key==="contribute_area");return o.jsxs(Ql,{id:"thanks",children:[o.jsx(ne,{text:t("Thanks"),type:1}),d.map((c,u)=>o.jsxs(Vl,{children:[o.jsxs(Nl,{children:[o.jsx(Gl,{className:"circle"}),o.jsx(Wl,{className:"heart"}),o.jsx(Yl,{tabIndex:0,role:"button",onClick:()=>window.open(c.url,"_blank","noopener,noreferrer"),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&window.open(c.url,"_blank","noopener,noreferrer")},onMouseEnter:f=>{const p=f.target.parentNode;p.querySelector(".circle").style.opacity=0,p.querySelector(".heart").style.opacity=1},onMouseLeave:f=>{const p=f.target.parentNode;p.querySelector(".circle").style.opacity=.8,p.querySelector(".heart").style.opacity=0},children:c.title[n]||c.title.en})]}),o.jsx(Zl,{children:c.text[n]||c.text.en})]},c.key)),r&&o.jsxs(Kl,{children:[o.jsx(Xl,{children:r.title[n]||r.title.en}),o.jsx(Jl,{children:r.text[n]||r.text.en}),o.jsx(ec,{href:r.url,target:"_blank",rel:"noopener noreferrer",children:((s=r.button)==null?void 0:s[n])||((l=r.button)==null?void 0:l.en)||"Github"})]})]})}function nc(){const{t:e}=V(),[t,n]=m.useState(!0),[d,r]=m.useState(!1),[a,s]=m.useState(""),[l,c]=m.useState(null);Ol(),m.useEffect(()=>uo(),[]);function u(x){c(x)}function f(){c(null)}m.useEffect(()=>{const x=setTimeout(()=>{n(!1),setTimeout(()=>{r(!0)},1e3)},1100);return()=>clearTimeout(x)},[]),m.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const p=x=>{s(x)};return o.jsxs(fo,{children:[o.jsx(Il,{}),o.jsx(Rl,{}),o.jsx(El,{}),o.jsx(Ao,{}),o.jsx(ii,{showAnimation:d}),o.jsx(ne,{text:e("anchorArt"),type:1}),o.jsx(ht,{title:e("ArtTitle"),paragraph:e("ArtParagraph")}),l?o.jsx(kl,{albumID:l,handleClickBack:f}):o.jsxs(o.Fragment,{children:[o.jsx(bi,{onSearch:p,value:a}),a&&o.jsx(Kt,{query:a,onclick:u}),o.jsxs("div",{style:{display:a?"none":"block"},children:[o.jsx(ne,{text:e("TryTrend"),type:2}),o.jsx(Kt,{onclick:u})]})]}),o.jsx(Ul,{}),o.jsx($l,{}),o.jsx(ua,{}),o.jsx(tc,{}),o.jsx(Ui,{}),o.jsx(ji,{isVisible:t})]})}$r.use(Lr).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!"}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!"}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!"}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});Pn(document.getElementById("root")).render(o.jsx(m.StrictMode,{children:o.jsx(nc,{})}));
