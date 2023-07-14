import{H as ct,r as w,dx as ut,a6 as J,N as s,Q as T,a5 as ce,ap as Te,aB as ht,aC as vt,d as Ne,S as ft,V as Pe,a1 as mt,W as V,a2 as pt,C as He,aV as ge,af as bt,a9 as ze,aR as _t,D as S,ax as gt,ak as wt,ah as ue,ag as he,a4 as Ve,a as xt,_ as kt,m as yt,o as A,c as F,e as n,F as Be,aF as Ie,t as D,u as $,g as we,aH as Me,b as N,w as Z,f as St,y as K,h as Ct,p as Dt,i as Rt,j as Tt}from"./index-95e0417b.js";import{b as Ht,c as zt}from"./index-a87d1d08.js";import{a as ve,D as Vt,W as Ae}from"./filters-342b8771.js";import{A as Bt}from"./index-571b3aeb.js";import{u as It}from"./use-merged-state-2a0ec557.js";import{u as xe,V as Mt,a as At,b as Ft}from"./Follower-1d8d0644.js";import{_ as $t}from"./Select-6ed2e58e.js";import{a as Nt,_ as Pt}from"./FormItem-16ee8613.js";import"./Input-b78db60b.js";import"./Suffix-ac62c6bb.js";import"./Popover-1f73dd56.js";import"./get-82e41413.js";import"./format-length-c9d165c6.js";import"./Tag-5dcaf9b3.js";import"./attribute-2ee9e579.js";import"./FocusDetector-f04577c5.js";const Ot={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},Et=a=>{const r="rgba(0, 0, 0, .85)",B="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:f,primaryColor:u,baseColor:h,cardColor:p,modalColor:H,popoverColor:G,borderRadius:P,fontSize:I,opacityDisabled:C}=a;return Object.assign(Object.assign({},Ot),{fontSize:I,markFontSize:I,railColor:f,railColorHover:f,fillColor:u,fillColorHover:u,opacityDisabled:C,handleColor:"#FFF",dotColor:p,dotColorModal:H,dotColorPopover:G,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:r,indicatorBoxShadow:B,indicatorTextColor:h,indicatorBorderRadius:P,dotBorder:`2px solid ${f}`,dotBorderActive:`2px solid ${u}`,dotBoxShadow:""})},Lt={name:"Slider",common:ct,self:Et},Ut=Lt;function Fe(a){return window.TouchEvent&&a instanceof window.TouchEvent}function $e(){const a=w(new Map),r=B=>f=>{a.value.set(B,f)};return ut(()=>a.value.clear()),[a,r]}const jt=J([s("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[T("reverse",[s("slider-handles",[s("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),s("slider-dots",[s("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),T("vertical",[s("slider-handles",[s("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),s("slider-marks",[s("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),s("slider-dots",[s("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),T("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[s("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[s("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),s("slider-rail",`
 height: 100%;
 `,[ce("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),T("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),s("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[s("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),s("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[s("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),T("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[s("slider-handle",`
 cursor: not-allowed;
 `)]),T("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),J("&:hover",[s("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ce("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),s("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),T("active",[s("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ce("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),s("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),s("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[s("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),s("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ce("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),s("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[s("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[s("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[J("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),J("&:focus",[s("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[J("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),s("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[T("transition-disabled",[s("slider-dot","transition: none;")]),s("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[T("active","border: var(--n-dot-border-active);")])])]),s("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Te()]),s("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[T("top",`
 margin-bottom: 12px;
 `),T("right",`
 margin-left: 12px;
 `),T("bottom",`
 margin-top: 12px;
 `),T("left",`
 margin-right: 12px;
 `),Te()]),ht(s("slider",[s("slider-dot","background-color: var(--n-dot-color-modal);")])),vt(s("slider",[s("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Wt=0,Kt=Object.assign(Object.assign({},Pe.props),{to:xe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Gt=Ne({name:"Slider",props:Kt,setup(a){const{mergedClsPrefixRef:r,namespaceRef:B,inlineThemeDisabled:f}=ft(a),u=Pe("Slider","-slider",jt,Ut,a,r),h=w(null),[p,H]=$e(),[G,P]=$e(),I=w(new Set),C=mt(a),{mergedDisabledRef:O}=C,ee=V(()=>{const{step:e}=a;if(e<=0||e==="mark")return 0;const t=e.toString();let o=0;return t.includes(".")&&(o=t.length-t.indexOf(".")-1),o}),E=w(a.defaultValue),X=pt(a,"value"),L=It(X,E),R=V(()=>{const{value:e}=L;return(a.range?e:[e]).map(Se)}),Y=V(()=>R.value.length>2),fe=V(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),i=V(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),d=w(-1),g=w(-1),b=w(-1),x=w(!1),U=w(!1),Q=V(()=>{const{vertical:e,reverse:t}=a;return e?t?"top":"bottom":t?"right":"left"}),te=V(()=>{if(Y.value)return;const e=R.value,t=ne(a.range?Math.min(...e):a.min),o=ne(a.range?Math.max(...e):e[0]),{value:l}=Q;return a.vertical?{[l]:`${t}%`,height:`${o-t}%`}:{[l]:`${t}%`,width:`${o-t}%`}}),oe=V(()=>{const e=[],{marks:t}=a;if(t){const o=R.value.slice();o.sort((k,y)=>k-y);const{value:l}=Q,{value:c}=Y,{range:_}=a,z=c?()=>!1:k=>_?k>=o[0]&&k<=o[o.length-1]:k<=o[0];for(const k of Object.keys(t)){const y=Number(k);e.push({active:z(y),label:t[k],style:{[l]:`${ne(y)}%`}})}}return e});function ae(e,t){const o=ne(e),{value:l}=Q;return{[l]:`${o}%`,zIndex:t===d.value?1:0}}function v(e){return a.showTooltip||b.value===e||d.value===e&&x.value}function q(e){return x.value?!(d.value===e&&g.value===e):!0}function Oe(e){var t;~e&&(d.value=e,(t=p.value.get(e))===null||t===void 0||t.focus())}function Ee(){G.value.forEach((e,t)=>{v(t)&&e.syncPosition()})}function ke(e){const{"onUpdate:value":t,onUpdateValue:o}=a,{nTriggerFormInput:l,nTriggerFormChange:c}=C;o&&Ve(o,e),t&&Ve(t,e),E.value=e,l(),c()}function ye(e){const{range:t}=a;if(t){if(Array.isArray(e)){const{value:o}=R;e.join()!==o.join()&&ke(e)}}else Array.isArray(e)||R.value[0]!==e&&ke(e)}function me(e,t){if(a.range){const o=R.value.slice();o.splice(t,1,e),ye(o)}else ye(e)}function pe(e,t,o){const l=o!==void 0;o||(o=e-t>0?1:-1);const c=i.value||[],{step:_}=a;if(_==="mark"){const y=se(e,c.concat(t),l?o:void 0);return y?y.value:t}if(_<=0)return t;const{value:z}=ee;let k;if(l){const y=Number((t/_).toFixed(z)),M=Math.floor(y),be=y>M?M:M-1,_e=y<M?M:M+1;k=se(t,[Number((be*_).toFixed(z)),Number((_e*_).toFixed(z)),...c],o)}else{const y=Ue(e);k=se(e,[...c,y])}return k?Se(k.value):t}function Se(e){return Math.min(a.max,Math.max(a.min,e))}function ne(e){const{max:t,min:o}=a;return(e-o)/(t-o)*100}function Le(e){const{max:t,min:o}=a;return o+(t-o)*e}function Ue(e){const{step:t,min:o}=a;if(t<=0||t==="mark")return e;const l=Math.round((e-o)/t)*t+o;return Number(l.toFixed(ee.value))}function se(e,t=i.value,o){if(!(t!=null&&t.length))return null;let l=null,c=-1;for(;++c<t.length;){const _=t[c]-e,z=Math.abs(_);(o===void 0||_*o>0)&&(l===null||z<l.distance)&&(l={index:c,distance:z,value:t[c]})}return l}function Ce(e){const t=h.value;if(!t)return;const o=Fe(e)?e.touches[0]:e,l=t.getBoundingClientRect();let c;return a.vertical?c=(l.bottom-o.clientY)/l.height:c=(o.clientX-l.left)/l.width,a.reverse&&(c=1-c),Le(c)}function je(e){if(O.value||!a.keyboard)return;const{vertical:t,reverse:o}=a;switch(e.key){case"ArrowUp":e.preventDefault(),le(t&&o?-1:1);break;case"ArrowRight":e.preventDefault(),le(!t&&o?-1:1);break;case"ArrowDown":e.preventDefault(),le(t&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),le(!t&&o?1:-1);break}}function le(e){const t=d.value;if(t===-1)return;const{step:o}=a,l=R.value[t],c=o<=0||o==="mark"?l:l+o*e;me(pe(c,l,e>0?1:-1),t)}function We(e){var t,o;if(O.value||!Fe(e)&&e.button!==Wt)return;const l=Ce(e);if(l===void 0)return;const c=R.value.slice(),_=a.range?(o=(t=se(l,c))===null||t===void 0?void 0:t.index)!==null&&o!==void 0?o:-1:0;_!==-1&&(e.preventDefault(),Oe(_),Ke(),me(pe(l,R.value[_]),_))}function Ke(){x.value||(x.value=!0,ue("touchend",document,de),ue("mouseup",document,de),ue("touchmove",document,ie),ue("mousemove",document,ie))}function re(){x.value&&(x.value=!1,he("touchend",document,de),he("mouseup",document,de),he("touchmove",document,ie),he("mousemove",document,ie))}function ie(e){const{value:t}=d;if(!x.value||t===-1){re();return}const o=Ce(e);me(pe(o,R.value[t]),t)}function de(){re()}function Ge(e){d.value=e,O.value||(b.value=e)}function Xe(e){d.value===e&&(d.value=-1,re()),b.value===e&&(b.value=-1)}function Ye(e){b.value=e}function Qe(e){b.value===e&&(b.value=-1)}He(d,(e,t)=>void ge(()=>g.value=t)),He(L,()=>{if(a.marks){if(U.value)return;U.value=!0,ge(()=>{U.value=!1})}ge(Ee)}),bt(()=>{re()});const De=V(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:o,fillColor:l,fillColorHover:c,handleColor:_,opacityDisabled:z,dotColor:k,dotColorModal:y,handleBoxShadow:M,handleBoxShadowHover:be,handleBoxShadowActive:_e,handleBoxShadowFocus:qe,dotBorder:Je,dotBoxShadow:Ze,railHeight:et,railWidthVertical:tt,handleSize:ot,dotHeight:at,dotWidth:nt,dotBorderRadius:st,fontSize:lt,dotBorderActive:rt,dotColorPopover:it},common:{cubicBezierEaseInOut:dt}}=u.value;return{"--n-bezier":dt,"--n-dot-border":Je,"--n-dot-border-active":rt,"--n-dot-border-radius":st,"--n-dot-box-shadow":Ze,"--n-dot-color":k,"--n-dot-color-modal":y,"--n-dot-color-popover":it,"--n-dot-height":at,"--n-dot-width":nt,"--n-fill-color":l,"--n-fill-color-hover":c,"--n-font-size":lt,"--n-handle-box-shadow":M,"--n-handle-box-shadow-active":_e,"--n-handle-box-shadow-focus":qe,"--n-handle-box-shadow-hover":be,"--n-handle-color":_,"--n-handle-size":ot,"--n-opacity-disabled":z,"--n-rail-color":t,"--n-rail-color-hover":o,"--n-rail-height":et,"--n-rail-width-vertical":tt,"--n-mark-font-size":e}}),j=f?ze("slider",void 0,De,a):void 0,Re=V(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:o,indicatorTextColor:l,indicatorBorderRadius:c}}=u.value;return{"--n-font-size":e,"--n-indicator-border-radius":c,"--n-indicator-box-shadow":o,"--n-indicator-color":t,"--n-indicator-text-color":l}}),W=f?ze("slider-indicator",void 0,Re,a):void 0;return{mergedClsPrefix:r,namespace:B,uncontrolledValue:E,mergedValue:L,mergedDisabled:O,mergedPlacement:fe,isMounted:_t(),adjustedTo:xe(a),dotTransitionDisabled:U,markInfos:oe,isShowTooltip:v,shouldKeepTooltipTransition:q,handleRailRef:h,setHandleRefs:H,setFollowerRefs:P,fillStyle:te,getHandleStyle:ae,activeIndex:d,arrifiedValues:R,followerEnabledIndexSet:I,handleRailMouseDown:We,handleHandleFocus:Ge,handleHandleBlur:Xe,handleHandleMouseEnter:Ye,handleHandleMouseLeave:Qe,handleRailKeyDown:je,indicatorCssVars:f?void 0:Re,indicatorThemeClass:W==null?void 0:W.themeClass,indicatorOnRender:W==null?void 0:W.onRender,cssVars:f?void 0:De,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){var a;const{mergedClsPrefix:r,themeClass:B,formatTooltip:f}=this;return(a=this.onRender)===null||a===void 0||a.call(this),S("div",{class:[`${r}-slider`,B,{[`${r}-slider--disabled`]:this.mergedDisabled,[`${r}-slider--active`]:this.activeIndex!==-1,[`${r}-slider--with-mark`]:this.marks,[`${r}-slider--vertical`]:this.vertical,[`${r}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},S("div",{class:`${r}-slider-rail`},S("div",{class:`${r}-slider-rail__fill`,style:this.fillStyle}),this.marks?S("div",{class:[`${r}-slider-dots`,this.dotTransitionDisabled&&`${r}-slider-dots--transition-disabled`]},this.markInfos.map(u=>S("div",{key:u.label,class:[`${r}-slider-dot`,{[`${r}-slider-dot--active`]:u.active}],style:u.style}))):null,S("div",{ref:"handleRailRef",class:`${r}-slider-handles`},this.arrifiedValues.map((u,h)=>{const p=this.isShowTooltip(h);return S(Mt,null,{default:()=>[S(At,null,{default:()=>S("div",{ref:this.setHandleRefs(h),class:`${r}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(u,h),onFocus:()=>this.handleHandleFocus(h),onBlur:()=>this.handleHandleBlur(h),onMouseenter:()=>this.handleHandleMouseEnter(h),onMouseleave:()=>this.handleHandleMouseLeave(h)},gt(this.$slots.thumb,()=>[S("div",{class:`${r}-slider-handle`})]))}),this.tooltip&&S(Ft,{ref:this.setFollowerRefs(h),show:p,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(h),teleportDisabled:this.adjustedTo===xe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>S(wt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(h),onEnter:()=>{this.followerEnabledIndexSet.add(h)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(h)}},{default:()=>{var H;return p?((H=this.indicatorOnRender)===null||H===void 0||H.call(this),S("div",{class:[`${r}-slider-handle-indicator`,this.indicatorThemeClass,`${r}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof f=="function"?f(u):u)):null}})})]})})),this.marks?S("div",{class:`${r}-slider-marks`},this.markInfos.map(u=>S("div",{key:u.label,class:`${r}-slider-mark`,style:u.style},u.label))):null))}}),m=a=>(Dt("data-v-2ba74b2c"),a=a(),Rt(),a),Xt={class:"AccountInfo"},Yt=m(()=>n("div",{class:"title"},"账户余额 (USDT)",-1)),Qt={class:"data-wrapper"},qt={class:"label"},Jt={class:"value"},Zt=m(()=>n("br",null,null,-1)),eo={key:0,class:"title"},to={class:"block"},oo=m(()=>n("span",{class:"label"}," 持仓产品 ",-1)),ao={class:"value"},no={class:"block"},so=m(()=>n("span",{class:"label"}," 开仓时间 ",-1)),lo={class:"value"},ro={class:"block"},io=m(()=>n("span",{class:"label"}," 开仓均价 ",-1)),co={class:"value"},uo={class:"block"},ho=m(()=>n("span",{class:"label"}," 杠杆倍数 ",-1)),vo={class:"value"},fo={class:"block"},mo=m(()=>n("span",{class:"label"}," 初始保证金 ",-1)),po={class:"value"},bo={class:"block"},_o=m(()=>n("span",{class:"label"}," 持仓数量 ",-1)),go={class:"value"},wo={class:"block"},xo=m(()=>n("span",{class:"label"}," 未实现收益 ",-1)),ko={class:"block"},yo=m(()=>n("span",{class:"label"}," 未实现收益率 ",-1)),So=m(()=>n("br",null,null,-1)),Co=m(()=>n("div",{class:"title"},"设置账户参数:",-1)),Do={class:"data-wrapper"},Ro={key:0,class:"input_hint_wrapper"},To=m(()=>n("div",{class:"input_hint"},"请根据当前账户资金数合理设置杠杆倍数，资金越大，建议杠杆倍数越小",-1)),Ho=m(()=>n("br",null,null,-1)),zo=m(()=>n("div",{class:"title"},"当前策略信息",-1)),Vo={class:"data-wrapper"},Bo={class:"block"},Io=m(()=>n("span",{class:"label"},"策略名称",-1)),Mo={class:"value"},Ao={class:"block"},Fo=m(()=>n("span",{class:"label"},"选择的杠杆倍数",-1)),$o={class:"value"},No={class:"block"},Po=m(()=>n("span",{class:"label"},"交易对",-1)),Oo={class:"value"},Eo={class:"block"},Lo=m(()=>n("span",{class:"label"},"当前现货价格",-1)),Uo={class:"value"},jo={key:1,class:"TradeBtnWrapper"},Wo=Ne({__name:"AccountInfo",props:{WssData:Object,ApiKey:Object},setup(a){const r=a,B=xt(()=>kt(()=>import("./OrderBtn-5540a3fb.js"),["assets/OrderBtn-5540a3fb.js","assets/index-a87d1d08.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/index-571b3aeb.js","assets/Input-b78db60b.js","assets/Suffix-ac62c6bb.js","assets/use-merged-state-2a0ec557.js","assets/OrderBtn-d7c728ad.css"]));let f=w([1]),u=w([]),h=w({});function p(){const i=K(r.WssData.ApiKeyList);let d=K(r.ApiKey);for(const g of i)if(g.Name==d.Name){d=g;break}return d}function H(){const i=p(),d=K(r.WssData.HunterData);let g={};return i.Hunter&&(g=d[i.Hunter]),g}function G(){const i=K(r.WssData.HunterData),d=[];d.push({label:"停止使用策略",value:""});for(const g in i)if(Object.prototype.hasOwnProperty.call(i,g)){const b=i[g],x={label:b.HunterName,value:b.HunterName};d.push(x)}u.value=d}function P(i){if(i<1)return;const d=K(r.WssData.HunterData);let g={};if(i.length>1&&(g=d[i]||{}),h.value=g,!h.value.HunterName)return;const b=[];for(let x=1;x<=h.value.TradeKdataOpt.MaxTradeLever;x++)b.push(x);f.value=b}let I=w(!1);const C=w({Password:"",Hunter:p().Hunter,Name:p().Name,TradeLever:p().TradeLever}),O=async()=>{const i=await zt({...K(C.value),SatelliteServe:r.WssData.ServeID});i.Code>0&&(window.$Event.CoinAIGetConfig(),window.$message.success(i.Msg))},ee=async()=>{I.value=!0,Bt({IsPassword:!0,async OkBack(i){return I.value=!1,C.value.Password=i.Password,O()}})};let E=w([]),X=w([]);function L(){Ht({SatelliteServe:r.WssData.ServeID,Name:p().Name}).then(i=>{i.Code>0&&(E.value=i.Data.Balance,X.value=i.Data.Positions)})}const R=()=>{L()},Y=()=>{const i={};for(const d of f.value)i[d]=`${d}X`;return i},fe=i=>{C.value.Hunter=i,C.value.TradeLever=1,P(i)};return yt(()=>{L(),Y(),G(),P(p().Hunter)}),(i,d)=>{var te,oe,ae;const g=$t,b=Nt,x=Gt,U=Ct,Q=Pt;return A(),F("div",Xt,[Yt,n("div",Qt,[(A(!0),F(Be,null,Ie(E.value,(v,q)=>(A(),F("div",{class:"block",key:q},[n("span",qt,D(v.CcyName),1),n("span",Jt,D($(ve)(v.Balance)),1)]))),128))]),Zt,X.value.length>0?(A(),F("div",eo,"当前持仓")):we("",!0),(A(!0),F(Be,null,Ie(X.value,(v,q)=>(A(),F("div",{class:"data-wrapper",key:q},[n("div",to,[oo,n("span",ao,D(v.InstID),1)]),n("div",no,[so,n("span",lo,D($(Vt)(v.CTime,!0)),1)]),n("div",ro,[io,n("span",co,D(v.AvgPx),1)]),n("div",uo,[ho,n("span",vo,D(v.Lever),1)]),n("div",fo,[mo,n("span",po,D($(ve)(v.Imr)),1)]),n("div",bo,[_o,n("span",go,D(v.Pos),1)]),n("div",wo,[xo,n("span",{class:Me(["value",$(Ae)(v.Upl,!0).class])},D($(ve)(v.Upl)),3)]),n("div",ko,[yo,n("span",{class:Me(["value",$(Ae)(v.UplRatio,!0).class])},D($(ve)(v.UplRatio,!0))+"% ",3)])]))),128)),So,Co,n("div",Do,[N(Q,{ref:"CoinAIAccountForm",model:C.value,size:"small",class:"myForm"},{default:Z(()=>[N(b,{class:"myForm__item","label-placement":"left",label:"选择策略:"},{default:Z(()=>[N(g,{value:C.value.Hunter,"onUpdate:value":d[0]||(d[0]=v=>C.value.Hunter=v),options:u.value,"on-update:value":fe},null,8,["value","options"])]),_:1}),p().Hunter?(A(),F("div",Ro,[N(b,{class:"myForm__item","label-placement":"left",label:"杠杆倍数:"},{default:Z(()=>[N(x,{value:C.value.TradeLever,"onUpdate:value":d[1]||(d[1]=v=>C.value.TradeLever=v),marks:Y(),step:"mark",min:f.value[0],max:f.value[f.value.length-1]},null,8,["value","marks","min","max"])]),_:1}),To])):we("",!0),N(b,{class:"myForm__item"},{default:Z(()=>[N(U,{class:"Submit",disabled:I.value,type:"primary",onClick:ee},{default:Z(()=>[St(" 更新参数 ")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"])]),Ho,zo,n("div",Vo,[n("div",Bo,[Io,n("span",Mo,D(p().Hunter),1)]),n("div",Ao,[Fo,n("span",$o,D(p().TradeLever)+"x ",1)]),n("div",No,[Po,n("span",Oo,D((te=H())==null?void 0:te.TradeInstID),1)]),n("div",Eo,[Lo,n("span",Uo,D((ae=(oe=H())==null?void 0:oe.NowKdata)==null?void 0:ae.C),1)])]),p().Hunter?(A(),F("div",jo,[N($(B),{WssData:r.WssData,KeyName:p().Name,onSuccess:R},null,8,["WssData","KeyName"])])):we("",!0)])}}});const ia=Tt(Wo,[["__scopeId","data-v-2ba74b2c"]]);export{ia as default};
