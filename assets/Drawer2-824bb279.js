import{B as c,a as i}from"./index-d58d6f86.js";import{d as p,a8 as a,_ as m,a9 as u,aa as t,E as o,f as _,ad as d}from"./vue-7ba4ee8d.js";import{_ as f}from"./index.js";import"./antd-f3f9d490.js";const l=p({components:{BasicDrawer:c},setup(){const[e,{closeDrawer:r}]=i();return{register:e,closeDrawer:r}}});function w(e,r,D,B,g,C){const s=a("a-button"),n=a("BasicDrawer");return m(),u(n,d(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:t(()=>[o(" Drawer Info. "),_(s,{type:"primary",onClick:e.closeDrawer},{default:t(()=>[o(" 内部关闭drawer ")]),_:1},8,["onClick"])]),_:1},16,["onRegister"])}const b=f(l,[["render",w]]);export{b as default};
