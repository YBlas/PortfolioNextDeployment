(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5970)}])},7952:function(n,t,e){"use strict";e.d(t,{jb:function(){return h}});var i=e(7297),o=e(7283),r=e(5850);function a(){let n=(0,i.Z)(["\n    query GetPhotos($name: String, $internalId: String) {\n  getPhotos(name: $name, internalId: $internalId) {\n    _id\n    url\n    name\n    internalId\n    date\n  }\n}\n    "]);return a=function(){return n},n}let l={},s=(0,o.Ps)(a());function h(n){let t={...l,...n};return r.a(s,t)}},5970:function(n,t,e){"use strict";e.r(t);var i=e(7297),o=e(5893),r=e(4217),a=e(1163),l=e(7294),s=e(7952);function h(){let n=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background-color: ",";\n  position: fixed;\n  top: 0;\n  margin: 0;\n  transition: background-color 1.5s;\n  .title {\n    position: fixed;\n    left: 50%;\n    top: 10%;\n    height: 10%;\n    transform: translate(-50%, -50%);\n    @media (max-width: 1000px) {\n      position: relative;\n      width: 90vw;\n      height: auto;\n    }\n  }\n  overflow-y: hidden;\n  overflow-x: scroll;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  @media (max-width: 1000px) {\n    overflow: scroll;\n  }\n"]);return h=function(){return n},n}function u(){let n=(0,i.Z)(["\n  position: relative;\n  left: 0;\n  display: flex;\n  align-items: center;\n  width: max-content;\n  margin-top: 20vh;\n  @media(max-width: 1000px) {\n    flex-direction: column;\n    padding-left: 0;\n    height: fit-content;\n    width: 100vw;\n  }\n"]);return u=function(){return n},n}function d(){let n=(0,i.Z)(["\n  width: 1000px;\n  height: 700px;\n  margin: 0 40px 60px 40px;\n  background-size: 130%;\n  background-position: center;\n  background-image: url(",');\n  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);\n  @font-face {\n    font-family: AbrilOwn;\n    src: url("abril.ttf");\n  }\n  h1 {\n    margin: 550px 0 0 50px;\n    font-size: 3rem;\n    color: #fff;\n    text-shadow: 0 0 10px rgba(0,0,0,0.5);\n    font-family: AbrilOwn;\n    letter-spacing: 0.1em;\n    transition: all 0.5s;\n    @media (max-width: 1000px) {\n      margin: 150px 0 0 20px;\n      font-size: 1rem;\n    }\n  }\n  :hover {\n    box-shadow: 0 0 20px 0 rgba(0,0,0,0.5);\n    background-image: linear-gradient(rgba(255,0,255,0.1), #00ccff47), url(',");\n    background-size: 140%;\n    cursor: pointer;\n    h1 {\n      margin: 550px 0 0 60px;\n      font-size: 3.2rem;\n      text-shadow: 0 0 20px rgba(0,0,0,0.5);\n      @media (max-width: 1000px) {\n      margin: 150px 0 0 20px;\n      font-size: 1.2rem;\n    }\n    }\n  }\n  transition: all 0.5s;\n  @media (max-width: 1000px) {\n    width: 300px;\n    height: 200px;\n    margin: 40px 0;\n  }\n"]);return d=function(){return n},n}function m(){let n=(0,i.Z)(["\n  position: fixed;\n  ",";\n  width: 100vw;\n  height: 100vh;\n"]);return m=function(){return n},n}function f(){let n=(0,i.Z)(["\n  position: fixed;\n  top: ",";\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #FF0;\n  ","\n  ","\n  transition: height 0.3s, width 0.5s, top 0.8s;\n"]);return f=function(){return n},n}function v(){let n=(0,i.Z)(["\n  position: fixed;\n  top: ",";\n  ","\n  transform: translate(-50%, -50%);\n  background-color: #FFA500;\n  ","\n  ","\n  transition: left 1s, height 0.7s, width 0.5s, top 0.8s;\n"]);return v=function(){return n},n}function c(){let n=(0,i.Z)(["\n  position: fixed;\n  top: ",";\n  ","\n  transform: translate(-50%, -50%);\n  background-color: #0F0;\n  ","\n  ","\n  transition: left 1s, height 0.7s, width 0.5s, top 0.8s;\n"]);return c=function(){return n},n}function p(){let n=(0,i.Z)(["\n  position: fixed;\n  top: ",";\n  ","\n  transform: translate(-50%, -50%);\n  background-color: #00F;\n  ","\n  ","\n  transition: left 1.5s, height 1s, width 0.5s, top 0.8s;\n"]);return p=function(){return n},n}function g(){let n=(0,i.Z)(["\n  position: fixed;\n  top: ",";\n  ","\n  transform: translate(-50%, -50%);\n  background-color: #F00;\n  ","\n  ","\n  transition: left 1.5s, height 1s, width 0.5s, top 0.8s;\n"]);return g=function(){return n},n}let x=()=>{let n=(0,a.useRouter)(),{data:t}=(0,s.jb)({variables:{name:null,internalId:null}}),[e,i]=(0,l.useState)(!1),[r,h]=(0,l.useState)(!1),[u,d]=(0,l.useState)(!1),[m,f]=(0,l.useState)(!1),[v,c]=(0,l.useState)(!1);return setTimeout(()=>{i(!0)},10),setTimeout(()=>{h(!0)},1500),setTimeout(()=>{d(!0)},2500),setTimeout(()=>{f(!0)},3e3),setTimeout(()=>{c(!0)},4e3),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(w,{on:v,children:[(0,o.jsx)("img",{className:"title",src:"name.png"}),(0,o.jsx)(b,{children:t&&t.getPhotos.filter((n,t,e)=>t===e.findIndex(t=>(null==t?void 0:t.internalId)===(null==n?void 0:n.internalId))).map((t,e)=>(0,o.jsx)(k,{onClick:()=>{n.push(null==t?void 0:t.internalId)},url:t.url,children:(0,o.jsx)("h1",{children:null==t?void 0:t.internalId})}))})]}),(0,o.jsx)(Z,{move4:m}),(0,o.jsx)(F,{move:e,move2:r,move3:u,move4:m}),(0,o.jsx)(y,{move:e,move2:r,move3:u,move4:m}),(0,o.jsx)(_,{move:e,move2:r,move3:u,move4:m}),(0,o.jsx)(I,{move:e,move2:r,move3:u,move4:m}),(0,o.jsx)(j,{move2:r,move3:u,move4:m})]})};t.default=x;let w=r.Z.div(h(),n=>n.on?"#cc98b2":"#ffeaf5"),b=r.Z.div(u()),k=r.Z.div(d(),n=>n.url,n=>n.url),Z=r.Z.div(m(),n=>n.move4?"display: none;":"background-color: #000"),j=r.Z.div(f(),n=>n.move4?"-100%":"50%",n=>n.move3?"width: 40vw;":"width: 10vw;",n=>n.move2?"height: 100%;":"height: 5vh;"),_=r.Z.div(v(),n=>n.move4?"-100%":"50%",n=>n.move?"left: 40%;":"left: 50%;",n=>n.move3?"width: 60vw;":"width: 10vw;",n=>n.move2?"height: 100%;":"height: 5vh;"),I=r.Z.div(c(),n=>n.move4?"-100%":"50%",n=>n.move?"left: 60%;":"left: 50%;",n=>n.move3?"width: 60vw;":"width: 10vw;",n=>n.move2?"height: 100%;":"height: 5vh;"),F=r.Z.div(p(),n=>n.move4?"-100%":"50%",n=>n.move?"left: 70%;":"left: 50%;",n=>n.move3?"width: 60vw;":"width: 10vw;",n=>n.move2?"height: 100%;":"height: 5vh;"),y=r.Z.div(g(),n=>n.move4?"-100%":"50%",n=>n.move?"left: 30%;":"left: 50%;",n=>n.move3?"width: 60vw;":"width: 10vw;",n=>n.move2?"height: 100%;":"height: 5vh;")}},function(n){n.O(0,[589,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);