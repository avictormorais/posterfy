import{r as g,a as Cr,e as q,g as jr,c as st}from"./vendor-DZStNbcm.js";import{d as m,G as P,m as V,l as Wt}from"./ui-C8-z_EEw.js";import{u as X,i as Tr,a as kr}from"./i18n-DbQiQmPR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Rn={exports:{}},Pe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=g,Sr=Symbol.for("react.element"),Rr=Symbol.for("react.fragment"),Er=Object.prototype.hasOwnProperty,Or=Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ar={key:!0,ref:!0,__self:!0,__source:!0};function En(e,t,r){var d,n={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(d in t)Er.call(t,d)&&!Ar.hasOwnProperty(d)&&(n[d]=t[d]);if(e&&e.defaultProps)for(d in t=e.defaultProps,t)n[d]===void 0&&(n[d]=t[d]);return{$$typeof:Sr,type:e,key:a,ref:o,props:n,_owner:Or.current}}Pe.Fragment=Rr;Pe.jsx=En;Pe.jsxs=En;Rn.exports=Pe;var c=Rn.exports,On,Vt=Cr;On=Vt.createRoot,Vt.hydrateRoot;function ze({width:e,height:t,fill:r}){return c.jsx("svg",{width:e,height:t,viewBox:"0 0 511 464",fill:r,xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M462.968 260.8v49.374h-54.337v52.666h-46.1v51.019h-52.69v49.374H201.163v-49.374h-52.69V362.84h-46.1v-52.665H48.032V260.8H.281V50.141h52.69V.767h159.718v51.02h85.622V.767h159.717v49.374h52.691V260.8zM255.5 119.435a110.235 110.235 0 1 0 42.251 212.077 110.23 110.23 0 0 0 68.038-101.841 110.265 110.265 0 0 0-68.091-101.853 110.3 110.3 0 0 0-42.198-8.383m0 192.525a79.181 79.181 0 0 1-77.62-94.655 79.183 79.183 0 1 1 150.807 45.78A79.21 79.21 0 0 1 255.5 311.96m0-136.631a57.44 57.44 0 0 0-53.056 35.483 57.44 57.44 0 0 0 12.471 62.597 57.447 57.447 0 0 0 93.681-62.621 57.47 57.47 0 0 0-53.096-35.459m.823 78.889a22.217 22.217 0 0 1-15.696-37.932A22.22 22.22 0 0 1 278.552 232a22.22 22.22 0 0 1-13.724 20.529 22.2 22.2 0 0 1-8.505 1.689"})})}function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(e[d]=r[d])}return e},De.apply(this,arguments)}function Dr(e,t){if(e==null)return{};var r={},d=Object.keys(e),n,a;for(a=0;a<d.length;a++)n=d[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var Pr=["cdnSuffix","cdnUrl","countryCode","style","svg"],zr="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",Mr="svg",Fr=127397,An=function(t){var r=t.cdnSuffix,d=r===void 0?Mr:r,n=t.cdnUrl,a=n===void 0?zr:n,o=t.countryCode,s=t.style,l=t.svg,u=l===void 0?!1:l,f=Dr(t,Pr);if(typeof o!="string")return null;if(u){var h=""+a+o.toLowerCase()+"."+d;return g.createElement("img",Object.assign({},f,{src:h,style:De({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},s)}))}var x=o.toUpperCase().replace(/./g,function(_){return String.fromCodePoint(_.charCodeAt(0)+Fr)});return g.createElement("span",Object.assign({role:"img"},f,{style:De({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},s)}),x)};const $r=()=>{{console.warn("Google Analytics Measurement ID not found");return}},Me=(e,t="General",r="",d=0)=>{typeof window.gtag<"u"&&window.gtag("event",e,{event_category:t,event_label:r,value:d})},Yt=(e,t)=>{typeof window.gtag<"u"&&window.gtag("config","",{page_title:e,page_location:t})},Ke=(e,t="image")=>{Me("download_poster","Engagement",`${e} - ${t}`,1)},Kt=e=>{Me("search_album","User Interaction",e,1)},Lr=e=>{Me("color_selection","Poster Editor",e,1)},qr=e=>{Me("language_change","User Preference",e,1)},Ur=m.div`
  position: relative;
`,Hr=m.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid rgba(255, 255, 255, .8);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,Br=m.div`
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
`,Qr=m.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(220, 220, 220, 0.05);
  z-index: 50;
  border: 1px solid rgba(255, 255, 255, 0.05);
  top: 60px;
`,Nr=m.div`
  position: absolute;
  top: -15px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(0, 0, 0, 0.3);
  z-index: 60;
`,Gr=m.div`
  padding: 8px 4px;
  padding-inline: 10px;
`,he=m.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.025);
  }

  &:hover svg {
    transform: scale(1.2);
  }
`,me=m.span`
  margin-left: 8px;
`,pe=m(An)`
  margin-right: 8px;
  transform: scale(1.2);
  border-radius: 100%;
`;function Wr(){const[e,t]=g.useState(!1),{i18n:r}=X();g.useEffect(()=>{const o=localStorage.getItem("language");o&&r.changeLanguage(o);const s=l=>{l.target.closest(".language-selector")||t(!1)};return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[r]);const d=o=>{o.stopPropagation(),t(!e)},n=o=>{r.changeLanguage(o),localStorage.setItem("language",o),t(!1),qr(o)},a=()=>{switch(r.language){case"pt":return"BR";case"es":return"ES";case"zh":return"CN";default:return"US"}};return c.jsxs(Ur,{className:"language-selector",children:[c.jsx(Hr,{onClick:d,"aria-label":"Select language",children:c.jsx(Br,{children:c.jsx(An,{countryCode:a(),svg:!0,style:{width:"2.5em",height:"2.5em",borderRadius:"50%",objectFit:"cover"}})})}),e&&c.jsxs(Qr,{children:[c.jsx(Nr,{}),c.jsxs(Gr,{children:[c.jsxs(he,{onClick:()=>n("pt"),children:[c.jsx(pe,{countryCode:"BR",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(me,{children:"Português"})]}),c.jsxs(he,{onClick:()=>n("en"),children:[c.jsx(pe,{countryCode:"US",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(me,{children:"English"})]}),c.jsxs(he,{onClick:()=>n("es"),children:[c.jsx(pe,{countryCode:"ES",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover"}}),c.jsx(me,{children:"Español"})]}),c.jsxs(he,{onClick:()=>n("zh"),children:[c.jsx(pe,{countryCode:"CN",svg:!0,style:{width:"1.5em",height:"1.5em",borderRadius:"50%",objectFit:"cover",marginRight:"8px"}}),c.jsx(me,{children:"中文"})]})]})]})]})}const Vr=m.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({scrolled:e})=>e?"rgba(0, 0, 0, 0.15)":"transparent"};
  backdrop-filter: ${({scrolled:e})=>e?"blur(5px)":"none"};
  padding: ${({scrolled:e})=>e?"10px 0":"20px 0"};
  box-shadow: ${({scrolled:e})=>e?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};
`,Yr=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  
  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`,Kr=m.div`
  display: flex;
  align-items: center;
`,Xr=m.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--PosterfyGreen);
`,Jr=m.span`
  font-weight: normal;
  font-size: 0.65em;
  opacity: 0.4;
  font-weight: 600;
`,Zr=m.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 255, 0, 0.05);
  opacity: ${({scrolled:e})=>e?"1":"0"};
  transition: opacity 0.3s ease;
`,eo=m.div`
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
`;function to(){const[e,t]=g.useState(!1),r=".space";return g.useEffect(()=>{const d=()=>{const n=window.scrollY>10;n!==e&&t(n)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[e]),c.jsxs(Vr,{scrolled:e,children:[c.jsxs(Yr,{children:[c.jsxs(Kr,{children:[c.jsx(eo,{children:c.jsx(ze,{fill:"#01b755",width:"40px",height:"44.05px"})}),c.jsxs(Xr,{children:["Posterfy",c.jsx(Jr,{children:r})]})]}),c.jsx(Wr,{})]}),c.jsx(Zr,{scrolled:e})]})}function no(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},child:[]},{tag:"path",attr:{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},child:[]}]})(e)}function ro(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"},child:[]}]})(e)}const oo="/assets/Posterfy%20-%20KTT%20ZOO-CxBnzqPo.png",io="/assets/Posterfy%20-%20Starboy-D-DENvRF.png",ao="/assets/Posterfy%20-%20CHROMAKOPIA-CM4CsO5a.png",so="/assets/Posterfy%20-%20ZIMA-D5rEFrR_.png",lo="/assets/Posterfy%20-%20Sobrevivendo%20no%20inferno-JOZ3yMud.png",co=[{id:1,coverImage:oo},{id:2,coverImage:io},{id:3,coverImage:ao},{id:4,coverImage:so},{id:5,coverImage:lo}],uo=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  perspective: 1000px;
  padding: 80px 0;
  overflow: hidden;
`,fo=m.div`
  position: relative;
  width: ${e=>e.index===2?"329px":e.index===1||e.index===3?"288px":"249px"};
  height: ${e=>e.index===2?"465px":e.index===1||e.index===3?"405px":"345px"};
  margin: 0 -30px;
  transition: ${e=>e.isHovered?`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s,
              z-index 0s 0.3s`:`transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              box-shadow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              z-index 0s`};
  z-index: ${e=>e.isHovered?15:e.index===2?10:e.index===3?9:e.index===1?8:e.index===4?7:e.index===0?6:5};  transform: ${e=>{const{isHovered:t,index:r,hoveredIndex:d,isMobile:n}=e;if(n)return"scale(1)";let a="scale(0.95)";if(t)a="scale(1.08) translateY(-8px)";else if(d!==null){let o=0;switch(d){case 0:r>0&&(o=70);break;case 1:r>=2&&(o=70);break;case 2:o=0;break;case 3:r<=2&&(o=-70);break;case 4:r<4&&(o=-70);break}o!==0&&(a=`scale(0.95) translateX(${o}px)`)}return a}};
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
`,ho=m.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
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
`,mo=m.div`
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
`,po=m.button`
  position: absolute;
  top: -10px;
  right: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`,go=()=>{const[e,t]=g.useState(null),[r,d]=g.useState(!1),[n,a]=g.useState(!1),[o,s]=g.useState(null);g.useEffect(()=>{const f=()=>{d(window.innerWidth<=770),a(window.innerWidth>480&&window.innerWidth<=1200)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const l=f=>{s(f),document.body.style.overflow="hidden"},u=()=>{s(null),document.body.style.overflow="auto"};return c.jsxs(c.Fragment,{children:[c.jsx(uo,{children:co.map((f,h)=>c.jsx(fo,{index:h,isHovered:e===h,hoveredIndex:e,otherIsHovered:e!==null,isMobile:r,isTablet:n,onMouseEnter:()=>t(h),onMouseLeave:()=>t(null),onClick:()=>l(f.coverImage||"/placeholder.svg"),children:c.jsx("img",{src:f.coverImage||"/placeholder.svg",alt:`${f.artist} - ${f.title}`})},f.id))}),o&&c.jsx(ho,{onClick:u,children:c.jsxs(mo,{onClick:f=>f.stopPropagation(),children:[c.jsx(po,{onClick:u,children:"×"}),c.jsx("img",{src:o,alt:"Album cover"})]})})]})},xo=m.div`
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
`,bo=()=>c.jsx(xo,{children:c.jsx(go,{})}),vo=m.div`
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
`,yo=m.div`
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
`,wo=m.h1`
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
`,Xt=m.p`
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
`,_o=m.div`
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
        background: white;
        filter: blur(20px);
        z-index: -10;
        margin-top: -50px;
        opacity: 0.05;
    }

    @keyframes heartbeat {
        0%, 50%, 90%, 100% { opacity: 0.1; transform: scale(1); }
        30%, 70% { opacity: 0.25; transform: scale(1.05); }
    }
`,Co=m(no)`
    font-size: 2em;
    color: white;
    margin: 10px;
    opacity: ${e=>e.visible?.2:0};
    position: absolute;
    bottom: 7%;
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function jo({showAnimation:e=!1}){const{t}=X(),[r,d]=g.useState(!1);g.useEffect(()=>{if(e){const a=setTimeout(()=>{d(!0)},50);return()=>clearTimeout(a)}},[e]);const n=()=>{window.scrollTo({top:window.innerHeight-100,behavior:"smooth"})};return c.jsxs(c.Fragment,{children:[c.jsx(vo,{children:c.jsxs(yo,{children:[c.jsx(wo,{visible:r,animationDelay:200,children:"Posterfy"}),c.jsx(Xt,{visible:r,animationDelay:400,children:t("paragraphHero1")}),c.jsx(Xt,{visible:r,animationDelay:600,children:t("paragraphHero2")}),c.jsxs("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:[c.jsx("h2",{children:"Free Album Poster Generator"}),c.jsx("p",{children:"Create custom music posters from your favorite Spotify albums. Design professional album artwork posters with our easy-to-use online tool. No signup required - start creating your album poster now!"}),c.jsx("h3",{children:"Features:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Free album poster maker"}),c.jsx("li",{children:"Spotify integration"}),c.jsx("li",{children:"Custom poster design"}),c.jsx("li",{children:"High-quality downloads"}),c.jsx("li",{children:"Multiple format options"}),c.jsx("li",{children:"Professional templates"})]})]}),c.jsx(_o,{visible:r,animationDelay:800,children:c.jsx(ze,{fill:"white",width:"180px",height:"198.23px"})}),c.jsx(Co,{visible:r,animationDelay:1e3,onClick:n})]})}),c.jsx(bo,{})]})}const To=m.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-inline: auto;
`,ko=m.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: white;
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;function lt({text:e,type:t}){return c.jsx(c.Fragment,{children:t==1?c.jsx(To,{children:e}):c.jsx(ko,{children:e})})}const Io=m.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: auto;

    @media (max-width: 365px) {
        display: none;
    }
`,So=m.h3`
    color: white;
    font-size: 3em;
    font-weight: bolder;
    white-space: pre-line;
`,Ro=m.p`
    color: white;
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
`,Jt=m.div`
    display: flex;
`;function Eo({title:e,paragraph:t}){return c.jsxs(Io,{children:[c.jsx(Jt,{children:c.jsx(So,{children:e})}),c.jsx(Jt,{children:c.jsx(Ro,{children:t})})]})}function Oo(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Ao(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Do(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"},child:[]}]})(e)}function Po(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function zo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Mo(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function Fo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function $o(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Lo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function qo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Uo(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"},child:[]}]})(e)}function Ho(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M244 400 100 256l144-144M120 256h292"},child:[]}]})(e)}function Bo(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(e)}const Qo=m.div`
    width: 100%;
`,No=m.div`
    background-color: rgba(255, 255, 255, 0.05);
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
`,Go=m(Lo)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
`,Wo=m(Bo)`
    font-size: 1.35em;
    opacity: .25;
    margin-inline: 15px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover, &:focus{
        opacity: 1 !important;
    }
`,Vo=m.span`
    width: 1px;
    height: 70%;
    opacity: 0.1;
    background-color: white;
`,Yo=m.input`
    background-color: transparent;
    text-decoration: none;
    border: none;
    margin-left: 15px;
    font-size: 1.2em;
    font-weight: 600;
    outline: none;
    opacity: 0.77;
    width: 100%;
`;function Ko({onSearch:e,value:t=""}){const{t:r}=X(),[d,n]=g.useState(t);g.useEffect(()=>{n(t)},[t]);const a=l=>{l.key==="Enter"&&(e(d),d.trim()&&Kt(d.trim()))},o=l=>{n(l.target.value)},s=()=>{e(d),d.trim()&&Kt(d.trim())};return c.jsx(Qo,{children:c.jsxs(No,{role:"search","aria-label":"Album search for poster creation",children:[c.jsx(Go,{"aria-hidden":"true"}),c.jsx(Vo,{}),c.jsx(Yo,{placeholder:r("SearchPlaceholder"),value:d,onChange:o,onKeyDown:a,"aria-label":"Search for albums to create posters",title:"Search any album from Spotify to generate a custom poster",autoComplete:"off",type:"search"}),c.jsx(Wo,{onClick:s,"aria-label":"Search for album",title:"Click to search and create album poster",role:"button",tabIndex:0})]})})}const Xo=V`
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,Jo=V`
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(2); 
        opacity: 0; 
    }
`,Zo=m.div`
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
`,ei=m.div`
    animation: ${e=>e.isExiting?Jo:Xo} ${e=>e.isExiting?"0.8s":"0s"} ${e=>e.isExiting?"ease-out forwards":"infinite"};
`;function ti({isVisible:e}){const[t,r]=g.useState(!1),[d,n]=g.useState(!1);return g.useEffect(()=>{!e&&!t&&(r(!0),setTimeout(()=>{n(!0)},800))},[e,t]),c.jsx(Zo,{isVisible:e,fadeOutContainer:d,children:c.jsx(ei,{isExiting:t,children:c.jsx(ze,{fill:"white",width:"100px",height:"118.23px"})})})}const ni=V`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,ri=V`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`,gt=V`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,oi=V`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,ii=m.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
`,ai=m.div`
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
`,si=m.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${gt} 0.5s ease-out;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,li=m.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  
  .icon-main {
    animation: ${ni} 3s ease infinite;
  }
  
  .icon-shadow {
    animation: ${ri} 3s ease infinite;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`,ci=m.div`
  position: absolute;
  top: 0;
  left: 10;
  transition: all 0.3s ease;
  margin-inline: auto;
`,ui=m.div`
  position: absolute;
  bottom: 0px;
  width: 105px;
  height: 20px;
  background: #ffffff6f;
  filter: blur(15px);
  opacity: 0.3;
  border-radius: 50%;
  transition: all 0.3s ease;
`,di=m.div`
  font-size: 1.1em;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  position: relative;
  
  .credit-content {
    display: inline-block;
    background: white;
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${oi} 6s linear infinite;
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
`,fi=m.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85em;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    color: rgba(255, 255, 255, 0.6);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,hi=m.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${gt} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-top: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;m.h3`
  font-size: 1.1em;
  font-weight: 600;
  color: white;
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
`;const mi=m.div`
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
`,pi=m.button`
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  border: ${e=>e.active?"1px solid var(--PosterfyGreen)":"1px solid rgba(255, 255, 255, 0.25)"};
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
  
  svg {
    font-size: 1.5em;
    color: white;
    opacity: 0.9;
  }
  
  span {
    font-size: 0.7em;
    color: white;
    opacity: 0.9;
    font-weight: 500;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`,gi=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 45px;
`,xi=m.p`
  font-size: 0.8em;
  margin-top: 10px;
  right: 20px;
  font-weight: bolder;
  transition: all 0.3s ease;
  opacity: ${e=>e.active?"0.5":"0"};;
`,bi=m.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${gt} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,vi=m.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  margin-top: 25px;
  
  svg {
    font-size: 1.3em;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  
  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 6px 12px;
  }
`;function yi(){const{t:e}=X(),[t,r]=g.useState(localStorage.getItem("theme")||"theme-dark");g.useEffect(()=>{document.body.className=t,localStorage.setItem("theme",t)},[t]);const d=o=>{r(o)},n=[{id:"theme-dark",name:"Dark",color:"#070815",icon:c.jsx(Fo,{})},{id:"theme-fy",name:"Midnight",color:"#151515",icon:c.jsx(qo,{})},{id:"theme-rose",name:"Rose",color:"#232136",icon:c.jsx(Mo,{})},{id:"theme-carmesin",name:"Crimson",color:"#1f0c19",icon:c.jsx(Po,{})},{id:"theme-brown",name:"Earth",color:"#1e1516",icon:c.jsx(Uo,{})}],a=new Date().getFullYear();return c.jsxs(ii,{children:[c.jsx("div",{style:{position:"absolute",left:"-10000px",top:"auto",width:"1px",height:"1px",overflow:"hidden"},children:c.jsxs("footer",{children:[c.jsx("h4",{children:"Album Poster Generator Links"}),c.jsxs("nav",{children:[c.jsx("a",{href:"https://posterfy.space",children:"Free Album Poster Maker"}),c.jsx("a",{href:"https://posterfy.space#poster-generator",children:"Create Music Posters"}),c.jsx("a",{href:"https://posterfy.space#faq",children:"Album Poster FAQ"})]}),c.jsx("p",{children:"Posterfy is the best free album poster generator online. Create custom music posters from Spotify albums instantly. No signup required for our album poster maker."}),c.jsx("address",{children:"Contact: Posterfy Album Poster Generator Website: https://posterfy.space Keywords: album poster generator, music poster maker, spotify poster, free poster creator"})]})}),c.jsxs(ai,{children:[c.jsxs(si,{children:[c.jsxs(li,{children:[c.jsx(ui,{className:"icon-shadow"}),c.jsx(ci,{className:"icon-main",children:c.jsx(ze,{fill:"white",width:"100px",height:"88.1px"})})]}),c.jsx(di,{children:c.jsxs("div",{className:"credit-content",children:[e("MadeBy")," ",c.jsx("a",{href:"https://github.com/avictormorais",target:"blank",children:"Victor"})]})}),c.jsxs(fi,{children:[c.jsx(zo,{})," © ",a," Posterfy. ",e("AllRights","All rights reserved.")]})]}),c.jsx(hi,{children:c.jsx(mi,{children:n.map(o=>c.jsxs(gi,{children:[c.jsx(pi,{color:o.color,active:t===o.id,onClick:()=>d(o.id),"aria-label":`${e("SwitchTo","Switch to")} ${o.name} ${e("Theme").toLowerCase()}`,children:o.icon},o.id),c.jsx(xi,{active:t===o.id,children:o.name})]},o.id))})}),c.jsx(bi,{children:c.jsxs(vi,{href:"https://github.com/avictormorais/posterfy",target:"blank",children:[c.jsx(Oo,{})," ",e("ViewGitHub","GitHub")]})})]})]})}const wi=m.div`
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
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.3s;
        background-color: rgba(255, 255, 255, 0.01);
        z-index: 1;
    }

    :hover::before {
        background-color: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
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

`,_i=m.img`
    width: 100%;
    min-height: 200px;
    background-color: rgba(255, 255, 255, 0.05);
    height: auto;
    border-radius: 10px;
    z-index: 10;

    @media (max-width: 650px) {
        width: 100px;
        height: 100px;
        min-height: unset;
    }
`,Ci=m.h3`
    font-weight: 600;
    color: white;
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
`,ji=m.p`
    font-weight: 500;
    color: white;
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
`,Ti=m.div`
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
`;function ki({title:e,artist:t,cover:r,id:d,onClick:n,animationDelay:a=0}){const[o,s]=g.useState(!1);return g.useEffect(()=>{const l=setTimeout(()=>{s(!0)},a);return()=>clearTimeout(l)},[a]),c.jsxs(wi,{onClick:()=>n(d),visible:o,children:[c.jsx(_i,{src:r}),c.jsxs(Ti,{children:[c.jsx(Ci,{children:e}),c.jsx(ji,{children:t})]})]})}function Dn(e){return P({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const Ii=m.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`,Si=m.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`,Ri=m.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`,Ei=m(Dn)`
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
`;function Pn(){const{t:e}=X();return c.jsxs(Ii,{children:[c.jsx(Ei,{}),c.jsx(Si,{children:e("Loading")}),c.jsx(Ri,{children:e("LoadingText")})]})}const Oi=m.div`
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
`;function Zt({query:e,onclick:t}){const[r,d]=g.useState([]),[n,a]=g.useState("");return g.useEffect(()=>{(async()=>{const f=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`},body:"grant_type=client_credentials"})).json();a(f.access_token)})()},[]),g.useEffect(()=>{(async()=>{if(n)try{let s;if(e?s=await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(e)}&type=album`,{headers:{Authorization:`Bearer ${n}`}}):s=await fetch("https://api.spotify.com/v1/browse/new-releases?offset=0&limit=14&locale=en-US",{headers:{Authorization:`Bearer ${n}`}}),!s.ok){const f=await s.text();throw new Error(`Erro na API: ${f}`)}const l=await s.json(),u=l.albums.items.filter(f=>f!=null);d(u.map(f=>{var h,x;return{id:f.id,title:f.name,artist:(h=f.artists)==null?void 0:h.map(_=>_.name).join(", "),cover:(x=f.images[0])==null?void 0:x.url}}))}catch(s){console.error(s)}})()},[e,n]),c.jsx(c.Fragment,{children:r.length===0?c.jsx(Pn,{}):c.jsx(Oi,{children:r.map((o,s)=>c.jsx(ki,{onClick:()=>t(o.id),cover:o.cover,title:o.title,artist:o.artist,id:o.id,animationDelay:s*100},o.id))})})}function Ai(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(e)}function Di(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"},child:[]}]})(e)}const Pi=m.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    margin-top: 15px;
`,zi=m(Ai)`
    font-size: 2em;
    transition: transform 0.3s ease;
    transform: ${({showA:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,Mi=m.h2`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
`,Fi=m.hr`
    opacity: 0.15;
    margin: 5px;
`,$i=m.div`
    max-height: ${({showA:e})=>e?"1000px":"0"};
    overflow: hidden;
    transition: max-height 0.5s ease;
`,Li=m.p`
    font-size: 1em;
    font-weight: 400;
    opacity: 0.5;
    margin-block: 10px;
    margin-inline: 10px;
`;function se({q:e,a:t}){const[r,d]=g.useState(!1);function n(){d(!r)}return c.jsxs(c.Fragment,{children:[c.jsxs(Pi,{onClick:n,children:[c.jsx(zi,{showA:r}),c.jsx(Mi,{children:e})]}),c.jsx(Fi,{}),c.jsx($i,{showA:r,children:c.jsx(Li,{showA:r,children:t})})]})}const qi=m.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`,Ui=m.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;function Hi(){const{t:e}=X();return c.jsxs(qi,{id:"faq",children:[c.jsx(lt,{text:"FAQ - Album Poster Generator",type:1}),c.jsxs(Ui,{children:[c.jsx(se,{q:e("FAQ_HowItWorks_Question"),a:e("FAQ_HowItWorks_Answer")}),c.jsx(se,{q:e("FAQ_Affiliation_Question"),a:e("FAQ_Affiliation_Answer")}),c.jsx(se,{q:e("FAQ_AlbumSearch_Question"),a:e("FAQ_AlbumSearch_Answer")}),c.jsx(se,{q:e("FAQ_SaveData_Question"),a:e("FAQ_SaveData_Answer")}),c.jsx(se,{q:e("FAQ_ReportIssue_Question"),a:e("FAQ_ReportIssue_Answer")})]})]})}const Bi=m.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Qi=m.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Ni=m.input`
    font-size: .85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function K({title:e,value:t,onChange:r}){return c.jsxs(Bi,{children:[c.jsx(Qi,{children:e}),c.jsx(Ni,{placeholder:e,value:t,onChange:r})]})}const Gi=m.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Wi=m.input`
    font-size: 1em;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 0.5;
`,Vi=m.input`
    font-size: .85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
`;function en({title:e,value:t,onChangeTitle:r,onChangeDate:d}){return c.jsxs(Gi,{children:[c.jsx(Wi,{placeholder:e,value:e,onChange:r}),c.jsx(Vi,{placeholder:e,value:t,onChange:d})]})}const Yi=m.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Ki=m.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Xi=m.div`
    font-size: .85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`,Ji=m.div`
    width: 16px;
    height: 16px;
    border-radius: 10px;
    margin-left: 10px;
`,Zi=m.p`
    font-size: 1em;
    font-weight: bold;
    margin-left: 10px;
    opacity: 0.7;
`;function le({title:e,value:t,onClick:r}){return c.jsxs(Yi,{children:[c.jsx(Ki,{children:e}),c.jsxs(Xi,{onClick:r,children:[c.jsx(Ji,{style:{backgroundColor:t}}),c.jsx(Zi,{children:t})]})]})}function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(e[d]=r[d])}return e}).apply(this,arguments)}function zn(e,t){if(e==null)return{};var r,d,n={},a=Object.keys(e);for(d=0;d<a.length;d++)t.indexOf(r=a[d])>=0||(n[r]=e[r]);return n}function ct(e){var t=g.useRef(e),r=g.useRef(function(d){t.current&&t.current(d)});return t.current=e,r.current}var ue=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},ce=function(e){return"touches"in e},ut=function(e){return e&&e.ownerDocument.defaultView||self},tn=function(e,t,r){var d=e.getBoundingClientRect(),n=ce(t)?function(a,o){for(var s=0;s<a.length;s++)if(a[s].identifier===o)return a[s];return a[0]}(t.touches,r):t;return{left:ue((n.pageX-(d.left+ut(e).pageXOffset))/d.width),top:ue((n.pageY-(d.top+ut(e).pageYOffset))/d.height)}},nn=function(e){!ce(e)&&e.preventDefault()},Mn=q.memo(function(e){var t=e.onMove,r=e.onKey,d=zn(e,["onMove","onKey"]),n=g.useRef(null),a=ct(t),o=ct(r),s=g.useRef(null),l=g.useRef(!1),u=g.useMemo(function(){var _=function(w){nn(w),(ce(w)?w.touches.length>0:w.buttons>0)&&n.current?a(tn(n.current,w,s.current)):p(!1)},b=function(){return p(!1)};function p(w){var C=l.current,T=ut(n.current),v=w?T.addEventListener:T.removeEventListener;v(C?"touchmove":"mousemove",_),v(C?"touchend":"mouseup",b)}return[function(w){var C=w.nativeEvent,T=n.current;if(T&&(nn(C),!function(j,I){return I&&!ce(j)}(C,l.current)&&T)){if(ce(C)){l.current=!0;var v=C.changedTouches||[];v.length&&(s.current=v[0].identifier)}T.focus(),a(tn(T,C,s.current)),p(!0)}},function(w){var C=w.which||w.keyCode;C<37||C>40||(w.preventDefault(),o({left:C===39?.05:C===37?-.05:0,top:C===40?.05:C===38?-.05:0}))},p]},[o,a]),f=u[0],h=u[1],x=u[2];return g.useEffect(function(){return x},[x]),q.createElement("div",Fe({},d,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:n,onKeyDown:h,tabIndex:0,role:"slider"}))}),xt=function(e){return e.filter(Boolean).join(" ")},Fn=function(e){var t=e.color,r=e.left,d=e.top,n=d===void 0?.5:d,a=xt(["react-colorful__pointer",e.className]);return q.createElement("div",{className:a,style:{top:100*n+"%",left:100*r+"%"}},q.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},$=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},ea=function(e){return ia(dt(e))},dt=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?$(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?$(parseInt(e.substring(6,8),16)/255,2):1}},ta=function(e){return oa(ra(e))},na=function(e){var t=e.s,r=e.v,d=e.a,n=(200-t)*r/100;return{h:$(e.h),s:$(n>0&&n<200?t*r/100/(n<=100?n:200-n)*100:0),l:$(n/2),a:$(d,2)}},ft=function(e){var t=na(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},ra=function(e){var t=e.h,r=e.s,d=e.v,n=e.a;t=t/360*6,r/=100,d/=100;var a=Math.floor(t),o=d*(1-r),s=d*(1-(t-a)*r),l=d*(1-(1-t+a)*r),u=a%6;return{r:$(255*[d,s,o,o,l,d][u]),g:$(255*[l,d,d,s,o,o][u]),b:$(255*[o,o,l,d,d,s][u]),a:$(n,2)}},ge=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},oa=function(e){var t=e.r,r=e.g,d=e.b,n=e.a,a=n<1?ge($(255*n)):"";return"#"+ge(t)+ge(r)+ge(d)+a},ia=function(e){var t=e.r,r=e.g,d=e.b,n=e.a,a=Math.max(t,r,d),o=a-Math.min(t,r,d),s=o?a===t?(r-d)/o:a===r?2+(d-t)/o:4+(t-r)/o:0;return{h:$(60*(s<0?s+6:s)),s:$(a?o/a*100:0),v:$(a/255*100),a:n}},aa=q.memo(function(e){var t=e.hue,r=e.onChange,d=xt(["react-colorful__hue",e.className]);return q.createElement("div",{className:d},q.createElement(Mn,{onMove:function(n){r({h:360*n.left})},onKey:function(n){r({h:ue(t+360*n.left,0,360)})},"aria-label":"Hue","aria-valuenow":$(t),"aria-valuemax":"360","aria-valuemin":"0"},q.createElement(Fn,{className:"react-colorful__hue-pointer",left:t/360,color:ft({h:t,s:100,v:100,a:1})})))}),sa=q.memo(function(e){var t=e.hsva,r=e.onChange,d={backgroundColor:ft({h:t.h,s:100,v:100,a:1})};return q.createElement("div",{className:"react-colorful__saturation",style:d},q.createElement(Mn,{onMove:function(n){r({s:100*n.left,v:100-100*n.top})},onKey:function(n){r({s:ue(t.s+100*n.left,0,100),v:ue(t.v-100*n.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+$(t.s)+"%, Brightness "+$(t.v)+"%"},q.createElement(Fn,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ft(t)})))}),$n=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},la=function(e,t){return e.toLowerCase()===t.toLowerCase()||$n(dt(e),dt(t))};function ca(e,t,r){var d=ct(r),n=g.useState(function(){return e.toHsva(t)}),a=n[0],o=n[1],s=g.useRef({color:t,hsva:a});g.useEffect(function(){if(!e.equal(t,s.current.color)){var u=e.toHsva(t);s.current={hsva:u,color:t},o(u)}},[t,e]),g.useEffect(function(){var u;$n(a,s.current.hsva)||e.equal(u=e.fromHsva(a),s.current.color)||(s.current={hsva:a,color:u},d(u))},[a,e,d]);var l=g.useCallback(function(u){o(function(f){return Object.assign({},f,u)})},[]);return[a,l]}var ua=typeof window<"u"?g.useLayoutEffect:g.useEffect,da=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},rn=new Map,fa=function(e){ua(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!rn.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,rn.set(t,r);var d=da();d&&r.setAttribute("nonce",d),t.head.appendChild(r)}},[])},ha=function(e){var t=e.className,r=e.colorModel,d=e.color,n=d===void 0?r.defaultColor:d,a=e.onChange,o=zn(e,["className","colorModel","color","onChange"]),s=g.useRef(null);fa(s);var l=ca(r,n,a),u=l[0],f=l[1],h=xt(["react-colorful",t]);return q.createElement("div",Fe({},o,{ref:s,className:h}),q.createElement(sa,{hsva:u,onChange:f}),q.createElement(aa,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},ma={defaultColor:"000",toHsva:ea,fromHsva:function(e){return ta({h:e.h,s:e.s,v:e.v,a:1})},equal:la},pa=function(e){return q.createElement(ha,Fe({},e,{colorModel:ma}))};function ga(e){return P({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"},child:[]}]})(e)}const xa=m.div`
    background-color: var(--backgroundColor);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: white;
    border: 3px solid rgba(255, 255, 255, 0.05);
`,ba=m(pa)`
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
`,Xe=m.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`,va=m.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-inline: auto;
    cursor: pointer;
`,ya=m.p`
    font-size: 1em;
    font-weight: bold;
    opacity: 0.8;
    margin-block: auto;
`,wa=m.input`
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    outline: none;
    font-weight: bold;
    opacity: 0.5;
    width: 100%;
    max-width: 150px;
    margin-right: auto;
    margin-left: 10px;
    font-size: 1em;
    padding: 3px;
    border-radius: 5px;
`,_a=m(Do)`
    font-size: 1em;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
`,Ca=m($o)`
    font-size: 1em;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 5px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
`,ja=m(ga)`
    font-size: 1em;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 5px;
    border-radius: 5px;
    margin-inline: 10px;
    cursor: pointer;
`,Ta=m(Ao)`
    font-size: 1em;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`,ka=m.img`
    border-radius: 5px;
    max-width: 200px;
    height: auto;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.05);
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    cursor: crosshair;
`;function Ia({DefaultColor:e,image:t,predefinedColors:r,position:d,onDone:n,onClose:a}){const[o,s]=g.useState(e),[l,u]=g.useState(!1),f=g.useRef(null),h=g.useRef(null);function x(){u(!l)}function _(p){s(p.target.value===""?"#":p.target.value)}function b(p){const w=f.current,T=h.current.getBoundingClientRect(),v=w.getContext("2d"),j=p.clientX-T.left,I=p.clientY-T.top,S=`#${[...v.getImageData(j,I,1,1).data].slice(0,3).map(R=>R.toString(16).padStart(2,"0")).join("")}`;s(S),x()}return c.jsxs(xa,{style:{position:"absolute",top:d.top,left:d.left,zIndex:1e3},children:[c.jsx("canvas",{ref:f,style:{display:"none"}}),l?c.jsx(ka,{ref:h,crossOrigin:"anonymous",draggable:"false",src:t,onClick:b,onLoad:()=>{const p=f.current,w=p.getContext("2d"),C=h.current;p.width=C.width,p.height=C.height,w.drawImage(C,0,0,C.width,C.height)}}):c.jsx(ba,{color:o,onChange:s}),c.jsx(Xe,{children:r.map(p=>c.jsx(va,{style:{backgroundColor:p},onClick:()=>s(p)},p))}),c.jsxs(Xe,{children:[c.jsx(ya,{children:"Hex"}),c.jsx(wa,{value:o,onChange:_})]}),c.jsxs(Xe,{children:[l?c.jsx(Ca,{onClick:x}):c.jsx(_a,{onClick:x}),c.jsx(ja,{onClick:a}),c.jsx(Ta,{onClick:()=>{n(o),Lr(o)}})]})]})}const Sa=m.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`,Ra=m.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Ea=m.div`
    font-size: 0.85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Oa=m.input`
    appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:checked {
        background-color: var(--PosterfyGreen);
    }
`,Aa=m.p`
    font-size: 0.85em;
    font-weight: bold;
    margin-left: 10px;
    margin-block: auto;
    cursor: pointer;
    opacity: ${({active:e})=>e?1:.5};
    transition: opacity 0.3s;
`;function xe({title:e,text:t,value:r,onChange:d}){const n=()=>d(!r);return c.jsxs(Sa,{children:[c.jsx(Ra,{children:e}),c.jsxs(Ea,{onClick:n,children:[c.jsx(Oa,{checked:r,readOnly:!0,type:"checkbox"}),c.jsx(Aa,{active:r,children:t})]})]})}function Da(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"},child:[]}]})(e)}function Pa(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"},child:[]}]})(e)}const za=m.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Ma=m.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Fa=m.div`
    font-size: 0.85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,$a=m.input`
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
`,La=m.p`
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
`,qa=m(Da)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function Ua({title:e,text:t,onChange:r}){const d=g.useRef(),n=()=>{d.current.click()},a=o=>{const s=o.target.files[0];t=s.name,s&&r(s)};return c.jsxs(za,{onClick:n,children:[c.jsx(Ma,{children:e}),c.jsxs(Fa,{children:[c.jsx(qa,{}),c.jsx($a,{ref:d,type:"file",accept:"image/png, image/jpg, image/jpeg",onChange:a}),c.jsx(La,{active:!0,children:t})]})]})}const Ha=m.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
`,Ba=m.p`
    font-size: 1em;
    font-weight: 500;
    margin-left: 5px;
    margin-bottom: 5px;
`,Qa=m.div`
    font-size: 0.85em;
    background-color: rgba(255, 255, 255, 0.05);
    border: none;
    padding: 5px;
    border-radius: 7px;
    outline: none;
    overflow: hidden;
    display: flex;
    align-items: center;
`,Na=m.input`
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
`,Ga=m.p`
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
`,Wa=m(Pa)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;function Va({title:e,text:t,onChange:r}){const d=g.useRef(),n=()=>{d.current.click()},a=o=>{const s=o.target.files[0];t=s.name,s&&r(s)};return c.jsxs(Ha,{onClick:n,children:[c.jsx(Ba,{children:e}),c.jsxs(Qa,{children:[c.jsx(Wa,{}),c.jsx(Na,{ref:d,type:"file",accept:".ttf,.otf",onChange:a}),c.jsx(Ga,{active:!0,children:t})]})]})}var B={};/*! *****************************************************************************
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
***************************************************************************** */var ht=function(e,t){return ht=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,d){r.__proto__=d}||function(r,d){for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(r[n]=d[n])},ht(e,t)};function Ya(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ht(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var mt=function(){return mt=Object.assign||function(t){for(var r,d=1,n=arguments.length;d<n;d++){r=arguments[d];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},mt.apply(this,arguments)};function Ka(e,t){var r={};for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&t.indexOf(d)<0&&(r[d]=e[d]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,d=Object.getOwnPropertySymbols(e);n<d.length;n++)t.indexOf(d[n])<0&&Object.prototype.propertyIsEnumerable.call(e,d[n])&&(r[d[n]]=e[d[n]]);return r}function Xa(e,t,r,d){var n=arguments.length,a=n<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,r):d,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,r,d);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}function Ja(e,t){return function(r,d){t(r,d,e)}}function Za(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function es(e,t,r,d){function n(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function s(f){try{u(d.next(f))}catch(h){o(h)}}function l(f){try{u(d.throw(f))}catch(h){o(h)}}function u(f){f.done?a(f.value):n(f.value).then(s,l)}u((d=d.apply(e,t||[])).next())})}function ts(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},d,n,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(f){return l([u,f])}}function l(u){if(d)throw new TypeError("Generator is already executing.");for(;r;)try{if(d=1,n&&(a=u[0]&2?n.return:u[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,u[1])).done)return a;switch(n=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,n=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){r.label=u[1];break}if(u[0]===6&&r.label<a[1]){r.label=a[1],a=u;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(u);break}a[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(e,r)}catch(f){u=[6,f],n=0}finally{d=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var bt=Object.create?function(e,t,r,d){d===void 0&&(d=r),Object.defineProperty(e,d,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,d){d===void 0&&(d=r),e[d]=t[r]};function ns(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&bt(t,e,r)}function pt(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],d=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&d>=e.length&&(e=void 0),{value:e&&e[d++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ln(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var d=r.call(e),n,a=[],o;try{for(;(t===void 0||t-- >0)&&!(n=d.next()).done;)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=d.return)&&r.call(d)}finally{if(o)throw o.error}}return a}function rs(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Ln(arguments[t]));return e}function os(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var d=Array(e),n=0,t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,n++)d[n]=a[o];return d}function is(e,t,r){if(r||arguments.length===2)for(var d=0,n=t.length,a;d<n;d++)(a||!(d in t))&&(a||(a=Array.prototype.slice.call(t,0,d)),a[d]=t[d]);return e.concat(a||t)}function de(e){return this instanceof de?(this.v=e,this):new de(e)}function as(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var d=r.apply(e,t||[]),n,a=[];return n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n;function o(x){d[x]&&(n[x]=function(_){return new Promise(function(b,p){a.push([x,_,b,p])>1||s(x,_)})})}function s(x,_){try{l(d[x](_))}catch(b){h(a[0][3],b)}}function l(x){x.value instanceof de?Promise.resolve(x.value.v).then(u,f):h(a[0][2],x)}function u(x){s("next",x)}function f(x){s("throw",x)}function h(x,_){x(_),a.shift(),a.length&&s(a[0][0],a[0][1])}}function ss(e){var t,r;return t={},d("next"),d("throw",function(n){throw n}),d("return"),t[Symbol.iterator]=function(){return this},t;function d(n,a){t[n]=e[n]?function(o){return(r=!r)?{value:de(e[n](o)),done:n==="return"}:a?a(o):o}:a}}function ls(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof pt=="function"?pt(e):e[Symbol.iterator](),r={},d("next"),d("throw"),d("return"),r[Symbol.asyncIterator]=function(){return this},r);function d(a){r[a]=e[a]&&function(o){return new Promise(function(s,l){o=e[a](o),n(s,l,o.done,o.value)})}}function n(a,o,s,l){Promise.resolve(l).then(function(u){a({value:u,done:s})},o)}}function cs(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var us=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function ds(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&bt(t,e,r);return us(t,e),t}function fs(e){return e&&e.__esModule?e:{default:e}}function hs(e,t,r,d){if(r==="a"&&!d)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!d:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?d:r==="a"?d.call(e):d?d.value:t.get(e)}function ms(e,t,r,d,n){if(d==="m")throw new TypeError("Private method is not writable");if(d==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return d==="a"?n.call(e,r):n?n.value=r:t.set(e,r),r}const ps=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return mt},__asyncDelegator:ss,__asyncGenerator:as,__asyncValues:ls,__await:de,__awaiter:es,__classPrivateFieldGet:hs,__classPrivateFieldSet:ms,__createBinding:bt,__decorate:Xa,__exportStar:ns,__extends:Ya,__generator:ts,__importDefault:fs,__importStar:ds,__makeTemplateObject:cs,__metadata:Za,__param:Ja,__read:Ln,__rest:Ka,__spread:rs,__spreadArray:is,__spreadArrays:os,__values:pt},Symbol.toStringTag,{value:"Module"})),Y=jr(ps);var be={},ve={},Je={},ye={},on;function gs(){if(on)return ye;on=1,ye.__esModule=!0;var e=g;function t(r,d){e.useEffect(function(){var n=!0,a=function(){return n},o=r(a);return function(){n=!1,o&&o()}},d)}return ye.useCurrentEffect=t,ye}var we={},an;function xs(){if(an)return we;an=1,we.__esModule=!0;var e=g;function t(r,d){var n=!0,a=function(){return n};return e.useEffect(function(){return function(){n=!1}},d),e.useCallback(r(a),d)}return we.useCurrentCallback=t,we}var sn;function qn(){return sn||(sn=1,function(e){function t(r){for(var d in r)e.hasOwnProperty(d)||(e[d]=r[d])}e.__esModule=!0,t(gs()),t(xs())}(Je)),Je}var Ze={},_e={},ln;function Un(){if(ln)return _e;ln=1,Object.defineProperty(_e,"__esModule",{value:!0});var e={loading:!0,data:void 0,error:void 0};return _e.default=e,_e}var Ce={},cn;function bs(){if(cn)return Ce;cn=1,Object.defineProperty(Ce,"__esModule",{value:!0});var e=Y,t=e.__importDefault(Un());function r(d,n){var a={start:function(){return t.default},resolve:function(){return e.__assign(e.__assign({},d),{data:n.payload,loading:!1})},reject:function(){return e.__assign(e.__assign({},d),{error:n.payload,loading:!1})}};return a[n.type]()}return Ce.default=r,Ce}var je={},et,un;function vs(){return un||(un=1,et={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}),et}var tt,dn;function Hn(){if(dn)return tt;dn=1;const e=vs(),t={};for(const n of Object.keys(e))t[e[n]]=n;const r={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};tt=r;for(const n of Object.keys(r)){if(!("channels"in r[n]))throw new Error("missing channels property: "+n);if(!("labels"in r[n]))throw new Error("missing channel labels property: "+n);if(r[n].labels.length!==r[n].channels)throw new Error("channel and label counts mismatch: "+n);const{channels:a,labels:o}=r[n];delete r[n].channels,delete r[n].labels,Object.defineProperty(r[n],"channels",{value:a}),Object.defineProperty(r[n],"labels",{value:o})}r.rgb.hsl=function(n){const a=n[0]/255,o=n[1]/255,s=n[2]/255,l=Math.min(a,o,s),u=Math.max(a,o,s),f=u-l;let h,x;u===l?h=0:a===u?h=(o-s)/f:o===u?h=2+(s-a)/f:s===u&&(h=4+(a-o)/f),h=Math.min(h*60,360),h<0&&(h+=360);const _=(l+u)/2;return u===l?x=0:_<=.5?x=f/(u+l):x=f/(2-u-l),[h,x*100,_*100]},r.rgb.hsv=function(n){let a,o,s,l,u;const f=n[0]/255,h=n[1]/255,x=n[2]/255,_=Math.max(f,h,x),b=_-Math.min(f,h,x),p=function(w){return(_-w)/6/b+1/2};return b===0?(l=0,u=0):(u=b/_,a=p(f),o=p(h),s=p(x),f===_?l=s-o:h===_?l=1/3+a-s:x===_&&(l=2/3+o-a),l<0?l+=1:l>1&&(l-=1)),[l*360,u*100,_*100]},r.rgb.hwb=function(n){const a=n[0],o=n[1];let s=n[2];const l=r.rgb.hsl(n)[0],u=1/255*Math.min(a,Math.min(o,s));return s=1-1/255*Math.max(a,Math.max(o,s)),[l,u*100,s*100]},r.rgb.cmyk=function(n){const a=n[0]/255,o=n[1]/255,s=n[2]/255,l=Math.min(1-a,1-o,1-s),u=(1-a-l)/(1-l)||0,f=(1-o-l)/(1-l)||0,h=(1-s-l)/(1-l)||0;return[u*100,f*100,h*100,l*100]};function d(n,a){return(n[0]-a[0])**2+(n[1]-a[1])**2+(n[2]-a[2])**2}return r.rgb.keyword=function(n){const a=t[n];if(a)return a;let o=1/0,s;for(const l of Object.keys(e)){const u=e[l],f=d(n,u);f<o&&(o=f,s=l)}return s},r.keyword.rgb=function(n){return e[n]},r.rgb.xyz=function(n){let a=n[0]/255,o=n[1]/255,s=n[2]/255;a=a>.04045?((a+.055)/1.055)**2.4:a/12.92,o=o>.04045?((o+.055)/1.055)**2.4:o/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92;const l=a*.4124+o*.3576+s*.1805,u=a*.2126+o*.7152+s*.0722,f=a*.0193+o*.1192+s*.9505;return[l*100,u*100,f*100]},r.rgb.lab=function(n){const a=r.rgb.xyz(n);let o=a[0],s=a[1],l=a[2];o/=95.047,s/=100,l/=108.883,o=o>.008856?o**(1/3):7.787*o+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;const u=116*s-16,f=500*(o-s),h=200*(s-l);return[u,f,h]},r.hsl.rgb=function(n){const a=n[0]/360,o=n[1]/100,s=n[2]/100;let l,u,f;if(o===0)return f=s*255,[f,f,f];s<.5?l=s*(1+o):l=s+o-s*o;const h=2*s-l,x=[0,0,0];for(let _=0;_<3;_++)u=a+1/3*-(_-1),u<0&&u++,u>1&&u--,6*u<1?f=h+(l-h)*6*u:2*u<1?f=l:3*u<2?f=h+(l-h)*(2/3-u)*6:f=h,x[_]=f*255;return x},r.hsl.hsv=function(n){const a=n[0];let o=n[1]/100,s=n[2]/100,l=o;const u=Math.max(s,.01);s*=2,o*=s<=1?s:2-s,l*=u<=1?u:2-u;const f=(s+o)/2,h=s===0?2*l/(u+l):2*o/(s+o);return[a,h*100,f*100]},r.hsv.rgb=function(n){const a=n[0]/60,o=n[1]/100;let s=n[2]/100;const l=Math.floor(a)%6,u=a-Math.floor(a),f=255*s*(1-o),h=255*s*(1-o*u),x=255*s*(1-o*(1-u));switch(s*=255,l){case 0:return[s,x,f];case 1:return[h,s,f];case 2:return[f,s,x];case 3:return[f,h,s];case 4:return[x,f,s];case 5:return[s,f,h]}},r.hsv.hsl=function(n){const a=n[0],o=n[1]/100,s=n[2]/100,l=Math.max(s,.01);let u,f;f=(2-o)*s;const h=(2-o)*l;return u=o*l,u/=h<=1?h:2-h,u=u||0,f/=2,[a,u*100,f*100]},r.hwb.rgb=function(n){const a=n[0]/360;let o=n[1]/100,s=n[2]/100;const l=o+s;let u;l>1&&(o/=l,s/=l);const f=Math.floor(6*a),h=1-s;u=6*a-f,f&1&&(u=1-u);const x=o+u*(h-o);let _,b,p;switch(f){default:case 6:case 0:_=h,b=x,p=o;break;case 1:_=x,b=h,p=o;break;case 2:_=o,b=h,p=x;break;case 3:_=o,b=x,p=h;break;case 4:_=x,b=o,p=h;break;case 5:_=h,b=o,p=x;break}return[_*255,b*255,p*255]},r.cmyk.rgb=function(n){const a=n[0]/100,o=n[1]/100,s=n[2]/100,l=n[3]/100,u=1-Math.min(1,a*(1-l)+l),f=1-Math.min(1,o*(1-l)+l),h=1-Math.min(1,s*(1-l)+l);return[u*255,f*255,h*255]},r.xyz.rgb=function(n){const a=n[0]/100,o=n[1]/100,s=n[2]/100;let l,u,f;return l=a*3.2406+o*-1.5372+s*-.4986,u=a*-.9689+o*1.8758+s*.0415,f=a*.0557+o*-.204+s*1.057,l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,f=f>.0031308?1.055*f**(1/2.4)-.055:f*12.92,l=Math.min(Math.max(0,l),1),u=Math.min(Math.max(0,u),1),f=Math.min(Math.max(0,f),1),[l*255,u*255,f*255]},r.xyz.lab=function(n){let a=n[0],o=n[1],s=n[2];a/=95.047,o/=100,s/=108.883,a=a>.008856?a**(1/3):7.787*a+16/116,o=o>.008856?o**(1/3):7.787*o+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const l=116*o-16,u=500*(a-o),f=200*(o-s);return[l,u,f]},r.lab.xyz=function(n){const a=n[0],o=n[1],s=n[2];let l,u,f;u=(a+16)/116,l=o/500+u,f=u-s/200;const h=u**3,x=l**3,_=f**3;return u=h>.008856?h:(u-16/116)/7.787,l=x>.008856?x:(l-16/116)/7.787,f=_>.008856?_:(f-16/116)/7.787,l*=95.047,u*=100,f*=108.883,[l,u,f]},r.lab.lch=function(n){const a=n[0],o=n[1],s=n[2];let l;l=Math.atan2(s,o)*360/2/Math.PI,l<0&&(l+=360);const f=Math.sqrt(o*o+s*s);return[a,f,l]},r.lch.lab=function(n){const a=n[0],o=n[1],l=n[2]/360*2*Math.PI,u=o*Math.cos(l),f=o*Math.sin(l);return[a,u,f]},r.rgb.ansi16=function(n,a=null){const[o,s,l]=n;let u=a===null?r.rgb.hsv(n)[2]:a;if(u=Math.round(u/50),u===0)return 30;let f=30+(Math.round(l/255)<<2|Math.round(s/255)<<1|Math.round(o/255));return u===2&&(f+=60),f},r.hsv.ansi16=function(n){return r.rgb.ansi16(r.hsv.rgb(n),n[2])},r.rgb.ansi256=function(n){const a=n[0],o=n[1],s=n[2];return a===o&&o===s?a<8?16:a>248?231:Math.round((a-8)/247*24)+232:16+36*Math.round(a/255*5)+6*Math.round(o/255*5)+Math.round(s/255*5)},r.ansi16.rgb=function(n){let a=n%10;if(a===0||a===7)return n>50&&(a+=3.5),a=a/10.5*255,[a,a,a];const o=(~~(n>50)+1)*.5,s=(a&1)*o*255,l=(a>>1&1)*o*255,u=(a>>2&1)*o*255;return[s,l,u]},r.ansi256.rgb=function(n){if(n>=232){const u=(n-232)*10+8;return[u,u,u]}n-=16;let a;const o=Math.floor(n/36)/5*255,s=Math.floor((a=n%36)/6)/5*255,l=a%6/5*255;return[o,s,l]},r.rgb.hex=function(n){const o=(((Math.round(n[0])&255)<<16)+((Math.round(n[1])&255)<<8)+(Math.round(n[2])&255)).toString(16).toUpperCase();return"000000".substring(o.length)+o},r.hex.rgb=function(n){const a=n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!a)return[0,0,0];let o=a[0];a[0].length===3&&(o=o.split("").map(h=>h+h).join(""));const s=parseInt(o,16),l=s>>16&255,u=s>>8&255,f=s&255;return[l,u,f]},r.rgb.hcg=function(n){const a=n[0]/255,o=n[1]/255,s=n[2]/255,l=Math.max(Math.max(a,o),s),u=Math.min(Math.min(a,o),s),f=l-u;let h,x;return f<1?h=u/(1-f):h=0,f<=0?x=0:l===a?x=(o-s)/f%6:l===o?x=2+(s-a)/f:x=4+(a-o)/f,x/=6,x%=1,[x*360,f*100,h*100]},r.hsl.hcg=function(n){const a=n[1]/100,o=n[2]/100,s=o<.5?2*a*o:2*a*(1-o);let l=0;return s<1&&(l=(o-.5*s)/(1-s)),[n[0],s*100,l*100]},r.hsv.hcg=function(n){const a=n[1]/100,o=n[2]/100,s=a*o;let l=0;return s<1&&(l=(o-s)/(1-s)),[n[0],s*100,l*100]},r.hcg.rgb=function(n){const a=n[0]/360,o=n[1]/100,s=n[2]/100;if(o===0)return[s*255,s*255,s*255];const l=[0,0,0],u=a%1*6,f=u%1,h=1-f;let x=0;switch(Math.floor(u)){case 0:l[0]=1,l[1]=f,l[2]=0;break;case 1:l[0]=h,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=f;break;case 3:l[0]=0,l[1]=h,l[2]=1;break;case 4:l[0]=f,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=h}return x=(1-o)*s,[(o*l[0]+x)*255,(o*l[1]+x)*255,(o*l[2]+x)*255]},r.hcg.hsv=function(n){const a=n[1]/100,o=n[2]/100,s=a+o*(1-a);let l=0;return s>0&&(l=a/s),[n[0],l*100,s*100]},r.hcg.hsl=function(n){const a=n[1]/100,s=n[2]/100*(1-a)+.5*a;let l=0;return s>0&&s<.5?l=a/(2*s):s>=.5&&s<1&&(l=a/(2*(1-s))),[n[0],l*100,s*100]},r.hcg.hwb=function(n){const a=n[1]/100,o=n[2]/100,s=a+o*(1-a);return[n[0],(s-a)*100,(1-s)*100]},r.hwb.hcg=function(n){const a=n[1]/100,s=1-n[2]/100,l=s-a;let u=0;return l<1&&(u=(s-l)/(1-l)),[n[0],l*100,u*100]},r.apple.rgb=function(n){return[n[0]/65535*255,n[1]/65535*255,n[2]/65535*255]},r.rgb.apple=function(n){return[n[0]/255*65535,n[1]/255*65535,n[2]/255*65535]},r.gray.rgb=function(n){return[n[0]/100*255,n[0]/100*255,n[0]/100*255]},r.gray.hsl=function(n){return[0,0,n[0]]},r.gray.hsv=r.gray.hsl,r.gray.hwb=function(n){return[0,100,n[0]]},r.gray.cmyk=function(n){return[0,0,0,n[0]]},r.gray.lab=function(n){return[n[0],0,0]},r.gray.hex=function(n){const a=Math.round(n[0]/100*255)&255,s=((a<<16)+(a<<8)+a).toString(16).toUpperCase();return"000000".substring(s.length)+s},r.rgb.gray=function(n){return[(n[0]+n[1]+n[2])/3/255*100]},tt}var nt,fn;function ys(){if(fn)return nt;fn=1;const e=Hn();function t(){const a={},o=Object.keys(e);for(let s=o.length,l=0;l<s;l++)a[o[l]]={distance:-1,parent:null};return a}function r(a){const o=t(),s=[a];for(o[a].distance=0;s.length;){const l=s.pop(),u=Object.keys(e[l]);for(let f=u.length,h=0;h<f;h++){const x=u[h],_=o[x];_.distance===-1&&(_.distance=o[l].distance+1,_.parent=l,s.unshift(x))}}return o}function d(a,o){return function(s){return o(a(s))}}function n(a,o){const s=[o[a].parent,a];let l=e[o[a].parent][a],u=o[a].parent;for(;o[u].parent;)s.unshift(o[u].parent),l=d(e[o[u].parent][u],l),u=o[u].parent;return l.conversion=s,l}return nt=function(a){const o=r(a),s={},l=Object.keys(o);for(let u=l.length,f=0;f<u;f++){const h=l[f];o[h].parent!==null&&(s[h]=n(h,o))}return s},nt}var rt,hn;function ws(){if(hn)return rt;hn=1;const e=Hn(),t=ys(),r={},d=Object.keys(e);function n(o){const s=function(...l){const u=l[0];return u==null?u:(u.length>1&&(l=u),o(l))};return"conversion"in o&&(s.conversion=o.conversion),s}function a(o){const s=function(...l){const u=l[0];if(u==null)return u;u.length>1&&(l=u);const f=o(l);if(typeof f=="object")for(let h=f.length,x=0;x<h;x++)f[x]=Math.round(f[x]);return f};return"conversion"in o&&(s.conversion=o.conversion),s}return d.forEach(o=>{r[o]={},Object.defineProperty(r[o],"channels",{value:e[o].channels}),Object.defineProperty(r[o],"labels",{value:e[o].labels});const s=t(o);Object.keys(s).forEach(u=>{const f=s[u];r[o][u]=a(f),r[o][u].raw=n(f)})}),rt=r,rt}var Te={},mn;function Bn(){if(mn)return Te;mn=1,Object.defineProperty(Te,"__esModule",{value:!0});function e(t,r,d){return"rgb("+t+", "+r+", "+d+")"}return Te.default=e,Te}var ke={},pn;function _s(){if(pn)return ke;pn=1,Object.defineProperty(ke,"__esModule",{value:!0});function e(t){return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}return ke.default=e,ke}var Ie={},gn;function Cs(){if(gn)return Ie;gn=1,Object.defineProperty(Ie,"__esModule",{value:!0});function e(t){return"#"+t.toLowerCase()}return Ie.default=e,Ie}var xn;function js(){if(xn)return je;xn=1,Object.defineProperty(je,"__esModule",{value:!0});var e=Y,t=e.__importDefault(ws()),r=e.__importDefault(Bn()),d=e.__importDefault(_s()),n=e.__importDefault(Cs());function a(o,s){var l={rgbString:function(){return r.default.apply(void 0,o)},hex:function(){var u;return n.default((u=t.default.rgb).hex.apply(u,o))},rgbArray:function(){return o},hslString:function(){var u;return d.default((u=t.default.rgb).hsl.apply(u,o))},hslArray:function(){var u;return(u=t.default.rgb).hsl.apply(u,o)},keyword:function(){var u;return(u=t.default.rgb).keyword.apply(u,o)}};return l[s]()}return je.default=a,je}var Se={},ot={exports:{}},bn;function Qn(){return bn||(bn=1,function(e,t){(function(r,d){e.exports=d()})(st,function(){if(!r)var r={map:function(o,s){var l={};return s?o.map(function(u,f){return l.index=f,s.call(l,u)}):o.slice()},naturalOrder:function(o,s){return o<s?-1:o>s?1:0},sum:function(o,s){var l={};return o.reduce(s?function(u,f,h){return l.index=h,u+s.call(l,f)}:function(u,f){return u+f},0)},max:function(o,s){return Math.max.apply(null,s?r.map(o,s):o)}};var d=function(){var o=5,s=8-o,l=1e3;function u(b,p,w){return(b<<2*o)+(p<<o)+w}function f(b){var p=[],w=!1;function C(){p.sort(b),w=!0}return{push:function(T){p.push(T),w=!1},peek:function(T){return w||C(),T===void 0&&(T=p.length-1),p[T]},pop:function(){return w||C(),p.pop()},size:function(){return p.length},map:function(T){return p.map(T)},debug:function(){return w||C(),p}}}function h(b,p,w,C,T,v,j){this.r1=b,this.r2=p,this.g1=w,this.g2=C,this.b1=T,this.b2=v,this.histo=j}function x(){this.vboxes=new f(function(b,p){return r.naturalOrder(b.vbox.count()*b.vbox.volume(),p.vbox.count()*p.vbox.volume())})}function _(b,p){if(p.count()){var w=p.r2-p.r1+1,C=p.g2-p.g1+1,T=r.max([w,C,p.b2-p.b1+1]);if(p.count()==1)return[p.copy()];var v,j,I,k,S=0,R=[],O=[];if(T==w)for(v=p.r1;v<=p.r2;v++){for(k=0,j=p.g1;j<=p.g2;j++)for(I=p.b1;I<=p.b2;I++)k+=b[u(v,j,I)]||0;R[v]=S+=k}else if(T==C)for(v=p.g1;v<=p.g2;v++){for(k=0,j=p.r1;j<=p.r2;j++)for(I=p.b1;I<=p.b2;I++)k+=b[u(j,v,I)]||0;R[v]=S+=k}else for(v=p.b1;v<=p.b2;v++){for(k=0,j=p.r1;j<=p.r2;j++)for(I=p.g1;I<=p.g2;I++)k+=b[u(j,I,v)]||0;R[v]=S+=k}return R.forEach(function(D,M){O[M]=S-D}),function(D){var M,z,F,U,L,H=D+"1",N=D+"2",Z=0;for(v=p[H];v<=p[N];v++)if(R[v]>S/2){for(F=p.copy(),U=p.copy(),L=(M=v-p[H])<=(z=p[N]-v)?Math.min(p[N]-1,~~(v+z/2)):Math.max(p[H],~~(v-1-M/2));!R[L];)L++;for(Z=O[L];!Z&&R[L-1];)Z=O[--L];return F[N]=L,U[H]=F[N]+1,[F,U]}}(T==w?"r":T==C?"g":"b")}}return h.prototype={volume:function(b){return this._volume&&!b||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(b){var p=this.histo;if(!this._count_set||b){var w,C,T,v=0;for(w=this.r1;w<=this.r2;w++)for(C=this.g1;C<=this.g2;C++)for(T=this.b1;T<=this.b2;T++)v+=p[u(w,C,T)]||0;this._count=v,this._count_set=!0}return this._count},copy:function(){return new h(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(b){var p=this.histo;if(!this._avg||b){var w,C,T,v,j=0,I=1<<8-o,k=0,S=0,R=0;for(C=this.r1;C<=this.r2;C++)for(T=this.g1;T<=this.g2;T++)for(v=this.b1;v<=this.b2;v++)j+=w=p[u(C,T,v)]||0,k+=w*(C+.5)*I,S+=w*(T+.5)*I,R+=w*(v+.5)*I;this._avg=j?[~~(k/j),~~(S/j),~~(R/j)]:[~~(I*(this.r1+this.r2+1)/2),~~(I*(this.g1+this.g2+1)/2),~~(I*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(b){var p=b[0]>>s;return gval=b[1]>>s,bval=b[2]>>s,p>=this.r1&&p<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},x.prototype={push:function(b){this.vboxes.push({vbox:b,color:b.avg()})},palette:function(){return this.vboxes.map(function(b){return b.color})},size:function(){return this.vboxes.size()},map:function(b){for(var p=this.vboxes,w=0;w<p.size();w++)if(p.peek(w).vbox.contains(b))return p.peek(w).color;return this.nearest(b)},nearest:function(b){for(var p,w,C,T=this.vboxes,v=0;v<T.size();v++)((w=Math.sqrt(Math.pow(b[0]-T.peek(v).color[0],2)+Math.pow(b[1]-T.peek(v).color[1],2)+Math.pow(b[2]-T.peek(v).color[2],2)))<p||p===void 0)&&(p=w,C=T.peek(v).color);return C},forcebw:function(){var b=this.vboxes;b.sort(function(T,v){return r.naturalOrder(r.sum(T.color),r.sum(v.color))});var p=b[0].color;p[0]<5&&p[1]<5&&p[2]<5&&(b[0].color=[0,0,0]);var w=b.length-1,C=b[w].color;C[0]>251&&C[1]>251&&C[2]>251&&(b[w].color=[255,255,255])}},{quantize:function(b,p){if(!b.length||p<2||p>256)return!1;var w=function(k){var S,R=new Array(1<<3*o);return k.forEach(function(O){S=u(O[0]>>s,O[1]>>s,O[2]>>s),R[S]=(R[S]||0)+1}),R}(b);w.forEach(function(){});var C=function(k,S){var R,O,D,M=1e6,z=0,F=1e6,U=0,L=1e6,H=0;return k.forEach(function(N){(R=N[0]>>s)<M?M=R:R>z&&(z=R),(O=N[1]>>s)<F?F=O:O>U&&(U=O),(D=N[2]>>s)<L?L=D:D>H&&(H=D)}),new h(M,z,F,U,L,H,S)}(b,w),T=new f(function(k,S){return r.naturalOrder(k.count(),S.count())});function v(k,S){for(var R,O=k.size(),D=0;D<l;){if(O>=S||D++>l)return;if((R=k.pop()).count()){var M=_(w,R),z=M[0],F=M[1];if(!z)return;k.push(z),F&&(k.push(F),O++)}else k.push(R),D++}}T.push(C),v(T,.75*p);for(var j=new f(function(k,S){return r.naturalOrder(k.count()*k.volume(),S.count()*S.volume())});T.size();)j.push(T.pop());v(j,p);for(var I=new x;j.size();)I.push(j.pop());return I}}}().quantize,n=function(o){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=o.naturalWidth,this.height=this.canvas.height=o.naturalHeight,this.context.drawImage(o,0,0,this.width,this.height)};n.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var a=function(){};return a.prototype.getColor=function(o,s){return s===void 0&&(s=10),this.getPalette(o,5,s)[0]},a.prototype.getPalette=function(o,s,l){var u=function(_){var b=_.colorCount,p=_.quality;if(b!==void 0&&Number.isInteger(b)){if(b===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");b=Math.max(b,2),b=Math.min(b,20)}else b=10;return(p===void 0||!Number.isInteger(p)||p<1)&&(p=10),{colorCount:b,quality:p}}({colorCount:s,quality:l}),f=new n(o),h=function(_,b,p){for(var w=_,C=[],T=0,v=void 0,j=void 0,I=void 0,k=void 0,S=void 0;T<b;T+=p)j=w[0+(v=4*T)],I=w[v+1],k=w[v+2],((S=w[v+3])===void 0||S>=125)&&(j>250&&I>250&&k>250||C.push([j,I,k]));return C}(f.getImageData().data,f.width*f.height,u.quality),x=d(h,u.colorCount);return x?x.palette():null},a.prototype.getColorFromUrl=function(o,s,l){var u=this,f=document.createElement("img");f.addEventListener("load",function(){var h=u.getPalette(f,5,l);s(h[0],o)}),f.src=o},a.prototype.getImageData=function(o,s){var l=new XMLHttpRequest;l.open("GET",o,!0),l.responseType="arraybuffer",l.onload=function(){if(this.status==200){var u=new Uint8Array(this.response);i=u.length;for(var f=new Array(i),h=0;h<u.length;h++)f[h]=String.fromCharCode(u[h]);var x=f.join(""),_=window.btoa(x);s("data:image/png;base64,"+_)}},l.send()},a.prototype.getColorAsync=function(o,s,l){var u=this;this.getImageData(o,function(f){var h=document.createElement("img");h.addEventListener("load",function(){var x=u.getPalette(h,5,l);s(x[0],this)}),h.src=f})},a})}(ot)),ot.exports}var vn;function Nn(){if(vn)return Se;vn=1,Object.defineProperty(Se,"__esModule",{value:!0});var e=Y,t=e.__importDefault(Qn()),r=$e();function d(n,a,o,s,l){return a===void 0&&(a=2),s===void 0&&(s=null),l===void 0&&(l=10),e.__awaiter(this,void 0,void 0,function(){var u,f,h;return e.__generator(this,function(x){switch(x.label){case 0:return[4,r.loadImage(n,s)];case 1:return u=x.sent(),f=new t.default,h=f.getPalette(u,a,l),[2,h.map(function(_){return r.formatRGB(_,o)})]}})})}return Se.default=d,Se}var Re={},yn;function Gn(){if(yn)return Re;yn=1,Object.defineProperty(Re,"__esModule",{value:!0});var e=Y,t=e.__importDefault(Qn()),r=$e();function d(n,a,o,s){return o===void 0&&(o=null),s===void 0&&(s=10),e.__awaiter(this,void 0,void 0,function(){var l,u,f;return e.__generator(this,function(h){switch(h.label){case 0:return[4,r.loadImage(n,o)];case 1:return l=h.sent(),u=new t.default,f=u.getColor(l,s),[2,r.formatRGB(f,a)]}})})}return Re.default=d,Re}var Ee={},wn;function Ts(){if(wn)return Ee;wn=1,Object.defineProperty(Ee,"__esModule",{value:!0});function e(t,r){return r===void 0&&(r=null),new Promise(function(d,n){var a=new Image;a.addEventListener("load",function(){d(a)}),a.addEventListener("error",function(){n(new Error("Color Thief React | Failed to load image URL: "+t))}),a.crossOrigin=r,a.src=t})}return Ee.default=e,Ee}var _n;function $e(){return _n||(_n=1,function(e){var t=st&&st.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadImage=e.getPredominantColorFromImgURL=e.rgbStringfy=e.getColorsPaletteFromImgUrl=e.formatRGB=e.reducer=e.initialReducerState=void 0;var r=Un();Object.defineProperty(e,"initialReducerState",{enumerable:!0,get:function(){return t(r).default}});var d=bs();Object.defineProperty(e,"reducer",{enumerable:!0,get:function(){return t(d).default}});var n=js();Object.defineProperty(e,"formatRGB",{enumerable:!0,get:function(){return t(n).default}});var a=Nn();Object.defineProperty(e,"getColorsPaletteFromImgUrl",{enumerable:!0,get:function(){return t(a).default}});var o=Bn();Object.defineProperty(e,"rgbStringfy",{enumerable:!0,get:function(){return t(o).default}});var s=Gn();Object.defineProperty(e,"getPredominantColorFromImgURL",{enumerable:!0,get:function(){return t(s).default}});var l=Ts();Object.defineProperty(e,"loadImage",{enumerable:!0,get:function(){return t(l).default}})}(Ze)),Ze}var Cn;function Wn(){if(Cn)return ve;Cn=1,Object.defineProperty(ve,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),r=qn(),d=$e();function n(a,o,s){s===void 0&&(s={});var l=s.crossOrigin,u=l===void 0?null:l,f=s.quality,h=f===void 0?10:f,x=t.useReducer(d.reducer,d.initialReducerState),_=x[0],b=x[1];return r.useCurrentEffect(function(p){b({type:"start",payload:null}),d.getPredominantColorFromImgURL(a,o,u,h).then(function(w){p()&&b({type:"resolve",payload:w})}).catch(function(w){p()&&b({type:"reject",payload:w})})},[a]),_}return ve.default=n,ve}var jn;function ks(){if(jn)return be;jn=1,Object.defineProperty(be,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),r=e.__importDefault(Wn());function d(n){var a=n.src,o=n.format,s=n.crossOrigin,l=s===void 0?void 0:s,u=n.quality,f=u===void 0?10:u,h=n.children,x=r.default(a,o,{crossOrigin:l,quality:f});return t.createElement(t.Fragment,null,h(x))}return be.default=d,be}var Oe={},Ae={},Tn;function Vn(){if(Tn)return Ae;Tn=1,Object.defineProperty(Ae,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),r=qn(),d=$e();function n(a,o,s,l){o===void 0&&(o=2),l===void 0&&(l={});var u=l.crossOrigin,f=u===void 0?null:u,h=l.quality,x=h===void 0?10:h,_=t.useReducer(d.reducer,d.initialReducerState),b=_[0],p=_[1];return r.useCurrentEffect(function(w){p({type:"start",payload:null}),d.getColorsPaletteFromImgUrl(a,o,s,f,x).then(function(C){w()&&p({type:"resolve",payload:C})}).catch(function(C){w()&&p({type:"reject",payload:C})})},[a]),b}return Ae.default=n,Ae}var kn;function Is(){if(kn)return Oe;kn=1,Object.defineProperty(Oe,"__esModule",{value:!0});var e=Y,t=e.__importStar(g),r=e.__importDefault(Vn());function d(n){var a=n.src,o=n.colorCount,s=o===void 0?2:o,l=n.format,u=n.crossOrigin,f=u===void 0?void 0:u,h=n.quality,x=h===void 0?10:h,_=n.children,b=r.default(a,s,l,{crossOrigin:f,quality:x});return t.createElement(t.Fragment,null,_(b))}return Oe.default=d,Oe}Object.defineProperty(B,"__esModule",{value:!0});B.getPalette=B.usePalette=Kn=B.Palette=B.getColor=B.Color=B.useColor=void 0;var ne=Y,Yn=ne.__importDefault(ks());B.Color=Yn.default;var Ss=ne.__importDefault(Wn());B.useColor=Ss.default;var Rs=ne.__importDefault(Nn());B.getPalette=Rs.default;var Es=ne.__importDefault(Is()),Kn=B.Palette=Es.default,Os=ne.__importDefault(Vn());B.usePalette=Os.default;var As=ne.__importDefault(Gn());B.getColor=As.default;B.default=Yn.default;const Ds="/assets/waterMarkBlack-OUzafaTn.png",Ps="/assets/waterMarkWhite-DfVw0Drc.png",zs=({onImageReady:e,posterData:t,generatePoster:r,onTitleSizeAdjust:d,customFont:n})=>{const a=g.useRef(null);return g.useEffect(()=>{(async()=>{if(!r)return;const s=a.current,l=s.getContext("2d"),u=2480,f=3508;t.marginSide=parseInt(t.marginSide)||0,t.marginTop=parseInt(t.marginTop)||0,t.marginCover=parseInt(t.marginCover)||0;const h=async v=>{const j=new Image;return j.crossOrigin="anonymous",j.src=v,new Promise(I=>{j.onload=()=>{if(l.drawImage(j,t.marginCover,t.marginCover,u-t.marginCover*2,u-t.marginCover*2),t.useFade){let k=l.createLinearGradient(0,0,0,3e3);const S=p(t.backgroundColor);k.addColorStop(.5,`rgba(${S.r}, ${S.g}, ${S.b}, 0)`),k.addColorStop(.8,t.backgroundColor),l.fillStyle=k,l.fillRect(0,0,s.width,2500)}I()}})},x=async()=>{const v=new Image;v.crossOrigin="anonymous";const j=p(t.backgroundColor),I=w(j);return v.src=I==="black"?Ds:Ps,new Promise(k=>{v.onload=()=>{l.globalAlpha="0.15",l.drawImage(v,u-70-500,50,500,134),l.globalAlpha="1",k()}})},_=async()=>{let v=t.titleSize?parseInt(t.titleSize):230;const j=n||"Montserrat";if(!t.userAdjustedTitleSize&&!t.initialTitleSizeSet){l.font=`bold ${v}px ${j}`;let S=l.measureText(t.albumName).width;for(;S>2480-t.marginSide*2;)v-=1,l.font=`bold ${v}px ${j}`,S=l.measureText(t.albumName).width;d(v,!0)}else l.font=`bold ${v}px ${j}`;l.fillStyle=t.textColor,t.showTracklist?l.fillText(t.albumName,t.marginSide,2500+t.marginTop):l.fillText(t.albumName,t.marginSide,2790+t.marginTop);let I=t.artistsSize?parseInt(t.artistsSize):110;l.font=`bold ${I}px ${n||"Montserrat"}`,t.showTracklist?l.fillText(t.artistsName,t.marginSide,2500+t.marginTop+I*1.3):l.fillText(t.artistsName,t.marginSide,2820+t.marginTop+I),l.font=`bold 70px ${n||"Montserrat"}`,l.fillText(t.titleRelease,t.marginSide,3310);let k=l.measureText(t.titleRelease).width;l.fillText(t.titleRuntime,k+t.marginSide+100,3310),l.globalAlpha=.7,l.font=`bold 60px ${n||"Montserrat"}`,l.fillText(t.runtime,k+t.marginSide+100,3390),l.fillText(t.releaseDate,t.marginSide,3390),l.globalAlpha=1,l.fillStyle=t.color1,l.fillRect(2045-t.marginSide,3368,145,30),l.fillStyle=t.color2,l.fillRect(2190-t.marginSide,3368,145,30),l.fillStyle=t.color3,l.fillRect(2335-t.marginSide,3368,145,30)},b=async()=>{l.fillStyle=t.textColor;let v=t.marginSide+10,j=0,I=0;const k=t.tracksSize?parseInt(t.tracksSize):50;l.font=`bold ${k}px ${n||"Montserrat"}`;const S=k,R=parseInt(t.marginTop||0),O=parseInt(t.artistsSize)?2500+R+parseInt(t.artistsSize)*1.3+130:2500+R+110*1.2+130,D=500,M=u-t.marginSide*2,z=parseInt(t.marginSide),F=O+D-10-parseInt(t.marginTop);let U=O;t.tracklist.split(`
`).forEach(L=>{if(U+S*1.3>=F){if(U=O,v=j+S*2.5+I,v>=z+M)return;I=v-S*2.5,j=0}const H=l.measureText(`${L}`).width+t.marginSide;H>j&&(j=H),l.fillText(`${L}`,v,U),U+=S*1.3})},p=v=>{const j=parseInt(v.replace("#",""),16);return{r:j>>16&255,g:j>>8&255,b:j&255}},w=v=>{const j=k=>{const S=k/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)};return .2126*j(v.r)+.7152*j(v.g)+.0722*j(v.b)>.179?"black":"white"},C=async()=>{const v=p(t.backgroundColor),j=w(v),I=t.textColor,k=`https://scannables.scdn.co/uri/plain/svg/${t.backgroundColor.replace("#","")}/${j}/640/spotify:album:${t.albumID}`;let R=await(await fetch(k)).text();j=="black"?R=R.replace(/fill="#000000"/g,`fill="${I}"`):R=R.replace(/fill="#ffffff"/g,`fill="${I}"`);const O=new Blob([R],{type:"image/svg+xml"}),D=URL.createObjectURL(O);return new Promise(M=>{const z=new Image;z.src=D,z.onload=function(){l.drawImage(z,2020-t.marginSide,3235,480,120);const F=s.toDataURL("image/png");e(F),M()}})};await(async()=>{l.clearRect(0,0,u,f),l.fillStyle=t.backgroundColor,l.fillRect(0,0,u,f)})(),t.useUncompressed?await h(await t.uncompressedAlbumCover):await h(t.albumCover),await _(),t.showTracklist&&await b(),t.useWatermark&&await x(),await C()})()},[r,t,e]),c.jsx("canvas",{ref:a,width:2480,height:3508,style:{display:"none"}})},Ms=m.div`
    opacity: ${e=>e.visible?1:0};
    transform: translateY(${e=>e.visible?"0":"20px"});
    transition: opacity 0.5s ease, transform 0.5s ease;
    transition-delay: ${e=>e.animationDelay||0}ms;
`;function A({children:e,animationDelay:t=0,...r}){const[d,n]=g.useState(!1);return g.useEffect(()=>{const a=setTimeout(()=>{n(!0)},t);return()=>clearTimeout(a)},[t]),c.jsx(Ms,{visible:d,animationDelay:t,...r,children:e})}const Fs=m.div`
    width: 80%;
    margin-inline: auto;
`,$s=m.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: min-content;
    margin-top: 25px;
    cursor: pointer;
`,Ls=m(Ho)`
    font-size: 2em;
    margin-right: 5px;
    cursor: pointer;
`,qs=m.h3`
    font-size: 1.3em;
    font-weight: bold;
`,Us=m.div`
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
`,Hs=m.img`
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
`,Bs=m.div`
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
`,Qs=m(Dn)`
    font-size: 3em;
    color: rgba(255, 255, 255, 0.5);
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
`,Ns=m.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,Gs=m.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 90%;
    margin-inline: auto;
`,In=m.div`
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    color: ${({$active:e})=>e?"#fff":"rgba(255, 255, 255, 0.5)"};
    cursor: pointer;
    border-bottom: ${({$active:e})=>e?"2px solid var(--PosterfyGreen)":"none"};
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
        color: #fff;
    }
`,Ws=m.div`
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
`,Vs=m.div`
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`,Ys=m.textarea`
    width: 100%;
    flex: 1;
    background: rgba(255, 255, 255, 0.07);
    color: #fff;
    border: none;
    padding: 15px;
    font-size: 14px;
    resize: none;
    border-radius: 8px;
    overflow-y: auto;
    max-height: 300px;
    line-height: 1.5em;

    &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.07);
    }

    @media (max-width: 530px) {
        padding: 10px;
    }
`,Ks=m.div`
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
`,it=m.div`
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.05);
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
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.5s;
        z-index: -1;
    }

    :hover::before {
        background-color: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 350px) {
        margin-inline: auto;
        margin-bottom: 20px;
        padding-inline: 50px;
    }
`,at=m.p`
    font-size: .85em;
    margin-inline: 10px;
    font-weight: bold;
`,Sn=m(Di)`
    font-size: 1.15em;
`,Xs=m(ro)`
    font-size: 1.15em;
    will-change: transform;
    ${({$spinning:e})=>e?Wt`
                  animation: ${V`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
              `:Wt`
                  animation: ${V`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              `}
`,Js=m.div`
    width: 560px;
    margin-right: 20px;

    @media (max-width: 450px) {
        width: 95%;
        margin-right: 0;
    }
`,Zs=m.p`
    font-size: 0.75em;
    color: rgba(255, 255, 255, 0.5);
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
`;function el({albumID:e,handleClickBack:t}){const{t:r}=X(),d=g.useRef(null),[n,a]=g.useState(""),[o,s]=g.useState(""),[l,u]=g.useState("200"),[f,h]=g.useState("110"),[x,_]=g.useState("50"),[b,p]=g.useState(""),[w,C]=g.useState(160),[T,v]=g.useState(0),[j,I]=g.useState("#5900ff"),[k,S]=g.useState("#ff9100"),[R,O]=g.useState("#ff0000"),[D,M]=g.useState("#00ff40"),[z,F]=g.useState("#2600ff"),[U,L]=g.useState(!0),[H,N]=g.useState(!0),[Z,vt]=g.useState(!1),[re,yt]=g.useState(""),[Le,wt]=g.useState(""),[Xn,Jn]=g.useState(""),[ee,Zn]=g.useState(null),[qe,_t]=g.useState("information");g.useEffect(()=>{if(ee){const y=new FileReader;y.onload=async E=>{const Q="CustomFont",J=new FontFace(Q,E.target.result);try{const G=await J.load();document.fonts.add(G),Jn(Q)}catch(G){console.error("Erro ao carregar fonte:",G)}},y.readAsArrayBuffer(ee)}},[ee]);const[Ue,He]=g.useState(!1),[er,tr]=g.useState("Original"),[Ct,jt]=g.useState(""),[Tt,kt]=g.useState(""),[It,St]=g.useState(""),[Rt,Et]=g.useState(""),[Ot,At]=g.useState(""),[nr,Dt]=g.useState(!1),[Pt,zt]=g.useState(null),[te,rr]=g.useState(null),[Mt,Ft]=g.useState(!1),[$t,or]=g.useState(!1),ir=y=>{u(y.target.value),Ft(!0)},ar=(y,E)=>{E&&!$t?(u(y),or(!0)):Mt||u(y)},sr={albumCover:re,uncompressedAlbumCover:Le,useUncompressed:Ue,albumName:n,artistsName:o,titleSize:l,artistsSize:f,tracksSize:x,marginTop:b,marginSide:w,marginCover:T,titleRelease:Tt,releaseDate:It,titleRuntime:Rt,runtime:Ot,backgroundColor:j,textColor:k,useWatermark:U,useFade:H,showTracklist:Z,tracklist:Ct,color1:R,color2:D,color3:z,albumID:e,userAdjustedTitleSize:Mt,initialTitleSizeSet:$t},[oe,lr]=g.useState(null),[Be,Lt]=g.useState(!1),[cr,Qe]=g.useState(!1),[ur,dr]=g.useState(!1),[fr,qt]=g.useState(!1),[hr,Ne]=g.useState(!1);g.useEffect(()=>{if(Be){Qe(!1);const y=setTimeout(()=>{Ne(!0)},100);return()=>clearTimeout(y)}else Ne(!1)},[Be]);const mr=y=>{lr(y),Lt(!1),qt(!1),setTimeout(()=>{Ne(!1),setTimeout(()=>{Qe(!0)},300)},100)},Ge=()=>{Ft(!1),Qe(!1),requestAnimationFrame(()=>{if(qt(!0),Lt(!0),d.current){const y=d.current.getBoundingClientRect(),E=y.top+window.scrollY,Q=y.height,G=(window.innerHeight-Q)/2;window.scrollTo({top:E-G,behavior:"smooth"})}})},pr=y=>{yt(URL.createObjectURL(y)),He(!1),wt(""),tr(y.name)},We=()=>{if(!oe)return;const y=document.createElement("a");y.href=oe,y.download=`Posterfy - ${n}.png`,y.click(),Ke(n,"poster")},gr=async()=>{if(Ue){if(!Le)return;const y=await(await fetch(await Le)).blob(),E=Object.assign(document.createElement("a"),{href:URL.createObjectURL(y),download:`Posterfy - ${n} Uncompressed Cover.png`});E.click(),URL.revokeObjectURL(E.href),Ke(n,"uncompressed_cover")}else{if(!re)return;const y=await(await fetch(re)).blob(),E=Object.assign(document.createElement("a"),{href:URL.createObjectURL(y),download:`Posterfy - ${n} Cover.png`});E.click(),URL.revokeObjectURL(E.href),Ke(n,"cover")}};function ie(y,E){const Q=y.target.getBoundingClientRect();zt({top:Q.top+window.scrollY,left:Q.left+window.scrollX}),rr(E),Dt(!0)}function xr(){Dt(!1)}async function br(y,E="us"){var Q;try{let J=`https://itunes.apple.com/search?term=${encodeURIComponent(y)}&country=${E}&entity=album&limit=1`,G=await fetch(J);if(!G.ok)throw new Error(`HTTP Error: ${G.status}`);let Ve=await G.json();if(!((Q=Ve.results)!=null&&Q.length))return console.warn("No album data found."),He(!1),"";let W=Ve.results[0].artworkUrl100.replace("100x100bb","100000x100000-999").split("/image/thumb/");return W.length===2?`https://a5.mzstatic.com/us/r1000/0/${W[1].split("/").slice(0,-1).join("/")}`:""}catch(J){return console.error("Error fetching album cover:",J.message),""}}return g.useEffect(()=>{kt(r("EDITOR_ReleaseTitle")),Et(r("EDITOR_RuntimeTitle"))},[r]),g.useEffect(()=>{e&&(async()=>{var E;try{const Ut=(await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${btoa("f4cecfcee6bb4476a132ecef4b321cde:eca60833bc674b718879e122402968fc")}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials"})})).json()).access_token,W=await(await fetch(`https://api.spotify.com/v1/albums/${e}`,{headers:{Authorization:`Bearer ${Ut}`}})).json(),Ye=W.artists.map(ae=>ae.name).join(", ");a(W.name),s(Ye),yt((E=W.images[0])==null?void 0:E.url),St(W.release_date),wt(await br(W.name+" "+Ye));const yr=W.tracks.items.reduce((ae,fe)=>ae+fe.duration_ms,0),Ht=Math.floor(yr/1e3),Bt=Math.floor(Ht/60),Qt=Math.floor(Bt/60),Nt=Ht%60,Gt=Bt%60,wr=Qt>0?`${Qt}h ${Gt}min ${Nt}s`:`${Gt}min ${Nt}s`;At(wr);const _r=W.tracks.items.map((ae,fe)=>(fe==3&&vt(!0),`${fe+1}. ${ae.name}`));jt(_r.join(`
`)),dr(!0)}catch(Q){console.error("Error trying to fetch album data:",Q)}})()},[e]),g.useEffect(()=>{const y=E=>{E.ctrlKey&&E.key==="s"?(E.preventDefault(),Ge()):E.ctrlKey&&E.key==="d"&&(E.preventDefault(),We())};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[oe,n,We]),c.jsx(c.Fragment,{children:ur?c.jsxs(Fs,{children:[c.jsx(Kn,{src:re,crossOrigin:"anonymous",format:"hex",colorCount:5,children:({data:y})=>(g.useEffect(()=>{y&&y.length>0&&(I(y[0]),S(y[1]),O(y[2]),M(y[3]),F(y[4]),Ge())},[y]),null)}),c.jsxs($s,{onClick:t,children:[c.jsx(Ls,{}),c.jsx(qs,{children:r("GoBack")})]}),c.jsxs(Us,{children:[c.jsx(zs,{onImageReady:mr,posterData:sr,generatePoster:Be,onTitleSizeAdjust:ar,customFont:Xn}),c.jsxs(Bs,{children:[oe?c.jsx(Hs,{src:oe,ref:d,visible:cr}):c.jsx(Js,{ref:d}),c.jsx(Qs,{visible:hr})]}),c.jsxs(Ns,{children:[c.jsx(A,{animationDelay:50,children:c.jsxs(Gs,{children:[c.jsx(In,{$active:qe==="information",onClick:()=>_t("information"),children:r("EDITOR_InformationTab")}),c.jsx(In,{$active:qe==="tracklist",onClick:()=>_t("tracklist"),children:r("EDITOR_TracklistTab")})]})}),qe==="information"?c.jsxs(Ws,{children:[c.jsx(A,{animationDelay:0,children:c.jsx(K,{title:r("EDITOR_AlbumName"),value:n,onChange:y=>a(y.target.value)})}),c.jsx(A,{animationDelay:50,children:c.jsx(K,{title:r("EDITOR_ArtistName"),value:o,onChange:y=>s(y.target.value)})}),c.jsx(A,{animationDelay:100,children:c.jsx(K,{title:r("EDITOR_TitleSize"),value:l,onChange:ir})}),c.jsx(A,{animationDelay:150,children:c.jsx(K,{title:r("EDITOR_ArtistSize"),value:f,onChange:y=>h(y.target.value)})}),c.jsx(A,{animationDelay:200,children:c.jsx(K,{title:r("EDITOR_TracksSize"),value:x,onChange:y=>_(y.target.value)})}),c.jsx(A,{animationDelay:250,children:c.jsx(K,{title:r("EDITOR_MarginTop"),value:b,onChange:y=>p(y.target.value)})}),c.jsx(A,{animationDelay:300,children:c.jsx(K,{title:r("EDITOR_MarginSide"),value:w,onChange:y=>C(y.target.value)})}),c.jsx(A,{animationDelay:350,children:c.jsx(K,{title:r("EDITOR_MarginCover"),value:T,onChange:y=>v(y.target.value)})}),c.jsx(A,{animationDelay:400,children:c.jsx(en,{title:Tt,value:It,onChangeTitle:y=>kt(y.target.value),onChangeDate:y=>St(y.target.value)})}),c.jsx(A,{animationDelay:450,children:c.jsx(en,{title:Rt,value:Ot,onChangeTitle:y=>Et(y.target.value),onChangeDate:y=>At(y.target.value)})}),c.jsx(A,{animationDelay:500,children:c.jsx(le,{title:r("EDITOR_BackgroundColor"),value:j,onClick:y=>ie(y,"backgroundColor")})}),c.jsx(A,{animationDelay:550,children:c.jsx(le,{title:r("EDITOR_TextColor"),value:k,onClick:y=>ie(y,"textColor")})}),c.jsx(A,{animationDelay:600,children:c.jsx(le,{title:`${r("EDITOR_Color")} 1`,value:R,onClick:y=>ie(y,"color1")})}),c.jsx(A,{animationDelay:650,children:c.jsx(le,{title:`${r("EDITOR_Color")} 2`,value:D,onClick:y=>ie(y,"color2")})}),c.jsx(A,{animationDelay:700,children:c.jsx(le,{title:`${r("EDITOR_Color")} 3`,value:z,onClick:y=>ie(y,"color3")})}),c.jsx(A,{animationDelay:750,children:c.jsx(xe,{title:r("EDITOR_Watermark"),value:U,onChange:y=>L(y),text:r("EDITOR_WatermarkText")})}),c.jsx(A,{animationDelay:800,children:c.jsx(xe,{title:r("EDITOR_Fade"),value:H,onChange:y=>N(y),text:r("EDITOR_FadeText")})}),c.jsx(A,{animationDelay:850,children:c.jsx(xe,{title:r("EDITOR_Uncompressed"),value:Ue,onChange:y=>He(y),text:r("EDITOR_UncompressedText")})}),c.jsx(A,{animationDelay:900,children:c.jsx(xe,{title:r("EDITOR_Tracklist"),value:Z,onChange:y=>vt(y),text:r("EDITOR_TracklistText")})}),c.jsx(A,{animationDelay:950,children:c.jsx(Ua,{title:r("EDITOR_Cover"),onChange:pr,text:er})}),c.jsx(A,{animationDelay:1e3,children:c.jsx(Va,{title:r("EDITOR_Font"),text:(ee==null?void 0:ee.name)||r("EDITOR_DefaultFont"),onChange:Zn})}),nr&&Pt&&te&&c.jsx(Ia,{DefaultColor:te==="backgroundColor"?j:te==="textColor"?k:te==="color1"?R:te==="color2"?D:z,image:re,predefinedColors:[R,D,z,j,k],onDone:y=>{switch(te){case"backgroundColor":I(y);break;case"textColor":S(y);break;case"color1":O(y);break;case"color2":M(y);break;case"color3":F(y);break}zt(null)},position:Pt,onClose:xr})]}):c.jsx(Vs,{children:c.jsx(Ys,{value:Ct,onChange:y=>jt(y.target.value),placeholder:r("EDITOR_TracklistPlaceholder")})}),c.jsx(A,{animationDelay:1050,children:c.jsxs(Ks,{children:[c.jsxs(it,{onClick:gr,children:[c.jsx(Sn,{}),c.jsx(at,{children:r("EDITOR_DownloadCover")})]}),c.jsxs(it,{onClick:We,children:[c.jsx(Sn,{}),c.jsx(at,{children:r("EDITOR_Download")})]}),c.jsxs(it,{onClick:Ge,children:[c.jsx(Xs,{$spinning:fr}),c.jsx(at,{children:r("EDITOR_Apply")})]})]})}),c.jsx(A,{animationDelay:1100,children:c.jsxs(Zs,{children:[r("EDITOR_Shortcuts"),": Ctrl+S (",r("EDITOR_Apply"),"), Ctrl+D (",r("EDITOR_Download"),")"]})})]})]})]}):c.jsx(Pn,{})})}const tl=({title:e="Posterfy - Free Album Poster Generator | Create Custom Music Posters Online",description:t="Create stunning album posters for free with Posterfy. Design custom music posters from Spotify albums with professional templates. Best album poster generator online - no signup required!",keywords:r="album poster generator, music poster maker, spotify poster, album cover poster, custom music posters, free poster generator, album art poster, music poster design, posterfy"})=>(g.useEffect(()=>{const n="https://posterfy.space",a=n+"/",o=n+"/albuns.png";document.title=e;const s=document.querySelector('meta[name="description"]');s&&s.setAttribute("content",t);const l=document.querySelector('meta[name="keywords"]');l&&l.setAttribute("content",r);let u=document.querySelector('link[rel="canonical"]');u?u.setAttribute("href",a):(u=document.createElement("link"),u.setAttribute("rel","canonical"),u.setAttribute("href",a),document.head.appendChild(u));const f=document.querySelector('meta[property="og:title"]');f&&f.setAttribute("content",e);const h=document.querySelector('meta[property="og:description"]');h&&h.setAttribute("content",t);const x=document.querySelector('meta[property="og:image"]');x&&x.setAttribute("content",o);const _=document.querySelector('meta[property="og:url"]');_&&_.setAttribute("content",a);const b=document.querySelector('meta[name="twitter:title"]');b&&b.setAttribute("content",e);const p=document.querySelector('meta[name="twitter:description"]');p&&p.setAttribute("content",t);const w=document.querySelector('meta[name="twitter:image"]');w&&w.setAttribute("content",o);const C={"@context":"https://schema.org","@type":"WebPage",name:e,description:t,url:a,mainEntity:{"@type":"WebApplication",name:"Posterfy",applicationCategory:"DesignApplication",operatingSystem:"Web Browser",url:n+"/",description:t,offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}},T=document.querySelector('script[type="application/ld+json"]#dynamic-structured-data');T&&T.remove();const v=document.createElement("script");v.type="application/ld+json",v.id="dynamic-structured-data",v.innerHTML=JSON.stringify(C),document.head.appendChild(v)},[e,t,r]),null),nl=()=>(g.useEffect(()=>{},[]),null),rl=()=>{g.useEffect(()=>{Yt(document.title,window.location.href);const e=new MutationObserver(r=>{r.forEach(d=>{d.type==="childList"&&d.target.nodeName==="TITLE"&&Yt(document.title,window.location.href)})}),t=document.querySelector("title");return t&&e.observe(t,{childList:!0,subtree:!0}),()=>{e.disconnect()}},[])},ol=e=>{typeof gtag<"u"&&gtag("event","scroll",{event_category:"engagement",event_label:`${e}%`,value:e}),typeof window<"u"&&window.dataLayer&&window.dataLayer.push({event:"scroll_depth",scroll_percentage:e,page_title:document.title,page_location:window.location.href})},il=()=>{let e=[25,50,75,90],t=[];const r=()=>{const d=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-window.innerHeight,a=Math.round(d/n*100);e.forEach(o=>{a>=o&&!t.includes(o)&&(t.push(o),ol(o))})};return window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)}};function al(){const{t:e}=X(),[t,r]=g.useState(!0),[d,n]=g.useState(!1),[a,o]=g.useState(""),[s,l]=g.useState(null);rl(),g.useEffect(()=>il(),[]);function u(x){l(x)}function f(){l(null)}g.useEffect(()=>{const x=setTimeout(()=>{r(!1),setTimeout(()=>{n(!0)},1e3)},1100);return()=>clearTimeout(x)},[]),g.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const h=x=>{o(x)};return c.jsxs(c.Fragment,{children:[c.jsx(tl,{}),c.jsx(nl,{}),c.jsx(to,{}),c.jsx(jo,{showAnimation:d}),c.jsx(lt,{text:e("anchorArt"),type:1}),c.jsx(Eo,{title:e("ArtTitle"),paragraph:e("ArtParagraph")}),s?c.jsx(el,{albumID:s,handleClickBack:f}):c.jsxs(c.Fragment,{children:[c.jsx(Ko,{onSearch:h,value:a}),a&&c.jsx(Zt,{query:a,onclick:u}),c.jsxs("div",{style:{display:a?"none":"block"},children:[c.jsx(lt,{text:e("TryTrend"),type:2}),c.jsx(Zt,{onclick:u})]})]}),c.jsx(Hi,{}),c.jsx(yi,{}),c.jsx(ti,{isVisible:t})]})}Tr.use(kr).init({resources:{en:{translation:{paragraphHero1:"Posterfy transforms music passion into visual art.",paragraphHero2:"Create custom posters for your favorite albums using Spotify API.",anchorArt:"Art.",ArtTitle:`Watch the music
take shape`,ArtParagraph:"It's simple, search for your favorite album, select it and let the art flow!",SearchPlaceholder:"Album name...",TryTrend:"Or, try trends",MadeBy:"Made with 🎵 by",GoBack:"Back",Loading:"Loading",LoadingText:"We are fetching the information.",Theme:"Theme",FAQ_HowItWorks_Question:"How does Posterfy work?",FAQ_HowItWorks_Answer:"To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",FAQ_Affiliation_Question:"Is Posterfy affiliated with Spotify?",FAQ_Affiliation_Answer:"No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.",FAQ_AlbumSearch_Question:"What kind of albums can I search for on Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",FAQ_SaveData_Question:"Does Posterfy save my created posters or search history?",FAQ_SaveData_Answer:"No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.",FAQ_ReportIssue_Question:"How can I report an issue or suggest a feature to Posterfy?",FAQ_ReportIssue_Answer:"You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",EDITOR_ReleaseTitle:"Release date",EDITOR_RuntimeTitle:"Runtime",EDITOR_AlbumName:"Album name",EDITOR_ArtistName:"Artist name",EDITOR_TitleSize:"Title size",EDITOR_ArtistSize:"Artist size",EDITOR_TracksSize:"Tracks size",EDITOR_MarginTop:"Margin Top",EDITOR_MarginSide:"Margin side",EDITOR_MarginCover:"Margin cover",EDITOR_BackgroundColor:"Background color",EDITOR_TextColor:"Text color",EDITOR_Color:"Color",EDITOR_Watermark:"Watermark",EDITOR_WatermarkText:"Use Watermark",EDITOR_Fade:"Fade",EDITOR_FadeText:"Use fade",EDITOR_Tracklist:"Tracklist",EDITOR_TracklistText:"Show tracklist",EDITOR_Apply:"Apply",EDITOR_DownloadCover:"Cover",EDITOR_Download:"Poster",EDITOR_Cover:"Cover",EDITOR_Uncompressed:"Improved cover",EDITOR_UncompressedText:"Use improved cover",EDITOR_Font:"Custom font",EDITOR_DefaultFont:"Select",EDITOR_Shortcuts:"Shortcuts",EDITOR_InformationTab:"Informations",EDITOR_TracklistTab:"Tracklist"}},pt:{translation:{paragraphHero1:"Posterfy transforma a paixão por música em arte visual.",paragraphHero2:"Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.",anchorArt:"Arte.",ArtTitle:`Veja a música
tomar forma`,ArtParagraph:"É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!",SearchPlaceholder:"Nome do álbum...",TryTrend:"Ou, experimente tendências",MadeBy:"Feito com 🎵 por",GoBack:"Voltar",Loading:"Carregando",LoadingText:"Estamos buscando as informações.",Theme:"Tema",FAQ_HowItWorks_Question:"Como o Posterfy funciona?",FAQ_HowItWorks_Answer:"Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.",FAQ_Affiliation_Question:"O Posterfy é afiliado ao Spotify?",FAQ_Affiliation_Answer:"Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.",FAQ_AlbumSearch_Question:"Que tipo de álbuns posso pesquisar no Posterfy?",FAQ_AlbumSearch_Answer:"O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.",FAQ_SaveData_Question:"O Posterfy salva meus pôsteres criados ou histórico de buscas?",FAQ_SaveData_Answer:"Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.",FAQ_ReportIssue_Question:"Como posso relatar um problema ou sugerir uma funcionalidade?",FAQ_ReportIssue_Answer:"Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.",EDITOR_ReleaseTitle:"Lançamento",EDITOR_RuntimeTitle:"Duração",EDITOR_AlbumName:"Nome do álbum",EDITOR_ArtistName:"Nome do artista",EDITOR_TitleSize:"Tamanho do título",EDITOR_ArtistSize:"Tamanho do artista",EDITOR_TracksSize:"Tamanho das faixas",EDITOR_MarginTop:"Margem superior",EDITOR_MarginSide:"Margem lateral",EDITOR_MarginCover:"Margem capa",EDITOR_BackgroundColor:"Cor de fundo",EDITOR_TextColor:"Cor do texto",EDITOR_Color:"Cor",EDITOR_Watermark:"Marca d'água",EDITOR_WatermarkText:"Usar marca d'água",EDITOR_Fade:"Degradê",EDITOR_FadeText:"Usar degradê",EDITOR_Tracklist:"Músicas",EDITOR_TracklistText:"Mostrar músicas",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Capa",EDITOR_Download:"Poster",EDITOR_Cover:"Capa",EDITOR_Uncompressed:"Capa melhorada",EDITOR_UncompressedText:"Usar capa melhorada",EDITOR_Font:"Fonte personalizada",EDITOR_DefaultFont:"Selecione",EDITOR_Shortcuts:"Atalhos",EDITOR_InformationTab:"Informações",EDITOR_TracklistTab:"Faixas"}},es:{translation:{paragraphHero1:"Posterfy transforma la pasión por la música en arte visual.",paragraphHero2:"Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.",anchorArt:"Arte.",ArtTitle:`Mira la música
tomar forma`,ArtParagraph:"Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.",SearchPlaceholder:"Nombre del álbum...",TryTrend:"O, prueba las tendencias",MadeBy:"Hecho con 🎵 por",GoBack:"Volver",Loading:"Cargando",LoadingText:"Estamos buscando la información.",Theme:"Tema",FAQ_HowItWorks_Question:"¿Cómo funciona Posterfy?",FAQ_HowItWorks_Answer:"Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.",FAQ_Affiliation_Question:"¿Está afiliado Posterfy a Spotify?",FAQ_Affiliation_Answer:"No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.",FAQ_AlbumSearch_Question:"¿Qué tipo de álbumes puedo buscar en Posterfy?",FAQ_AlbumSearch_Answer:"Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.",FAQ_SaveData_Question:"¿Posterfy guarda mis carteles creados o historial de búsquedas?",FAQ_SaveData_Answer:"No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.",FAQ_ReportIssue_Question:"¿Cómo puedo informar un problema o sugerir una función para posterfy?",FAQ_ReportIssue_Answer:"Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.",EDITOR_ReleaseTitle:"Fecha de lanzamiento",EDITOR_RuntimeTitle:"Duración",EDITOR_AlbumName:"Nombre del álbum",EDITOR_ArtistName:"Nombre del artista",EDITOR_TitleSize:"Tamaño del título",EDITOR_ArtistSize:"Tamaño del artista",EDITOR_TracksSize:"Tamaño de canciones",EDITOR_MarginTop:"Margen superior",EDITOR_MarginSide:"Margen lateral",EDITOR_MarginCover:"Margen portada",EDITOR_BackgroundColor:"Color de fondo",EDITOR_TextColor:"Color del texto",EDITOR_Color:"Color",EDITOR_Watermark:"Filigrana",EDITOR_WatermarkText:"Usar marca de agua",EDITOR_Fade:"Degradado",EDITOR_FadeText:"Usar degradado",EDITOR_Tracklist:"Canciones",EDITOR_TracklistText:"Mostrar canciones",EDITOR_Apply:"Aplicar",EDITOR_DownloadCover:"Cubrir",EDITOR_Download:"Póster",EDITOR_Cover:"Portada",EDITOR_Uncompressed:"Portada melhorada",EDITOR_UncompressedText:"Usar portada melhorada",EDITOR_Font:"Fuente personalizada",EDITOR_DefaultFont:"Seleccionar",EDITOR_Shortcuts:"Atajos",EDITOR_InformationTab:"Informaciones",EDITOR_TracklistTab:"Lista de canciones"}},zh:{translation:{paragraphHero1:"Posterfy将音乐热情转化为视觉艺术。",paragraphHero2:"使用Spotify API为您最喜爱的专辑创建定制海报。",anchorArt:"艺术。",ArtTitle:`观看音乐
成型`,ArtParagraph:"很简单，搜索您最喜爱的专辑，选择它，让艺术流淌！",SearchPlaceholder:"专辑名称...",TryTrend:"或者，试试热门",MadeBy:"用 🎵 制作，由",GoBack:"返回",Loading:"加载中",LoadingText:"我们正在获取信息。",Theme:"主题",FAQ_HowItWorks_Question:"Posterfy是如何工作的？",FAQ_HowItWorks_Answer:"为了获取数据和图像，Posterfy使用Spotify的免费API。一旦用户选择了专辑，Posterfy收集所有数据，通过JavaScript在画布元素上视觉化组织，并生成画布的渲染图像。",FAQ_Affiliation_Question:"Posterfy与Spotify有关联吗？",FAQ_Affiliation_Answer:"不，Posterfy是一个独立项目，与Spotify没有关联或获得其认可。",FAQ_AlbumSearch_Question:"我可以在Posterfy上搜索什么类型的专辑？",FAQ_AlbumSearch_Answer:"Posterfy允许您搜索Spotify数据库中可用的任何专辑，因为它直接从Spotify的免费API获取数据。",FAQ_SaveData_Question:"Posterfy会保存我创建的海报或搜索历史吗？",FAQ_SaveData_Answer:"不，Posterfy不存储任何用户数据。每个海报都是临时生成的，仅可供下载。",FAQ_ReportIssue_Question:"我如何报告问题或向Posterfy建议功能？",FAQ_ReportIssue_Answer:"您可以通过访问项目的GitHub存储库来报告问题或建议功能，链接在网站底部。",EDITOR_ReleaseTitle:"发布日期",EDITOR_RuntimeTitle:"时长",EDITOR_AlbumName:"专辑名称",EDITOR_ArtistName:"艺术家名称",EDITOR_TitleSize:"标题大小",EDITOR_ArtistSize:"艺术家大小",EDITOR_TracksSize:"曲目大小",EDITOR_MarginTop:"上边距",EDITOR_MarginSide:"侧边距",EDITOR_MarginCover:"封面边距",EDITOR_BackgroundColor:"背景色",EDITOR_TextColor:"文字颜色",EDITOR_Color:"颜色",EDITOR_Watermark:"水印",EDITOR_WatermarkText:"使用水印",EDITOR_Fade:"渐变",EDITOR_FadeText:"使用渐变",EDITOR_Tracklist:"曲目列表",EDITOR_TracklistText:"显示曲目列表",EDITOR_Apply:"应用",EDITOR_DownloadCover:"封面",EDITOR_Download:"海报",EDITOR_Cover:"封面",EDITOR_Uncompressed:"改进的封面",EDITOR_UncompressedText:"使用改进的封面",EDITOR_Font:"自定义字体",EDITOR_DefaultFont:"选择",EDITOR_Shortcuts:"快捷键",EDITOR_InformationTab:"信息",EDITOR_TracklistTab:"曲目列表"}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});$r();On(document.getElementById("root")).render(c.jsx(g.StrictMode,{children:c.jsx(al,{})}));
