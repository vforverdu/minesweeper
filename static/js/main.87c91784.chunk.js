(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r,c,l=n(0),i=n.n(l),o=n(6),s=n.n(o),u=n(1),f=(n(13),n(4));!function(e){e[e.none=0]="none",e[e.one=1]="one",e[e.two=2]="two",e[e.three=3]="three",e[e.four=4]="four",e[e.five=5]="five",e[e.six=6]="six",e[e.seven=7]="seven",e[e.eight=8]="eight",e[e.mine=9]="mine"}(a||(a={})),function(e){e.smile="\ud83d\ude01",e.lost="\ud83d\ude2d",e.won="\ud83d\ude0e"}(r||(r={})),function(e){e[e.hidden=0]="hidden",e[e.visible=1]="visible",e[e.flagged=2]="flagged"}(c||(c={}));var v=function(){for(var e=[],t=0;t<9;t++){e.push([]);for(var n=0;n<9;n++)e[t].push({value:a.none,state:c.hidden})}for(var r=0;r<10;){var l=Math.floor(9*Math.random()),i=Math.floor(9*Math.random());e[l][i].value!==a.mine&&(e[l][i].value=a.mine,r++)}for(var o=0;o<9;o++)for(var s=0;s<9;s++){var u,v=0,d=m(o,s),b=Object(f.a)(d);try{for(b.s();!(u=b.n()).done;){var h=u.value;e[h.row][h.col].value===a.mine&&v++}}catch(p){b.e(p)}finally{b.f()}e[o][s].value!==a.mine&&(e[o][s].value=v)}return e},m=function(e,t){for(var n=[],a=e-1;a<=e+1;a++)for(var r=t-1;r<=t+1;r++)a>=0&&a<9&&r>=0&&r<9&&n.push({row:a,col:r});return n},d=function(e,t,n){for(var r=[],l=t-1;l<=t+1;l++)for(var i=n-1;i<=n+1;i++)l>=0&&l<9&&i>=0&&i<9&&e[l][i].state===c.hidden&&e[l][i].value!==a.mine&&r.push({row:l,col:i});return r},b=(n(14),n(7)),h=(n(15),i.a.createContext({})),p=function(e){var t=e.state,n=e.value,o=e.row,s=e.col,u=Object(l.useContext)(h),v=u.start,m=u.setStart,p=u.end,E=u.setEnd,j=u.cells,O=u.setCells,g=u.mines,w=u.setMines,C=u.setFace,S=function(){for(var e=!0,t=0;t<9;t++){for(var n=0;n<9;n++)if(j[t][n].state===c.hidden){e=!1;break}if(!e)break}e&&(m(!1),C(r.won),E(!0))},y=t===c.visible?"visible":"",x="value-".concat(n);return i.a.createElement("div",{className:"Button ".concat(y," ").concat(x),onClick:function(e,t){return function(n){n.preventDefault();var l=Object(b.a)(j);if(!p){if(l[e][t].state!==c.hidden)return;if(v||m(!0),l[e][t].value===a.mine){for(var i=0;i<9;i++)for(var o=0;o<9;o++)l[i][o].state=c.visible;O(l),C(r.lost),m(!1),E(!0)}else l[e][t].state=c.visible,l[e][t].value===a.none?O(function e(t,n,r){if(t[n][r].value===a.none){var l,i=d(t,n,r),o=Object(f.a)(i);try{for(o.s();!(l=o.n()).done;){var s=l.value;t[s.row][s.col].state=c.visible}}catch(b){o.e(b)}finally{o.f()}var u,v=Object(f.a)(i);try{for(v.s();!(u=v.n()).done;){var m=u.value;e(t,m.row,m.col)}}catch(b){v.e(b)}finally{v.f()}}return t}(l,e,t)):O(l),S()}}}(o,s),onContextMenu:function(e,t){return function(n){n.preventDefault(),v&&0!==g&&(j[e][t].state===c.hidden?(j[e][t].state=c.flagged,O(j),w(g-1)):j[e][t].state===c.flagged&&(j[e][t].state=c.hidden,O(j),w(g+1)),S())}}(o,s)},t===c.visible?n===a.mine?i.a.createElement("span",{role:"img","aria-label":"face"},"\ud83d\udca3"):n===a.none?null:n:t===c.flagged?i.a.createElement("span",{role:"img","aria-label":"face"},"\ud83d\udea9"):null)},E=function(){var e=Object(l.useContext)(h).cells;return i.a.createElement("div",{className:"Body"},e.map((function(e,t){return e.map((function(e,n){return i.a.createElement(p,{key:"".concat(t,"-").concat(n),state:e.state,value:e.value,row:t,col:n})}))})))},j=(n(16),function(){var e=Object(l.useContext)(h),t=e.setStart,n=e.setEnd,a=e.setCells,c=e.face,o=e.setFace,s=e.setTime,u=e.setMines;return i.a.createElement("div",{className:"Face",onClick:function(){a(v()),t(!1),n(!1),u(10),o(r.smile),s(0)}},i.a.createElement("span",{role:"img","aria-label":"face"},c))}),O=(n(17),function(e){var t=e.value;return i.a.createElement("div",{className:"NumberDisplay"},t.toString().padStart(3,"0"))}),g=function(){var e=Object(l.useContext)(h),t=e.start,n=e.time,a=e.setTime;return Object(l.useEffect)((function(){if(t){var e=setInterval((function(){return a(Math.min(n+1,999))}),1e3);return function(){return clearInterval(e)}}}),[t,n,a]),i.a.createElement(O,{value:n})},w=function(){var e=Object(l.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(!1),o=Object(u.a)(c,2),s=o[0],f=o[1],m=Object(l.useState)(v()),d=Object(u.a)(m,2),b=d[0],p=d[1],w=Object(l.useState)(10),C=Object(u.a)(w,2),S=C[0],y=C[1],x=Object(l.useState)(r.smile),M=Object(u.a)(x,2),k=M[0],N=M[1],F=Object(l.useState)(0),B=Object(u.a)(F,2),D={start:n,setStart:a,end:s,setEnd:f,cells:b,setCells:p,mines:S,setMines:y,face:k,setFace:N,time:B[0],setTime:B[1]};return i.a.createElement("div",{className:"App"},i.a.createElement(h.Provider,{value:D},i.a.createElement("div",{className:"Header"},i.a.createElement(O,{value:D.mines}),i.a.createElement(j,null),i.a.createElement(g,null)),i.a.createElement(E,null)))};n(18);s.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.87c91784.chunk.js.map