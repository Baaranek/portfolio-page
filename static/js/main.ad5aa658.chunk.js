(this["webpackJsonpportfolio-page"]=this["webpackJsonpportfolio-page"]||[]).push([[0],{37:function(e,n,t){e.exports=t(52)},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(29),o=t.n(i),l=t(5),c=t(1),d=t(7),u=t(2),m=t(13),s=t(11),f=t(3);function p(){var e=Object(c.a)(["\n    @media (max-width: ","px) {\n      ","\n    }\n  "]);return p=function(){return e},e}var h={medium:1024,tablet:780,small:480},b=Object.keys(h).reduce((function(e,n){return e[n]=function(){return Object(u.c)(p(),h[n],u.c.apply(void 0,arguments))},e}),{});function y(){var e=Object(c.a)(["\n  font-size: 1.5rem;\n  color: ",";\n"]);return y=function(){return e},e}function v(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: ",";\n  text-decoration: none;\n\n  :hover {\n    color: ",";\n\n    > * {\n      color: ",";\n    }\n  }\n\n  &.active {\n    color: ",";\n\n    > * {\n      color: ",";\n    }\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(c.a)(["\n      padding: 0.6rem 1rem;\n      align-items: center;\n    "]);return x=function(){return e},e}function g(){var e=Object(c.a)(["\n  padding: 0.6rem 0;\n  height: 4rem;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  ","\n"]);return g=function(){return e},e}var E=f.b.custom(s.c),w=Object(u.d)(f.b.li)(g(),b.tablet(x())),j=Object(u.d)(E)(v(),(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.active})),O=Object(u.d)(m.a)(y(),(function(e){return e.theme.colors.icon})),k=function(e){var n=e.icon,t=e.description,i=e.route,o=Object(a.useState)(!1),l=Object(d.a)(o,2),c=l[0],u=l[1],m=function(){return u(!c)};return r.a.createElement(w,{onMouseEnter:m,onMouseLeave:m},r.a.createElement(f.a,{exitBeforeEnter:!0},c?r.a.createElement(j,{key:"2",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exact:!0,to:i,exit:{opacity:0,duration:.2}},r.a.createElement("p",null,t)):r.a.createElement(j,{key:"1",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exact:!0,to:i,exit:{opacity:0,duration:.2}},r.a.createElement(O,{icon:n}))))},z=t(18),C=t(9),M=t(20);function S(){var e=Object(c.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: space-evenly;\n"]);return S=function(){return e},e}function I(){var e=Object(c.a)(["\n  width: 80px;\n  cursor: pointer;\n  height: 80px;\n\n  :hover {\n    > * {\n      background: ",";\n    }\n  }\n\n  span {\n    margin-top: 5px;\n    display: block;\n    width: 50%;\n    border-radius: 2px;\n    height: 2px;\n    background: #fff;\n  }\n"]);return I=function(){return e},e}function B(){var e=Object(c.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &.active {\n    color: ",";\n\n    > * {\n      color: ",";\n    }\n  }\n"]);return B=function(){return e},e}function L(){var e=Object(c.a)(["\n  :hover {\n    color: ",";\n  }\n"]);return L=function(){return e},e}function A(){var e=Object(c.a)(["\n  font-size: 3rem;\n  color: ",";\n"]);return A=function(){return e},e}function H(){var e=Object(c.a)(["\n  font-size: 1.5rem;\n  color: ",";\n"]);return H=function(){return e},e}function _(){var e=Object(c.a)(["\n      padding: 0.6rem 1rem;\n      align-items: center;\n    "]);return _=function(){return e},e}function F(){var e=Object(c.a)(["\n  padding: 0.6rem 0;\n  height: 4rem;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  ","\n"]);return F=function(){return e},e}function R(){var e=Object(c.a)(["\n    flex-direction: row-reverse;\n    width: 100vw;\n    height: 64px;\n    position: fixed;\n  "]);return R=function(){return e},e}function Z(){var e=Object(c.a)(["\n      display: flex;\n    "]);return Z=function(){return e},e}function q(){var e=Object(c.a)(["\n  width: 64px;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  p {\n    padding: 0;\n    margin: 0;\n    font-size: 0.8rem;\n  }\n\n  > div {\n    padding: 2rem 0;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0 0;\n    text-align: center;\n\n    ","\n  }\n\n  ","\n"]);return q=function(){return e},e}var D=[{id:1,icon:z.c,description:"Home",route:"/"},{id:2,icon:z.d,description:"About",route:"/about"},{id:3,icon:z.b,description:"Skills",route:"/skills"},{id:4,icon:z.a,description:"Contact",route:"/contact"}],W=Object(u.d)(f.b.header)(q(),(function(e){return e.theme.colors.menu}),b.tablet(Z()),b.tablet(R())),J=Object(u.d)(f.b.li)(F(),b.tablet(_())),P=Object(u.d)(m.a)(H(),(function(e){return e.theme.colors.icon})),T=Object(u.d)(P)(A(),(function(e){return e.theme.colors.active})),Y=Object(u.d)(P)(L(),(function(e){return e.theme.colors.active})),G=Object(u.d)(s.c)(B(),(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.active})),K=Object(u.d)(f.b.div)(I(),(function(e){return e.theme.colors.active})),N=Object(u.d)(f.b.ul)(S()),Q=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(M.useMediaQuery)({query:"(max-width: 780px)"});return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(W,null,r.a.createElement(K,{onClick:function(){return i(!t)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement(f.a,null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,D.map((function(e){var n=e.id,t=e.icon,a=e.description,i=e.route;return r.a.createElement(J,{key:n,whileHover:{scale:1.2,transition:{type:"spring",stiffness:400}},initial:{x:-1e3},animate:{x:0,transition:{duration:1}},exit:{x:-1e3,transition:{duration:1}}},r.a.createElement(G,{exact:!0,to:i},r.a.createElement(P,{icon:t})),r.a.createElement(G,{exact:!0,to:i},r.a.createElement("p",null,a)))})))))),!o&&r.a.createElement(W,{initial:{x:"-4vw"},animate:{x:0},transition:{duration:1}},r.a.createElement("div",null,r.a.createElement(G,{exact:!0,to:"/",initial:{x:-50},animate:{x:0},transition:{duration:.5,delay:.5}},r.a.createElement(T,{icon:C.f}))),r.a.createElement(f.b.div,{initial:{x:-50},animate:{x:0},transition:{duration:.5,delay:.8}},r.a.createElement("ul",null,D.map((function(e){var n=e.id,t=e.icon,a=e.description,i=e.route;return r.a.createElement(k,{key:n,icon:t,route:i,description:a})})))),r.a.createElement(f.b.div,{initial:{x:-50},animate:{x:0},transition:{duration:.5,delay:1.1}},r.a.createElement("ul",null,r.a.createElement(J,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Baaranek"},r.a.createElement(Y,{icon:C.c}))),r.a.createElement(J,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/krystian-otto-8b93241a5/"},r.a.createElement(Y,{icon:C.g})))))))};function X(){var e=Object(c.a)(["\n    margin-top: 64px;\n"]);return X=function(){return e},e}function $(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  color: ",";\n\n  ","\n"]);return $=function(){return e},e}function U(){var e=Object(c.a)(["\n  flex-direction: column;\n"]);return U=function(){return e},e}function V(){var e=Object(c.a)(["\n  display: flex;\n\n  ","\n"]);return V=function(){return e},e}var ee=u.d.div(V(),b.small(U())),ne=u.d.main($(),(function(e){return e.theme.colors.ground}),(function(e){return e.theme.colors.light}),b.medium(X())),te=function(e){var n=e.children;return r.a.createElement(ee,null,r.a.createElement(Q,null),r.a.createElement(ne,null,n))};function ae(){var e=Object(c.a)(["\n  position: relative;\n  text-decoration: none;\n  font-size: 1rem;\n  letter-spacing: 4px;\n  line-height: 2.5rem;\n  display: block;\n  text-align: center;\n  border: 1px solid #ed6337;\n  color: #ed6337;\n  border-radius: 0.2rem;\n  width: 10rem;\n  height: 2.5rem;\n  margin-top: 3rem;\n  transition: all 1s;\n  background-size: 200%;\n  background-position: 100% 0;\n  background-image: linear-gradient(45deg, #ed6337 50%, transparent 50%);\n\n  :hover {\n    color: ",";\n    background-position: 0 100%;\n  }\n"]);return ae=function(){return e},e}var re=f.b.custom(s.b),ie=Object(u.d)(re)(ae(),(function(e){return e.theme.colors.ground})),oe=function(e){var n=e.title,t=e.path;return r.a.createElement(ie,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.4},to:t},n)},le={hidden:{opacity:0,scale:0},visible:{scale:1,opacity:1}};function ce(){var e=Object(c.a)(["\n    width: 70%;\n    height: 70%;\n    top: 0;\n    left: 20%;\n  "]);return ce=function(){return e},e}function de(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    bottom: 10%;\n    left: 10%;\n  "]);return de=function(){return e},e}function ue(){var e=Object(c.a)(["\n  position: absolute;\n  overflow: visible;\n\n  @media (min-width: 960px) {\n    width: 100%;\n    height: 80%;\n  }\n\n  ","\n\n  ","\n"]);return ue=function(){return e},e}var me={initial:{y:-1e3,x:1e3},animate:{y:0,x:0,transition:{duration:2}},exit:{y:1e3,x:-1e3,transition:{duration:1}}},se={animate:{x:-20,y:20,transition:{duration:10,yoyo:1/0}}},fe={animate:{x:50,y:-50,transition:{duration:10,yoyo:1/0}}},pe={animate:{x:50,y:-50,transition:{duration:5,yoyo:1/0}}},he={animate:{x:25,y:-25,transition:{duration:8,yoyo:1/0}}},be={animate:{rotate:360,x:[0,5,-5,0,0,5,-5,0],y:[0,5,-5,0,0,5,-5,0],transition:{duration:30,repeat:1/0,ease:"linear"}}},ye={animate:{scaleX:[1.03,1,1.06],scaleY:[1.03,1,1.06],transition:{duration:6,yoyo:1/0,ease:"linear"}}},ve={initial:{x:-10,y:10},animate:{x:10,y:-10,transition:{duration:7,yoyo:1/0}}},xe={animate:{x:20,y:-20,transition:{duration:5,yoyo:1/0}}},ge={initial:{x:20,y:-20},animate:{x:0,y:0,transition:{duration:5,yoyo:1/0}}},Ee={animate:{x:20,y:-20,transition:{duration:5,yoyo:1/0}}},we={initial:{x:20,y:-20},animate:{x:0,y:0,transition:{duration:5,yoyo:1/0}}},je={animate:{x:15,y:-15,transition:{duration:5,yoyo:1/0}}},Oe=Object(u.d)(f.b.svg)(ue(),b.medium(de()),b.small(ce())),ke=function(){return r.a.createElement(Oe,{initial:"initial",animate:"animate",exit:"exit",variants:me,id:"Layer_1",height:"512",viewBox:"20 -20 600 600",width:"512",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"},r.a.createElement(f.b.path,{variants:ye,d:"m479.69 205.28a18.457 18.457 0 0 1 0 26.11l-231.01 231.01c-50.32 50.32-132.26 51.89-183.07 2.06a129.41 129.41 0 0 1 -.9-183.71l133.93-133.93 50.76-50.76 60.53-60.53a18.887 18.887 0 1 1 26.71 26.71l-36.2 36.2a18.045 18.045 0 1 0 25.52 25.52l107.43-107.43a18.887 18.887 0 1 1 26.71 26.71l-169.75 169.76a18.045 18.045 0 1 0 25.52 25.52l45.11-45.11a18.887 18.887 0 0 1 26.71 26.71l-88.59 88.59a18.049 18.049 0 1 0 25.53 25.52l128.95-128.95a18.463 18.463 0 0 1 26.11 0z",fill:"#ed6337"}),r.a.createElement(f.b.g,{variants:be},r.a.createElement("path",{d:"m243.76 329.89a97.575 97.575 0 0 1 1.27 81.79 21.9 21.9 0 1 0 -21.38 30.49 97.29 97.29 0 0 1 -159.91-100.58l.07.02a21.008 21.008 0 0 0 1.5 1.66 21.888 21.888 0 1 0 19.27-37.04c.88-.97 1.8-1.92 2.74-2.86a97.287 97.287 0 0 1 130.67-6.28l-.13.16a21.245 21.245 0 0 0 -3.28 2.68 20.913 20.913 0 0 0 29.18 29.96z",fill:"#fadf4a"}),r.a.createElement("path",{d:"m245.03 411.68v.01a96.716 96.716 0 0 1 -20.13 29.26c-.41.41-.83.82-1.25 1.22a21.883 21.883 0 1 1 21.38-30.49z",fill:"#dcbe3f"}),r.a.createElement("path",{d:"m243.76 329.89a20.913 20.913 0 0 1 -29.18-29.96 21.245 21.245 0 0 1 3.28-2.68l.13-.16q3.57 2.94 6.91 6.28a97.008 97.008 0 0 1 18.86 26.52z",fill:"#dcbe3f"}),r.a.createElement("path",{d:"m96.26 312.31a21.888 21.888 0 0 1 -30.95 30.96 21.008 21.008 0 0 1 -1.5-1.66l-.07-.02a96.5 96.5 0 0 1 20.84-35.36 21.8 21.8 0 0 1 11.68 6.08z",fill:"#dcbe3f"}),r.a.createElement("circle",{cx:"162.645",cy:"375.945",fill:"#dcbe3f",r:"14.107"}),r.a.createElement("circle",{cx:"159.686",cy:"310.564",fill:"#dcbe3f",r:"8.564"}),r.a.createElement("circle",{cx:"93.686",cy:"392.564",fill:"#dcbe3f",r:"8.564"}),r.a.createElement("circle",{cx:"152.936",cy:"436.564",fill:"#dcbe3f",r:"11.564"})),r.a.createElement(f.b.g,{fill:"#ffa766"},r.a.createElement(f.b.path,{variants:xe,d:"m230.459 162.46a6 6 0 0 1 -4.242-10.242l9.515-9.516a6 6 0 0 1 8.485 8.486l-9.517 9.512a5.978 5.978 0 0 1 -4.241 1.76z"}),r.a.createElement(f.b.path,{variants:Ee,d:"m153.113 239.806a6 6 0 0 1 -4.242-10.243l56.707-56.707a6 6 0 1 1 8.484 8.486l-56.707 56.707a5.98 5.98 0 0 1 -4.242 1.757z"}),r.a.createElement(f.b.g,{variants:ve},r.a.createElement("path",{d:"m132.55 260.37a6.012 6.012 0 0 1 -4.24-1.76 5.406 5.406 0 0 1 -.75-.91 6.051 6.051 0 0 1 -.55-1.04 6.206 6.206 0 0 1 -.34-1.12 5.809 5.809 0 0 1 -.12-1.17 6 6 0 0 1 12 0 5.809 5.809 0 0 1 -.12 1.17 5.692 5.692 0 0 1 -.34 1.12 6.122 6.122 0 0 1 -.55 1.04 5.606 5.606 0 0 1 -.75.91 6.012 6.012 0 0 1 -4.24 1.76z"}),r.a.createElement("path",{d:"m234.077 287a6 6 0 0 1 -4.234-10.251l.244-.243a6 6 0 0 1 8.469 8.5l-.244.243a5.985 5.985 0 0 1 -4.235 1.751z"}),r.a.createElement("path",{d:"m275.782 396.062a6 6 0 0 1 -4.24-10.245l.525-.525a6 6 0 0 1 8.481 8.49l-.526.525a5.979 5.979 0 0 1 -4.24 1.755z"})),r.a.createElement(f.b.g,{variants:je},r.a.createElement("path",{d:"m249.4 271.677a6 6 0 0 1 -4.242-10.243l15.077-15.077a6 6 0 1 1 8.485 8.485l-15.08 15.077a5.979 5.979 0 0 1 -4.24 1.758z"}),r.a.createElement("path",{d:"m290.485 381.36a6 6 0 0 1 -4.242-10.243l8.856-8.855a6 6 0 1 1 8.484 8.485l-8.855 8.856a5.982 5.982 0 0 1 -4.243 1.757z"})),r.a.createElement(f.b.path,{variants:ge,d:"m287.864 167.248a6 6 0 0 1 -4.236-10.248l.169-.169a6 6 0 0 1 8.473 8.5l-.169.168a5.982 5.982 0 0 1 -4.237 1.749z"}),r.a.createElement(f.b.path,{variants:we,d:"m201.34 253.773a6 6 0 0 1 -4.24-10.243l67.242-67.242a6 6 0 0 1 8.484 8.485l-67.242 67.243a5.982 5.982 0 0 1 -4.244 1.757z"})),r.a.createElement(f.b.g,{variants:se},r.a.createElement("path",{d:"m273.9 490.293a6 6 0 0 1 -4.243-10.242l9.116-9.117a6 6 0 0 1 8.487 8.485l-9.116 9.117a5.982 5.982 0 0 1 -4.244 1.757z",fill:"#ccd3df"}),r.a.createElement("path",{d:"m36.436 258.485a6 6 0 0 1 -4.244-10.242l9.63-9.631a6 6 0 0 1 8.487 8.486l-9.63 9.63a5.986 5.986 0 0 1 -4.243 1.757z",fill:"#ccd3df"})),r.a.createElement(f.b.g,{variants:he},r.a.createElement("path",{d:"m76.236 218.685a6 6 0 0 1 -4.242-10.243l94.576-94.576a6 6 0 0 1 8.485 8.486l-94.576 94.575a5.981 5.981 0 0 1 -4.243 1.758z",fill:"#ccd3df"}),r.a.createElement("path",{d:"m311.453 452.739a6 6 0 0 1 -4.242-10.243l80.234-80.234a6 6 0 0 1 8.485 8.485l-80.23 80.234a5.979 5.979 0 0 1 -4.247 1.758z",fill:"#ccd3df"})),r.a.createElement(f.b.g,{variants:pe},r.a.createElement("path",{d:"m422.556 341.636a6 6 0 0 1 -4.244-10.242l15.305-15.306a6 6 0 0 1 8.487 8.486l-15.304 15.305a5.986 5.986 0 0 1 -4.244 1.757z",fill:"#ccd3df"}),r.a.createElement("path",{d:"m201.34 93.581a6 6 0 0 1 -4.24-10.243l19.789-19.789a6 6 0 0 1 8.486 8.485l-19.789 19.79a5.986 5.986 0 0 1 -4.246 1.757z",fill:"#ccd3df"})),r.a.createElement(f.b.g,{variants:fe},r.a.createElement("path",{d:"m427.435 121.909a6 6 0 0 1 -4.243-10.242l19.059-19.059a6 6 0 1 1 8.484 8.486l-19.058 19.058a5.982 5.982 0 0 1 -4.242 1.757z",fill:"#ccd3df"}),r.a.createElement("path",{d:"m475.553 73.792a6 6 0 0 1 -4.242-10.243l9.543-9.543a6 6 0 0 1 8.484 8.485l-9.538 9.543a5.979 5.979 0 0 1 -4.247 1.758z",fill:"#ccd3df"})))};function ze(){var e=Object(c.a)(["\n    width: 100%;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(c.a)(["\n  overflow: visible;\n  flex: 0 0 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 0 0 5rem;\n\n  ","\n"]);return Ce=function(){return e},e}var Me=u.d.div(Ce(),b.medium(ze())),Se=function(e){var n=e.children;return r.a.createElement(Me,null,n)};function Ie(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n  "]);return Ie=function(){return e},e}function Be(){var e=Object(c.a)(["\n    width: 100%;\n  "]);return Be=function(){return e},e}function Le(){var e=Object(c.a)(["\n  position: relative;\n  flex: 0 0 60%;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media (max-width: 1160px) {\n    flex: 0 0 50%;\n  }\n\n  ","\n\n  ","\n"]);return Le=function(){return e},e}var Ae=u.d.div(Le(),b.medium(Be()),b.small(Ie())),He=function(e){var n=e.children;return r.a.createElement(Ae,null,n)};function _e(){var e=Object(c.a)(["\n    flex-direction: column;\n  "]);return _e=function(){return e},e}function Fe(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 100vh;\n\n  ","\n"]);return Fe=function(){return e},e}var Re=Object(u.d)(f.b.div)(Fe(),b.tablet(_e())),Ze=function(e){var n=e.children;return r.a.createElement(Re,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},exit:{opacity:0}},n)},qe=[{id:1,letter:"H",delay:.3},{id:2,letter:"e",delay:.4},{id:3,letter:"l",delay:.5},{id:4,letter:"l",delay:.6},{id:5,letter:"o",delay:.7},{id:6,letter:",",delay:.8}],De=[{id:1,letter:"I",delay:.3},{id:2,letter:"'",delay:.4},{id:3,letter:"m",delay:.5},{id:4,letter:"K",delay:.6},{id:5,letter:"r",delay:.7},{id:6,letter:"y",delay:.8},{id:7,letter:"s",delay:.9},{id:8,letter:"t",delay:1},{id:9,letter:"i",delay:1.1},{id:10,letter:"a",delay:1.2},{id:11,letter:"n",delay:1.3},{id:12,letter:",",delay:1.4}],We=[{id:1,letter:"w",delay:.3},{id:2,letter:"e",delay:.4},{id:3,letter:"b",delay:.5},{id:4,letter:"d",delay:.6},{id:5,letter:"e",delay:.7},{id:6,letter:"v",delay:.8},{id:7,letter:"e",delay:.9},{id:8,letter:"l",delay:1},{id:9,letter:"o",delay:1.1},{id:10,letter:"p",delay:1.2},{id:11,letter:"e",delay:1.3},{id:12,letter:"r",delay:1.4},{id:13,letter:".",delay:1.5}],Je=[{id:1,letter:"A",delay:.3},{id:2,letter:"b",delay:.4},{id:3,letter:"o",delay:.5},{id:4,letter:"u",delay:.6},{id:5,letter:"t",delay:.7},{id:6,letter:"m",delay:.8},{id:7,letter:"e",delay:.9}],Pe=[{id:1,letter:"S",delay:.3},{id:2,letter:"k",delay:.4},{id:3,letter:"i",delay:.5},{id:4,letter:"l",delay:.6},{id:5,letter:"l",delay:.7},{id:6,letter:"s",delay:.8}],Te=[{id:1,letter:"C",delay:.3},{id:2,letter:"o",delay:.4},{id:3,letter:"n",delay:.5},{id:4,letter:"t",delay:.6},{id:5,letter:"a",delay:.7},{id:6,letter:"c",delay:.8},{id:7,letter:"t",delay:.9},{id:8,letter:"m",delay:.9},{id:9,letter:"e",delay:.9}];function Ye(){var e=Object(c.a)(["\n  position: fixed;\n  right: 0;\n  bottom: 10px;\n  background-color: ",";\n  padding: 5px;\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n"]);return Ye=function(){return e},e}function Ge(){var e=Object(c.a)(["\n  display: inline-block;\n  font-size: 3.3rem;\n\n  @media (max-width: 1160px) {\n    font-size: 2.7rem;\n  }\n\n  @media (min-width: 78px) and (max-width: 885px) {\n    font-size: 2.2rem;\n  }\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(c.a)(["\n  > :nth-child(3) {\n    padding-right: 1rem;\n  }\n"]);return Ke=function(){return e},e}function Ne(){var e=Object(c.a)(["\n  > :nth-child(3) {\n    padding-right: 1rem;\n  }\n"]);return Ne=function(){return e},e}var Qe=u.d.div(Ne()),Xe=u.d.div(Ke()),$e=Object(u.d)(f.b.span)(Ge()),Ue=Object(u.d)(f.b.div)(Ye(),(function(e){return e.theme.colors.menu}),(function(e){return e.theme.colors.active})),Ve=function(){return r.a.createElement(Ze,null,r.a.createElement(Se,null,r.a.createElement("div",null,qe.map((function(e){var n=e.id,t=e.letter,a=e.delay;return r.a.createElement($e,{key:n,initial:"hidden",animate:"visible",transition:{delay:a,duration:.3},variants:le},t)}))),r.a.createElement(Qe,null,De.map((function(e){var n=e.id,t=e.letter,a=e.delay;return r.a.createElement($e,{key:n,initial:"hidden",animate:"visible",transition:{delay:a,duration:.3},variants:le},t)}))),r.a.createElement(Xe,null,We.map((function(e){var n=e.id,t=e.letter,a=e.delay;return r.a.createElement($e,{key:n,initial:"hidden",animate:"visible",transition:{delay:a,duration:.3},variants:le},t)}))),r.a.createElement(oe,{title:"Contact Me!",path:"/contact"}),r.a.createElement(Ue,{initial:{x:500},animate:{x:0},transition:{delay:1,duration:.5,type:"spring",stiffness:100}},"Asteroid made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/icongeek26",title:"Icongeek26"},"Icongeek26")," ",r.a.createElement("br",null)," from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))),r.a.createElement(He,null,r.a.createElement(ke,null)))};function en(){var e=Object(c.a)(["\n  padding-right: 5rem;\n"]);return en=function(){return e},e}var nn=Object(u.d)(f.b.p)(en()),tn=function(e){var n=e.children,t=e.delay;return r.a.createElement(nn,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2,delay:t}},n)};function an(){var e=Object(c.a)([""]);return an=function(){return e},e}function rn(){var e=Object(c.a)(["\n  > :nth-child(5) {\n    padding-right: 1rem;\n  }\n"]);return rn=function(){return e},e}function on(){var e=Object(c.a)(["\n  font-size: 3rem;\n  "]);return on=function(){return e},e}function ln(){var e=Object(c.a)(["\n  display: inline-block;\n  font-size: 4rem;\n  color: ",";\n\n  ","\n"]);return ln=function(){return e},e}var cn=Object(u.d)(f.b.span)(ln(),(function(e){return e.theme.colors.active}),b.tablet(on())),dn=u.d.div(rn()),un=u.d.div(an()),mn=function(){return r.a.createElement(Ze,null,r.a.createElement(Se,null,r.a.createElement(dn,null,Je.map((function(e){var n=e.id,t=e.letter,a=e.delay;return r.a.createElement(cn,{key:n,initial:"hidden",animate:"visible",transition:{delay:a,duration:.3},variants:le},t)}))),r.a.createElement(un,null,r.a.createElement(tn,{delay:1},"I'm a computer science student at WSB in Pozna\u0144. I graduated Technical High School for Computer Science."),r.a.createElement(tn,{delay:1.2},"I like reading fantasy and science books, for example Lord of The Rings. In free time I like play computer games."),r.a.createElement(tn,{delay:1.4},"I spend a lot of time learning the programming. For some time it has become my passion, I try to conscientiosly learn new things."),r.a.createElement(tn,{delay:1.6},"I'm determined to find my first job as a web developer."))),r.a.createElement(He,null," ",r.a.createElement(ke,null)))},sn=t(54);function fn(){var e=Object(c.a)(["\n  position: absolute;\n  z-index: 1;\n  color: ",";\n  line-height: 80.83px;\n  font-size: 80.83px;\n  display: block;\n  top: -20px;\n"]);return fn=function(){return e},e}function pn(){var e=Object(c.a)(["\n  position: absolute;\n  z-index: 1;\n  color: ",";\n  line-height: 80.83px;\n  font-size: 80.83px;\n"]);return pn=function(){return e},e}function hn(){var e=Object(c.a)(["\n  position: absolute;\n  z-index: 1;\n  color: ",";\n  line-height: 80.83px;\n  font-size: 80.83px;\n"]);return hn=function(){return e},e}function bn(){var e=Object(c.a)(["\n  position: relative;\n  width: 136px;\n  height: 78.52px;\n  background-color: ",";\n  margin: 39.26px 0;\n  display: flex;\n  justify-content: center;\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    border-left: 68px solid transparent;\n    border-right: 68px solid transparent;\n    z-index: 1;\n  }\n  &:before {\n    bottom: 100%;\n    border-bottom: 39.26px solid ",";\n  }\n  &:after {\n    top: 100%;\n    width: 0;\n    border-top: 39.26px solid ",";\n  }\n"]);return bn=function(){return e},e}function yn(){var e=Object(c.a)(["\n  position: relative;\n  width: 140px;\n  height: 80.83px;\n  background-color: ",";\n  margin: 44px 2px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    border-left: 70px solid transparent;\n    border-right: 70px solid transparent;\n  }\n  &:before {\n    bottom: 100%;\n    border-bottom: 40.41px solid ",";\n  }\n  &:after {\n    top: 100%;\n    width: 0;\n    border-top: 40.41px solid ",";\n  }\n\n  @media (min-width: 1280px) {\n    :nth-child(9n + 6) {\n      margin-left: 74px;\n    }\n    :nth-child(9n + 10) {\n      margin-left: 148px;\n    }\n  }\n  @media (max-width: 1279px) and (min-width: 1024px) {\n    :nth-child(6n + 4) {\n      margin-left: 74px;\n    }\n  }\n  @media (max-width: 1023px) and (min-width: 781px) {\n    :nth-child(4n + 3) {\n      margin-left: 74px;\n    }\n  }\n  @media (max-width: 780px) {\n    :nth-child(3n + 3) {\n      margin-left: 74px;\n    }\n  }\n"]);return yn=function(){return e},e}function vn(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 60%;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n  /* transform: perspective(900px) rotateX(60deg); */\n\n  @media (min-width: 1280px) {\n    width: 780px;\n  }\n  @media (max-width: 1279px) and (min-width: 1024px) {\n    width: 640px;\n  }\n  @media (max-width: 1023px) and (min-width: 781px) {\n    width: 480px;\n  }\n  @media (max-width: 780px) {\n    width: 320px;\n  }\n"]);return vn=function(){return e},e}function xn(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return xn=function(){return e},e}var gn=[{id:1,icon:C.i},{id:2,icon:C.a},{id:3,icon:C.j},{id:4,icon:C.h},{id:5,icon:C.d},{id:6,icon:C.b},{id:7,icon:C.e}],En={initial:{opacity:0},animate:{opacity:1}},wn=u.d.div(xn()),jn=u.d.ul(vn()),On=Object(u.d)(f.b.li)(yn(),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.active}),(function(e){return e.theme.colors.active})),kn=u.d.div(bn(),(function(e){return e.theme.colors.ground}),(function(e){return e.theme.colors.ground}),(function(e){return e.theme.colors.ground})),zn=Object(u.d)(m.a)(hn(),(function(e){return e.theme.colors.icon})),Cn=u.d.svg(pn(),(function(e){return e.theme.colors.icon})),Mn=Object(u.d)(sn.a)(fn(),(function(e){return e.theme.colors.icon})),Sn=function(){return r.a.createElement(wn,null,r.a.createElement(jn,null,gn.map((function(e){var n=e.id,t=e.icon;return r.a.createElement(On,{key:n,variants:En,initial:"initial",animate:"animate",transition:{delay:n/2,duration:1}},r.a.createElement(kn,null,r.a.createElement(zn,{icon:t})))})),r.a.createElement(On,{variants:En,initial:"initial",animate:"animate",transition:{delay:4,duration:1}},r.a.createElement(kn,null,r.a.createElement(Mn,{size:"110"}))),r.a.createElement(On,{variants:En,initial:"initial",animate:"animate",transition:{delay:4.5,duration:1}},r.a.createElement(kn,null,r.a.createElement(Cn,{width:"140",height:"80",fill:"#6b6e70",viewBox:"0 0 290 150",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},r.a.createElement("g",null,r.a.createElement("path",{d:"M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z"}))))),r.a.createElement(On,{variants:En,initial:"initial",animate:"animate",transition:{delay:5,duration:1}},r.a.createElement(kn,null,r.a.createElement(Cn,{height:"80",width:"140",viewBox:"0 0 12 25",fill:"#6b6e70"},r.a.createElement("path",{d:"M11.71 10.41C10.31 4.33 7.39 2.71 6.65 1.57 6.34 1.06 6.07 0.54 5.84 0 5.8 0.54 5.73 0.88 5.26 1.29 4.32 2.11 0.35 5.3 0.01 12.21 -0.3 18.65 4.82 22.62 5.5 23.03 6.02 23.28 6.65 23.03 6.96 22.8 9.43 21.13 12.8 16.69 11.71 10.41"}),r.a.createElement("path",{d:"M5.95 19.5C5.82 21.08 5.72 22 5.38 22.9 5.38 22.9 5.61 24.41 5.76 26L6.32 26C6.45 24.88 6.65 23.76 6.92 22.66 6.21 22.33 5.98 20.89 5.95 19.5Z"}),r.a.createElement("path",{d:"M7.03 22.75L7.03 22.75C6.34 22.43 6.14 20.94 6.11 19.55 6.28 17.25 6.33 14.95 6.26 12.64 6.22 11.44 6.28 1.46 5.96 0 6.18 0.49 6.43 0.97 6.7 1.44 7.44 2.59 10.33 4.21 11.71 10.32 12.79 16.61 9.47 21.06 7.03 22.75Z"})))),r.a.createElement(On,{variants:En,initial:"initial",animate:"animate",transition:{delay:5.5,duration:1}},r.a.createElement(kn,null,r.a.createElement(Cn,{height:"80",width:"140",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"#6b6e70"},r.a.createElement("g",null,r.a.createElement("path",{d:"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"}),r.a.createElement("path",{d:"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"}),r.a.createElement("path",{d:"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"}))))),r.a.createElement(On,{variants:En,initial:"initial",animate:"animate",transition:{delay:6,duration:1}},r.a.createElement(kn,null,r.a.createElement(Cn,{height:"80",width:"140",xmlns:"http://www.w3.org/2000/svg",fill:"#6b6e70",viewBox:"0 0 13 15"},r.a.createElement("path",{d:"M0 14V1l6.5 6.5L13 1v13l-3.25-3.25L6.5 14l-3.25-3.25z"}))))))};function In(){var e=Object(c.a)(["\n  font-size: 3rem;\n  "]);return In=function(){return e},e}function Bn(){var e=Object(c.a)(["\n  display: inline-block;\n  font-size: 4rem;\n  color: ",";\n\n  ","\n"]);return Bn=function(){return e},e}function Ln(){var e=Object(c.a)([""]);return Ln=function(){return e},e}function An(){var e=Object(c.a)([""]);return An=function(){return e},e}var Hn=u.d.div(An()),_n=u.d.div(Ln()),Fn=Object(u.d)(f.b.span)(Bn(),(function(e){return e.theme.colors.active}),b.tablet(In())),Rn=function(){var e=Object(M.useMediaQuery)({minWidth:1224});return r.a.createElement(Ze,null,r.a.createElement(Se,null,r.a.createElement(Hn,null,Pe.map((function(e){var n=e.id,t=e.letter,a=e.delay;return r.a.createElement(Fn,{key:n,initial:"hidden",animate:"visible",transition:{delay:a,duration:.3},variants:le},t)}))),r.a.createElement(_n,null,r.a.createElement(tn,{delay:1},"I mainly learn frontend, but I also know some backend technologies."),r.a.createElement(tn,{delay:1.2},"HTML, CSS(SCSS), JS, React with Router and Redux including Hooks. I like using Styled Components with Framer Motion for basic animations."),r.a.createElement(tn,{delay:1.4},"I know basics of NodeJs with express. I also used MongoDb and websockets for small projects."),r.a.createElement(tn,{delay:1.6},"Check out my github profile or contact me via contact form or directly with my email: otto.krystiann@gmail.com"))),r.a.createElement(He,null,e&&r.a.createElement(Sn,null),!e&&r.a.createElement(ke,null)))},Zn=t(36),qn=t(35),Dn=t.n(qn);function Wn(){var e=Object(c.a)(["\n  color: green;\n"]);return Wn=function(){return e},e}function Jn(){var e=Object(c.a)(["\n  position: relative;\n  font-size: 1rem;\n  letter-spacing: 4px;\n  line-height: 2.5rem;\n  display: block;\n  text-align: center;\n  border: 1px solid #ed6337;\n  color: #ed6337;\n  background-color: transparent;\n  border-radius: 0.2rem;\n  width: 10rem;\n  height: 2.5rem;\n  margin-top: 3rem;\n  cursor: pointer;\n  transition: all 1s;\n  background-size: 200%;\n  background-position: 100% 0;\n  background-image: linear-gradient(45deg, #ed6337 50%, transparent 50%);\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    background-position: 0 100%;\n    color: ",";\n  }\n"]);return Jn=function(){return e},e}function Pn(){var e=Object(c.a)(["\n  height: 2px;\n  background-color: ",";\n"]);return Pn=function(){return e},e}function Tn(){var e=Object(c.a)(["\n  width: 80%;\n  height: 5rem;\n  padding: 1rem;\n  margin: 1rem 0 0;\n  resize: none;\n  background-color: ",";\n  color: ",";\n  border: none;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  :focus {\n    color: ",";\n    outline: none;\n\n    ::placeholder {\n      color: transparent;\n    }\n  }\n"]);return Tn=function(){return e},e}function Yn(){var e=Object(c.a)(["\n  width: 80%;\n  height: 3rem;\n  padding: 1rem;\n  margin: 1rem 0 0;\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n\n  ::placeholder {\n    color: ",";\n  }\n  :focus {\n    outline: none;\n    color: ",";\n\n    ::placeholder {\n      color: transparent;\n    }\n  }\n"]);return Yn=function(){return e},e}function Gn(){var e=Object(c.a)(["\n    padding: 0;\n  "]);return Gn=function(){return e},e}function Kn(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-right: 6rem;\n\n  @media (min-width: 780px) and (max-width: 1024px) {\n    padding: 0;\n  }\n\n  ","\n"]);return Kn=function(){return e},e}function Nn(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Nn=function(){return e},e}function Qn(){var e=Object(c.a)(["\n  font-size: 3rem;\n  "]);return Qn=function(){return e},e}function Xn(){var e=Object(c.a)(["\n  display: inline-block;\n  font-size: 4rem;\n  color: ",";\n\n  ","\n"]);return Xn=function(){return e},e}function $n(){var e=Object(c.a)(["\n  > :nth-child(7) {\n    padding-right: 1rem;\n  }\n"]);return $n=function(){return e},e}var Un={initial:{width:"1vw"},animate:{width:"80%",transition:{duration:.5}},exit:{width:"1vw"}},Vn=u.d.div($n()),et=Object(u.d)(f.b.span)(Xn(),(function(e){return e.theme.colors.active}),b.tablet(Qn())),nt=u.d.div(Nn()),tt=u.d.form(Kn(),b.small(Gn())),at=Object(u.d)(f.b.input)(Yn(),(function(e){return e.theme.colors.form}),(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.form}),(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.icon})),rt=Object(u.d)(f.b.textarea)(Tn(),(function(e){return e.theme.colors.form}),(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.icon})),it=Object(u.d)(f.b.div)(Pn(),(function(e){return e.theme.colors.active})),ot=Object(u.d)(f.b.button)(Jn(),(function(e){return e.theme.colors.ground})),lt=u.d.p(Wn()),ct=function(){var e=Object(Zn.a)({mode:"onChange"}),n=e.register,t=e.handleSubmit,i=e.errors,o=Object(a.useState)(!1),l=Object(d.a)(o,2),c=l[0],u=l[1];return r.a.createElement(Ze,null,r.a.createElement(Se,null,r.a.createElement(Vn,null,Te.map((function(e){var n=e.id,t=e.letter,a=e.delay;return r.a.createElement(et,{key:n,initial:"hidden",animate:"visible",transition:{delay:a,duration:.3},variants:le},t)}))),r.a.createElement(tt,{onSubmit:t((function(e,n){Dn.a.send("service_uyj8wee","template_my2d0en",e,"user_E1UvYiAMBYWTGGoRxEPHP").then((function(e){console.log(e.text),u(!c)}),(function(e){console.log(e.text)})),n.target.reset()}))},c&&r.a.createElement(lt,null,"Message Sent!"),r.a.createElement("div",null,r.a.createElement(at,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1},placeholder:"Email",type:"text",autoComplete:"off",name:"email",ref:n({required:!0,minLength:6,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}),i.email&&r.a.createElement(it,{initial:"initial",animate:"animate",exit:"exit",variants:Un})),r.a.createElement("div",null,r.a.createElement(at,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.2},placeholder:"Subject",type:"text",autoComplete:"off",name:"subject",ref:n({required:!0,minLength:5})}),i.subject&&r.a.createElement(it,{initial:"initial",animate:"animate",exit:"exit",variants:Un})),r.a.createElement(nt,null,r.a.createElement(rt,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.4},placeholder:"Message",autoComplete:"off",name:"message",ref:n({required:!0,minLength:10})}),i.message&&r.a.createElement(it,{initial:"initial",animate:"animate",exit:"exit",variants:Un})),r.a.createElement(ot,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:2},type:"submit"},"Submit!"))),r.a.createElement(He,null,r.a.createElement(ke,null)))},dt=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page Not Found. Keep Degging"))};var ut=function(){var e=Object(l.f)();return r.a.createElement(te,null,r.a.createElement(f.a,{exitBeforeEnter:!0},r.a.createElement(l.c,{location:e,key:e.pathname},r.a.createElement(l.a,{exact:!0,path:"/",component:Ve}),r.a.createElement(l.a,{exact:!0,path:"/about",component:mn}),r.a.createElement(l.a,{exact:!0,path:"/skills",component:Rn}),r.a.createElement(l.a,{exact:!0,path:"/contact",component:ct}),r.a.createElement(l.a,{path:"*",component:dt}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mt(){var e=Object(c.a)(["\n    font-size: 12px;\n    "]);return mt=function(){return e},e}function st(){var e=Object(c.a)(["\n      font-size: 14px;\n    "]);return st=function(){return e},e}function ft(){var e=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Acme&family=Open+Sans:wght@300;400&display=swap');\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n    font-family: 'Acme', sans-serif;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: ",";\n  }\n  html {\n    font-size: 16px;\n    overflow: hidden;\n\n    ","\n\n    ","\n  }\n"]);return ft=function(){return e},e}var pt=Object(u.b)(ft(),(function(e){return e.theme.colors.ground}),b.medium(st()),b.small(mt()));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{theme:{colors:{menu:"#0D0D0D",ground:"#101010",active:"#ed6337",icon:"#6b6e70",light:"#ffffff",form:"#2b2b2b"}}},r.a.createElement(pt,null),r.a.createElement(s.a,{basename:"/"},r.a.createElement(ut,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ad5aa658.chunk.js.map