import{V as n}from"./filters-342b8771.js";import{d as c,o,c as s,e as _,t,u as i,aH as l,g as a,j as u}from"./index-95e0417b.js";const m={class:"VolumeView"},d={key:0,class:"rose"},V={key:1,class:"rose"},p=c({__name:"VolumeView",props:{Data:Object,Volume:String,Bourse:String},setup(r){const e=r;return(f,B)=>(o(),s("div",m,[_("div",{class:l(e.Bourse)},t(i(n)(e.Volume)),3),e.Bourse==="OKX"?(o(),s("div",d,t(e.Data.OkxVolRose)+"%",1)):a("",!0),e.Bourse==="Binance"?(o(),s("div",V,t(e.Data.BinanceVolRose)+"%",1)):a("",!0)]))}});const k=u(p,[["__scopeId","data-v-0f895b63"]]);export{k as default};
