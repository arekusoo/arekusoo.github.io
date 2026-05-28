(function(m,O){"use strict";var v=document.createElement("style");v.textContent=`*{margin:0;padding:0;box-sizing:border-box}html,body,#root{height:100%;width:100%}body{overflow-x:hidden}
/*$vite$:1*/`,document.head.appendChild(v);var k={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=m,E=Symbol.for("react.element"),P=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,_=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function y(i,r,p){var n,l={},c=null,W=null;p!==void 0&&(c=""+p),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(W=r.ref);for(n in r)z.call(r,n)&&!C.hasOwnProperty(n)&&(l[n]=r[n]);if(i&&i.defaultProps)for(n in r=i.defaultProps,r)l[n]===void 0&&(l[n]=r[n]);return{$$typeof:E,type:i,key:c,ref:W,props:l,_owner:_.current}}g.Fragment=P,g.jsx=y,g.jsxs=y,k.exports=g;var e=k.exports,j,w=O;j=w.createRoot,w.hydrateRoot;const N="egg-fonts",u=[{id:"soft",label:"Mole",minutes:4,desc:"gema escorrendo"},{id:"medium",label:"Medio",minutes:7,desc:"gema cremosa"},{id:"hard",label:"Duro",minutes:10,desc:"gema firme"}];function R(){m.useEffect(()=>{if(document.getElementById(N))return;const i=document.createElement("link");i.id=N,i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap",document.head.appendChild(i)},[])}function B(){try{const i=window.AudioContext||window.webkitAudioContext,r=new i;[{f:880,t:0,d:.12},{f:880,t:.18,d:.12},{f:1175,t:.36,d:.22}].forEach(({f:n,t:l,d:c})=>{const W=r.createOscillator(),d=r.createGain();W.type="square",W.frequency.value=n;const f=r.currentTime+l;d.gain.setValueAtTime(1e-4,f),d.gain.linearRampToValueAtTime(.18,f+.01),d.gain.setValueAtTime(.18,f+c-.02),d.gain.exponentialRampToValueAtTime(1e-4,f+c),W.connect(d),d.connect(r.destination),W.start(f),W.stop(f+c+.02)}),setTimeout(()=>r.close(),1200)}catch{}}function I(i){const r=Math.floor(i/60),p=i%60;return`${String(r).padStart(2,"00")}:${String(p).padStart(2,"00")}`}const Y={o:null,C:"#6b3d14",H:"#ffffff",W:"#fff6e0",S:"#f7c873",L:"#7a4a1e",Y:"#ffcf3f",y:"#f0a81e",B:"#ffb59e",T:"#d9785a",Z:"#bfe3ff"};function V(i,r){const n=["oooooooooWWWWWWoooooooo","ooooooWWWWWWWWWWWWooooo","ooooWWWWWWWWWWWWWWWWooo","oooWWWWWWWWWWWWWWWWWWoo","oooWWWWWWWWWWWWWWWWWWoo","ooWWWWWWWWWWWWWWWWWWWWo","ooWWWWWWWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWWWWWWWWW","oWWWWWWWWWWWWWWWWWWWWWW","oWWWWWWWWWWWWWWWWWWWWWW","WWWWWWWWWWWWWWWWWWWWWWW","WWWWWWWWWWWWWWWWWWWWWWW","WWWWWWWWWWWWWWWWWWWWWWW","WWWWWWWWWWWWWWWWWWWWWWW","WWWWWWWWWWWWWWWWWWWWWWW","oWWWWWWWWWWWWWWWWWWWWWW","oWWWWWWWWWWWWWWWWWWWWWW","oWWWWWWWWWWWWWWWWWWWWWW","ooWWWWWWWWWWWWWWWWWWWWo","ooWWWWWWWWWWWWWWWWWWWWo","oooWWWWWWWWWWWWWWWWWWoo","ooooWWWWWWWWWWWWWWWWooo","oooooWWWWWWWWWWWWWWoooo","ooooooooWWWWWWWWWoooooo"].map(a=>a.split("")),l=n.length,c=Math.round(r*l);for(let a=0;a<l;a++)if(a>=l-c)for(let s=0;s<n[a].length;s++)n[a][s]==="W"&&(n[a][s]="S");const W=n.map(a=>a.slice()),d=(a,s)=>W[s]&&W[s][a]!==void 0?W[s][a]:"o",f=a=>a==="W"||a==="S";for(let a=0;a<l;a++)for(let s=0;s<n[a].length;s++){if(!f(W[a][s]))continue;(!f(d(s-1,a))||!f(d(s+1,a))||!f(d(s,a-1))||!f(d(s,a+1)))&&(n[a][s]="C")}[[6,3],[7,3],[5,4],[6,4]].forEach(([a,s])=>{n[s]&&n[s][a]==="W"&&(n[s][a]="H")});const t=(a,s,b)=>{n[s]&&(n[s][a]==="W"||n[s][a]==="S"||n[s][a]==="H")&&(n[s][a]=b)},o=11;return i==="done"?(t(o-5,9,"L"),t(o-6,10,"L"),t(o-4,10,"L"),t(o+5,9,"L"),t(o+4,10,"L"),t(o+6,10,"L"),t(o-7,12,"B"),t(o-6,12,"B"),t(o+6,12,"B"),t(o+7,12,"B"),t(o-3,13,"L"),t(o+3,13,"L"),t(o-2,14,"T"),t(o-1,14,"T"),t(o,14,"T"),t(o+1,14,"T"),t(o+2,14,"T"),t(o-1,15,"T"),t(o,15,"T"),t(o+1,15,"T")):i==="cooking"?(t(o-6,10,"L"),t(o-5,11,"L"),t(o-4,10,"L"),t(o+4,10,"L"),t(o+5,11,"L"),t(o+6,10,"L"),t(o-1,13,"L"),t(o,13,"L"),t(o+1,13,"L"),t(o-1,14,"T"),t(o,14,"T"),t(o+1,14,"T"),t(o,15,"L"),t(o-7,12,"B"),t(o-6,12,"B"),t(o+6,12,"B"),t(o+7,12,"B"),r>.5&&(t(o+8,6,"Z"),t(o+8,7,"Z"))):(t(o-5,10,"L"),t(o-5,11,"L"),t(o+5,10,"L"),t(o+5,11,"L"),t(o-7,12,"B"),t(o-6,12,"B"),t(o+6,12,"B"),t(o+7,12,"B"),t(o-3,13,"L"),t(o-2,14,"L"),t(o-1,14,"L"),t(o,14,"L"),t(o+1,14,"L"),t(o+2,14,"L"),t(o+3,13,"L")),n}function L({state:i,progress:r,scale:p=12}){const n=V(i,r),l=n[0].length,c=n.length;return e.jsxs("div",{className:`egg ${i}`,children:[e.jsx("svg",{width:l*p,height:c*p,viewBox:`0 0 ${l} ${c}`,style:{imageRendering:"pixelated",shapeRendering:"crispEdges"},"aria-hidden":"true",children:n.map((W,d)=>W.map((f,t)=>f!=="o"?e.jsx("rect",{x:t,y:d,width:"1.02",height:"1.02",fill:Y[f]},`${t}-${d}`):null))}),i==="cooking"&&e.jsxs("div",{className:"steam",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}function h({children:i,onClick:r,primary:p}){return e.jsx("button",{className:`w97btn ${p?"primary":""}`,onClick:r,children:i})}function A(){R();const[i,r]=m.useState(u[0]),[p,n]=m.useState(u[0].minutes*60),[l,c]=m.useState(u[0].minutes*60),[W,d]=m.useState(!1),[f,t]=m.useState(!1),[o,a]=m.useState(!1),s=m.useRef(null),b=f?"done":W?"cooking":"idle",G=p>0?1-l/p:0,M=x=>{r(x),d(!1),t(!1),a(!1),n(x.minutes*60),c(x.minutes*60)},T=m.useCallback(()=>{d(!1),t(!0),a(!0),B(),"Notification"in window&&Notification.permission==="granted"&&new Notification("EGG.EXE",{body:`Ovo ${i.label} pronto!`})},[i]);m.useEffect(()=>{if(W)return s.current=setInterval(()=>{c(x=>x<=1?(clearInterval(s.current),T(),0):x-1)},1e3),()=>clearInterval(s.current)},[W,T]);const F=()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission(),l===0&&c(p),t(!1),a(!1),d(!0)},X=()=>d(!1),H=()=>{d(!1),t(!1),a(!1),c(p)};return e.jsxs("div",{className:`desktop ${W?"busy":""}`,children:[e.jsx("style",{children:D}),e.jsx("span",{className:"deco d1",children:"♡"}),e.jsx("span",{className:"deco d2",children:"★"}),e.jsx("span",{className:"deco d3",children:"✿"}),e.jsx("span",{className:"deco d4",children:"♡"}),e.jsx("span",{className:"deco d5",children:"✦"}),e.jsx("span",{className:"deco d6",children:"ᵕ̈"}),e.jsxs("div",{className:"window main",children:[e.jsxs("div",{className:"titlebar",children:[e.jsx("span",{className:"title",children:"🥚 egg.exe ♡"}),e.jsxs("div",{className:"tbtns",children:[e.jsx("button",{className:"tb",children:"_"}),e.jsx("button",{className:"tb",children:"□"}),e.jsx("button",{className:"tb x",children:"✕"})]})]}),e.jsxs("div",{className:"window-body",children:[e.jsxs("div",{className:"cute-banner",children:[e.jsx("span",{className:"ear",children:"✦"}),e.jsx("span",{className:"banner-text",children:"cozedor de ovinhos"}),e.jsx("span",{className:"ear",children:"✦"})]}),e.jsxs("div",{className:"inset egg-stage",children:[e.jsx("span",{className:"sparkle s1",children:"✦"}),e.jsx("span",{className:"sparkle s2",children:"✧"}),e.jsx("span",{className:"sparkle s3",children:"･ﾟ"}),e.jsx(L,{state:b,progress:G})]}),e.jsx("div",{className:"lcd inset",children:f?"PRONTO!":I(l)}),e.jsxs("fieldset",{className:"group",children:[e.jsx("legend",{children:"Ponto de cozimento"}),e.jsx("div",{className:"radios",children:u.map(x=>e.jsxs("label",{className:"radio",children:[e.jsx("input",{type:"radio",name:"cook",checked:i.id===x.id,onChange:()=>M(x)}),e.jsxs("span",{className:"r-label",children:[x.label," ",e.jsxs("em",{children:["(",x.minutes," min — ",x.desc,")"]})]})]},x.id))})]}),e.jsxs("div",{className:"actions",children:[W?e.jsx(h,{onClick:X,children:"❚❚ Pausar"}):e.jsxs(h,{primary:!0,onClick:F,children:["▶ ",l<p&&l>0?"Continuar":"Cozinhar"]}),e.jsx(h,{onClick:H,children:"↺ Reiniciar"})]})]}),e.jsxs("div",{className:"statusbar",children:[e.jsx("span",{className:"cell",children:W?"Cozinhando...":f?"Concluido":"Pronto"}),e.jsx("span",{className:"cell grow",children:"C:\\\\COZINHA\\\\EGG.EXE"})]})]}),o&&e.jsxs("div",{className:"dialog window",children:[e.jsxs("div",{className:"titlebar",children:[e.jsx("span",{className:"title",children:"EGG.EXE"}),e.jsx("div",{className:"tbtns",children:e.jsx("button",{className:"tb x",onClick:()=>a(!1),children:"✕"})})]}),e.jsxs("div",{className:"dialog-body",children:[e.jsxs("div",{className:"dialog-row",children:[e.jsx("div",{className:"dlg-egg",children:e.jsx(L,{state:"done",progress:1,scale:7})}),e.jsxs("p",{children:["Seu ovo ",e.jsx("b",{children:i.label})," está pronto!",e.jsx("br",{}),"Bom apetite. 🍴"]})]}),e.jsx("div",{className:"dialog-actions",children:e.jsx(h,{primary:!0,onClick:()=>a(!1),children:"OK"})})]})]})]})}const D=`
.desktop{
  /* kawaii 97 — amarelo/laranja pastel + contraste marrom */
  --face:#fff3d6;       /* superfície da janela (creme) */
  --face-lo:#f3d9a4;    /* sombra bevel */
  --face-hi:#fffaf0;    /* luz bevel */
  --ink:#7a4a1e;        /* marrom — texto/linhas/bevel escuro */
  --ink-soft:#a9744a;   /* marrom suave */
  --bar1:#ffba6b;       /* barra título: laranja pastel */
  --bar2:#ffd79a;       /* barra título: amarelo pastel */
  --accent:#ff9e5e;     /* laranja destaque */
  --lcd-bg:#5a3a16;     /* visor marrom escuro */
  --lcd-on:#ffd87a;     /* dígitos amarelo quente */
  --desk:#ffe6a8;       /* desktop amarelo pastel */
  font-family:'VT323',monospace; min-height:100vh; width:100%;
  display:flex; align-items:center; justify-content:center; padding:24px;
  background:
    radial-gradient(circle at 18% 20%, #fff6df 0%, transparent 45%),
    radial-gradient(circle at 85% 80%, #ffd9a0 0%, transparent 50%),
    repeating-linear-gradient(45deg, #ffe8b0 0 8px, #ffe2a2 8px 16px),
    var(--desk);
  position:relative; overflow:hidden;
}
.desktop *{box-sizing:border-box;}
.desktop.busy, .desktop.busy *{cursor:wait;}

/* janela base bevel */
.window{
  background:var(--face);
  border:2px solid;
  border-color:var(--face-hi) var(--ink-soft) var(--ink-soft) var(--face-hi);
  border-radius:6px;
  box-shadow:1px 1px 0 var(--ink), inset 1px 1px 0 #fff,
             6px 8px 0 rgba(122,74,30,.14), 0 0 0 2px rgba(255,255,255,.35);
  animation:openWin .18s steps(3,end) both;
}
@keyframes openWin{from{transform:scale(.6);opacity:.2}to{transform:scale(1);opacity:1}}

.main{width:100%;max-width:380px;}

.titlebar{
  display:flex;align-items:center;justify-content:space-between;
  background:linear-gradient(90deg,var(--bar1),var(--bar2));
  color:var(--ink);padding:3px 4px;margin:2px;
  border-radius:4px;
  font-family:'Press Start 2P',monospace;font-size:9px;letter-spacing:.5px;
  text-shadow:0 1px 0 rgba(255,255,255,.5);
}
.title{padding:2px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.tbtns{display:flex;gap:2px;}
.tb{
  font-family:'Press Start 2P';font-size:8px;width:20px;height:18px;line-height:1;
  background:var(--face);border:2px solid;
  border-color:var(--face-hi) var(--ink-soft) var(--ink-soft) var(--face-hi);
  color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;
}
.tb:active{border-color:var(--ink-soft) var(--face-hi) var(--face-hi) var(--ink-soft);}
.tb.x{background:#ffd1c2;}

/* decorações flutuando no desktop */
.deco{position:absolute;font-family:'VT323';pointer-events:none;user-select:none;
  color:#ff9e5e;opacity:.7;text-shadow:0 1px 0 rgba(255,255,255,.6);
  animation:floaty 4s steps(4,end) infinite;}
.d1{top:12%;left:10%;font-size:34px;color:#ff8fab;animation-delay:0s;}
.d2{top:20%;right:12%;font-size:26px;color:#ffc24b;animation-delay:.8s;}
.d3{bottom:16%;left:14%;font-size:30px;color:#ff9e5e;animation-delay:1.4s;}
.d4{bottom:22%;right:16%;font-size:24px;color:#ff8fab;animation-delay:2s;}
.d5{top:46%;left:6%;font-size:22px;color:#ffd76b;animation-delay:2.6s;}
.d6{top:60%;right:8%;font-size:30px;color:#c98a5a;animation-delay:1.1s;}
@keyframes floaty{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-12px) rotate(4deg)}}

/* banner fofo abaixo da titlebar */
.cute-banner{
  display:flex;align-items:center;justify-content:center;gap:10px;
  font-family:'Press Start 2P';font-size:9px;color:var(--ink);
  padding:7px 0 9px;letter-spacing:.5px;text-transform:lowercase;
}
.cute-banner .ear{color:var(--accent);font-family:'VT323';font-size:18px;animation:twinkle 1.6s steps(3,end) infinite;}
.banner-text{text-shadow:0 1px 0 rgba(255,255,255,.7);}

.window-body{padding:4px 12px 12px;}

.inset{
  background:#fffdf7;
  border:2px solid;
  border-color:var(--ink-soft) var(--face-hi) var(--face-hi) var(--ink-soft);
}

.egg-stage{
  display:flex;align-items:center;justify-content:center;
  padding:18px;margin-bottom:10px;position:relative;
  background:
    radial-gradient(circle at 50% 120%, #fff0cf 0%, transparent 70%),
    repeating-linear-gradient(45deg,#fff8e8 0 6px,#fffdf7 6px 12px);
}
.egg{position:relative;}

.sparkle{position:absolute;color:#ffb84d;font-family:'VT323';pointer-events:none;
  text-shadow:0 0 4px rgba(255,200,120,.9);animation:twinkle 1.8s steps(3,end) infinite;}
.sparkle.s1{top:14px;left:22px;font-size:20px;animation-delay:0s;}
.sparkle.s2{bottom:18px;right:26px;font-size:26px;color:#ff9e5e;animation-delay:.6s;}
.sparkle.s3{top:24px;right:34px;font-size:16px;color:#ffcf6b;animation-delay:1.1s;}
@keyframes twinkle{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}

.egg.idle{animation:bob 2.4s steps(2,end) infinite;}
.egg.cooking{animation:shake .3s steps(2,end) infinite;}
.egg.done{animation:hop .5s steps(3,end) infinite;}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes shake{0%,100%{transform:translateX(-2px) rotate(-2deg)}50%{transform:translateX(2px) rotate(2deg)}}
@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

.steam{position:absolute;top:-2px;left:50%;transform:translateX(-50%);display:flex;gap:10px;}
.steam span{width:5px;height:22px;background:rgba(255,200,140,.85);animation:steam 1.5s steps(3,end) infinite;opacity:0;}
.steam span:nth-child(2){animation-delay:.4s;}
.steam span:nth-child(3){animation-delay:.8s;}
@keyframes steam{0%{opacity:0;transform:translateY(6px)}40%{opacity:.7}100%{opacity:0;transform:translateY(-20px)}}

.lcd{
  font-family:'Press Start 2P';font-size:30px;text-align:center;
  color:var(--lcd-on);background:var(--lcd-bg);padding:14px 0;margin-bottom:12px;
  letter-spacing:3px;text-shadow:0 0 6px rgba(255,216,122,.8);
  border-color:var(--ink-soft) var(--face-hi) var(--face-hi) var(--ink-soft);
}

.group{border:1px solid var(--face-lo);box-shadow:inset 1px 1px 0 #fff;padding:8px 10px 10px;margin-bottom:12px;}
.group legend{font-size:18px;padding:0 4px;color:var(--ink);}
.radios{display:flex;flex-direction:column;gap:5px;}
.radio{display:flex;align-items:center;gap:8px;font-size:20px;cursor:pointer;color:var(--ink);}
.radio input{accent-color:var(--accent);width:14px;height:14px;cursor:pointer;}
.r-label em{font-size:16px;color:var(--ink-soft);font-style:normal;}

.actions{display:flex;gap:8px;}
.w97btn{
  flex:1;font-family:'VT323';font-size:22px;padding:8px;cursor:pointer;
  background:var(--face);border:2px solid;
  border-color:var(--face-hi) var(--ink-soft) var(--ink-soft) var(--face-hi);
  box-shadow:inset 1px 1px 0 #fff,inset -1px -1px 0 var(--face-lo);
  color:var(--ink);transition:none;
}
.w97btn:active{
  border-color:var(--ink-soft) var(--face-hi) var(--face-hi) var(--ink-soft);
  box-shadow:inset 1px 1px 0 var(--face-lo);
  padding:9px 8px 7px 9px;
}
.w97btn.primary{font-weight:bold;background:linear-gradient(#ffd79a,#ffba6b);outline:1px dotted var(--ink);outline-offset:-5px;}
.w97btn:focus{outline:1px dotted var(--ink);outline-offset:-5px;}

.statusbar{display:flex;gap:3px;padding:2px 3px 3px;}
.cell{
  font-size:16px;padding:1px 6px;background:var(--face);color:var(--ink);
  border:1px solid;border-color:var(--face-lo) #fff #fff var(--face-lo);
}
.cell.grow{flex:1;}

/* diálogo */
.dialog{
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:300px;z-index:20;animation:dlgPop .15s steps(2,end) both;
}
@keyframes dlgPop{from{transform:translate(-50%,-50%) scale(.7)}to{transform:translate(-50%,-50%) scale(1)}}
.dialog-body{padding:16px 14px 12px;}
.dialog-row{display:flex;align-items:center;gap:14px;margin-bottom:16px;}
.dlg-egg{flex-shrink:0;}
.dialog-body p{font-size:20px;margin:0;line-height:1.3;color:var(--ink);}
.dialog-actions{display:flex;justify-content:center;}
.dialog-actions .w97btn{flex:0 0 90px;}
`;j(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(A,{})}))})(React,ReactDOM);
