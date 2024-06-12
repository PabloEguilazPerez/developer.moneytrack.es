(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{7764:function(s,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usuario",function(){return o(2511)}])},2511:function(s,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return r}});var a=o(5893),e=o(1151);function t(s){let n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",hr:"hr",code:"code",pre:"pre"},(0,e.ah)(),s.components),{Properties:o,Property:t,Row:r,Col:l,CodeGroup:p}=n;return p||i("CodeGroup",!0),l||i("Col",!0),o||i("Properties",!0),t||i("Property",!0),r||i("Row",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Usuarios"}),"\n",(0,a.jsx)(n.p,{children:"Como sugiere el nombre, los usuarios son una parte central del Protocolo; la raz\xf3n por la que existe el Protocolo es para que pueda tener conversaciones seguras con sus usuarios. En esta p\xe1gina, profundizaremos en los diferentes puntos finales de usuario que puede utilizar para administrar usuarios mediante programaci\xf3n. Veremos c\xf3mo consultar, crear, actualizar y eliminar usuarios.",className:"lead"}),"\n",(0,a.jsx)(n.h2,{id:"modelo-usuario",children:"Modelo Usuario"}),"\n",(0,a.jsx)(n.p,{children:"El modelo de usuario contiene toda la informaci\xf3n sobre sus usuarios, como su nombre, apellidos y email."}),"\n",(0,a.jsx)(n.h3,{children:"Propiedades"}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)(t,{name:"nombre",type:"string",children:(0,a.jsx)(n.p,{children:"Nombre del usuario"})}),(0,a.jsx)(t,{name:"apellidos",type:"string",children:(0,a.jsx)(n.p,{children:"Apellidos del usuario"})}),(0,a.jsx)(t,{name:"email",type:"string",children:(0,a.jsx)(n.p,{children:"Email del usuario"})}),(0,a.jsx)(t,{name:"subscription",type:"string",children:(0,a.jsx)(n.p,{children:"Nivel de subscripcion"})}),(0,a.jsx)(t,{name:"enableBiometricLogin",type:"boolean",children:(0,a.jsx)(n.p,{children:"Si el usuario tiene activado el auautenticaci\xf3n biom\xe9trica"})}),(0,a.jsx)(t,{name:"token",type:"string",children:(0,a.jsx)(n.p,{children:"Token para hacer las petitciones a la API"})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"login-a-user",children:"Login a User",tag:"POST",label:"/user"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(l,{children:[(0,a.jsxs)(n.p,{children:["This endpoint allows you to retrieve a paginated list of all your users.\nThis endpoint allows you to perform an update on a user. Currently, the only attribute that can be updated on users is the ",(0,a.jsx)(n.code,{children:"display_name"})," attribute which controls how a user appears in your user list in Protocol."]}),(0,a.jsx)(n.h3,{children:"Required attributes"}),(0,a.jsxs)(o,{children:[(0,a.jsx)(t,{name:"email",type:"string",children:(0,a.jsx)(n.p,{children:"Email del usuario"})}),(0,a.jsx)(t,{name:"password",type:"string",children:(0,a.jsx)(n.p,{children:"Contrase\xf1a del usuario"})}),(0,a.jsx)(t,{name:"app",type:"string",children:(0,a.jsx)(n.p,{children:"App desde la que hace el login el usuario"})})]})]}),(0,a.jsxs)(l,{sticky:!0,children:[(0,a.jsx)(p,{title:"Request",tag:"POST",label:"/user",children:(0,a.jsx)(n.pre,{language:"bash",code:"curl -G https://api.moneytrack.es/auth/ \\\n",children:(0,a.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/auth/ \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,a.jsx)(n.pre,{language:"json",code:'{\n  "email": "fernandoalonso@gmail.com",\n  "password": "1234",\n  "app": "NombreDeMiApp"\n}\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;email&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;fernandoalonso@gmail.com&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;password&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1234&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;app&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;NombreDeMiApp&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Cuerpo"}),(0,a.jsx)(n.pre,{language:"json",code:'{\n  "nombre": "Fernando",\n  "apellidos": "Alonso",\n  "email": "fernandoalonso@gmail.com",\n  "subscription": "No Verificada",\n  "enableBiometricLogin": false,\n  "token": "7UtCS9yR8Rjb3VM9KcH10hRMpRv8JrDHvo"\n}\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Fernando&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;apellidos&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Alonso&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;email&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;fernandoalonso@gmail.com&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;subscription&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;No Verificada&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;enableBiometricLogin&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;token&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;7UtCS9yR8Rjb3VM9KcH10hRMpRv8JrDHvo&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"obtener-usuario-autenticado",children:"Obtener usuario autenticado",tag:"GET",label:"/user"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(l,{children:(0,a.jsx)(n.p,{children:"This endpoint allows you to add a new user to your user list in Protocol. To add a user, you must provide their Protocol username and phone number."})}),(0,a.jsxs)(l,{sticky:!0,children:[(0,a.jsx)(p,{title:"Request",tag:"GET",label:"/user",children:(0,a.jsx)(n.pre,{language:"bash",code:'curl -G https://api.moneytrack.es/auth/ \\\n  -H "Token: {token}" \\\n',children:(0,a.jsx)(n.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">curl -G https://api.moneytrack.es/auth/ \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Token: {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span></span>'}),title:"cURL"})}),(0,a.jsx)(n.pre,{language:"json",code:'{\n  "nombre": "Fernando",\n  "apellidos": "Alonso",\n  "email": "fernandoalonso@gmail.com",\n  "subscription": "No Verificada",\n  "enableBiometricLogin": false,\n  "token": "7UtCS9yR8Rjb3VM9KcH10hRMpRv8JrDHvo"\n}\n',children:(0,a.jsx)(n.code,{className:"language-json",children:'<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;nombre&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Fernando&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;apellidos&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Alonso&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;email&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;fernandoalonso@gmail.com&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;subscription&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;No Verificada&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;enableBiometricLogin&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;token&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;7UtCS9yR8Rjb3VM9KcH10hRMpRv8JrDHvo&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"Response"})]})]})]})}var r=!0;function i(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,e.ah)(),s.components);return n?(0,a.jsx)(n,Object.assign({},s,{children:(0,a.jsx)(t,s)})):t(s)}}},function(s){s.O(0,[888,774,179],function(){return s(s.s=7764)}),_N_E=s.O()}]);