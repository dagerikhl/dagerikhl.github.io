import{S as L,i as H,s as F,e as E,t as Z,c as A,a as M,h as X,d as p,b as v,g as T,F as k,G as O,H as be,I as ke,J as Ie,K as we,L as Se,M as De,N as Ee,O as Ae,P as Me,Q as Ce,R as Ne,T as x,v as K,U as W,w as I,x as w,y as S,q as $,o as b,B as D,n as ne,p as re,V as ae,k as C,m as N,W as Oe,X as le,j as Pe,Y as ce,Z as Te,_ as Le,$ as He,a0 as ie,a1 as Fe,a2 as _e,a3 as de,a4 as ve,a5 as pe,a6 as xe}from"../chunks/vendor-102bfa70.js";import{L as J}from"../chunks/Link-d8f3d247.js";function Be(a){let e,t,n;return{c(){e=E("aside"),t=E("p"),n=Z("Content to be announced, stay tuned!"),this.h()},l(r){e=A(r,"ASIDE",{class:!0});var c=M(e);t=A(c,"P",{});var i=M(t);n=X(i,"Content to be announced, stay tuned!"),i.forEach(p),c.forEach(p),this.h()},h(){v(e,"class","svelte-cvy27b")},m(r,c){T(r,e,c),k(e,t),k(t,n)},p:O,i:O,o:O,d(r){r&&p(e)}}}class Ve extends L{constructor(e){super();H(this,e,null,Be,F,{})}}const Re=a=>a[Math.floor(Math.random()*a.length)],R=(a,e)=>{var i;const t=a.reduce((l,{chance:u})=>l+u,0);if(t>1)throw new Error(`Total chance cannot exceed 1, total chance was ${t}.`);t<1&&(a=[...a,{chance:1-t,result:e}]);let n;const r=[];for(n=0;n<a.length;n++)r[n]=a[n].chance+((i=r[n-1])!=null?i:0);const c=Math.random()*r[r.length-1];for(n=0;n<r.length&&!(r[n]>c);n++);return a[n]?a[n].result:e},U=(a,e=.8,t=0,n=300)=>({duration:a-R([{chance:e,result:t+Math.random()*n},{chance:1-e,result:0}]),easing:Re([ke,Ie,we,Se,De,Ee,Ae,Me,Ce,Ne])}),B=(a,e)=>({initialValue:a,config:U(e)}),V=({initialValue:a,config:e})=>be(a,e),se=(a,e=20,t=80,n=60,r=.2)=>{const c=R([{chance:r,result:n},{chance:1-r,result:0}],0),i=a+e+Math.random()*(t-e)+c;return i>36e6?i%360:i},j=a=>a*(Math.PI/180);function Ge(a){let e;return{c(){e=E("div"),this.h()},l(t){e=A(t,"DIV",{class:!0,style:!0}),M(e).forEach(p),this.h()},h(){v(e,"class","black-hole svelte-7kp40e"),v(e,"style",a[0])},m(t,n){T(t,e,n)},p(t,[n]){n&1&&v(e,"style",t[0])},i:O,o:O,d(t){t&&p(e)}}}const Q=200,je=300,qe=1.2;function Ue(a,e,t){let n,r,c,i,l,u,{interval:s}=e;const m={angle:B(Math.random()*360,s),distance:B(Q,s),scale:B(0,s)},d=V(m.angle);x(a,d,o=>t(8,l=o));const g=V(m.distance);x(a,g,o=>t(9,u=o));const _=V(m.scale);x(a,_,o=>t(7,i=o));let h;return K(()=>{h=setInterval(()=>{const o=U(s);d.update(y=>se(y),o),g.set(Q+Math.random()*(je-Q),o);const f=R([{chance:.05,result:1+Math.random()},{chance:.95,result:0}],0);_.set(f,o)},s)}),W(()=>{clearInterval(h)}),a.$$set=o=>{"interval"in o&&t(4,s=o.interval)},a.$$.update=()=>{a.$$.dirty&768&&t(6,n=u*Math.cos(j(l))*qe),a.$$.dirty&768&&t(5,r=u*Math.sin(j(l))),a.$$.dirty&224&&t(0,c=`transform: translate(${n}px, ${r}px) scale(${i});`)},[c,d,g,_,s,r,n,i,l,u]}class Ze extends L{constructor(e){super();H(this,e,Ue,Ge,F,{interval:4})}}function Xe(a){let e;return{c(){e=E("div"),this.h()},l(t){e=A(t,"DIV",{class:!0,style:!0}),M(e).forEach(p),this.h()},h(){v(e,"class","blip svelte-vhis52"),v(e,"style",a[0])},m(t,n){T(t,e,n)},p(t,[n]){n&1&&v(e,"style",t[0])},i:O,o:O,d(t){t&&p(e)}}}const Ke=1.2;function We(a,e,t){let n,r,c,i,l,u,{interval:s}=e,{minDistance:m=150}=e,{maxDistance:d=700}=e;const g={angle:B(Math.random()*360,s),distance:B(m,s),scale:B(0,s)},_=V(g.angle);x(a,_,y=>t(10,l=y));const h=V(g.distance);x(a,h,y=>t(11,u=y));const o=V(g.scale);x(a,o,y=>t(9,i=y));let f;return K(()=>{f=setInterval(()=>{const y=R([{chance:.6,result:U(s)}]);_.update(z=>se(z),y),h.set(m+Math.random()*(d-m),y);const P=R([{chance:.8,result:.2+Math.random()*1.2},{chance:.1,result:0},{chance:.1,result:2}],0);o.set(P,y)},s)}),W(()=>{clearInterval(f)}),a.$$set=y=>{"interval"in y&&t(4,s=y.interval),"minDistance"in y&&t(5,m=y.minDistance),"maxDistance"in y&&t(6,d=y.maxDistance)},a.$$.update=()=>{a.$$.dirty&3072&&t(8,n=u*Math.cos(j(l))*Ke),a.$$.dirty&3072&&t(7,r=u*Math.sin(j(l))),a.$$.dirty&896&&t(0,c=`transform: translate(${n}px, ${r}px) scale(${i});`)},[c,_,h,o,s,m,d,r,n,i,l,u]}class $e extends L{constructor(e){super();H(this,e,We,Xe,F,{interval:4,minDistance:5,maxDistance:6})}}function oe(a,e,t){const n=a.slice();return n[0]=e[t].props.interval,n[15]=e[t].props.minDistance,n[16]=e[t].props.maxDistance,n}function ue(a){let e,t;return e=new $e({props:{interval:a[0],minDistance:a[15],maxDistance:a[16]}}),{c(){I(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,r){S(e,n,r),t=!0},p:O,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function ze(a){let e,t,n=Array(a[5].count).fill(a[5]),r=[];for(let i=0;i<n.length;i+=1)r[i]=ue(oe(a,n,i));const c=i=>b(r[i],1,1,()=>{r[i]=null});return{c(){e=E("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=A(i,"DIV",{class:!0,style:!0});var l=M(e);for(let u=0;u<r.length;u+=1)r[u].l(l);l.forEach(p),this.h()},h(){v(e,"class","star svelte-1jj7i4p"),v(e,"style",a[1])},m(i,l){T(i,e,l);for(let u=0;u<r.length;u+=1)r[u].m(e,null);t=!0},p(i,[l]){if(l&32){n=Array(i[5].count).fill(i[5]);let u;for(u=0;u<n.length;u+=1){const s=oe(i,n,u);r[u]?(r[u].p(s,l),$(r[u],1)):(r[u]=ue(s),r[u].c(),$(r[u],1),r[u].m(e,null))}for(ne(),u=n.length;u<r.length;u+=1)c(u);re()}(!t||l&2)&&v(e,"style",i[1])},i(i){if(!t){for(let l=0;l<n.length;l+=1)$(r[l]);t=!0}},o(i){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)b(r[l]);t=!1},d(i){i&&p(e),ae(r,i)}}}const Y=100,Je=400,Qe=1.2;function Ye(a,e,t){let n,r,c,i,l,u,{interval:s}=e,{color:m}=e,{blipsCount:d=10}=e;const g={angle:B(Math.random()*360,s),distance:B(Y,s),scale:B(0,s)},_=V(g.angle);x(a,_,P=>t(11,l=P));const h=V(g.distance);x(a,h,P=>t(12,u=P));const o=V(g.scale);x(a,o,P=>t(10,i=P));const f={count:d,props:{interval:s/2,minDistance:10,maxDistance:100}};let y;return K(()=>{y=setInterval(()=>{const P=R([{chance:.6,result:U(s)}]);_.update(ye=>se(ye),P),h.set(Y+Math.random()*(Je-Y),P);const z=R([{chance:.8,result:.3+Math.random()*2.2},{chance:.1,result:0},{chance:.1,result:5}],0);o.set(z,P)},s)}),W(()=>{clearInterval(y)}),a.$$set=P=>{"interval"in P&&t(0,s=P.interval),"color"in P&&t(6,m=P.color),"blipsCount"in P&&t(7,d=P.blipsCount)},a.$$.update=()=>{a.$$.dirty&6144&&t(9,n=u*Math.cos(j(l))*Qe),a.$$.dirty&6144&&t(8,r=u*Math.sin(j(l))),a.$$.dirty&1856&&t(1,c=`--color: ${m};transform: translate(${n}px, ${r}px) scale(${i});`)},[s,c,_,h,o,f,m,d,r,n,i,l,u]}class et extends L{constructor(e){super();H(this,e,Ye,ze,F,{interval:0,color:6,blipsCount:7})}}function tt(a){let e;return{c(){e=E("div"),this.h()},l(t){e=A(t,"DIV",{class:!0,style:!0}),M(e).forEach(p),this.h()},h(){v(e,"class","sun svelte-iarsj2"),v(e,"style",a[0])},m(t,n){T(t,e,n)},p(t,[n]){n&1&&v(e,"style",t[0])},i:O,o:O,d(t){t&&p(e)}}}function nt(a,e,t){let n,r,{interval:c}=e;const i={scale:B(0,c)},l=V(i.scale);x(a,l,s=>t(3,r=s));let u;return K(()=>{u=setInterval(()=>{const s=R([{chance:.6,result:U(c)}]),m=R([{chance:.9,result:.3+Math.random()*2.2},{chance:.1,result:0}],0);l.set(m,s)},c)}),W(()=>{clearInterval(u)}),a.$$set=s=>{"interval"in s&&t(2,c=s.interval)},a.$$.update=()=>{a.$$.dirty&8&&t(0,n=`transform: scale(${r});`)},[n,l,c,r]}class rt extends L{constructor(e){super();H(this,e,nt,tt,F,{interval:2})}}function fe(a,e,t){const n=a.slice();return n[4]=e[t].interval,n}function he(a,e,t){const n=a.slice();return n[4]=e[t].interval,n[7]=e[t].color,n}function ge(a){let e,t;return e=new et({props:{interval:a[4],color:a[7]}}),{c(){I(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,r){S(e,n,r),t=!0},p:O,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function me(a){let e,t;return e=new $e({props:{interval:a[4]}}),{c(){I(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,r){S(e,n,r),t=!0},p:O,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function at(a){let e,t,n,r,c,i,l;t=new rt({props:{interval:a[0].interval}});let u=a[1],s=[];for(let h=0;h<u.length;h+=1)s[h]=ge(he(a,u,h));const m=h=>b(s[h],1,1,()=>{s[h]=null});let d=Array(a[2].count).fill(a[2]),g=[];for(let h=0;h<d.length;h+=1)g[h]=me(fe(a,d,h));const _=h=>b(g[h],1,1,()=>{g[h]=null});return i=new Ze({props:{interval:a[3].interval}}),{c(){e=E("div"),I(t.$$.fragment),n=C();for(let h=0;h<s.length;h+=1)s[h].c();r=C();for(let h=0;h<g.length;h+=1)g[h].c();c=C(),I(i.$$.fragment),this.h()},l(h){e=A(h,"DIV",{class:!0,"aria-hidden":!0});var o=M(e);w(t.$$.fragment,o),n=N(o);for(let f=0;f<s.length;f+=1)s[f].l(o);r=N(o);for(let f=0;f<g.length;f+=1)g[f].l(o);c=N(o),w(i.$$.fragment,o),o.forEach(p),this.h()},h(){v(e,"class","container svelte-bljfrz"),v(e,"aria-hidden","true")},m(h,o){T(h,e,o),S(t,e,null),k(e,n);for(let f=0;f<s.length;f+=1)s[f].m(e,null);k(e,r);for(let f=0;f<g.length;f+=1)g[f].m(e,null);k(e,c),S(i,e,null),l=!0},p(h,[o]){if(o&2){u=h[1];let f;for(f=0;f<u.length;f+=1){const y=he(h,u,f);s[f]?(s[f].p(y,o),$(s[f],1)):(s[f]=ge(y),s[f].c(),$(s[f],1),s[f].m(e,r))}for(ne(),f=u.length;f<s.length;f+=1)m(f);re()}if(o&4){d=Array(h[2].count).fill(h[2]);let f;for(f=0;f<d.length;f+=1){const y=fe(h,d,f);g[f]?(g[f].p(y,o),$(g[f],1)):(g[f]=me(y),g[f].c(),$(g[f],1),g[f].m(e,c))}for(ne(),f=d.length;f<g.length;f+=1)_(f);re()}},i(h){if(!l){$(t.$$.fragment,h);for(let o=0;o<u.length;o+=1)$(s[o]);for(let o=0;o<d.length;o+=1)$(g[o]);$(i.$$.fragment,h),l=!0}},o(h){b(t.$$.fragment,h),s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)b(s[o]);g=g.filter(Boolean);for(let o=0;o<g.length;o+=1)b(g[o]);b(i.$$.fragment,h),l=!1},d(h){h&&p(e),D(t),ae(s,h),ae(g,h),D(i)}}}const G=5e3;function st(a){const e={interval:G},t=[{interval:G,color:"#ffffff"},{interval:G,color:"#ffffff"},{interval:G,color:"#ffffff"}],n={count:100,interval:G*2},r={interval:G/2};return[e,t,n,r]}class lt extends L{constructor(e){super();H(this,e,st,at,F,{})}}function ct(a){let e,t,n,r,c,i,l,u,s,m,d;return i=new J({props:{link:{url:"https://github.com/dagerikhl",label:"dagerikhl @ GitHub"},target:"_blank"}}),u=new J({props:{link:{url:"https://www.linkedin.com/in/dagerikhl",label:"Dag Erik L\xF8vgren @ LinkedIn"},target:"_blank"}}),m=new J({props:{link:{url:"https://www.miles.no/ansatte/dag-erik-lovgren",label:"Dag Erik L\xF8vgren @ Miles"},target:"_blank"}}),{c(){e=E("footer"),t=E("div"),n=Z("\xA9 Dag Erik L\xF8vgren 2022 \u2013"),r=C(),c=E("div"),I(i.$$.fragment),l=C(),I(u.$$.fragment),s=C(),I(m.$$.fragment),this.h()},l(g){e=A(g,"FOOTER",{class:!0});var _=M(e);t=A(_,"DIV",{class:!0});var h=M(t);n=X(h,"\xA9 Dag Erik L\xF8vgren 2022 \u2013"),h.forEach(p),r=N(_),c=A(_,"DIV",{class:!0});var o=M(c);w(i.$$.fragment,o),l=N(o),w(u.$$.fragment,o),s=N(o),w(m.$$.fragment,o),o.forEach(p),_.forEach(p),this.h()},h(){v(t,"class","copyright svelte-ahg4i2"),v(c,"class","links svelte-ahg4i2"),v(e,"class","svelte-ahg4i2")},m(g,_){T(g,e,_),k(e,t),k(t,n),k(e,r),k(e,c),S(i,c,null),k(c,l),S(u,c,null),k(c,s),S(m,c,null),d=!0},p:O,i(g){d||($(i.$$.fragment,g),$(u.$$.fragment,g),$(m.$$.fragment,g),d=!0)},o(g){b(i.$$.fragment,g),b(u.$$.fragment,g),b(m.$$.fragment,g),d=!1},d(g){g&&p(e),D(i),D(u),D(m)}}}class it extends L{constructor(e){super();H(this,e,null,ct,F,{})}}var ot="/_app/assets/dagerikhl-8748f656.png";const ut=()=>{const a=Oe("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},ft={subscribe(a){return ut().page.subscribe(a)}};function ht(a){var i;let e,t,n=((i=a[2])!=null?i:a[1])+"",r,c;return{c(){e=E("li"),t=E("a"),r=Z(n),this.h()},l(l){e=A(l,"LI",{class:!0});var u=M(e);t=A(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var s=M(t);r=X(s,n),s.forEach(p),u.forEach(p),this.h()},h(){v(t,"sveltekit:prefetch",c=a[0]?!0:void 0),v(t,"href",a[1]),v(t,"class","svelte-1wp4672"),v(e,"class","svelte-1wp4672"),le(e,"active",a[3].url.pathname===a[1])},m(l,u){T(l,e,u),k(e,t),k(t,r)},p(l,[u]){var s;u&6&&n!==(n=((s=l[2])!=null?s:l[1])+"")&&Pe(r,n),u&1&&c!==(c=l[0]?!0:void 0)&&v(t,"sveltekit:prefetch",c),u&2&&v(t,"href",l[1]),u&10&&le(e,"active",l[3].url.pathname===l[1])},i:O,o:O,d(l){l&&p(e)}}}function gt(a,e,t){let n;x(a,ft,l=>t(3,n=l));let{prefetch:r=!0}=e,{path:c}=e,{label:i}=e;return a.$$set=l=>{"prefetch"in l&&t(0,r=l.prefetch),"path"in l&&t(1,c=l.path),"label"in l&&t(2,i=l.label)},[r,c,i,n]}class q extends L{constructor(e){super();H(this,e,gt,ht,F,{prefetch:0,path:1,label:2})}}function mt(a){let e,t,n,r,c,i,l,u,s,m,d,g;return n=new q({props:{path:"/",label:"Home"}}),c=new q({props:{path:"/cv",label:"CV"}}),l=new q({props:{path:"/publications",label:"Publications"}}),s=new q({props:{path:"/workshops",label:"Workshops"}}),d=new q({props:{path:"/projects",label:"Projects"}}),{c(){e=E("nav"),t=E("ul"),I(n.$$.fragment),r=C(),I(c.$$.fragment),i=C(),I(l.$$.fragment),u=C(),I(s.$$.fragment),m=C(),I(d.$$.fragment),this.h()},l(_){e=A(_,"NAV",{class:!0});var h=M(e);t=A(h,"UL",{class:!0});var o=M(t);w(n.$$.fragment,o),r=N(o),w(c.$$.fragment,o),i=N(o),w(l.$$.fragment,o),u=N(o),w(s.$$.fragment,o),m=N(o),w(d.$$.fragment,o),o.forEach(p),h.forEach(p),this.h()},h(){v(t,"class","svelte-euyyn9"),v(e,"class","svelte-euyyn9")},m(_,h){T(_,e,h),k(e,t),S(n,t,null),k(t,r),S(c,t,null),k(t,i),S(l,t,null),k(t,u),S(s,t,null),k(t,m),S(d,t,null),g=!0},p:O,i(_){g||($(n.$$.fragment,_),$(c.$$.fragment,_),$(l.$$.fragment,_),$(s.$$.fragment,_),$(d.$$.fragment,_),g=!0)},o(_){b(n.$$.fragment,_),b(c.$$.fragment,_),b(l.$$.fragment,_),b(s.$$.fragment,_),b(d.$$.fragment,_),g=!1},d(_){_&&p(e),D(n),D(c),D(l),D(s),D(d)}}}class _t extends L{constructor(e){super();H(this,e,null,mt,F,{})}}const ee={System:"system",Light:"light",Dark:"dark"};function dt(a){let e,t,n,r,c,i;return{c(){e=E("div"),t=E("input"),n=C(),r=E("span"),this.h()},l(l){e=A(l,"DIV",{class:!0});var u=M(e);t=A(u,"INPUT",{type:!0,class:!0}),n=N(u),r=A(u,"SPAN",{class:!0}),M(r).forEach(p),u.forEach(p),this.h()},h(){v(t,"type","checkbox"),v(t,"class","svelte-xetbhu"),v(r,"class","slider svelte-xetbhu"),v(e,"class","switch svelte-xetbhu")},m(l,u){T(l,e,u),k(e,t),t.checked=a[0],k(e,n),k(e,r),c||(i=[ce(t,"change",a[2]),ce(t,"change",a[1])],c=!0)},p(l,[u]){u&1&&(t.checked=l[0])},i:O,o:O,d(l){l&&p(e),c=!1,Te(i)}}}function vt(a,e,t){const n=Le();let{checked:r}=e;const c=({target:l})=>{n("change",{checked:l.checked})};function i(){r=this.checked,t(0,r)}return a.$$set=l=>{"checked"in l&&t(0,r=l.checked)},[r,c,i]}class te extends L{constructor(e){super();H(this,e,vt,dt,F,{checked:0})}}function pt(a){let e,t,n,r,c,i,l,u;return n=new te({props:{checked:a[0]}}),n.$on("change",a[1]),c=new te({props:{checked:!1}}),l=new te({props:{checked:!0}}),{c(){e=E("label"),t=Z(`Dark mode
	`),I(n.$$.fragment),r=C(),I(c.$$.fragment),i=C(),I(l.$$.fragment),this.h()},l(s){e=A(s,"LABEL",{class:!0});var m=M(e);t=X(m,`Dark mode
	`),w(n.$$.fragment,m),m.forEach(p),r=N(s),w(c.$$.fragment,s),i=N(s),w(l.$$.fragment,s),this.h()},h(){v(e,"class","switcher svelte-1yg13ro")},m(s,m){T(s,e,m),k(e,t),S(n,e,null),T(s,r,m),S(c,s,m),T(s,i,m),S(l,s,m),u=!0},p(s,[m]){const d={};m&1&&(d.checked=s[0]),n.$set(d)},i(s){u||($(n.$$.fragment,s),$(c.$$.fragment,s),$(l.$$.fragment,s),u=!0)},o(s){b(n.$$.fragment,s),b(c.$$.fragment,s),b(l.$$.fragment,s),u=!1},d(s){s&&p(e),D(n),s&&p(r),D(c,s),s&&p(i),D(l,s)}}}function $t(a,e,t){let n,r;x(a,He,i=>t(2,r=i));const c=({detail:{checked:i}})=>{i?ie(ee.Dark):ie(ee.Light)};return a.$$.update=()=>{a.$$.dirty&4&&t(0,n=r.theme===ee.Dark)},[n,c,r]}class yt extends L{constructor(e){super();H(this,e,$t,pt,F,{})}}function bt(a){let e,t,n,r,c,i,l,u;return c=new _t({}),l=new yt({}),{c(){e=E("header"),t=E("img"),r=C(),I(c.$$.fragment),i=C(),I(l.$$.fragment),this.h()},l(s){e=A(s,"HEADER",{class:!0});var m=M(e);t=A(m,"IMG",{class:!0,src:!0,alt:!0}),r=N(m),w(c.$$.fragment,m),i=N(m),w(l.$$.fragment,m),m.forEach(p),this.h()},h(){v(t,"class","avatar svelte-1x6id6r"),Fe(t.src,n=ot)||v(t,"src",n),v(t,"alt","dagerikhl avatar"),v(e,"class","svelte-1x6id6r")},m(s,m){T(s,e,m),k(e,t),k(e,r),S(c,e,null),k(e,i),S(l,e,null),u=!0},p:O,i(s){u||($(c.$$.fragment,s),$(l.$$.fragment,s),u=!0)},o(s){b(c.$$.fragment,s),b(l.$$.fragment,s),u=!1},d(s){s&&p(e),D(c),D(l)}}}class kt extends L{constructor(e){super();H(this,e,null,bt,F,{})}}function It(a){let e,t;const n=a[1].default,r=_e(n,a,a[0],null);return{c(){e=E("main"),r&&r.c(),this.h()},l(c){e=A(c,"MAIN",{class:!0});var i=M(e);r&&r.l(i),i.forEach(p),this.h()},h(){v(e,"class","svelte-1kdwjgh")},m(c,i){T(c,e,i),r&&r.m(e,null),t=!0},p(c,[i]){r&&r.p&&(!t||i&1)&&de(r,n,c,c[0],t?pe(n,c[0],i,null):ve(c[0]),null)},i(c){t||($(r,c),t=!0)},o(c){b(r,c),t=!1},d(c){c&&p(e),r&&r.d(c)}}}function wt(a,e,t){let{$$slots:n={},$$scope:r}=e;return a.$$set=c=>{"$$scope"in c&&t(0,r=c.$$scope)},[r,n]}class St extends L{constructor(e){super();H(this,e,wt,It,F,{})}}function Dt(a){let e;const t=a[0].default,n=_e(t,a,a[1],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,c){n&&n.m(r,c),e=!0},p(r,c){n&&n.p&&(!e||c&2)&&de(n,t,r,r[1],e?pe(t,r[1],c,null):ve(r[1]),null)},i(r){e||($(n,r),e=!0)},o(r){b(n,r),e=!1},d(r){n&&n.d(r)}}}function Et(a){let e,t,n,r,c,i,l,u,s,m,d,g,_,h;return e=new xe({}),r=new kt({}),l=new lt({}),s=new St({props:{$$slots:{default:[Dt]},$$scope:{ctx:a}}}),d=new Ve({}),_=new it({}),{c(){I(e.$$.fragment),t=C(),n=E("div"),I(r.$$.fragment),c=C(),i=E("div"),I(l.$$.fragment),u=C(),I(s.$$.fragment),m=C(),I(d.$$.fragment),g=C(),I(_.$$.fragment),this.h()},l(o){w(e.$$.fragment,o),t=N(o),n=A(o,"DIV",{class:!0});var f=M(n);w(r.$$.fragment,f),c=N(f),i=A(f,"DIV",{class:!0});var y=M(i);w(l.$$.fragment,y),y.forEach(p),u=N(f),w(s.$$.fragment,f),m=N(f),w(d.$$.fragment,f),g=N(f),w(_.$$.fragment,f),f.forEach(p),this.h()},h(){v(i,"class","background svelte-1mwpquv"),v(n,"class","page svelte-1mwpquv")},m(o,f){S(e,o,f),T(o,t,f),T(o,n,f),S(r,n,null),k(n,c),k(n,i),S(l,i,null),k(n,u),S(s,n,null),k(n,m),S(d,n,null),k(n,g),S(_,n,null),h=!0},p(o,[f]){const y={};f&2&&(y.$$scope={dirty:f,ctx:o}),s.$set(y)},i(o){h||($(e.$$.fragment,o),$(r.$$.fragment,o),$(l.$$.fragment,o),$(s.$$.fragment,o),$(d.$$.fragment,o),$(_.$$.fragment,o),h=!0)},o(o){b(e.$$.fragment,o),b(r.$$.fragment,o),b(l.$$.fragment,o),b(s.$$.fragment,o),b(d.$$.fragment,o),b(_.$$.fragment,o),h=!1},d(o){D(e,o),o&&p(t),o&&p(n),D(r),D(l),D(s),D(d),D(_)}}}function At(a,e,t){let{$$slots:n={},$$scope:r}=e;return a.$$set=c=>{"$$scope"in c&&t(1,r=c.$$scope)},[n,r]}class Nt extends L{constructor(e){super();H(this,e,At,Et,F,{})}}export{Nt as default};
