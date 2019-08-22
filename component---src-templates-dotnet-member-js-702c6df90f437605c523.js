(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{233:function(e,a,t){"use strict";t.r(a);t(12),t(26);var n=t(5),r=t(0),l=t.n(r),m=t(113),c=t(236),u=t(248),s=t(244),i=function(e){var a=e.member,t=a.exceptions,n=a.kind,m=a.parameters,i=a.remarks,E=a.returns,d=a.summary,o=a.type,p=a.typeParameters,y=(o.typeParameters||[]).map(function(e){return e.name}),g=(p||[]).map(function(e){return e.name});return l.a.createElement(l.a.Fragment,null,d&&l.a.createElement(s.a,{xml:d}),l.a.createElement(u.a,{member:a}),i&&l.a.createElement(s.a,{xml:i}),p&&p.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Type parameters"),p.map(function(e,a){return l.a.createElement(r.Fragment,{key:a},l.a.createElement("h5",null,e.name),e.summary&&l.a.createElement(s.a,{xml:e.summary}))})),m&&m.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Parameters"),m.map(function(e,a){return l.a.createElement(r.Fragment,{key:a},l.a.createElement("h5",null,l.a.createElement(c.a,{id:e.type,typeParameters:y,methodTypeParameters:g})," ",e.name),e.summary&&l.a.createElement(s.a,{xml:e.summary}))})),E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"method"===n?"Return type":"Type"),l.a.createElement("h5",null,l.a.createElement(c.a,{id:E.type,typeParameters:y,methodTypeParameters:g})),E.summary&&l.a.createElement(s.a,{xml:E.summary})),t&&t.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Exceptions"),t.map(function(e,a){return l.a.createElement(r.Fragment,{key:a},l.a.createElement("h5",null,l.a.createElement(c.a,{id:e.type,typeParameters:y,methodTypeParameters:g})),e.summary&&l.a.createElement(s.a,{xml:e.summary}))})))},E=t(217),d=t.n(E),o=function(e){var a=e.member;return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:d.a.table},l.a.createElement("tbody",null,a.overloads.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("th",null,l.a.createElement(c.a,{id:e.id})),l.a.createElement("td",null,e.summary&&l.a.createElement(s.a,{xml:e.summary})))}))),a.overloads.map(function(e){return l.a.createElement(r.Fragment,{key:e.id},l.a.createElement("h3",null,l.a.createElement(c.a,{id:e.id})),l.a.createElement(i,{key:e.id,member:Object.assign({},a,{},e)}))}))},p=t(245),y=t(214),g=t.n(y);t.d(a,"query",function(){return h});a.default=function(e){var a=e.data.dotnetMember,t=a.kind,r=a.name,u=a.overloads,s=a.type;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("title",null,("constructor"===t?s.name:r)+" "+t)),l.a.createElement(p.a,null,l.a.createElement(n.a,{to:"/api"},"API reference"),l.a.createElement(c.a,{id:s.namespace.id},l.a.createElement("code",null,s.namespace.name)," namespace"),l.a.createElement(c.a,{id:s.id},l.a.createElement("code",null,s.name)," ",s.kind)),l.a.createElement("h1",{className:g.a.title},l.a.createElement("code",null,"constructor"===t?s.name:r)," ",t),1===u.length?l.a.createElement(i,{member:Object.assign({},a,{},u[0])}):l.a.createElement(o,{member:a}))};var h="2982784148"},237:function(e,a,t){"use strict";t.d(a,"a",function(){return E});t(12);var n=t(0),r=t.n(n),l=t(465),m=t(240),c=t(239),u=t(241),s=t(242);l.a.registerLanguage("avro",c.a),l.a.registerLanguage("csharp",m.a),l.a.registerLanguage("shell",u.a);var i=Object.assign({},s.a,{hljs:{}});function E(e){var a=e.children,t=e.inline,n=e.language;return r.a.createElement(l.a,{language:n,style:i,PreTag:t?"span":"pre"},a)}},246:function(e,a,t){"use strict";var n=t(1),r=t(44)(5),l=!0;"find"in[]&&Array(1).find(function(){l=!1}),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t(116)("find")},248:function(e,a,t){"use strict";t(26),t(246);var n=t(0),r=t.n(n),l=t(237),m=t(236),c=t(216),u=t.n(c);a.a=function(e){var a=e.member,t=e.type||a,n=t.assembly,c=t.base,s=t.interfaces,i=t.namespace,E=(t.typeSignatures||t.memberSignatures||[]).find(function(e){return"C#"===e.language}),d=(t.typeParameters||[]).map(function(e){return e.name});return r.a.createElement("table",{className:u.a.table},r.a.createElement("tbody",null,n&&r.a.createElement("tr",null,r.a.createElement("th",null,"Assembly"),r.a.createElement("td",null,r.a.createElement(m.a,{id:n.id}))),i&&r.a.createElement("tr",null,r.a.createElement("th",null,"Namespace"),r.a.createElement("td",null,r.a.createElement(m.a,{id:i.id}))),E&&r.a.createElement("tr",null,r.a.createElement("th",null,"Signature"),r.a.createElement("td",null,r.a.createElement(l.a,{language:"csharp"},E.value))),c&&r.a.createElement("tr",null,r.a.createElement("th",null,"Base"),r.a.createElement("td",null,r.a.createElement(m.a,{id:c,typeParameters:d}))),s&&s.length>0&&s.map(function(e,a){return r.a.createElement("tr",{key:a},0===a&&r.a.createElement("th",{rowSpan:s.length},"Interfaces"),r.a.createElement("td",null,r.a.createElement(m.a,{id:e,typeParameters:d})))})))}}}]);
//# sourceMappingURL=component---src-templates-dotnet-member-js-702c6df90f437605c523.js.map