import{d as n,U as s,e as p,u,a8 as t,_ as c,a9 as m,aa as i,E as a,a1 as _,f as d,a0 as f}from"./vue-7ba4ee8d.js";import{P as l}from"./index-122f1a13.js";import{a1 as C}from"./antd-f3f9d490.js";import{_ as x}from"./index.js";import"./useContentViewHeight-bfb9982c.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-65eb8689.js";const B=n({name:"TestTab",components:{PageWrapper:l,Input:C},setup(){const{currentRoute:e}=s();return{params:p(()=>u(e).params)}}}),P=f("br",null,null,-1);function g(e,E,$,b,h,I){const r=t("Input"),o=t("PageWrapper");return c(),m(o,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:i(()=>[a(" Current Param : "+_(e.params)+" ",1),P,a(" Keep Alive "),d(r)]),_:1})}const F=x(B,[["render",g]]);export{F as default};
