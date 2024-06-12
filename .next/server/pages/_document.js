"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={3946:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var i=r(997),s=r(6859);let o=`
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
`;function a(){return(0,i.jsxs)(s.Html,{lang:"en",children:[(0,i.jsxs)(s.Head,{children:[i.jsx("script",{dangerouslySetInnerHTML:{__html:o}}),i.jsx("link",{rel:"icon",href:"https://developer-moneytrack-es.vercel.app/favicon.ico"})]}),(0,i.jsxs)("body",{className:"bg-white antialiased dark:bg-zinc-900",children:[i.jsx(s.Main,{}),i.jsx(s.NextScript,{})]})]})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[567,859],()=>r(3946));module.exports=i})();