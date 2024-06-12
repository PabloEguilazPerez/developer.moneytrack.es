(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{1537:function(s,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recurrentMoves",function(){return o(9163)}])},9163:function(s,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return r}});var e=o(5893),a=o(1151);function t(s){let n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",hr:"hr",pre:"pre",code:"code"},(0,a.ah)(),s.components),{Properties:o,Property:t,Row:r,Col:p,CodeGroup:l}=n;return l||i("CodeGroup",!0),p||i("Col",!0),o||i("Properties",!0),t||i("Property",!0),r||i("Row",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{children:"Movimientos Recurrentes"}),"\n",(0,e.jsx)(n.p,{children:"Como sugiere el nombre, los Movimientos Recurrentes son una parte central del MoneyTrack. En esta p\xe1gina, profundizaremos en los diferentes endpoints de la API que puede utilizar para administrar los movimientos recurrentes mediante programaci\xf3n. Veremos c\xf3mo consultar, crear, actualizar y eliminar movimientos recurrentes.",className:"lead"}),"\n",(0,e.jsx)(n.h2,{id:"modelo-movimientos-recurrentes",children:"Modelo Movimientos Recurrentes"}),"\n",(0,e.jsx)(n.p,{children:"El modelo de Movimiento Recurrente contiene toda la informaci\xf3n sobre los Movimientos Recurrentes, como su id y estado o frecuencia."}),"\n",(0,e.jsx)(n.h3,{children:"Propiedades"}),"\n",(0,e.jsxs)(o,{children:[(0,e.jsx)(t,{name:"id",type:"int",children:(0,e.jsx)(n.p,{children:"Identificador unico del movimiento"})}),(0,e.jsx)(t,{name:"fechaInicio",type:"string",children:(0,e.jsx)(n.p,{children:"Fecha de creacion"})}),(0,e.jsx)(t,{name:"fechaProximoPago",type:"string",children:(0,e.jsx)(n.p,{children:"Fecha del proximo movimiento"})}),(0,e.jsx)(t,{name:"importe",type:"float",children:(0,e.jsx)(n.p,{children:"Importe del movimiento"})}),(0,e.jsx)(t,{name:"categoria",type:"Categoria",children:(0,e.jsxs)(n.p,{children:["Categoria Asociada ",(0,e.jsx)(n.a,{href:"/categoria",children:"Categoria"}),"."]})}),(0,e.jsx)(t,{name:"description",type:"string",children:(0,e.jsx)(n.p,{children:"Descripcion del movimiento"})}),(0,e.jsx)(t,{name:"frecuencia",type:"string",children:(0,e.jsx)(n.p,{children:"Frecuencia de los movimientos"})}),(0,e.jsx)(t,{name:"estado",type:"string",children:(0,e.jsx)(n.p,{children:"Estado del movimiento"})}),(0,e.jsx)(t,{name:"empresa",type:"Empresa",children:(0,e.jsxs)(n.p,{children:["Descripcion del movimiento ",(0,e.jsx)(n.a,{href:"/empresas",children:"Empresa"})]})})]}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(n.h2,{id:"listar-movimientos-recurrentes",children:"Listar Movimientos Recurrentes",tag:"GET",label:"/movimientosRecurrentes"}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)(p,{children:(0,e.jsx)(n.p,{children:"Listar todos los Movimientos Recurrentes"})}),(0,e.jsxs)(p,{sticky:!0,children:[(0,e.jsx)(l,{title:"Request",tag:"GET",label:"/movimientosRecurrentes",children:(0,e.jsx)(n.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/movimientosRecurrentes \\\n  -H "Token: {token}" \\\n',children:(0,e.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/movimientosRecurrentes \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,e.jsx)(n.pre,{language:"json",code:'[\n    {\n        "id": 4,\n        "fechaInicio": "11/06/2024",\n        "fechaProximoPago": "13/06/2024",\n        "importe": -12,\n        "categoria": {\n            "id": 4,\n            "nombre": "Suscripciones"\n        },\n        "descripcion": "Nuevo movimiento recurrente",\n        "frecuencia": "diario",\n        "estado": "activo",\n        "empresa": {\n            "id": 6,\n            "nombre": "PayPal",\n            "logo": "https://api.moneytrack.es/cdn/empresas/PayPal.png"\n        }\n    }\n]\n',children:(0,e.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;fechaInicio&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;11/06/2024&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;fechaProximoPago&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;13/06/2024&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;importe&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">-12</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;categoria&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Suscripciones&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;descripcion&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Nuevo movimiento recurrente&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;frecuencia&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;diario&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;estado&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;activo&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;empresa&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;PayPal&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/PayPal.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'}),title:"Respuesta"})]})]}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(n.h2,{id:"obtener-un-movimiento-recurrente",children:"Obtener un Movimiento Recurrente",tag:"GET",label:"/movimientosRecurrentes/:id"}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)(p,{children:(0,e.jsx)(n.p,{children:"Obtener un Movimiento Recurrente por id"})}),(0,e.jsxs)(p,{sticky:!0,children:[(0,e.jsx)(l,{title:"Request",tag:"GET",label:"/movimientosRecurrentes/:id",children:(0,e.jsx)(n.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/movimientosRecurrentes/:id \\\n  -H "Token: {token}" \\\n',children:(0,e.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/movimientosRecurrentes/:id \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,e.jsx)(n.pre,{language:"json",code:'{\n    "id": 4,\n    "fechaInicio": "11/06/2024",\n    "fechaProximoPago": "13/06/2024",\n    "importe": -12,\n    "categoria": {\n        "id": 4,\n        "nombre": "Suscripciones"\n    },\n    "descripcion": "Nuevo movimiento recurrente",\n    "frecuencia": "diario",\n    "estado": "activo",\n    "empresa": {\n        "id": 6,\n        "nombre": "PayPal",\n        "logo": "https://api.moneytrack.es/cdn/empresas/PayPal.png"\n    }\n}\n',children:(0,e.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;fechaInicio&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;11/06/2024&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;fechaProximoPago&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;13/06/2024&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;importe&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">-12</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;categoria&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Suscripciones&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;descripcion&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Nuevo movimiento recurrente&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;frecuencia&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;diario&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;estado&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;activo&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;empresa&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;PayPal&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;logo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://api.moneytrack.es/cdn/empresas/PayPal.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(n.h2,{id:"crear-movimiento-recurrente",children:"Crear Movimiento Recurrente",tag:"POST",label:"/movimientosRecurrentes/:id"}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsxs)(p,{children:[(0,e.jsx)(n.p,{children:"Crear una Movimiento Recurrente"}),(0,e.jsx)(n.h3,{children:"Atributos Requeridos"}),(0,e.jsxs)(o,{children:[(0,e.jsx)(t,{name:"importe",type:"float",children:(0,e.jsx)(n.p,{children:"Importe del movimiento"})}),(0,e.jsx)(t,{name:"proximoPago",type:"string",children:(0,e.jsx)(n.p,{children:"Fecha del Proximo Pago"})})]})]}),(0,e.jsxs)(p,{sticky:!0,children:[(0,e.jsx)(l,{title:"Request",tag:"POST",label:"/movimientosRecurrentes",children:(0,e.jsx)(n.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/movimientosRecurrentes \\\n -H "Token: {token}" \\\n',children:(0,e.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/movimientosRecurrentes \\</span></span>\n<span><span style="color: var(--shiki-color-text)"> -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,e.jsx)(n.pre,{language:"json",code:'{\n  "id": 1,\n  "message": "Movimientos Recurrente creado"\n}\n',children:(0,e.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Movimientos Recurrente creado&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(n.h2,{id:"actualizar-movimiento-recurrente",children:"Actualizar Movimiento Recurrente",tag:"PUT",label:"/movimientosRecurrentes/:id"}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsxs)(p,{children:[(0,e.jsx)(n.p,{children:"Actualizar una Movimiento Recurrente"}),(0,e.jsx)(n.h3,{children:"Atributos Requeridos"}),(0,e.jsxs)(o,{children:[(0,e.jsx)(t,{name:"dato",type:"string",children:(0,e.jsx)(n.p,{children:"Dato que se desea actualizar"})}),(0,e.jsx)(t,{name:"valor",type:"string",children:(0,e.jsx)(n.p,{children:"Nuevo valor"})})]})]}),(0,e.jsxs)(p,{sticky:!0,children:[(0,e.jsx)(l,{title:"Request",tag:"PUT",label:"/movimientosRecurrentes/:id",children:(0,e.jsx)(n.pre,{language:"bash",code:'curl -X PUT https://api.moneytrack.es/movimientosRecurrentes/:id \\\n  -H "Token: {token}" \\\n',children:(0,e.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.moneytrack.es/movimientosRecurrentes/:id \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,e.jsx)(n.pre,{language:"json",code:'{\n  "code": 200,\n  "message": "Movimiento Recurrente actualizado"\n}\n',children:(0,e.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;code&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Movimiento Recurrente actualizado&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]}),"\n",(0,e.jsx)(n.hr,{}),"\n",(0,e.jsx)(n.h2,{id:"borrar-una-movimiento-recurrente",children:"Borrar una Movimiento Recurrente",tag:"DELETE",label:"/movimientosRecurrentes/:id"}),"\n",(0,e.jsxs)(r,{children:[(0,e.jsx)(p,{children:(0,e.jsx)(n.p,{children:"Borrar una Movimiento Recurrente"})}),(0,e.jsxs)(p,{sticky:!0,children:[(0,e.jsx)(l,{title:"Request",tag:"DELETE",label:"/movimientosRecurrentes/:id",children:(0,e.jsx)(n.pre,{language:"bash",code:'curl -X DELETE https://api.moneytrack.es/movimientosRecurrentes/:id \\\n -H "Token: {token}" \\\n',children:(0,e.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.moneytrack.es/movimientosRecurrentes/:id \\</span></span>\n<span><span style="color: var(--shiki-color-text)"> -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,e.jsx)(n.pre,{language:"json",code:'{\n  "message": "Movimiento Recurrente eliminado"\n}\n',children:(0,e.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Movimiento Recurrente eliminado&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]})]})}var r=!0;function i(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),s.components);return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(t,s)})):t(s)}}},function(s){s.O(0,[888,774,179],function(){return s(s.s=1537)}),_N_E=s.O()}]);