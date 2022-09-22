(this["webpackJsonpbroken-react-todo-application-context-api"]=this["webpackJsonpbroken-react-todo-application-context-api"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),i=c(7),r=c.n(i),s=c(4),a=c(6),d=c(8),l=c(0),u=Object(n.createContext)(),j=function(e){var t=o.a.useState((function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):void 0})),c=Object(s.a)(t,2),n=c[0],i=c[1];return o.a.useEffect((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(l.jsx)(u.Provider,{value:{removeTodo:function(e){i(n.filter((function(t){return t.id!==e})))},addTodos:function(e){i([].concat(Object(d.a)(n),[e]))},checkTodo:function(e){i(n.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{checked:!t.checked}):t})))},localStorage:localStorage,todos:n},children:e.children})},b=(c(14),function(){var e=n.useContext(u),t=e.todos,c=e.addTodos,o=n.useState(""),i=Object(s.a)(o,2),r=i[0],a=i[1],d=function(e){c({id:t.length,label:r,checked:!1}),a("")};return Object(l.jsxs)("div",{className:"todo-form",children:[Object(l.jsx)("input",{placeholder:"Enter new task",value:r,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){13===e.keyCode&&d()}}),Object(l.jsx)("button",{type:"button",onClick:d,children:"Add task"})]})}),h=(c(15),function(e){var t=e.onClick,c=e.checked,n=e.onDelete,o=e.label,i=e.onKeyUp;return Object(l.jsxs)("div",{className:"checkbox",children:[Object(l.jsxs)("div",{tabIndex:"0",role:"checkbox","aria-checked":!0,className:"checkbox-content",onClick:t,onKeyUp:i,children:[Object(l.jsx)("input",{tabIndex:"-1",type:"checkbox",checked:c,onChange:t}),Object(l.jsx)("span",{className:c?"checkbox-checked":"",children:o})]}),Object(l.jsx)("button",{type:"button",className:"checkbox-delete",onClick:n,children:"x"})]})}),x=(c(16),function(){var e=n.useContext(u),t=e.todos,c=e.removeTodo,o=e.checkTodo,i=function(e){o(e)};return Object(l.jsxs)("div",{className:"todo-list",children:[Object(l.jsx)("span",{className:"todo-list-title",children:"Todos:"}),t.length?Object(l.jsx)("div",{className:"todo-list-content",children:t.map((function(e){return Object(l.jsx)(h,{label:e.label,checked:e.checked,onClick:function(t){return i(e.id)},onKeyUp:function(t){return function(e,t){13===e.keyCode&&i(t)}(t,e.id)},onDelete:function(){return t=e.id,void c(t);var t}},e.id)}))}):Object(l.jsx)("div",{className:"no-todos",children:"Looks like you're absolutely free today!"})]})}),f=(c(17),function(){var e=n.useContext(u).todos,t=0;return Object(l.jsxs)("div",{className:"todo-results",children:["Done:",function(){if(e)for(var c=0;c<e.length;c++)!0===e[c].checked&&t++;return t}()]})}),k=(c(18),function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"My Check List"})})}),O=(c(19),function(){return Object(l.jsx)("div",{className:"root",children:Object(l.jsxs)(j,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(x,{}),Object(l.jsx)(f,{}),Object(l.jsx)(b,{})]})})});r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e3a1dd89.chunk.js.map