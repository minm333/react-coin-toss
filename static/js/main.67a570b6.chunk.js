(this["webpackJsonpcoin-toss"]=this["webpackJsonpcoin-toss"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var s=i(0),n=i(1),c=i.n(n),a=i(4),l=i.n(a),o=(i(14),i(15),i(5)),r=i(6),d=i(2),u=i(8),h=i(7),j=(i(16),i(17),function(t){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:t.flip,src:t.coin,alt:""})})}),p=i.p+"static/media/heads.b545d704.png",b=i.p+"static/media/tails.392b7ea2.png",f=function(t){Object(u.a)(i,t);var e=Object(h.a)(i);function i(t){var s;return Object(o.a)(this,i),(s=e.call(this,t)).state={currentSide:p,totalFlips:0,headsCount:0,tailsCount:0,flip:!1},s.clickHandler=s.clickHandler.bind(Object(d.a)(s)),s}return Object(r.a)(i,[{key:"clickHandler",value:function(){var t=this;this.setState({flip:!0},(function(){setTimeout((function(){t.setState({flip:!1});var e=t.props.coinSide[Math.floor(Math.random()*t.props.coinSide.length)];t.setState((function(t){return e===p?{totalFlips:t.totalFlips+1,headsCount:t.headsCount+1}:e===b?{totalFlips:t.totalFlips+1,tailsCount:t.tailsCount+1}:void 0})),t.setState({currentSide:e})}),1500)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"CoinToss",children:[Object(s.jsx)(j,{flip:this.state.flip?"flip":"",coin:this.state.currentSide}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{style:{color:"green"},children:["Current Side:"," ",Object(s.jsx)("span",{style:{color:"Blue"},children:this.state.currentSide===p?"Heads":"Tails"})]}),Object(s.jsxs)("h4",{children:["Total Flips: ",this.state.totalFlips]}),Object(s.jsxs)("h4",{children:["Heads: ",this.state.headsCount]}),Object(s.jsxs)("h4",{children:["Tails: ",this.state.tailsCount]})]}),Object(s.jsx)("button",{disabled:this.state.flip,onClick:this.clickHandler,children:"Flip Coin"})]})}}]),i}(n.Component);f.defaultProps={coinSide:[p,b]};var O=f,x=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(O,{})})};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.67a570b6.chunk.js.map