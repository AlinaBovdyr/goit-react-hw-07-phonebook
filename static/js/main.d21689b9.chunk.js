(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{100:function(t,e,n){},101:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){},105:function(t,e,n){},106:function(t,e,n){"use strict";n.r(e);var a,c,r,o=n(0),i=n.n(o),l=n(10),s=n.n(l),u=n(9),b=n(25),d=n(3),j=n(13),f=n(45),h=n.n(f),p=n(4),O=n(5),m=Object(d.b)("contacts/fetchContactRequest"),v=Object(d.b)("contacts/fetchContactSuccess"),x=Object(d.b)("contacts/fetchContactError"),_=Object(d.b)("contacts/addContactRequest"),C=Object(d.b)("contacts/addContactSuccess"),y=Object(d.b)("contacts/addContactError"),g=Object(d.b)("contacts/deleteContactRequest"),w=Object(d.b)("contacts/deleteContactSuccess"),N=Object(d.b)("contacts/deleteContactError"),k=Object(d.b)("contacts/ChangeFilter"),S=Object(d.b)("contacts/ChangeSorting"),E=Object(d.c)([],(a={},Object(p.a)(a,v,(function(t,e){return e.payload})),Object(p.a)(a,C,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(p.a)(a,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),M=Object(d.c)("",Object(p.a)({},k,(function(t,e){return e.payload}))),P=Object(d.c)("date",Object(p.a)({},S,(function(t,e){return e.payload}))),B=Object(d.c)(!1,(c={},Object(p.a)(c,m,(function(){return!0})),Object(p.a)(c,v,(function(){return!1})),Object(p.a)(c,x,(function(){return!1})),Object(p.a)(c,_,(function(){return!0})),Object(p.a)(c,C,(function(){return!1})),Object(p.a)(c,y,(function(){return!1})),Object(p.a)(c,g,(function(){return!0})),Object(p.a)(c,w,(function(){return!1})),Object(p.a)(c,N,(function(){return!1})),c)),I=Object(d.c)(null,(r={},Object(p.a)(r,g,(function(t,e){return e.payload})),Object(p.a)(r,w,(function(t,e){return e.payload})),Object(p.a)(r,N,(function(t,e){return e.payload})),r)),L=Object(O.c)({items:E,filter:M,sorter:P,loading:B,error:I}),F=[].concat(Object(b.a)(Object(d.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[h.a]),D=Object(d.a)({reducer:{contacts:L},middleware:F,devTools:!1}),R=n(14),A=n(15),z=n(17),W=n(16),q=n(107),T=n(22),V=n.n(T);V.a.defaults.baseURL="http://localhost:4040";var U=n(24),Y=function(t){return t.contacts.loading},G=function(t){return t.contacts.items},H=function(t){return t.contacts.filter},J=function(t){return t.contacts.sorter},K=Object(U.a)([G,H,J],(function(t,e,n){var a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return"abc"===n?a.sort((function(t,e){var n=t.name.toLowerCase(),a=e.name.toLowerCase();return n<a?-1:n>a?1:0})):"date"===n?a.sort((function(t,e){return t.date<e.date?1:t.date>e.date?-1:0})):void 0})),Q=n(20),X=n.n(Q),Z=n(1),$=function(t){var e=t.children;return Object(Z.jsxs)("div",{className:X.a.container,children:[Object(Z.jsx)("div",{className:X.a.titleWrapper,children:Object(Z.jsx)(q.a,{in:!0,appear:!0,classNames:X.a,timeout:500,children:Object(Z.jsx)("h1",{className:X.a.mainTitle,children:"Phonebook"})})}),Object(Z.jsx)("div",{className:X.a.childContainer,children:e})]})},tt=n(33),et=n(50),nt=n(47),at=n.n(nt),ct=function(t){var e=t.children,n=t.className,a=t.onClick,c=Object(et.a)(t,["children","className","onClick"]),r=[n,at.a.button].join(" ");return Object(Z.jsx)("button",Object(tt.a)(Object(tt.a)({type:"button",className:r,onClick:a},c),{},{children:e}))};ct.defaultProps={className:"",children:null,onClick:function(){return null}};var rt=ct;function ot(){return(ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function it(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var lt=o.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"});function st(t,e){var n=t.title,a=t.titleId,c=it(t,["title","titleId"]);return o.createElement("svg",ot({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},c),n?o.createElement("title",{id:a},n):null,lt)}var ut=o.forwardRef(st),bt=(n.p,n(26)),dt=n.n(bt),jt=function(t){var e=t.onClick;return Object(Z.jsxs)("div",{className:dt.a.wrapper,children:[Object(Z.jsx)("h2",{className:dt.a.title,children:"Contacts"}),Object(Z.jsx)(rt,{className:dt.a.addBtn,onClick:e,"aria-label":"Add contact",title:"Add contact",children:Object(Z.jsx)(ut,{width:"16",height:"16",fill:"#fff"})})]})},ft=n(11),ht=n.n(ft),pt=function(t){Object(z.a)(n,t);var e=Object(W.a)(n);function n(){var t;Object(R.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.contacts.some((function(t){return t.name===a}))?t.props.onSubmit(a):(t.props.onAddContact(a,c),t.props.onSave(),t.setState({name:"",number:""}))},t}return Object(A.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("form",{className:ht.a.container,onSubmit:this.handleSubmit,children:[Object(Z.jsxs)("label",{className:ht.a.field,children:[Object(Z.jsx)("span",{className:ht.a.label,children:"Name"}),Object(Z.jsx)("input",{className:ht.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,required:!0})]}),Object(Z.jsxs)("label",{className:ht.a.field,children:[Object(Z.jsx)("span",{className:ht.a.label,children:"Number"}),Object(Z.jsx)("input",{className:ht.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,required:!0})]}),Object(Z.jsx)("button",{className:ht.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(o.Component),Ot=Object(u.b)((function(t){return{contacts:G(t)}}),(function(t){return{onAddContact:function(e,n){return t(function(t,e){return function(n){var a={name:t,number:e,completed:!1,date:Date.now()};n(_()),V.a.post("/contacts",a).then((function(t){var e=t.data;return n(C(e))})).catch((function(t){return n(y(t))}))}}(e,n))}}}))(pt),mt=n(23),vt=n.n(mt);var xt=Object(u.b)((function(t){return{value:H(t)}}),(function(t){return{onChangeFilter:function(e){return t(k(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(Z.jsx)("div",{className:vt.a.container,children:Object(Z.jsxs)("label",{className:vt.a.field,children:[Object(Z.jsx)("span",{className:vt.a.label,children:"Find contacts by name:"}),Object(Z.jsx)("input",{className:vt.a.input,type:"text",name:"filter",value:e,onChange:n})]})})})),_t=n(108),Ct=n(21),yt=n.n(Ct);function gt(){return(gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function wt(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var Nt=o.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"}),kt=o.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"});function St(t,e){var n=t.title,a=t.titleId,c=wt(t,["title","titleId"]);return o.createElement("svg",gt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},c),n?o.createElement("title",{id:a},n):null,Nt,kt)}var Et=o.forwardRef(St);n.p;function Mt(){return(Mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function Pt(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var Bt=o.createElement("path",{d:"M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"});function It(t,e){var n=t.title,a=t.titleId,c=Pt(t,["title","titleId"]);return o.createElement("svg",Mt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},c),n?o.createElement("title",{id:a},n):null,Bt)}var Lt=o.forwardRef(It);n.p;function Ft(t){var e=t.name,n=t.number,a=t.onDelete,c=["tel:",n].join("");return Object(Z.jsxs)("li",{className:yt.a.contactItem,children:[Object(Z.jsx)("span",{children:e}),Object(Z.jsxs)("div",{className:yt.a.contactWrapper,children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)("span",{children:n}),Object(Z.jsx)("a",{className:yt.a.link,href:c,children:Object(Z.jsx)(rt,{title:"Call up",className:yt.a.button,"aria-label":"Make a call ",children:Object(Z.jsx)(Lt,{className:yt.a.icon,fill:"#0ce620"})})})]}),Object(Z.jsx)(rt,{title:"Delete contact",onClick:a,"aria-label":"Delete contact",children:Object(Z.jsx)(Et,{width:"14",height:"14",fill:"#fff"})})]})]})}Ft.defaultProps={photo:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"};var Dt=Ft;n(79);var Rt=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(Z.jsx)(_t.a,{component:"ol",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(Z.jsx)(q.a,{timeout:250,classNames:"item-fade",children:Object(Z.jsx)(Dt,{name:a,number:c,onDelete:function(){return n(e)}})},e)}))})},At=Object(u.b)((function(t){return{contacts:K(t)}}),(function(t){return{onDeleteContact:function(e){return t((n=e,function(t){t(g()),V.a.delete("/contacts/".concat(n)).then((function(){return t(w(n))})).catch((function(e){return t(N(e))}))}));var n}}}))(Rt),zt=n(12),Wt=n.n(zt),qt="abc",Tt="date";var Vt=Object(u.b)((function(t){return{value:J(t)}}),(function(t){return{onRadioChange:function(e){return t(S(e.target.value))}}}))((function(t){var e=t.value,n=t.onRadioChange;return Object(Z.jsxs)("div",{className:Wt.a.container,children:[Object(Z.jsx)("p",{className:Wt.a.subtitle,children:"Sort by:"}),Object(Z.jsxs)("div",{className:Wt.a.inputWrapper,children:[Object(Z.jsxs)("label",{className:Wt.a.label,children:[Object(Z.jsx)("input",{className:Wt.a.input,type:"radio",name:"date",value:Tt,onChange:n,checked:e===Tt}),Object(Z.jsx)("span",{children:"date"})]}),Object(Z.jsxs)("label",{className:Wt.a.label,children:[Object(Z.jsx)("input",{className:Wt.a.input,type:"radio",name:"abc",value:qt,onChange:n,checked:e===qt}),Object(Z.jsx)("span",{children:"name"})]})]})]})}));function Ut(){return(Ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function Yt(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var Gt=o.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"});function Ht(t,e){var n=t.title,a=t.titleId,c=Yt(t,["title","titleId"]);return o.createElement("svg",Ut({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},c),n?o.createElement("title",{id:a},n):null,Gt)}var Jt=o.forwardRef(Ht),Kt=(n.p,n(27)),Qt=n.n(Kt),Xt=(n(80),document.querySelector("#modal-root")),Zt=function(t){Object(z.a)(n,t);var e=Object(W.a)(n);function n(){var t;Object(R.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t.handleCloseBtnClick=function(){t.props.onClose()},t}return Object(A.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(l.createPortal)(Object(Z.jsx)("div",{className:Qt.a.backdrop,onClick:this.handleBackdropClick,children:Object(Z.jsx)(q.a,{in:!0,appear:!0,timeout:250,classNames:"content",unmountOnExit:!0,children:Object(Z.jsxs)("div",{className:Qt.a.content,children:[this.props.children,Object(Z.jsx)(rt,{className:Qt.a.closeBtn,onClick:this.handleCloseBtnClick,"aria-label":"Close modal",title:"Close modal",children:Object(Z.jsx)(Jt,{width:"12",height:"12",fill:"#fff"})})]})})}),Xt)}}]),n}(o.Component),$t=n(34),te=n.n($t),ee=function(t){var e=t.text;return Object(Z.jsx)("div",{className:te.a.container,children:Object(Z.jsx)("p",{className:te.a.notice,children:e})})},ne=(n(81),n(48)),ae=n.n(ne),ce=n(49),re=n.n(ce),oe=function(){return Object(Z.jsx)(ae.a,{className:re.a.loader,type:"Grid",color:"#3968a5",height:100,width:100,timeout:3e3})},ie=(n(100),n(101),n(102),n(103),function(t){Object(z.a)(n,t);var e=Object(W.a)(n);function n(){var t;Object(R.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={showModal:!1,error:!1,text:""},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t.showNotice=function(e){t.setState({text:"".concat(e," is already in contacts!"),error:!0,showModal:!1}),setTimeout((function(){t.setState({error:!1})}),2e3)},t}return Object(A.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.state,e=t.showModal,n=t.error,a=t.text,c=this.props,r=c.contacts,o=c.isLoading;return Object(Z.jsxs)($,{children:[Object(Z.jsx)(jt,{onClick:this.toggleModal}),o&&Object(Z.jsx)(oe,{}),Object(Z.jsx)(q.a,{in:n,unmountOnExit:!0,classNames:"notice",timeout:250,children:Object(Z.jsx)(ee,{text:a})}),Object(Z.jsx)(q.a,{in:e,unmountOnExit:!0,classNames:"modal",timeout:500,children:Object(Z.jsx)(Zt,{onClose:this.toggleModal,children:Object(Z.jsx)(Ot,{onSave:this.toggleModal,onSubmit:this.showNotice})})}),Object(Z.jsx)(q.a,{in:r.length>1,unmountOnExit:!0,classNames:"fade",timeout:250,children:Object(Z.jsxs)("div",{children:[Object(Z.jsx)(xt,{}),Object(Z.jsx)(Vt,{})]})}),Object(Z.jsx)(q.a,{in:!0,appear:!0,unmountOnExit:!0,classNames:"item-fade",timeout:500,children:Object(Z.jsx)(At,{})})]})}}]),n}(o.PureComponent)),le=Object(u.b)((function(t){return{contacts:G(t),isLoading:Y(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(m()),V.a.get("/contacts").then((function(e){var n=e.data;return t(v(n))})).catch((function(e){return t(x(e))}))}))}}}))(ie);n(104),n(105);s.a.render(Object(Z.jsx)(i.a.StrictMode,{children:Object(Z.jsx)(u.a,{store:D,children:Object(Z.jsx)(le,{})})}),document.getElementById("root"))},11:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",container:"ContactForm_container__1Ccks",field:"ContactForm_field__1Ev99",label:"ContactForm_label__2YTta",input:"ContactForm_input__13PXN",button:"ContactForm_button__1jtTr"}},12:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",secondaryColor:"#3968a5",container:"Sorter_container__33V6U",subtitle:"Sorter_subtitle__3jVj5",inputWrapper:"Sorter_inputWrapper__Rregb",label:"Sorter_label__2UDXc",input:"Sorter_input__2mvYL"}},20:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",container:"Container_container__2Rvg3",titleWrapper:"Container_titleWrapper__2RZ1C",mainTitle:"Container_mainTitle__CfGYO",childContainer:"Container_childContainer__3JAa6",appear:"Container_appear__1gDpM",appearActive:"Container_appearActive__3nxQQ"}},21:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",contactItem:"ContactList_contactItem__1ZVjp",contactWrapper:"ContactList_contactWrapper__3009I",button:"ContactList_button__3jtri",icon:"ContactList_icon__1Y3br",contactPhoto:"ContactList_contactPhoto__jRxpi",link:"ContactList_link__1Q9Gr"}},23:function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",secondaryColor:"#3968a5",secondaryAccentColor:"#3b8bff87",container:"Filter_container__3qMjf",field:"Filter_field__20bMs",label:"Filter_label__2PVIP",input:"Filter_input__U-GLF"}},26:function(t,e,n){t.exports={wrapper:"Header_wrapper__xuWhz",title:"Header_title__2uubF",addBtn:"Header_addBtn__2YXyU"}},27:function(t,e,n){t.exports={backdrop:"Modal_backdrop__ma9_4",content:"Modal_content__2dkt1",closeBtn:"Modal_closeBtn__3oTtq"}},34:function(t,e,n){t.exports={container:"Notice_container__1vZmq",notice:"Notice_notice__1VYpC"}},47:function(t,e,n){t.exports={colors:"'../../../styles/variables/colors.css'",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",button:"IconButton_button__3eblV"}},49:function(t,e,n){t.exports={loader:"Loader_loader__2wtVH"}},79:function(t,e,n){},80:function(t,e,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.d21689b9.chunk.js.map