import{d as T,m as S,n as x,r as d,k as C,c as I,b as o,w as a,u as m,e as n,q as b,F as D,P as F,s as f,v as N,o as R,f as p,L as V,p as B,i as U,a as g,x as $,y as A,U as K,T as M,h as O,_ as v,j}from"./index-95e0417b.js";import{v as q}from"./verify-fcd68c05.js";import{P as z}from"./Ping-0e58c2bc.js";import{_ as W,a as X}from"./FormItem-16ee8613.js";import{_ as G}from"./Input-b78db60b.js";import"./format-length-c9d165c6.js";import"./get-82e41413.js";import"./Suffix-ac62c6bb.js";import"./use-merged-state-2a0ec557.js";const H=_=>(B("data-v-e4a1cdfc"),_=_(),U(),_),J={class:"PageWrapper"},Q={className:"Login__logo-box"},Y=["src"],Z=H(()=>n("h2",{className:"Login__title"},[n("div",null,"登录")],-1)),ee={class:"change_password"},oe=T({__name:"LoginPage",setup(_){const w=async()=>{const t=await z();if(t.Code>0){const e=t.Data.Token;F.update(t.Data),e&&await f(e)}else N()};S(()=>{w()});const P=g(()=>v(()=>import("./XIcon-bc7fc57b.js"),["assets/XIcon-bc7fc57b.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/XIcon-dcf3bf82.css"])),y=g(()=>v(()=>import("./PageTitle-b89e7a26.js"),["assets/PageTitle-b89e7a26.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/PageTitle-0e701932.css"])),h=x();let i=d(!1);const s=d({Email:"",Password:""}),u=async()=>{const t=q("Email",s.value.Email);if(t){window.$message.warning(t);return}i.value=!0;const e=await $({...A(s.value)});if(e.Code>0){const l=await f(e.Data.Token);window.$message.success(e.Msg),K.update(l.Data),M.open(),h.replace("/Personal")}i.value=!1};return(t,e)=>{const l=G,r=X,L=C("RouterLink"),k=O,E=W;return R(),I(D,null,[o(m(y),null,{default:a(()=>[p("Login")]),_:1}),n("div",J,[n("div",Q,[n("img",{className:"Login__logo",src:m(V),alt:""},null,8,Y)]),Z,o(E,{onKeyup:b(u,["enter"]),ref:"loginForm",model:s.value,size:"small",class:"myForm"},{default:a(()=>[o(r,{class:"myForm__item"},{default:a(()=>[o(l,{name:"Email",value:s.value.Email,"onUpdate:value":e[0]||(e[0]=c=>s.value.Email=c),inputProps:{autocomplete:"password"},placeholder:"请输入邮箱地址"},{prefix:a(()=>[o(m(P),{name:"MailOutlined"})]),_:1},8,["value"])]),_:1}),o(r,{class:"myForm__item"},{default:a(()=>[o(l,{value:s.value.Password,"onUpdate:value":e[1]||(e[1]=c=>s.value.Password=c),type:"password",name:"Password","show-password-on":"click",placeholder:"请输入密码",inputProps:{autocomplete:"password"}},null,8,["value"])]),_:1}),n("div",ee,[o(L,{to:"/ChangePassword"},{default:a(()=>[p(" 忘记密码? ")]),_:1})]),o(r,{class:"myForm__item"},{default:a(()=>[o(k,{class:"Submit",disabled:i.value,type:"primary",onClick:u},{default:a(()=>[p(" 登录 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["onKeyup","model"])])],64)}}});const me=j(oe,[["__scopeId","data-v-e4a1cdfc"]]);export{me as default};
