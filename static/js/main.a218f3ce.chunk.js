(this["webpackJsonpmultistep-form"]=this["webpackJsonpmultistep-form"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),a=c.n(s),l=c(5),i=c.n(l),r=(c(11),c(4)),u=c(1),j=function(e){return Object(n.jsxs)("div",{className:"form-part-1",children:[Object(n.jsx)("h1",{children:"Form Part 1"}),Object(n.jsx)("label",{children:"First name"}),Object(n.jsx)("input",{value:e.values.firstName,onChange:function(t){return e.setValues(Object(u.a)(Object(u.a)({},e.values),{},{firstName:t.target.value}))}}),Object(n.jsx)("label",{children:"Last name"}),Object(n.jsx)("input",{value:e.values.lastName,onChange:function(t){return e.setValues(Object(u.a)(Object(u.a)({},e.values),{},{lastName:t.target.value}))}}),Object(n.jsx)("label",{children:"email"}),Object(n.jsx)("input",{value:e.values.email,onChange:function(t){return e.setValues(Object(u.a)(Object(u.a)({},e.values),{},{email:t.target.value}))}}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.nextStep()},children:"Next"})]})},b=function(e){return Object(n.jsxs)("div",{className:"form-part-2",children:[Object(n.jsx)("h1",{children:"Form Part 2"}),Object(n.jsx)("label",{children:"occupation"}),Object(n.jsx)("input",{value:e.values.occupation,onChange:function(t){return e.setValues(Object(u.a)(Object(u.a)({},e.values),{},{occupation:t.target.value}))}}),Object(n.jsx)("label",{children:"City"}),Object(n.jsx)("input",{value:e.values.city,onChange:function(t){return e.setValues(Object(u.a)(Object(u.a)({},e.values),{},{city:t.target.value}))}}),Object(n.jsx)("label",{children:"Bio"}),Object(n.jsx)("input",{value:e.values.bio,onChange:function(t){return e.setValues(Object(u.a)(Object(u.a)({},e.values),{},{bio:t.target.value}))}}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.nextStep()},children:"Next"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.prevStep()},children:"Back"})]})]})},o=function(e){return Object(n.jsxs)("div",{className:"confirm",children:[Object(n.jsx)("h1",{children:"Confirm"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["First Name : ",e.values.firstName]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Last Name : ",e.values.lastName]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Email : ",e.values.email]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Occupation : ",e.values.occupation]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["City : ",e.values.city]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Bio : ",e.values.bio]})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.nextStep()},children:"Next"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.prevStep()},children:"Back"})]})]})},O=function(){return Object(n.jsxs)("div",{className:"success",children:[Object(n.jsx)("h1",{children:"Success"}),Object(n.jsx)("p",{children:"Your details are entered successfuly. Thanks for registering"})]})},x=function(){var e=Object(s.useState)(1),t=Object(r.a)(e,2),c=t[0],a=t[1],l=Object(s.useState)({firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""}),i=Object(r.a)(l,2),u=i[0],x=i[1],h=function(){a(c+1)},v=function(){a(c-1)};switch(c){case 1:return Object(n.jsx)(j,{nextStep:h,setValues:x,values:u});case 2:return Object(n.jsx)(b,{nextStep:h,prevStep:v,setValues:x,values:u});case 3:return Object(n.jsx)(o,{nextStep:h,prevStep:v,setValues:x,values:u});case 4:return Object(n.jsx)(O,{});default:return!0}};var h=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(x,{})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a218f3ce.chunk.js.map