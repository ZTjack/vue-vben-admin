import{I as L,_ as B}from"./index.js";import{applicationList as k}from"./data-199c263c.js";import{aB as _,af as x,ag as d,ah as f}from"./antd-f3f9d490.js";import{d as y,a8 as e,_ as n,a9 as l,aa as t,a2 as s,f as i,$ as F,ab as g,a0 as c,ac as m,E as r,a1 as p,F as h}from"./vue-7ba4ee8d.js";const A=y({components:{List:_,ListItem:_.Item,Card:x,Icon:L,[d.name]:d,[f.name]:f},setup(){return{prefixCls:"account-center-application",list:k}}});function E(o,N,V,D,b,z){const u=e("Icon"),C=e("Card"),$=e("ListItem"),v=e("a-col"),w=e("a-row"),I=e("List");return n(),l(I,{class:s(o.prefixCls)},{default:t(()=>[i(w,{gutter:16},{default:t(()=>[(n(!0),F(h,null,g(o.list,a=>(n(),l(v,{key:a.title,span:6},{default:t(()=>[i($,null,{default:t(()=>[i(C,{hoverable:!0,class:s(`${o.prefixCls}__card`)},{default:t(()=>[c("div",{class:s(`${o.prefixCls}__card-title`)},[a.icon?(n(),l(u,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):m("",!0),r(" "+p(a.title),1)],2),c("div",{class:s(`${o.prefixCls}__card-num`)},[r(" 活跃用户："),c("span",null,p(a.active),1),r(" 万 ")],2),c("div",{class:s(`${o.prefixCls}__card-num`)},[r(" 新增用户："),c("span",null,p(a.new),1)],2),a.download?(n(),l(u,{key:0,class:s(`${o.prefixCls}__card-download`),icon:a.download},null,8,["class","icon"])):m("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"])}const q=B(A,[["render",E]]);export{q as default};
