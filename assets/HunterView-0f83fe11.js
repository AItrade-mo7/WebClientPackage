import{d as C,a as H,_ as I,k as T,o as b,c as v,F as K,aF as S,e as s,f as l,t as a,b as _,w as i,u as n,b5 as g,bm as e,aH as x,y as A,h as O,p as L,i as m,j as R}from"./index-95e0417b.js";import{D as w,_ as B}from"./filters-342b8771.js";const o=d=>(L("data-v-6fb4a8e3"),d=d(),m(),d),F={class:"title"},M={class:"block"},U=o(()=>s("span",{class:"label"},"当前K线",-1)),E={class:"value"},W={class:"block"},j=o(()=>s("span",{class:"label"},"当前价格",-1)),z={class:"value"},G={class:"block"},$=o(()=>s("span",{class:"label"},"K线时间",-1)),X={class:"value"},q={class:"block"},J=o(()=>s("span",{class:"label"},"K线长度",-1)),Q={class:"value"},Y={class:"block"},Z=o(()=>s("span",{class:"label"},"策略数据长度",-1)),ss={class:"value"},os={class:"block"},ts=o(()=>s("span",{class:"label"},"当前交易对",-1)),as={class:"value"},ns=o(()=>s("br",null,null,-1)),ls={class:"block"},es=o(()=>s("span",{class:"label"},"参数",-1)),cs={class:"value"},_s=o(()=>s("br",null,null,-1)),is={class:"block"},ds=o(()=>s("span",{class:"label"},"描述",-1)),rs={class:"value"},us=o(()=>s("div",{class:"titleLitter"},[l(" 当前持仓 "),s("span",{class:"hint"},"(如果选择了该策略，您的账户持仓应与当前虚拟持仓保持一致)")],-1)),hs={class:"block"},ps=o(()=>s("span",{class:"label"},"杠杆倍数",-1)),bs={class:"value"},vs={class:"block"},ws=o(()=>s("span",{class:"label"},"初始资金",-1)),ks={class:"value"},Ns={class:"block"},fs=o(()=>s("span",{class:"label"},"手续费率",-1)),Ps={class:"value"},Vs={class:"block"},Ds=o(()=>s("span",{class:"label"},"持仓币种",-1)),ys={class:"value"},Cs={class:"block"},Hs=o(()=>s("span",{class:"label"},"当前余额",-1)),Is={class:"value"},Ts={class:"block"},Ks=o(()=>s("span",{class:"label"},"K线时间",-1)),Ss={class:"value"},gs={class:"block"},xs=o(()=>s("span",{class:"label"},"数据时间",-1)),As={class:"value bolder"},Os={class:"block"},Ls=o(()=>s("span",{class:"label"},"当前价格",-1)),ms={class:"value"},Rs={class:"block"},Bs=o(()=>s("span",{class:"label"},"开仓时间",-1)),Fs={class:"value bolder"},Ms={class:"block"},Us=o(()=>s("span",{class:"label"},"开仓价格",-1)),Es={class:"value bolder"},Ws={class:"block"},js=o(()=>s("span",{class:"label"},"持仓方向",-1)),zs={class:"value bolder"},Gs={class:"block"},$s=o(()=>s("span",{class:"label"},"当前持仓收益率",-1)),Xs={class:"block"},qs=o(()=>s("span",{class:"label"},"预计本次持仓营收",-1)),Js={class:"value"},Qs={class:"block"},Ys=o(()=>s("span",{class:"label"},"CAP",-1)),Zs={class:"value"},so={class:"block"},oo=o(()=>s("span",{class:"label"},"持仓参数",-1)),to={class:"value"},ao=o(()=>s("hr",null,null,-1)),no=o(()=>s("br",null,null,-1)),lo=o(()=>s("br",null,null,-1)),eo=o(()=>s("br",null,null,-1)),co=o(()=>s("br",null,null,-1)),_o=o(()=>s("br",null,null,-1)),io=o(()=>s("br",null,null,-1)),ro=o(()=>s("br",null,null,-1)),uo=o(()=>s("br",null,null,-1)),ho=o(()=>s("br",null,null,-1)),po=o(()=>s("br",null,null,-1)),bo=o(()=>s("br",null,null,-1)),vo=o(()=>s("br",null,null,-1)),wo=o(()=>s("br",null,null,-1)),ko=o(()=>s("hr",null,null,-1)),No=C({__name:"HunterView",props:{WssData:Object},setup(d){const h=d,N=H(()=>I(()=>import("./XIcon-bc7fc57b.js"),["assets/XIcon-bc7fc57b.js","assets/index-95e0417b.js","assets/index-0be103ef.css","assets/XIcon-dcf3bf82.css"])),f=()=>{const c=Object.keys(h.WssData.HunterData).sort(),p=[];for(const r of c){const u=A(h.WssData.HunterData[r]);p.push(u)}return p},P=c=>c-0>0?"RiseOutlined":c-0<0?"FallOutlined":"SecurityScanFilled",V=c=>c-0>0?"green":c-0<0?"red":"",D=c=>c>0?"买涨":c<0?"买跌":c==0?"空仓":"数据异常";return(c,p)=>{const r=O,u=T("RouterLink"),k=B;return b(),v("div",null,[(b(!0),v(K,null,S(f(),(t,y)=>(b(),v("div",{key:y},[s("div",F,[l(a(t.HunterName)+" ",1),_(u,{class:"HunterHistoryBtn",to:`/SatelliteServe/VirtualPositionList/${n(g)(h.WssData.ServeID)}?HunterName=${t.HunterName}`},{default:i(()=>[_(r,{strong:"",secondary:"",type:"info",size:"tiny"},{default:i(()=>[l(" 查看持仓历史 ")]),_:1})]),_:2},1032,["to"])]),_(k,{class:"data-wrapper"},{default:i(()=>[s("div",M,[U,s("span",E,a(t.KdataInstID),1)]),s("div",W,[j,s("span",z,a(n(e)(t,"NowKdata.C")),1)]),s("div",G,[$,s("span",X,a(n(w)(t.NowKdata.TimeUnix)),1)]),s("div",q,[J,s("span",Q,a(t.KdataLen),1)]),s("div",Y,[Z,s("span",ss,a(t.TradeKdataLen),1)]),s("div",os,[ts,s("span",as,a(t.TradeInstID),1)]),ns,s("div",ls,[es,s("span",cs,a(t.TradeKdataOpt),1)]),_s,s("div",is,[ds,s("span",rs,a(t.Describe),1)])]),_:2},1024),us,_(k,{class:"data-wrapper"},{default:i(()=>[s("div",hs,[ps,s("span",bs,a(n(e)(t,"TradeKdataOpt.MaxTradeLever")),1)]),s("div",vs,[ws,s("span",ks,a(n(e)(t,"NowVirtualPosition.InitMoney")),1)]),s("div",Ns,[fs,s("span",Ps,a(n(e)(t,"NowVirtualPosition.ChargeUpl"))+"%",1)]),s("div",Vs,[Ds,s("span",ys,a(n(e)(t,"NowVirtualPosition.InstID")),1)]),s("div",Cs,[Hs,s("span",Is,a(n(e)(t,"NowVirtualPosition.Money")),1)]),s("div",Ts,[Ks,s("span",Ss,a(n(e)(t,"NowVirtualPosition.NowTimeStr")),1)]),s("div",gs,[xs,s("span",As,a(n(w)(n(e)(t,"NowVirtualPosition.NowTime"))),1)]),s("div",Os,[Ls,s("span",ms,a(n(e)(t,"NowVirtualPosition.NowC")),1)]),s("div",Rs,[Bs,s("span",Fs,a(n(w)(n(e)(t,"NowVirtualPosition.OpenTime"))),1)]),s("div",Ms,[Us,s("span",Es,a(n(e)(t,"NowVirtualPosition.OpenAvgPx")),1)]),s("div",Ws,[js,s("span",zs,[l(a(D(n(e)(t,"NowVirtualPosition.NowDir")))+" ",1),_(n(N),{name:P(n(e)(t,"NowVirtualPosition.NowDir"))},null,8,["name"])])]),s("div",Gs,[$s,s("span",{class:x(["value bolder",V(n(e)(t,"NowVirtualPosition.NowUplRatio"))])},a(n(e)(t,"NowVirtualPosition.NowUplRatio"))+"% ",3)]),s("div",Xs,[qs,s("span",Js,a(n(e)(t,"NowVirtualPosition.MakeMoney")),1)]),s("div",Qs,[Ys,s("span",Zs,a(n(e)(t,"NowVirtualPosition.CAP_EMA")),1)]),s("div",so,[oo,s("span",to,a(n(e)(t,"NowVirtualPosition.HunterConfig")),1)])]),_:2},1024),ao]))),128)),l(" 虚拟持仓为系统内部的一个虚拟账户的计算仓位。所有策略均为并行计算，互不影响。BTC更稳健，ETH收益率更高(当然，亏起来也一样)。 "),no,l(" 您的账户托管逻辑为： "),lo,l(" 若当前虚拟持仓与算法计算结果不一致，则触发一次虚拟下单，改变当前的虚拟持仓跟算法结果一致并累加收益和扣除手续费，然后做一次持久化存储。"),eo,l(" 虚拟持仓被改变后会触发一次账户同步任务，程序会遍历当前的 OKX ApiKey，执行【清仓】，【开多】，【开空】等步骤。使您的账户跟虚拟持仓保持一致。"),co,l(" 若您的账户持仓原本就与 虚拟账户 一致 ， 则系统不会对您的账户做出任何操作。"),_o,l(" 因此，在K线运行的两个开仓点位之间，您可以手动执行任何操作，到达算法计算点位时，会帮你平仓。"),io,l(" 若您选择停止策略，则系统在同步持仓时会无视您的账户。 "),ro,l(" 注：虚拟持仓的计算方式已经跟交易所尽量保持一致。 "),uo,l(" 系统的拓展性极高，目前只对接了 okx 交易所的下单接口。如有其他交易所的对接需求，可以私信开发者。（若对系统有任何改进建议也欢迎私信） "),ho,l(" 同一个卫星服务，设置了上限30个账户。每一台卫星服务均设置了计算节点的随机延迟，因此多个卫星服务的账户交易是随机错开的。 "),po,l(" 计算的节点和频率是平均分布在一小时的任意分钟数内。每小时计算12次。因此下单时间点会根据市场在任意时刻发生。 "),bo,l(" 每次计算会同时计算当前最新交易所最近900条数据(24天左右)进行预热和错检，然后取当前最新数据结果。所有的计算全部基于内存。 CoinAI 是一个 CPU 密集型的多线程任务。 "),vo,l(" 算法是稳定不变的。但是策略和参数，大概每2个月会基于最新市场数据优化一次。 "),wo,l(" 开发者鼓励每一个有条件的人进行卫星服务的私人部署，也鼓励你公开你的服务供大家使用。部署好的卫星服务可以一键升级,随时保持策略和代码的最新。 "),_(u,{to:"/SatelliteServe/CreateCoinServe",class:"addBtn"},{default:i(()=>[_(r,{type:"primary",size:"tiny"},{default:i(()=>[l(" 部署私人卫星服务 ")]),_:1})]),_:1}),ko])}}});const Vo=R(No,[["__scopeId","data-v-6fb4a8e3"]]);export{Vo as default};
