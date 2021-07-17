(()=>{"use strict";const e=function(e,t,n,o=!1){return{getTitle:function(){return e},getDueDate:function(){return t},getPriority:function(){return n},setChecked:function(e){o=e},getChecked:function(){return o}}},t=function(e,t=!1){let n=[];return{addToDoItem:function(e){n.push(e)},getToDoItems:function(){return n},getToDoItem:function(e){return n[e]},getTitle:function(){return e},setChecked:function(e){t=e},getChecked:function(){return t},getSelected:function(){let e="";for(let t=0;t<n.length;t++)n[t].getChecked()&&(e=n[t]);return e},deselect:function(){for(let e=0;e<n.length;e++)n[e].setChecked(!1)},select:function(e){console.log(e),e=e.replace("-todo","");for(let t=0;t<n.length;t++)n[t].getTitle()===e&&n[t].setChecked(!0)},getParametersString:function(){return"project,"+e+","+t}}},n=function(e,t,n,o,c=!1){let r=[];return{addChecklistItem:function(e){r.push(e)},getTitle:function(){return e},getDescription:function(){return t},getDueDate:function(){return n},getPriority:function(){return o},setChecked:function(e){c=e},getChecked:function(){return c},deselect:function(){for(let e=0;e<r.length;e++)r[e].setChecked(!1)},select:function(e){console.log(e),e=e.replace("-checklist","");for(let t=0;t<r.length;t++)r[t].getTitle()===e&&r[t].setChecked(!0)},getChecklistItem:function(e){return r[e]},getChecklistItems:function(){return r},getParametersString:function(r){return"todo,"+e+","+t+","+n+","+o+","+c+","+r}}},o=function(){let o=[];const c=t("templateProject"),r=function(e){return o.push(e)};return r(c),c.setChecked("true"),o[0].addToDoItem(n("templateToDo","this is a template project","no dates yet",6)),o[0].getToDoItem(0).addChecklistItem(e("template checklist item","no dates yet",6)),{addProject:r,getProject:function(e){return o[e]},getProjects:function(){return o},deselect:function(){for(let e=0;e<o.length;e++)o[e].setChecked(!1)},select:function(e){console.log(e),e=e.replace("-project","");for(let t=0;t<o.length;t++)o[t].getTitle()===e&&o[t].setChecked(!0)},getSelected:function(){let e="";for(let t=0;t<o.length;t++)o[t].getChecked()&&(e=o[t]);return e},clearProjects:function(){o=[]}}}(),c=function(){let e=window.localStorage;return{saveAll:function(){e.clear(),function(){let t=o.getProjects(),n="",c=[];for(let e=0;e<t.length;e++)c[e]=t[e].getParametersString();n=c.join(","),e.setItem("projects",JSON.stringify(n))}()},loadAll:function(){!function(){let n="";o.clearProjects(),n=JSON.parse(e.getItem("projects")),console.log(n);let c=n.split(",");console.log(c);for(let e=0;e<c.length;e+=3){let n=c.slice(e,e+3);"project"===n[0]&&(console.log(n),"true"===n[2]?o.addProject(t(n[1],!0)):o.addProject(t(n[1],!1)))}L.displayProjects()}()}}}(),r=function(){const r=document.querySelector("#form-div"),l=document.querySelector("#element-title"),i=document.querySelector(".element-title"),s=document.querySelector("#element-description"),d=document.querySelector(".element-description"),a=document.querySelector("#element-priority"),u=document.querySelector(".element-priority"),m=document.querySelector("#element-due-date"),g=document.querySelector(".element-due-date"),p=document.querySelector("#form-title"),h=document.querySelector("#alert"),f=document.querySelector("#submit-button");let C="";function v(){r.classList.remove("show"),r.classList.add("hide")}function D(){i.classList.remove("hide"),i.classList.remove("show"),d.classList.remove("hide"),d.classList.remove("show"),u.classList.remove("hide"),u.classList.remove("show"),g.classList.remove("hide"),g.classList.remove("show")}function T(r){let i=!0;if(l.value?l.style.borderColor="green":(h.textContent="Title missing",l.style.borderColor="red",i=!1,r.preventDefault()),"todo"===C&&(s.value?s.style.borderColor="green":(h.textContent="Description missing",s.style.borderColor="red",i=!1,r.preventDefault())),"todo"!==C&&"checklist"!==C||(a.value?a.style.borderColor="green":(h.textContent="Set Priority",a.style.borderColor="red",i=!1,r.preventDefault())),"todo"!==C&&"checklist"!==C||(m.value?m.style.borderColor="green":(h.textContent="Set Due Date",m.style.borderColor="red",i=!1,r.preventDefault())),i){switch(C){case"project":o.addProject(t(l.value)),L.displayProjects();break;case"todo":o.getSelected().addToDoItem(n(l.value,s.value,m.value,a.value)),L.displayTodos();break;case"checklist":o.getSelected().getSelected().addChecklistItem(e(l.value,m.value,a.value)),L.displayProjects()}h.textContent="",v(),r.preventDefault(),l.value="",s.value="",a.value="",m.value="",L.updateInputs(),c.saveAll(),c.loadAll()}}return f.addEventListener("click",T),{showForm:function(){r.classList.remove("hide"),r.classList.add("show")},hideForm:v,projectForm:function(){C="project",p.textContent="Project",D(),i.classList.add("show"),d.classList.add("hide"),u.classList.add("hide"),g.classList.add("hide")},toDoForm:function(){C="todo",p.textContent="To Do",D(),i.classList.add("show"),d.classList.add("show"),u.classList.add("show"),g.classList.add("show")},checklistForm:function(){C="checklist",p.textContent="Checklist",D(),i.classList.add("show"),d.classList.add("hide"),u.classList.add("show"),g.classList.add("show")},getFormData:T}}(),l=(document.querySelector(".newProjectButton").addEventListener("click",(()=>{r.showForm(),r.projectForm()})),document.querySelector(".newTodoButton").addEventListener("click",(()=>{o.getSelected()?(r.showForm(),r.toDoForm()):alert("select project")})),document.querySelector(".newChecklistButton").addEventListener("click",(()=>{o.getSelected().getSelected()?(r.showForm(),r.checklistForm()):alert("select To do")})),function(){const e=document.querySelector(".project-container"),t=document.querySelector(".todo-container"),n=document.querySelector(".description");function o(){e.textContent=""}function c(){t.textContent=""}function r(){n.textContent=""}return{createProject:function(t,n=!1){const o=document.createElement("input");o.classList.add("project-toggle"),o.type="radio",o.checked=n;let c=t.split(" ").join("-")+"-project";o.id=c,o.name="projects";const r=document.createElement("label");r.classList.add("projectButton"),r.htmlFor=c,r.innerText=t;const l=document.createElement("div");l.classList.add("arrows");const i=document.createElement("button");i.classList.add("priority-change","arrow","up");const s=document.createElement("button");s.classList.add("priority-change","arrow","down"),l.appendChild(i),l.appendChild(s),r.appendChild(l),e.appendChild(o),e.appendChild(r)},defaultState:function(){o(),c(),r()},createTodos:function(e,n,o=!1){const c=document.createElement("input");c.classList.add("todo-toggle"),c.type="radio",c.checked=o;let r=e.split(" ").join("-")+"-todo";c.id=r,c.name="todo";const l=document.createElement("label");l.classList.add("todoButton"),l.htmlFor=r,l.innerText=e;const i=document.createElement("p");i.classList.add("completion-status","not-completed"),i.textContent="not completed",l.appendChild(i);const s=document.createElement("div");s.classList.add("due-date");const d=document.createElement("p");d.textContent=n,s.appendChild(d),l.appendChild(s);const a=document.createElement("div");a.classList.add("arrows");const u=document.createElement("button");u.classList.add("priority-change","arrow","up");const m=document.createElement("button");m.classList.add("priority-change","arrow","down"),a.appendChild(u),a.appendChild(m),l.appendChild(a),t.appendChild(c),t.appendChild(l)},createChecklist:function(e,t){const n=document.querySelector(".description"),o=document.querySelector(".checklist"),c=document.createElement("div");c.classList.add("checklist-item");const r=document.createElement("input");r.classList.add("checklist-toggle"),r.type="checkbox";let l=e.split(" ").join("-")+"-checklist";r.id=l,r.name="checklist",r.checked="";const i=document.createElement("label");i.classList.add("checklistButton"),i.htmlFor=l,i.innerText=e;const s=document.createElement("p");s.textContent=t,i.appendChild(s),c.appendChild(r),c.appendChild(i),o.appendChild(c),n.appendChild(o)},defaultProjects:o,defaultTodos:c,defaultChecklist:r,updateToDoTitle:function(e,t){const n=document.querySelector(".description");n.textContent="";const o=document.createElement("h4");o.classList.add("content-title"),o.textContent=e;const c=document.createElement("div");c.classList.add("short-description"),c.textContent=t;const r=document.createElement("div");r.classList.add("checklist"),n.appendChild(o),n.appendChild(c),n.appendChild(r)},changeTodoCompletion:function(e,t=!1){const n=document.querySelector(`#${e.getTitle()}-todo+label`).querySelector(".completion-status");t?(n.classList.remove("not-completed"),n.classList.add("completed"),n.textContent="before deadline"):(n.classList.remove("completed"),n.classList.add("not-completed"),n.textContent="after deadline")}}}());function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function s(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e,t){i(2,arguments);var n=s(e),o=s(t),c=n.getTime()-o.getTime();return c<0?-1:c>0?1:c}function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var u=36e5,m={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},g=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,p=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,h=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(e,t){i(1,arguments);var n=t||{},o=null==n.additionalDigits?2:a(n.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var c,r=C(e);if(r.date){var l=v(r.date,o);c=D(l.restDateString,l.year)}if(isNaN(c)||!c)return new Date(NaN);var s,d=c.getTime(),u=0;if(r.time&&(u=y(r.time),isNaN(u)||null===u))return new Date(NaN);if(!r.timezone){var m=new Date(d+u),g=new Date(0);return g.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),g.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),g}return s=k(r.timezone),isNaN(s)?new Date(NaN):new Date(d+u+s)}function C(e){var t,n={},o=e.split(m.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?(n.date=null,t=o[0]):(n.date=o[0],t=o[1],m.timeZoneDelimiter.test(n.date)&&(n.date=e.split(m.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var c=m.timezone.exec(t);c?(n.time=t.replace(c[1],""),n.timezone=c[1]):n.time=t}return n}function v(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:null};var c=o[1]&&parseInt(o[1]),r=o[2]&&parseInt(o[2]);return{year:null==r?c:100*r,restDateString:e.slice((o[1]||o[2]).length)}}function D(e,t){if(null===t)return null;var n=e.match(g);if(!n)return null;var o=!!n[4],c=T(n[1]),r=T(n[2])-1,l=T(n[3]),i=T(n[4]),s=T(n[5])-1;if(o)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,i,s)?function(e,t,n){var o=new Date(0);o.setUTCFullYear(e,0,4);var c=7*(t-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+c),o}(t,i,s):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(j[t]||(w(e)?29:28))}(t,r,l)&&function(e,t){return t>=1&&t<=(w(e)?366:365)}(t,c)?(d.setUTCFullYear(t,r,Math.max(c,l)),d):new Date(NaN)}function T(e){return e?parseInt(e):1}function y(e){var t=e.match(p);if(!t)return null;var n=S(t[1]),o=S(t[2]),c=S(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,o,c)?n*u+6e4*o+1e3*c:NaN}function S(e){return e&&parseFloat(e.replace(",","."))||0}function k(e){if("Z"===e)return 0;var t=e.match(h);if(!t)return 0;var n="+"===t[1]?-1:1,o=parseInt(t[2]),c=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,c)?n*(o*u+6e4*c):NaN}var j=[31,null,31,30,31,30,31,31,30,31,30,31];function w(e){return e%400==0||e%4==0&&e%100}const L=function(){function e(){const e=[...document.querySelectorAll(".checklist-toggle")],t=[...document.querySelectorAll(".project-toggle")],i=[...document.querySelectorAll(".todo-toggle")];function s(e){c.loadAll();let t=o.getSelected();t.deselect(),t.select(e.target.id),l.updateToDoTitle(t.getSelected().getTitle(),t.getSelected().getDescription()),t.getSelected()&&r(t.getSelected())}function d(e){let t=o.getSelected().getSelected();t.deselect(),t.select(e.target.id),console.log("currently selected checklist: "+t.getTitle())}for(let e=0;e<t.length;e++)t[e].projectEvent&&t[e].removeEventListener("change",t[e].projectEvent),t[e].projectEvent=e=>{o.deselect(),o.select(e.target.id),n()},t[e].addEventListener("change",t[e].projectEvent);for(let e=0;e<i.length;e++)i[e].addEventListener("change",s);for(let t=0;t<e.length;t++)e[t].addEventListener("change",d)}function t(){const t=o.getProjects();l.defaultState();for(let e=0;e<t.length;e++)l.createProject(t[e].getTitle(),o.getProject(e).getChecked());o.getSelected()&&n(),e()}function n(){l.defaultTodos();let t=o.getSelected();if(t){for(let e=0;e<t.getToDoItems().length;e++){let n=t.getToDoItem(e);l.createTodos(n.getTitle(),n.getDueDate(),n.getChecked()),n.getChecked()&&l.updateToDoTitle(t.getSelected().getTitle(),t.getSelected().getDescription()),-1===d(Date.now(),f(n.getDueDate()))?l.changeTodoCompletion(n,!0):l.changeTodoCompletion(n,!1)}t.getSelected()}e()}function r(e){if(l.defaultChecklist(),console.log(e.getTitle()),l.updateToDoTitle(e.getTitle(),e.getDescription()),e)for(let t=0;t<e.getChecklistItems().length;t++){let n=e.getChecklistItem(t);l.createChecklist(n.getTitle(),n.getDueDate())}}return t(),{displayProjects:t,displayTodos:n,displayChecklist:r,updateInputs:e}}();console.log(o.getProjects()[0].getTitle()),console.log(o.getProjects()[0].getToDoItem(0).getTitle())})();