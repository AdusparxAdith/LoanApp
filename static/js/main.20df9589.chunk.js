(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),u=t.n(r),o=function(e){var a=e.range,t=a.minValue,r=a.maxValue,u=e.value,o=e.updateValue,c=u;isNaN(c)&&(c=0);var i=function(e){o(parseInt(e.target.value))};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"inputSection"},l.a.createElement("div",{className:"indicators"},l.a.createElement("div",null,t),l.a.createElement("div",null,r)),l.a.createElement("input",{type:"range",min:t,max:r,value:c,className:"slider",id:"myRange",onChange:function(e){return i(e)}}),l.a.createElement("input",{className:"inputBox",value:c,onChange:function(e){return i(e)}})))},c=t(2),i=t.n(c),s=t(13),m=t(14),d=t(15),p=t(18),f=t(16),v=t(19),E=t(17),V=t.n(E),h=Object(n.createContext)({loanValue:0,durationValue:0,result:null,updateLoanValue:function(){},updateDurationValue:function(){}}),g=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(l)))).updateLoanValue=function(e){t.setState({loanValue:e}),t.makeApiCall(t.state.durationValue,e)},t.updateDurationValue=function(e){t.setState({durationValue:e}),t.makeApiCall(e,t.state.loanValue)},t.makeApiCall=function(){var e=Object(s.a)(i.a.mark(function e(a,n){var l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://ftl-frontend-test.herokuapp.com/interest?amount=".concat(n,"&numMonths=").concat(a));case 2:l=e.sent,t.setState({result:l.data});case 4:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t.state={loanValue:500,updateLoanValue:t.updateLoanValue,durationValue:6,result:{},updateDurationValue:t.updateDurationValue},t}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),a}(l.a.Component),w=h.Consumer,N=function(e){e.convert;var a={minValue:500,maxValue:5e3},t={minValue:6,maxValue:24};return l.a.createElement(w,null,function(e){var n=e.loanValue,r=e.updateLoanValue,u=e.durationValue,c=e.updateDurationValue;return l.a.createElement("div",{className:"footerBoard"},l.a.createElement("div",{className:"footerSection"},l.a.createElement("p",null,"How much do you want to loan?"),l.a.createElement(o,{range:a,value:n,updateValue:r}),l.a.createElement("p",null,"How long will you need?"),l.a.createElement(o,{range:t,value:u,updateValue:c})))})},y=function(){return l.a.createElement(w,null,function(e){var a=e.result,t=a.interestRate,r=a.monthlyPayment,u=a.numPayments;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"borderClass"}),l.a.createElement("div",{className:"dashBoard"},r?l.a.createElement("p",{className:"focusContent"},"You have to pay"," ",l.a.createElement("span",{className:"highlight ".concat(t>.4?"loss":"")},"$",r?r.amount:null)," ","per month for ",u," months, at an interest rate of"," ",t):l.a.createElement("p",{className:"focusContent"},function(e){var a=e.getHours();return a>16?"Good Evening":a>12?"Good Afternoon":"Good Morning"}(new Date),"!",l.a.createElement("br",null),l.a.createElement("span",{className:"highlight"}," Slide to begin")," ")),l.a.createElement(N,null))})};t(44);var b=function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(g,null,l.a.createElement(y,null)))};u.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.20df9589.chunk.js.map