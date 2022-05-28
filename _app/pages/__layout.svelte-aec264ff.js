var Qe=Object.defineProperty,Ye=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var $e=Object.getOwnPropertySymbols;var tt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var we=(r,e,t)=>e in r?Qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ee=(r,e)=>{for(var t in e||(e={}))tt.call(e,t)&&we(r,t,e[t]);if($e)for(var t of $e(e))nt.call(e,t)&&we(r,t,e[t]);return r},Ce=(r,e)=>Ye(r,et(e));import{S as V,i as j,s as B,H as rt,l as ee,F as st,G as at,d as y,I as k,E as N,w as D,x as M,y as A,J as lt,q as b,o as I,B as O,K as F,L as ct,e as T,t as ye,c as $,a as w,h as pe,b as p,g as H,C as De,M as it,N as ot,O as ut,v as re,P as ie,n as ae,p as le,Q as me,k as P,m as L,R as q,T as de,U as ge,V as ft,j as ht,W as Me,X as mt,Y as dt,Z as gt,_ as qe,$ as ze,a0 as xe,a1 as Ue}from"../chunks/index-da547f29.js";import{w as be}from"../chunks/index-d889790d.js";import{b as _t,a as vt,c as yt,d as pt,e as bt,f as St,q as kt,g as It,h as Tt,s as $t,i as Ae,I as Ze,L as oe,j as wt}from"../chunks/Link-5e3556e0.js";const Oe=!0,Ne=["light","dark"],Se="(prefers-color-scheme: dark)",ue=(r,e)=>{if(typeof window=="undefined")return;let t;try{t=localStorage.getItem(r)||void 0}catch{}return t||e},Et=()=>{const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(r)},1)}},Pe=r=>(r||(r=window.matchMedia(Se)),r.matches?"dark":"light"),_e=r=>Y.update(e=>Ce(Ee({},e),{theme:r})),Y=be({themes:[],forcedTheme:void 0,theme:void 0,resolvedTheme:void 0,systemTheme:void 0});function Ct(r){let e,t;return{c(){e=new rt,t=ee(),this.h()},l(n){const s=st('[data-svelte="svelte-q8ecyq"]',document.head);e=at(s),t=ee(),s.forEach(y),this.h()},h(){e.a=t},m(n,s){e.m(r[0],document.head),k(document.head,t)},p(n,[s]){s&1&&e.p(n[0])},i:N,o:N,d(n){y(t),n&&e.d()}}}function Dt(r,e,t){let n,s,l,{forcedTheme:a}=e,{storageKey:c}=e,{attribute:i}=e,{enableSystem:u}=e,{defaultTheme:v}=e,{value:m}=e,{attrs:_}=e;const d=(o,f)=>{o=(m==null?void 0:m[o])||o;const h=f?o:`'${o}'`;return i==="class"?`d.add(${h})${`;document.documentElement.style.setProperty('color-scheme', ${h})`}`:`d.setAttribute('${i}', ${h})${`;document.documentElement.style.setProperty('color-scheme', ${h})`}`};return r.$$set=o=>{"forcedTheme"in o&&t(1,a=o.forcedTheme),"storageKey"in o&&t(2,c=o.storageKey),"attribute"in o&&t(3,i=o.attribute),"enableSystem"in o&&t(4,u=o.enableSystem),"defaultTheme"in o&&t(5,v=o.defaultTheme),"value"in o&&t(6,m=o.value),"attrs"in o&&t(7,_=o.attrs)},r.$$.update=()=>{r.$$.dirty&32&&t(9,n=v==="system"),r.$$.dirty&136&&t(8,s=i==="class"?`var d=document.documentElement.classList;${`d.remove(${_.map(o=>`'${o}'`).join(",")})`};`:"var d=document.documentElement;"),r.$$.dirty&886&&t(0,l=`<script>${a?`!function(){${s}${d(a)}}()`:u?`!function(){try {${s}var e=localStorage.getItem('${c}');${n?"":d(v)+";"}if("system"===e||(!e&&${n})){var t="${Se}",m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){ ${m?`var x=${JSON.stringify(m)};`:""}${d(m?"x[e]":"e",!0)}}}catch(e){}}()`:`!function(){try{${s}var e=localStorage.getItem("${c}");if(e){${m?`var x=${JSON.stringify(m)};`:""}${d(m?"x[e]":"e",!0)}}else{${d(v)};}}catch(t){}}();`}<\/script>`)},[l,a,c,i,u,v,m,_,s,n]}class Mt extends V{constructor(e){super();j(this,e,Dt,Ct,B,{forcedTheme:1,storageKey:2,attribute:3,enableSystem:4,defaultTheme:5,value:6,attrs:7})}}function At(r){let e,t,n,s;return e=new Mt({props:{forcedTheme:r[0],storageKey:r[2],attribute:r[4],enableSystem:r[1],defaultTheme:r[3],value:r[5],attrs:r[6]}}),{c(){D(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,a){A(e,l,a),t=!0,n||(s=lt(r[7].call(null,window)),n=!0)},p(l,[a]){const c={};a&1&&(c.forcedTheme=l[0]),a&4&&(c.storageKey=l[2]),a&16&&(c.attribute=l[4]),a&2&&(c.enableSystem=l[1]),a&8&&(c.defaultTheme=l[3]),a&32&&(c.value=l[5]),e.$set(c)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){O(e,l),n=!1,s()}}}function Ot(r,e,t){let n,s,l;F(r,Y,g=>t(13,l=g));let{forcedTheme:a=void 0}=e,{disableTransitionOnChange:c=!1}=e,{enableSystem:i=!0}=e,{enableColorScheme:u=!0}=e,{storageKey:v="theme"}=e,{themes:m=i?["light","dark","system"]:["light","dark"]}=e,{defaultTheme:_=i?"system":"light"}=e,{attribute:d="data-theme"}=e,{value:o=void 0}=e;const f=ue(v,_);Y.set({theme:f,forcedTheme:a,resolvedTheme:f==="system"?ue(v):f,themes:i?[...m,"system"]:m,systemTheme:i?ue(v):void 0});const h=o?Object.values(o):m,S=g=>{const E=Pe(g);ct(Y,l.resolvedTheme=E,l),n==="system"&&!a&&C(E,!1)},C=(g,E=!0,Z=!0)=>{let W=(o==null?void 0:o[g])||g;const X=c&&Z?Et():null;if(E)try{localStorage.setItem(v,g)}catch{}if(g==="system"&&i){const K=Pe();W=(o==null?void 0:o[K])||K}if(Z&&Oe){const K=document.documentElement;d==="class"?(K.classList.remove(...h),K.classList.add(W)):K.setAttribute(d,W),X==null||X()}},R=(...g)=>S(...g),G=g=>{g.key===v&&_e(g.newValue||_)},J=g=>{const E=g.matchMedia(Se);return E.addListener(R),R(E),g.addEventListener("storage",G),{destroy(){g.removeEventListener("storage",G),E.removeListener(R)}}};return r.$$set=g=>{"forcedTheme"in g&&t(0,a=g.forcedTheme),"disableTransitionOnChange"in g&&t(8,c=g.disableTransitionOnChange),"enableSystem"in g&&t(1,i=g.enableSystem),"enableColorScheme"in g&&t(9,u=g.enableColorScheme),"storageKey"in g&&t(2,v=g.storageKey),"themes"in g&&t(10,m=g.themes),"defaultTheme"in g&&t(3,_=g.defaultTheme),"attribute"in g&&t(4,d=g.attribute),"value"in g&&t(5,o=g.value)},r.$$.update=()=>{if(r.$$.dirty&8192&&t(11,n=l.theme),r.$$.dirty&8192&&t(12,s=l.resolvedTheme),r.$$.dirty&6657&&u&&Oe){let g=a&&Ne.includes(a)?a:n&&Ne.includes(n)?n:n==="system"&&s||null;document.documentElement.style.setProperty("color-scheme",g)}r.$$.dirty&2049&&(a?C(n,!0,!1):C(n))},[a,i,v,_,d,o,h,J,c,u,m,n,s,l]}class Nt extends V{constructor(e){super();j(this,e,Ot,At,B,{forcedTheme:0,disableTransitionOnChange:8,enableSystem:1,enableColorScheme:9,storageKey:2,themes:10,defaultTheme:3,attribute:4,value:5})}}function Pt(r){let e,t,n;return{c(){e=T("aside"),t=T("p"),n=ye("Content to be announced, stay tuned!"),this.h()},l(s){e=$(s,"ASIDE",{class:!0});var l=w(e);t=$(l,"P",{});var a=w(t);n=pe(a,"Content to be announced, stay tuned!"),a.forEach(y),l.forEach(y),this.h()},h(){p(e,"class","svelte-gp36gc")},m(s,l){H(s,e,l),k(e,t),k(t,n)},p:N,i:N,o:N,d(s){s&&y(e)}}}class Lt extends V{constructor(e){super();j(this,e,null,Pt,B,{})}}function Le(r){return Object.prototype.toString.call(r)==="[object Date]"}function ve(r,e){if(r===e||r!==r)return()=>r;const t=typeof r;if(t!==typeof e||Array.isArray(r)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const n=e.map((s,l)=>ve(r[l],s));return s=>n.map(l=>l(s))}if(t==="object"){if(!r||!e)throw new Error("Object cannot be null");if(Le(r)&&Le(e)){r=r.getTime(),e=e.getTime();const l=e-r;return a=>new Date(r+a*l)}const n=Object.keys(e),s={};return n.forEach(l=>{s[l]=ve(r[l],e[l])}),l=>{const a={};return n.forEach(c=>{a[c]=s[c](l)}),a}}if(t==="number"){const n=e-r;return s=>r+s*n}throw new Error(`Cannot interpolate ${t} values`)}function Ht(r,e={}){const t=be(r);let n,s=r;function l(a,c){if(r==null)return t.set(r=a),Promise.resolve();s=a;let i=n,u=!1,{delay:v=0,duration:m=400,easing:_=ut,interpolate:d=ve}=De(De({},e),c);if(m===0)return i&&(i.abort(),i=null),t.set(r=s),Promise.resolve();const o=it()+v;let f;return n=ot(h=>{if(h<o)return!0;u||(f=d(r,a),typeof m=="function"&&(m=m(r,a)),u=!0),i&&(i.abort(),i=null);const S=h-o;return S>m?(t.set(r=a),!1):(t.set(r=f(_(S/m))),!0)}),n.promise}return{set:l,update:(a,c)=>l(a(s,r),c),subscribe:t.subscribe}}const Vt=r=>r[Math.floor(Math.random()*r.length)],U=(r,e)=>{var a;const t=r.reduce((c,{chance:i})=>c+i,0);if(t>1)throw new Error(`Total chance cannot exceed 1, total chance was ${t}.`);t<1&&(r=[...r,{chance:1-t,result:e}]);let n;const s=[];for(n=0;n<r.length;n++)s[n]=r[n].chance+((a=s[n-1])!=null?a:0);const l=Math.random()*s[s.length-1];for(n=0;n<s.length&&!(s[n]>l);n++);return r[n]?r[n].result:e},se=(r,e=.8,t=0,n=300)=>({duration:r-U([{chance:e,result:t+Math.random()*n},{chance:1-e,result:0}]),easing:Vt([_t,vt,yt,pt,bt,St,kt,It,Tt,$t])}),z=(r,e)=>({initialValue:r,config:se(e)}),x=({initialValue:r,config:e})=>Ht(r,e),ke=(r,e=20,t=80,n=60,s=.2)=>{const l=U([{chance:s,result:n},{chance:1-s,result:0}],0),a=r+e+Math.random()*(t-e)+l;return a>36e6?a%360:a},te=r=>r*(Math.PI/180);function jt(r){let e;return{c(){e=T("div"),this.h()},l(t){e=$(t,"DIV",{class:!0,style:!0}),w(e).forEach(y),this.h()},h(){p(e,"class","black-hole svelte-7kp40e"),p(e,"style",r[0])},m(t,n){H(t,e,n)},p(t,[n]){n&1&&p(e,"style",t[0])},i:N,o:N,d(t){t&&y(e)}}}const fe=200,Bt=300,Ft=1.2;function Rt(r,e,t){let n,s,l,a,c,i,{interval:u}=e;const v={angle:z(Math.random()*360,u),distance:z(fe,u),scale:z(0,u)},m=x(v.angle);F(r,m,f=>t(8,c=f));const _=x(v.distance);F(r,_,f=>t(9,i=f));const d=x(v.scale);F(r,d,f=>t(7,a=f));let o;return re(()=>{o=setInterval(()=>{const f=se(u);m.update(S=>ke(S),f),_.set(fe+Math.random()*(Bt-fe),f);const h=U([{chance:.05,result:1+Math.random()},{chance:.95,result:0}],0);d.set(h,f)},u)}),ie(()=>{clearInterval(o)}),r.$$set=f=>{"interval"in f&&t(4,u=f.interval)},r.$$.update=()=>{r.$$.dirty&768&&t(6,n=i*Math.cos(te(c))*Ft),r.$$.dirty&768&&t(5,s=i*Math.sin(te(c))),r.$$.dirty&224&&t(0,l=`transform: translate(${n}px, ${s}px) scale(${a});`)},[l,m,_,d,u,s,n,a,c,i]}class Gt extends V{constructor(e){super();j(this,e,Rt,jt,B,{interval:4})}}function Kt(r){let e;return{c(){e=T("div"),this.h()},l(t){e=$(t,"DIV",{class:!0,style:!0}),w(e).forEach(y),this.h()},h(){p(e,"class","blip svelte-vhis52"),p(e,"style",r[0])},m(t,n){H(t,e,n)},p(t,[n]){n&1&&p(e,"style",t[0])},i:N,o:N,d(t){t&&y(e)}}}const qt=1.2;function zt(r,e,t){let n,s,l,a,c,i,{interval:u}=e,{minDistance:v=150}=e,{maxDistance:m=700}=e;const _={angle:z(Math.random()*360,u),distance:z(v,u),scale:z(0,u)},d=x(_.angle);F(r,d,S=>t(10,c=S));const o=x(_.distance);F(r,o,S=>t(11,i=S));const f=x(_.scale);F(r,f,S=>t(9,a=S));let h;return re(()=>{h=setInterval(()=>{const S=U([{chance:.6,result:se(u)}]);d.update(R=>ke(R),S),o.set(v+Math.random()*(m-v),S);const C=U([{chance:.8,result:.2+Math.random()*1.2},{chance:.1,result:0},{chance:.1,result:2}],0);f.set(C,S)},u)}),ie(()=>{clearInterval(h)}),r.$$set=S=>{"interval"in S&&t(4,u=S.interval),"minDistance"in S&&t(5,v=S.minDistance),"maxDistance"in S&&t(6,m=S.maxDistance)},r.$$.update=()=>{r.$$.dirty&3072&&t(8,n=i*Math.cos(te(c))*qt),r.$$.dirty&3072&&t(7,s=i*Math.sin(te(c))),r.$$.dirty&896&&t(0,l=`transform: translate(${n}px, ${s}px) scale(${a});`)},[l,d,o,f,u,v,m,s,n,a,c,i]}class Je extends V{constructor(e){super();j(this,e,zt,Kt,B,{interval:4,minDistance:5,maxDistance:6})}}function He(r,e,t){const n=r.slice();return n[0]=e[t].props.interval,n[15]=e[t].props.minDistance,n[16]=e[t].props.maxDistance,n}function Ve(r){let e,t;return e=new Je({props:{interval:r[0],minDistance:r[15],maxDistance:r[16]}}),{c(){D(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},p:N,i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function xt(r){let e,t,n=Array(r[5].count).fill(r[5]),s=[];for(let a=0;a<n.length;a+=1)s[a]=Ve(He(r,n,a));const l=a=>I(s[a],1,1,()=>{s[a]=null});return{c(){e=T("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=$(a,"DIV",{class:!0,style:!0});var c=w(e);for(let i=0;i<s.length;i+=1)s[i].l(c);c.forEach(y),this.h()},h(){p(e,"class","star svelte-1jj7i4p"),p(e,"style",r[1])},m(a,c){H(a,e,c);for(let i=0;i<s.length;i+=1)s[i].m(e,null);t=!0},p(a,[c]){if(c&32){n=Array(a[5].count).fill(a[5]);let i;for(i=0;i<n.length;i+=1){const u=He(a,n,i);s[i]?(s[i].p(u,c),b(s[i],1)):(s[i]=Ve(u),s[i].c(),b(s[i],1),s[i].m(e,null))}for(ae(),i=n.length;i<s.length;i+=1)l(i);le()}(!t||c&2)&&p(e,"style",a[1])},i(a){if(!t){for(let c=0;c<n.length;c+=1)b(s[c]);t=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)I(s[c]);t=!1},d(a){a&&y(e),me(s,a)}}}const he=100,Ut=400,Zt=1.2;function Jt(r,e,t){let n,s,l,a,c,i,{interval:u}=e,{color:v}=e,{blipsCount:m=5}=e;const _={angle:z(Math.random()*360,u),distance:z(he,u),scale:z(0,u)},d=x(_.angle);F(r,d,C=>t(11,c=C));const o=x(_.distance);F(r,o,C=>t(12,i=C));const f=x(_.scale);F(r,f,C=>t(10,a=C));const h={count:m,props:{interval:u/2,minDistance:10,maxDistance:100}};let S;return re(()=>{S=setInterval(()=>{const C=U([{chance:.6,result:se(u)}]);d.update(G=>ke(G),C),o.set(he+Math.random()*(Ut-he),C);const R=U([{chance:.8,result:.3+Math.random()*2.2},{chance:.1,result:0},{chance:.1,result:5}],0);f.set(R,C)},u)}),ie(()=>{clearInterval(S)}),r.$$set=C=>{"interval"in C&&t(0,u=C.interval),"color"in C&&t(6,v=C.color),"blipsCount"in C&&t(7,m=C.blipsCount)},r.$$.update=()=>{r.$$.dirty&6144&&t(9,n=i*Math.cos(te(c))*Zt),r.$$.dirty&6144&&t(8,s=i*Math.sin(te(c))),r.$$.dirty&1856&&t(1,l=`--color: ${v};transform: translate(${n}px, ${s}px) scale(${a});`)},[u,l,d,o,f,h,v,m,s,n,a,c,i]}class Wt extends V{constructor(e){super();j(this,e,Jt,xt,B,{interval:0,color:6,blipsCount:7})}}function Xt(r){let e;return{c(){e=T("div"),this.h()},l(t){e=$(t,"DIV",{class:!0,style:!0}),w(e).forEach(y),this.h()},h(){p(e,"class","sun svelte-iarsj2"),p(e,"style",r[0])},m(t,n){H(t,e,n)},p(t,[n]){n&1&&p(e,"style",t[0])},i:N,o:N,d(t){t&&y(e)}}}function Qt(r,e,t){let n,s,{interval:l}=e;const a={scale:z(0,l)},c=x(a.scale);F(r,c,u=>t(3,s=u));let i;return re(()=>{i=setInterval(()=>{const u=U([{chance:.6,result:se(l)}]),v=U([{chance:.9,result:.3+Math.random()*2.2},{chance:.1,result:0}],0);c.set(v,u)},l)}),ie(()=>{clearInterval(i)}),r.$$set=u=>{"interval"in u&&t(2,l=u.interval)},r.$$.update=()=>{r.$$.dirty&8&&t(0,n=`transform: scale(${s});`)},[n,c,l,s]}class Yt extends V{constructor(e){super();j(this,e,Qt,Xt,B,{interval:2})}}function je(r,e,t){const n=r.slice();return n[4]=e[t].interval,n}function Be(r,e,t){const n=r.slice();return n[4]=e[t].interval,n[7]=e[t].color,n}function Fe(r){let e,t;return e=new Wt({props:{interval:r[4],color:r[7]}}),{c(){D(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},p:N,i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Re(r){let e,t;return e=new Je({props:{interval:r[4]}}),{c(){D(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,s){A(e,n,s),t=!0},p:N,i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function en(r){let e,t,n,s,l,a,c;t=new Yt({props:{interval:r[0].interval}});let i=r[1],u=[];for(let o=0;o<i.length;o+=1)u[o]=Fe(Be(r,i,o));const v=o=>I(u[o],1,1,()=>{u[o]=null});let m=Array(r[2].count).fill(r[2]),_=[];for(let o=0;o<m.length;o+=1)_[o]=Re(je(r,m,o));const d=o=>I(_[o],1,1,()=>{_[o]=null});return a=new Gt({props:{interval:r[3].interval}}),{c(){e=T("div"),D(t.$$.fragment),n=P();for(let o=0;o<u.length;o+=1)u[o].c();s=P();for(let o=0;o<_.length;o+=1)_[o].c();l=P(),D(a.$$.fragment),this.h()},l(o){e=$(o,"DIV",{class:!0,"aria-hidden":!0});var f=w(e);M(t.$$.fragment,f),n=L(f);for(let h=0;h<u.length;h+=1)u[h].l(f);s=L(f);for(let h=0;h<_.length;h+=1)_[h].l(f);l=L(f),M(a.$$.fragment,f),f.forEach(y),this.h()},h(){p(e,"class","container svelte-rjhqsu"),p(e,"aria-hidden","true")},m(o,f){H(o,e,f),A(t,e,null),k(e,n);for(let h=0;h<u.length;h+=1)u[h].m(e,null);k(e,s);for(let h=0;h<_.length;h+=1)_[h].m(e,null);k(e,l),A(a,e,null),c=!0},p(o,[f]){if(f&2){i=o[1];let h;for(h=0;h<i.length;h+=1){const S=Be(o,i,h);u[h]?(u[h].p(S,f),b(u[h],1)):(u[h]=Fe(S),u[h].c(),b(u[h],1),u[h].m(e,s))}for(ae(),h=i.length;h<u.length;h+=1)v(h);le()}if(f&4){m=Array(o[2].count).fill(o[2]);let h;for(h=0;h<m.length;h+=1){const S=je(o,m,h);_[h]?(_[h].p(S,f),b(_[h],1)):(_[h]=Re(S),_[h].c(),b(_[h],1),_[h].m(e,l))}for(ae(),h=m.length;h<_.length;h+=1)d(h);le()}},i(o){if(!c){b(t.$$.fragment,o);for(let f=0;f<i.length;f+=1)b(u[f]);for(let f=0;f<m.length;f+=1)b(_[f]);b(a.$$.fragment,o),c=!0}},o(o){I(t.$$.fragment,o),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)I(u[f]);_=_.filter(Boolean);for(let f=0;f<_.length;f+=1)I(_[f]);I(a.$$.fragment,o),c=!1},d(o){o&&y(e),O(t),me(u,o),me(_,o),O(a)}}}const Q=5e3;function tn(r){const e={interval:Q},t=[{interval:Q,color:"#ffffff"},{interval:Q,color:"#ffffff"},{interval:Q,color:"#ffffff"}],n={count:20,interval:Q*2},s={interval:Q/2};return[e,t,n,s]}class nn extends V{constructor(e){super();j(this,e,tn,en,B,{})}}const We=()=>{const r=be(!1);return re(()=>{r.set(!0)}),r},ce={System:"system",Light:"light",Dark:"dark"},Xe=r=>{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=!r,n=r===ce.System,s=r===ce.Light;return t||n?!e:s};function Ge(r){let e,t,n,s,l;return{c(){e=T("div"),n=P(),s=T("div"),this.h()},l(a){e=$(a,"DIV",{class:!0}),w(e).forEach(y),n=L(a),s=$(a,"DIV",{class:!0}),w(s).forEach(y),this.h()},h(){p(e,"class","border right svelte-gvcvum"),q(e,"light",r[0]),q(e,"dark",!r[0]),p(s,"class","border left svelte-gvcvum"),q(s,"light",r[0]),q(s,"dark",!r[0])},m(a,c){H(a,e,c),H(a,n,c),H(a,s,c)},p(a,c){c&1&&q(e,"light",a[0]),c&1&&q(e,"dark",!a[0]),c&1&&q(s,"light",a[0]),c&1&&q(s,"dark",!a[0])},i(a){t||de(()=>{t=ge(e,Ae,{x:200,duration:3e3}),t.start()}),l||de(()=>{l=ge(s,Ae,{x:-200,duration:3e3}),l.start()})},o:N,d(a){a&&y(e),a&&y(n),a&&y(s)}}}function rn(r){let e,t=r[1]&&Ge(r);return{c(){t&&t.c(),e=ee()},l(n){t&&t.l(n),e=ee()},m(n,s){t&&t.m(n,s),H(n,e,s)},p(n,[s]){n[1]?t?(t.p(n,s),s&2&&b(t,1)):(t=Ge(n),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i(n){b(t)},o:N,d(n){t&&t.d(n),n&&y(e)}}}function sn(r,e,t){let n,s,l;F(r,Y,c=>t(3,s=c));const a=We();return F(r,a,c=>t(1,l=c)),r.$$.update=()=>{r.$$.dirty&8&&t(0,n=Xe(s.theme))},[n,l,a,s]}class an extends V{constructor(e){super();j(this,e,sn,rn,B,{})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ln={prefix:"far",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"]},cn={prefix:"far",iconName:"moon",icon:[512,512,[127769,9214],"f186","M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"]};function on(r){let e,t,n,s,l,a,c,i,u,v,m,_;return n=new Ze({props:{icon:ln,size:"sm"}}),c=new oe({props:{link:{url:"https://github.com/dagerikhl",label:"dagerikhl @ GitHub"},target:"_blank"}}),u=new oe({props:{link:{url:"https://www.linkedin.com/in/dagerikhl",label:"Dag Erik L\xF8vgren @ LinkedIn"},target:"_blank"}}),m=new oe({props:{link:{url:"https://www.miles.no/ansatte/dag-erik-lovgren",label:"Dag Erik L\xF8vgren @ Miles"},target:"_blank"}}),{c(){e=T("footer"),t=T("div"),D(n.$$.fragment),s=ye(" Dag Erik L\xF8vgren 2022 \u2013"),l=P(),a=T("div"),D(c.$$.fragment),i=P(),D(u.$$.fragment),v=P(),D(m.$$.fragment),this.h()},l(d){e=$(d,"FOOTER",{class:!0});var o=w(e);t=$(o,"DIV",{class:!0});var f=w(t);M(n.$$.fragment,f),s=pe(f," Dag Erik L\xF8vgren 2022 \u2013"),f.forEach(y),l=L(o),a=$(o,"DIV",{class:!0});var h=w(a);M(c.$$.fragment,h),i=L(h),M(u.$$.fragment,h),v=L(h),M(m.$$.fragment,h),h.forEach(y),o.forEach(y),this.h()},h(){p(t,"class","copyright svelte-69syin"),p(a,"class","links svelte-69syin"),p(e,"class","svelte-69syin")},m(d,o){H(d,e,o),k(e,t),A(n,t,null),k(t,s),k(e,l),k(e,a),A(c,a,null),k(a,i),A(u,a,null),k(a,v),A(m,a,null),_=!0},p:N,i(d){_||(b(n.$$.fragment,d),b(c.$$.fragment,d),b(u.$$.fragment,d),b(m.$$.fragment,d),_=!0)},o(d){I(n.$$.fragment,d),I(c.$$.fragment,d),I(u.$$.fragment,d),I(m.$$.fragment,d),_=!1},d(d){d&&y(e),O(n),O(c),O(u),O(m)}}}class un extends V{constructor(e){super();j(this,e,null,on,B,{})}}var fn="/_app/assets/dagerikhl-8748f656.png";const hn=()=>{const r=ft("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},mn={subscribe(r){return hn().page.subscribe(r)}};function dn(r){var a;let e,t,n=((a=r[2])!=null?a:r[1])+"",s,l;return{c(){e=T("li"),t=T("a"),s=ye(n),this.h()},l(c){e=$(c,"LI",{class:!0});var i=w(e);t=$(i,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var u=w(t);s=pe(u,n),u.forEach(y),i.forEach(y),this.h()},h(){p(t,"sveltekit:prefetch",l=r[0]?!0:void 0),p(t,"href",r[1]),p(t,"class","svelte-1wp4672"),p(e,"class","svelte-1wp4672"),q(e,"active",r[3].url.pathname===r[1])},m(c,i){H(c,e,i),k(e,t),k(t,s)},p(c,[i]){var u;i&6&&n!==(n=((u=c[2])!=null?u:c[1])+"")&&ht(s,n),i&1&&l!==(l=c[0]?!0:void 0)&&p(t,"sveltekit:prefetch",l),i&2&&p(t,"href",c[1]),i&10&&q(e,"active",c[3].url.pathname===c[1])},i:N,o:N,d(c){c&&y(e)}}}function gn(r,e,t){let n;F(r,mn,c=>t(3,n=c));let{prefetch:s=!0}=e,{path:l}=e,{label:a}=e;return r.$$set=c=>{"prefetch"in c&&t(0,s=c.prefetch),"path"in c&&t(1,l=c.path),"label"in c&&t(2,a=c.label)},[s,l,a,n]}class ne extends V{constructor(e){super();j(this,e,gn,dn,B,{prefetch:0,path:1,label:2})}}function _n(r){let e,t,n,s,l,a,c,i,u,v,m,_;return n=new ne({props:{path:"/",label:"Home"}}),l=new ne({props:{path:"/cv",label:"CV"}}),c=new ne({props:{path:"/publications",label:"Publications"}}),u=new ne({props:{path:"/workshops",label:"Workshops"}}),m=new ne({props:{path:"/projects",label:"Projects"}}),{c(){e=T("nav"),t=T("ul"),D(n.$$.fragment),s=P(),D(l.$$.fragment),a=P(),D(c.$$.fragment),i=P(),D(u.$$.fragment),v=P(),D(m.$$.fragment),this.h()},l(d){e=$(d,"NAV",{class:!0});var o=w(e);t=$(o,"UL",{class:!0});var f=w(t);M(n.$$.fragment,f),s=L(f),M(l.$$.fragment,f),a=L(f),M(c.$$.fragment,f),i=L(f),M(u.$$.fragment,f),v=L(f),M(m.$$.fragment,f),f.forEach(y),o.forEach(y),this.h()},h(){p(t,"class","svelte-euyyn9"),p(e,"class","svelte-euyyn9")},m(d,o){H(d,e,o),k(e,t),A(n,t,null),k(t,s),A(l,t,null),k(t,a),A(c,t,null),k(t,i),A(u,t,null),k(t,v),A(m,t,null),_=!0},p:N,i(d){_||(b(n.$$.fragment,d),b(l.$$.fragment,d),b(c.$$.fragment,d),b(u.$$.fragment,d),b(m.$$.fragment,d),_=!0)},o(d){I(n.$$.fragment,d),I(l.$$.fragment,d),I(c.$$.fragment,d),I(u.$$.fragment,d),I(m.$$.fragment,d),_=!1},d(d){d&&y(e),O(n),O(l),O(c),O(u),O(m)}}}class vn extends V{constructor(e){super();j(this,e,null,_n,B,{})}}function yn(r){let e,t,n,s,l,a;return{c(){e=T("div"),t=T("input"),n=P(),s=T("span"),this.h()},l(c){e=$(c,"DIV",{class:!0});var i=w(e);t=$(i,"INPUT",{id:!0,type:!0,class:!0}),n=L(i),s=$(i,"SPAN",{class:!0}),w(s).forEach(y),i.forEach(y),this.h()},h(){p(t,"id",r[1]),p(t,"type","checkbox"),p(t,"class","svelte-127r0db"),p(s,"class","slider svelte-127r0db"),p(e,"class","switch svelte-127r0db")},m(c,i){H(c,e,i),k(e,t),t.checked=r[0],k(e,n),k(e,s),l||(a=[Me(t,"change",r[3]),Me(t,"change",r[2])],l=!0)},p(c,[i]){i&2&&p(t,"id",c[1]),i&1&&(t.checked=c[0])},i:N,o:N,d(c){c&&y(e),l=!1,mt(a)}}}function pn(r,e,t){const n=dt();let{id:s}=e,{checked:l}=e;const a=({target:i})=>{n("change",{checked:i.checked})};function c(){l=this.checked,t(0,l)}return r.$$set=i=>{"id"in i&&t(1,s=i.id),"checked"in i&&t(0,l=i.checked)},[l,s,a,c]}class bn extends V{constructor(e){super();j(this,e,pn,yn,B,{id:1,checked:0})}}function Ke(r){let e,t,n,s,l,a;return t=new Ze({props:{icon:cn}}),s=new bn({props:{id:"theme-switcher",checked:r[0]}}),s.$on("change",r[2]),{c(){e=T("label"),D(t.$$.fragment),n=P(),D(s.$$.fragment),this.h()},l(c){e=$(c,"LABEL",{class:!0,for:!0});var i=w(e);M(t.$$.fragment,i),n=L(i),M(s.$$.fragment,i),i.forEach(y),this.h()},h(){p(e,"class","switcher svelte-1g2mpp8"),p(e,"for","theme-switcher")},m(c,i){H(c,e,i),A(t,e,null),k(e,n),A(s,e,null),a=!0},p(c,i){const u={};i&1&&(u.checked=c[0]),s.$set(u)},i(c){a||(b(t.$$.fragment,c),b(s.$$.fragment,c),l||de(()=>{l=ge(e,wt,{}),l.start()}),a=!0)},o(c){I(t.$$.fragment,c),I(s.$$.fragment,c),a=!1},d(c){c&&y(e),O(t),O(s)}}}function Sn(r){let e,t,n=r[1]&&Ke(r);return{c(){n&&n.c(),e=ee()},l(s){n&&n.l(s),e=ee()},m(s,l){n&&n.m(s,l),H(s,e,l),t=!0},p(s,[l]){s[1]?n?(n.p(s,l),l&2&&b(n,1)):(n=Ke(s),n.c(),b(n,1),n.m(e.parentNode,e)):n&&(ae(),I(n,1,1,()=>{n=null}),le())},i(s){t||(b(n),t=!0)},o(s){I(n),t=!1},d(s){n&&n.d(s),s&&y(e)}}}function kn(r,e,t){let n,s,l;F(r,Y,i=>t(4,s=i));const a=({detail:{checked:i}})=>{_e(i?ce.Light:ce.Dark)},c=We();return F(r,c,i=>t(1,l=i)),r.$$.update=()=>{r.$$.dirty&16&&t(0,n=Xe(s.theme))},[n,l,a,c,s]}class In extends V{constructor(e){super();j(this,e,kn,Sn,B,{})}}function Tn(r){let e,t,n,s,l,a,c,i,u;return a=new vn({}),i=new In({}),{c(){e=T("header"),t=T("div"),n=T("img"),l=P(),D(a.$$.fragment),c=P(),D(i.$$.fragment),this.h()},l(v){e=$(v,"HEADER",{class:!0});var m=w(e);t=$(m,"DIV",{class:!0});var _=w(t);n=$(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(y),l=L(m),M(a.$$.fragment,m),c=L(m),M(i.$$.fragment,m),m.forEach(y),this.h()},h(){gt(n.src,s=fn)||p(n,"src",s),p(n,"alt","dagerikhl avatar"),p(n,"class","svelte-stdax1"),p(t,"class","avatar svelte-stdax1"),p(e,"class","svelte-stdax1")},m(v,m){H(v,e,m),k(e,t),k(t,n),k(e,l),A(a,e,null),k(e,c),A(i,e,null),u=!0},p:N,i(v){u||(b(a.$$.fragment,v),b(i.$$.fragment,v),u=!0)},o(v){I(a.$$.fragment,v),I(i.$$.fragment,v),u=!1},d(v){v&&y(e),O(a),O(i)}}}class $n extends V{constructor(e){super();j(this,e,null,Tn,B,{})}}function wn(r){let e,t;const n=r[1].default,s=qe(n,r,r[0],null);return{c(){e=T("main"),s&&s.c(),this.h()},l(l){e=$(l,"MAIN",{class:!0});var a=w(e);s&&s.l(a),a.forEach(y),this.h()},h(){p(e,"class","svelte-jg599y")},m(l,a){H(l,e,a),s&&s.m(e,null),t=!0},p(l,[a]){s&&s.p&&(!t||a&1)&&ze(s,n,l,l[0],t?Ue(n,l[0],a,null):xe(l[0]),null)},i(l){t||(b(s,l),t=!0)},o(l){I(s,l),t=!1},d(l){l&&y(e),s&&s.d(l)}}}function En(r,e,t){let{$$slots:n={},$$scope:s}=e;return r.$$set=l=>{"$$scope"in l&&t(0,s=l.$$scope)},[s,n]}class Cn extends V{constructor(e){super();j(this,e,En,wn,B,{})}}function Dn(r){let e;const t=r[0].default,n=qe(t,r,r[1],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),e=!0},p(s,l){n&&n.p&&(!e||l&2)&&ze(n,t,s,s[1],e?Ue(t,s[1],l,null):xe(s[1]),null)},i(s){e||(b(n,s),e=!0)},o(s){I(n,s),e=!1},d(s){n&&n.d(s)}}}function Mn(r){let e,t,n,s,l,a,c,i,u,v,m,_,d,o,f,h,S,C,R,G,J;return e=new Nt({}),l=new $n({}),i=new nn({}),m=new an({}),o=new Cn({props:{$$slots:{default:[Dn]},$$scope:{ctx:r}}}),S=new Lt({}),G=new un({}),{c(){D(e.$$.fragment),t=P(),n=T("div"),s=T("div"),D(l.$$.fragment),a=P(),c=T("div"),D(i.$$.fragment),u=P(),v=T("div"),D(m.$$.fragment),_=P(),d=T("div"),D(o.$$.fragment),f=P(),h=T("div"),D(S.$$.fragment),C=P(),R=T("div"),D(G.$$.fragment),this.h()},l(g){M(e.$$.fragment,g),t=L(g),n=$(g,"DIV",{class:!0});var E=w(n);s=$(E,"DIV",{class:!0});var Z=w(s);M(l.$$.fragment,Z),Z.forEach(y),a=L(E),c=$(E,"DIV",{class:!0});var W=w(c);M(i.$$.fragment,W),W.forEach(y),u=L(E),v=$(E,"DIV",{class:!0});var X=w(v);M(m.$$.fragment,X),X.forEach(y),_=L(E),d=$(E,"DIV",{class:!0});var K=w(d);M(o.$$.fragment,K),K.forEach(y),f=L(E),h=$(E,"DIV",{class:!0});var Ie=w(h);M(S.$$.fragment,Ie),Ie.forEach(y),C=L(E),R=$(E,"DIV",{class:!0});var Te=w(R);M(G.$$.fragment,Te),Te.forEach(y),E.forEach(y),this.h()},h(){p(s,"class","header svelte-u1nc9x"),p(c,"class","background svelte-u1nc9x"),p(v,"class","borders svelte-u1nc9x"),p(d,"class","main svelte-u1nc9x"),p(h,"class","aside svelte-u1nc9x"),p(R,"class","footer svelte-u1nc9x"),p(n,"class","page svelte-u1nc9x")},m(g,E){A(e,g,E),H(g,t,E),H(g,n,E),k(n,s),A(l,s,null),k(n,a),k(n,c),A(i,c,null),k(n,u),k(n,v),A(m,v,null),k(n,_),k(n,d),A(o,d,null),k(n,f),k(n,h),A(S,h,null),k(n,C),k(n,R),A(G,R,null),J=!0},p(g,[E]){const Z={};E&2&&(Z.$$scope={dirty:E,ctx:g}),o.$set(Z)},i(g){J||(b(e.$$.fragment,g),b(l.$$.fragment,g),b(i.$$.fragment,g),b(m.$$.fragment,g),b(o.$$.fragment,g),b(S.$$.fragment,g),b(G.$$.fragment,g),J=!0)},o(g){I(e.$$.fragment,g),I(l.$$.fragment,g),I(i.$$.fragment,g),I(m.$$.fragment,g),I(o.$$.fragment,g),I(S.$$.fragment,g),I(G.$$.fragment,g),J=!1},d(g){O(e,g),g&&y(t),g&&y(n),O(l),O(i),O(m),O(o),O(S),O(G)}}}function An(r,e,t){let{$$slots:n={},$$scope:s}=e;return r.$$set=l=>{"$$scope"in l&&t(1,s=l.$$scope)},[n,s]}class Hn extends V{constructor(e){super();j(this,e,An,Mn,B,{})}}export{Hn as default};
