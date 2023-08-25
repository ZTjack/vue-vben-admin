var y=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var v=(e,o,n)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,m=(e,o)=>{for(var n in o||(o={}))$.call(o,n)&&v(e,n,o[n]);if(f)for(var n of f(o))J.call(o,n)&&v(e,n,o[n]);return e},b=(e,o)=>k(e,I(o));import{I as O,_ as R}from"./index.js";import{d as w,r as T,c as B,H as D,a8 as l,_ as r,$ as g,a0 as s,F as N,ab as A,a9 as F,aa as c,f as a,a2 as C}from"./vue-7ba4ee8d.js";import{W as M,ar as U}from"./antd-f3f9d490.js";const P=w({name:"OperatingArea",components:{Tooltip:M,Icon:O,Divider:U},setup(){const e=T({toolbarsConfigs:[{title:"预览-支持布局",type:"preview",event:"handlePreview",icon:"ant-design:chrome-filled"},{title:"预览-不支持布局",type:"preview",event:"handlePreview2",icon:"ant-design:chrome-filled"},{title:"导入JSON",type:"importJson",event:"handleOpenImportJsonModal",icon:"ant-design:import-outlined"},{title:"生成JSON",type:"exportJson",event:"handleOpenJsonModal",icon:"ant-design:export-outlined"},{title:"生成代码",type:"exportCode",event:"handleOpenCodeModal",icon:"ant-design:code-filled"},{title:"清空",type:"reset",event:"handleClearFormItems",icon:"ant-design:clear-outlined"}]}),o=B("historyReturn"),{undo:n,redo:p,canUndo:u,canRedo:_}=o;return b(m({},D(e)),{undo:n,redo:p,canUndo:u,canRedo:_})}});const S={class:"operating-area"},V={class:"left-btn-box"},j=["onClick"],z=["disabled"],E=["disabled"];function H(e,o,n,p,u,_){const i=l("Icon"),d=l("Tooltip"),h=l("Divider");return r(),g("div",S,[s("div",V,[(r(!0),g(N,null,A(e.toolbarsConfigs,t=>(r(),F(d,{title:t.title,key:t.icon},{default:c(()=>[s("a",{onClick:L=>e.$emit(t.event),class:"toolbar-text"},[a(i,{icon:t.icon},null,8,["icon"])],8,j)]),_:2},1032,["title"]))),128)),a(h,{type:"vertical"}),a(d,{title:"撤销"},{default:c(()=>[s("a",{class:C({disabled:!e.canUndo}),disabled:!e.canUndo,onClick:o[0]||(o[0]=(...t)=>e.undo&&e.undo(...t))},[a(i,{icon:"ant-design:undo-outlined"})],10,z)]),_:1}),a(d,{title:"重做"},{default:c(()=>[s("a",{class:C({disabled:!e.canRedo}),disabled:!e.canRedo,onClick:o[1]||(o[1]=(...t)=>e.redo&&e.redo(...t))},[a(i,{icon:"ant-design:redo-outlined"})],10,E)]),_:1})])])}const K=R(P,[["render",H],["__scopeId","data-v-c6411f06"]]);export{K as default};
