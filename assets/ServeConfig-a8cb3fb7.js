import{E as Me}from"./index-a87d1d08.js";import{A as Re}from"./index-571b3aeb.js";import{d as q,D as o,E as Ae,H as Fe,J as Pe,a6 as Te,N as ee,S as Oe,V as se,a1 as ke,r as I,a2 as Ue,a3 as w,C as Ee,a8 as $e,W as Le,eo as He,aa as ne,ah as te,ax as ae,a0 as le,aX as re,a4 as B,aV as Ke,o as je,c as We,b,w as C,f as ze,h as Ge,p as Xe,i as Je,e as qe,y as Qe,j as Ye}from"./index-95e0417b.js";import{i as Ze,_ as de}from"./Input-b78db60b.js";import{u as en}from"./Suffix-ac62c6bb.js";import{u as nn}from"./use-merged-state-2a0ec557.js";import{A as tn}from"./Add-fbc37ec2.js";import{a as an,_ as ln}from"./FormItem-16ee8613.js";import"./format-length-c9d165c6.js";import"./get-82e41413.js";const rn=q({name:"Remove",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),un=n=>{const{textColorDisabled:l}=n;return{iconColorDisabled:l}},on=Ae({name:"InputNumber",common:Fe,peers:{Button:Pe,Input:Ze},self:un}),sn=on;function dn(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function fn(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function X(n){return n==null?!0:!Number.isNaN(n)}function ie(n,l){return n==null?"":l===void 0?String(n):n.toFixed(l)}function J(n){if(n===null)return null;if(typeof n=="number")return n;{const l=Number(n);return Number.isNaN(l)?null:l}}const cn=Te([ee("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),ee("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ue=800,oe=100,mn=Object.assign(Object.assign({},se.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),pn=q({name:"InputNumber",props:mn,setup(n){const{mergedBorderedRef:l,mergedClsPrefixRef:d,mergedRtlRef:i}=Oe(n),u=se("InputNumber","-input-number",cn,sn,n,d),{localeRef:p}=en("InputNumber"),s=ke(n),{mergedSizeRef:_,mergedDisabledRef:F,mergedStatusRef:V}=s,f=I(null),P=I(null),T=I(null),v=I(n.defaultValue),fe=Ue(n,"value"),g=nn(fe,v),y=I(""),E=e=>{const t=String(e).split(".")[1];return t?t.length:0},ce=e=>{const t=[n.min,n.max,n.step,e].map(a=>a===void 0?0:E(a));return Math.max(...t)},me=w(()=>{const{placeholder:e}=n;return e!==void 0?e:p.value.placeholder}),O=w(()=>{const e=J(n.step);return e!==null?e===0?1:Math.abs(e):1}),Q=w(()=>{const e=J(n.min);return e!==null?e:null}),Y=w(()=>{const e=J(n.max);return e!==null?e:null}),D=e=>{const{value:t}=g;if(e===t){N();return}const{"onUpdate:value":a,onUpdateValue:r,onChange:m}=n,{nTriggerFormInput:h,nTriggerFormChange:S}=s;m&&B(m,e),r&&B(r,e),a&&B(a,e),v.value=e,h(),S()},c=({offset:e,doUpdateIfValid:t,fixPrecision:a,isInputing:r})=>{const{value:m}=y;if(r&&fn(m))return!1;const h=(n.parse||dn)(m);if(h===null)return t&&D(null),null;if(X(h)){const S=E(h),{precision:A}=n;if(A!==void 0&&A<S&&!a)return!1;let x=parseFloat((h+e).toFixed(A!=null?A:ce(h)));if(X(x)){const{value:z}=Y,{value:G}=Q;if(z!==null&&x>z){if(!t||r)return!1;x=z}if(G!==null&&x<G){if(!t||r)return!1;x=G}return n.validator&&!n.validator(x)?!1:(t&&D(x),x)}}return!1},N=()=>{const{value:e}=g;if(X(e)){const{format:t,precision:a}=n;t?y.value=t(e):e===null||a===void 0||E(e)>a?y.value=ie(e,void 0):y.value=ie(e,a)}else y.value=String(e)};N();const pe=w(()=>c({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),$=w(()=>{const{value:e}=g;if(n.validator&&e===null)return!1;const{value:t}=O;return c({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),L=w(()=>{const{value:e}=g;if(n.validator&&e===null)return!1;const{value:t}=O;return c({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ve(e){const{onFocus:t}=n,{nTriggerFormFocus:a}=s;t&&B(t,e),a()}function ge(e){var t,a;if(e.target===((t=f.value)===null||t===void 0?void 0:t.wrapperElRef))return;const r=c({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(r!==!1){const S=(a=f.value)===null||a===void 0?void 0:a.inputElRef;S&&(S.value=String(r||"")),g.value===r&&N()}else N();const{onBlur:m}=n,{nTriggerFormBlur:h}=s;m&&B(m,e),h(),Ke(()=>{N()})}function he(e){const{onClear:t}=n;t&&B(t,e)}function H(){const{value:e}=L;if(!e){W();return}const{value:t}=g;if(t===null)n.validator||D(Z());else{const{value:a}=O;c({offset:a,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function K(){const{value:e}=$;if(!e){j();return}const{value:t}=g;if(t===null)n.validator||D(Z());else{const{value:a}=O;c({offset:-a,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const be=ve,_e=ge;function Z(){if(n.validator)return null;const{value:e}=Q,{value:t}=Y;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function xe(e){he(e),D(null)}function ye(e){var t,a,r;!((t=T.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((a=P.value)===null||a===void 0)&&a.$el.contains(e.target)&&e.preventDefault(),(r=f.value)===null||r===void 0||r.activate()}let M=null,R=null,k=null;function j(){k&&(window.clearTimeout(k),k=null),M&&(window.clearInterval(M),M=null)}function W(){U&&(window.clearTimeout(U),U=null),R&&(window.clearInterval(R),R=null)}function we(){j(),k=window.setTimeout(()=>{M=window.setInterval(()=>{K()},oe)},ue),te("mouseup",document,j,{once:!0})}let U=null;function Ie(){W(),U=window.setTimeout(()=>{R=window.setInterval(()=>{H()},oe)},ue),te("mouseup",document,W,{once:!0})}const Ve=()=>{R||H()},Ne=()=>{M||K()};function Se(e){var t,a;if(e.key==="Enter"){if(e.target===((t=f.value)===null||t===void 0?void 0:t.wrapperElRef))return;c({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((a=f.value)===null||a===void 0||a.deactivate())}else if(e.key==="ArrowUp"){if(!L.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),c({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&H()}else if(e.key==="ArrowDown"){if(!$.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),c({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&K()}}function Be(e){y.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&c({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ee(g,()=>{N()});const Ce={focus:()=>{var e;return(e=f.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=f.value)===null||e===void 0?void 0:e.blur()}},De=$e("InputNumber",i,d);return Object.assign(Object.assign({},Ce),{rtlEnabled:De,inputInstRef:f,minusButtonInstRef:P,addButtonInstRef:T,mergedClsPrefix:d,mergedBordered:l,uncontrolledValue:v,mergedValue:g,mergedPlaceholder:me,displayedValueInvalid:pe,mergedSize:_,mergedDisabled:F,displayedValue:y,addable:L,minusable:$,mergedStatus:V,handleFocus:be,handleBlur:_e,handleClear:xe,handleMouseDown:ye,handleAddClick:Ve,handleMinusClick:Ne,handleAddMousedown:Ie,handleMinusMousedown:we,handleKeyDown:Se,handleUpdateDisplayedValue:Be,mergedTheme:u,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Le(()=>{const{self:{iconColorDisabled:e}}=u.value,[t,a,r,m]=He(e);return{textColorTextDisabled:`rgb(${t}, ${a}, ${r})`,opacityDisabled:`${m}`}})})},render(){const{mergedClsPrefix:n,$slots:l}=this,d=()=>o(re,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ae(l["minus-icon"],()=>[o(le,{clsPrefix:n},{default:()=>o(rn,null)})])}),i=()=>o(re,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ae(l["add-icon"],()=>[o(le,{clsPrefix:n},{default:()=>o(tn,null)})])});return o("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},o(de,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var u;return this.showButton&&this.buttonPlacement==="both"?[d(),ne(l.prefix,p=>p?o("span",{class:`${n}-input-number-prefix`},p):null)]:(u=l.prefix)===null||u===void 0?void 0:u.call(l)},suffix:()=>{var u;return this.showButton?[ne(l.suffix,p=>p?o("span",{class:`${n}-input-number-suffix`},p):null),this.buttonPlacement==="right"?d():null,i()]:(u=l.suffix)===null||u===void 0?void 0:u.call(l)}}))}}),vn=n=>(Xe("data-v-427084ba"),n=n(),Je(),n),gn={class:"ServeConfig"},hn=vn(()=>qe("div",{class:"title"},"修改系统参数",-1)),bn=q({__name:"ServeConfig",props:{WssData:Object},setup(n){const l=n;let d=I(!1);const i=I({Password:"",EmailCode:"",SysName:l.WssData.SysName,MaxApiKeyNum:l.WssData.MaxApiKeyNum,Describe:l.WssData.Describe}),u=async()=>{const s=await Me({...Qe(i.value),SatelliteServe:l.WssData.ServeID});s.Code>0&&(window.$Event.CoinAIGetConfig(),window.$message.success(s.Msg))},p=async()=>{d.value=!0,Re({IsPassword:!0,EmailAction:"修改系统设置",async OkBack(s){return d.value=!1,i.value.Password=s.Password,i.value.EmailCode=s.Code,u()}})};return(s,_)=>{const F=de,V=an,f=pn,P=Ge,T=ln;return je(),We("div",gn,[hn,b(T,{ref:"loginForm",model:i.value,size:"small",class:"myForm"},{default:C(()=>[b(V,{class:"myForm__item","label-placement":"left",label:"系统名称:"},{default:C(()=>[b(F,{name:"SysName",value:i.value.SysName,"onUpdate:value":_[0]||(_[0]=v=>i.value.SysName=v),inputProps:{autocomplete:"password"},placeholder:"系统名称"},null,8,["value"])]),_:1}),b(V,{class:"myForm__item","label-placement":"left",label:"系统名称:"},{default:C(()=>[b(F,{class:"textarea",name:"Describe",value:i.value.Describe,"onUpdate:value":_[1]||(_[1]=v=>i.value.Describe=v),inputProps:{autocomplete:"password"},type:"textarea",placeholder:"系统描述"},null,8,["value"])]),_:1}),b(V,{class:"myForm__item","label-placement":"left",label:"ApiKey 数量上限 :"},{default:C(()=>[b(f,{name:"MaxApiKeyNum",value:i.value.MaxApiKeyNum,"onUpdate:value":_[2]||(_[2]=v=>i.value.MaxApiKeyNum=v),inputProps:{autocomplete:"password"},placeholder:"ApiKey 数量上限"},null,8,["value"])]),_:1}),b(V,{class:"myForm__item"},{default:C(()=>[b(P,{class:"Submit",disabled:d.value,type:"primary",onClick:p},{default:C(()=>[ze(" 提交 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"])])}}});const Dn=Ye(bn,[["__scopeId","data-v-427084ba"]]);export{Dn as default};
