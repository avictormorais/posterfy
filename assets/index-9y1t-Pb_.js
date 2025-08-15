import{r as g,a as Kr,e as U,g as Jr,c as xt}from"./vendor-DZStNbcm.js";import{d as h,G as H,m as N,l as an}from"./ui-C8-z_EEw.js";import{u as q,i as Xr,a as eo}from"./i18n-DbQiQmPR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();var Qn={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=g,no=Symbol.for("react.element"),ro=Symbol.for("react.fragment"),oo=Object.prototype.hasOwnProperty,io=to.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ao={key:!0,ref:!0,__self:!0,__source:!0};function Gn(e,t,o){var l,r={},s=null,a=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(l in t)oo.call(t,l)&&!ao.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)r[l]===void 0&&(r[l]=t[l]);return{$$typeof:no,type:e,key:s,ref:a,props:r,_owner:io.current}}Fe.Fragment=ro;Fe.jsx=Gn;Fe.jsxs=Gn;Qn.exports=Fe;var n=Qn.exports,Wn,sn=Kr;Wn=sn.createRoot,sn.hydrateRoot;function fe({width:e,height:t,fill:o}){return n.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:o,xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},$e.apply(this,arguments)}function so(e,t){if(e==null)return{};var o={},l=Object.keys(e),r,s;for(s=0;s<l.length;s++)r=l[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var lo=["cdnSuffix","cdnUrl","countryCode","style","svg"],co="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",uo="svg",fo=127397,Yn=function(t){var o=t.cdnSuffix,l=o===void 0?uo:o,r=t.cdnUrl,s=r===void 0?co:r,a=t.countryCode,d=t.style,c=t.svg,u=c===void 0?!1:c,f=so(t,lo);if(typeof a!="string")return null;if(u){var p=""+s+a.toLowerCase()+"."+l;return g.createElement("img",Object.assign({},f,{src:p,style:$e({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},d)}))}var b=a.toUpperCase().replace(/./g,function(C){return String.fromCodePoint(C.charCodeAt(0)+fo)});return g.createElement("span",Object.assign({role:"img"},f,{style:$e({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},d)}),b)};const ho=()=>{const e="G-V0J63QWDJT",t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",e,{page_title:document.title,page_location:window.location.href})},po=(e,t="General",o="",l=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:o,value:l})},ln=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","G-V0J63QWDJT",{page_title:e,page_location:t})},mo=(e,t="image",o="")=>{const l=o?`${o} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","download_poster",{event_category:"Engagement",event_label:l,file_type:t,album_name:e,artist_name:o})},go=(e,t="")=>{const o=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","generate_preview",{event_category:"Engagement",event_label:o,album_name:e,artist_name:t})},cn=e=>{typeof window.gtag<"u"&&window.gtag("event","search_album",{event_category:"User Interaction",event_label:e,search_term:e})},xo=e=>{typeof window.gtag<"u"&&window.gtag("event","color_selection",{event_category:"Poster Editor",event_label:e,color_value:e})},vo=e=>{typeof window.gtag<"u"&&window.gtag("event","language_change",{event_category:"User Preference",event_label:e,language_value:e})},bo=(e,t="",o="",l="album_collection")=>{const r=t?`${t} - ${e}`:e;typeof window.gtag<"u"&&window.gtag("event","recreate_poster",{event_category:"Engagement",event_label:r,album_name:e,artist_name:t,album_id:o,source:l})},yo=h.div`
  position: relative;
`,wo=h.button`
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
`,Co=h.div`
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
`,_o=h.div`
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
`,ko=h.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,jo=h.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,ve=h.button`
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
`,be=h.span`
  margin-left: 8px;
`,ye=h(Yn)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function To(){const[e,t]=g.useState(!1),[o,l]=g.useState(!1),{i18n:r}=q();g.useEffect(()=>{const u=localStorage.getItem("language");u&&r.changeLanguage(u);const f=p=>{p.target.closest(".language-selector")||s()};return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[r]);const s=()=>{l(!0),setTimeout(()=>{t(!1),l(!1)},150)},a=u=>{u.stopPropagation(),e?s():t(!0)},d=u=>{r.changeLanguage(u),localStorage.setItem("language",u),s(),vo(u)},c=()=>{switch(r.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return n.jsxs(yo,{className:"language-selector",children:[n.jsx(wo,{onClick:a,"aria-label":"Select language",children:n.jsx(Co,{children:n.jsx(Yn,{countryCode:c(),svg:!0,style:{width:"2.8em",height:"2.8em",borderRadius:"50%",objectFit:"cover"}})})}),e&&n.jsxs(_o,{className:o?"closing":"",children:[n.jsx(ko,{}),n.jsxs(jo,{children:[n.jsxs(ve,{onClick:()=>d("pt"),children:[n.jsx(ye,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),n.jsx(be,{children:"Português"})]}),n.jsxs(ve,{onClick:()=>d("en"),children:[n.jsx(ye,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),n.jsx(be,{children:"English"})]}),n.jsxs(ve,{onClick:()=>d("es"),children:[n.jsx(ye,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),n.jsx(be,{children:"Español"})]}),n.jsxs(ve,{onClick:()=>d("zh"),children:[n.jsx(ye,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),n.jsx(be,{children:"中文"})]})]})]})]})}const So=e=>{typeof gtag<"u"&&gtag("event","theme_change",{event_category:"customization",event_label:e,custom_parameter:"theme_selection"}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"theme_change",theme_name:e,page_title:document.title,page_location:window.location.href})},Io=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},Mo=()=>{let e=[25,50,75,90],t=[];const o=()=>{const l=window.pageYOffset||document.documentElement.scrollTop,r=document.documentElement.scrollHeight-window.innerHeight,s=Math.round(l/r*100);e.forEach(a=>{s>=a&&!t.includes(a)&&(t.push(a),Io(a))})};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}},Zn=g.createContext(),Be=()=>{const e=g.useContext(Zn);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},zo=({children:e})=>{const[t,o]=g.useState(()=>localStorage.getItem("theme")||"light");g.useEffect(()=>{document.body.className=`theme-${t}`,localStorage.setItem("theme",t),So(t)},[t]);const s={theme:t,toggleTheme:()=>{o(a=>a==="light"?"dark":"light")},setSpecificTheme:a=>{o(a)},isLight:t==="light",isDark:t==="dark"};return n.jsx(Zn.Provider,{value:s,children:e})};function Ro(e){return H({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Eo(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Ao(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Kn(e){return H({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Jn(e){return H({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(e)}function Xn(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Oo(e){return H({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function er(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function tr(e){return H({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Do(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Ho(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function nr(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}const Po=h.div`
  position: relative;
`,Lo=h.button`
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
`,$o=h.div`
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
`,Fo=h.div`
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
`,Bo=h.div`
  position: absolute;
  top: -16px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Vo=h.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,Uo=h.button`
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
`,qo=h.div`
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
`,No=h.span`
  margin-left: 4px;
  font-weight: 500;
`;function Qo(){const[e,t]=g.useState(!1),[o,l]=g.useState(!1),{theme:r,setSpecificTheme:s}=Be(),a=[{id:"light",name:"Light",color:"#f0efeb",icon:n.jsx(nr,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:n.jsx(er,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:n.jsx(Kn,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:n.jsx(Jn,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:n.jsx(tr,{}),isLight:!1}],d=a.find(p=>p.id===r)||a[0];g.useEffect(()=>{const p=b=>{b.target.closest(".theme-selector")||c()};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[]);const c=()=>{l(!0),setTimeout(()=>{t(!1),l(!1)},150)},u=p=>{p.stopPropagation(),e?c():t(!0)},f=p=>{s(p),c()};return n.jsxs(Po,{className:"theme-selector",children:[n.jsx(Lo,{onClick:u,"aria-label":"Select theme",children:n.jsx($o,{themeColor:d.color,isLight:d.isLight,children:d.icon})}),e&&n.jsxs(Fo,{className:o?"closing":"",children:[n.jsx(Bo,{}),n.jsx(Vo,{children:a.map(p=>n.jsxs(Uo,{onClick:()=>f(p.id),children:[n.jsx(qo,{className:"theme-preview",color:p.color,isLight:p.isLight,children:p.icon}),n.jsx(No,{children:p.name})]},p.id))})]})]})}const Go=h.header`
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
`,Wo=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Yo=h.div`
  display: flex;
  align-items: center;
`,Zo=h.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--AccentColor);

  @media (max-width: 400px) {
    display: none;
  }
`,Ko=h.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,Jo=h.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(1, 183, 85, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,Xo=h.div`
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
`,ei=h.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;function ti(){const[e,t]=g.useState(!1),[o,l]=g.useState(!0),[r,s]=g.useState(0),a=".space";return g.useEffect(()=>{const d=()=>{const c=window.scrollY;c<=10?(l(!0),t(!1)):(c<r?l(!0):l(!1),t(!0)),s(c)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[r]),n.jsxs(Go,{scrolled:e,visible:o,children:[n.jsxs(Wo,{children:[n.jsxs(Yo,{children:[n.jsx(Xo,{children:n.jsx(fe,{fill:"var(--AccentColor)",width:"40px",height:"44.05px"})}),n.jsxs(Zo,{children:["Posterfy",n.jsx(Ko,{children:a})]})]}),n.jsxs(ei,{children:[n.jsx(Qo,{}),n.jsx(To,{})]})]}),n.jsx(Jo,{scrolled:e})]})}function ni(e){return H({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function ri(e){return H({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const oi="/assets/Posterfy%20-%20KTT%20ZOO-EGMOdvc1.png",ii="/assets/Posterfy%20-%20JACKBOYS%202-5mh4sLb1.png",ai="/assets/Posterfy%20-%20SOS-BR7qvD22.png",si="/assets/Posterfy%20-%20F-1%20Trillion-D1gH0Ecz.png",li="/assets/Posterfy%20-%20Nevermind-DmVmVnus.png",ci=[{id:1,coverImage:oi,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b2732715c405b0b118516627add4",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music116/v4/15/e0/31/15e031a3-d975-91a7-5dc4-31dda64d1f52/8445162931182.jpg",useUncompressed:!0,albumName:"KTT ZOO",artistsName:"Sain",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"200",marginSide:160,marginCover:0,marginBackground:"5",titleRelease:"Release date",releaseDate:"2023-07-07",titleRuntime:"Runtime",runtime:"23min 33s",backgroundColor:"#638f98",textColor:"#0c191d",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Aquelas Coisas Mais Pra Frente
2. Demanda
3. Relíquia Do Boom Bap
4. Lucro
5. Skit Visão
6. Ebi no Tempura
7. Iori Incorporado
8. Noturno KGL
9. Ignorante
10. Momentos`,color1:"#0c191d",color2:"#3381ae",color3:"#aab8b4",albumID:"7lJibQ9XRhBDUIWgkP4wZm",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:2,coverImage:ii,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273b547c9858fee61547e6b0fd8",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music221/v4/bb/00/09/bb0009b4-37e3-b924-b703-eb3d3a7f362d/196873402772.jpg",useUncompressed:!0,albumName:"JACKBOYS 2",artistsName:"JACKBOYS, Travis Scott",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:"50",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2025-07-13",titleRuntime:"Runtime",runtime:"55min 50s",backgroundColor:"#b4aba6",textColor:"#79736e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. JB2 RADIO
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
17. FLORIDA FLOW`,color1:"#7a736f",color2:"#938c8c",color3:"#94948c",albumID:"32lGAqeVkdJxEj2iv2Q01B",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:3,coverImage:ai,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg",useUncompressed:!0,albumName:"SOS",artistsName:"SZA",titleSize:200,artistsSize:"110",tracksSize:"46",marginTop:"",marginSide:160,marginCover:-1100,marginBackground:-1200,titleRelease:"Release date",releaseDate:"2022-12-09",titleRuntime:"Runtime",runtime:"1h 8min 4s",backgroundColor:"#0d2b48",textColor:"#adb8c7",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. SOS
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
23. Forgiveless`,color1:"#4c7090",color2:"#738fae",color3:"#809eb7",albumID:"07w0rG5TETcyihsEIZR3qG",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:4,coverImage:si,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b27388208159b1b3c69eefdeb2e0",uncompressedAlbumCover:"https://a5.mzstatic.com/us/r1000/0/Music211/v4/95/ad/c8/95adc8ca-e583-1800-9b56-4665f186e899/24UMGIM60824.rgb.jpg",useUncompressed:!1,albumName:"F-1 Trillion",artistsName:"Post Malone",titleSize:200,artistsSize:"110",tracksSize:"50",marginTop:200,marginSide:160,marginCover:-500,marginBackground:-700,titleRelease:"Release date",releaseDate:"2024-08-15",titleRuntime:"Runtime",runtime:"57min 58s",backgroundColor:"#cdd1d6",textColor:"#3c484c",useWatermark:!0,useFade:!0,showTracklist:!1,tracklist:`1. Wrong Ones (Feat. Tim McGraw)
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
18. Yours`,color1:"#86939b",color2:"#6a5f59",color3:"#81735d",albumID:"4BbsHmXEghoPPevQjPnHXx",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}},{id:5,coverImage:li,JSONConfig:{albumCover:"https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",uncompressedAlbumCover:"",useUncompressed:!1,albumName:"",artistsName:"",titleSize:"200",artistsSize:"110",tracksSize:"70",marginTop:"-200",marginSide:"115",marginCover:0,marginBackground:0,titleRelease:"Release date",releaseDate:"1991-09-26",titleRuntime:"Runtime",runtime:"49min 15s",backgroundColor:"#0064b0",textColor:"#01010e",useWatermark:!0,useFade:!1,showTracklist:!0,tracklist:`1. Smells Like Teen Spirit
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
13. Endless, Nameless`,color1:"#a6b6ba",color2:"#43bdd1",color3:"#052a5e",albumID:"2UJcKiJxNryhL050F5Z1Fk",userAdjustedTitleSize:!1,initialTitleSizeSet:!0}}],di=h.div`
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
`,ui=h.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:o,hoveredIndex:l,isMobile:r}=e;if(r)return"scale(1)";let s="scale(0.95)";if(t)s="scale(1.08) translateY(-8px)";else if(l!==null){let a=0;switch(l){case 0:o>0&&(a=70);break;case 1:o>=2&&(a=70);break;case 2:a=0;break;case 3:o<=2&&(a=-70);break;case 4:o<4&&(a=-70);break}a!==0&&(s=`scale(0.95) translateX(${a}px)`)}return s}};
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
`,fi=h.div`
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
`,hi=h.div`
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
`,pi=h.div`
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
`,mi=h.button`
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
`,gi=h.button`
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
`,xi=({onRecreate:e})=>{const{t}=q(),[o,l]=g.useState(null),[r,s]=g.useState(!1),[a,d]=g.useState(!1),[c,u]=g.useState(null),[f,p]=g.useState(null);g.useEffect(()=>{const m=()=>{s(window.innerWidth<=770),d(window.innerWidth>480&&window.innerWidth<=1200)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const b=(m,_)=>{u(m),p(_),document.body.style.overflow="hidden"},C=()=>{u(null),document.body.style.overflow="auto"},y=()=>{u(null),e(f),document.body.style.overflow="auto"};return n.jsxs(n.Fragment,{children:[n.jsx(di,{children:ci.map((m,_)=>n.jsx(ui,{index:_,isHovered:o===_,hoveredIndex:o,otherIsHovered:o!==null,isMobile:r,isTablet:a,onMouseEnter:()=>l(_),onMouseLeave:()=>l(null),onClick:()=>b(m.coverImage||"/placeholder.svg",m.JSONConfig),children:n.jsx("img",{src:m.coverImage||"/placeholder.svg",alt:`${m.artist} - ${m.title}`})},m.id))}),c&&n.jsx(fi,{onClick:C,children:n.jsxs(hi,{onClick:m=>m.stopPropagation(),children:[n.jsxs(pi,{children:[n.jsx(mi,{onClick:C,children:"×"}),n.jsx(gi,{onClick:y,children:t("RecreatePoster")})]}),n.jsx("img",{src:c,alt:"Album cover"})]})})]})},vi=h.div`
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
`,bi=({onRecreate:e})=>n.jsx(vi,{children:n.jsx(xi,{onRecreate:e})}),yi=h.div`
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
`,wi=h.div`
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
`,Ci=h.h1`
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
`,dn=h.p`
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
`,_i=h.div`
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
`,ki=`
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
`,ji=h(ni)`
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
    ${ki}
`;function Ti({showAnimation:e=!1,onRecreate:t}){const{t:o}=q(),{theme:l}=Be(),[r,s]=g.useState(!1);g.useEffect(()=>{if(e){const d=setTimeout(()=>{s(!0)},50);return()=>clearTimeout(d)}},[e]);const a=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return n.jsxs(n.Fragment,{children:[n.jsx(yi,{children:n.jsxs(wi,{children:[n.jsx(Ci,{visible:r,animationDelay:200,children:"Posterfy"}),n.jsx(dn,{visible:r,animationDelay:400,children:o("paragraphHero1")}),n.jsx(dn,{visible:r,animationDelay:600,children:o("paragraphHero2")}),n.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[n.jsx("h2",{children:"Free Album Poster Generator"}),n.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),n.jsx("h3",{children:"Features:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Free album poster maker"}),n.jsx("li",{children:"Spotify integration"}),n.jsx("li",{children:"Custom poster design"}),n.jsx("li",{children:"High-quality downloads"}),n.jsx("li",{children:"Multiple format options"}),n.jsx("li",{children:"Professional templates"})]})]}),n.jsx(_i,{visible:r,animationDelay:800,children:n.jsx(fe,{fill:l==="light"?"#2c2929":"white",width:"180px",height:"198.23px"})}),n.jsx(ji,{visible:r,animationDelay:1e3,onClick:a})]})}),n.jsx(bi,{onRecreate:t})]})}const Si=h.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--AccentColor);
    margin-inline: auto;
`,Ii=h.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function he({text:e,type:t}){return n.jsx(n.Fragment,{children:t==1?n.jsx(Si,{children:e}):n.jsx(Ii,{children:e})})}const Mi=h.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,zi=h.h3`
    color: var(--textColor);
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Ri=h.p`
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
`,un=h.div`
    display: flex;
`;function jt({title:e,paragraph:t}){return n.jsxs(Mi,{children:[n.jsx(un,{children:n.jsx(zi,{children:e})}),n.jsx(un,{children:n.jsx(Ri,{children:t})})]})}const Ei=N`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,Ai=N`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,Oi=N`
    0% { 
        opacity: 0; 
    }
    100% { 
        opacity: 1; 
    }
`,Di=h.div`
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
    animation: ${e=>e.initialFade?Oi:"none"} 0.5s ease-in;
`,Hi=h.div`
    animation: ${e=>e.isExiting?Ai:Ei} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function Pi({isVisible:e,initialFade:t=!1}){const{theme:o}=Be(),[l,r]=g.useState(!1),[s,a]=g.useState(!1);return g.useEffect(()=>{!e&&!l&&(r(!0),setTimeout(()=>{a(!0)},800))},[e,l]),n.jsx(Di,{isVisible:e,fadeOutContainer:s,initialFade:t,children:n.jsx(Hi,{isExiting:l,children:n.jsx(fe,{fill:"var(--AccentColor)",width:"100px",height:"118.23px"})})})}const Li=N`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,$i=N`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,Tt=N`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Fi=N`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,Bi=h.div`
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
`,Vi=h.div`
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
`,Ui=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${Tt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,qi=h.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${Li} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${$i} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,Ni=h.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,Qi=h.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: var(--textColor);
  opacity: 0.4;
  filter: blur(15px);
  border-radius: 50%;
  transition: all 0.3s ease;
`,Gi=h.div`
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
    animation: ${Fi} 6s linear infinite;
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
`,Wi=h.div`
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
`,Yi=h.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${Tt} 0.5s ease-out;
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
    color: var(--AccentColor);
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;const Zi=h.div`
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
`,Ki=h.button`
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
`,Ji=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,Xi=h.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,ea=h.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid var(--borderColor);
  animation: ${Tt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,ta=h.a`
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
`;function na(){const{t:e}=q(),{theme:t,setSpecificTheme:o}=Be(),l=a=>{o(a)},r=[{id:"light",name:"Light",color:"#f0efeb",icon:n.jsx(nr,{}),isLight:!0},{id:"dark",name:"Dark",color:"#070815",icon:n.jsx(er,{}),isLight:!1},{id:"fy",name:"Midnight",color:"#151515",icon:n.jsx(Oo,{}),isLight:!1},{id:"rose",name:"Rose",color:"#232136",icon:n.jsx(Kn,{}),isLight:!1},{id:"carmesin",name:"Crimson",color:"#1f0c19",icon:n.jsx(Jn,{}),isLight:!1},{id:"brown",name:"Earth",color:"#1e1516",icon:n.jsx(tr,{}),isLight:!1}],s=new Date().getFullYear();return n.jsxs(Bi,{children:[n.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:n.jsxs("footer",{children:[n.jsx("h4",{children:"Album Poster Generator Links"}),n.jsxs("nav",{children:[n.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),n.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),n.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),n.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),n.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),n.jsxs(Vi,{children:[n.jsxs(Ui,{children:[n.jsxs(qi,{children:[n.jsx(Qi,{className:"icon-shadow"}),n.jsx(Ni,{className:"icon-main",children:n.jsx(fe,{fill:t==="light"?"#2c2929":"white",width:"100px",height:"88.1px"})})]}),n.jsx(Gi,{children:n.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",n.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),n.jsxs(Wi,{children:[n.jsx(Xn,{})," © ",s," Posterfy. ",e("AllRights","All rights reserved.")]})]}),n.jsx(Yi,{children:n.jsx(Zi,{children:r.map(a=>n.jsxs(Ji,{children:[n.jsx(Ki,{color:a.color,active:t===a.id,themeId:a.id,onClick:()=>l(a.id),"aria-label":`${e("SwitchTo","Switch to")} ${a.name} ${e("Theme").toLowerCase()}`,children:a.icon},a.id),n.jsx(Xi,{active:t===a.id,children:a.name})]},a.id))})}),n.jsx(ea,{children:n.jsxs(ta,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[n.jsx(Ro,{})," ",e("ViewGitHub","GitHub")]})})]})]})}function ra(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function oa(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const ia=h.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,aa=h(ra)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,sa=h.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,la=h.hr`
    opacity: 0.15;
    margin: 5px;
`,ca=h.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,da=h.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function se({q:e,a:t}){const[o,l]=g.useState(!1);function r(){l(!o)}return n.jsxs(n.Fragment,{children:[n.jsxs(ia,{onClick:r,children:[n.jsx(aa,{showA:o}),n.jsx(sa,{children:e})]}),n.jsx(la,{}),n.jsx(ca,{showA:o,children:n.jsx(da,{showA:o,children:t})})]})}const ua=h.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`,fa=h.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function ha(){const{t:e}=q();return n.jsxs(ua,{id:"faq",children:[n.jsx(he,{text:"FAQ",type:1}),n.jsxs(fa,{children:[n.jsx(se,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),n.jsx(se,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),n.jsx(se,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),n.jsx(se,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),n.jsx(se,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const fn=e=>{if(!e)return"";const o=(e.replace(/\/$/,"")||"/").split("/");return o.length>2&&(o[2]=o[2].toLowerCase()),o.join("/")},St=()=>"https://posterfy.space"+"/",pa=e=>{const t=St(),o=fn(e),l=fn(t),r=e.includes("://www."),s=e.startsWith("http://");return r||s||o!==l},ma=()=>{const e=window.location.href,t=St(),o=[];return pa(e)&&o.push({type:"redirect_needed",current:e,canonical:t,message:"Current URL should redirect to canonical URL"}),{isValid:o.length===0,issues:o,currentUrl:e,canonicalUrl:t}},ga=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:o="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(g.useEffect(()=>{const r="https://posterfy.space",s=St(),a=r+"/albuns.png";document.title=e;const d=document.querySelector('meta[name="description"]');d&&d.setAttribute("content",t);const c=document.querySelector('meta[name="keywords"]');c&&c.setAttribute("content",o);let u=document.querySelector('link[rel="canonical"]');u?u.setAttribute("href",s):(u=document.createElement("link"),u.setAttribute("rel","canonical"),u.setAttribute("href",s),document.head.appendChild(u));const f=document.querySelector('meta[property="og:title"]');f&&f.setAttribute("content",e);const p=document.querySelector('meta[property="og:description"]');p&&p.setAttribute("content",t);const b=document.querySelector('meta[property="og:image"]');b&&b.setAttribute("content",a);const C=document.querySelector('meta[property="og:url"]');C&&C.setAttribute("content",s);const y=document.querySelector('meta[name="twitter:title"]');y&&y.setAttribute("content",e);const m=document.querySelector('meta[name="twitter:description"]');m&&m.setAttribute("content",t);const _=document.querySelector('meta[name="twitter:image"]');_&&_.setAttribute("content",a);const j={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:s,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:r+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},w=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');w&&w.remove();const x=document.createElement("script");x.type="application/ld+json",x.id="dynamic-structured-data",x.innerHTML=JSON.stringify(j),document.head.appendChild(x)},[e,t,o]),null),xa=()=>(g.useEffect(()=>{setTimeout(()=>{const o=[],l=document.querySelector('link[rel="canonical"]');(!l||!l.href)&&o.push("Missing canonical URL");const r=document.querySelector('meta[name="description"]');(!r||r.content.length<120)&&o.push("Meta description too short or missing"),(!document.title||document.title.length<30)&&o.push("Title too short or missing");const s=ma();s.isValid||s.issues.forEach(c=>{o.push(`${c.type}: ${c.message}`)});const a=document.querySelector('meta[name="robots"]');return a&&a.content.includes("noindex")&&o.push("Page marked as noindex"),document.querySelector('script[type="application/ld+json"]')||o.push("Missing structured data"),o},1e3),(()=>{const o=window.location.href;o.includes("www.")||o.startsWith("http://")})()},[]),null),va=()=>(g.useEffect(()=>{ho()},[]),null),ba=()=>{g.useEffect(()=>{ln(document.title,window.location.href);const e=new MutationObserver(o=>{o.forEach(l=>{l.type==="childList"&&l.target.nodeName==="TITLE"&&ln(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])};function rr(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function ya(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function wa(e){return H({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const Ca=N`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,_a=N`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`,ka=N`
    from {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
    to {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
`,ja=N`
    from {
        backdrop-filter: blur(10px);
        background: rgba(0, 0, 0, 0.5);
    }
    to {
        backdrop-filter: blur(0px);
        background: rgba(0, 0, 0, 0);
    }
`,Ta=h.div`
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
    animation: ${e=>e.isClosing?ja:ka} 0.3s ease-in-out forwards;
`,Sa=h.div`
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
    animation: ${e=>e.isClosing?_a:Ca} 0.3s ease-in-out forwards;

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
`,Ia=h.div`
    display: flex;
    padding-inline: 10px;
    justify-content: center;
    align-items: start;
    flex-direction: row;
    width: 96%;
`,Ma=h.h2`
    font-size: 1.25em;
    margin-left: 10px;
    font-weight: bolder;
    margin-right: auto;
`,za=h(ya)`
    font-size: 1.25em;
    color: var(--textColor);
    cursor: pointer;
    margin: auto;
`,Ra=h.div`
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
`,or=h.p`
    font-size: 0.85em;
    margin-bottom: 20px;
    margin-inline: 10px;
    font-weight: bolder;
    opacity: 0.7;
    text-align: justify;
`,Ea=h.img`
    width: 96%;
    margin-inline: auto;
    height: auto;
    border-radius: 10px;
    border: 2px solid var(--textColor);
`,Aa=h.button`
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
`,st=h.button`
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
`,hn=h.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 98%;
    margin-top: 20px;
    gap: 10px;
`,Oa=h(or)`
    opacity: 0.5;
    font-size: 0.8em;
    margin-top: 8px;
    width: 93%;
    text-align: justify;
`,Da=h.div`
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`,Ha=h.div`
    height: 1px;
    background-color: var(--textColor);
    width: 96%;
    margin-block: 15px;
    opacity: 0.1;
`;function Pa({title:e,paragraph:t,imageURL:o,postImageText:l,canClose:r,confirmText:s,onConfirm:a,cancelText:d,onCancel:c,isClosing:u}){return document.body.style.overflow="hidden",n.jsx(Ta,{isClosing:u,children:n.jsxs(Sa,{isClosing:u,children:[n.jsxs(Ia,{children:[n.jsx(Da,{children:n.jsx(fe,{width:25,height:25,fill:"var(--textColor)"})}),e&&n.jsx(Ma,{children:e}),r&&n.jsx(Ra,{onClick:c,children:n.jsx(za,{})})]}),n.jsx(Ha,{}),t&&n.jsx(or,{children:t}),o&&n.jsx(Ea,{src:o}),l&&n.jsx(Oa,{children:l}),d&&s?n.jsxs(hn,{children:[n.jsx(Aa,{onClick:c,children:d}),n.jsx(st,{onClick:a,children:s})]}):n.jsx(hn,{style:{justifyContent:"center"},children:d?n.jsx(st,{onClick:c,children:d}):n.jsx(st,{onClick:a,children:s})})]})})}const La="/assets/models-4pKGew8b.png",$a=g.createContext(),Fa=({children:e})=>{const{t,i18n:o}=q(),[l,r]=g.useState(null),[s,a]=g.useState(!1),[d,c]=g.useState(()=>{const w=localStorage.getItem("shownAlerts");return w?JSON.parse(w):[]}),u=()=>{const w={en:{title:"🚀 Pre-made models",paragraph:"Pre-made models allow you to quickly create posters based on existing templates. Choose a template, customize it, and generate your poster in seconds.",confirmText:"Ok, I'll try!",postImageText:"The models can be chosen after selecting a album."},pt:{title:"🚀 Modelos pré-definidos",paragraph:"Os modelos pré-definidos permitem que você crie rapidamente pôsteres baseados em templates existentes. Escolha um modelo, personalize-o e gere seu pôster em segundos.",confirmText:"Ok, vou tentar!",postImageText:"Os modelos podem ser escolhidos após selecionar um álbum."},es:{title:"🚀 Modelos predefinidos",paragraph:"Los modelos predefinidos te permiten crear rápidamente pósters basados en plantillas existentes. Elige una plantilla, personalízala y genera tu póster en segundos.",confirmText:"¡Ok, lo intentaré!",postImageText:"Los modelos se pueden elegir después de seleccionar un álbum."},zh:{title:"🚀 预制模型",paragraph:"预制模型允许您基于现有模板快速创建海报。选择一个模板，自定义它，并在几秒钟内生成您的海报。",confirmText:"好的，我试试！",postImageText:"可以在选择专辑后选择模型。"}},x=o.language||"en",k=w[x]||w.en;return{id:"default-premade-models",title:k.title,paragraph:k.paragraph,imageURL:La,postImageText:k.postImageText,confirmText:k.confirmText,canClose:!0,type:"alert"}};g.useEffect(()=>{const w=u();d.includes(w.id)||r(w)},[o.language]);const f=w=>{r(w),a(!1)},p=w=>{f({...w,type:"alert"})},b=w=>{f({...w,type:"confirmation"})},C=()=>{!l||s||(a(!0),setTimeout(()=>{r(null),a(!1),document.body.style.overflow="unset"},300))},y=()=>{l!=null&&l.onConfirm&&l.onConfirm(),(l==null?void 0:l.type)==="alert"&&_(),C()},m=()=>{l!=null&&l.onCancel&&l.onCancel(),(l==null?void 0:l.type)==="alert"&&_(),C()},_=()=>{if(l!=null&&l.id&&!d.includes(l.id)){const w=[...d,l.id];c(w),localStorage.setItem("shownAlerts",JSON.stringify(w))}},j={modal:l,showModal:f,showAlert:p,showConfirmation:b,closeModal:C,isModalVisible:!!l};return n.jsxs($a.Provider,{value:j,children:[e,l&&n.jsx(Pa,{title:l.title,paragraph:l.paragraph,imageURL:l.imageURL,postImageText:l.postImageText,canClose:l.canClose,confirmText:l.confirmText,onConfirm:l.confirmText?y:null,cancelText:l.cancelText||null,onCancel:l.cancelText?m:l.canClose?C:null,isClosing:s})]})},Ba=({width:e=300,light:t="var(--PosterShare-light)",shadeFrames:o="var(--PosterShare-shadeFrames)",darkFrames:l="var(--PosterShare-darkFrames)",posterColor:r="var(--PosterShare-posterColor)",logoColor:s="var(--PosterShare-logoColor)"})=>n.jsxs("svg",{width:e,viewBox:"0 0 451 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M155.328 34.2949L107.858 278.385H346.804L292.102 34.2949H155.328Z",fill:t}),n.jsx("path",{d:"M450.35 227.083H379.611V114.766H449.869L450.35 227.083Z",fill:o}),n.jsx("path",{d:"M445.155 115.295H370.614V227.073H445.155V115.295Z",fill:l}),n.jsx("path",{d:"M370.093 227.602V114.766H445.656V227.602H370.093ZM371.096 115.824V226.544H444.613V115.824H371.096Z",fill:o}),n.jsx("path",{d:"M435.897 127.405H379.882V214.974H435.897V127.405Z",fill:l}),n.jsx("path",{d:"M435.897 214.974C435.897 214.974 435.897 214.818 435.897 214.538C435.897 214.258 435.897 213.832 435.897 213.293C435.897 212.182 435.897 210.574 435.897 208.488C435.897 204.275 435.897 198.111 435.827 190.433C435.827 174.992 435.757 153.139 435.707 127.405L435.957 127.654H379.942L380.203 127.384C380.203 160.413 380.203 190.869 380.203 214.953L379.992 214.724L420.743 214.849L432.016 214.901H434.975H432.056L420.833 214.963L379.942 215.077H379.721V214.859C379.721 190.775 379.721 160.32 379.671 127.291V127.01H379.942H435.957H436.198V127.27C436.148 153.066 436.108 175.003 436.078 190.464C436.078 198.163 436.028 204.265 436.018 208.457C436.018 210.532 436.018 212.12 436.018 213.22C436.018 213.739 436.018 214.143 436.018 214.434C436.018 214.724 435.897 214.974 435.897 214.974Z",fill:o}),n.jsx("path",{d:"M445.365 115.295C445.043 115.984 444.639 116.629 444.162 117.215C443.369 118.356 442.236 119.913 440.932 121.594C439.628 123.275 438.405 124.759 437.482 125.796C437.018 126.396 436.486 126.936 435.897 127.405C435.787 127.301 437.903 124.613 440.511 121.251C442.001 119.158 443.623 117.169 445.365 115.295Z",fill:o}),n.jsx("path",{d:"M445.155 227.073C443.411 225.232 441.795 223.266 440.32 221.189C438.704 219.226 437.226 217.145 435.897 214.963C437.643 216.799 439.258 218.761 440.732 220.836C442.347 222.804 443.825 224.888 445.155 227.073Z",fill:o}),n.jsx("path",{d:"M370.604 226.948L380.373 214.496Z",fill:l}),n.jsx("path",{d:"M380.373 214.496C378.952 216.733 377.391 218.872 375.699 220.899C374.139 223.039 372.437 225.064 370.604 226.959C372.02 224.714 373.582 222.571 375.278 220.546C376.836 218.407 378.539 216.386 380.373 214.496Z",fill:o}),n.jsx("path",{d:"M370.614 115.295C372.348 117.108 373.95 119.05 375.409 121.106C377.004 123.052 378.465 125.112 379.781 127.27C378.047 125.454 376.445 123.508 374.987 121.449C373.393 119.506 371.931 117.449 370.614 115.295Z",fill:o}),n.jsx("path",{d:"M418.446 145.18H399.69V200.28H418.446V145.18Z",fill:o}),n.jsx("path",{d:"M96.8653 101.723H3.4592V261.689H96.8653V101.723Z",fill:o}),n.jsx("path",{d:"M93.7561 101.723H0.350006V261.689H93.7561V101.723Z",fill:o}),n.jsx("path",{d:"M89.7843 104.97H4.33177V258.452H89.7843V104.97Z",fill:l}),n.jsx("path",{d:"M73.1452 124.914H20.5999V238.508H73.1452V124.914Z",fill:o}),n.jsx("path",{d:"M20.5999 198.309C20.4795 187.693 29.6967 177.337 39.8568 175.853C44.7011 175.148 49.8864 176.144 54.3697 174.224C62.4435 170.8 65.0212 159.697 73.1452 156.408L73.5163 238.508H20.5999V198.309Z",fill:o}),n.jsx("path",{d:"M253.022 287.548H194.495C194.495 287.548 192.24 293.774 184.119 293.774C184.119 293.774 194.495 294.84 194.495 300H252.976C252.976 294.872 263.353 293.774 263.353 293.774C255.277 293.774 253.022 287.548 253.022 287.548Z",fill:r}),n.jsx("path",{d:"M303.471 65.4249H144V279.184H303.471V65.4249Z",fill:r}),n.jsx("path",{d:"M180.663 1.71215C180.663 0.766554 179.922 0 179.008 0C178.094 0 177.353 0.766554 177.353 1.71215V22.1542C177.353 23.0998 178.094 23.8663 179.008 23.8663C179.922 23.8663 180.663 23.0998 180.663 22.1542V1.71215Z",fill:r}),n.jsx("path",{d:"M262.776 23.8663C262.337 23.8663 261.916 23.686 261.605 23.3649C261.295 23.0438 261.121 22.6083 261.121 22.1542V1.71215C261.121 1.25806 261.295 0.822567 261.605 0.501476C261.916 0.180386 262.337 0 262.776 0C263.215 0 263.635 0.180386 263.946 0.501476C264.256 0.822567 264.431 1.25806 264.431 1.71215V22.1542C264.431 22.6083 264.256 23.0438 263.946 23.3649C263.635 23.686 263.215 23.8663 262.776 23.8663Z",fill:r}),n.jsx("path",{d:"M158.558 20.027H286.145L292.102 34.2949H155.328L158.558 20.027Z",fill:r}),n.jsx("path",{d:"M254.11 176.433V183.941H246.112V191.95H239.325V199.709H231.569V207.217H215.571V199.709H207.815V191.95H201.029V183.941H193.029V176.433H186V144.397H193.756V136.889H217.268V144.648H229.872V136.889H253.383V144.397H261.14V176.433H254.11ZM223.57 154.935C221.171 154.937 218.802 155.487 216.634 156.548C214.465 157.609 212.552 159.153 211.031 161.07C209.509 162.986 208.419 165.227 207.836 167.631C207.254 170.036 207.196 172.544 207.664 174.974C208.133 177.405 209.118 179.698 210.547 181.688C211.977 183.678 213.816 185.316 215.932 186.484C218.048 187.652 220.388 188.321 222.784 188.442C225.181 188.564 227.573 188.135 229.789 187.186C232.754 185.917 235.288 183.768 237.071 181.012C238.854 178.255 239.805 175.014 239.805 171.699C239.804 168.383 238.851 165.141 237.067 162.384C235.283 159.627 232.748 157.478 229.782 156.21C227.812 155.368 225.701 154.935 223.57 154.935ZM223.57 184.213C221.846 184.212 220.145 183.816 218.587 183.055C217.029 182.293 215.655 181.184 214.562 179.807C213.469 178.43 212.685 176.82 212.267 175.093C211.849 173.366 211.807 171.564 212.144 169.818C212.461 168.17 213.11 166.608 214.047 165.234C214.984 163.86 216.189 162.704 217.585 161.84C218.981 160.976 220.536 160.424 222.151 160.218C223.766 160.013 225.404 160.159 226.961 160.647C228.518 161.135 229.959 161.955 231.191 163.053C232.423 164.151 233.418 165.504 234.114 167.023C234.809 168.543 235.189 170.196 235.228 171.877C235.268 173.557 234.966 175.227 234.343 176.78C233.46 178.981 231.965 180.861 230.048 182.184C228.13 183.507 225.876 184.213 223.57 184.213ZM223.57 163.435C221.897 163.436 220.263 163.949 218.872 164.909C217.482 165.87 216.399 167.234 215.76 168.831C215.12 170.427 214.953 172.184 215.28 173.878C215.607 175.573 216.412 177.129 217.595 178.35C218.979 179.779 220.8 180.668 222.746 180.865C224.693 181.063 226.646 180.557 228.273 179.434C229.899 178.311 231.098 176.64 231.666 174.706C232.234 172.772 232.135 170.694 231.386 168.827C230.745 167.231 229.661 165.867 228.269 164.907C226.878 163.947 225.243 163.435 223.57 163.435ZM223.691 175.432C223.044 175.432 222.412 175.233 221.874 174.862C221.337 174.49 220.918 173.963 220.67 173.345C220.423 172.728 220.358 172.048 220.485 171.393C220.611 170.738 220.923 170.136 221.38 169.663C221.838 169.191 222.421 168.87 223.055 168.74C223.689 168.609 224.347 168.676 224.944 168.932C225.542 169.188 226.053 169.621 226.412 170.176C226.771 170.732 226.963 171.385 226.963 172.053C226.963 172.722 226.771 173.375 226.412 173.931C226.052 174.486 225.541 174.919 224.943 175.175C224.546 175.345 224.121 175.432 223.691 175.432Z",fill:s})]}),Va=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Ua=h.div`
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
`,qa=h.p`
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
`,Na=h.button`
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
`;function Qa(){const{t:e}=q();return n.jsxs(Va,{id:"share",children:[n.jsx(he,{text:e("Share"),type:1}),n.jsx(jt,{title:e("ShareTitle")}),n.jsx(Ua,{children:n.jsx(Ba,{width:"100%"})}),n.jsx(qa,{children:e("ShareDescription")}),n.jsx(Na,{children:e("ComingSoon")})]})}const Ga=({width:e=390,shadeFrames:t="var(--PosterShare-shadeFrames)",darkFrames:o="var(--PosterShare-darkFrames)",posterColor:l="var(--PosterShare-posterColor)",logoColor:r="var(--PosterShare-logoColor)"})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e*274/390,fill:"none",viewBox:"0 0 390 274",children:[n.jsx("path",{fill:t,d:"M152.94 269.24v2a1.89 1.89 0 0 0 1.89 1.88h72a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.72 1.72 0 0 0-.503-1.23 1.73 1.73 0 0 0-1.227-.51h-17.9a3.267 3.267 0 0 1-3.23-3.83l6.3-36.27h-40.93l-17.5 38.74a7 7 0 0 0-.63 2.88"}),n.jsx("path",{fill:o,d:"M228.54 269.46v1.94a1.715 1.715 0 0 1-1.066 1.601c-.211.086-.436.13-.664.129h-72a1.89 1.89 0 0 1-1.89-1.88v-2a7 7 0 0 1 .18-1.58q.16-.675.44-1.31l17.51-38.73H212l-6.28 36.27a2.8 2.8 0 0 0-.05.64 3.28 3.28 0 0 0 3.28 3.2h17.9a1.73 1.73 0 0 1 1.69 1.72",opacity:"0.2"}),n.jsx("path",{fill:t,d:"m151.25 266.36 17.51-38.74h2.31l-17.5 38.74a7 7 0 0 0-.63 2.88v2a1.89 1.89 0 0 0 1.89 1.88h-2.32c-.499 0-.977-.198-1.329-.551a1.88 1.88 0 0 1-.551-1.329v-2c0-.993.211-1.975.62-2.88"}),n.jsx("path",{fill:t,d:"M171.07 227.62h40.89l-1.61 9.26h-43.46z",opacity:"0.2"}),n.jsx("path",{fill:l,d:"M108.44 231.69h174.44a5.75 5.75 0 0 0 4.349-1.877 5.8 5.8 0 0 0 1.22-2.093 5.8 5.8 0 0 0 .251-2.41l-11-126a7.1 7.1 0 0 0-6.94-6.38H96.29a5.748 5.748 0 0 0-5.81 6.38l11 126.05a7.1 7.1 0 0 0 2.283 4.481 7.1 7.1 0 0 0 4.677 1.849"}),n.jsx("path",{fill:l,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z"}),n.jsx("path",{fill:o,d:"m287.5 211.68 1.2 13.63a5.8 5.8 0 0 1-.251 2.41 5.764 5.764 0 0 1-5.569 3.97H108.44a7.11 7.11 0 0 1-6.94-6.38l-1.19-13.63z",opacity:"0.6"}),n.jsx("path",{fill:l,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46"}),n.jsx("path",{fill:o,d:"M106.47 207.83h174.2a3.13 3.13 0 0 0 2.362-1.015 3.13 3.13 0 0 0 .798-2.445l-9.12-104.18a3.85 3.85 0 0 0-3.76-3.46H96.75a3.12 3.12 0 0 0-3.16 3.46l9.12 104.18a3.85 3.85 0 0 0 3.76 3.46",opacity:"0.8"}),n.jsx("path",{fill:l,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),n.jsx("path",{fill:l,d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"}),n.jsx("g",{fill:o,opacity:"0.3",children:n.jsx("path",{d:"M165.38 96.73h6.7l23.62 111.1H189zM202.47 207.83l-23.62-111.1h25.18l23.61 111.1z"})}),n.jsxs("g",{fill:t,opacity:"0.2",children:[n.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43"}),n.jsx("path",{d:"M92.44 92.88h3.85a5.75 5.75 0 0 0-5.81 6.38l11 126.05a7.11 7.11 0 0 0 6.94 6.38h-3.86a7.09 7.09 0 0 1-6.93-6.38l-11-126a5.75 5.75 0 0 1 5.81-6.43",opacity:"0.2"})]}),n.jsx("path",{fill:o,d:"M165.38 269.48v1.84a1.8 1.8 0 0 0 .534 1.283 1.8 1.8 0 0 0 1.286.527h59.61a1.715 1.715 0 0 0 1.601-1.066c.086-.211.13-.436.129-.664v-1.93a1.715 1.715 0 0 0-1.066-1.601 1.7 1.7 0 0 0-.664-.129h-17.9a3 3 0 0 1-.68-.08h-41a1.82 1.82 0 0 0-1.709 1.117 1.8 1.8 0 0 0-.141.703",opacity:"0.3"}),n.jsx("path",{fill:t,d:"M153.12 267.66h55.11a3.26 3.26 0 0 1-2.6-3.13h-51.1z",opacity:"0.2"}),n.jsx("path",{fill:l,d:"M85.69 189.99H10.34L.51 77.68h75.35z"}),n.jsx("path",{fill:t,d:"M59.89 115.13a13.632 13.632 0 0 1-13.8 15.11 16.83 16.83 0 0 1-16.44-15.11A13.64 13.64 0 0 1 43.45 100a16.83 16.83 0 0 1 16.44 15.13",opacity:"0.6"}),n.jsx("path",{fill:o,d:"m34.79 173.89 19.8-26.44 10.44 26.44z"}),n.jsx("path",{fill:t,d:"M17.36 96.34c-9.07 17.22.45 38.62 13.7 52.67 2 2.15 4.87-1 2.84-3.12C22.07 133.34 13.23 114 21.36 98.56c1.28-2.42-2.73-4.64-4-2.22",opacity:"0.3"}),n.jsx("path",{fill:o,d:"m60.86 84.82-7.36 8.27 8.69 6.92 6.68-7.59z",opacity:"0.7"}),n.jsx("path",{fill:l,d:"M123.09 74.49h128.02L244.67.89H116.66z"}),n.jsx("path",{fill:o,d:"m250.53 69.04-45.55-40.41-18.38 40.41z",opacity:"0.5"}),n.jsx("path",{fill:o,d:"m205.6 69.04-59.2-52.52-23.89 52.52zM189.701 29.623c3.543-3.703 3.142-9.838-.896-13.702s-10.184-3.995-13.728-.292c-3.543 3.703-3.142 9.837.896 13.701s10.184 3.995 13.728.293"}),n.jsx("path",{fill:t,d:"M268.32 188.02H107.79l-8.2-93.71h160.54z",opacity:"0.2"}),n.jsx("path",{fill:l,d:"M272.78 180.71H112.24L104.04 87h160.54z"}),n.jsx("path",{fill:t,d:"M186.89 89.93a41.63 41.63 0 0 0-26.73 10.56c-2.34 2.1-4.56 4.79-4.55 8.17 0 4.39 3.67 8 6 11.87 4.39 7.2 4.19 16.85-.46 23-2.88 3.79-7.47 6.89-7.34 12 .1 3.68 2.78 7 5.6 9.4 7.95 6.9 18 10.26 27.9 11.65 8.44 1.2 17.34 1.27 24.58-2.57 18.66-9.92 29.5-40.18 22.39-58.71-10.41-27.3-47.39-25.37-47.39-25.37",opacity:"0.6"}),n.jsx("path",{fill:l,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z"}),n.jsx("path",{fill:o,d:"m237.56 138.74-8.88-8.16 7.45-8.16 8.87 8.16z",opacity:"0.7"}),n.jsx("path",{fill:l,d:"m164.46 123.41-7.44 6.02 8.96 10.63z"}),n.jsx("path",{fill:o,d:"m164.46 123.41-7.44 6.02 8.96 10.63z",opacity:"0.7"}),n.jsx("path",{fill:l,d:"m221.57 130.06-21.67 21.67-27.45-23.04 21.67-21.66z"}),n.jsx("path",{fill:o,d:"M199.9 154.23a2.46 2.46 0 0 1-1.6-.58l-27.46-23a2.5 2.5 0 0 1-.16-3.68l21.67-21.67a2.49 2.49 0 0 1 3.37-.15l27.46 23a2.5 2.5 0 0 1 .16 3.68l-21.67 21.67a2.5 2.5 0 0 1-1.77.73m-23.75-25.7 23.61 19.81 18.11-18.11-23.61-19.81z"}),n.jsx("path",{fill:r,d:"M149.845 119.616c2.624-2.741 2.325-7.285-.667-10.149-2.992-2.865-7.544-2.965-10.168-.224s-2.325 7.284.667 10.149 7.544 2.964 10.168.224"}),n.jsx("path",{fill:r,d:"M145.06 122.1a8.51 8.51 0 0 1-8.3-7.64 7 7 0 0 1 4.144-7.127 7 7 0 0 1 2.856-.593 8.514 8.514 0 0 1 8.31 7.63 7 7 0 0 1-1.79 5.448 7 7 0 0 1-5.26 2.282zm-1.26-14.36a6 6 0 0 0-4.51 1.93 6.08 6.08 0 0 0-1.54 4.7 7.51 7.51 0 0 0 7.31 6.73 6 6 0 0 0 4.519-1.958 6 6 0 0 0 1.531-4.682 7.48 7.48 0 0 0-7.31-6.72"}),n.jsx("path",{fill:l,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z"}),n.jsx("path",{fill:o,d:"M176.68 173.75h-1.51v-6.24a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.5 2.5 0 0 1-2.49-2.5v-4.47a.997.997 0 0 0-1-1h-4.48a2.494 2.494 0 0 1-2.49-2.5v-4.48a.997.997 0 0 0-1-1h-6.16v-1.51h6.24c.66.003 1.291.266 1.758.732.466.467.729 1.098.732 1.758v4.48a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5v4.47a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5V164a.997.997 0 0 0 1 1h4.48a2.5 2.5 0 0 1 2.49 2.5z",opacity:"0.7"}),n.jsx("path",{fill:l,d:"M389.82 180.67h-93.67L287.96 87h93.66z"}),n.jsx("g",{clipPath:"url(#clip0_1_72)",children:n.jsx("path",{fill:r,d:"M360.924 136.541v5.214h-5.742v5.562h-4.871v5.388h-5.569v5.214h-11.484v-5.214h-5.568v-5.388h-4.872v-5.561h-5.742v-5.215h-5.046v-22.246h5.568v-5.214h16.878v5.388h9.048v-5.388h16.878v5.214h5.568v22.246zM339 121.613a11.65 11.65 0 0 0-11.295 8.816 11.64 11.64 0 0 0 5.812 13.093 11.65 11.65 0 0 0 9.948.487 11.65 11.65 0 0 0 5.227-4.288 11.634 11.634 0 0 0-5.233-17.223 11.6 11.6 0 0 0-4.459-.885m0 20.331a8.365 8.365 0 0 1-8.203-9.996 8.37 8.37 0 0 1 7.184-6.667 8.365 8.365 0 0 1 8.753 11.502 8.37 8.37 0 0 1-7.734 5.161m0-14.429a6.08 6.08 0 0 0-5.607 3.747 6.06 6.06 0 0 0 1.318 6.611 6.072 6.072 0 0 0 10.101-2.531 6.068 6.068 0 0 0-5.812-7.827m.087 8.331a2.347 2.347 0 0 1-1.659-4.005 2.35 2.35 0 0 1 4.008 1.659 2.347 2.347 0 0 1-2.349 2.346"})}),n.jsx("defs",{children:n.jsx("clipPath",{id:"clip0_1_72",children:n.jsx("path",{fill:"#fff",d:"M312 109h54v49h-54z"})})})]}),Wa=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,Ya=h.div`
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
`,Za=h.p`
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
`,Ka=h.button`
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
`;function Ja(){const{t:e}=q();return n.jsxs(Wa,{id:"share",children:[n.jsx(he,{text:e("Community"),type:1}),n.jsx(jt,{title:e("CommunityTitle")}),n.jsx(Ya,{children:n.jsx(Ga,{width:"100%"})}),n.jsx(Za,{children:e("CommunityDescription")}),n.jsx(Ka,{children:e("ComingSoon")})]})}const pn=[{key:"storyset",title:{en:"Storyset",pt:"Storyset",es:"Storyset",zh:"Storyset"},text:{en:"Illustrations on share and community sections.",pt:"Ilustrações nas seções de compartilhamento e comunidade.",es:"Ilustraciones en las secciones de compartir y comunidad.",zh:"分享和社区部分的插图。"},url:"https://storyset.com/"},{key:"debug420",title:{en:"debug420",pt:"debug420",es:"debug420",zh:"debug420"},text:{en:"Enhanced quality cover feature.",pt:"Recurso de melhoria de qualidade das capas.",es:"Funcionalidad de mejora de calidad de portadas.",zh:"增强封面质量功能。"},url:"https://github.com/debug420"},{key:"github_issues",title:{en:"Github issues",pt:"Github issues",es:"Github issues",zh:"Github issues"},text:{en:"Ideas and bug fixes recommendations.",pt:"Ideias e recomendações de correções de bugs.",es:"Ideas y recomendaciones de corrección de errores.",zh:"建议和修复 bug 的想法。"},url:"https://github.com/avictormorais/posterfy/issues"},{key:"contribute_area",title:{en:"Want to appear in the project?",pt:"Quer aparecer no projeto?",es:"¿Quieres aparecer en el proyecto?",zh:"想出现在项目中吗？"},text:{en:"The project is open source! Feel free to suggest improvements, report bugs, or submit a pull request.",pt:"O projeto é open source! Sinta-se à vontade para sugerir melhorias, reportar bugs ou enviar um pull request.",es:"¡El proyecto es open source! Siéntete libre de sugerir mejoras, reportar errores o enviar un pull request.",zh:"该项目是开源的！欢迎提出改进建议、报告错误或提交 pull request。"},url:"https://github.com/avictormorais/posterfy",button:{en:"Github Repository",pt:"Repositório no Github",es:"Repositorio en Github",zh:"Github 仓库"}}],Xa=h.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`,es=h.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`,ts=h.div`
    display: flex;
    align-items: center;
    position: relative;
`,ns=h.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,rs=h(Xn)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`,os=h.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`,is=h.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`,as=h.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`,ss=h.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`,ls=h.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`,cs=h.a`
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
`;function ds(){var s,a,d;const{i18n:e}=q(),{t}=q(),o=((s=e.language)==null?void 0:s.split("-")[0])||"en",l=pn.filter(c=>c.key!=="contribute_area"),r=pn.find(c=>c.key==="contribute_area");return n.jsxs(Xa,{id:"thanks",children:[n.jsx(he,{text:t("Thanks"),type:1}),l.map((c,u)=>n.jsxs(es,{children:[n.jsxs(ts,{children:[n.jsx(ns,{className:"circle"}),n.jsx(rs,{className:"heart"}),n.jsx(os,{tabIndex:0,role:"button",onClick:()=>window.open(c.url,"_blank","noopener,noreferrer"),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&window.open(c.url,"_blank","noopener,noreferrer")},onMouseEnter:f=>{const p=f.target.parentNode;p.querySelector(".circle").style.opacity=0,p.querySelector(".heart").style.opacity=1},onMouseLeave:f=>{const p=f.target.parentNode;p.querySelector(".circle").style.opacity=.8,p.querySelector(".heart").style.opacity=0},children:c.title[o]||c.title.en})]}),n.jsx(is,{children:c.text[o]||c.text.en})]},c.key)),r&&n.jsxs(as,{children:[n.jsx(ss,{children:r.title[o]||r.title.en}),n.jsx(ls,{children:r.text[o]||r.text.en}),n.jsx(cs,{href:r.url,target:"_blank",rel:"noopener noreferrer",children:((a=r.button)==null?void 0:a[o])||((d=r.button)==null?void 0:d.en)||"Github"})]})]})}const us=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,fs=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,hs=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function Z({title:e,value:t,onChange:o}){return n.jsxs(us,{children:[n.jsx(fs,{children:e}),n.jsx(hs,{placeholder:e,value:t,onChange:o})]})}const ps=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,ms=h.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,gs=h.input`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function mn({title:e,value:t,onChangeTitle:o,onChangeDate:l}){return n.jsxs(ps,{children:[n.jsx(ms,{placeholder:e,value:e,onChange:o}),n.jsx(gs,{placeholder:e,value:t,onChange:l})]})}const xs=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,vs=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,bs=h.div`
    font-size: .85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,ys=h.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,ws=h.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function le({title:e,value:t,onClick:o}){return n.jsxs(xs,{children:[n.jsx(vs,{children:e}),n.jsxs(bs,{onClick:o,children:[n.jsx(ys,{style:{backgroundColor:t}}),n.jsx(ws,{children:t})]})]})}function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e}).apply(this,arguments)}function ir(e,t){if(e==null)return{};var o,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)t.indexOf(o=s[l])>=0||(r[o]=e[o]);return r}function vt(e){var t=g.useRef(e),o=g.useRef(function(l){t.current&&t.current(l)});return t.current=e,o.current}var de=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=1),e>o?o:e<t?t:e},ce=function(e){return"touches"in e},bt=function(e){return e&&e.ownerDocument.defaultView||self},gn=function(e,t,o){var l=e.getBoundingClientRect(),r=ce(t)?function(s,a){for(var d=0;d<s.length;d++)if(s[d].identifier===a)return s[d];return s[0]}(t.touches,o):t;return{left:de((r.pageX-(l.left+bt(e).pageXOffset))/l.width),top:de((r.pageY-(l.top+bt(e).pageYOffset))/l.height)}},xn=function(e){!ce(e)&&e.preventDefault()},ar=U.memo(function(e){var t=e.onMove,o=e.onKey,l=ir(e,["onMove","onKey"]),r=g.useRef(null),s=vt(t),a=vt(o),d=g.useRef(null),c=g.useRef(!1),u=g.useMemo(function(){var C=function(_){xn(_),(ce(_)?_.touches.length>0:_.buttons>0)&&r.current?s(gn(r.current,_,d.current)):m(!1)},y=function(){return m(!1)};function m(_){var j=c.current,w=bt(r.current),x=_?w.addEventListener:w.removeEventListener;x(j?"touchmove":"mousemove",C),x(j?"touchend":"mouseup",y)}return[function(_){var j=_.nativeEvent,w=r.current;if(w&&(xn(j),!function(k,T){return T&&!ce(k)}(j,c.current)&&w)){if(ce(j)){c.current=!0;var x=j.changedTouches||[];x.length&&(d.current=x[0].identifier)}w.focus(),s(gn(w,j,d.current)),m(!0)}},function(_){var j=_.which||_.keyCode;j<37||j>40||(_.preventDefault(),a({left:j===39?.05:j===37?-.05:0,top:j===40?.05:j===38?-.05:0}))},m]},[a,s]),f=u[0],p=u[1],b=u[2];return g.useEffect(function(){return b},[b]),U.createElement("div",Ve({},l,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:r,onKeyDown:p,tabIndex:0,role:"slider"}))}),It=function(e){return e.filter(Boolean).join(" ")},sr=function(e){var t=e.color,o=e.left,l=e.top,r=l===void 0?.5:l,s=It(["react-colorful__pointer",e.className]);return U.createElement("div",{className:s,style:{top:100*r+"%",left:100*o+"%"}},U.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},B=function(e,t,o){return t===void 0&&(t=0),o===void 0&&(o=Math.pow(10,t)),Math.round(o*e)/o},Cs=function(e){return Ss(yt(e))},yt=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?B(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?B(parseInt(e.substring(6,8),16)/255,2):1}},_s=function(e){return Ts(js(e))},ks=function(e){var t=e.s,o=e.v,l=e.a,r=(200-t)*o/100;return{h:B(e.h),s:B(r>0&&r<200?t*o/100/(r<=100?r:200-r)*100:0),l:B(r/2),a:B(l,2)}},wt=function(e){var t=ks(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},js=function(e){var t=e.h,o=e.s,l=e.v,r=e.a;t=t/360*6,o/=100,l/=100;var s=Math.floor(t),a=l*(1-o),d=l*(1-(t-s)*o),c=l*(1-(1-t+s)*o),u=s%6;return{r:B(255*[l,d,a,a,c,l][u]),g:B(255*[c,l,l,d,a,a][u]),b:B(255*[a,a,c,l,l,d][u]),a:B(r,2)}},we=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Ts=function(e){var t=e.r,o=e.g,l=e.b,r=e.a,s=r<1?we(B(255*r)):"";return"#"+we(t)+we(o)+we(l)+s},Ss=function(e){var t=e.r,o=e.g,l=e.b,r=e.a,s=Math.max(t,o,l),a=s-Math.min(t,o,l),d=a?s===t?(o-l)/a:s===o?2+(l-t)/a:4+(t-o)/a:0;return{h:B(60*(d<0?d+6:d)),s:B(s?a/s*100:0),v:B(s/255*100),a:r}},Is=U.memo(function(e){var t=e.hue,o=e.onChange,l=It(["react-colorful__hue",e.className]);return U.createElement("div",{className:l},U.createElement(ar,{onMove:function(r){o({h:360*r.left})},onKey:function(r){o({h:de(t+360*r.left,0,360)})},"aria-label":"Hue","aria-valuenow":B(t),"aria-valuemax":"360","aria-valuemin":"0"},U.createElement(sr,{className:"react-colorful__hue-pointer",left:t/360,color:wt({h:t,s:100,v:100,a:1})})))}),Ms=U.memo(function(e){var t=e.hsva,o=e.onChange,l={backgroundColor:wt({h:t.h,s:100,v:100,a:1})};return U.createElement("div",{className:"react-colorful__saturation",style:l},U.createElement(ar,{onMove:function(r){o({s:100*r.left,v:100-100*r.top})},onKey:function(r){o({s:de(t.s+100*r.left,0,100),v:de(t.v-100*r.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+B(t.s)+"%, Brightness "+B(t.v)+"%"},U.createElement(sr,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:wt(t)})))}),lr=function(e,t){if(e===t)return!0;for(var o in e)if(e[o]!==t[o])return!1;return!0},zs=function(e,t){return e.toLowerCase()===t.toLowerCase()||lr(yt(e),yt(t))};function Rs(e,t,o){var l=vt(o),r=g.useState(function(){return e.toHsva(t)}),s=r[0],a=r[1],d=g.useRef({color:t,hsva:s});g.useEffect(function(){if(!e.equal(t,d.current.color)){var u=e.toHsva(t);d.current={hsva:u,color:t},a(u)}},[t,e]),g.useEffect(function(){var u;lr(s,d.current.hsva)||e.equal(u=e.fromHsva(s),d.current.color)||(d.current={hsva:s,color:u},l(u))},[s,e,l]);var c=g.useCallback(function(u){a(function(f){return Object.assign({},f,u)})},[]);return[s,c]}var Es=typeof window<"u"?g.useLayoutEffect:g.useEffect,As=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},vn=new Map,Os=function(e){Es(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!vn.has(t)){var o=t.createElement("style");o.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,vn.set(t,o);var l=As();l&&o.setAttribute("nonce",l),t.head.appendChild(o)}},[])},Ds=function(e){var t=e.className,o=e.colorModel,l=e.color,r=l===void 0?o.defaultColor:l,s=e.onChange,a=ir(e,["className","colorModel","color","onChange"]),d=g.useRef(null);Os(d);var c=Rs(o,r,s),u=c[0],f=c[1],p=It(["react-colorful",t]);return U.createElement("div",Ve({},a,{ref:d,className:p}),U.createElement(Ms,{hsva:u,onChange:f}),U.createElement(Is,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},Hs={defaultColor:"000",toHsva:Cs,fromHsva:function(e){return _s({h:e.h,s:e.s,v:e.v,a:1})},equal:zs},Ps=function(e){return U.createElement(Ds,Ve({},e,{colorModel:Hs}))};function Ls(e){return H({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}const $s=h.div`
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
`,Fs=h(Ps)`
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
`,lt=h.div`
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
`,Bs=h.div`
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
`,Vs=h.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
    color: var(--textColor);
`,Us=h.input`
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
`,qs=h(Ao)`
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
`,Ns=h(Do)`
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
`,Qs=h(Ls)`
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
`,Gs=h(Eo)`
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
`,Ws=h.img`
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
`;function Ys({DefaultColor:e,image:t,predefinedColors:o,position:l,onDone:r,onClose:s}){const[a,d]=g.useState(e),[c,u]=g.useState(!1),[f,p]=g.useState(null),b=g.useRef(null),C=g.useRef(null);function y(){u(!c)}function m(x){d(x.target.value===""?"#":x.target.value)}function _(x){const k=b.current,S=C.current.getBoundingClientRect(),I=k.getContext("2d"),M=Math.floor(x.clientX-S.left),R=Math.floor(x.clientY-S.top),E=`#${[...I.getImageData(M,R,1,1).data].slice(0,3).map(A=>A.toString(16).padStart(2,"0")).join("")}`;d(E),y()}function j(x){const k=b.current,S=C.current.getBoundingClientRect(),I=Math.floor(x.clientX-S.left),M=Math.floor(x.clientY-S.top);if(k){const R=k.getContext("2d");try{const E=`#${[...R.getImageData(I,M,1,1).data].slice(0,3).map(A=>A.toString(16).padStart(2,"0")).join("")}`;p(E)}catch{p(null)}}}function w(){p(null)}return n.jsxs($s,{style:{position:"absolute",top:l.top,left:l.left,zIndex:1e3},children:[n.jsx("canvas",{ref:b,style:{display:"none"}}),c?n.jsx(Ws,{ref:C,crossOrigin:"anonymous",draggable:"false",src:t,onClick:_,onMouseMove:j,onMouseLeave:w,onLoad:()=>{const x=b.current,k=x.getContext("2d"),T=C.current;x.width=T.width,x.height=T.height,k.drawImage(T,0,0,T.width,T.height)},style:f?{borderColor:f}:{}}):n.jsx(Fs,{color:a,onChange:d}),n.jsx(lt,{children:o.map(x=>n.jsx(Bs,{style:{backgroundColor:x},onClick:()=>d(x)},x))}),n.jsxs(lt,{children:[n.jsx(Vs,{children:"Hex"}),n.jsx(Us,{value:a,onChange:m})]}),n.jsxs(lt,{children:[c?n.jsx(Ns,{onClick:y}):n.jsx(qs,{onClick:y}),n.jsx(Qs,{onClick:s}),n.jsx(Gs,{onClick:()=>{r(a),xo(a)}})]})]})}const Zs=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Ks=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    color: var(--textColor);
`,Js=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Xs=h.input`
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
`,e1=h.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    color: var(--textColor);
    opacity: ${({active:e})=>e?1:.7};
    transition: opacity 0.3s;
`;function ct({title:e,text:t,value:o,onChange:l}){const r=()=>l(!o);return n.jsxs(Zs,{children:[n.jsx(Ks,{children:e}),n.jsxs(Js,{onClick:r,children:[n.jsx(Xs,{checked:o,readOnly:!0,type:"checkbox"}),n.jsx(e1,{active:o,children:t})]})]})}function t1(e){return H({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function n1(e){return H({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const r1=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,o1=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,i1=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,a1=h.input`
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
`,s1=h.p`
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
`,l1=h(t1)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function c1({title:e,text:t,onChange:o}){const l=g.useRef(),r=()=>{l.current.click()},s=a=>{const d=a.target.files[0];t=d.name,d&&o(d)};return n.jsxs(r1,{onClick:r,children:[n.jsx(o1,{children:e}),n.jsxs(i1,{children:[n.jsx(l1,{}),n.jsx(a1,{ref:l,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:s}),n.jsx(s1,{active:!0,children:t})]})]})}const d1=h.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,u1=h.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,f1=h.div`
    font-size: 0.85em;
    background-color: var(--glassBackground);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,h1=h.input`
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
`,p1=h.p`
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
`,m1=h(n1)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function g1({title:e,text:t,onChange:o}){const l=g.useRef(),r=()=>{l.current.click()},s=a=>{const d=a.target.files[0];t=d.name,d&&o(d)};return n.jsxs(d1,{onClick:r,children:[n.jsx(u1,{children:e}),n.jsxs(f1,{children:[n.jsx(m1,{}),n.jsx(h1,{ref:l,type:"file",accept:".ttf,.otf",onChange:s}),n.jsx(p1,{active:!0,children:t})]})]})}function cr(e){return H({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const x1=h.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,v1=h.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,b1=h.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,y1=h(cr)`
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
`;function dr(){const{t:e}=q();return n.jsxs(x1,{children:[n.jsx(y1,{}),n.jsx(v1,{children:e("Loading")}),n.jsx(b1,{children:e("LoadingText")})]})}var Q={};/*! *****************************************************************************
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
***************************************************************************** */var Ct=function(e,t){return Ct=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,l){o.__proto__=l}||function(o,l){for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(o[r]=l[r])},Ct(e,t)};function w1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ct(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var _t=function(){return _t=Object.assign||function(t){for(var o,l=1,r=arguments.length;l<r;l++){o=arguments[l];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}return t},_t.apply(this,arguments)};function C1(e,t){var o={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(o[l[r]]=e[l[r]]);return o}function _1(e,t,o,l){var r=arguments.length,s=r<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,o):l,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,o,l);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(s=(r<3?a(s):r>3?a(t,o,s):a(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}function k1(e,t){return function(o,l){t(o,l,e)}}function j1(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function T1(e,t,o,l){function r(s){return s instanceof o?s:new o(function(a){a(s)})}return new(o||(o=Promise))(function(s,a){function d(f){try{u(l.next(f))}catch(p){a(p)}}function c(f){try{u(l.throw(f))}catch(p){a(p)}}function u(f){f.done?s(f.value):r(f.value).then(d,c)}u((l=l.apply(e,t||[])).next())})}function S1(e,t){var o={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},l,r,s,a;return a={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function d(u){return function(f){return c([u,f])}}function c(u){if(l)throw new TypeError("Generator is already executing.");for(;o;)try{if(l=1,r&&(s=u[0]&2?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){o=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){o.label=u[1];break}if(u[0]===6&&o.label<s[1]){o.label=s[1],s=u;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(u);break}s[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(f){u=[6,f],r=0}finally{l=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var Mt=Object.create?function(e,t,o,l){l===void 0&&(l=o),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,l){l===void 0&&(l=o),e[l]=t[o]};function I1(e,t){for(var o in e)o!=="default"&&!Object.prototype.hasOwnProperty.call(t,o)&&Mt(t,e,o)}function kt(e){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&e[t],l=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&l>=e.length&&(e=void 0),{value:e&&e[l++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ur(e,t){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var l=o.call(e),r,s=[],a;try{for(;(t===void 0||t-- >0)&&!(r=l.next()).done;)s.push(r.value)}catch(d){a={error:d}}finally{try{r&&!r.done&&(o=l.return)&&o.call(l)}finally{if(a)throw a.error}}return s}function M1(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(ur(arguments[t]));return e}function z1(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var l=Array(e),r=0,t=0;t<o;t++)for(var s=arguments[t],a=0,d=s.length;a<d;a++,r++)l[r]=s[a];return l}function R1(e,t,o){if(o||arguments.length===2)for(var l=0,r=t.length,s;l<r;l++)(s||!(l in t))&&(s||(s=Array.prototype.slice.call(t,0,l)),s[l]=t[l]);return e.concat(s||t)}function ue(e){return this instanceof ue?(this.v=e,this):new ue(e)}function E1(e,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var l=o.apply(e,t||[]),r,s=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(b){l[b]&&(r[b]=function(C){return new Promise(function(y,m){s.push([b,C,y,m])>1||d(b,C)})})}function d(b,C){try{c(l[b](C))}catch(y){p(s[0][3],y)}}function c(b){b.value instanceof ue?Promise.resolve(b.value.v).then(u,f):p(s[0][2],b)}function u(b){d("next",b)}function f(b){d("throw",b)}function p(b,C){b(C),s.shift(),s.length&&d(s[0][0],s[0][1])}}function A1(e){var t,o;return t={},l("next"),l("throw",function(r){throw r}),l("return"),t[Symbol.iterator]=function(){return this},t;function l(r,s){t[r]=e[r]?function(a){return(o=!o)?{value:ue(e[r](a)),done:r==="return"}:s?s(a):a}:s}}function O1(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],o;return t?t.call(e):(e=typeof kt=="function"?kt(e):e[Symbol.iterator](),o={},l("next"),l("throw"),l("return"),o[Symbol.asyncIterator]=function(){return this},o);function l(s){o[s]=e[s]&&function(a){return new Promise(function(d,c){a=e[s](a),r(d,c,a.done,a.value)})}}function r(s,a,d,c){Promise.resolve(c).then(function(u){s({value:u,done:d})},a)}}function D1(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var H1=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P1(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)&&Mt(t,e,o);return H1(t,e),t}function L1(e){return e&&e.__esModule?e:{default:e}}function $1(e,t,o,l){if(o==="a"&&!l)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!l:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?l:o==="a"?l.call(e):l?l.value:t.get(e)}function F1(e,t,o,l,r){if(l==="m")throw new TypeError("Private method is not writable");if(l==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return l==="a"?r.call(e,o):r?r.value=o:t.set(e,o),o}const B1=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return _t},__asyncDelegator:A1,__asyncGenerator:E1,__asyncValues:O1,__await:ue,__awaiter:T1,__classPrivateFieldGet:$1,__classPrivateFieldSet:F1,__createBinding:Mt,__decorate:_1,__exportStar:I1,__extends:w1,__generator:S1,__importDefault:L1,__importStar:P1,__makeTemplateObject:D1,__metadata:j1,__param:k1,__read:ur,__rest:C1,__spread:M1,__spreadArray:R1,__spreadArrays:z1,__values:kt},Symbol.toStringTag,{value:"Module"})),K=Jr(B1);var Ce={},_e={},dt={},ke={},bn;function V1(){if(bn)return ke;bn=1,ke.__esModule=!0;var e=g;function t(o,l){e.useEffect(function(){var r=!0,s=function(){return r},a=o(s);return function(){r=!1,a&&a()}},l)}return ke.useCurrentEffect=t,ke}var je={},yn;function U1(){if(yn)return je;yn=1,je.__esModule=!0;var e=g;function t(o,l){var r=!0,s=function(){return r};return e.useEffect(function(){return function(){r=!1}},l),e.useCallback(o(s),l)}return je.useCurrentCallback=t,je}var wn;function fr(){return wn||(wn=1,function(e){function t(o){for(var l in o)e.hasOwnProperty(l)||(e[l]=o[l])}e.__esModule=!0,t(V1()),t(U1())}(dt)),dt}var ut={},Te={},Cn;function hr(){if(Cn)return Te;Cn=1,Object.defineProperty(Te,"__esModule",{value:!0});var e={loading:!0,data:void 0,error:void 0};return Te.default=e,Te}var Se={},_n;function q1(){if(_n)return Se;_n=1,Object.defineProperty(Se,"__esModule",{value:!0});var e=K,t=e.__importDefault(hr());function o(l,r){var s={start:function(){return t.default},resolve:function(){return e.__assign(e.__assign({},l),{data:r.payload,loading:!1})},reject:function(){return e.__assign(e.__assign({},l),{error:r.payload,loading:!1})}};return s[r.type]()}return Se.default=o,Se}var Ie={},ft,kn;function N1(){return kn||(kn=1,ft={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),ft}var ht,jn;function pr(){if(jn)return ht;jn=1;const e=N1(),t={};for(const r of Object.keys(e))t[e[r]]=r;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};ht=o;for(const r of Object.keys(o)){if(!("channels"in o[r]))throw new Error("missing channels property: "+r);if(!("labels"in o[r]))throw new Error("missing channel labels property: "+r);if(o[r].labels.length!==o[r].channels)throw new Error("channel and label counts mismatch: "+r);const{channels:s,labels:a}=o[r];delete o[r].channels,delete o[r].labels,Object.defineProperty(o[r],"channels",{value:s}),Object.defineProperty(o[r],"labels",{value:a})}o.rgb.hsl=function(r){const s=r[0]/255,a=r[1]/255,d=r[2]/255,c=Math.min(s,a,d),u=Math.max(s,a,d),f=u-c;let p,b;u===c?p=0:s===u?p=(a-d)/f:a===u?p=2+(d-s)/f:d===u&&(p=4+(s-a)/f),p=Math.min(p*60,360),p<0&&(p+=360);const C=(c+u)/2;return u===c?b=0:C<=.5?b=f/(u+c):b=f/(2-u-c),[p,b*100,C*100]},o.rgb.hsv=function(r){let s,a,d,c,u;const f=r[0]/255,p=r[1]/255,b=r[2]/255,C=Math.max(f,p,b),y=C-Math.min(f,p,b),m=function(_){return(C-_)/6/y+1/2};return y===0?(c=0,u=0):(u=y/C,s=m(f),a=m(p),d=m(b),f===C?c=d-a:p===C?c=1/3+s-d:b===C&&(c=2/3+a-s),c<0?c+=1:c>1&&(c-=1)),[c*360,u*100,C*100]},o.rgb.hwb=function(r){const s=r[0],a=r[1];let d=r[2];const c=o.rgb.hsl(r)[0],u=1/255*Math.min(s,Math.min(a,d));return d=1-1/255*Math.max(s,Math.max(a,d)),[c,u*100,d*100]},o.rgb.cmyk=function(r){const s=r[0]/255,a=r[1]/255,d=r[2]/255,c=Math.min(1-s,1-a,1-d),u=(1-s-c)/(1-c)||0,f=(1-a-c)/(1-c)||0,p=(1-d-c)/(1-c)||0;return[u*100,f*100,p*100,c*100]};function l(r,s){return(r[0]-s[0])**2+(r[1]-s[1])**2+(r[2]-s[2])**2}return o.rgb.keyword=function(r){const s=t[r];if(s)return s;let a=1/0,d;for(const c of Object.keys(e)){const u=e[c],f=l(r,u);f<a&&(a=f,d=c)}return d},o.keyword.rgb=function(r){return e[r]},o.rgb.xyz=function(r){let s=r[0]/255,a=r[1]/255,d=r[2]/255;s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,d=d>.04045?((d+.055)/1.055)**2.4:d/12.92;const c=s*.4124+a*.3576+d*.1805,u=s*.2126+a*.7152+d*.0722,f=s*.0193+a*.1192+d*.9505;return[c*100,u*100,f*100]},o.rgb.lab=function(r){const s=o.rgb.xyz(r);let a=s[0],d=s[1],c=s[2];a/=95.047,d/=100,c/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,d=d>.008856?d**(1/3):7.787*d+16/116,c=c>.008856?c**(1/3):7.787*c+16/116;const u=116*d-16,f=500*(a-d),p=200*(d-c);return[u,f,p]},o.hsl.rgb=function(r){const s=r[0]/360,a=r[1]/100,d=r[2]/100;let c,u,f;if(a===0)return f=d*255,[f,f,f];d<.5?c=d*(1+a):c=d+a-d*a;const p=2*d-c,b=[0,0,0];for(let C=0;C<3;C++)u=s+1/3*-(C-1),u<0&&u++,u>1&&u--,6*u<1?f=p+(c-p)*6*u:2*u<1?f=c:3*u<2?f=p+(c-p)*(2/3-u)*6:f=p,b[C]=f*255;return b},o.hsl.hsv=function(r){const s=r[0];let a=r[1]/100,d=r[2]/100,c=a;const u=Math.max(d,.01);d*=2,a*=d<=1?d:2-d,c*=u<=1?u:2-u;const f=(d+a)/2,p=d===0?2*c/(u+c):2*a/(d+a);return[s,p*100,f*100]},o.hsv.rgb=function(r){const s=r[0]/60,a=r[1]/100;let d=r[2]/100;const c=Math.floor(s)%6,u=s-Math.floor(s),f=255*d*(1-a),p=255*d*(1-a*u),b=255*d*(1-a*(1-u));switch(d*=255,c){case 0:return[d,b,f];case 1:return[p,d,f];case 2:return[f,d,b];case 3:return[f,p,d];case 4:return[b,f,d];case 5:return[d,f,p]}},o.hsv.hsl=function(r){const s=r[0],a=r[1]/100,d=r[2]/100,c=Math.max(d,.01);let u,f;f=(2-a)*d;const p=(2-a)*c;return u=a*c,u/=p<=1?p:2-p,u=u||0,f/=2,[s,u*100,f*100]},o.hwb.rgb=function(r){const s=r[0]/360;let a=r[1]/100,d=r[2]/100;const c=a+d;let u;c>1&&(a/=c,d/=c);const f=Math.floor(6*s),p=1-d;u=6*s-f,f&1&&(u=1-u);const b=a+u*(p-a);let C,y,m;switch(f){default:case 6:case 0:C=p,y=b,m=a;break;case 1:C=b,y=p,m=a;break;case 2:C=a,y=p,m=b;break;case 3:C=a,y=b,m=p;break;case 4:C=b,y=a,m=p;break;case 5:C=p,y=a,m=b;break}return[C*255,y*255,m*255]},o.cmyk.rgb=function(r){const s=r[0]/100,a=r[1]/100,d=r[2]/100,c=r[3]/100,u=1-Math.min(1,s*(1-c)+c),f=1-Math.min(1,a*(1-c)+c),p=1-Math.min(1,d*(1-c)+c);return[u*255,f*255,p*255]},o.xyz.rgb=function(r){const s=r[0]/100,a=r[1]/100,d=r[2]/100;let c,u,f;return c=s*3.2406+a*-1.5372+d*-.4986,u=s*-.9689+a*1.8758+d*.0415,f=s*.0557+a*-.204+d*1.057,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,f=f>.0031308?1.055*f**(1/2.4)-.055:f*12.92,c=Math.min(Math.max(0,c),1),u=Math.min(Math.max(0,u),1),f=Math.min(Math.max(0,f),1),[c*255,u*255,f*255]},o.xyz.lab=function(r){let s=r[0],a=r[1],d=r[2];s/=95.047,a/=100,d/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,d=d>.008856?d**(1/3):7.787*d+16/116;const c=116*a-16,u=500*(s-a),f=200*(a-d);return[c,u,f]},o.lab.xyz=function(r){const s=r[0],a=r[1],d=r[2];let c,u,f;u=(s+16)/116,c=a/500+u,f=u-d/200;const p=u**3,b=c**3,C=f**3;return u=p>.008856?p:(u-16/116)/7.787,c=b>.008856?b:(c-16/116)/7.787,f=C>.008856?C:(f-16/116)/7.787,c*=95.047,u*=100,f*=108.883,[c,u,f]},o.lab.lch=function(r){const s=r[0],a=r[1],d=r[2];let c;c=Math.atan2(d,a)*360/2/Math.PI,c<0&&(c+=360);const f=Math.sqrt(a*a+d*d);return[s,f,c]},o.lch.lab=function(r){const s=r[0],a=r[1],c=r[2]/360*2*Math.PI,u=a*Math.cos(c),f=a*Math.sin(c);return[s,u,f]},o.rgb.ansi16=function(r,s=null){const[a,d,c]=r;let u=s===null?o.rgb.hsv(r)[2]:s;if(u=Math.round(u/50),u===0)return 30;let f=30+(Math.round(c/255)<<2|Math.round(d/255)<<1|Math.round(a/255));return u===2&&(f+=60),f},o.hsv.ansi16=function(r){return o.rgb.ansi16(o.hsv.rgb(r),r[2])},o.rgb.ansi256=function(r){const s=r[0],a=r[1],d=r[2];return s===a&&a===d?s<8?16:s>248?231:Math.round((s-8)/247*24)+232:16+36*Math.round(s/255*5)+6*Math.round(a/255*5)+Math.round(d/255*5)},o.ansi16.rgb=function(r){let s=r%10;if(s===0||s===7)return r>50&&(s+=3.5),s=s/10.5*255,[s,s,s];const a=(~~(r>50)+1)*.5,d=(s&1)*a*255,c=(s>>1&1)*a*255,u=(s>>2&1)*a*255;return[d,c,u]},o.ansi256.rgb=function(r){if(r>=232){const u=(r-232)*10+8;return[u,u,u]}r-=16;let s;const a=Math.floor(r/36)/5*255,d=Math.floor((s=r%36)/6)/5*255,c=s%6/5*255;return[a,d,c]},o.rgb.hex=function(r){const a=(((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255)).toString(16).toUpperCase();return"000000".substring(a.length)+a},o.hex.rgb=function(r){const s=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!s)return[0,0,0];let a=s[0];s[0].length===3&&(a=a.split("").map(p=>p+p).join(""));const d=parseInt(a,16),c=d>>16&255,u=d>>8&255,f=d&255;return[c,u,f]},o.rgb.hcg=function(r){const s=r[0]/255,a=r[1]/255,d=r[2]/255,c=Math.max(Math.max(s,a),d),u=Math.min(Math.min(s,a),d),f=c-u;let p,b;return f<1?p=u/(1-f):p=0,f<=0?b=0:c===s?b=(a-d)/f%6:c===a?b=2+(d-s)/f:b=4+(s-a)/f,b/=6,b%=1,[b*360,f*100,p*100]},o.hsl.hcg=function(r){const s=r[1]/100,a=r[2]/100,d=a<.5?2*s*a:2*s*(1-a);let c=0;return d<1&&(c=(a-.5*d)/(1-d)),[r[0],d*100,c*100]},o.hsv.hcg=function(r){const s=r[1]/100,a=r[2]/100,d=s*a;let c=0;return d<1&&(c=(a-d)/(1-d)),[r[0],d*100,c*100]},o.hcg.rgb=function(r){const s=r[0]/360,a=r[1]/100,d=r[2]/100;if(a===0)return[d*255,d*255,d*255];const c=[0,0,0],u=s%1*6,f=u%1,p=1-f;let b=0;switch(Math.floor(u)){case 0:c[0]=1,c[1]=f,c[2]=0;break;case 1:c[0]=p,c[1]=1,c[2]=0;break;case 2:c[0]=0,c[1]=1,c[2]=f;break;case 3:c[0]=0,c[1]=p,c[2]=1;break;case 4:c[0]=f,c[1]=0,c[2]=1;break;default:c[0]=1,c[1]=0,c[2]=p}return b=(1-a)*d,[(a*c[0]+b)*255,(a*c[1]+b)*255,(a*c[2]+b)*255]},o.hcg.hsv=function(r){const s=r[1]/100,a=r[2]/100,d=s+a*(1-s);let c=0;return d>0&&(c=s/d),[r[0],c*100,d*100]},o.hcg.hsl=function(r){const s=r[1]/100,d=r[2]/100*(1-s)+.5*s;let c=0;return d>0&&d<.5?c=s/(2*d):d>=.5&&d<1&&(c=s/(2*(1-d))),[r[0],c*100,d*100]},o.hcg.hwb=function(r){const s=r[1]/100,a=r[2]/100,d=s+a*(1-s);return[r[0],(d-s)*100,(1-d)*100]},o.hwb.hcg=function(r){const s=r[1]/100,d=1-r[2]/100,c=d-s;let u=0;return c<1&&(u=(d-c)/(1-c)),[r[0],c*100,u*100]},o.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},o.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},o.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},o.gray.hsl=function(r){return[0,0,r[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(r){return[0,100,r[0]]},o.gray.cmyk=function(r){return[0,0,0,r[0]]},o.gray.lab=function(r){return[r[0],0,0]},o.gray.hex=function(r){const s=Math.round(r[0]/100*255)&255,d=((s<<16)+(s<<8)+s).toString(16).toUpperCase();return"000000".substring(d.length)+d},o.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]},ht}var pt,Tn;function Q1(){if(Tn)return pt;Tn=1;const e=pr();function t(){const s={},a=Object.keys(e);for(let d=a.length,c=0;c<d;c++)s[a[c]]={distance:-1,parent:null};return s}function o(s){const a=t(),d=[s];for(a[s].distance=0;d.length;){const c=d.pop(),u=Object.keys(e[c]);for(let f=u.length,p=0;p<f;p++){const b=u[p],C=a[b];C.distance===-1&&(C.distance=a[c].distance+1,C.parent=c,d.unshift(b))}}return a}function l(s,a){return function(d){return a(s(d))}}function r(s,a){const d=[a[s].parent,s];let c=e[a[s].parent][s],u=a[s].parent;for(;a[u].parent;)d.unshift(a[u].parent),c=l(e[a[u].parent][u],c),u=a[u].parent;return c.conversion=d,c}return pt=function(s){const a=o(s),d={},c=Object.keys(a);for(let u=c.length,f=0;f<u;f++){const p=c[f];a[p].parent!==null&&(d[p]=r(p,a))}return d},pt}var mt,Sn;function G1(){if(Sn)return mt;Sn=1;const e=pr(),t=Q1(),o={},l=Object.keys(e);function r(a){const d=function(...c){const u=c[0];return u==null?u:(u.length>1&&(c=u),a(c))};return"conversion"in a&&(d.conversion=a.conversion),d}function s(a){const d=function(...c){const u=c[0];if(u==null)return u;u.length>1&&(c=u);const f=a(c);if(typeof f=="object")for(let p=f.length,b=0;b<p;b++)f[b]=Math.round(f[b]);return f};return"conversion"in a&&(d.conversion=a.conversion),d}return l.forEach(a=>{o[a]={},Object.defineProperty(o[a],"channels",{value:e[a].channels}),Object.defineProperty(o[a],"labels",{value:e[a].labels});const d=t(a);Object.keys(d).forEach(u=>{const f=d[u];o[a][u]=s(f),o[a][u].raw=r(f)})}),mt=o,mt}var Me={},In;function mr(){if(In)return Me;In=1,Object.defineProperty(Me,"__esModule",{value:!0});function e(t,o,l){return"rgb("+t+", "+o+", "+l+")"}return Me.default=e,Me}var ze={},Mn;function W1(){if(Mn)return ze;Mn=1,Object.defineProperty(ze,"__esModule",{value:!0});function e(t){return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}return ze.default=e,ze}var Re={},zn;function Y1(){if(zn)return Re;zn=1,Object.defineProperty(Re,"__esModule",{value:!0});function e(t){return"#"+t.toLowerCase()}return Re.default=e,Re}var Rn;function Z1(){if(Rn)return Ie;Rn=1,Object.defineProperty(Ie,"__esModule",{value:!0});var e=K,t=e.__importDefault(G1()),o=e.__importDefault(mr()),l=e.__importDefault(W1()),r=e.__importDefault(Y1());function s(a,d){var c={rgbString:function(){return o.default.apply(void 0,a)},hex:function(){var u;return r.default((u=t.default.rgb).hex.apply(u,a))},rgbArray:function(){return a},hslString:function(){var u;return l.default((u=t.default.rgb).hsl.apply(u,a))},hslArray:function(){var u;return(u=t.default.rgb).hsl.apply(u,a)},keyword:function(){var u;return(u=t.default.rgb).keyword.apply(u,a)}};return c[d]()}return Ie.default=s,Ie}var Ee={},gt={exports:{}},En;function gr(){return En||(En=1,function(e,t){(function(o,l){e.exports=l()})(xt,function(){if(!o)var o={map:function(a,d){var c={};return d?a.map(function(u,f){return c.index=f,d.call(c,u)}):a.slice()},naturalOrder:function(a,d){return a<d?-1:a>d?1:0},sum:function(a,d){var c={};return a.reduce(d?function(u,f,p){return c.index=p,u+d.call(c,f)}:function(u,f){return u+f},0)},max:function(a,d){return Math.max.apply(null,d?o.map(a,d):a)}};var l=function(){var a=5,d=8-a,c=1e3;function u(y,m,_){return(y<<2*a)+(m<<a)+_}function f(y){var m=[],_=!1;function j(){m.sort(y),_=!0}return{push:function(w){m.push(w),_=!1},peek:function(w){return _||j(),w===void 0&&(w=m.length-1),m[w]},pop:function(){return _||j(),m.pop()},size:function(){return m.length},map:function(w){return m.map(w)},debug:function(){return _||j(),m}}}function p(y,m,_,j,w,x,k){this.r1=y,this.r2=m,this.g1=_,this.g2=j,this.b1=w,this.b2=x,this.histo=k}function b(){this.vboxes=new f(function(y,m){return o.naturalOrder(y.vbox.count()*y.vbox.volume(),m.vbox.count()*m.vbox.volume())})}function C(y,m){if(m.count()){var _=m.r2-m.r1+1,j=m.g2-m.g1+1,w=o.max([_,j,m.b2-m.b1+1]);if(m.count()==1)return[m.copy()];var x,k,T,S,I=0,M=[],R=[];if(w==_)for(x=m.r1;x<=m.r2;x++){for(S=0,k=m.g1;k<=m.g2;k++)for(T=m.b1;T<=m.b2;T++)S+=y[u(x,k,T)]||0;M[x]=I+=S}else if(w==j)for(x=m.g1;x<=m.g2;x++){for(S=0,k=m.r1;k<=m.r2;k++)for(T=m.b1;T<=m.b2;T++)S+=y[u(k,x,T)]||0;M[x]=I+=S}else for(x=m.b1;x<=m.b2;x++){for(S=0,k=m.r1;k<=m.r2;k++)for(T=m.g1;T<=m.g2;T++)S+=y[u(k,T,x)]||0;M[x]=I+=S}return M.forEach(function(z,E){R[E]=I-z}),function(z){var E,A,P,$,L,V=z+"1",G=z+"2",J=0;for(x=m[V];x<=m[G];x++)if(M[x]>I/2){for(P=m.copy(),$=m.copy(),L=(E=x-m[V])<=(A=m[G]-x)?Math.min(m[G]-1,~~(x+A/2)):Math.max(m[V],~~(x-1-E/2));!M[L];)L++;for(J=R[L];!J&&M[L-1];)J=R[--L];return P[G]=L,$[V]=P[G]+1,[P,$]}}(w==_?"r":w==j?"g":"b")}}return p.prototype={volume:function(y){return this._volume&&!y||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(y){var m=this.histo;if(!this._count_set||y){var _,j,w,x=0;for(_=this.r1;_<=this.r2;_++)for(j=this.g1;j<=this.g2;j++)for(w=this.b1;w<=this.b2;w++)x+=m[u(_,j,w)]||0;this._count=x,this._count_set=!0}return this._count},copy:function(){return new p(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(y){var m=this.histo;if(!this._avg||y){var _,j,w,x,k=0,T=1<<8-a,S=0,I=0,M=0;for(j=this.r1;j<=this.r2;j++)for(w=this.g1;w<=this.g2;w++)for(x=this.b1;x<=this.b2;x++)k+=_=m[u(j,w,x)]||0,S+=_*(j+.5)*T,I+=_*(w+.5)*T,M+=_*(x+.5)*T;this._avg=k?[~~(S/k),~~(I/k),~~(M/k)]:[~~(T*(this.r1+this.r2+1)/2),~~(T*(this.g1+this.g2+1)/2),~~(T*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(y){var m=y[0]>>d;return gval=y[1]>>d,bval=y[2]>>d,m>=this.r1&&m<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},b.prototype={push:function(y){this.vboxes.push({vbox:y,color:y.avg()})},palette:function(){return this.vboxes.map(function(y){return y.color})},size:function(){return this.vboxes.size()},map:function(y){for(var m=this.vboxes,_=0;_<m.size();_++)if(m.peek(_).vbox.contains(y))return m.peek(_).color;return this.nearest(y)},nearest:function(y){for(var m,_,j,w=this.vboxes,x=0;x<w.size();x++)((_=Math.sqrt(Math.pow(y[0]-w.peek(x).color[0],2)+Math.pow(y[1]-w.peek(x).color[1],2)+Math.pow(y[2]-w.peek(x).color[2],2)))<m||m===void 0)&&(m=_,j=w.peek(x).color);return j},forcebw:function(){var y=this.vboxes;y.sort(function(w,x){return o.naturalOrder(o.sum(w.color),o.sum(x.color))});var m=y[0].color;m[0]<5&&m[1]<5&&m[2]<5&&(y[0].color=[0,0,0]);var _=y.length-1,j=y[_].color;j[0]>251&&j[1]>251&&j[2]>251&&(y[_].color=[255,255,255])}},{quantize:function(y,m){if(!y.length||m<2||m>256)return!1;var _=function(S){var I,M=new Array(1<<3*a);return S.forEach(function(R){I=u(R[0]>>d,R[1]>>d,R[2]>>d),M[I]=(M[I]||0)+1}),M}(y);_.forEach(function(){});var j=function(S,I){var M,R,z,E=1e6,A=0,P=1e6,$=0,L=1e6,V=0;return S.forEach(function(G){(M=G[0]>>d)<E?E=M:M>A&&(A=M),(R=G[1]>>d)<P?P=R:R>$&&($=R),(z=G[2]>>d)<L?L=z:z>V&&(V=z)}),new p(E,A,P,$,L,V,I)}(y,_),w=new f(function(S,I){return o.naturalOrder(S.count(),I.count())});function x(S,I){for(var M,R=S.size(),z=0;z<c;){if(R>=I||z++>c)return;if((M=S.pop()).count()){var E=C(_,M),A=E[0],P=E[1];if(!A)return;S.push(A),P&&(S.push(P),R++)}else S.push(M),z++}}w.push(j),x(w,.75*m);for(var k=new f(function(S,I){return o.naturalOrder(S.count()*S.volume(),I.count()*I.volume())});w.size();)k.push(w.pop());x(k,m);for(var T=new b;k.size();)T.push(k.pop());return T}}}().quantize,r=function(a){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=a.naturalWidth,this.height=this.canvas.height=a.naturalHeight,this.context.drawImage(a,0,0,this.width,this.height)};r.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var s=function(){};return s.prototype.getColor=function(a,d){return d===void 0&&(d=10),this.getPalette(a,5,d)[0]},s.prototype.getPalette=function(a,d,c){var u=function(C){var y=C.colorCount,m=C.quality;if(y!==void 0&&Number.isInteger(y)){if(y===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");y=Math.max(y,2),y=Math.min(y,20)}else y=10;return(m===void 0||!Number.isInteger(m)||m<1)&&(m=10),{colorCount:y,quality:m}}({colorCount:d,quality:c}),f=new r(a),p=function(C,y,m){for(var _=C,j=[],w=0,x=void 0,k=void 0,T=void 0,S=void 0,I=void 0;w<y;w+=m)k=_[0+(x=4*w)],T=_[x+1],S=_[x+2],((I=_[x+3])===void 0||I>=125)&&(k>250&&T>250&&S>250||j.push([k,T,S]));return j}(f.getImageData().data,f.width*f.height,u.quality),b=l(p,u.colorCount);return b?b.palette():null},s.prototype.getColorFromUrl=function(a,d,c){var u=this,f=document.createElement("img");f.addEventListener("load",function(){var p=u.getPalette(f,5,c);d(p[0],a)}),f.src=a},s.prototype.getImageData=function(a,d){var c=new XMLHttpRequest;c.open("GET",a,!0),c.responseType="arraybuffer",c.onload=function(){if(this.status==200){var u=new Uint8Array(this.response);i=u.length;for(var f=new Array(i),p=0;p<u.length;p++)f[p]=String.fromCharCode(u[p]);var b=f.join(""),C=window.btoa(b);d("data:image/png;base64,"+C)}},c.send()},s.prototype.getColorAsync=function(a,d,c){var u=this;this.getImageData(a,function(f){var p=document.createElement("img");p.addEventListener("load",function(){var b=u.getPalette(p,5,c);d(b[0],this)}),p.src=f})},s})}(gt)),gt.exports}var An;function xr(){if(An)return Ee;An=1,Object.defineProperty(Ee,"__esModule",{value:!0});var e=K,t=e.__importDefault(gr()),o=Ue();function l(r,s,a,d,c){return s===void 0&&(s=2),d===void 0&&(d=null),c===void 0&&(c=10),e.__awaiter(this,void 0,void 0,function(){var u,f,p;return e.__generator(this,function(b){switch(b.label){case 0:return[4,o.loadImage(r,d)];case 1:return u=b.sent(),f=new t.default,p=f.getPalette(u,s,c),[2,p.map(function(C){return o.formatRGB(C,a)})]}})})}return Ee.default=l,Ee}var Ae={},On;function vr(){if(On)return Ae;On=1,Object.defineProperty(Ae,"__esModule",{value:!0});var e=K,t=e.__importDefault(gr()),o=Ue();function l(r,s,a,d){return a===void 0&&(a=null),d===void 0&&(d=10),e.__awaiter(this,void 0,void 0,function(){var c,u,f;return e.__generator(this,function(p){switch(p.label){case 0:return[4,o.loadImage(r,a)];case 1:return c=p.sent(),u=new t.default,f=u.getColor(c,d),[2,o.formatRGB(f,s)]}})})}return Ae.default=l,Ae}var Oe={},Dn;function K1(){if(Dn)return Oe;Dn=1,Object.defineProperty(Oe,"__esModule",{value:!0});function e(t,o){return o===void 0&&(o=null),new Promise(function(l,r){var s=new Image;s.addEventListener("load",function(){l(s)}),s.addEventListener("error",function(){r(new Error("Color Thief React | Failed to load image URL: "+t))}),s.crossOrigin=o,s.src=t})}return Oe.default=e,Oe}var Hn;function Ue(){return Hn||(Hn=1,function(e){var t=xt&&xt.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadImage=e.getPredominantColorFromImgURL=e.rgbStringfy=e.getColorsPaletteFromImgUrl=e.formatRGB=e.reducer=e.initialReducerState=void 0;var o=hr();Object.defineProperty(e,"initialReducerState",{enumerable:!0,get:function(){return t(o).default}});var l=q1();Object.defineProperty(e,"reducer",{enumerable:!0,get:function(){return t(l).default}});var r=Z1();Object.defineProperty(e,"formatRGB",{enumerable:!0,get:function(){return t(r).default}});var s=xr();Object.defineProperty(e,"getColorsPaletteFromImgUrl",{enumerable:!0,get:function(){return t(s).default}});var a=mr();Object.defineProperty(e,"rgbStringfy",{enumerable:!0,get:function(){return t(a).default}});var d=vr();Object.defineProperty(e,"getPredominantColorFromImgURL",{enumerable:!0,get:function(){return t(d).default}});var c=K1();Object.defineProperty(e,"loadImage",{enumerable:!0,get:function(){return t(c).default}})}(ut)),ut}var Pn;function br(){if(Pn)return _e;Pn=1,Object.defineProperty(_e,"__esModule",{value:!0});var e=K,t=e.__importStar(g),o=fr(),l=Ue();function r(s,a,d){d===void 0&&(d={});var c=d.crossOrigin,u=c===void 0?null:c,f=d.quality,p=f===void 0?10:f,b=t.useReducer(l.reducer,l.initialReducerState),C=b[0],y=b[1];return o.useCurrentEffect(function(m){y({type:"start",payload:null}),l.getPredominantColorFromImgURL(s,a,u,p).then(function(_){m()&&y({type:"resolve",payload:_})}).catch(function(_){m()&&y({type:"reject",payload:_})})},[s]),C}return _e.default=r,_e}var Ln;function J1(){if(Ln)return Ce;Ln=1,Object.defineProperty(Ce,"__esModule",{value:!0});var e=K,t=e.__importStar(g),o=e.__importDefault(br());function l(r){var s=r.src,a=r.format,d=r.crossOrigin,c=d===void 0?void 0:d,u=r.quality,f=u===void 0?10:u,p=r.children,b=o.default(s,a,{crossOrigin:c,quality:f});return t.createElement(t.Fragment,null,p(b))}return Ce.default=l,Ce}var De={},He={},$n;function yr(){if($n)return He;$n=1,Object.defineProperty(He,"__esModule",{value:!0});var e=K,t=e.__importStar(g),o=fr(),l=Ue();function r(s,a,d,c){a===void 0&&(a=2),c===void 0&&(c={});var u=c.crossOrigin,f=u===void 0?null:u,p=c.quality,b=p===void 0?10:p,C=t.useReducer(l.reducer,l.initialReducerState),y=C[0],m=C[1];return o.useCurrentEffect(function(_){m({type:"start",payload:null}),l.getColorsPaletteFromImgUrl(s,a,d,f,b).then(function(j){_()&&m({type:"resolve",payload:j})}).catch(function(j){_()&&m({type:"reject",payload:j})})},[s]),y}return He.default=r,He}var Fn;function X1(){if(Fn)return De;Fn=1,Object.defineProperty(De,"__esModule",{value:!0});var e=K,t=e.__importStar(g),o=e.__importDefault(yr());function l(r){var s=r.src,a=r.colorCount,d=a===void 0?2:a,c=r.format,u=r.crossOrigin,f=u===void 0?void 0:u,p=r.quality,b=p===void 0?10:p,C=r.children,y=o.default(s,d,c,{crossOrigin:f,quality:b});return t.createElement(t.Fragment,null,C(y))}return De.default=l,De}Object.defineProperty(Q,"__esModule",{value:!0});Q.getPalette=Q.usePalette=Cr=Q.Palette=Q.getColor=Q.Color=Q.useColor=void 0;var ne=K,wr=ne.__importDefault(J1());Q.Color=wr.default;var el=ne.__importDefault(br());Q.useColor=el.default;var tl=ne.__importDefault(xr());Q.getPalette=tl.default;var nl=ne.__importDefault(X1()),Cr=Q.Palette=nl.default,rl=ne.__importDefault(yr());Q.usePalette=rl.default;var ol=ne.__importDefault(vr());Q.getColor=ol.default;Q.default=wr.default;const il=(e,t=500,o=134)=>`
        <svg width="${t}" height="${o}" viewBox="0 0 152 38" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.992 28V11.2H55.264C56.768 11.2 58.064 11.448 59.152 11.944C60.24 12.424 61.08 13.12 61.672 14.032C62.264 14.944 62.56 16.032 62.56 17.296C62.56 18.544 62.264 19.624 61.672 20.536C61.08 21.448 60.24 22.152 59.152 22.648C58.064 23.128 56.768 23.368 55.264 23.368H50.152L51.88 21.616V28H47.992ZM51.88 22.048L50.152 20.2H55.048C56.248 20.2 57.144 19.944 57.736 19.432C58.328 18.92 58.624 18.208 58.624 17.296C58.624 16.368 58.328 15.648 57.736 15.136C57.144 14.624 56.248 14.368 55.048 14.368H50.152L51.88 12.52V22.048ZM71.1923 28.192C69.8163 28.192 68.5923 27.904 67.5203 27.328C66.4643 26.752 65.6243 25.968 65.0003 24.976C64.3923 23.968 64.0883 22.824 64.0883 21.544C64.0883 20.248 64.3923 19.104 65.0003 18.112C65.6243 17.104 66.4643 16.32 67.5203 15.76C68.5923 15.184 69.8163 14.896 71.1923 14.896C72.5523 14.896 73.7683 15.184 74.8403 15.76C75.9123 16.32 76.7523 17.096 77.3603 18.088C77.9683 19.08 78.2723 20.232 78.2723 21.544C78.2723 22.824 77.9683 23.968 77.3603 24.976C76.7523 25.968 75.9123 26.752 74.8403 27.328C73.7683 27.904 72.5523 28.192 71.1923 28.192ZM71.1923 25.12C71.8163 25.12 72.3763 24.976 72.8723 24.688C73.3683 24.4 73.7603 23.992 74.0483 23.464C74.3363 22.92 74.4803 22.28 74.4803 21.544C74.4803 20.792 74.3363 20.152 74.0483 19.624C73.7603 19.096 73.3683 18.688 72.8723 18.4C72.3763 18.112 71.8163 17.968 71.1923 17.968C70.5683 17.968 70.0083 18.112 69.5123 18.4C69.0163 18.688 68.6163 19.096 68.3123 19.624C68.0243 20.152 67.8803 20.792 67.8803 21.544C67.8803 22.28 68.0243 22.92 68.3123 23.464C68.6163 23.992 69.0163 24.4 69.5123 24.688C70.0083 24.976 70.5683 25.12 71.1923 25.12ZM85.1189 28.192C84.0149 28.192 82.9509 28.064 81.9269 27.808C80.9189 27.536 80.1189 27.2 79.5269 26.8L80.7749 24.112C81.3669 24.48 82.0629 24.784 82.8629 25.024C83.6789 25.248 84.4789 25.36 85.2629 25.36C86.1269 25.36 86.7349 25.256 87.0869 25.048C87.4549 24.84 87.6389 24.552 87.6389 24.184C87.6389 23.88 87.4949 23.656 87.2069 23.512C86.9349 23.352 86.5669 23.232 86.1029 23.152C85.6389 23.072 85.1269 22.992 84.5669 22.912C84.0229 22.832 83.4709 22.728 82.9109 22.6C82.3509 22.456 81.8389 22.248 81.3749 21.976C80.9109 21.704 80.5349 21.336 80.2469 20.872C79.9749 20.408 79.8389 19.808 79.8389 19.072C79.8389 18.256 80.0709 17.536 80.5349 16.912C81.0149 16.288 81.7029 15.8 82.5989 15.448C83.4949 15.08 84.5669 14.896 85.8149 14.896C86.6949 14.896 87.5909 14.992 88.5029 15.184C89.4149 15.376 90.1749 15.656 90.7829 16.024L89.5349 18.688C88.9109 18.32 88.2789 18.072 87.6389 17.944C87.0149 17.8 86.4069 17.728 85.8149 17.728C84.9829 17.728 84.3749 17.84 83.9909 18.064C83.6069 18.288 83.4149 18.576 83.4149 18.928C83.4149 19.248 83.5509 19.488 83.8229 19.648C84.1109 19.808 84.4869 19.936 84.9509 20.032C85.4149 20.128 85.9189 20.216 86.4629 20.296C87.0229 20.36 87.5829 20.464 88.1429 20.608C88.7029 20.752 89.2069 20.96 89.6549 21.232C90.1189 21.488 90.4949 21.848 90.7829 22.312C91.0709 22.76 91.2149 23.352 91.2149 24.088C91.2149 24.888 90.9749 25.6 90.4949 26.224C90.0149 26.832 89.3189 27.312 88.4069 27.664C87.5109 28.016 86.4149 28.192 85.1189 28.192ZM98.8049 28.192C97.2849 28.192 96.1009 27.808 95.2529 27.04C94.4049 26.256 93.9809 25.096 93.9809 23.56V12.232H97.7249V23.512C97.7249 24.056 97.8689 24.48 98.1569 24.784C98.4449 25.072 98.8369 25.216 99.3329 25.216C99.9249 25.216 100.429 25.056 100.845 24.736L101.853 27.376C101.469 27.648 101.005 27.856 100.461 28C99.9329 28.128 99.3809 28.192 98.8049 28.192ZM91.9889 18.256V15.376H100.941V18.256H91.9889ZM109.964 28.192C108.492 28.192 107.196 27.904 106.076 27.328C104.972 26.752 104.116 25.968 103.508 24.976C102.9 23.968 102.596 22.824 102.596 21.544C102.596 20.248 102.892 19.104 103.484 18.112C104.092 17.104 104.916 16.32 105.956 15.76C106.996 15.184 108.172 14.896 109.484 14.896C110.748 14.896 111.884 15.168 112.892 15.712C113.916 16.24 114.724 17.008 115.316 18.016C115.908 19.008 116.204 20.2 116.204 21.592C116.204 21.736 116.196 21.904 116.18 22.096C116.164 22.272 116.148 22.44 116.132 22.6H105.644V20.416H114.164L112.724 21.064C112.724 20.392 112.588 19.808 112.316 19.312C112.044 18.816 111.668 18.432 111.188 18.16C110.708 17.872 110.148 17.728 109.508 17.728C108.868 17.728 108.3 17.872 107.804 18.16C107.324 18.432 106.948 18.824 106.676 19.336C106.404 19.832 106.268 20.424 106.268 21.112V21.688C106.268 22.392 106.42 23.016 106.724 23.56C107.044 24.088 107.484 24.496 108.044 24.784C108.62 25.056 109.292 25.192 110.06 25.192C110.748 25.192 111.348 25.088 111.86 24.88C112.388 24.672 112.868 24.36 113.3 23.944L115.292 26.104C114.7 26.776 113.956 27.296 113.06 27.664C112.164 28.016 111.132 28.192 109.964 28.192ZM118.697 28V15.088H122.273V18.736L121.769 17.68C122.153 16.768 122.769 16.08 123.617 15.616C124.465 15.136 125.497 14.896 126.713 14.896V18.352C126.553 18.336 126.409 18.328 126.281 18.328C126.153 18.312 126.017 18.304 125.873 18.304C124.849 18.304 124.017 18.6 123.377 19.192C122.753 19.768 122.441 20.672 122.441 21.904V28H118.697ZM129.489 28V14.8C129.489 13.344 129.921 12.184 130.785 11.32C131.649 10.44 132.881 10 134.481 10C135.025 10 135.545 10.056 136.041 10.168C136.553 10.28 136.985 10.456 137.337 10.696L136.353 13.408C136.145 13.264 135.913 13.152 135.657 13.072C135.401 12.992 135.129 12.952 134.841 12.952C134.297 12.952 133.873 13.112 133.569 13.432C133.281 13.736 133.137 14.2 133.137 14.824V16.024L133.233 17.632V28H129.489ZM127.497 18.256V15.376H136.449V18.256H127.497ZM140.18 32.848C139.508 32.848 138.844 32.744 138.188 32.536C137.532 32.328 136.996 32.04 136.58 31.672L137.948 29.008C138.236 29.264 138.564 29.464 138.932 29.608C139.316 29.752 139.692 29.824 140.06 29.824C140.588 29.824 141.004 29.696 141.308 29.44C141.628 29.2 141.916 28.792 142.172 28.216L142.844 26.632L143.132 26.224L147.764 15.088H151.364L145.532 28.792C145.116 29.832 144.636 30.648 144.092 31.24C143.564 31.832 142.972 32.248 142.316 32.488C141.676 32.728 140.964 32.848 140.18 32.848ZM142.388 28.504L136.628 15.088H140.492L144.956 25.888L142.388 28.504Z" fill="${e}"/>
            <path d="M36.2402 21.2794V25.1443H31.9868V29.2669H28.3782V33.2605H24.2537V37.1254H15.7466V33.2605H11.6222V29.2669H8.01354V25.1444H3.75984V21.2794H0.0219955V4.78946H4.14646V0.924568H16.6488V4.91831H23.3512V0.924568H35.8535V4.78946H39.978V21.2794H36.2402ZM20 10.2136C18.7243 10.2144 17.4646 10.4979 16.3116 11.0439C15.1586 11.59 14.1411 12.3848 13.3322 13.3713C12.5233 14.3578 11.9432 15.5114 11.6337 16.749C11.3242 17.9866 11.2929 19.2774 11.5422 20.5286C11.7914 21.7797 12.315 22.96 13.0752 23.9845C13.8354 25.009 14.8133 25.8522 15.9385 26.4534C17.0636 27.0546 18.3081 27.3988 19.5823 27.4612C20.8565 27.5237 22.1287 27.3028 23.3073 26.8146C24.8839 26.1614 26.2313 25.0554 27.1793 23.6364C28.1273 22.2174 28.6333 20.5492 28.6332 18.8427C28.6328 17.1356 28.1261 15.467 27.1774 14.0479C26.2287 12.6287 24.8804 11.5228 23.3032 10.8699C22.2559 10.4364 21.1335 10.2134 20 10.2136ZM20 25.2841C19.0836 25.2837 18.1786 25.0801 17.3503 24.6879C16.5221 24.2958 15.791 23.7248 15.2099 23.0162C14.6288 22.3075 14.2121 21.4789 13.9898 20.5898C13.7674 19.7008 13.745 18.7735 13.9241 17.8747C14.093 17.0261 14.4377 16.2223 14.936 15.515C15.4343 14.8077 16.0752 14.2125 16.8174 13.7678C17.5597 13.3231 18.3867 13.0388 19.2455 12.933C20.1042 12.8272 20.9756 12.9025 21.8035 13.1538C22.6315 13.4051 23.3976 13.827 24.0526 14.3923C24.7077 14.9576 25.2371 15.6537 25.6069 16.436C25.9766 17.2182 26.1785 18.0692 26.1995 18.9342C26.2205 19.7992 26.0602 20.659 25.7289 21.4583C25.2593 22.591 24.4644 23.559 23.4447 24.24C22.425 24.921 21.2262 25.2843 20 25.2841ZM20 14.5889C19.1107 14.5892 18.2414 14.8533 17.5021 15.3477C16.7629 15.8421 16.1868 16.5446 15.8469 17.3664C15.5068 18.1882 15.418 19.0923 15.5917 19.9645C15.7655 20.8367 16.194 21.6378 16.8231 22.2664C17.5589 23.0017 18.5269 23.4592 19.5622 23.5609C20.5975 23.6626 21.636 23.4022 22.5008 22.8241C23.3656 22.246 24.0033 21.386 24.3052 20.3905C24.607 19.395 24.5544 18.3256 24.1562 17.3646C23.8155 16.5428 23.2388 15.8405 22.499 15.3465C21.7592 14.8524 20.8896 14.5888 20 14.5889ZM20.0644 20.7642C19.7205 20.764 19.3843 20.6619 19.0984 20.4707C18.8124 20.2795 18.5896 20.0078 18.4581 19.69C18.3266 19.3722 18.2923 19.0225 18.3595 18.6852C18.4267 18.3479 18.5925 18.0381 18.8358 17.7949C19.0791 17.5519 19.3889 17.3864 19.7263 17.3194C20.0636 17.2524 20.4132 17.2869 20.7309 17.4185C21.0486 17.5502 21.3202 17.773 21.5113 18.059C21.7024 18.3449 21.8044 18.6811 21.8045 19.025C21.8044 19.3691 21.7023 19.7054 21.5111 19.9915C21.3199 20.2775 21.0481 20.5004 20.7302 20.632C20.5191 20.7194 20.2929 20.7643 20.0644 20.7642Z" fill="${e}"/>
        </svg>
    `,al=({onImageReady:e,posterData:t,generatePoster:o,onTitleSizeAdjust:l,customFont:r})=>{const s=g.useRef(null);return g.useEffect(()=>{(async()=>{if(!o)return;const d=s.current,c=d.getContext("2d"),u=2480,f=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0,t.marginBackground=parseInt(t.marginBackground)||0;const p=async x=>{const k=new Image;return k.crossOrigin="anonymous",k.src=x,new Promise(T=>{k.onload=()=>{if(c.drawImage(k,t.marginCover,t.marginCover,u-t.marginCover*2,u-t.marginCover*2),t.useFade){let S=c.createLinearGradient(0,0,0,3e3-t.marginBackground);const I=m(t.backgroundColor);S.addColorStop(.5,`rgba(${I.r}, ${I.g}, ${I.b}, 0)`),S.addColorStop(.8,t.backgroundColor),c.fillStyle=S,c.fillRect(0,0,d.width,2500-t.marginBackground)}T()}})},b=async()=>{const x=il(t.textColor,500,134),k=new Blob([x],{type:"image/svg+xml;charset=utf-8"}),T=URL.createObjectURL(k),S=new Image;return S.src=T,new Promise(I=>{S.onload=()=>{c.globalAlpha="0.5",c.drawImage(S,u-70-500,50,500,134),c.globalAlpha="1",URL.revokeObjectURL(T),I()}})},C=async()=>{let x=t.titleSize?parseInt(t.titleSize):230;const k=r||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){c.font=`bold ${x}px ${k}`;let I=c.measureText(t.albumName).width;for(;I>2480-t.marginSide*2;)x-=1,c.font=`bold ${x}px ${k}`,I=c.measureText(t.albumName).width;l(x,!0)}else c.font=`bold ${x}px ${k}`;c.fillStyle=t.textColor,t.showTracklist?c.fillText(t.albumName,t.marginSide,2500+t.marginTop):c.fillText(t.albumName,t.marginSide,2790+t.marginTop);let T=t.artistsSize?parseInt(t.artistsSize):110;c.font=`bold ${T}px ${r||"Montserrat"}`,t.showTracklist?c.fillText(t.artistsName,t.marginSide,2500+t.marginTop+T*1.3):c.fillText(t.artistsName,t.marginSide,2820+t.marginTop+T),c.font=`bold 70px ${r||"Montserrat"}`,c.fillText(t.titleRelease,t.marginSide,3310);let S=c.measureText(t.titleRelease).width;c.fillText(t.titleRuntime,S+t.marginSide+100,3310),c.globalAlpha=.7,c.font=`bold 60px ${r||"Montserrat"}`,c.fillText(t.runtime,S+t.marginSide+100,3390),c.fillText(t.releaseDate,t.marginSide,3390),c.globalAlpha=1,c.fillStyle=t.color1,c.fillRect(2045-t.marginSide,3368,145,30),c.fillStyle=t.color2,c.fillRect(2190-t.marginSide,3368,145,30),c.fillStyle=t.color3,c.fillRect(2335-t.marginSide,3368,145,30)},y=async()=>{c.fillStyle=t.textColor;let x=t.marginSide+10,k=0,T=0;const S=t.tracksSize?parseInt(t.tracksSize):50;c.font=`bold ${S}px ${r||"Montserrat"}`;const I=S,M=parseInt(t.marginTop||0),R=parseInt(t.artistsSize)?2500+M+parseInt(t.artistsSize)*1.3+130:2500+M+110*1.2+130,z=500,E=u-t.marginSide*2,A=parseInt(t.marginSide),P=R+z-10-parseInt(t.marginTop);let $=R;t.tracklist.split(`
`).forEach(L=>{if($+I*1.3>=P){if($=R,x=k+I*2.5+T,x>=A+E)return;T=x-I*2.5,k=0}const V=c.measureText(`${L}`).width+t.marginSide;V>k&&(k=V),c.fillText(`${L}`,x,$),$+=I*1.3})},m=x=>{const k=parseInt(x.replace("#",""),16);return{r:k>>16&255,g:k>>8&255,b:k&255}},_=x=>{const k=S=>{const I=S/255;return I<=.03928?I/12.92:Math.pow((I+.055)/1.055,2.4)};return .2126*k(x.r)+.7152*k(x.g)+.0722*k(x.b)>.179?"black":"white"},j=async()=>{const x=m(t.backgroundColor),k=_(x),T=t.textColor,S=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${k}/640/spotify:album:${t.albumID}`;let M=await(await fetch(S)).text();k=="black"?M=M.replace(/fill="#000000"/g,`fill="${T}"`):M=M.replace(/fill="#ffffff"/g,`fill="${T}"`),M=M.replace(t.backgroundColor,"transparent");const R=new Blob([M],{type:"image/svg+xml"}),z=URL.createObjectURL(R);return new Promise(E=>{const A=new Image;A.src=z,A.onload=function(){c.drawImage(A,2020-t.marginSide,3235,480,120);const P=d.toDataURL("image/png");e(P),E()}})},w=async()=>{c.fillStyle=t.backgroundColor,c.fillRect(0,2480-t.marginBackground,u,f-2480+t.marginBackground)};c.clearRect(0,0,u,f),c.fillStyle=t.backgroundColor,c.fillRect(0,0,u,f),t.useUncompressed?await p(await t.uncompressedAlbumCover):await p(t.albumCover),await w(),await C(),t.showTracklist&&await y(),t.useWatermark&&await b(),await j()})()},[o,t,e]),n.jsx("canvas",{ref:s,width:2480,height:3508,style:{display:"none"}})},sl=h.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function O({children:e,animationDelay:t=0,...o}){const[l,r]=g.useState(!1);return g.useEffect(()=>{const s=setTimeout(()=>{r(!0)},t);return()=>clearTimeout(s)},[t]),n.jsx(sl,{visible:l,animationDelay:t,...o,children:e})}const ll=h.div`
    width: 80%;
    margin-inline: auto;
`,cl=h.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,dl=h(rr)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,ul=h.h3`
    font-size: 1.3em;
    font-weight: bold;
`,fl=h.div`
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
`,hl=h.img`
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
`,pl=h.div`
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
`,ml=h(cr)`
    font-size: 3em;
    color: var(--textSecondary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${e=>e.visible?.15:0};
    transition: opacity 0.3s ease;
    animation: ${e=>e.visible?N`
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    `:"none"} 1s linear infinite;
`,gl=h.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,xl=h.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--borderColor);
    width: 90%;
    margin-inline: auto;
`,Bn=h.div`
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
`,vl=h.div`
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
`,bl=h.div`
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
`,yl=h.div`
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
`,Vn=h.button`
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
`,wl=h.textarea`
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
`,Cl=h.div`
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
`,Un=h.div`
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
`,qn=h.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,_l=h(oa)`
    font-size: 1.15em;
`,kl=h(ri)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?an`
                  animation: ${N`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:an`
                  animation: ${N`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,jl=h.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,Tl=h.p`
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
`,zt=g.forwardRef(({albumID:e,handleClickBack:t,model:o,modelParams:l,initialPosterJson:r},s)=>{const{t:a}=q(),d=g.useRef(null),[c,u]=g.useState(""),[f,p]=g.useState(""),[b,C]=g.useState("200"),[y,m]=g.useState("110"),[_,j]=g.useState("50"),[w,x]=g.useState((l==null?void 0:l.marginTop)??""),[k,T]=g.useState(160),[S,I]=g.useState((l==null?void 0:l.marginCover)??0),[M,R]=g.useState((l==null?void 0:l.marginBackground)??0),[z,E]=g.useState("#5900ff"),[A,P]=g.useState("#ff9100"),[$,L]=g.useState("#ff0000"),[V,G]=g.useState("#00ff40"),[J,qe]=g.useState("#2600ff"),[_r,kr]=g.useState(!0),[Et,At]=g.useState((l==null?void 0:l.useFade)??!0),[Ot,Ne]=g.useState((l==null?void 0:l.showTracklist)??!1),[Qe,Ge]=g.useState(""),[jr,We]=g.useState(""),[Tr,Dt]=g.useState(""),[ee,Sr]=g.useState(null),[Ye,Ht]=g.useState("information");function Pt(v){et(!0),u(v.albumName||""),p(v.artistsName||""),C(v.titleSize||"200"),m(v.artistsSize||"110"),j(v.tracksSize||"50"),x(v.marginTop||""),T(v.marginSide||160),I(v.marginCover||0),R(v.marginBackground||0),E(v.backgroundColor||"#5900ff"),P(v.textColor||"#ff9100"),L(v.color1||"#ff0000"),G(v.color2||"#00ff40"),qe(v.color3||"#2600ff"),kr(v.useWatermark!==void 0?v.useWatermark:!0),At(v.useFade!==void 0?v.useFade:!0),Ne(v.showTracklist!==void 0?v.showTracklist:!1),pe(v.useUncompressed!==void 0?v.useUncompressed:!1),Ge(v.albumCover||""),We(v.uncompressedAlbumCover||""),Dt(v.customFont||""),re(v.tracklist||""),Ze(v.titleRelease||""),Ke(v.releaseDate||""),Je(v.titleRuntime||""),Xe(v.runtime||""),ge()}g.useEffect(()=>{if(ee){const v=new FileReader;v.onload=async D=>{const F="CustomFont",X=new FontFace(F,D.target.result);try{const W=await X.load();document.fonts.add(W),Dt(F)}catch(W){console.error("Erro ao carregar fonte:",W)}},v.readAsArrayBuffer(ee)}},[ee]),g.useEffect(()=>{r&&Pt(r)},[r]);const[Lt,pe]=g.useState(!1),[Ir,Mr]=g.useState("Original"),[me,re]=g.useState(""),[$t,Ze]=g.useState(""),[Ft,Ke]=g.useState(""),[Bt,Je]=g.useState(""),[Vt,Xe]=g.useState(""),[zr,Ut]=g.useState(!1),[qt,Nt]=g.useState(null),[te,Rr]=g.useState(null),[Qt,Gt]=g.useState(!1),[Wt,Er]=g.useState(!1),[Yt,et]=g.useState(!1),Ar=v=>{C(v.target.value),Gt(!0)},Or=(v,D)=>{D&&!Wt?(C(v),Er(!0)):Qt||C(v)},Dr={albumCover:Qe,uncompressedAlbumCover:jr,useUncompressed:Lt,albumName:c,artistsName:f,titleSize:b,artistsSize:y,tracksSize:_,marginTop:w,marginSide:k,marginCover:S,marginBackground:M,titleRelease:$t,releaseDate:Ft,titleRuntime:Bt,runtime:Vt,backgroundColor:z,textColor:A,useWatermark:_r,useFade:Et,showTracklist:Ot,tracklist:me,color1:$,color2:V,color3:J,albumID:e,userAdjustedTitleSize:Qt,initialTitleSizeSet:Wt},[oe,Hr]=g.useState(null),[tt,Zt]=g.useState(!1),[Pr,nt]=g.useState(!1),[Lr,Kt]=g.useState(!1),[$r,Jt]=g.useState(!1),[Fr,rt]=g.useState(!1);g.useEffect(()=>{if(tt){nt(!1);const v=setTimeout(()=>{rt(!0)},100);return()=>clearTimeout(v)}else rt(!1)},[tt]);const Br=v=>{Hr(v),Zt(!1),Jt(!1),go(c,f),setTimeout(()=>{rt(!1),setTimeout(()=>{nt(!0)},300)},100)},ge=()=>{Gt(!1),nt(!1),requestAnimationFrame(()=>{if(Jt(!0),Zt(!0),d.current){const v=d.current.getBoundingClientRect(),D=v.top+window.scrollY,F=v.height,W=(window.innerHeight-F)/2;window.scrollTo({top:D-W,behavior:"smooth"})}})},Vr=v=>{Ge(URL.createObjectURL(v)),pe(!1),We(""),Mr(v.name),et(!1)},ot=()=>{if(!oe)return;const v=document.createElement("a");v.href=oe,v.download=`Posterfy - ${c}.png`,v.click(),mo(c,"poster",f)};function ie(v,D){const F=v.target.getBoundingClientRect();Nt({top:F.top+window.scrollY,left:F.left+window.scrollX}),Rr(D),Ut(!0)}function Ur(){Ut(!1)}const qr=()=>{const D=me.split(`
`).map(F=>F.replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim());re(D.join(`
`))},Nr=()=>{const D=me.split(`
`).map(F=>F.replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim());re(D.join(`
`))};async function Qr(v,D="us"){var F;try{let X=`https://itunes.apple.com/search?term=${encodeURIComponent(v)}&country=${D}&entity=album&limit=1`,W=await fetch(X);if(!W.ok)throw new Error(`HTTP Error: ${W.status}`);let it=await W.json();if(!((F=it.results)!=null&&F.length))return console.warn("No album data found."),Yt||pe(!1),"";let Y=it.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return Y.length===2?`https://a5.mzstatic.com/us/r1000/0/${Y[1].split("/").slice(0,-1).join("/")}`:""}catch(X){return console.error("Error fetching album cover:",X.message),""}}return g.useEffect(()=>{Ze(a("EDITOR_ReleaseTitle")),Je(a("EDITOR_RuntimeTitle"))},[a]),g.useEffect(()=>{const v=async()=>{var D;try{const Xt=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,Y=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Xt}`}})).json(),at=Y.artists.map(ae=>ae.name).join(", ");u(Y.name),p(at),Ge((D=Y.images[0])==null?void 0:D.url),Ke(Y.release_date),We(await Qr(Y.name+" "+at));const Wr=Y.tracks.items.reduce((ae,xe)=>ae+xe.duration_ms,0),en=Math.floor(Wr/1e3),tn=Math.floor(en/60),nn=Math.floor(tn/60),rn=en%60,on=tn%60,Yr=nn>0?`${nn}h ${on}min ${rn}s`:`${on}min ${rn}s`;Xe(Yr);const Zr=Y.tracks.items.map((ae,xe)=>(xe===3&&typeof(l==null?void 0:l.showTracklist)>"u"&&Ne(!0),`${xe+1}. ${ae.name}`));re(Zr.join(`
`)),Kt(!0)}catch(F){console.error("Error trying to fetch album data:",F)}};r?(Pt(r),Kt(!0)):(et(!1),v())},[e]),g.useEffect(()=>{const v=D=>{D.ctrlKey&&D.key==="s"?(D.preventDefault(),ge()):D.ctrlKey&&D.key==="d"&&(D.preventDefault(),ot())};return window.addEventListener("keydown",v),()=>{window.removeEventListener("keydown",v)}},[oe,c,ot]),n.jsx(n.Fragment,{children:Lr?n.jsxs(ll,{ref:s,children:[n.jsx(Cr,{src:Qe,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:v})=>(g.useEffect(()=>{v&&v.length>0&&!Yt&&(E(v[0]),P(v[1]),L(v[2]),G(v[3]),qe(v[4]),ge())},[v]),null)}),n.jsxs(cl,{onClick:t,children:[n.jsx(dl,{}),n.jsx(ul,{children:a("GoBack")})]}),n.jsxs(fl,{children:[n.jsx(al,{onImageReady:Br,posterData:Dr,generatePoster:tt,onTitleSizeAdjust:Or,customFont:Tr}),n.jsxs(pl,{children:[oe?n.jsx(hl,{src:oe,ref:d,visible:Pr}):n.jsx(jl,{ref:d}),n.jsx(ml,{visible:Fr})]}),n.jsxs(gl,{children:[n.jsx(O,{animationDelay:50,children:n.jsxs(xl,{children:[n.jsx(Bn,{$active:Ye==="information",onClick:()=>Ht("information"),children:a("EDITOR_InformationTab")}),n.jsx(Bn,{$active:Ye==="tracklist",onClick:()=>Ht("tracklist"),children:a("EDITOR_TracklistTab")})]})}),Ye==="information"?n.jsxs(vl,{children:[n.jsx(O,{animationDelay:0,children:n.jsx(Z,{title:a("EDITOR_AlbumName"),value:c,onChange:v=>u(v.target.value)})}),n.jsx(O,{animationDelay:50,children:n.jsx(Z,{title:a("EDITOR_ArtistName"),value:f,onChange:v=>p(v.target.value)})}),n.jsx(O,{animationDelay:100,children:n.jsx(Z,{title:a("EDITOR_TitleSize"),value:b,onChange:Ar})}),n.jsx(O,{animationDelay:150,children:n.jsx(Z,{title:a("EDITOR_ArtistSize"),value:y,onChange:v=>m(v.target.value)})}),n.jsx(O,{animationDelay:200,children:n.jsx(Z,{title:a("EDITOR_TracksSize"),value:_,onChange:v=>j(v.target.value)})}),n.jsx(O,{animationDelay:250,children:n.jsx(Z,{title:a("EDITOR_MarginTop"),value:w,onChange:v=>x(v.target.value)})}),n.jsx(O,{animationDelay:300,children:n.jsx(Z,{title:a("EDITOR_MarginSide"),value:k,onChange:v=>T(v.target.value)})}),n.jsx(O,{animationDelay:350,children:n.jsx(Z,{title:a("EDITOR_MarginCover"),value:S,onChange:v=>I(v.target.value)})}),n.jsx(O,{animationDelay:375,children:n.jsx(Z,{title:a("EDITOR_MarginBackground"),value:M,onChange:v=>R(v.target.value)})}),n.jsx(O,{animationDelay:400,children:n.jsx(mn,{title:$t,value:Ft,onChangeTitle:v=>Ze(v.target.value),onChangeDate:v=>Ke(v.target.value)})}),n.jsx(O,{animationDelay:450,children:n.jsx(mn,{title:Bt,value:Vt,onChangeTitle:v=>Je(v.target.value),onChangeDate:v=>Xe(v.target.value)})}),n.jsx(O,{animationDelay:500,children:n.jsx(le,{title:a("EDITOR_BackgroundColor"),value:z,onClick:v=>ie(v,"backgroundColor")})}),n.jsx(O,{animationDelay:550,children:n.jsx(le,{title:a("EDITOR_TextColor"),value:A,onClick:v=>ie(v,"textColor")})}),n.jsx(O,{animationDelay:600,children:n.jsx(le,{title:`${a("EDITOR_Color")} 1`,value:$,onClick:v=>ie(v,"color1")})}),n.jsx(O,{animationDelay:650,children:n.jsx(le,{title:`${a("EDITOR_Color")} 2`,value:V,onClick:v=>ie(v,"color2")})}),n.jsx(O,{animationDelay:700,children:n.jsx(le,{title:`${a("EDITOR_Color")} 3`,value:J,onClick:v=>ie(v,"color3")})}),n.jsx(O,{animationDelay:800,children:n.jsx(ct,{title:a("EDITOR_Fade"),value:Et,onChange:v=>At(v),text:a("EDITOR_FadeText")})}),n.jsx(O,{animationDelay:850,children:n.jsx(ct,{title:a("EDITOR_Uncompressed"),value:Lt,onChange:v=>pe(v),text:a("EDITOR_UncompressedText")})}),n.jsx(O,{animationDelay:900,children:n.jsx(ct,{title:a("EDITOR_Tracklist"),value:Ot,onChange:v=>Ne(v),text:a("EDITOR_TracklistText")})}),n.jsx(O,{animationDelay:950,children:n.jsx(c1,{title:a("EDITOR_Cover"),onChange:Vr,text:Ir})}),n.jsx(O,{animationDelay:1e3,children:n.jsx(g1,{title:a("EDITOR_Font"),text:(ee==null?void 0:ee.name)||a("EDITOR_DefaultFont"),onChange:Sr})}),zr&&qt&&te&&n.jsx(Ys,{DefaultColor:te==="backgroundColor"?z:te==="textColor"?A:te==="color1"?$:te==="color2"?V:J,image:Qe,predefinedColors:[$,V,J,z,A],onDone:v=>{switch(te){case"backgroundColor":E(v);break;case"textColor":P(v);break;case"color1":L(v);break;case"color2":G(v);break;case"color3":qe(v);break}Nt(null)},position:qt,onClose:Ur})]}):n.jsxs(bl,{children:[n.jsx(wl,{value:me,onChange:v=>re(v.target.value),placeholder:a("EDITOR_TracklistPlaceholder")}),n.jsxs(yl,{children:[n.jsx(Vn,{onClick:qr,children:a("EDITOR_RemoveParentheses")}),n.jsx(Vn,{onClick:Nr,children:a("EDITOR_RemoveBrackets")})]})]}),n.jsx(O,{animationDelay:1050,children:n.jsxs(Cl,{children:[n.jsxs(Un,{onClick:ot,children:[n.jsx(_l,{}),n.jsx(qn,{children:a("EDITOR_Download")})]}),n.jsxs(Un,{onClick:ge,children:[n.jsx(kl,{$spinning:$r}),n.jsx(qn,{children:a("EDITOR_Apply")})]})]})}),n.jsx(O,{animationDelay:1100,children:n.jsxs(Tl,{children:[a("EDITOR_Shortcuts"),": Ctrl+S (",a("EDITOR_Apply"),"), Ctrl+D (",a("EDITOR_Download"),")"]})})]})]})]}):n.jsx(dr,{})})});zt.displayName="PosterEditor";const Sl=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const l=e*264/186;return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:l,viewBox:"0 0 186 264",fill:"none",children:[n.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),n.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Il=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)"})=>{const l=e*264/186;return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:l,viewBox:"0 0 186 264",fill:"none",children:[n.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),n.jsx("path",{fill:o,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM14 213h123v13H14zM14 236h55v-6H14zM133.64 114.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93v-10.216H53.25v-9.577H44v-40.86h10.208V64h30.944v9.896h16.588V64h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.39 21.39 0 0 0 10.88 14.681 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.4 21.4 0 0 0-.004-23.76 21.37 21.37 0 0 0-17.764-9.5m0 37.344a15.332 15.332 0 0 1-11.855-5.62 15.36 15.36 0 0 1-3.183-12.74 15.36 15.36 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.37 15.37 0 0 1-5.352 19.338 15.34 15.34 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.156 11.156 0 0 0-1.68 17.144 11.117 11.117 0 0 0 14.052 1.382 11.152 11.152 0 0 0-.004-18.529 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.309 4.309 0 0 1-4.22-5.152 4.31 4.31 0 0 1 3.383-3.384 4.302 4.302 0 0 1 4.418 1.833 4.31 4.31 0 0 1-3.581 6.703"})]})},Ml=({width:e=186,bgColor:t="var(--PosterShare-posterColor)",fillColor:o="var(--PosterShare-shadeFrames)",fillOpacity:l=1})=>{const r=e*264/186;return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"0 0 186 264",fill:"none",children:[n.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),n.jsx("path",{fill:o,fillOpacity:l,d:"M14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14z"}),n.jsx("path",{fill:o,fillOpacity:.13*l,d:"M168.6 133.587v18.149h-19.8v19.36h-16.799v18.754h-19.2V208H73.2v-18.15H54v-18.754H37.202v-19.359H17.4v-18.15H0V56.15h19.2V38h58.2v18.755h31.2V38h58.2v18.15H186v77.437zM93 81.622a39.9 39.9 0 0 0-17.17 3.899 40.2 40.2 0 0 0-13.87 10.93 40.66 40.66 0 0 0-7.906 15.861 40.9 40.9 0 0 0-.426 17.749 40.7 40.7 0 0 0 7.136 16.229 40.3 40.3 0 0 0 13.329 11.594 39.9 39.9 0 0 0 16.963 4.733 39.9 39.9 0 0 0 17.34-3.037 40.24 40.24 0 0 0 18.025-14.925 40.77 40.77 0 0 0 6.768-22.511 40.8 40.8 0 0 0-6.777-22.517 40.26 40.26 0 0 0-18.035-14.924A39.9 39.9 0 0 0 93 81.622m0 70.771a28.64 28.64 0 0 1-12.335-2.8 28.9 28.9 0 0 1-9.963-7.85 29.2 29.2 0 0 1-5.68-11.395 29.36 29.36 0 0 1-.306-12.75 29.2 29.2 0 0 1 4.71-11.081 28.9 28.9 0 0 1 8.759-8.205 28.7 28.7 0 0 1 11.303-3.92 28.6 28.6 0 0 1 11.908 1.037 28.8 28.8 0 0 1 10.47 5.816 29.1 29.1 0 0 1 7.235 9.597 29.354 29.354 0 0 1 .568 23.585 29.07 29.07 0 0 1-10.634 13.063A28.7 28.7 0 0 1 93 152.393m0-50.225a20.8 20.8 0 0 0-11.628 3.563 21.1 21.1 0 0 0-7.705 9.48 21.3 21.3 0 0 0-1.188 12.201 21.17 21.17 0 0 0 5.732 10.81 20.86 20.86 0 0 0 12.75 6.079c4.82.477 9.655-.745 13.681-3.46a21.1 21.1 0 0 0 8.399-11.429 21.3 21.3 0 0 0-.693-14.209 21.1 21.1 0 0 0-7.715-9.477A20.8 20.8 0 0 0 93 102.168m.3 28.999a8.04 8.04 0 0 1-4.497-1.378 8.15 8.15 0 0 1-2.98-3.666 8.24 8.24 0 0 1-.46-4.719 8.2 8.2 0 0 1 2.217-4.18 8.038 8.038 0 0 1 8.822-1.768 8.1 8.1 0 0 1 3.633 3.008A8.2 8.2 0 0 1 101.4 123a8.2 8.2 0 0 1-1.366 4.539 8.1 8.1 0 0 1-3.635 3.007 8 8 0 0 1-3.1.621"})]})},zl=({width:e=186,backgroundColor:t="var(--PosterShare-posterColor)",detailColor:o="var(--PosterShare-shadeFrames)"})=>{const l=e*264/186;return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:l,viewBox:"0 0 186 264",fill:"none",children:[n.jsx("path",{fill:t,d:"M0 0h186v264H0z"}),n.jsx("path",{fill:o,d:"M0 264h186v-5H0zM0 5h186V0H0zM5 259V5H0v254zM186 259V5h-5v254zM14 253h32v-5H14zM55 253h32v-5H55zM142 253h32v-5h-32zM47.484 221.875h28.033V219H47.484zM47.484 226.906h28.033v-2.875H47.484zM47.484 231.938h28.033v-2.875H47.484zM47.484 236.969h28.033v-2.875H47.484zM47.484 242h28.033v-2.875H47.484zM80.967 221.875H109V219H80.967zM80.967 226.906H109v-2.875H80.967zM80.967 231.938H109v-2.875H80.967zM80.967 236.969H109v-2.875H80.967zM80.967 242H109v-2.875H80.967zM14 221.875h28.033V219H14zM14 226.906h28.033v-2.875H14zM14 231.938h28.033v-2.875H14zM14 236.969h28.033v-2.875H14zM14 242h28.033v-2.875H14zM14 191h123v13H14zM14 214h55v-6H14zM133.64 87.437v9.577h-10.527v10.216h-8.931v9.896h-10.209v9.576H82.918v-9.576H72.71v-9.896h-8.93V97.014H53.25v-9.577H44v-40.86h10.208V37h30.944v9.896h16.588V37h30.943v9.577h10.208v40.86zm-40.194-27.42a21.34 21.34 0 0 0-16.503 7.825 21.4 21.4 0 0 0-4.43 17.735 21.4 21.4 0 0 0 3.794 8.564 21.4 21.4 0 0 0 7.086 6.117 21.327 21.327 0 0 0 18.238.895 21.36 21.36 0 0 0 9.583-7.875 21.395 21.395 0 0 0-9.593-31.635 21.35 21.35 0 0 0-8.175-1.626m0 37.344a15.33 15.33 0 0 1-11.856-5.62 15.36 15.36 0 0 1-3.182-12.74 15.37 15.37 0 0 1 7.16-10.177 15.33 15.33 0 0 1 21.755 6.612 15.374 15.374 0 0 1-5.352 19.338 15.33 15.33 0 0 1-8.525 2.587m0-26.502c-2.202 0-4.353.655-6.183 1.88a11.154 11.154 0 0 0-1.68 17.144 11.124 11.124 0 0 0 18.518-4.648 11.15 11.15 0 0 0-4.47-12.499 11.12 11.12 0 0 0-6.185-1.877m.159 15.302a4.3 4.3 0 0 1-3.976-2.662 4.31 4.31 0 0 1 .935-4.696 4.303 4.303 0 0 1 7.348 3.048 4.31 4.31 0 0 1-2.66 3.982 4.3 4.3 0 0 1-1.647.328"})]})},Rl=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 25px;
  cursor: pointer;
  width: 80%;
  margin-inline: auto;
`,El=h(rr)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`,Al=h.h3`
  font-size: 1.3em;
  font-weight: bold;
`,Rt=N`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ol=h.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  animation: ${Rt} 0.7s cubic-bezier(0.23, 1, 0.32, 1);

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
`,Pe=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${Rt} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Le=h.h3`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  opacity: 0;
  animation: ${Rt} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
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
`,Dl=h.h1`
  width: 80%;
  margin-inline: auto;
  margin-top: 20px;
`,Hl=h.p`
    font-size: .9rem;
    margin-top: 10px;
    width: 80%;
    margin-inline: auto;
    font-weight: bolder;
    opacity: 0.75;

    @media (max-width: 350px) {
        display: none;
    }
`;function Pl({onSelectModel:e,onBack:t}){const{t:o}=q(),l={marginCover:-500,marginBackground:-700,showTracklist:!1,marginTop:200},r={marginCover:160,useFade:!1,marginTop:20},s={marginCover:-1100,marginBackground:-1200,useFade:!1},a={marginCover:0,marginBackground:0,showTracklist:!0,useFade:!0};function d(u,f){po("select_model","ModelSelector",u),e&&e(u,f)}const c=[0,.08,.16,.24];return n.jsxs(n.Fragment,{children:[n.jsxs(Rl,{onClick:t,children:[n.jsx(El,{}),n.jsx(Al,{children:o("GoBack")})]}),n.jsx(Dl,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelTitle")}),n.jsx(Hl,{style:{animation:"fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1)",opacity:1},children:o("ModelText")}),n.jsxs(Ol,{children:[n.jsxs(Pe,{delay:c[0],onClick:()=>d("standart",a),children:[n.jsx(Sl,{width:200}),n.jsx(Le,{delay:c[0],children:"Standard"})]}),n.jsxs(Pe,{delay:c[1],onClick:()=>d("frame",r),children:[n.jsx(zl,{width:200}),n.jsx(Le,{delay:c[1],children:"Frame"})]}),n.jsxs(Pe,{delay:c[2],onClick:()=>d("basic",l),children:[n.jsx(Il,{width:200}),n.jsx(Le,{delay:c[2],children:"Basic"})]}),n.jsxs(Pe,{delay:c[3],onClick:()=>d("fullcover",s),children:[n.jsx(Ml,{width:200}),n.jsx(Le,{delay:c[3],children:"Full Cover"})]})]})]})}const Ll=h.div`
    width: 100%;
`,$l=h.div`
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
`,Fl=h(Ho)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,Bl=h(wa)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,Vl=h.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: var(--textColor);
`,Ul=h.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function ql({onSearch:e,value:t=""}){const{t:o}=q(),[l,r]=g.useState(t);g.useEffect(()=>{r(t)},[t]);const s=c=>{c.key==="Enter"&&(e(l),l.trim()&&cn(l.trim()))},a=c=>{r(c.target.value)},d=()=>{e(l),l.trim()&&cn(l.trim())};return n.jsx(Ll,{children:n.jsxs($l,{role:"search","aria-label":"Album search for poster creation",children:[n.jsx(Fl,{"aria-hidden":"true"}),n.jsx(Vl,{}),n.jsx(Ul,{placeholder:o("SearchPlaceholder"),value:l,onChange:a,onKeyDown:s,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),n.jsx(Bl,{onClick:d,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const Nl=h.div`
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

`,Ql=h.img`
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
`,Gl=h.h3`
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
`,Wl=h.p`
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
`,Yl=h.div`
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
`;function Zl({title:e,artist:t,cover:o,id:l,onClick:r,animationDelay:s=0}){const[a,d]=g.useState(!1);return g.useEffect(()=>{const c=setTimeout(()=>{d(!0)},s);return()=>clearTimeout(c)},[s]),n.jsxs(Nl,{onClick:()=>r(l),visible:a,children:[n.jsx(Ql,{src:o}),n.jsxs(Yl,{children:[n.jsx(Gl,{children:e}),n.jsx(Wl,{children:t})]})]})}const Kl=h.div`
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
`,Jl=h.button`
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
`,Xl=h.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: auto;
`;function Nn({query:e,onclick:t}){const{t:o}=q(),[l,r]=g.useState([]),[s,a]=g.useState(""),[d,c]=g.useState(0),[u,f]=g.useState(!0),[p,b]=g.useState(!1),[C,y]=g.useState(!1),m=20;g.useEffect(()=>{(async()=>{const T=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();a(T.access_token)})()},[]),g.useEffect(()=>{r([]),c(0),f(!0)},[e]),g.useEffect(()=>{const j=async(w=!1)=>{if(s){w?y(!0):b(!0);try{let x;const k=w?d:0;if(e?x=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${m}&offset=${k}`,{headers:{Authorization:`Bearer ${s}`}}):x=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${k}&limit=${m}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!x.ok){const z=await x.text();throw new Error(`Erro na API: ${z}`)}const T=await x.json(),I=T.albums.items.filter(z=>z!=null).map(z=>{var E,A;return{id:z.id,title:z.name,artist:(E=z.artists)==null?void 0:E.map(P=>P.name).join(", "),cover:(A=z.images[0])==null?void 0:A.url}});r(w?z=>[...z,...I]:I);const M=T.albums.total,R=w?l.length+I.length:I.length;f(R<M&&I.length===m)}catch(x){console.error(x)}finally{b(!1),y(!1)}}};s&&(l.length===0||d===0)&&j(!1)},[e,s]);const _=async()=>{if(!s||!u||C)return;const j=d+m;c(j);try{y(!0);let w;if(e?w=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album&limit=${m}&offset=${j}`,{headers:{Authorization:`Bearer ${s}`}}):w=await fetch(`https://api.spotify.com/v1/browse/new-releases?offset=${j}&limit=${m}&locale=en-US`,{headers:{Authorization:`Bearer ${s}`}}),!w.ok){const M=await w.text();throw new Error(`Erro na API: ${M}`)}const x=await w.json(),T=x.albums.items.filter(M=>M!=null).map(M=>{var R,z;return{id:M.id,title:M.name,artist:(R=M.artists)==null?void 0:R.map(E=>E.name).join(", "),cover:(z=M.images[0])==null?void 0:z.url}});r(M=>[...M,...T]);const S=x.albums.total,I=l.length+T.length;f(I<S&&T.length===m)}catch(w){console.error(w)}finally{y(!1)}};return n.jsx(n.Fragment,{children:p&&l.length===0?n.jsx(dr,{}):n.jsxs(n.Fragment,{children:[n.jsx(Kl,{children:l.map((j,w)=>n.jsx(Zl,{onClick:()=>t(j.id),cover:j.cover,title:j.title,artist:j.artist,id:j.id,animationDelay:w-d*100},j.id))}),u&&n.jsx(Xl,{children:n.jsx(Jl,{onClick:_,disabled:C,children:o(C?"LoadingMore":"LoadMore")})})]})})}const e0=({onBack:e})=>{const[t,o]=g.useState(""),[l,r]=g.useState(null),[s,a]=g.useState(!1),[d,c]=g.useState(null),[u,f]=g.useState(null),p=g.useRef(null);g.useEffect(()=>{s&&l&&p.current&&setTimeout(()=>{p.current.scrollIntoView({behavior:"smooth",block:"start"})},100)},[s,l]);function b(m){r(m),a(!0),c(null),f(null)}function C(){r(null),a(!1),c(null),f(null),e&&e()}const y=m=>{o(m)};return l&&d&&u?n.jsx(zt,{albumID:l,handleClickBack:C,model:d,modelParams:u,source:"search_creation"}):l&&s?n.jsx("div",{ref:p,children:n.jsx(Pl,{onSelectModel:(m,_)=>{c(m),f(_),a(!1)},onBack:C})}):n.jsxs(n.Fragment,{children:[n.jsx(ql,{onSearch:y,value:t}),t.trim()?n.jsx(Nn,{query:t,onclick:b}):n.jsx("div",{children:n.jsx(Nn,{onclick:b})})]})};function t0(){const{t:e}=q(),[t,o]=g.useState(!0),[l,r]=g.useState(!1),[s,a]=g.useState(null),d=g.useRef(null);ba(),g.useEffect(()=>Mo(),[]),g.useEffect(()=>{const f=setTimeout(()=>{o(!1),setTimeout(()=>{r(!0)},1e3)},1100);return()=>clearTimeout(f)},[]),g.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const c=f=>{bo(f.albumName||"Unknown Album",f.artistsName||"Unknown Artist",f.albumID||"","album_collection"),a(f),setTimeout(()=>{if(d.current){const p=d.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}},100)},u=()=>{a(null)};return n.jsx(zo,{children:n.jsxs(Fa,{children:[n.jsx(ga,{}),n.jsx(xa,{}),n.jsx(va,{}),n.jsx(ti,{}),n.jsx(Ti,{showAnimation:l,onRecreate:c}),n.jsx(he,{text:e("anchorArt"),type:1}),n.jsx(jt,{title:e("ArtTitle"),paragraph:e("ArtParagraph")}),s?n.jsx(zt,{ref:d,albumID:s.albumID,initialPosterJson:s,handleClickBack:u}):n.jsx(e0,{}),n.jsx(Ja,{}),n.jsx(Qa,{}),n.jsx(ha,{}),n.jsx(ds,{}),n.jsx(na,{}),n.jsx(Pi,{isVisible:t})]})})}Xr.use(eo).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist",EDITOR_TracklistPlaceholder:"Enter track titles, one per line...",EDITOR_RemoveParentheses:"Remove ( )",EDITOR_RemoveBrackets:"Remove [ ]",EDITOR_MarginBackground:"Background size",ModelTitle:"Poster Models",ModelText:"Click on a pre-defined model to select it",Share:"Share.",ShareTitle:`Share your poster
to us`,ShareDescription:"Created a poster, printed it, and using it as art? Share it and see it here!",ComingSoon:"Coming soon!",Community:"Community.",CommunityTitle:`Publish your poster
to the community`,CommunityDescription:"Share and search posters on the community!",Thanks:"Thanks!",RecreatePoster:"Recreate poster",LoadMore:"Load more",LoadingMore:"Loading more..."}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas",EDITOR_TracklistPlaceholder:"Digite os títulos das faixas, uma por linha...",EDITOR_RemoveParentheses:"Remover ( )",EDITOR_RemoveBrackets:"Remover [ ]",EDITOR_MarginBackground:"Tamanho fundo",ModelTitle:"Modelos de Pôster",ModelText:"Clique em um modelo pré-definido para selecioná-lo",Share:"Compartilhe.",ShareTitle:`Compartilhe seu pôster
 conosco`,ShareDescription:"Criou um poster, imprimiu e o usa como arte? Compartilhe-o e veja ele aqui!",ComingSoon:"Em breve!",Community:"Comunidade.",CommunityTitle:`Publique seu pôster
 na comunidade`,CommunityDescription:"Compartilhe e busque pôsteres na comunidade!",Thanks:"Obrigado!",RecreatePoster:"Recriar pôster",LoadMore:"Carregar mais...",LoadingMore:"Carregando mais..."}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones",EDITOR_TracklistPlaceholder:"Escriba los títulos de las canciones, uno por línea...",EDITOR_RemoveParentheses:"Quitar ( )",EDITOR_RemoveBrackets:"Quitar [ ]",EDITOR_MarginBackground:"Tamaño de fondo",ModelTitle:"Modelos de Póster",ModelText:"Haz clic en un modelo predefinido para seleccionarlo",Share:"Compartir.",ShareTitle:`Compartir su póster
 con nosotros`,ShareDescription:"¿Creaste un póster, lo imprimiste y lo usas como arte? ¡Compártelo y míralo aquí!",ComingSoon:"¡Próximamente!",Community:"Comunidad.",CommunityTitle:`Publica tu póster
en la comunidad`,CommunityDescription:"¡Comparte y busca pósters en la comunidad!",Thanks:"¡Gracias!",RecreatePoster:"Recrear póster",LoadMore:"Cargar más...",LoadingMore:"Cargando más..."}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表",EDITOR_TracklistPlaceholder:"请输入曲目标题，每行一个...",EDITOR_RemoveParentheses:"移除 ( )",EDITOR_RemoveBrackets:"移除 [ ]",EDITOR_MarginBackground:"背景大小",ModelTitle:"海报模型",ModelText:"点击预定义模型进行选择",Share:"分享。",ShareTitle:`将您的海报
分享给我们`,ShareDescription:"创建了一个海报，打印出来并用作艺术？分享它并在这里查看！",ComingSoon:"即将推出！",Community:"社区。",CommunityTitle:`将你的海报
发布到社区`,CommunityDescription:"修改了一个海报并想让它对社区可用？发布它并在这里查看！",Thanks:"谢谢！",RecreatePoster:"重新创建海报",LoadMore:"加载更多...",LoadingMore:"加载更多..."}}},lng:(()=>{const e=localStorage.getItem("language");if(e)return e;const o=(navigator.language||navigator.languages[0]).split("-")[0].toLowerCase();return["en","pt","es","zh"].includes(o)?o:"en"})(),fallbackLng:"en",interpolation:{escapeValue:!1}});Wn(document.getElementById("root")).render(n.jsx(g.StrictMode,{children:n.jsx(t0,{})}));
