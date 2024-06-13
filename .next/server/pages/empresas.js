"use strict";(()=>{var e={};e.id=511,e.ids=[511,888,660],e.modules={1323:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,n){return n in s?s[n]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,n)):"function"==typeof s&&"default"===n?s:void 0}}})},1715:(e,s,n)=>{n.a(e,async(e,o)=>{try{n.r(s),n.d(s,{config:()=>m,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>k,getStaticProps:()=>u,reportWebVitals:()=>y,routeModule:()=>q,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>x});var t=n(7093),a=n(5244),r=n(1323),i=n(3946),p=n(8910),l=n(8986),c=e([p,l]);[p,l]=c.then?(await c)():c;let d=(0,r.l)(l,"default"),u=(0,r.l)(l,"getStaticProps"),k=(0,r.l)(l,"getStaticPaths"),h=(0,r.l)(l,"getServerSideProps"),m=(0,r.l)(l,"config"),y=(0,r.l)(l,"reportWebVitals"),x=(0,r.l)(l,"unstable_getStaticProps"),v=(0,r.l)(l,"unstable_getStaticPaths"),g=(0,r.l)(l,"unstable_getStaticParams"),j=(0,r.l)(l,"unstable_getServerProps"),b=(0,r.l)(l,"unstable_getServerSideProps"),q=new t.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/empresas",pathname:"/empresas",bundlePath:"",filename:""},components:{App:p.default,Document:i.default},userland:l});o()}catch(e){o(e)}})},8986:(e,s,n)=>{n.a(e,async(e,o)=>{try{n.r(s),n.d(s,{default:()=>c,getStaticProps:()=>d});var t=n(997),a=n(7834),r=e([a]);a=(r.then?(await r)():r)[0];let l=[{title:"Modelo Empresa",id:"modelo-empresa"},{title:"Listar Empresas",id:"listar-empresas",tag:"GET",label:"/empresas"},{title:"Obtener una empresa",id:"obtener-una-empresa",tag:"GET",label:"/empresas/:id"}];function i(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",hr:"hr",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components),{Properties:n,Property:o,Row:r,Col:i,CodeGroup:l}=s;return l||p("CodeGroup",!0),i||p("Col",!0),n||p("Properties",!0),o||p("Property",!0),r||p("Row",!0),(0,t.jsxs)(t.Fragment,{children:[t.jsx(s.h1,{children:"Empresas"}),"\n",t.jsx(s.p,{children:"Como sugiere el nombre, las empresas son una parte central del MoneyTrack. En esta p\xe1gina, profundizaremos en los diferentes endpoints de la API que puede utilizar para administrar empresas mediante programaci\xf3n. Veremos c\xf3mo consultar empresas.",className:"lead"}),"\n",t.jsx(s.h2,{id:"modelo-empresa",children:"Modelo Empresa"}),"\n",t.jsx(s.p,{children:"El modelo de empresa contiene toda la informaci\xf3n sobre las empresas, como su id y nombre."}),"\n",t.jsx(s.h3,{children:"Propiedades"}),"\n",(0,t.jsxs)(n,{children:[t.jsx(o,{name:"id",type:"int",children:t.jsx(s.p,{children:"Identificador unico de la empresa"})}),t.jsx(o,{name:"nombre",type:"string",children:t.jsx(s.p,{children:"Nombre de la empresa"})}),t.jsx(o,{name:"logo",type:"string",children:t.jsx(s.p,{children:"URL imagen del logo empresa"})})]}),"\n",t.jsx(s.hr,{}),"\n",t.jsx(s.h2,{id:"listar-empresas",children:"Listar Empresas",tag:"GET",label:"/empresas"}),"\n",(0,t.jsxs)(r,{children:[t.jsx(i,{children:t.jsx(s.p,{children:"Listar todos los Empresas"})}),(0,t.jsxs)(i,{sticky:!0,children:[t.jsx(l,{title:"Request",tag:"GET",label:"/empresas",children:t.jsx(s.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/empresas \\\n  -H "Token: {token}" \\\n',children:t.jsx(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/empresas \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),t.jsx(s.pre,{language:"json",code:'[\n    {\n        "id": 1,\n        "nombre": "Alcampo",\n        "logo": "https://api.moneytrack.es/cdn/empresas/Alcampo.png"\n    },\n    {\n        "id": 2,\n        "nombre": "GitHub",\n        "logo": "https://api.moneytrack.es/cdn/empresas/GitHub.png"\n    }\n]\n',children:t.jsx(s.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Alcampo&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/Alcampo.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;GitHub&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/GitHub.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'}),title:"Respuesta"})]})]}),"\n",t.jsx(s.hr,{}),"\n",t.jsx(s.h2,{id:"obtener-una-empresa",children:"Obtener una empresa",tag:"GET",label:"/empresas/:id"}),"\n",(0,t.jsxs)(r,{children:[t.jsx(i,{children:t.jsx(s.p,{children:"Obtener una empresa por id"})}),(0,t.jsxs)(i,{sticky:!0,children:[t.jsx(l,{title:"Request",tag:"GET",label:"/empresas/:id",children:t.jsx(s.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/empresas/:id \\\n  -H "Token: {token}" \\\n',children:t.jsx(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/empresas/:id \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,t.jsxs)(l,{title:"Response",tag:"",label:"",children:[t.jsx(s.pre,{language:"json",code:'{\n    "id": 1,\n    "nombre": "Alcampo",\n    "logo": "https://api.moneytrack.es/cdn/empresas/Alcampo.png"\n}\n',children:t.jsx(s.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Alcampo&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/Alcampo.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"200 OK"}),t.jsx(s.pre,{language:"json",code:'{\n    "error": "Invalid token",\n    "token": "0uE9edABBqOoTR3CQMtE"\n}\n',children:t.jsx(s.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;error&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Invalid token&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;token&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;0uE9edABBqOoTR3CQMtE&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"401 Unauthorized"})]})]})]})]})}let c=function(e={}){let{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(i,e)})):i(e)};function p(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let d=()=>({props:JSON.parse(JSON.stringify({_provideComponents:a.useMDXComponents,description:"On this page, we’ll dive into the different user endpoints you can use to manage users programmatically.",sections:l,title:"Empresas"}))});o()}catch(e){o(e)}})},3946:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var o=n(997),t=n(6859);let a=`
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
`;function r(){return(0,o.jsxs)(t.Html,{lang:"en",children:[(0,o.jsxs)(t.Head,{children:[o.jsx("script",{dangerouslySetInnerHTML:{__html:a}}),o.jsx("link",{rel:"icon",href:"https://developer-moneytrack-es.vercel.app/favicon.ico"})]}),(0,o.jsxs)("body",{className:"bg-white antialiased dark:bg-zinc-900",children:[o.jsx(t.Main,{}),o.jsx(t.NextScript,{})]})]})}},5244:(e,s)=>{var n;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},2204:e=>{e.exports=require("@algolia/autocomplete-core")},8103:e=>{e.exports=require("clsx")},2235:e=>{e.exports=require("focus-visible")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7834:e=>{e.exports=import("@mdx-js/react")},6197:e=>{e.exports=import("framer-motion")},6912:e=>{e.exports=import("zustand")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../webpack-runtime.js");s.C(e);var n=e=>s(s.s=e),o=s.X(0,[393,739,859,910],()=>n(1715));module.exports=o})();