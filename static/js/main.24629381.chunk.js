(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={statictics__item:"Statistics_statictics__item__1DMW8",notification:"Statistics_notification__AAgtX"}},,,function(t,e,n){t.exports={button:"FeedbackOptions_button__2FBFe"}},,function(t,e,n){t.exports={section:"Section_section__50f_T",container:"Section_container__1Ltva"}},,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),i=n(7),o=n.n(i),s=(n(16),n(2)),r=n(8),d=n(9),u=n(11),b=n(10),l=n(4),j=n.n(l),f=n(0),h=function(t){t.bad,t.neutral,t.good;var e=t.onFeedbackButton;return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{id:"good",className:j.a.button,onClick:function(){return e("good")},children:"Good"}),Object(f.jsx)("button",{id:"neutral",className:j.a.button,onClick:function(){return e("neutral")},children:"Neutral"}),Object(f.jsx)("button",{id:"bad",className:j.a.button,onClick:function(){return e("bad")},children:"Bad"})]})},O=n(1),g=n.n(O),_=function(t){var e=t.message;return Object(f.jsx)("p",{className:g.a.notification,children:e})},v=n(6),x=n.n(v),m=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("div",{className:x.a.section+" "+x.a.container,children:[e&&Object(f.jsxs)("h2",{children:[" ",e]}),n]})},p=function(t){var e=t.bad,n=t.neutral,a=t.good,c=t.total,i=t.positivePercentage;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:g.a.statictics__item,children:["Good: ",a]}),Object(f.jsxs)("p",{className:g.a.statictics__item,children:["Neutral: ",n]}),Object(f.jsxs)("p",{className:g.a.statictics__item,children:["Bad: ",e]}),Object(f.jsxs)("p",{className:g.a.statictics__item,children:["Total: ",c]}),Object(f.jsxs)("p",{className:g.a.statictics__item,children:["Positive feedback: ",i,"%"," "]})]})},k=(n(18),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){return"good"===e?t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{good:t.good+1})})):"neutral"===e?t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{neutral:t.neutral+1})})):"bad"===e?t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{bad:t.bad+1})})):void 0},t.countTotalFeedback=function(){var e=t.state,n=e.good,a=e.neutral;return n+e.bad+a},t.countPositiveFeedbackPercentage=function(){var e=t.state,n=e.good,a=n+e.neutral+e.bad;return 0===a?0:Math.round(n/a*100)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=e+n+a;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(m,{title:"Please leave feedback",children:Object(f.jsx)(h,{good:e,neutral:n,bad:a,onFeedbackButton:this.onLeaveFeedback})}),Object(f.jsx)(m,{title:"Statistics",children:0===c?Object(f.jsx)(_,{message:"No feedback given"}):Object(f.jsx)(p,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component)),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),F()}],[[19,1,2]]]);
//# sourceMappingURL=main.24629381.chunk.js.map