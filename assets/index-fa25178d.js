import{u as s}from"./index-d58d6f86.js";import _ from"./Drawer1-1e06be8a.js";import y from"./Drawer2-824bb279.js";import E from"./Drawer3-b003bb1a.js";import A from"./Drawer4-0eaf4ded.js";import R from"./Drawer5-fa320744.js";import{P as k}from"./index-122f1a13.js";import{d as B,a8 as t,_ as $,a9 as P,aa as u,f as r,E as i}from"./vue-7ba4ee8d.js";import{ao as v}from"./antd-f3f9d490.js";import{_ as W}from"./index.js";import"./BasicForm-106157f5.js";import"./FormItem.vue_vue_type_script_lang-0a88aed3.js";import"./componentMap-3c747af9.js";import"./useFormItem-224eedca.js";import"./RadioButtonGroup-ae13c610.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-16614250.js";import"./index-2a4251e4.js";import"./helper-67eda2c0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-fd8e2ed6.js";import"./uniqBy-819cda2d.js";import"./useForm-15663f97.js";import"./useContentViewHeight-bfb9982c.js";import"./onMountedOrActivated-65eb8689.js";const b=B({components:{Alert:v,PageWrapper:k,Drawer1:_,Drawer2:y,Drawer3:E,Drawer4:A,Drawer5:R},setup(){const[e,{openDrawer:o,setDrawerProps:p}]=s(),[g,{openDrawer:f}]=s(),[d,{openDrawer:n}]=s(),[a,{openDrawer:m}]=s(),[w,{openDrawer:D}]=s();function l(){m(!0,{data:"content",info:"Info"})}function c(){o(),p({loading:!0}),setTimeout(()=>{p({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:a,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,p,g,f,d){const n=t("Alert"),a=t("a-button"),m=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return $(),P(F,{title:"抽屉组件使用示例"},{default:u(()=>[r(n,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:u(()=>[i(" 打开Drawer ")]),_:1},8,["onClick"]),r(n,{message:"内外同时控制显示隐藏","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:u(()=>[i(" 打开Drawer ")]),_:1}),r(n,{message:"自适应高度/显示footer","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:u(()=>[i(" 打开Drawer ")]),_:1}),r(n,{message:"内外数据交互","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:e.send},{default:u(()=>[i(" 打开Drawer并传递数据 ")]),_:1},8,["onClick"]),r(n,{message:"详情页模式","show-icon":""}),r(a,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:u(()=>[i(" 打开详情Drawer ")]),_:1}),r(m,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}const sr=W(b,[["render",L]]);export{sr as default};
