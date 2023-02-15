(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,r){},27:function(e,t,r){},29:function(e,t,r){},35:function(e,t,r){},37:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r.n(s),l=r(28),c=r.n(l),n=r(9),i=r(4),d=r(10),o=r.n(d),b=r(13),j=r(3),u=r(2),m=(r(35),r(29)),h=r.n(m),O=r(0);var f=function(e){var t=e.triageOrders,r=e.dashboardOrders,s=e.completedOrders;return Object(O.jsx)("header",{className:h.a.header,children:Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/triage",children:Object(O.jsxs)("p",{children:["TRIAGE (",t.length,")"]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/dashboard",children:Object(O.jsxs)("p",{children:["DASHBOARD (",r.length,")"]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/completed",children:Object(O.jsxs)("p",{children:["COMPLETED (",s.length,")"]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/create-new-order",children:Object(O.jsx)("p",{children:"CREATE NEW ORDER"})})})]})})})};var x=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("option",{value:"None",children:"None"}),Object(O.jsx)("option",{value:"Engineer 1",children:"Engineer 1"}),Object(O.jsx)("option",{value:"Engineer 2",children:"Engineer 2"}),Object(O.jsx)("option",{value:"Engineer 3",children:"Engineer 3"}),Object(O.jsx)("option",{value:"Engineer 4",children:"Engineer 4"}),Object(O.jsx)("option",{value:"Engineer 5",children:"Engineer 5"})]})};r(37);var p=function(e){var t,r=e.triageTableHeaders,s=e.dashboardTableHeaders,a=e.completedTableHeaders,l=e.allOrdersTableHeaders,c=e.filterData,n=(e.triageOrders,0);return document.URL.endsWith("/triage")?t=r:document.URL.endsWith("dashboard")?t=s:document.URL.endsWith("/completed")?t=a:document.URL.endsWith("/allorders")&&(t=l),Object(O.jsx)("tr",{children:t.map((function(e){return n++,Object(O.jsx)("td",{className:"filter",children:e.filterable?"select"===e.filterableType?Object(O.jsxs)("select",{name:e.name.toLowerCase().replace(/\s/g,""),id:n-1,onChange:function(e){return c(e)},className:"columnSelectFilter",children:[Object(O.jsx)("option",{value:"",children:"Search..."}),Object(O.jsx)(x,{})]}):Object(O.jsx)("input",{type:"text",name:e.name.toLowerCase().replace(/\s/g,""),id:n-1,onChange:function(e){return c(e)},className:"columnSearchFilter",placeholder:"Search..."}):Object(O.jsx)("input",{disabled:!0,className:"columnSearchFilter disabled"})},e.name)}))})},g=[{index:0,displayName:"Customer",name:"customer",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""},{index:1,displayName:"Style Number",name:"stylenumber",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""},{index:2,displayName:"Triage Owner",name:"triageowner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:""},{index:3,displayName:"Owner",name:"owner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:""},{index:4,displayName:"Workload",name:"workload",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:""},{index:5,displayName:"Buildtime",name:"buildtime",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:""},{index:6,displayName:"Triage Complete Date",name:"triagecomplete",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""},{index:7,displayName:"Design Complete Date",name:"designcomplete",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""},{index:8,displayName:"Due Date",name:"duedate",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""},{index:9,displayName:"Sales Order",name:"salesorder",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""},{index:10,displayName:"SO Line Item",name:"solineitem",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:""}];r(17);var y=function(e){var t=e.orders,r=(e.deleteOrder,Object(s.useState)(t)),a=Object(j.a)(r,2),l=a[0],c=a[1],n=Object(s.useState)(g),d=Object(j.a)(n,2),o=d[0],b=d[1];return Object(s.useEffect)((function(){console.log(o);var e=t;o.forEach((function(t){!0===t.filterable&&t.filters.length>0&&(e=e.filter((function(e){if(console.log(e),console.log(t.name),e[t.name].toLowerCase().includes("".concat(t.filters)))return e})))})),c(e)}),[o]),console.log(l),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["ALL ORDERS (",l.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:o.map((function(e){return Object(O.jsxs)("td",{onClick:function(){return function(e){!0===e.sortable&&(o.forEach((function(t){t!==e&&(t.sortAsc=!1,t.sortDesc=!1)})),!1===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!0,c(Object(i.a)(l.sort((function(t,r){var s=t[e.name],a=r[e.name];return s<a?-1:s>a?1:0}))))):!0===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!1,e.sortDesc=!0,c(Object(i.a)(l.sort((function(t,r){var s=t[e.name],a=r[e.name];return s>a?-1:s<a?1:0}))))):(e.sortAsc=!1,e.sortDesc=!1,c(Object(i.a)(l.sort((function(e,t){var r=e._id,s=t._id;return r>s?1:r<s?-1:0}))))))}(e)},className:"tdheader noselect",children:[Object(O.jsx)("div",{className:"headerName",children:e.displayName}),Object(O.jsxs)("div",{className:"arrow",children:[e.sortAsc?" \u25b2":"",e.sortDesc?" \u25bc":""]})]},e.name)}))}),Object(O.jsx)(p,{allOrdersTableHeaders:o,filterData:function(e){b(Object(i.a)(o),o[e.target.id].filters=e.target.value.toLowerCase())}})]}),Object(O.jsx)("tbody",{children:l.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.customer}),Object(O.jsx)("td",{children:e.stylenumber}),Object(O.jsx)("td",{children:e.triageowner}),Object(O.jsx)("td",{children:e.owner}),Object(O.jsx)("td",{children:e.workload}),Object(O.jsx)("td",{children:e.buildtime}),Object(O.jsx)("td",{children:e.triagecomplete}),Object(O.jsx)("td",{children:e.designcomplete}),Object(O.jsx)("td",{children:e.duedate}),Object(O.jsx)("td",{children:e.salesorder}),Object(O.jsx)("td",{children:e.solineitem})]},e._id)}))})]})]})};var C=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("option",{children:"Style Number 1"}),Object(O.jsx)("option",{children:"Style Number 2"}),Object(O.jsx)("option",{children:"Style Number 3"}),Object(O.jsx)("option",{children:"Style Number 4"}),Object(O.jsx)("option",{children:"Style Number 5"}),Object(O.jsx)("option",{children:"Style Number 6"}),Object(O.jsx)("option",{children:"Style Number 7"}),Object(O.jsx)("option",{children:"Style Number 8"}),Object(O.jsx)("option",{children:"Style Number 9"})]})},A="https://o1uftzbv2g.execute-api.us-east-1.amazonaws.com/default",D=r(7),w=r.n(D);var N=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1],l=Object(s.useState)("Style Number 1"),c=Object(j.a)(l,2),n=c[0],i=c[1];return Object(O.jsxs)("div",{children:["Customer:"," ",Object(O.jsx)("input",{type:"text",placeholder:"Enter the Customer name",id:"addOrderCustomer",value:r,onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Style Number:"," ",Object(O.jsx)("select",{id:"addOrderStyleNumber",onChange:function(e){return i(e.target.value)},children:Object(O.jsx)(C,{})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){0===document.getElementById("addOrderCustomer").value.length?alert("Please enter a Customer name"):(alert("Order has been created!"),w.a.post(A,{customer:r,styleNumber:n,triageOwner:"None",owner:"None",workload:2,buildTime:null,triageComplete:null,designComplete:null,dueDate:null,salesOrder:"-",soLineItem:"10",sameAs:!1,sameAsChildren:[],child:!1,uniqueKey:null}).catch((function(e){return console.log(e)})),a(""),i("Style Number 1"))},children:"Submit"})]})};var v=function(e){var t=e.triageOrders,r=e.order,a=e.updateTriageOwner,l=e.updateOwner,c=e.updateWorkload,n=e.updateSameAs,i=e.updateTriageComplete,d=e.deleteOrder,o=e.displayOrderChildren,b=Object(s.useState)(""),u=Object(j.a)(b,2),m=u[0],h=u[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("tr",{id:-1,className:"orderParent",children:[Object(O.jsx)("td",{children:r.sameAsChildren.length>0?Object(O.jsx)("button",{onClick:function(){return o(r)},title:"Show/Hide Children",children:r.displaySameAsChildren?"-":"+"}):Object(O.jsx)(O.Fragment,{})}),Object(O.jsx)("td",{children:r.customer}),Object(O.jsx)("td",{children:r.styleNumber}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:r.triageOwner,onChange:function(e){return a(r,e)},children:Object(O.jsx)(x,{})})}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:r.owner,onChange:function(e){return l(r,e)},children:Object(O.jsx)(x,{})})}),Object(O.jsx)("td",{children:!1===r.child?Object(O.jsx)("input",{type:"text",min:"1",max:"1000",defaultValue:r.workload,onChange:function(e){return c(r,e)},className:"workload"}):Object(O.jsx)("input",{disabled:!0,className:"workload",value:r.workload})}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:r.salesOrder}),Object(O.jsx)("td",{children:r.soLineItem}),Object(O.jsx)("td",{className:"sameAsParentCell ".concat(r.sameAsChildren.length>0?"sameAsParentCellWithChildren":""),children:!0===r.child||r.sameAsChildren.length>0?Object(O.jsx)("p",{className:"",children:r.sameas}):Object(O.jsx)("input",{disabled:!0,type:"text",maxLength:9,placeholder:"XXXXXX-XX",id:r._id,value:m,onChange:function(e){n(r,e),function(e){var t=function(e,t){if(!e)return e;var r=e;return r.length>5?7===r.length?r.slice(0,6):"".concat(r.slice(0,6),"-").concat(r.slice(7,9)):r}(e.target.value);h(t)}(e)},className:"sameAsChildInput sameAsCell columnSearchFilter"})}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return i(r,t)},children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,onClick:function(){return d(r)},children:"X"})})]},r._id),e.children]})};r(27);for(var T=function(e){var t=e.order,r=e.child,s=e.removeChild;return Object(O.jsxs)("tr",{className:"childrenRow",children:[Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return s(t,r)},className:"removeChildBtn",title:"Remove Child",children:"X"})}),Object(O.jsx)("td",{children:r.customer}),Object(O.jsx)("td",{children:r.styleNumber}),Object(O.jsx)("td",{children:r.triageOwner}),Object(O.jsx)("td",{children:r.owner}),Object(O.jsx)("td",{children:r.workload}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:r.salesOrder}),Object(O.jsx)("td",{children:r.soLineItem}),Object(O.jsx)("td",{children:r.sameas}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{})]})},S=[{index:0,displayName:"",name:"",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"childrenExpand"},{index:1,displayName:"Customer",name:"customer",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:2,displayName:"Style Number",name:"stylenumber",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:3,displayName:"Triage Owner",name:"triageowner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:"",classes:"datacell"},{index:4,displayName:"Owner",name:"owner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:"",classes:"datacell"},{index:5,displayName:"Workload",name:"workload",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:6,displayName:"Buildtime",name:"buildtime",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:7,displayName:"Sales Order",name:"salesorder",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:8,displayName:"SO Line Item",name:"solineitem",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:9,displayName:"Same As",name:"sameas",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:10,displayName:"Triage Complete Date",name:"triagecompletedate",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:11,displayName:"Design Complete Date",name:"designcompletedate",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:12,displayName:"Due Date",name:"duedate",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:13,displayName:"Triage Complete",name:"triagecomplete",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:14,displayName:"Delete",name:"delete",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"}],k=r(8),E=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return e=s+"-"+r+"-"+t},L=function(e){if(window.confirm("Are you sure you want to send this order back to Design?")){var t=e.sameAsChildren;e.sameAsChildren.length>0&&t.forEach((function(e){e.designComplete=null}));var r=Object(k.a)(Object(k.a)({},e),{},{designComplete:null});w.a.put(A,r),alert("Order was sent back to Design")}},F=function(e){window.confirm("Are you sure you want to delete this order?")&&(w.a.delete("".concat(A,"/").concat(e._id)),alert("Order has been deleted"))},_=new Date("2030-12-30"),P=[],W=new Date(E());W<=_;W.setDate(W.getDate()+1))5!==W.getDay()&&6!==W.getDay()&&P.push(new Date(W).toISOString().slice(0,10));var B=function(){var e=Object(b.a)(o.a.mark((function e(t){var r,s,a,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=E(),"None"!==t.triageOwner&&null!==t.triageOwner){e.next=5;break}alert("Please select a triage owner"),e.next=17;break;case 5:if(null!==t.workload&&0!==t.workload.length){e.next=9;break}alert("Please enter a workload"),e.next=17;break;case 9:if(s=P[12],a=[],!window.confirm("Are you sure you want to complete Triage?")){e.next=17;break}return l=Object(k.a)(Object(k.a)({},t),{},{triageComplete:r,dueDate:s,sameAsChildren:a}),e.next=15,w.a.put(A,l);case 15:alert("Order has been marked with triage date of ".concat(r)),P.slice(1,2);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(o.a.mark((function e(t){var r,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=E(),"None"!==t.owner){e.next=5;break}alert("Please select an owner"),e.next=16;break;case 5:if(void 0!==t.buildTime&&""!==t.buildTime&&null!==t.buildTime){e.next=9;break}alert("Please enter a build time"),e.next=16;break;case 9:if(s=[],!window.confirm("Are you sure you want to complete this order from Design?")){e.next=16;break}return a=Object(k.a)(Object(k.a)({},t),{},{designComplete:r,sameAsChildren:s}),e.next=15,w.a.put(A,a);case 15:alert("Order has been completed from design");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var R=function(e){var t=e.sortColumns,r=e.header;return Object(O.jsxs)("td",{onClick:function(){return t(r)},className:"tdheader noselect ".concat(r.classes),children:[Object(O.jsx)("div",{className:"headerName",children:r.displayName}),Object(O.jsxs)("div",{className:"arrow",children:[r.sortAsc?" \u25b2":"",r.sortDesc?" \u25bc":""]})]},r.name)};r(55);var H=function(e){document.title="Scheduling Tool - Triage";var t=e.triageOrders,r=e.updateWorkload,l=e.updateTriageOwner,c=e.updateOwner,n=e.updateSameAs,d=e.removeChild,o=e.displayOrderChildren,b=Object(s.useState)(t),u=Object(j.a)(b,2),m=u[0],h=u[1],f=Object(s.useState)(S),x=Object(j.a)(f,2),g=x[0],y=x[1];Object(s.useEffect)((function(){var e=t;g.forEach((function(t){!0===t.filterable&&t.filters.length>0&&(e=e.filter((function(e){if(e[t.name].toLowerCase().includes("".concat(t.filters)))return e})))})),h(e)}),[g]);var C=function(e){!0===e.sortable&&(g.forEach((function(t){t!==e&&(t.sortAsc=!1,t.sortDesc=!1)})),!1===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!0,h(Object(i.a)(m.sort((function(t,r){var s=t[e.name],a=r[e.name];return s<a?-1:s>a?1:0}))))):!0===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!1,e.sortDesc=!0,h(Object(i.a)(m.sort((function(t,r){var s=t[e.name],a=r[e.name];return s>a?-1:s<a?1:0}))))):(e.sortAsc=!1,e.sortDesc=!1,h(Object(i.a)(m.sort((function(e,t){var r=e._id,s=t._id;return r>s?1:r<s?-1:0}))))))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["TRIAGE (",m.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:g.map((function(e,t){return Object(O.jsx)(R,{sortColumns:C,header:e},t)}))}),Object(O.jsx)(p,{triageTableHeaders:g,filterData:function(e){y(Object(i.a)(g),g[e.target.id].filters=e.target.value.toLowerCase())},triageOrders:t})]}),Object(O.jsx)("tbody",{children:m.map((function(e){return Object(O.jsx)(a.a.Fragment,{children:e.child?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(v,{order:e,updateTriageOwner:l,updateOwner:c,updateWorkload:r,updateSameAs:n,updateTriageComplete:B,deleteOrder:F,displayOrderChildren:o,triageOrders:t,children:e.displaySameAsChildren?Object(O.jsx)(O.Fragment,{children:e.sameAsChildren.map((function(t){return Object(O.jsx)(T,{order:e,child:t,updateTriageOwner:l,updateOwner:c,removeChild:d},e.id)}))}):Object(O.jsx)(O.Fragment,{})},e.id)},e.id)}))})]})]})},X=[{index:0,displayName:"",name:"",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"",filters:"",classes:"childrenExpand"},{index:1,displayName:"Customer",name:"customer",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:2,displayName:"Style Number",name:"stylenumber",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:3,displayName:"Triage Owner",name:"triageowner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:"",classes:"datacell"},{index:4,displayName:"Owner",name:"owner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:"",classes:"datacell"},{index:5,displayName:"Workload",name:"workload",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:6,displayName:"Buildtime",name:"buildtime",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:7,displayName:"Sales Order",name:"salesorder",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:8,displayName:"SO Line Item",name:"solineitem",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:9,displayName:"Same As",name:"sameas",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:10,displayName:"Triage Complete Date",name:"triagecomplete",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:11,displayName:"Design Complete Date",name:"designcomplete",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:12,displayName:"Due Date",name:"duedate",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:13,displayName:"Design Complete",name:"designcompletebtn",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filters:"",classes:"datacell"},{index:14,displayName:"Back to Triage",name:"sendbacktotriage",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:15,displayName:"Delete",name:"delete",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"}];r(56);var M=function(e){var t=e.order,r=e.updateOwner,s=e.updateBuildTime,a=e.deleteOrder,l=e.displayOrderChildren;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("tr",{id:-1,className:"orderParent",children:[Object(O.jsx)("td",{children:t.sameAsChildren.length>0?Object(O.jsx)("button",{onClick:function(){return l(t)},title:"Show/Hide Children",children:t.displaySameAsChildren?"-":"+"}):Object(O.jsx)(O.Fragment,{})}),Object(O.jsx)("td",{children:t.customer}),Object(O.jsx)("td",{children:t.styleNumber}),Object(O.jsx)("td",{children:t.triageOwner}),Object(O.jsx)("td",{children:Object(O.jsx)("select",{defaultValue:t.owner,onChange:function(e){return r(t,e)},children:Object(O.jsx)(x,{})})}),Object(O.jsx)("td",{children:t.workload}),Object(O.jsx)("td",{children:!1===t.child?Object(O.jsx)("input",{type:"text",min:"1",max:"1000",defaultValue:t.buildTime,onChange:function(e){return s(t,e)},className:"workload"}):Object(O.jsx)("input",{disabled:!0,className:"workload",value:t.buildTime})}),Object(O.jsx)("td",{children:t.salesOrder}),Object(O.jsx)("td",{children:t.soLineItem}),Object(O.jsx)("td",{className:"sameAsParentCell ".concat(t.sameAsChildren.length>0?"sameAsParentCellWithChildren":"")}),Object(O.jsx)("td",{children:t.triageComplete}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{className:"".concat(function(e){var t=E();return e.duedate===t?"dueDateToday":e.duedate<t?"dueDateLate":void 0}(t)),children:t.dueDate}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return I(t)},children:"COMPLETE"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to send this order back to Triage?")){var t=e.sameAsChildren;e.sameAsChildren.length>0&&t.forEach((function(e){e.triagecomplete=null,e.duedate=null}));var r=Object(k.a)(Object(k.a)({},e),{},{triageComplete:null,dueDate:null,sameAsChildren:t});w.a.put(A,r),alert("Order was sent back to triage")}}(t)},children:"SEND BACK"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,onClick:function(){return a(t)},children:"X"})})]},t._id),e.children]})};var U=function(e){var t=e.child;return Object(O.jsxs)("tr",{className:"childrenRow",children:[Object(O.jsx)("td",{}),Object(O.jsx)("td",{children:t.customer}),Object(O.jsx)("td",{children:t.stylenumber}),Object(O.jsx)("td",{children:t.triageowner}),Object(O.jsx)("td",{children:t.owner}),Object(O.jsx)("td",{children:t.workload}),Object(O.jsx)("td",{children:t.buildtime}),Object(O.jsx)("td",{children:t.salesorder}),Object(O.jsx)("td",{children:t.solineitem}),Object(O.jsx)("td",{children:t.sameas}),Object(O.jsx)("td",{children:t.triagecomplete}),Object(O.jsx)("td",{children:t.designcomplete}),Object(O.jsx)("td",{children:t.duedate}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{}),Object(O.jsx)("td",{})]})};var V=function(e){document.title="Scheduling Tool - Dashboard";var t=e.dashboardOrders,r=e.updateOwner,l=e.updateBuildTime,c=e.displayOrderChildren,n=Object(s.useState)(t),d=Object(j.a)(n,2),o=d[0],b=d[1],u=Object(s.useState)(X),m=Object(j.a)(u,2),h=m[0],f=m[1];Object(s.useEffect)((function(){var e=t;h.forEach((function(t){!0===t.filterable&&t.filters.length>0&&(e=e.filter((function(e){if(e[t.name].toLowerCase().includes("".concat(t.filters)))return e})))})),b(e)}),[h]);var x=function(e){!0===e.sortable&&(h.forEach((function(t){t!==e&&(t.sortAsc=!1,t.sortDesc=!1)})),!1===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!0,b(Object(i.a)(o.sort((function(t,r){var s=t[e.name],a=r[e.name];return s<a?-1:s>a?1:0}))))):!0===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!1,e.sortDesc=!0,b(Object(i.a)(o.sort((function(t,r){var s=t[e.name],a=r[e.name];return s>a?-1:s<a?1:0}))))):(e.sortAsc=!1,e.sortDesc=!1,b(Object(i.a)(o.sort((function(e,t){var r=e._id,s=t._id;return r>s?1:r<s?-1:0}))))))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["DASHBOARD (",o.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:h.map((function(e){return Object(O.jsx)(R,{sortColumns:x,header:e},e.index)}))}),Object(O.jsx)(p,{dashboardTableHeaders:h,filterData:function(e){f(Object(i.a)(h),h[e.target.id].filters=e.target.value.toLowerCase())}})]}),Object(O.jsx)("tbody",{children:o.map((function(e){return Object(O.jsx)(a.a.Fragment,{children:e.child?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(M,{order:e,updateOwner:r,updateBuildTime:l,deleteOrder:F,displayOrderChildren:c,children:e.displaySameAsChildren?Object(O.jsx)(O.Fragment,{children:e.sameasChildren.map((function(t){return Object(O.jsx)(U,{order:e,child:t,updateOwner:r},t)}))}):Object(O.jsx)(O.Fragment,{})},e._id)},e.id)}))})]})]})},G=[{index:0,displayName:"",name:"",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"childrenExpand"},{index:1,displayName:"Customer",name:"customer",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:2,displayName:"Style Number",name:"stylenumber",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:3,displayName:"Triage Owner",name:"triageowner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:"",classes:"datacell"},{index:4,displayName:"Owner",name:"owner",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"select",filters:"",classes:"datacell"},{index:5,displayName:"Workload",name:"workload",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:6,displayName:"Buildtime",name:"buildtime",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"},{index:7,displayName:"Sales Order",name:"salesorder",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:8,displayName:"SO Line Item",name:"solineitem",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:9,displayName:"Same As",name:"sameas",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:10,displayName:"Triage Complete Date",name:"triagecomplete",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:11,displayName:"Design Complete Date",name:"designcomplete",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:12,displayName:"Due Date",name:"duedate",sortable:!0,sortAsc:!1,sortDesc:!1,filterable:!0,filterableType:"search",filters:"",classes:"datacell"},{index:13,displayName:"Back to Design",name:"backtodesign",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filters:"",classes:"datacell"},{index:14,displayName:"Delete",name:"delete",sortable:!1,sortAsc:!1,sortDesc:!1,filterable:!1,filterableType:"search",filters:"",classes:"datacell"}];r(57);var K=function(e){var t=e.order,r=e.deleteOrder,s=e.backToDesign,a=e.displayOrderChildren;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("tr",{id:-1,className:"orderParent",children:[Object(O.jsx)("td",{children:t.sameAsChildren.length>0?Object(O.jsx)("button",{onClick:function(){return a(t)},title:"Show/Hide Children",children:t.displaysameAsChildren?"-":"+"}):Object(O.jsx)(O.Fragment,{})}),Object(O.jsx)("td",{children:t.customer}),Object(O.jsx)("td",{children:t.styleNumber}),Object(O.jsx)("td",{children:t.triageOwner}),Object(O.jsx)("td",{children:t.owner}),Object(O.jsx)("td",{children:t.workload}),Object(O.jsx)("td",{children:t.buildTime}),Object(O.jsx)("td",{children:t.salesOrder}),Object(O.jsx)("td",{children:t.soLineItem}),Object(O.jsx)("td",{className:"sameAsParentCell ".concat(t.sameAsChildren.length>0?"sameAsParentCellWithChildren":"")}),Object(O.jsx)("td",{children:t.triageComplete}),Object(O.jsx)("td",{children:t.designComplete}),Object(O.jsx)("td",{children:t.dueDate}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return s(t)},children:"SEND BACK"})}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{disabled:!0,onClick:function(){return r(t)},children:"X"})})]},t._id),e.children]})};var z=function(e){document.title="Scheduling Tool - Completed";var t=e.completedOrders,r=e.displayOrderChildren,l=Object(s.useState)(t),c=Object(j.a)(l,2),n=c[0],d=c[1],o=Object(s.useState)(G),b=Object(j.a)(o,2),u=b[0],m=b[1];Object(s.useEffect)((function(){var e=t;u.forEach((function(t){!0===t.filterable&&t.filters.length>0&&(e=e.filter((function(e){if(e[t.name].toLowerCase().includes("".concat(t.filters)))return e})))})),d(e)}),[u]);var h=function(e){!0===e.sortable&&(u.forEach((function(t){t!==e&&(t.sortAsc=!1,t.sortDesc=!1)})),!1===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!0,d(Object(i.a)(n.sort((function(t,r){var s=t[e.name],a=r[e.name];return s<a?-1:s>a?1:0}))))):!0===e.sortAsc&&!1===e.sortDesc?(e.sortAsc=!1,e.sortDesc=!0,d(Object(i.a)(n.sort((function(t,r){var s=t[e.name],a=r[e.name];return s>a?-1:s<a?1:0}))))):(e.sortAsc=!1,e.sortDesc=!1,d(Object(i.a)(n.sort((function(e,t){var r=e._id,s=t._id;return r>s?1:r<s?-1:0}))))))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["COMPLETED (",n.length,")"]}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:u.map((function(e){return Object(O.jsx)(R,{header:e,sortColumns:h},e.index)}))}),Object(O.jsx)(p,{completedTableHeaders:u,filterData:function(e){m(Object(i.a)(u),u[e.target.id].filters=e.target.value.toLowerCase())}})]}),Object(O.jsx)("tbody",{children:n.map((function(e){return Object(O.jsx)(a.a.Fragment,{children:e.child?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(K,{order:e,deleteOrder:F,displayOrderChildren:r,backToDesign:L,children:e.displaysameAsChildren?Object(O.jsx)(O.Fragment,{children:e.sameAsChildren.map((function(t){return Object(O.jsx)(U,{order:e,child:t})}))}):Object(O.jsx)(O.Fragment,{})},e._id)},e.id)}))})]})]})};r(58).config();var J=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),r=t[0],a=t[1],l=Object(s.useState)([]),c=Object(j.a)(l,2),n=c[0],d=c[1],m=Object(s.useState)([]),h=Object(j.a)(m,2),x=h[0],p=h[1],g=Object(s.useState)([]),C=Object(j.a)(g,2),D=C[0],v=C[1],T=Object(s.useState)(!1),S=Object(j.a)(T,2),k=S[0],E=S[1],L=Object(s.useRef)(0);Object(s.useEffect)((function(){F()}),[A]),Object(s.useEffect)((function(){L.current++,L.current>0&&r.length>0&&(a(r),R(r),function(e){e.forEach((function(e){var t="";for(var r in e._id)e._id[r]>="0"&&e._id[r]<="9"&&t.length<=5&&(t+=e._id[r])}))}(r))}),[r]),Object(s.useEffect)((function(){r.length>0&&r.forEach((function(e){e.displaysameAsChildren=!1}))}),[]);var F=function(){var e=Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(A),e.next=4,w.a.get(A,{headers:{"Content-Type":"application/json"}});case 4:t=e.sent,console.log(t),a(t.data.body.Items),E(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),_=function(e,t){a(Object(i.a)(r),e.triageOwner=t.target.value),B(e)},P=function(e,t){a(Object(i.a)(r),e.owner=t.target.value),B(e)},W=function(e,t){a(Object(i.a)(r),e.workload=t.target.value),B(e)},B=function(e){w.a.put(A,e)},I=function(e){e.displaysameAsChildren?a(Object(i.a)(r),e.displaysameAsChildren=!1):a(Object(i.a)(r),e.displaysameAsChildren=!0)},R=function(e){d(e.filter((function(e){return null===e.triageComplete&&null===e.designComplete}))),p(e.filter((function(e){return null!==e.triageComplete&&null===e.designComplete}))),v(e.filter((function(e){return null!==e.triageComplete&&null!==e.designComplete})))};return!1===k?Object(O.jsx)("p",{children:"loading..."}):!0===k&&null!==n?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(f,{triageOrders:n,dashboardOrders:x,completedOrders:D}),Object(O.jsx)("h1",{children:"SCHEDULING TOOL"}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"*",element:Object(O.jsx)(u.a,{to:"/triage"})}),Object(O.jsx)(u.b,{path:"/allorders",element:Object(O.jsx)(y,{orders:r,updateTriageOwner:_,updateOwner:P,updateWorkload:W})}),Object(O.jsx)(u.b,{path:"/triage",element:Object(O.jsx)(H,{triageOrders:n,updateWorkload:W,updateTriageOwner:_,updateOwner:P,updateSameAs:function(e,t){},removeChild:function(e,t){},displayOrderChildren:I})}),Object(O.jsx)(u.b,{path:"/dashboard",element:Object(O.jsx)(V,{dashboardOrders:x,updateOwner:P,updateBuildTime:function(e,t){a(Object(i.a)(r),e.buildTime=t.target.value),B(e)},displayOrderChildren:I,updateWorkload:W})}),Object(O.jsx)(u.b,{path:"/completed",element:Object(O.jsx)(z,{completedOrders:D,displayOrderChildren:I})}),Object(O.jsx)(u.b,{path:"/create-new-order",element:Object(O.jsx)(N,{})})]})]})}):void 0};c.a.render(Object(O.jsx)(n.a,{basename:"/work-app-client",children:Object(O.jsx)(J,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.227f96aa.chunk.js.map