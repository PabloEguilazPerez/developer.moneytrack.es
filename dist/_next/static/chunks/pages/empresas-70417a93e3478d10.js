(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{620:function(s,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/empresas",function(){return o(8517)}])},8517:function(s,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return r}});var a=o(5893),e=o(1151);function t(s){let n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",hr:"hr",pre:"pre",code:"code"},(0,e.ah)(),s.components),{Properties:o,Property:t,Row:r,Col:i,CodeGroup:l}=n;return l||p("CodeGroup",!0),i||p("Col",!0),o||p("Properties",!0),t||p("Property",!0),r||p("Row",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Empresas"}),"\n",(0,a.jsx)(n.p,{children:"Como sugiere el nombre, las empresas son una parte central del MoneyTrack. En esta p\xe1gina, profundizaremos en los diferentes puntos finales de usuario que puede utilizar para administrar las empresas mediante programaci\xf3n. Veremos c\xf3mo consultar empresas.",className:"lead"}),"\n",(0,a.jsx)(n.h2,{id:"modelo-empresa",children:"Modelo Empresa"}),"\n",(0,a.jsx)(n.p,{children:"El modelo de presupuesto contiene toda la informaci\xf3n sobre las empresas, como su id y nombre."}),"\n",(0,a.jsx)(n.h3,{children:"Propiedades"}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)(t,{name:"id",type:"int",children:(0,a.jsx)(n.p,{children:"Identificador unico del presupuesto"})}),(0,a.jsx)(t,{name:"nombre",type:"string",children:(0,a.jsx)(n.p,{children:"Nombre de la empresa"})}),(0,a.jsx)(t,{name:"logo",type:"string",children:(0,a.jsx)(n.p,{children:"URL imagen del logo empresa"})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"listar-empresas",children:"Listar Empresas",tag:"GET",label:"/empresas"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{children:(0,a.jsx)(n.p,{children:"Listar todos los Empresas"})}),(0,a.jsxs)(i,{sticky:!0,children:[(0,a.jsx)(l,{title:"Request",tag:"GET",label:"/empresas",children:(0,a.jsx)(n.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/empresas \\\n  -H "Token: {token}" \\\n',children:(0,a.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/empresas \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,a.jsx)(n.pre,{language:"json",code:'[\n    {\n        "id": 1,\n        "nombre": "Alcampo",\n        "logo": "https://api.moneytrack.es/cdn/empresas/Alcampo.png"\n    },\n    {\n        "id": 2,\n        "nombre": "GitHub",\n        "logo": "https://api.moneytrack.es/cdn/empresas/GitHub.png"\n    }\n]\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Alcampo&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/Alcampo.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;GitHub&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/GitHub.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'}),title:"Respuesta"})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"obtener-una-empresa",children:"Obtener una empresa",tag:"GET",label:"/empresas/:id"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(i,{children:(0,a.jsx)(n.p,{children:"Obtener una empresa por id"})}),(0,a.jsxs)(i,{sticky:!0,children:[(0,a.jsx)(l,{title:"Request",tag:"GET",label:"/empresas/:id",children:(0,a.jsx)(n.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/empresas/:id \\\n  -H "Token: {token}" \\\n',children:(0,a.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/empresas/:id \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,a.jsxs)(l,{title:"Response",tag:"",label:"",children:[(0,a.jsx)(n.pre,{language:"json",code:'{\n    "id": 1,\n    "nombre": "Alcampo",\n    "logo": "https://api.moneytrack.es/cdn/empresas/Alcampo.png"\n}\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Alcampo&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/Alcampo.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"200 OK"}),(0,a.jsx)(n.pre,{language:"json",code:'{\n    "error": "Invalid token",\n    "token": "0uE9edABBqOoTR3CQMtE"\n}\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;error&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Invalid token&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;token&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;0uE9edABBqOoTR3CQMtE&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"401 Unauthorized"})]})]})]})]})}var r=!0;function p(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,e.ah)(),s.components);return n?(0,a.jsx)(n,Object.assign({},s,{children:(0,a.jsx)(t,s)})):t(s)}}},function(s){s.O(0,[888,774,179],function(){return s(s.s=620)}),_N_E=s.O()}]);