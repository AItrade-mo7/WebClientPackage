import{d as p,c as m,b as n,w as o,u,e,f as l,F as h,bG as b,bH as f,h as g,o as v,R as c,p as y,i as k,a as A,_ as P,j as w}from"./index-95e0417b.js";import{A as x}from"./index-571b3aeb.js";import"./Input-b78db60b.js";import"./Suffix-ac62c6bb.js";import"./use-merged-state-2a0ec557.js";const t=s=>(y("data-v-fe892616"),s=s(),k(),s),C=t(()=>e("br",null,null,-1)),E=t(()=>e("br",null,null,-1)),I=t(()=>e("br",null,null,-1)),R=t(()=>e("br",null,null,-1)),S=t(()=>e("hr",null,null,-1)),B=t(()=>e("br",null,null,-1)),D=t(()=>e("br",null,null,-1)),V=t(()=>e("br",null,null,-1)),F=t(()=>e("br",null,null,-1)),M=t(()=>e("br",null,null,-1)),N=t(()=>e("br",null,null,-1)),T=t(()=>e("br",null,null,-1)),K=t(()=>e("br",null,null,-1)),L=t(()=>e("br",null,null,-1)),O=p({__name:"DutyPage",setup(s){const r=A(()=>P(()=>import("./PageTitle-b89e7a26.js"),["assets/PageTitle-b89e7a26.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/PageTitle-0e701932.css"])),i=()=>{x({EmailAction:"注销账户操作",IsPassword:!0,async OkBack(a){return b({EmailCode:a.Code,Password:a.Password}).then(_=>{window.$message.success(_.Msg),f()})}})};return(a,_)=>{const d=g;return v(),m(h,null,[n(u(r),null,{default:o(()=>[l(" 用户协议与免责声明 ")]),_:1}),e("div",null,[C,l(" 用户协议与免责声明 【 尚未完善 】："),E,l(" 本系统不会向中国大陆地区用户提供服务。若有任何触犯当地法律的行为，本系统将会立即终止相关服务。"),I,l(" 卫星服务开源免费，其使用和运行，是用户自的主行为，跟本系统没有任何关系。"),R,S,B,l(" 注销账户必要操作："),D,V,n(u(c),{class:"link",to:"/ApiKey"},{default:o(()=>[l(" 1. 必须删除所有的 ApiKey ")]),_:1}),l(),F,M,n(u(c),{class:"link",to:"/SatelliteServe"},{default:o(()=>[l(" 2. 必须停止并删除所有的卫星服务数据 ")]),_:1}),l(),N,T,n(u(c),{class:"link",to:"/ManageEmail"},{default:o(()=>[l(" 3. 必须解绑所有的额外邮箱 ")]),_:1}),l(),K,L,n(d,{type:"error",onClick:_[0]||(_[0]=$=>i())},{default:o(()=>[l(" 注销此账户(不可挽回) ")]),_:1})])],64)}}});const J=w(O,[["__scopeId","data-v-fe892616"]]);export{J as default};