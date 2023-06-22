"use strict";(self.webpackChunkauth_sample=self.webpackChunkauth_sample||[]).push([[323],{2498:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.error;return t?(0,r.jsxs)("p",{className:"error",children:["Error: ",t]}):""}},9120:function(e,t,n){var r=n(2791),a=n(5573);t.Z=function(){return(0,r.useContext)(a.Z)}},3323:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),a=n(3433),s=n(4165),c=n(5861),o=n(9439),u=n(2791),i=n(7689),l=n(6157),d=n(184),p=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,a=e.logout;return(0,d.jsxs)("header",{className:"header",children:[(0,d.jsx)("h1",{children:t}),(0,d.jsx)(l.Z,{variant:"primary",onClick:n,children:r?"Close":"Add"}),(0,d.jsx)(l.Z,{variant:"primary",onClick:function(){return a()},children:"Logout"})]})};p.defaultProps={title:"To-do List"};var f=p,h=function(){return(0,d.jsx)("footer",{children:(0,d.jsx)("p",{children:"Copyright \xa9 2022"})})},x=n(9135),v=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return(0,d.jsxs)("div",{className:"task ".concat(t.reminder&&"reminder"),onDoubleClick:function(){return r(t.id,t.reminder)},children:[(0,d.jsxs)("h3",{children:[t.text," ",(0,d.jsx)(x.aHS,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),(0,d.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return(0,d.jsx)("div",{className:"tasks",children:t.map((function(e,t){return(0,d.jsx)(v,{task:e,onDelete:n,onToggle:r},t)}))})},k=n(2936),Z=function(e){var t=e.onAdd,n=(0,u.useState)(""),r=(0,o.Z)(n,2),a=r[0],s=r[1],c=(0,u.useState)(""),i=(0,o.Z)(c,2),p=i[0],f=i[1],h=(0,u.useState)(!1),x=(0,o.Z)(h,2),v=x[0],m=x[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(k.Z,{onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:p,reminder:v}),s(""),f(""),m(!1)):alert("Please add a task")},children:[(0,d.jsxs)(k.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,d.jsx)(k.Z.Label,{children:"Task"}),(0,d.jsx)(k.Z.Control,{type:"text",placeholder:"Add task",value:a,onChange:function(e){return s(e.target.value)}})]}),(0,d.jsxs)(k.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,d.jsx)(k.Z.Label,{children:"Day & Time"}),(0,d.jsx)(k.Z.Control,{type:"text",placeholder:"Add Day & Time",value:p,onChange:function(e){return f(e.target.value)}})]}),(0,d.jsx)(k.Z.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:(0,d.jsx)(k.Z.Check,{label:"Set Reminder",type:"checkbox",checked:v,value:v,onChange:function(e){return m(e.currentTarget.checked)}})}),(0,d.jsx)(l.Z,{variant:"primary",type:"submit",children:"Submit"})]})})},j=n(9120),g=function(){var e=(0,u.useRef)(!0);return(0,u.useEffect)((function(){return function(){e.current=!1}}),[]),e},y=n(2498),b=function(){var e=(0,j.Z)(),t=e.user,n=e.logout,l=g(),p=(0,u.useState)(null),x=(0,o.Z)(p,2),v=x[0],k=x[1],b=(0,u.useState)(!1),w=(0,o.Z)(b,2),T=w[0],C=w[1],S=(0,u.useState)([]),A=(0,o.Z)(S,2),N=A[0],D=A[1],E=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,console.log(n),e.next=6,fetch("https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 6:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a.result);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,l.current&&D(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var B=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var r,a,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,fetch("https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({task:n})});case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,console.log(c.result),e.abrupt("return",c.result);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t);case 3:n=e.sent,D([].concat((0,a.Z)(N),[n])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,fetch("https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks/".concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 5:return a=e.sent,e.abrupt("return",a.status);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(t);case 3:if(200!==e.sent){e.next=8;break}D(N.filter((function(e){return e.id!==t}))),e.next=9;break;case 8:throw new y.Z("Error Deleting This Task");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),k(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n,r){var a,c,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return a=e.sent,e.next=5,fetch("https://us-central1-tasklist-ec855.cloudfunctions.net/api/tasks/".concat(n),{method:"PUT",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({reminder:!r})});case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o.result);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t,n){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t,n);case 3:a=e.sent,D(N.map((function(e){return e.id===t?(0,r.Z)((0,r.Z)({},e),{},{reminder:a.reminder}):e}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return null===t||void 0===t?(0,d.jsx)(i.Fg,{to:{pathname:"/"}}):(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(f,{onAdd:function(){return C(!T)},showAdd:T,logout:n}),T&&(0,d.jsx)(Z,{onAdd:I}),N.length>0?(0,d.jsx)(m,{tasks:N,onDelete:P,onToggle:G}):"No Tasks To Show",v&&(0,d.jsx)(y.Z,{error:v}),(0,d.jsx)(h,{})]})}}}]);
//# sourceMappingURL=323.f0043776.chunk.js.map