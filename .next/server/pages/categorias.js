"use strict";(()=>{var e={};e.id=871,e.ids=[871,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4695:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>c,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>P,routeModule:()=>v,unstable_getServerProps:()=>M,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>h,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>f});var s=r(7093),o=r(5244),i=r(1323),n=r(3946),d=r(8910),l=r(9954),u=e([d,l]);[d,l]=u.then?(await u)():u;let c=(0,i.l)(l,"default"),p=(0,i.l)(l,"getStaticProps"),m=(0,i.l)(l,"getStaticPaths"),g=(0,i.l)(l,"getServerSideProps"),x=(0,i.l)(l,"config"),P=(0,i.l)(l,"reportWebVitals"),f=(0,i.l)(l,"unstable_getStaticProps"),S=(0,i.l)(l,"unstable_getStaticPaths"),h=(0,i.l)(l,"unstable_getStaticParams"),M=(0,i.l)(l,"unstable_getServerProps"),b=(0,i.l)(l,"unstable_getServerSideProps"),v=new s.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/categorias",pathname:"/categorias",bundlePath:"",filename:""},components:{App:d.default,Document:n.default},userland:l});a()}catch(e){a(e)}})},9954:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>l,getStaticProps:()=>u});var s=r(997),o=r(7834),i=e([o]);o=(i.then?(await i)():i)[0];let d=[];function n(e){let t=Object.assign({p:"p"},(0,o.useMDXComponents)(),e.components);return s.jsx(t.p,{children:"src/pages/categorias.mdx"})}let l=function(e={}){let{wrapper:t}=Object.assign({},(0,o.useMDXComponents)(),e.components);return t?s.jsx(t,Object.assign({},e,{children:s.jsx(n,e)})):n(e)},u=()=>({props:JSON.parse(JSON.stringify({_provideComponents:o.useMDXComponents,sections:d}))});a()}catch(e){a(e)}})},3946:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(997),s=r(6859);let o=`
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
`;function i(){return(0,a.jsxs)(s.Html,{lang:"en",children:[(0,a.jsxs)(s.Head,{children:[a.jsx("script",{dangerouslySetInnerHTML:{__html:o}}),a.jsx("link",{rel:"icon",href:"https://developer-moneytrack-es.vercel.app/favicon.ico"})]}),(0,a.jsxs)("body",{className:"bg-white antialiased dark:bg-zinc-900",children:[a.jsx(s.Main,{}),a.jsx(s.NextScript,{})]})]})}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2204:e=>{e.exports=require("@algolia/autocomplete-core")},236:e=>{e.exports=require("@algolia/autocomplete-preset-algolia")},3257:e=>{e.exports=require("algoliasearch/lite")},8103:e=>{e.exports=require("clsx")},2235:e=>{e.exports=require("focus-visible")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7834:e=>{e.exports=import("@mdx-js/react")},6197:e=>{e.exports=import("framer-motion")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[567,739,859,910],()=>r(4695));module.exports=a})();