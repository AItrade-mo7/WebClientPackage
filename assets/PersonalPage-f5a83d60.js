import{d as f,k as v,c as P,b as e,w as a,u as o,e as t,t as c,F as g,h as y,o as h,f as n,U as i,L as C,T as k,bH as N,a as d,_ as u,j as E}from"./index-95e0417b.js";import{_ as b}from"./Avatar-795eae64.js";import"./Tag-5dcaf9b3.js";const O={class:"PageWrapper"},L={className:"Personal__info"},x={className:"Personal__NickName"},T={className:"Personal__Email"},A={className:"Personal__link"},D={class:"Personal__Card"},I={class:"Personal__Card"},V={class:"Personal__Card"},w={class:"Personal__Card"},B={class:"Personal__Card"},R={class:"Personal__Card"},F=f({__name:"PersonalPage",setup(M){const s=d(()=>u(()=>import("./XIcon-bc7fc57b.js"),["assets/XIcon-bc7fc57b.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/XIcon-dcf3bf82.css"])),p=d(()=>u(()=>import("./PageTitle-b89e7a26.js"),["assets/PageTitle-b89e7a26.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/PageTitle-0e701932.css"]));return(S,r)=>{const m=b,_=y,l=v("RouterLink");return h(),P(g,null,[e(o(p),null,{default:a(()=>[n("Personal")]),_:1}),t("div",O,[t("div",L,[e(m,{round:"",size:70,src:o(i).value.Avatar,"fallback-src":o(C)},null,8,["src","fallback-src"]),t("div",x,c(o(i).value.NickName),1),t("div",T,c(o(i).value.Email),1)]),t("div",A,[t("div",D,[e(_,{type:"info",onClick:r[0]||(r[0]=U=>o(k).open())},{icon:a(()=>[e(o(s),{name:"MenuFoldOutlined"})]),default:a(()=>[n(" 开始 ")]),_:1})]),t("div",I,[e(l,{to:"/EditProfile"},{default:a(()=>[e(_,{type:"primary"},{icon:a(()=>[e(o(s),{name:"EditOutlined"})]),default:a(()=>[n(" 编辑资料 ")]),_:1})]),_:1})]),t("div",V,[e(l,{to:"/ChangePassword"},{default:a(()=>[e(_,{secondary:"",type:"primary"},{icon:a(()=>[e(o(s),{name:"KeyOutlined"})]),default:a(()=>[n(" 修改密码 ")]),_:1})]),_:1})]),t("div",w,[e(l,{to:"/ManageEmail"},{default:a(()=>[e(_,{tertiary:"",type:"info"},{icon:a(()=>[e(o(s),{name:"MailOutlined"})]),default:a(()=>[n(" 邮箱管理 ")]),_:1})]),_:1})]),t("div",B,[e(l,{to:"/About/Duty"},{default:a(()=>[e(_,{type:"error"},{icon:a(()=>[e(o(s),{name:"DeleteOutlined"})]),default:a(()=>[n(" 注销账户 ")]),_:1})]),_:1})]),t("div",R,[e(_,{type:"warning",ghost:"",onClick:o(N)},{icon:a(()=>[e(o(s),{name:"LoginOutlined"})]),default:a(()=>[n(" 退出登录 ")]),_:1},8,["onClick"])])])])],64)}}});const H=E(F,[["__scopeId","data-v-778e19ab"]]);export{H as default};
