(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__2leNd",labelForm:"contactForm_labelForm__108mt",inputForm:"contactForm_inputForm__2N457",buttonContactForm:"contactForm_buttonContactForm__2b9Ri"}},20:function(t,e,n){t.exports={buttonDelete:"contactList_buttonDelete__1KIRp",item:"contactList_item__1Zfmy",number:"contactList_number__PxfHE"}},24:function(t,e,n){t.exports={enter:"addTransition_enter__3Z_LA",enterActive:"addTransition_enterActive__3A6JT",exit:"addTransition_exit__2pRWX",exitActive:"addTransition_exitActive__sk3MZ"}},25:function(t,e,n){t.exports={filter:"filter_filter__1EaBe",input:"filter_input__1g0Wd"}},44:function(t,e,n){t.exports={box:"error_box__2AiIf"}},45:function(t,e,n){t.exports={enter:"errorTransition_enter__2_wav",enterActive:"errorTransition_enterActive__2qmF0",exit:"errorTransition_exit__3P-rp",exitActive:"errorTransition_exitActive__3bF8k"}},46:function(t,e,n){t.exports={title:"app_title__2fbQI"}},47:function(t,e,n){t.exports={container:"container_container__3TiUU"}},48:function(t,e,n){t.exports={appear:"logoTransition_appear__3AKSh",appearActive:"logoTransition_appearActive__2IOna"}},55:function(t,e,n){},56:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(9),r=n.n(a),o=(n(55),n(12)),i=n(13),s=n(15),u=n(14),b=(n(56),n(4)),l=n(41),j=n.n(l),d=n(10),m=n.n(d),f=n(8),h=n(31),p=n.n(h),O=n(43),x=n(19),_=n.n(x),v=n(2),g=Object(v.b)("contacts/addContactRequest"),C=Object(v.b)("contacts/addContactSuccess"),F=Object(v.b)("contacts/addContactError"),N=Object(v.b)("contacts/addContactRequest"),y=Object(v.b)("contacts/addContactSuccess"),w=Object(v.b)("contacts/addContactError"),A=Object(v.b)("contacts/deleteContactRequest"),k=Object(v.b)("contacts/deleteContactSuccess "),I=Object(v.b)("contacts/deleteContactError"),T=Object(v.b)("contacts/changeFilter");_.a.defaults.baseURL="http://localhost:4040";var S=function(){return function(){var t=Object(O.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(g()),t.prev=1,t.next=4,_.a.get("/contacts");case 4:n=t.sent,c=n.data,e(C(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(F(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},L=function(t){return function(e){e(N()),_.a.post("/contacts",t).then((function(t){var n=t.data;return console.log("dataOk",n)||e(y([n]))})).catch((function(t){return e(w(t))}))}},E=function(t){return function(e){e(A()),_.a.delete("/contacts/".concat(t)).then((function(){return e(k(t))})).catch((function(t){return e(I(t))}))}},D=n(91),R=n(44),P=n.n(R),q=n(45),B=n.n(q),J=n(1),U=function(){return Object(J.jsx)(D.a,{in:!0,timeout:250,classNames:B.a,unmountOnExit:!0,children:Object(J.jsx)("div",{className:P.a.box,children:"Contact is already exists!"})})},Z=n(23),K=function(t){return t.contacts.loading},M=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},z=Object(Z.a)([M,W],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),H=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).loginInputId=j.a.generate(),t.state={name:"",number:"",error:!1},t.handleNameChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(b.a)({},c,a))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name})))return t.setState({error:!0}),setTimeout((function(){return t.setState({error:!1})}),500);t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.error;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("form",{className:m.a.contactForm,onSubmit:this.handleSubmit,children:[Object(J.jsx)("label",{className:m.a.labelForm,htmlFor:this.loginInputId,children:"Name"}),Object(J.jsx)("input",{className:m.a.inputForm,type:"text",name:"name",id:this.loginInputId,value:this.state.name,onChange:this.handleNameChange}),Object(J.jsx)("label",{className:m.a.labelForm,htmlFor:this.loginInputId,children:"Number"}),Object(J.jsx)("input",{className:m.a.inputForm,type:"tel",name:"number",id:this.loginInputId,value:this.state.number,onChange:this.handleNameChange}),Object(J.jsx)("button",{className:m.a.buttonContactForm,type:"submit",children:"Add contact"})]}),t&&Object(J.jsx)(U,{})]})}}]),n}(c.Component),Q=Object(f.b)((function(t){return{contacts:M(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,c=e.number;return t(L({name:n,number:c}))}}}))(H),X=n(20),G=n.n(X),V=n(92),Y=n(24),$=n.n(Y),tt=function(){return Object(J.jsxs)("svg",{"data-name":"Layer 2",fill:"white",width:"60",height:"60",id:"bcc87848-35d3-4b8c-bef5-f50bbd1dee72",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:[Object(J.jsx)("rect",{height:"2.5",rx:"1.25",transform:"translate(19 45.87) rotate(-135)",width:"15.435",x:"11.282",y:"17.75"}),Object(J.jsx)("rect",{height:"2.5",rx:"1.25",transform:"translate(-7.87 19) rotate(-45)",width:"15.435",x:"11.282",y:"17.75"})]})},et=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact;return console.log("props",this.props),Object(J.jsx)(V.a,{component:"ul",className:G.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(J.jsx)(D.a,{timeout:250,classNames:$.a,appear:!0,unmountOnExit:!0,children:Object(J.jsxs)("li",{className:G.a.item,children:[Object(J.jsx)("div",{children:c}),Object(J.jsx)("div",{className:G.a.number,children:a}),Object(J.jsx)("button",{className:G.a.buttonDelete,type:"button",onClick:function(){return n(e)},children:Object(J.jsx)(tt,{})})]})},e)}))})}}]),n}(c.Component),nt=Object(f.b)((function(t){return{contacts:z(t)}}),(function(t){return{onDeleteContact:function(e){return t(E(e))}}}))(et),ct=n(25),at=n.n(ct);var rt=Object(f.b)((function(t){return{value:W(t)}}),(function(t){return{onChange:function(e){return t(T(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(J.jsx)(D.a,{timeout:250,classNames:$.a,appear:!0,children:Object(J.jsxs)("form",{className:at.a.filter,children:[Object(J.jsx)("label",{className:at.a.label,children:"Find contacts by name"}),Object(J.jsx)("input",{className:at.a.input,type:"name",value:e,onChange:n})]})})})),ot=n(46),it=n.n(ot),st=n(47),ut=n.n(st);var bt,lt,jt=function(t){var e=t.children;return Object(J.jsx)("div",{className:ut.a.container,children:e})},dt=n(48),mt=n.n(dt),ft=(n(89),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(J.jsxs)(jt,{children:[Object(J.jsx)(D.a,{in:!0,appear:!0,timeout:500,classNames:mt.a,unmountOnExit:!0,children:Object(J.jsx)("h1",{className:it.a.title,children:"Phonebook"})}),Object(J.jsx)(Q,{}),Object(J.jsx)(rt,{}),this.props.isloadingContacts&&Object(J.jsx)("h1",{children:"loading..."}),Object(J.jsx)(nt,{})]})}}]),n}(c.Component)),ht=Object(f.b)((function(t){return{isloadingContacts:K(t)}}),(function(t){return{fetchContacts:function(){return t(S())}}}))(ft),pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},Ot=n(18),xt=n(49),_t=n.n(xt),vt=n(11),gt=n(3),Ct=Object(v.c)([],(bt={},Object(b.a)(bt,C,(function(t,e){return e.payload})),Object(b.a)(bt,y,(function(t,e){var n=e.payload;return[].concat(Object(Ot.a)(t),Object(Ot.a)(n))})),Object(b.a)(bt,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),bt)),Ft=Object(v.c)(!1,(lt={},Object(b.a)(lt,g,(function(){return!0})),Object(b.a)(lt,C,(function(){return!1})),Object(b.a)(lt,F,(function(){return!1})),Object(b.a)(lt,N,(function(){return!0})),Object(b.a)(lt,y,(function(){return!1})),Object(b.a)(lt,w,(function(){return!1})),Object(b.a)(lt,A,(function(){return!0})),Object(b.a)(lt,k,(function(){return!1})),Object(b.a)(lt,I,(function(){return!1})),lt)),Nt=Object(v.c)("",Object(b.a)({},T,(function(t,e){return e.payload}))),yt=Object(v.c)(null,{}),wt=Object(gt.combineReducers)({items:Ct,filter:Nt,loading:Ft,error:yt}),At=[].concat(Object(Ot.a)(Object(v.d)({serializableCheck:{ignoredActions:[vt.a,vt.f,vt.b,vt.c,vt.d,vt.e]}})),[_t.a]),kt=Object(v.a)({reducer:{contacts:wt},middleware:At,devToops:!1});r.a.render(Object(J.jsx)(f.a,{store:kt,children:Object(J.jsx)(ht,{})}),document.getElementById("root")),pt()}},[[90,1,2]]]);
//# sourceMappingURL=main.398196a1.chunk.js.map