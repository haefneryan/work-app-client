(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(21),d=n.n(r),l=n(7),j=n(12),i=n.n(j),s=n(22),a=n(5),o=n(2),b=(n(30),n(23)),u=n.n(b),O=n(0);var h=function(){return Object(O.jsx)("header",{className:u.a.header,children:Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/triage",children:"TRIAGE"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/dashboard",children:"DASHBOARD"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/completed",children:"COMPLETED"})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/create-new-order",children:"CREATE NEW ORDER"})})]})})})};var x=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("td",{children:"Customer"}),Object(O.jsx)("td",{children:"Style Number"}),Object(O.jsx)("td",{children:"Sales Order"}),Object(O.jsx)("td",{children:"SO Line Item"}),Object(O.jsx)("td",{children:"Triage Owner"}),Object(O.jsx)("td",{children:"Owner"}),Object(O.jsx)("td",{children:"Workload"}),Object(O.jsx)("td",{children:"Buildtime"}),Object(O.jsx)("td",{children:"Triage Complete"}),Object(O.jsx)("td",{children:"Design Complete"}),Object(O.jsx)("td",{children:"Due Date"}),Object(O.jsx)("td",{children:"Triage Complete"}),Object(O.jsx)("td",{children:"Design Complete"}),Object(O.jsx)("td",{children:"Delete"})]})};var m=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("option",{value:"None",children:"None"}),Object(O.jsx)("option",{value:"Engineer 1",children:"Engineer 1"}),Object(O.jsx)("option",{value:"Engineer 2",children:"Engineer 2"}),Object(O.jsx)("option",{value:"Engineer 3",children:"Engineer 3"}),Object(O.jsx)("option",{value:"Engineer 4",children:"Engineer 4"}),Object(O.jsx)("option",{value:"Engineer 5",children:"Engineer 5"})]})};var p=function(e){var t=e.orders,n=e.deleteOrder,c=e.updateWorkload,r=e.updateTriageOwner,d=e.updateOwner;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["ALL ORDERS (",t.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)(x,{})})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.customer}),Object(O.jsx)("td",{children:e.stylenumber}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:e.triageowner,onChange:function(t){return r(e,t)},children:Object(O.jsx)(m,{})})}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:e.owner,onChange:function(t){return d(e,t)},children:Object(O.jsx)(m,{})})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",min:"1",max:"1000",defaultValue:e.workload,onChange:function(t){return c(e,t)},className:"workload"})}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:e.triagecomplete}),Object(O.jsx)("td",{children:e.designcomplete}),Object(O.jsx)("td",{children:e.duedate}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return n(e)},children:"X"})})]},e._id)}))})]})]})};var g=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("option",{children:"Style Number 1"}),Object(O.jsx)("option",{children:"Style Number 2"}),Object(O.jsx)("option",{children:"Style Number 3"}),Object(O.jsx)("option",{children:"Style Number 4"}),Object(O.jsx)("option",{children:"Style Number 5"}),Object(O.jsx)("option",{children:"Style Number 6"}),Object(O.jsx)("option",{children:"Style Number 7"}),Object(O.jsx)("option",{children:"Style Number 8"}),Object(O.jsx)("option",{children:"Style Number 9"})]})};var f=function(e){var t=e.addOrder;return Object(O.jsxs)("div",{children:["Customer: ",Object(O.jsx)("input",{type:"text",placeholder:"Enter the Customer name",id:"addOrderCustomer"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Style Number: ",Object(O.jsx)("select",{id:"addOrderStyleNumber",children:Object(O.jsx)(g,{})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){return t()},children:"Submit"})]})};var w=function(e){var t=e.triageOrders,n=e.deleteOrder,c=e.updateWorkload,r=e.updateTriageOwner,d=e.updateOwner,l=e.updateTriageComplete;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["TRIAGE (",t.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)(x,{})})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.customer}),Object(O.jsx)("td",{children:e.stylenumber}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:e.triageowner,onChange:function(t){return r(e,t)},children:Object(O.jsx)(m,{})})}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:e.owner,onChange:function(t){return d(e,t)},children:Object(O.jsx)(m,{})})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",min:"1",max:"1000",defaultValue:e.workload,onChange:function(t){return c(e,t)},className:"workload"})}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:e.triagecomplete}),Object(O.jsx)("td",{children:e.designcomplete}),Object(O.jsx)("td",{children:e.duedate}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return l(e)},children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return n(e)},children:"X"})})]},e._id)}))})]})]})},v=n(24),E=n.n(v);var C=function(e){var t=e.dashboardOrders,n=e.deleteOrder,c=e.updateOwner,r=e.updateDesignComplete,d=e.updateBuildTime;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["DASHBOARD (",t.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)(x,{})})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.customer}),Object(O.jsx)("td",{children:e.stylenumber}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:e.triageowner}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:e.owner,onChange:function(t){return c(e,t)},children:Object(O.jsx)(m,{})})}),Object(O.jsx)("td",{className:E.a.workload,children:e.workload}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",min:"1",max:"1000",defaultValue:e.buildtime,onChange:function(t){return d(e,t)},className:"workload"})}),Object(O.jsx)("td",{children:e.triagecomplete}),Object(O.jsx)("td",{children:e.designcomplete}),Object(O.jsx)("td",{children:e.duedate}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return r(e)},children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return n(e)},children:"X"})})]},e._id)}))})]})]})};var y=function(e){var t=e.completedOrders,n=e.deleteOrder;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["COMPLETED (",t.length,")"]}),Object(O.jsxs)("table",{id:"dataTable",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{children:Object(O.jsx)(x,{})})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.customer}),Object(O.jsx)("td",{children:e.stylenumber}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:e.triageowner}),Object(O.jsx)("td",{children:e.owner}),Object(O.jsx)("td",{children:e.workload}),Object(O.jsx)("td",{children:e.buildtime}),Object(O.jsx)("td",{children:e.triagecomplete}),Object(O.jsx)("td",{children:e.designcomplete}),Object(O.jsx)("td",{children:e.duedate}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return n(e)},children:"X"})}),Object(O.jsx)("td",{children:"-"}),Object(O.jsx)("td",{children:"-"})]},e._id)}))})]})]})},S=n(6),k=n.n(S),N=function(){var e="http://localhost:5000/",t=Object(c.useState)({}),n=Object(a.a)(t,2),r=n[0],d=n[1],l=Object(c.useState)({}),j=Object(a.a)(l,2),b=j[0],u=j[1],x=Object(c.useState)({}),m=Object(a.a)(x,2),g=m[0],v=m[1],E=Object(c.useState)({}),S=Object(a.a)(E,2),N=S[0],T=S[1],D=Object(c.useState)(!1),L=Object(a.a)(D,2),P=L[0],A=L[1],B=Object(c.useRef)(0);Object(c.useEffect)((function(){M()}),[]),Object(c.useEffect)((function(){B.current++,B.current>0&&r.length>0&&R(r)}),[r]);var M=function(){var t=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.get(e,{headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"}});case 3:n=t.sent,d(n.data.data),A(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),_=function(t){window.confirm("Are you sure you want to delete this order?")&&k.a.delete("".concat(e).concat(t._id)).then(M()).catch((function(e){return console.log(e)}))},I=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();return e=c+"-"+n+"-"+t},R=function(e){u(e.filter((function(e){return null===e.triagecomplete}))),v(e.filter((function(e){return null!==e.triagecomplete&&null===e.designcomplete}))),T(e.filter((function(e){return null!==e.triagecomplete&&null!==e.designcomplete})))};return!1===P?Object(O.jsx)("p",{children:"loading..."}):!0===P&&null!==b?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(h,{}),Object(O.jsx)("h1",{children:"SCHEDULING TOOL"}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",element:Object(O.jsx)(p,{orders:r,triageOrders:b,deleteOrder:_})}),Object(O.jsx)(o.a,{path:"/triage",element:Object(O.jsx)(w,{triageOrders:b,updateWorkload:function(t,n){k.a.put("".concat(e).concat(t._id),{workload:n.target.value}).then(M()).catch((function(e){return console.log(e)}))},updateTriageOwner:function(t,n){k.a.put("".concat(e).concat(t._id),{triageowner:n.target.value}).then(M()).catch((function(e){return console.log(e)}))},updateTriageComplete:function(t){var n=I();"None"===t.triageowner?alert("Please select a triage owner"):null===t.workload||0===t.workload.length?alert("Please enter a workload"):(k.a.put("".concat(e).concat(t._id),{triagecomplete:n}).then(M()).catch((function(e){return console.log(e)})),alert("Order has been marked with triage date of ".concat(n)))},deleteOrder:_})}),Object(O.jsx)(o.a,{path:"/dashboard",element:Object(O.jsx)(C,{dashboardOrders:g,updateOwner:function(t,n){k.a.put("".concat(e).concat(t._id),{owner:n.target.value}).then(M()).catch((function(e){return console.log(e)}))},updateBuildTime:function(t,n){console.log(n.target.value),k.a.put("".concat(e).concat(t._id),{buildtime:n.target.value}).then(M()).catch((function(e){return console.log(e)}))},deleteOrder:_,updateDesignComplete:function(t){var n=I();"None"===t.owner?alert("Please select an owner"):null===t.buildtime||0===t.buildtime.length?alert("Please enter a build time"):k.a.put("".concat(e).concat(t._id),{designcomplete:n}).then(M()).catch((function(e){return console.log(e)}))}})}),Object(O.jsx)(o.a,{path:"/completed",element:Object(O.jsx)(y,{completedOrders:N,deleteOrder:_})}),Object(O.jsx)(o.a,{path:"/create-new-order",element:Object(O.jsx)(f,{addOrder:function(){0===document.getElementById("addOrderCustomer").value.length?alert("Please enter a Customer name"):(alert("Order has been created!"),k.a.post(e,{customer:document.getElementById("addOrderCustomer").value,stylenumber:document.getElementById("addOrderStyleNumber").value,triageowner:"None",owner:"None",workload:2,buildtime:null,triagecomplete:null,designcomplete:null,duedate:null}).then(M()).catch((function(e){return console.log(e)})),document.getElementById("addOrderCustomer").value="",document.getElementById("addOrderStyleNumber").value="Style Number 1")}})})]})]})}):void 0};d.a.render(Object(O.jsx)(l.a,{basename:"",children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.669b7f22.chunk.js.map