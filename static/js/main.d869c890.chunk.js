(this.webpackJsonpbancars=this.webpackJsonpbancars||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),s=n.n(i),c=n(4),r=n.n(c),o=(n(15),n(16),n(17),n(18),n(5)),l=n(6),h=n(9),u=n(8),j=n(2),d=n(7),b=(n(19),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).targetDate=j.DateTime.fromObject({year:2021,month:12,day:31}),a.targetCount=2993839,a.startDate=j.DateTime.fromObject({year:2019,month:12,day:31}),a.startCount=2805839,a.state={},a.style="font-family: 'Roboto';",a}return Object(l.a)(n,[{key:"tick",value:function(){console.log("tick");var t=j.Interval.fromDateTimes(this.startDate,this.targetDate).count("seconds"),e=this.targetCount-this.startCount,n=j.Interval.fromDateTimes(this.startDate,j.DateTime.local()).count("seconds");this.setState({barWidth:n/t*e%1*100,count:this.startCount+Math.floor(n/t*e)})}},{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"There are"}),Object(a.jsxs)("svg",{viewBox:"0 0 100 25",children:[Object(a.jsx)("defs",{children:Object(a.jsx)("style",{type:"text/css",children:"@import url('https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic');"})}),Object(a.jsx)("text",{x:"5",y:"17",style:{fontFamily:"Yusei Magic",fontSize:"20px"},children:Object(a.jsx)(d.a,{value:this.state.count,displayType:"text",thousandSeparator:!0,renderText:function(t){return t}})}),Object(a.jsx)("rect",{x:100-this.state.barWidth,y:"20",width:this.state.barWidth,height:"2"}),Object(a.jsx)("text",{x:100-this.state.barWidth-2,y:"22",style:{fontSize:"3px"},children:"\ud83d\ude97"})]}),Object(a.jsx)("h2",{children:"cars too many on irish roads, #bancars"})]})}}]),n}(s.a.Component));var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(b,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.d869c890.chunk.js.map