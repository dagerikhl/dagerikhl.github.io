import{S as he,i as de,s as _e,w as q,x as j,y as G,q as b,o as P,B as R,e as D,t as B,k as S,c as T,a as C,h as F,m as A,d as m,b as M,g as O,I as v,j as Q,n as L,p as V,Q as me,a3 as W,a4 as X,l as N,F as pe,a5 as ge,a6 as ve}from"../chunks/index-eb587bf4.js";import{C as ke,M as $e,E as be,P as we,a as ye,s as Ee}from"../chunks/persons-c5255f92.js";import{L as Pe}from"../chunks/Link-14c17530.js";function ee(r,e,l){const t=r.slice();return t[1]=e[l],t}function te(r,e,l){const t=r.slice();return t[4]=e[l],t}function ae(r,e,l){const t=r.slice();return t[7]=e[l],t}function le(r){var s;let e,l=((s=r[0].type)!=null?s:"")+"",t,n,a=r[0].date&&ne(r);return{c(){e=D("h3"),t=B(l),n=S(),a&&a.c(),this.h()},l(i){e=T(i,"H3",{class:!0});var o=C(e);t=F(o,l),n=A(o),a&&a.l(o),o.forEach(m),this.h()},h(){M(e,"class","subheading svelte-o0kwx")},m(i,o){O(i,e,o),v(e,t),v(e,n),a&&a.m(e,null)},p(i,o){var g;o&1&&l!==(l=((g=i[0].type)!=null?g:"")+"")&&Q(t,l),i[0].date?a?a.p(i,o):(a=ne(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&m(e),a&&a.d()}}}function ne(r){let e=r[0].date.getFullYear()+"",l;return{c(){l=B(e)},l(t){l=F(t,e)},m(t,n){O(t,l,n)},p(t,n){n&1&&e!==(e=t[0].date.getFullYear()+"")&&Q(l,e)},d(t){t&&m(l)}}}function se(r){let e,l,t=r[0].links,n=[];for(let s=0;s<t.length;s+=1)n[s]=ie(ae(r,t,s));const a=s=>P(n[s],1,1,()=>{n[s]=null});return{c(){e=D("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=T(s,"DIV",{class:!0});var i=C(e);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(m),this.h()},h(){M(e,"class","links svelte-o0kwx")},m(s,i){O(s,e,i);for(let o=0;o<n.length;o+=1)n[o].m(e,null);l=!0},p(s,i){if(i&1){t=s[0].links;let o;for(o=0;o<t.length;o+=1){const g=ae(s,t,o);n[o]?(n[o].p(g,i),b(n[o],1)):(n[o]=ie(g),n[o].c(),b(n[o],1),n[o].m(e,null))}for(L(),o=t.length;o<n.length;o+=1)a(o);V()}},i(s){if(!l){for(let i=0;i<t.length;i+=1)b(n[i]);l=!0}},o(s){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)P(n[i]);l=!1},d(s){s&&m(e),me(n,s)}}}function ie(r){let e,l;return e=new Pe({props:{link:r[7],target:"_blank"}}),{c(){q(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){G(e,t,n),l=!0},p(t,n){const a={};n&1&&(a.link=t[7]),e.$set(a)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function re(r){let e,l,t,n,a=[],s=new Map,i,o=r[0].performances;const g=d=>d[4].name;for(let d=0;d<o.length;d+=1){let f=te(r,o,d),p=g(f);s.set(p,a[d]=oe(p,f))}return{c(){e=D("div"),l=D("h3"),t=B("Event Performances"),n=S();for(let d=0;d<a.length;d+=1)a[d].c();this.h()},l(d){e=T(d,"DIV",{class:!0});var f=C(e);l=T(f,"H3",{class:!0});var p=C(l);t=F(p,"Event Performances"),p.forEach(m),n=A(f);for(let u=0;u<a.length;u+=1)a[u].l(f);f.forEach(m),this.h()},h(){M(l,"class","svelte-o0kwx"),M(e,"class","performances svelte-o0kwx")},m(d,f){O(d,e,f),v(e,l),v(l,t),v(e,n);for(let p=0;p<a.length;p+=1)a[p].m(e,null);i=!0},p(d,f){f&1&&(o=d[0].performances,L(),a=W(a,f,g,1,d,o,s,e,X,oe,null,te),V())},i(d){if(!i){for(let f=0;f<o.length;f+=1)b(a[f]);i=!0}},o(d){for(let f=0;f<a.length;f+=1)P(a[f]);i=!1},d(d){d&&m(e);for(let f=0;f<a.length;f+=1)a[f].d()}}}function oe(r,e){let l,t,n;return t=new be({props:{performance:e[4]}}),{key:r,first:null,c(){l=N(),q(t.$$.fragment),this.h()},l(a){l=N(),j(t.$$.fragment,a),this.h()},h(){this.first=l},m(a,s){O(a,l,s),G(t,a,s),n=!0},p(a,s){e=a;const i={};s&1&&(i.performance=e[4]),t.$set(i)},i(a){n||(b(t.$$.fragment,a),n=!0)},o(a){P(t.$$.fragment,a),n=!1},d(a){a&&m(l),R(t,a)}}}function ce(r,e){let l,t,n;return t=new we({props:{person:e[1]}}),{key:r,first:null,c(){l=N(),q(t.$$.fragment),this.h()},l(a){l=N(),j(t.$$.fragment,a),this.h()},h(){this.first=l},m(a,s){O(a,l,s),G(t,a,s),n=!0},p(a,s){e=a;const i={};s&1&&(i.person=e[1]),t.$set(i)},i(a){n||(b(t.$$.fragment,a),n=!0)},o(a){P(t.$$.fragment,a),n=!1},d(a){a&&m(l),R(t,a)}}}function Ie(r){let e,l,t=r[0].name+"",n,a,s,i,o,g,d,f,p,u,_,E,w=[],U=new Map,H,y=(r[0].type||r[0].date)&&le(r),k=r[0].links&&se(r);g=new $e({props:{source:r[0].abstract}});let $=r[0].performances&&re(r),Y=r[0].authors;const z=h=>h[1].name;for(let h=0;h<Y.length;h+=1){let c=ee(r,Y,h),I=z(c);U.set(I,w[h]=ce(I,c))}return{c(){e=D("div"),l=D("h2"),n=B(t),a=S(),y&&y.c(),s=S(),k&&k.c(),i=S(),o=D("p"),q(g.$$.fragment),d=S(),$&&$.c(),f=S(),p=D("div"),u=D("h3"),_=B("Authors"),E=S();for(let h=0;h<w.length;h+=1)w[h].c();this.h()},l(h){e=T(h,"DIV",{class:!0});var c=C(e);l=T(c,"H2",{class:!0});var I=C(l);n=F(I,t),I.forEach(m),a=A(c),y&&y.l(c),s=A(c),k&&k.l(c),i=A(c),o=T(c,"P",{class:!0});var Z=C(o);j(g.$$.fragment,Z),Z.forEach(m),d=A(c),$&&$.l(c),f=A(c),p=T(c,"DIV",{class:!0});var J=C(p);u=T(J,"H3",{class:!0});var x=C(u);_=F(x,"Authors"),x.forEach(m),E=A(J);for(let K=0;K<w.length;K+=1)w[K].l(J);J.forEach(m),c.forEach(m),this.h()},h(){M(l,"class","svelte-o0kwx"),M(o,"class","abstract svelte-o0kwx"),M(u,"class","svelte-o0kwx"),M(p,"class","authors svelte-o0kwx"),M(e,"class","publication svelte-o0kwx")},m(h,c){O(h,e,c),v(e,l),v(l,n),v(e,a),y&&y.m(e,null),v(e,s),k&&k.m(e,null),v(e,i),v(e,o),G(g,o,null),v(e,d),$&&$.m(e,null),v(e,f),v(e,p),v(p,u),v(u,_),v(p,E);for(let I=0;I<w.length;I+=1)w[I].m(p,null);H=!0},p(h,c){(!H||c&1)&&t!==(t=h[0].name+"")&&Q(n,t),h[0].type||h[0].date?y?y.p(h,c):(y=le(h),y.c(),y.m(e,s)):y&&(y.d(1),y=null),h[0].links?k?(k.p(h,c),c&1&&b(k,1)):(k=se(h),k.c(),b(k,1),k.m(e,i)):k&&(L(),P(k,1,1,()=>{k=null}),V());const I={};c&1&&(I.source=h[0].abstract),g.$set(I),h[0].performances?$?($.p(h,c),c&1&&b($,1)):($=re(h),$.c(),b($,1),$.m(e,f)):$&&(L(),P($,1,1,()=>{$=null}),V()),c&1&&(Y=h[0].authors,L(),w=W(w,c,z,1,h,Y,U,p,X,ce,null,ee),V())},i(h){if(!H){b(k),b(g.$$.fragment,h),b($);for(let c=0;c<Y.length;c+=1)b(w[c]);H=!0}},o(h){P(k),P(g.$$.fragment,h),P($);for(let c=0;c<w.length;c+=1)P(w[c]);H=!1},d(h){h&&m(e),y&&y.d(),k&&k.d(),R(g),$&&$.d();for(let c=0;c<w.length;c+=1)w[c].d()}}}function De(r){let e,l;return e=new ke({props:{$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){q(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){G(e,t,n),l=!0},p(t,[n]){const a={};n&1025&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function Te(r,e,l){let{publication:t}=e;return r.$$set=n=>{"publication"in n&&l(0,t=n.publication)},[t]}class Ce extends he{constructor(e){super();de(this,e,Te,De,_e,{publication:0})}}function fe(r,e,l){const t=r.slice();return t[1]=e[l],t}function ue(r,e){let l,t,n;return t=new Ce({props:{publication:e[1]}}),{key:r,first:null,c(){l=N(),q(t.$$.fragment),this.h()},l(a){l=N(),j(t.$$.fragment,a),this.h()},h(){this.first=l},m(a,s){O(a,l,s),G(t,a,s),n=!0},p(a,s){e=a},i(a){n||(b(t.$$.fragment,a),n=!0)},o(a){P(t.$$.fragment,a),n=!1},d(a){a&&m(l),R(t,a)}}}function Se(r){let e,l,t,n,a,s,i=[],o=new Map,g,d,f=r[0];const p=u=>u[1].name;for(let u=0;u<f.length;u+=1){let _=fe(r,f,u),E=p(_);o.set(E,i[u]=ue(E,_))}return{c(){e=S(),l=D("section"),t=D("h1"),n=B("Publications"),a=S(),s=D("div");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){pe('[data-svelte="svelte-1t7ijmv"]',document.head).forEach(m),e=A(u),l=T(u,"SECTION",{});var E=C(l);t=T(E,"H1",{});var w=C(t);n=F(w,"Publications"),w.forEach(m),a=A(E),s=T(E,"DIV",{class:!0});var U=C(s);for(let H=0;H<i.length;H+=1)i[H].l(U);U.forEach(m),E.forEach(m),this.h()},h(){document.title="dagerikhl - Publications",M(s,"class","publications svelte-1i38g0a")},m(u,_){O(u,e,_),O(u,l,_),v(l,t),v(t,n),v(l,a),v(l,s);for(let E=0;E<i.length;E+=1)i[E].m(s,null);d=!0},p(u,[_]){_&1&&(f=u[0],L(),i=W(i,_,p,1,u,f,o,s,X,ue,null,fe),V())},i(u){if(!d){for(let _=0;_<f.length;_+=1)b(i[_]);g||ge(()=>{g=ve(s,Ee,{}),g.start()}),d=!0}},o(u){for(let _=0;_<i.length;_+=1)P(i[_]);d=!1},d(u){u&&m(e),u&&m(l);for(let _=0;_<i.length;_+=1)i[_].d()}}}const Le=!0;function Ae(r){return[[{name:'"STIX & Stones" - A Data-Driven Security Game to Facilitate Information Security Education',authors:[ye,{name:"Jingyue Li"},{name:"Tosin Daniel Oyetoyan"}],links:["https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2644564","https://github.com/dagerikhl/ddsg-docs","https://github.com/dagerikhl/ddsg","https://github.com/dagerikhl/ddsg-server"],type:"Master Thesis",date:new Date(2019,6,3),abstract:`Many universities have started to educate students on how to develop secure software and systems. One challenge of teaching information security is that the curriculum can easily be outdated, because new attacks and mitigation approaches arise.

It is therefore necessary to provide software developers with methods and tools that are attractive (e.g., computer games) for self-study and up-to-date information security knowledge during and after the university education.

This paper presents an on-going study to develop an educational game to facilitate information security education.

The game is developed as a single player Tower Defense (TD) game. The educational goal of the game is to teach developers, who are not security experts, how to choose proper mitigation strategies and patterns to defend against various security attack scenarios. One key benefit of our game is that it is data driven, meaning, it can continuously fetch data from relevant security-based online sources (e.g., Common Attack Pattern Enumeration Classification CAPEC) to stay up to date with any new information. This is done automatically.

We evaluated the game by letting students play it and give comments. Evaluation results show that the game can facilitate students learning of mitigation strategies to defend against attack scenarios.
`}]]}class Ve extends he{constructor(e){super();de(this,e,Ae,Se,_e,{})}}export{Ve as default,Le as prerender};
