(this.webpackJsonppuhluet_exsol=this.webpackJsonppuhluet_exsol||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(15),c=t.n(o),i=(t(20),t(6)),u=t(3),l=(t(21),t(0)),s=function(e){var n=e.htmlFor,t=e.label,a=e.type,r=e.value,o=e.onChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{className:"label",htmlFor:n,children:t}),Object(l.jsx)("input",{type:a,className:"input",id:n,value:r,onChange:o})]})},d=function(e){var n=e.onSubmit,t=e.newName,a=e.handleNameChange,r=e.newNumber,o=e.handleNumberChange;return Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsx)(s,{label:"Name:",htmlFor:"name",type:"text",value:t,onChange:a}),Object(l.jsx)(s,{label:"Number:",htmlFor:"number",value:r,onChange:o}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button submit",type:"submit",children:"Add"})})]})},b=function(e){var n=e.person,t=e.handleDelete;return Object(l.jsxs)("div",{className:"person",children:[Object(l.jsx)("span",{className:"person--name",children:n.name}),Object(l.jsx)("span",{className:"person--number",children:n.number}),Object(l.jsx)("button",{className:"button",onClick:function(){return t(n.id)},children:"Delete"})]})},m=function(e){var n=e.filter,t=e.persons,a=e.filteredPersons,r=e.handleDelete;return Object(l.jsx)("div",{className:"persons",children:""===n?null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsx)(b,{person:e,handleDelete:r},e.name)})):null===a||void 0===a?void 0:a.map((function(e){return Object(l.jsx)(b,{person:e,handleDelete:r},e.name)}))})},f=t(4),j=t.n(f),h="/api/persons",v=function(){return j.a.get(h).then((function(e){return e.data}))},O=function(e){return j.a.post(h,e).then((function(e){return e.data}))},p=function(e){return j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},x=function(e,n){return j.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},N=function(e){var n=e.message,t=e.className;return null==n?null:Object(l.jsx)("div",{className:t,children:n})},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),c=Object(u.a)(o,2),b=c[0],f=c[1],j=Object(a.useState)(""),h=Object(u.a)(j,2),g=h[0],w=h[1],C=Object(a.useState)(""),S=Object(u.a)(C,2),y=S[0],D=S[1],F=Object(a.useState)(null),k=Object(u.a)(F,2),T=k[0],A=k[1],P=Object(a.useState)(null),E=Object(u.a)(P,2),I=E[0],J=E[1];Object(a.useEffect)((function(){v().then((function(e){r(e)}))}),[]);return Object(l.jsxs)("main",{className:"container",children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(N,{message:(null===I||void 0===I?void 0:I.notification)||(null===I||void 0===I?void 0:I.error),className:(null===I||void 0===I?void 0:I.notification)?"notification":"error"}),Object(l.jsx)(s,{label:"Filter shown with",htmlFor:"filter",type:"text",value:y,onChange:function(e){D(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));A(n)}}),Object(l.jsx)("h2",{children:"Add a new"}),Object(l.jsx)(d,{onSubmit:function(e){e.preventDefault();var n={name:b,number:g},a=t.some((function(e){return e.name===b}));if(""!==b){if(a){var o=t.find((function(e){return e.name===b})),c=Object(i.a)(Object(i.a)({},o),{},{number:g}),u=o.id;return g<8?(J({error:"".concat(g," is too short, please provide a number with at least 8 digits")}),void setTimeout((function(){J(null)}),5e3)):(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&x(u,c).then((function(e){r(t.map((function(n){return n.id!==u?n:e}))),J({notification:"Updated number for ".concat(o.name)}),setTimeout((function(){J(null)}),5e3)})).catch((function(e){J({error:"Information for ".concat(o.name," has already been removed from server")}),r(t.filter((function(e){return e.id!==u}))),setTimeout((function(){J(null)}),5e3)})),f(""),void w(""))}O(n).then((function(e){r(t.concat(e)),J({notification:"Added ".concat(e.name)}),setTimeout((function(){J(null)}),5e3),f(""),w("")})).catch((function(e){J(e.response.data),setTimeout((function(){J(null)}),5e3)}))}},newName:b,handleNameChange:function(e){f(e.target.value)},newNumber:g,handleNumberChange:function(e){w(e.target.value)}}),Object(l.jsx)("h2",{children:"Numbers"}),Object(l.jsx)(m,{filter:y,persons:t,filteredPersons:T,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&p(e).then((function(){var n=t.filter((function(n){return n.id!==e}));r(n),D("")}))}})]})};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b038d218.chunk.js.map