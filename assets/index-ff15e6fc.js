var d=(t,s,e)=>new Promise((p,F)=>{var _=u=>{try{o(e.next(u))}catch(r){F(r)}},c=u=>{try{o(e.throw(u))}catch(r){F(r)}},o=u=>u.done?p(u.value):Promise.resolve(u.value).then(_,c);o((e=e.apply(t,s)).next())});import{P as f}from"./index-122f1a13.js";import{l as B,_ as C}from"./index.js";import{t as D}from"./account-728ff1b2.js";import{af as l}from"./antd-f3f9d490.js";import{d as E,a8 as i,_ as A,a9 as k,aa as a,f as n,E as m,a0 as y}from"./vue-7ba4ee8d.js";import"./useContentViewHeight-bfb9982c.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-65eb8689.js";const x=E({name:"TestSessionTimeout",components:{ACardGrid:l.Grid,ACard:l,PageWrapper:f},setup(){const t=B();function s(){return d(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return d(this,null,function*(){try{yield D()}catch(p){}})}return{test1:s,test2:e}}}),g=y("span",null,null,-1);function h(t,s,e,p,F,_){const c=i("a-button"),o=i("a-card-grid"),u=i("a-card"),r=i("PageWrapper");return A(),k(r,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a(()=>[n(u,{title:"请点击下面的按钮访问测试接口",extra:"所访问的接口会返回Token过期响应"},{default:a(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:a(()=>[n(c,{type:"primary",onClick:t.test1},{default:a(()=>[m("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:a(()=>[g,n(c,{class:"ml-4",type:"primary",onClick:t.test2},{default:a(()=>[m("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const v=C(x,[["render",h]]);export{v as default};
