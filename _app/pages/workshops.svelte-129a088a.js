var Pe=Object.defineProperty,We=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ae=(a,e,l)=>e in a?Pe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,se=(a,e)=>{for(var l in e||(e={}))Ae.call(e,l)&&ae(a,l,e[l]);if(ie)for(var l of ie(e))Me.call(e,l)&&ae(a,l,e[l]);return a},oe=(a,e)=>We(a,Ge(e));import{S as L,i as O,s as F,e as w,t as W,k as M,c as b,a as D,h as G,d as m,m as N,b as d,g as k,F as p,j as H,l as V,G as Q,w as T,x as j,y as R,q as E,o as I,B as q,a0 as Ne,a1 as Ve,a2 as He,a3 as ze,a6 as Te,a7 as je,$ as X,n as B,p as C,V as Re,a8 as ee,a9 as te,aa as qe,ab as Be,ac as Ce,a5 as Le}from"../chunks/vendor-8d945e40.js";import{L as Ie}from"../chunks/Link-4b9ac67f.js";const Z=(a,e=!1)=>{if(!a)return"";const l=a.getFullYear(),t=`${a.getMonth()+1}`.padStart(2,"0"),r=`${a.getDate()}`.padStart(2,"0"),n=`${l}-${t}-${r}`;if(!(e||a.getHours()!==0||a.getMinutes()!==0))return n;const s=`${a.getHours()}`.padStart(2,"0"),o=`${a.getMinutes()}`.padStart(2,"0");return`${n} ${s}:${o}`};function fe(a){let e,l,t=a[0].name+"",r,n,i,s=a[0].event&&ce(a),o=a[0].location&&he(a),f=a[0].time&&ue(a);return{c(){e=w("div"),l=w("h4"),r=W(t),s&&s.c(),n=M(),o&&o.c(),i=M(),f&&f.c(),this.h()},l(c){e=b(c,"DIV",{class:!0});var h=D(e);l=b(h,"H4",{class:!0});var u=D(l);r=G(u,t),s&&s.l(u),u.forEach(m),n=N(h),o&&o.l(h),i=N(h),f&&f.l(h),h.forEach(m),this.h()},h(){d(l,"class","svelte-1v4v1up"),d(e,"class","performance svelte-1v4v1up")},m(c,h){k(c,e,h),p(e,l),p(l,r),s&&s.m(l,null),p(e,n),o&&o.m(e,null),p(e,i),f&&f.m(e,null)},p(c,h){h&1&&t!==(t=c[0].name+"")&&H(r,t),c[0].event?s?s.p(c,h):(s=ce(c),s.c(),s.m(l,null)):s&&(s.d(1),s=null),c[0].location?o?o.p(c,h):(o=he(c),o.c(),o.m(e,i)):o&&(o.d(1),o=null),c[0].time?f?f.p(c,h):(f=ue(c),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(c){c&&m(e),s&&s.d(),o&&o.d(),f&&f.d()}}}function ce(a){let e,l=a[0].event+"",t;return{c(){e=W("\xA0@\xA0"),t=W(l)},l(r){e=G(r,"\xA0@\xA0"),t=G(r,l)},m(r,n){k(r,e,n),k(r,t,n)},p(r,n){n&1&&l!==(l=r[0].event+"")&&H(t,l)},d(r){r&&m(e),r&&m(t)}}}function he(a){let e,l,t=a[0].location+"",r;return{c(){e=w("div"),l=W("Where: "),r=W(t)},l(n){e=b(n,"DIV",{});var i=D(e);l=G(i,"Where: "),r=G(i,t),i.forEach(m)},m(n,i){k(n,e,i),p(e,l),p(e,r)},p(n,i){i&1&&t!==(t=n[0].location+"")&&H(r,t)},d(n){n&&m(e)}}}function ue(a){let e,l,t=Z(a[0].time.from)+"",r,n=a[0].time.to&&me(a);return{c(){e=w("div"),l=W("When: "),r=W(t),n&&n.c()},l(i){e=b(i,"DIV",{});var s=D(e);l=G(s,"When: "),r=G(s,t),n&&n.l(s),s.forEach(m)},m(i,s){k(i,e,s),p(e,l),p(e,r),n&&n.m(e,null)},p(i,s){s&1&&t!==(t=Z(i[0].time.from)+"")&&H(r,t),i[0].time.to?n?n.p(i,s):(n=me(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&m(e),n&&n.d()}}}function me(a){let e,l=Z(a[0].time.to)+"",t;return{c(){e=W("\xA0\u2013\xA0"),t=W(l)},l(r){e=G(r,"\xA0\u2013\xA0"),t=G(r,l)},m(r,n){k(r,e,n),k(r,t,n)},p(r,n){n&1&&l!==(l=Z(r[0].time.to)+"")&&H(t,l)},d(r){r&&m(e),r&&m(t)}}}function Oe(a){let e,l=a[0]&&fe(a);return{c(){l&&l.c(),e=V()},l(t){l&&l.l(t),e=V()},m(t,r){l&&l.m(t,r),k(t,e,r)},p(t,[r]){t[0]?l?l.p(t,r):(l=fe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:Q,o:Q,d(t){l&&l.d(t),t&&m(e)}}}function Fe(a,e,l){let{performance:t}=e;return a.$$set=r=>{"performance"in r&&l(0,t=r.performance)},[t]}class Ke extends L{constructor(e){super();O(this,e,Fe,Oe,F,{performance:0})}}function Ye(a){let e;const l=a[2].default,t=Ne(l,a,a[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,n){t&&t.m(r,n),e=!0},p(r,n){t&&t.p&&(!e||n&8)&&Ve(t,l,r,r[3],e?ze(l,r[3],n,null):He(r[3]),null)},i(r){e||(E(t,r),e=!0)},o(r){I(t,r),e=!1},d(r){t&&t.d(r)}}}function Je(a){let e,l;return e=new Ie({props:{link:a[0],title:a[1],target:"_blank",$$slots:{default:[Ye]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.link=t[0]),r&2&&(n.title=t[1]),r&8&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Ue(a,e,l){let{$$slots:t={},$$scope:r}=e,{href:n=""}=e,{title:i}=e;return a.$$set=s=>{"href"in s&&l(0,n=s.href),"title"in s&&l(1,i=s.title),"$$scope"in s&&l(3,r=s.$$scope)},[n,i,t,r]}class Qe extends L{constructor(e){super();O(this,e,Ue,Je,F,{href:0,title:1})}}function Xe(a){let e,l;return e=new Te({props:{source:a[0],renderers:a[3],options:a[1],isInline:a[2]}}),e.$on("parsed",a[5]),{c(){T(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,[r]){const n={};r&1&&(n.source=t[0]),r&8&&(n.renderers=t[3]),r&2&&(n.options=t[1]),r&4&&(n.isInline=t[2]),e.$set(n)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Ze(a,e,l){let t,{source:r=void 0}=e,{renderers:n=void 0}=e,{options:i=void 0}=e,{isInline:s=void 0}=e;function o(f){je.call(this,a,f)}return a.$$set=f=>{"source"in f&&l(0,r=f.source),"renderers"in f&&l(4,n=f.renderers),"options"in f&&l(1,i=f.options),"isInline"in f&&l(2,s=f.isInline)},a.$$.update=()=>{a.$$.dirty&16&&l(3,t=oe(se({},n!=null?n:{}),{link:Qe}))},[r,i,s,t,n,o]}class xe extends L{constructor(e){super();O(this,e,Ze,Xe,F,{source:0,renderers:4,options:1,isInline:2})}}function _e(a){let e;function l(n,i){return n[0].homepage?tt:et}let t=l(a),r=t(a);return{c(){r.c(),e=V()},l(n){r.l(n),e=V()},m(n,i){r.m(n,i),k(n,e,i)},p(n,i){t===(t=l(n))&&r?r.p(n,i):(r.d(1),r=t(n),r&&(r.c(),r.m(e.parentNode,e)))},d(n){r.d(n),n&&m(e)}}}function et(a){let e,l,t,r=a[0].name+"",n,i=a[0].image&&de(a);return{c(){e=w("div"),i&&i.c(),l=M(),t=w("div"),n=W(r),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=D(e);i&&i.l(o),l=N(o),t=b(o,"DIV",{class:!0});var f=D(t);n=G(f,r),f.forEach(m),o.forEach(m),this.h()},h(){d(t,"class","name svelte-z6n8jb"),d(e,"class","person svelte-z6n8jb")},m(s,o){k(s,e,o),i&&i.m(e,null),p(e,l),p(e,t),p(t,n)},p(s,o){s[0].image?i?i.p(s,o):(i=de(s),i.c(),i.m(e,l)):i&&(i.d(1),i=null),o&1&&r!==(r=s[0].name+"")&&H(n,r)},d(s){s&&m(e),i&&i.d()}}}function tt(a){let e,l,t,r=a[0].name+"",n,i,s=a[0].image&&pe(a);return{c(){e=w("a"),s&&s.c(),l=M(),t=w("div"),n=W(r),this.h()},l(o){e=b(o,"A",{class:!0,href:!0,target:!0});var f=D(e);s&&s.l(f),l=N(f),t=b(f,"DIV",{class:!0});var c=D(t);n=G(c,r),c.forEach(m),f.forEach(m),this.h()},h(){d(t,"class","name svelte-z6n8jb"),d(e,"class","person svelte-z6n8jb"),d(e,"href",i=a[0].homepage),d(e,"target","_blank")},m(o,f){k(o,e,f),s&&s.m(e,null),p(e,l),p(e,t),p(t,n)},p(o,f){o[0].image?s?s.p(o,f):(s=pe(o),s.c(),s.m(e,l)):s&&(s.d(1),s=null),f&1&&r!==(r=o[0].name+"")&&H(n,r),f&1&&i!==(i=o[0].homepage)&&d(e,"href",i)},d(o){o&&m(e),s&&s.d()}}}function de(a){let e,l,t,r,n;return{c(){e=w("img"),this.h()},l(i){e=b(i,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,l=a[0].image)||d(e,"src",l),d(e,"height",t=a[1].height),d(e,"width",r=a[1].width),d(e,"alt",n=a[0].name+" portrait"),d(e,"class","svelte-z6n8jb")},m(i,s){k(i,e,s)},p(i,s){s&1&&!X(e.src,l=i[0].image)&&d(e,"src",l),s&2&&t!==(t=i[1].height)&&d(e,"height",t),s&2&&r!==(r=i[1].width)&&d(e,"width",r),s&1&&n!==(n=i[0].name+" portrait")&&d(e,"alt",n)},d(i){i&&m(e)}}}function pe(a){let e,l,t,r,n;return{c(){e=w("img"),this.h()},l(i){e=b(i,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,l=a[0].image)||d(e,"src",l),d(e,"height",t=a[1].height),d(e,"width",r=a[1].width),d(e,"alt",n=a[0].name+" portrait"),d(e,"class","svelte-z6n8jb")},m(i,s){k(i,e,s)},p(i,s){s&1&&!X(e.src,l=i[0].image)&&d(e,"src",l),s&2&&t!==(t=i[1].height)&&d(e,"height",t),s&2&&r!==(r=i[1].width)&&d(e,"width",r),s&1&&n!==(n=i[0].name+" portrait")&&d(e,"alt",n)},d(i){i&&m(e)}}}function lt(a){let e,l=a[0]&&_e(a);return{c(){l&&l.c(),e=V()},l(t){l&&l.l(t),e=V()},m(t,r){l&&l.m(t,r),k(t,e,r)},p(t,[r]){t[0]?l?l.p(t,r):(l=_e(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:Q,o:Q,d(t){l&&l.d(t),t&&m(e)}}}function rt(a,e,l){let{person:t}=e,{size:r={height:196,width:196}}=e;return a.$$set=n=>{"person"in n&&l(0,t=n.person),"size"in n&&l(1,r=n.size)},[t,r]}class nt extends L{constructor(e){super();O(this,e,rt,lt,F,{person:0,size:1})}}function ge(a,e,l){const t=a.slice();return t[1]=e[l],t}function ve(a,e,l){const t=a.slice();return t[4]=e[l],t}function ke(a,e,l){const t=a.slice();return t[7]=e[l],t}function we(a){let e,l,t=a[0].links,r=[];for(let i=0;i<t.length;i+=1)r[i]=be(ke(a,t,i));const n=i=>I(r[i],1,1,()=>{r[i]=null});return{c(){e=w("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var s=D(e);for(let o=0;o<r.length;o+=1)r[o].l(s);s.forEach(m),this.h()},h(){d(e,"class","links svelte-1elekf")},m(i,s){k(i,e,s);for(let o=0;o<r.length;o+=1)r[o].m(e,null);l=!0},p(i,s){if(s&1){t=i[0].links;let o;for(o=0;o<t.length;o+=1){const f=ke(i,t,o);r[o]?(r[o].p(f,s),E(r[o],1)):(r[o]=be(f),r[o].c(),E(r[o],1),r[o].m(e,null))}for(B(),o=t.length;o<r.length;o+=1)n(o);C()}},i(i){if(!l){for(let s=0;s<t.length;s+=1)E(r[s]);l=!0}},o(i){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)I(r[s]);l=!1},d(i){i&&m(e),Re(r,i)}}}function be(a){let e,l;return e=new Ie({props:{link:a[7],target:"_blank"}}),{c(){T(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){R(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.link=t[7]),e.$set(n)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){I(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function $e(a){let e,l,t,r,n=[],i=new Map,s,o=a[0].performances;const f=c=>c[4].name;for(let c=0;c<o.length;c+=1){let h=ve(a,o,c),u=f(h);i.set(u,n[c]=ye(u,h))}return{c(){e=w("div"),l=w("h3"),t=W("Event Performances"),r=M();for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=b(c,"DIV",{class:!0});var h=D(e);l=b(h,"H3",{class:!0});var u=D(l);t=G(u,"Event Performances"),u.forEach(m),r=N(h);for(let v=0;v<n.length;v+=1)n[v].l(h);h.forEach(m),this.h()},h(){d(l,"class","svelte-1elekf"),d(e,"class","performances svelte-1elekf")},m(c,h){k(c,e,h),p(e,l),p(l,t),p(e,r);for(let u=0;u<n.length;u+=1)n[u].m(e,null);s=!0},p(c,h){h&1&&(o=c[0].performances,B(),n=ee(n,h,f,1,c,o,i,e,te,ye,null,ve),C())},i(c){if(!s){for(let h=0;h<o.length;h+=1)E(n[h]);s=!0}},o(c){for(let h=0;h<n.length;h+=1)I(n[h]);s=!1},d(c){c&&m(e);for(let h=0;h<n.length;h+=1)n[h].d()}}}function ye(a,e){let l,t,r;return t=new Ke({props:{performance:e[4]}}),{key:a,first:null,c(){l=V(),T(t.$$.fragment),this.h()},l(n){l=V(),j(t.$$.fragment,n),this.h()},h(){this.first=l},m(n,i){k(n,l,i),R(t,n,i),r=!0},p(n,i){e=n;const s={};i&1&&(s.performance=e[4]),t.$set(s)},i(n){r||(E(t.$$.fragment,n),r=!0)},o(n){I(t.$$.fragment,n),r=!1},d(n){n&&m(l),q(t,n)}}}function Ee(a,e){let l,t,r;return t=new nt({props:{person:e[1]}}),{key:a,first:null,c(){l=V(),T(t.$$.fragment),this.h()},l(n){l=V(),j(t.$$.fragment,n),this.h()},h(){this.first=l},m(n,i){k(n,l,i),R(t,n,i),r=!0},p(n,i){e=n;const s={};i&1&&(s.person=e[1]),t.$set(s)},i(n){r||(E(t.$$.fragment,n),r=!0)},o(n){I(t.$$.fragment,n),r=!1},d(n){n&&m(l),q(t,n)}}}function it(a){let e,l,t=a[0].name+"",r,n,i,s,o,f,c,h,u,v,P,S=[],K=new Map,z,Y,$=a[0].links&&we(a);o=new xe({props:{source:a[0].abstract}});let y=a[0].performances&&$e(a),J=a[0].authors;const le=g=>g[1].name;for(let g=0;g<J.length;g+=1){let _=ge(a,J,g),A=le(_);K.set(A,S[g]=Ee(A,_))}return{c(){e=w("div"),l=w("h2"),r=W(t),n=M(),$&&$.c(),i=M(),s=w("p"),T(o.$$.fragment),f=M(),y&&y.c(),c=M(),h=w("div"),u=w("h3"),v=W("Authors"),P=M();for(let g=0;g<S.length;g+=1)S[g].c();this.h()},l(g){e=b(g,"DIV",{class:!0});var _=D(e);l=b(_,"H2",{class:!0});var A=D(l);r=G(A,t),A.forEach(m),n=N(_),$&&$.l(_),i=N(_),s=b(_,"P",{class:!0});var re=D(s);j(o.$$.fragment,re),re.forEach(m),f=N(_),y&&y.l(_),c=N(_),h=b(_,"DIV",{class:!0});var U=D(h);u=b(U,"H3",{class:!0});var ne=D(u);v=G(ne,"Authors"),ne.forEach(m),P=N(U);for(let x=0;x<S.length;x+=1)S[x].l(U);U.forEach(m),_.forEach(m),this.h()},h(){d(l,"class","svelte-1elekf"),d(s,"class","abstract svelte-1elekf"),d(u,"class","svelte-1elekf"),d(h,"class","authors svelte-1elekf"),d(e,"class","workshop svelte-1elekf")},m(g,_){k(g,e,_),p(e,l),p(l,r),p(e,n),$&&$.m(e,null),p(e,i),p(e,s),R(o,s,null),p(e,f),y&&y.m(e,null),p(e,c),p(e,h),p(h,u),p(u,v),p(h,P);for(let A=0;A<S.length;A+=1)S[A].m(h,null);Y=!0},p(g,[_]){(!Y||_&1)&&t!==(t=g[0].name+"")&&H(r,t),g[0].links?$?($.p(g,_),_&1&&E($,1)):($=we(g),$.c(),E($,1),$.m(e,i)):$&&(B(),I($,1,1,()=>{$=null}),C());const A={};_&1&&(A.source=g[0].abstract),o.$set(A),g[0].performances?y?(y.p(g,_),_&1&&E(y,1)):(y=$e(g),y.c(),E(y,1),y.m(e,c)):y&&(B(),I(y,1,1,()=>{y=null}),C()),_&1&&(J=g[0].authors,B(),S=ee(S,_,le,1,g,J,K,h,te,Ee,null,ge),C())},i(g){if(!Y){E($),E(o.$$.fragment,g),E(y);for(let _=0;_<J.length;_+=1)E(S[_]);z||qe(()=>{z=Be(e,Ce,{}),z.start()}),Y=!0}},o(g){I($),I(o.$$.fragment,g),I(y);for(let _=0;_<S.length;_+=1)I(S[_]);Y=!1},d(g){g&&m(e),$&&$.d(),q(o),y&&y.d();for(let _=0;_<S.length;_+=1)S[_].d()}}}function at(a,e,l){let{workshop:t}=e;return a.$$set=r=>{"workshop"in r&&l(0,t=r.workshop)},[t]}class st extends L{constructor(e){super();O(this,e,at,it,F,{workshop:0})}}function De(a,e,l){const t=a.slice();return t[2]=e[l],t}function Se(a,e){let l,t,r;return t=new st({props:{workshop:e[2]}}),{key:a,first:null,c(){l=V(),T(t.$$.fragment),this.h()},l(n){l=V(),j(t.$$.fragment,n),this.h()},h(){this.first=l},m(n,i){k(n,l,i),R(t,n,i),r=!0},p(n,i){e=n},i(n){r||(E(t.$$.fragment,n),r=!0)},o(n){I(t.$$.fragment,n),r=!1},d(n){n&&m(l),q(t,n)}}}function ot(a){let e,l,t,r,n,i,s=[],o=new Map,f,c=a[0];const h=u=>u[2].name;for(let u=0;u<c.length;u+=1){let v=De(a,c,u),P=h(v);o.set(P,s[u]=Se(P,v))}return{c(){e=M(),l=w("section"),t=w("h1"),r=W("Workshops"),n=M(),i=w("div");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){Le('[data-svelte="svelte-raa41y"]',document.head).forEach(m),e=N(u),l=b(u,"SECTION",{});var P=D(l);t=b(P,"H1",{});var S=D(t);r=G(S,"Workshops"),S.forEach(m),n=N(P),i=b(P,"DIV",{class:!0});var K=D(i);for(let z=0;z<s.length;z+=1)s[z].l(K);K.forEach(m),P.forEach(m),this.h()},h(){document.title="dagerikhl - Workshops",d(i,"class","workshops svelte-xpnivn")},m(u,v){k(u,e,v),k(u,l,v),p(l,t),p(t,r),p(l,n),p(l,i);for(let P=0;P<s.length;P+=1)s[P].m(i,null);f=!0},p(u,[v]){v&1&&(c=u[0],B(),s=ee(s,v,h,1,u,c,o,i,te,Se,null,De),C())},i(u){if(!f){for(let v=0;v<c.length;v+=1)E(s[v]);f=!0}},o(u){for(let v=0;v<s.length;v+=1)I(s[v]);f=!1},d(u){u&&m(e),u&&m(l);for(let v=0;v<s.length;v+=1)s[v].d()}}}const mt=!0;function ft(a){const e={name:"Dag Erik L\xF8vgren",homepage:"https://dagerikhl.github.io/",image:"https://raw.githubusercontent.com/dagerikhl/avatars/master/Miles/DagErik.png"};return[[{name:"Gather your Party with Svelte",authors:[e,{name:"Alexander Castillo",homepage:"https://github.com/palexcast",image:"https://avatars.githubusercontent.com/u/15246162?v=4"}],links:["https://github.com/miles-no/booster2022-gather-your-party-with-svelte"],abstract:`In this workshop we will take you through the basic concepts of Svelte. We\u2019ll do this by making our
own Character Creator! If you\u2019re not familiar with the concept, a character creator is a tool for
making a fictional character using a variety of features. Examples of features: Inputting name,
rolling stats, selecting abilities, uploading portrait, selecting appearance, writing bio, etc.
Here\u2019s a [simple example](https://basicfantasy.andrewcooperonline.com/), and here\u2019s a more
[advanced example](https://www.dungeonmastersvault.com/pages/dnd/5e/character-builder).

The workshop will start off with an introduction to Svelte and the app we will be building. The
workshop will then proceed with building the app through several step. And here\u2019s where the learning
comes in: each step is designed to showcase a certain feature of Svelte. And don\u2019t worry if you fall
behind on a step, we\u2019ll have code ready for you to skip to the next step.

We\u2019ll finish the workshop by taking a look at our work and comparing Svelte and its features against
other popular web technologies, such as React.

Throughout the workshop Alexander and Dag Erik will be available for questions, help, or just a
chat.

We hope you find this interesting, and can\u2019t wait to see you!

\\\\- Alexander Castillo and Dag Erik L\xF8vgren.

- Primarily for: Developers.
- Participant requirements: A computer with Git, Node 16+, and Npm/Yarn installed. Some experience
  with web development and TypeScript/JavaScript is recommended. Experience with Svelte is not
  required.
`,performances:[{name:"Gather your Party with Svelte",event:"BoosterConf 2022",location:"Radisson Blu Royal Hotel Bryggen, Bergen, Norway",time:{from:new Date(2022,3-1,24,9,0),to:new Date(2022,3-1,24,12,15)}}]},{name:"Gather your Party and Learn a New Technology",authors:[e],links:["https://github.com/dagerikhl/miles-fagdag01-gypalant-case-svelte","https://github.com/dagerikhl/miles-fagdag01-gypalant-case-go"],abstract:`Using a full day to explore and learn a new technology, either through free exploration, or through
a predefined starter with a case attached.

The workshop is split into two technologies: Svelte and Go(lang).

For Svelte, the case is to create a character creator, and incidentally was the inspiration for the
"Gather your Party with Svelte" workshop above.

For Go, two starter cases are given: a completely blank slate for making anything you want, and an
API-starter for making some kind of API with Go.

The cases are described in more detail in the Git repositories.

_Note: The workshop descriptions in the Git repositories are in Norwegian._
`,performances:[{name:"Gather your Party and Learn a New Technology",event:"Miles Subject Day #1",location:"Miles Bergen, Norway",time:{from:new Date(2021,10-1,8,8,0),to:new Date(2021,10-1,8,16,0)}}]}]]}class _t extends L{constructor(e){super();O(this,e,ft,ot,F,{})}}export{_t as default,mt as prerender};
