"use strict";(()=>{var s={};s.id=473,s.ids=[473,888,660],s.modules={1323:(s,e)=>{Object.defineProperty(e,"l",{enumerable:!0,get:function(){return function s(e,o){return o in e?e[o]:"then"in e&&"function"==typeof e.then?e.then(e=>s(e,o)):"function"==typeof e&&"default"===o?e:void 0}}})},236:(s,e,o)=>{o.a(s,async(s,n)=>{try{o.r(e),o.d(e,{config:()=>v,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>k,getStaticProps:()=>d,reportWebVitals:()=>y,routeModule:()=>j,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>x});var a=o(7093),t=o(5244),i=o(1323),r=o(3946),l=o(8910),p=o(4061),c=s([l,p]);[l,p]=c.then?(await c)():c;let u=(0,i.l)(p,"default"),d=(0,i.l)(p,"getStaticProps"),k=(0,i.l)(p,"getStaticPaths"),h=(0,i.l)(p,"getServerSideProps"),v=(0,i.l)(p,"config"),y=(0,i.l)(p,"reportWebVitals"),x=(0,i.l)(p,"unstable_getStaticProps"),g=(0,i.l)(p,"unstable_getStaticPaths"),m=(0,i.l)(p,"unstable_getStaticParams"),b=(0,i.l)(p,"unstable_getServerProps"),q=(0,i.l)(p,"unstable_getServerSideProps"),j=new a.PagesRouteModule({definition:{kind:t.x.PAGES,page:"/divisas",pathname:"/divisas",bundlePath:"",filename:""},components:{App:l.default,Document:r.default},userland:p});n()}catch(s){n(s)}})},4061:(s,e,o)=>{o.a(s,async(s,n)=>{try{o.r(e),o.d(e,{default:()=>c,getStaticProps:()=>u});var a=o(997),t=o(7834),i=s([t]);t=(i.then?(await i)():i)[0];let p=[{title:"Modelo Divisa",id:"modelo-divisa"},{title:"Lista de Divisas",id:"lista-de-divisas",tag:"GET",label:"/divisas"},{title:"Obtener Divisa",id:"obtener-divisa",tag:"GET",label:"/divisas/:id"}];function r(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",hr:"hr",pre:"pre",code:"code"},(0,t.useMDXComponents)(),s.components),{Properties:o,Property:n,Row:i,Col:r,CodeGroup:p}=e;return p||l("CodeGroup",!0),r||l("Col",!0),o||l("Properties",!0),n||l("Property",!0),i||l("Row",!0),(0,a.jsxs)(a.Fragment,{children:[a.jsx(e.h1,{children:"Divisas"}),"\n",a.jsx(e.p,{children:"Como sugiere el nombre, las divisas son una parte central del MoneyTrack. En esta p\xe1gina, profundizaremos en los diferentes endpoints de la API que puede utilizar para administrar divisas mediante programaci\xf3n. Veremos c\xf3mo consultar, crear, actualizar y eliminar usuarios.",className:"lead"}),"\n",a.jsx(e.h2,{id:"modelo-divisa",children:"Modelo Divisa"}),"\n",a.jsx(e.p,{children:"El modelo de divisa contiene toda la informaci\xf3n sobre las divisas."}),"\n",a.jsx(e.h3,{children:"Propiedades"}),"\n",(0,a.jsxs)(o,{children:[a.jsx(n,{name:"id",type:"int",children:a.jsx(e.p,{children:"Identificador unico de la divisa"})}),a.jsx(n,{name:"nombre",type:"string",children:a.jsx(e.p,{children:"Nombre de la divisa"})}),a.jsx(n,{name:"simbolo",type:"string",children:a.jsx(e.p,{children:"Simbolo de la divisa"})}),a.jsx(n,{name:"locale",type:"string",children:a.jsx(e.p,{children:"Pais de la divisa"})}),a.jsx(n,{name:"bandera",type:"string",children:a.jsx(e.p,{children:"URL con la bandera del pais al que pertence la divisa"})})]}),"\n",a.jsx(e.hr,{}),"\n",a.jsx(e.h2,{id:"lista-de-divisas",children:"Lista de Divisas",tag:"GET",label:"/divisas"}),"\n",(0,a.jsxs)(i,{children:[a.jsx(r,{children:a.jsx(e.p,{children:"Este punto final le permite recuperar una lista de divisas"})}),(0,a.jsxs)(r,{sticky:!0,children:[a.jsx(p,{title:"Request",tag:"GET",label:"/divisas",children:a.jsx(e.pre,{language:"bash",code:"curl -G 'https://api.moneytrack.es/divisas' \\\n    -H \"Token: {token}\" \\\n",children:a.jsx(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G </span><span style="color: var(--shiki-token-string-expression)">&#39;https://api.moneytrack.es/divisas&#39;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),a.jsx(e.pre,{language:"json",code:'[\n    {\n        "id": 1,\n        "nombre": "Euro",\n        "abreviatura": "EUR",\n        "simbolo": "€",\n        "locale": "es_ES",\n        "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png"\n    },\n    {\n        "id": 2,\n        "nombre": "D\xf3lar estadounidense",\n        "abreviatura": "USD",\n        "simbolo": "$",\n        "locale": "es_US",\n        "bandera": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"\n    }\n]\n',children:a.jsx(e.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Euro&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;abreviatura&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;EUR&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;simbolo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;€&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;locale&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;es_ES&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;bandera&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;D\xf3lar estadounidense&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;abreviatura&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;USD&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;simbolo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;$&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;locale&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;es_US&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;bandera&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'}),title:"Respuesta"})]})]}),"\n",a.jsx(e.hr,{}),"\n",a.jsx(e.h2,{id:"obtener-divisa",children:"Obtener Divisa",tag:"GET",label:"/divisas/:id"}),"\n",(0,a.jsxs)(i,{children:[a.jsx(r,{children:a.jsx(e.p,{children:"Obtener una divisa"})}),(0,a.jsxs)(r,{sticky:!0,children:[a.jsx(p,{title:"Request",tag:"GET",label:"/divisas/:id",children:a.jsx(e.pre,{language:"bash",code:"curl -G 'https://api.moneytrack.es/divisas/:id' \\\n    -H \"Token: {token}\" \\\n",children:a.jsx(e.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G </span><span style="color: var(--shiki-token-string-expression)">&#39;https://api.moneytrack.es/divisas/:id&#39;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),a.jsx(e.pre,{language:"json",code:'{\n    "id": 1,\n    "nombre": "Euro",\n    "abreviatura": "EUR",\n    "simbolo": "€",\n    "locale": "es_ES",\n    "bandera": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png"\n}\n',children:a.jsx(e.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Euro&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;abreviatura&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;EUR&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;simbolo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;€&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;locale&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;es_ES&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;bandera&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]}),"\n",a.jsx(e.hr,{})]})}let c=function(s={}){let{wrapper:e}=Object.assign({},(0,t.useMDXComponents)(),s.components);return e?a.jsx(e,Object.assign({},s,{children:a.jsx(r,s)})):r(s)};function l(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}let u=()=>({props:JSON.parse(JSON.stringify({_provideComponents:t.useMDXComponents,description:"On this page, we’ll dive into the different user endpoints you can use to manage users programmatically.",sections:p,title:"Divisas"}))});n()}catch(s){n(s)}})},3946:(s,e,o)=>{o.r(e),o.d(e,{default:()=>i});var n=o(997),a=o(6859);let t=`
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
`;function i(){return(0,n.jsxs)(a.Html,{lang:"en",children:[(0,n.jsxs)(a.Head,{children:[n.jsx("script",{dangerouslySetInnerHTML:{__html:t}}),n.jsx("link",{rel:"icon",href:"https://developer-moneytrack-es.vercel.app/favicon.ico"})]}),(0,n.jsxs)("body",{className:"bg-white antialiased dark:bg-zinc-900",children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}},5244:(s,e)=>{var o;Object.defineProperty(e,"x",{enumerable:!0,get:function(){return o}}),function(s){s.PAGES="PAGES",s.PAGES_API="PAGES_API",s.APP_PAGE="APP_PAGE",s.APP_ROUTE="APP_ROUTE"}(o||(o={}))},2204:s=>{s.exports=require("@algolia/autocomplete-core")},8103:s=>{s.exports=require("clsx")},2235:s=>{s.exports=require("focus-visible")},2785:s=>{s.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:s=>{s.exports=require("next/head")},6689:s=>{s.exports=require("react")},6405:s=>{s.exports=require("react-dom")},997:s=>{s.exports=require("react/jsx-runtime")},7834:s=>{s.exports=import("@mdx-js/react")},6197:s=>{s.exports=import("framer-motion")},6912:s=>{s.exports=import("zustand")},7147:s=>{s.exports=require("fs")},1017:s=>{s.exports=require("path")},2781:s=>{s.exports=require("stream")},9796:s=>{s.exports=require("zlib")}};var e=require("../webpack-runtime.js");e.C(s);var o=s=>e(e.s=s),n=e.X(0,[393,739,859,910],()=>o(236));module.exports=n})();