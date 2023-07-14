import{d as I,r as v,W as w,C as Y,a2 as P,D as c,aV as T,a6 as m,bb as F,N as y,bc as j,Q as _,a5 as X,bd as q,be as H,bf as J,H as Z,ap as z,S as K,V as L,bg as Q,m as G,a8 as ee,a7 as te,a9 as ae,bh as ne,ak as oe,ax as se,bi as ie,G as re,bj as le,bk as ue,b8 as ce,av as de,c as V,b as x,bl as me,w as $,u as N,e as fe,aE as W,F as pe,o as k,f as be,t as ve,bm as he,g as ge,a as O,h as _e,_ as R,j as ye}from"./index-95e0417b.js";import{G as xe}from"./index-a87d1d08.js";import{g as we}from"./attribute-2ee9e579.js";import{a as Se,_ as $e}from"./DrawerContent-9bc1764d.js";import{_ as Ce}from"./Alert-511444aa.js";import"./use-merged-state-2a0ec557.js";import"./format-length-c9d165c6.js";const M=I({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const o=v(null),s=v(e.value),l=v(e.value),a=v("up"),t=v(!1),f=w(()=>t.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),u=w(()=>t.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);Y(P(e,"value"),(n,d)=>{s.value=d,l.value=n,T(r)});function r(){const n=e.newOriginalNumber,d=e.oldOriginalNumber;d===void 0||n===void 0||(n>d?b("up"):d>n&&b("down"))}function b(n){a.value=n,t.value=!1,T(()=>{var d;(d=o.value)===null||d===void 0||d.offsetWidth,t.value=!0})}return()=>{const{clsPrefix:n}=e;return c("span",{ref:o,class:`${n}-base-slot-machine-number`},s.value!==null?c("span",{class:[`${n}-base-slot-machine-old-number ${n}-base-slot-machine-old-number--top`,u.value]},s.value):null,c("span",{class:[`${n}-base-slot-machine-current-number`,f.value]},c("span",{ref:"numberWrapper",class:[`${n}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${n}-base-slot-machine-current-number__inner--not-number`]},l.value)),s.value!==null?c("span",{class:[`${n}-base-slot-machine-old-number ${n}-base-slot-machine-old-number--bottom`,u.value]},s.value):null)}}}),{cubicBezierEaseOut:C}=F;function Ee({duration:e=".2s"}={}){return[m("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${C},
 max-width ${e} ${C},
 transform ${e} ${C}
 `}),m("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${C},
 max-width ${e} ${C},
 transform ${e} ${C}
 `}),m("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),m("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),m("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),m("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Ne=m([m("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),m("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),m("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),m("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),y("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[y("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Ee({duration:".2s"}),j({duration:".2s",delay:"0s"}),y("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[_("top",{transform:"translateY(-100%)"}),_("bottom",{transform:"translateY(100%)"}),_("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),_("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),y("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[_("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),_("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),X("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[_("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ke=I({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){q("-base-slot-machine",Ne,P(e,"clsPrefix"));const o=v(),s=v(),l=w(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let t=e.value;for(e.max!==void 0&&(t=Math.min(e.max,t));t>=1;)a.push(t%10),t/=10,t=Math.floor(t);return a.reverse(),a});return Y(P(e,"value"),(a,t)=>{typeof a=="string"?(s.value=void 0,o.value=void 0):typeof t=="string"?(s.value=a,o.value=void 0):(s.value=a,o.value=t)}),()=>{const{value:a,clsPrefix:t}=e;return typeof a=="number"?c("span",{class:`${t}-base-slot-machine`},c(J,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((f,u)=>c(M,{clsPrefix:t,key:l.value.length-u-1,oldOriginalNumber:o.value,newOriginalNumber:s.value,value:f}))}),c(H,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?c(M,{clsPrefix:t,value:"+"}):null})):c("span",{class:`${t}-base-slot-machine`},a)}}}),Oe=e=>{const{errorColor:o,infoColor:s,successColor:l,warningColor:a,fontFamily:t}=e;return{color:o,colorInfo:s,colorSuccess:l,colorError:o,colorWarning:a,fontSize:"12px",fontFamily:t}},Re={name:"Badge",common:Z,self:Oe},Ie=Re,Ae=m([m("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),y("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[_("as-is",[y("badge-sup",{position:"static",transform:"translateX(0)"},[z({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),_("dot",[y("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[m("::before","border-radius: 4px;")])]),y("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[z({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),y("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),m("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Be=Object.assign(Object.assign({},L.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),De=I({name:"Badge",props:Be,setup(e,{slots:o}){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:a}=K(e),t=L("Badge","-badge",Ae,Ie,e,s),f=v(!1),u=()=>{f.value=!0},r=()=>{f.value=!1},b=w(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!Q(o.value)));G(()=>{b.value&&(f.value=!0)});const n=ee("Badge",a,s),d=w(()=>{const{type:i,color:p}=e,{common:{cubicBezierEaseInOut:g,cubicBezierEaseOut:E},self:{[te("color",i)]:S,fontFamily:B,fontSize:D}}=t.value;return{"--n-font-size":D,"--n-font-family":B,"--n-color":p||S,"--n-ripple-color":p||S,"--n-bezier":g,"--n-ripple-bezier":E}}),h=l?ae("badge",w(()=>{let i="";const{type:p,color:g}=e;return p&&(i+=p[0]),g&&(i+=ne(g)),i}),d,e):void 0,A=w(()=>{const{offset:i}=e;if(!i)return;const[p,g]=i,E=typeof p=="number"?`${p}px`:p,S=typeof g=="number"?`${g}px`:g;return{transform:`translate(calc(${n!=null&&n.value?"50%":"-50%"} + ${E}), ${S})`}});return{rtlEnabled:n,mergedClsPrefix:s,appeared:f,showBadge:b,handleAfterEnter:u,handleAfterLeave:r,cssVars:l?void 0:d,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender,offsetStyle:A}},render(){var e;const{mergedClsPrefix:o,onRender:s,themeClass:l,$slots:a}=this;s==null||s();const t=(e=a.default)===null||e===void 0?void 0:e.call(a);return c("div",{class:[`${o}-badge`,this.rtlEnabled&&`${o}-badge--rtl`,l,{[`${o}-badge--dot`]:this.dot,[`${o}-badge--as-is`]:!t}],style:this.cssVars},t,c(oe,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?c("sup",{class:`${o}-badge-sup`,title:we(this.value),style:this.offsetStyle},se(a.value,()=>[this.dot?null:c(ke,{clsPrefix:o,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?c(ie,{clsPrefix:o}):null):null}))}});function Pe(e){let o="wss:";const s=re().MainUrl;let l="/api/wss";window.location.protocol==="http:"&&(o="ws:"),e.Host&&(l=`/CoinAI/wss?host=${e.Host}`);const t=o+s+l,f={Token:le(),Encrypt:ue("/wss")},u=new WebSocket(t);return u.addEventListener("open",r=>{u.send(JSON.stringify(f)),e.OpenEvent&&e.OpenEvent({Socket:u,Event:"open",Response:{Code:1,Data:r,Msg:"open"}})}),u.addEventListener("message",r=>{let b={Code:-1,Data:{},Msg:"message"};try{const n=r.data;b=JSON.parse(n)}catch{b={Code:1,Data:{},Msg:r.data}}e.MessageEvent({Socket:u,Event:"message",Response:b})}),u}const Te={class:"wrapper"},ze={key:0,class:"PageWrapper"},Ve=I({__name:"CoinAI",setup(e){const o=O(()=>R(()=>import("./PageTitle-b89e7a26.js"),["assets/PageTitle-b89e7a26.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/PageTitle-0e701932.css"])),s=O(()=>R(()=>import("./XIcon-bc7fc57b.js"),["assets/XIcon-bc7fc57b.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/XIcon-dcf3bf82.css"])),l=O(()=>R(()=>import("./SysManage-fd60df9c.js"),["assets/SysManage-fd60df9c.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/index-571b3aeb.js","assets/Input-b78db60b.js","assets/Suffix-ac62c6bb.js","assets/use-merged-state-2a0ec557.js","assets/SysManage-87ff3f92.css"])),a=O(()=>R(()=>import("./InfoOk-b6e6944a.js"),["assets/InfoOk-b6e6944a.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/filters-342b8771.js","assets/DrawerContent-9bc1764d.js","assets/use-merged-state-2a0ec557.js","assets/format-length-c9d165c6.js","assets/InfoOk-cb9c96e0.css"]));let t=v({}),f=v(""),u=null,r=v({});function b(i,p){r.value={...i.AppEnv,GithubVersion:i.GithubInfo.Version,LeverOpt:i.LeverOpt,MainUser:i.MainUser,...p}}function n(){xe({SatelliteServe:f.value}).then(i=>{i.Code>0&&(t.value=i.Data,b(t.value,r.value))}).catch(()=>{window.$message.error("服务尚未启动",{onAfterLeave(){window.location.href="/SatelliteServe"}})})}function d(){u=Pe({Host:f.value,MessageEvent(i){i.Response.Code==1&&b(t.value,i.Response.Data)}})}window.$Event.CoinAIGetConfig=()=>{n()},G(()=>{f.value=ce(),n(),d()}),de(()=>{u.close()});let h=v(!1);const A=()=>{h.value=!0};return(i,p)=>{const g=_e,E=De,S=$e,B=Se,D=Ce;return k(),V(pe,null,[x(N(o),{class:"CoinAIPageTitle"},me({default:$(()=>[be(ve(N(he)(r.value,"SysName"))+" ",1)]),_:2},[r.value.SysVersion?{name:"after",fn:$(()=>[x(E,{class:"AItradeServer__dotNet",dot:r.value.SysVersion!=r.value.GithubVersion},{default:$(()=>[x(g,{size:"tiny",quaternary:"",onClick:A},{icon:$(()=>[x(N(s),{spin:"",name:"SettingOutlined"})]),_:1})]),_:1},8,["dot"])]),key:"0"}:void 0]),1024),fe("div",Te,[x(B,{show:h.value,"onUpdate:show":p[0]||(p[0]=U=>h.value=U),placement:"top"},{default:$(()=>[x(S,{class:"AItradeServer__drawer-content"},{default:$(()=>[h.value?(k(),W(N(l),{key:0,WssData:r.value},null,8,["WssData"])):ge("",!0)]),_:1})]),_:1},8,["show"]),r.value.SysTime>1&&r.value.SysName.length>1?(k(),V("div",ze,[x(N(a),{WssData:r.value},null,8,["WssData"])])):(k(),W(D,{key:1,class:"noData",title:"该信息如果长时间存在，请尝试刷新或更换浏览器！",type:"info"}))])],64)}}});const je=ye(Ve,[["__scopeId","data-v-fb5dc186"]]);export{je as default};
