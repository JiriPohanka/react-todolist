(this["webpackJsonpfrontend-mentor-to-do-list"]=this["webpackJsonpfrontend-mentor-to-do-list"]||[]).push([[0],{27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(10),r=n.n(s),a=(n(27),n(2)),o=function(){return Object(a.jsxs)("div",{className:"attribution",children:["Challenge by ",Object(a.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by ",Object(a.jsx)("a",{href:"https://github.com/JiriPohanka",target:"_blank",rel:"noreferrer",children:"Ji\u0159\xed Pohanka"}),"."]})},d=n(21),l=n(3),u=n(19),b=n(8),j=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"TODO"}),Object(a.jsx)("button",{id:"night-mode",onClick:function(){document.querySelector(":root").classList.toggle("dark-mode")},children:Object(a.jsx)("span",{className:"night-mode-btn"})})]})},h=n(9),f=n(15),m=function(e){var t=e.task,n=e.deleteTask,c=e.toggleTaskStatus,s=e.provided,r=Object(i.useState)(e.task.isFinished),o=Object(b.a)(r,2),d=o[0],l=o[1],u=Object(i.useState)("is-".concat(t.id,"-finished checkmark")),j=Object(b.a)(u,2),f=j[0],m=j[1];function O(e){e.preventDefault(),e.target.matches(".delete-task-btn")||(l(!d),document.querySelector('label[for="is-'.concat(t.id,'-finished"]')).classList.toggle("finished-task"),document.querySelector('label[for="is-'.concat(t.id,'-finished"]')).parentNode.classList.toggle("finished"),document.querySelector(".".concat("is-".concat(t.id,"-finished"))).classList.toggle("checked"),c(t.id))}return Object(i.useEffect)((function(){t.isFinished&&(m("is-".concat(t.id,"-finished checkmark checked")),document.querySelector('label[for="is-'.concat(t.id,'-finished"]')).classList.toggle("finished-task"),document.querySelector('label[for="is-'.concat(t.id,'-finished"]')).parentNode.classList.toggle("finished"))}),[]),Object(a.jsxs)("div",Object(h.a)(Object(h.a)(Object(h.a)({ref:s.innerRef},s.draggableProps),s.dragHandleProps),{},{className:"task-item",id:t.id,onClick:O,children:[Object(a.jsx)("input",{type:"checkbox",id:"is-".concat(t.id,"-finished"),checked:t.isFinished,onChange:O}),Object(a.jsx)("span",{className:f}),Object(a.jsx)("label",{className:"is-".concat(t.id,"-finished task-label"),htmlFor:"is-".concat(t.id,"-finished"),children:t.title}),Object(a.jsx)("button",{className:"btn delete-task-btn",onClick:function(e){e.preventDefault(),n(t.id)}})]}))},O=function(e){var t=e.handleOnDragEnd;return Object(a.jsx)(f.a,{onDragEnd:t,children:Object(a.jsx)(f.c,{droppableId:"taskList",children:function(t){return Object(a.jsxs)("div",Object(h.a)(Object(h.a)({className:"tasklist"},t.droppableProps),{},{ref:t.innerRef,children:[e.taskList.map((function(t,n){return Object(a.jsx)(f.b,{draggableId:t.id,index:n,children:function(n){return Object(a.jsx)(m,{provided:n,task:t,toggleTaskStatus:e.toggleTaskStatus,deleteTask:e.deleteTask})}},t.id)})),t.placeholder]}))}})})},p=function(e){function t(e){document.querySelectorAll(".visibility-option").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active")}return Object(a.jsxs)("div",{className:"filter-options",children:[Object(a.jsx)("button",{"data-option-id":"0",className:"btn control-button visibility-option active",onClick:function(e){t(e),document.querySelectorAll(".task-item").forEach((function(e){return e.classList.remove("hidden")}))},children:"All"}),Object(a.jsx)("button",{"data-option-id":"1",className:"btn control-button visibility-option",onClick:function(e){t(e),document.querySelectorAll(".task-item").forEach((function(e){return e.classList.remove("hidden")})),document.querySelectorAll(".task-item.finished").forEach((function(e){return e.classList.add("hidden")}))},children:"Active"}),Object(a.jsx)("button",{"data-option-id":"2",className:"btn control-button visibility-option",onClick:function(e){t(e),document.querySelectorAll(".task-item").forEach((function(e){return e.classList.remove("hidden")})),document.querySelectorAll(".task-item:not(.finished)").forEach((function(e){return e.classList.add("hidden")}))},children:"Completed"})]})},k=function(e){var t=e.taskList.filter((function(e){return!e.isFinished})),n=e.clearFinished;return window.screen.width>480?Object(a.jsx)("div",{className:"settings-panel",children:Object(a.jsxs)("div",{className:"settings-wrap",children:[Object(a.jsxs)("span",{className:"task-counter",children:[t.length," items left"]}),e.screenWidth>=480&&Object(a.jsx)(p,{}),Object(a.jsx)("button",{className:"btn control-button clear-button",onClick:n,children:"Clear Completed"})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"settings-panel",children:Object(a.jsxs)("div",{className:"settings-wrap",children:[Object(a.jsxs)("span",{className:"task-counter",children:[t.length," items left"]}),Object(a.jsx)("button",{className:"btn control-button clear-button",onClick:n,children:"Clear Completed"})]})})})},g=n(40);var x=function(){var e=Object(i.useState)({width:void 0,height:void 0}),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},v=function(){var e,t=x().width,n=window.localStorage,c=[{id:Object(g.a)(),title:"Complete online JavaScript course",isFinished:!0},{id:Object(g.a)(),title:"Jog around the park 3x",isFinished:!1},{id:Object(g.a)(),title:"10 minutes meditation",isFinished:!1},{id:Object(g.a)(),title:"Read for 1 hour",isFinished:!1},{id:Object(g.a)(),title:"Pick up groceries",isFinished:!1},{id:Object(g.a)(),title:"Complete Todo App on Frontend Mentor",isFinished:!1}],s=Object(i.useRef)(),r=Object(i.useState)(null!==(e=JSON.parse(n.getItem("tasks")))&&void 0!==e?e:c),o=Object(b.a)(r,2),d=o[0],l=o[1];return Object(i.useEffect)((function(){n.setItem("tasks",JSON.stringify(d))})),Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(j,{}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=e.target[0].value,n={id:Object(g.a)(),title:t,isFinished:!1};l((function(e){return[].concat(Object(u.a)(e),[n])})),s.current.value=""},children:Object(a.jsxs)("div",{className:"input-wrap",onClick:function(){document.querySelector("input").focus()},children:[Object(a.jsx)("span",{className:"decor-checkmark"}),Object(a.jsx)("input",{ref:s,type:"text",placeholder:"Create a new todo",onFocus:function(){document.querySelector(".decor-checkmark").classList.add("focused-input")},onBlur:function(){document.querySelector(".decor-checkmark").classList.remove("focused-input")}})]})}),Object(a.jsxs)("div",{className:"tasklist-wrap",children:[Object(a.jsx)(O,{handleOnDragEnd:function(e){if(console.log(e),null!==e.destination){var t=Object(u.a)(d),n=t.splice(e.source.index,1),i=Object(b.a)(n,1)[0];t.splice(e.destination.index,0,i),l(t)}},taskList:d,toggleTaskStatus:function(e){console.log("toggleTaskStatus");var t=d.findIndex((function(t){return t.id===e}));console.log(t),l(d.map((function(e,n){return n===t&&(e.isFinished=!e.isFinished),e})))},deleteTask:function(e){var t=d.findIndex((function(t){return t.id===e})),n=Array.from(d);n.splice(t,1),l(n)}}),Object(a.jsx)(k,{screenWidth:t,taskList:d,clearFinished:function(){l(d.filter((function(e){return!1===e.isFinished})))}})]}),t<480&&Object(a.jsx)(p,{})]})};var S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"bgr-strip"}),Object(a.jsxs)(d.a,{basename:"/react-todolist",children:[Object(a.jsx)(l.c,{children:Object(a.jsx)(l.a,{path:"/",component:v,exact:!0})}),Object(a.jsx)("div",{className:"drag-drop",children:"drag and drop to reorder list"}),Object(a.jsx)(o,{})]})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2de1b307.chunk.js.map