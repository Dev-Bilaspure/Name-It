(this["webpackJsonpname-it"]=this["webpackJsonpname-it"]||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(48),r=a.n(c),i=a(17),u=a(18),h=a(20),d=a(19),o=(a(53),a(0)),l=function(e){return Object(o.jsxs)("div",{className:"head-container",children:[Object(o.jsx)("img",{src:"https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png",className:"head-image ".concat(e.searchText?"head-image-contracted":"head-image-expanded"),alt:"headreImage"}),Object(o.jsx)("h1",{className:"head-text ".concat(e.searchText?"head-text-contracted":"head-text-expanded"),children:e.headerText}),Object(o.jsx)("p",{className:"head-line",children:"Let's name your silly startup idea!"})]})},j=(a(55),a(56),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{className:"search-container",children:Object(o.jsx)("input",{placeholder:"Type keywords",type:"text",className:"search-input",onChange:function(t){return e.props.handleInputChange(t.target.value)}})})}}]),a}(s.a.Component)),m=(a(57),function(e){return Object(o.jsx)("a",{href:"".concat("https://www.namecheap.com/domains/registration/results/?domain=%27%3B").concat(e.suggestedName),target:"_blank",children:Object(o.jsx)("div",{className:"result-name-card",children:Object(o.jsx)("p",{className:"result-name",children:e.suggestedName})})})}),g=(a(58),function(e){return Object(o.jsx)("div",{className:"result-container",children:e.suggestedNames.map((function(e){return Object(o.jsx)(m,{suggestedName:e},e)}))})}),p=a(59),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={headerText:"Name It!",searchText:void 0,suggestedNames:[]},e.handleInputChange=function(t){if(e.setState((function(){return{searchText:t,suggestedNames:[]}})),t.length>0){var a=p(t),n=[];a.forEach((function(e){n.includes(e)||n.push(e)})),e.setState((function(){return{suggestedNames:n}}))}},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{headerText:this.state.headerText,searchText:this.state.searchText}),Object(o.jsx)(j,{handleInputChange:this.handleInputChange}),Object(o.jsx)(g,{suggestedNames:this.state.suggestedNames})]})}}]),a}(s.a.Component);r.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){}},[[171,1,2]]]);
//# sourceMappingURL=main.092b396d.chunk.js.map