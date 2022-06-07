"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[764],{2764:function(n,e,t){t.r(e),t.d(e,{PhoneBookView:function(){return Y}});var r,o,a,i,s,d,p,c=t(885),l=t(2791),x=t(8408),u=t(3876),h=(t(5462),t(168)),m=t(2499),f=m.Z.form(r||(r=(0,h.Z)(["\n    width: 350px;\n    padding: 10px;\n\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n\n    border-radius: 3px;\n    border: 2px solid #191970;\n    background-color: #EFE55D;\n"]))),b=m.Z.label(o||(o=(0,h.Z)(["\n    margin-top: 5px;\n    width: 300;\n\n    font-size: 14px;\n    font-weight: 700;\n    color: #191970;\n    text-transform: uppercase;\n"]))),g=m.Z.input(a||(a=(0,h.Z)(["\n    margin-top: 5px;\n    width: 300px;\n    padding: 5px;\n\n    border: 1px solid #191970;\n    border-radius: 3px;\n\n    color: #191970;\n    outline: none;\n"]))),w=m.Z.button(i||(i=(0,h.Z)(["\n    margin-top: 15px;\n    padding: 2px;\n    max-width: 120px;\n    \n    border: 1px solid #191970;\n    border-radius: 3px;\n    box-shadow: 2px 2px 2px #4682B4;\n\n    font-size: 12px;\n    font-weight: 900;\n    color: #F0E10D;\n    background-color: #191970;\n    text-transform: uppercase;\n\n    transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        background-color: #F0E10D;\n        color: #191970;\n    }\n"]))),Z=t(3329);function j(){var n=(0,l.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,l.useState)(""),a=(0,c.Z)(o,2),i=a[0],s=a[1],d=(0,x.Tn)(),p=(0,c.Z)(d,2),h=p[0],m=p[1].isLoading,j=(0,x.wY)().data,v=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"phone":s(o);break;default:return}},k=function(n){var e=j.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}));e?(0,u.Am)("\u26a1".concat(t," is already in contacts!")):h(n)},y=function(){r(""),s("")};return(0,Z.jsxs)(f,{onSubmit:function(n){n.preventDefault(),k({name:t,number:i}),y()},children:[(0,Z.jsx)(b,{children:"Name"}),(0,Z.jsx)(g,{type:"text",name:"name",placeholder:"Annie Copeland",value:t,onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,Z.jsx)(b,{children:"Number"}),(0,Z.jsx)(g,{type:"tel",name:"phone",placeholder:"227-91-26",value:i,onChange:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,Z.jsx)(w,{type:"submit",disabled:m,children:m?"Adding...":"Add contact"})]})}var v,k,y,C,z,A=m.Z.li(s||(s=(0,h.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 5px;\n\n    color: #191970\n"]))),D=m.Z.button(d||(d=(0,h.Z)(["\n    width: 60px;\n\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: 2px 2px 2px #4682B4;\n\n    font-size: 12px;\n    font-weight: 700;\n    color: #191970;\n    background-color: #F0E10D;\n    text-transform: uppercase;\n\n    transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        background-color: #191970;\n        color: #F0E10D;\n"]))),B=m.Z.span(p||(p=(0,h.Z)(["\n    text-transform: uppercase;\n    font-weight: 700;\n        text-shadow: 1px 1px 2px #4682B4;\n"]))),_=function(n){var e=n.name,t=n.phone,r=n.id,o=(0,x.Nt)(),a=(0,c.Z)(o,2),i=a[0],s=a[1].isLoading;return(0,Z.jsxs)(A,{children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(B,{children:[(0,Z.jsx)("span",{role:"img","aria-label":"Icon-pika",children:"\u26a1"}),e]}),": ",t]}),(0,Z.jsx)(D,{type:"button",onClick:function(){return i(r)},disabled:s,children:s?"Deleting...":"Delete"})]})},E=t(5048),F=t(8602),L=m.Z.ul(v||(v=(0,h.Z)(["\n    list-style: none;\n    width: 375px;\n    padding-top: 10px;\n    padding-left: 0;\n    margin: 0;\n"]))),I=function(){var n=(0,x.wY)(),e=n.data,t=void 0===e?[]:e,r=n.isLoading,o=(0,E.v9)(x.zK),a=t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return(0,Z.jsxs)(L,{children:[r&&(0,Z.jsx)(F.s,{size:"40px",secondaryColor:"#B0C4DE",style:{margin:"20px",color:"#191970"}}),t&&a.map((function(n){var e=n.name,t=n.id,r=n.number;return(0,Z.jsx)(_,{name:e,phone:r,id:t},t)}))]})},N=m.Z.label(k||(k=(0,h.Z)(["\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    font-size: 18px;\n    font-weight: 700;\n    color: #191970;\n    text-shadow: 1px 1px 2px #4682B4;\n    text-transform: uppercase;\n"]))),T=m.Z.input(y||(y=(0,h.Z)(["\n    margin-top: 5px;\n    width: 300px;\n    padding: 5px;\n    \n    border: 1px solid #191970;\n    border-radius: 3px;\n    color: #191970;\n    outline: none;\n"]))),P=function(){var n=(0,E.I0)();return(0,Z.jsxs)(N,{children:["Find contacts by name",(0,Z.jsx)(T,{type:"text",onChange:function(e){n((0,x.Tv)(e.currentTarget.value))}})]})},S=m.Z.div(C||(C=(0,h.Z)(["\n    min-height: calc(100vh - 300px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n"]))),q=m.Z.p(z||(z=(0,h.Z)(["\n    margin-bottom: 10px;\n\n    font-size: 24px;\n    font-weight: 900;\n    color: #191970;\n    text-transform: uppercase;\n    text-shadow: 0 0 10px yellow;\n"]))),Y=function(){return(0,Z.jsx)(S,{children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(u.Ix,{autoClose:2500}),(0,Z.jsxs)(q,{children:[" Pika",(0,Z.jsx)("span",{role:"img","aria-label":"Icon-pika",children:"\u26a1"}),"Book"]}),(0,Z.jsx)(j,{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(I,{})]})]})})}}}]);
//# sourceMappingURL=764.ec75464f.chunk.js.map