import{I as v,_ as y}from"./index.js";import{articleList as k,actions as x}from"./data-199c263c.js";import{d as g,a8 as n,_ as s,a9 as i,aa as l,a2 as a,$ as _,ab as p,f as B,a0 as r,a1 as c,F as m,E as d,ac as b}from"./vue-7ba4ee8d.js";import{aB as u,ae as M}from"./antd-f3f9d490.js";const N=g({components:{List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:M,Icon:v},setup(){return{prefixCls:"account-center-article",list:k,actions:x}}});function T(e,V,h,A,E,F){const f=n("Tag"),I=n("ListItemMeta"),C=n("Icon"),L=n("ListItem"),$=n("List");return s(),i($,{"item-layout":"vertical",class:a(e.prefixCls)},{default:l(()=>[(s(!0),_(m,null,p(e.list,o=>(s(),i(L,{key:o.title},{default:l(()=>[B(I,null,{description:l(()=>[r("div",{class:a(`${e.prefixCls}__content`)},c(o.content),3)]),title:l(()=>[r("p",{class:a(`${e.prefixCls}__title`)},c(o.title),3),r("div",null,[(s(!0),_(m,null,p(o.description,t=>(s(),i(f,{key:t,class:"mb-2"},{default:l(()=>[d(c(t),1)]),_:2},1024))),128))])]),_:2},1024),r("div",null,[(s(!0),_(m,null,p(e.actions,t=>(s(),_("div",{key:t.text,class:a(`${e.prefixCls}__action`)},[t.icon?(s(),i(C,{key:0,class:a(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):b("",!0),d(" "+c(t.text),1)],2))),128)),r("span",{class:a(`${e.prefixCls}__time`)},c(o.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}const j=y(N,[["render",T],["__scopeId","data-v-97ba29a0"]]);export{j as default};
