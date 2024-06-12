"use strict";(()=>{var e={};e.id=567,e.ids=[567,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2885:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>h,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>x,routeModule:()=>k,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>M,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>P});var o=r(7093),n=r(5244),a=r(1323),i=r(3946),d=r(8910),l=r(6253),u=e([d,l]);[d,l]=u.then?(await u)():u;let c=(0,a.l)(l,"default"),p=(0,a.l)(l,"getStaticProps"),m=(0,a.l)(l,"getStaticPaths"),h=(0,a.l)(l,"getServerSideProps"),g=(0,a.l)(l,"config"),x=(0,a.l)(l,"reportWebVitals"),P=(0,a.l)(l,"unstable_getStaticProps"),f=(0,a.l)(l,"unstable_getStaticPaths"),S=(0,a.l)(l,"unstable_getStaticParams"),b=(0,a.l)(l,"unstable_getServerProps"),M=(0,a.l)(l,"unstable_getServerSideProps"),k=new o.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/webhook",pathname:"/webhook",bundlePath:"",filename:""},components:{App:d.default,Document:i.default},userland:l});s()}catch(e){s(e)}})},6253:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>l,getStaticProps:()=>u});var o=r(997),n=r(7834),a=e([n]);n=(a.then?(await a)():a)[0];let d=[];function i(e){let t=Object.assign({hr:"hr",h1:"h1"},(0,n.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[o.jsx(t.hr,{}),"\n",o.jsx(t.h1,{children:"Los WebHooks aun no estas disponibles"}),"\n",o.jsx(t.hr,{})]})}let l=function(e={}){let{wrapper:t}=Object.assign({},(0,n.useMDXComponents)(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(i,e)})):i(e)},u=()=>({props:JSON.parse(JSON.stringify({_provideComponents:n.useMDXComponents,sections:d,title:"Los WebHooks aun no estas disponibles"}))});s()}catch(e){s(e)}})},3946:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var s=r(997),o=r(6859);let n=`
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;function a(){return(0,s.jsxs)(o.Html,{lang:"en",children:[(0,s.jsxs)(o.Head,{children:[s.jsx("script",{dangerouslySetInnerHTML:{__html:n}}),s.jsx("link",{rel:"icon",href:"https://developer-moneytrack-es.vercel.app/favicon.ico"})]}),(0,s.jsxs)("body",{className:"bg-white antialiased dark:bg-zinc-900",children:[s.jsx(o.Main,{}),s.jsx(o.NextScript,{})]})]})}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2204:e=>{e.exports=require("@algolia/autocomplete-core")},8103:e=>{e.exports=require("clsx")},2235:e=>{e.exports=require("focus-visible")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7834:e=>{e.exports=import("@mdx-js/react")},6197:e=>{e.exports=import("framer-motion")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[393,739,859,910],()=>r(2885));module.exports=s})();