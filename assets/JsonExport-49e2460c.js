import{B as d}from"./BasicTable-f23818ec.js";import"./componentMap-3c747af9.js";import"./TableImg.vue_vue_type_style_index_0_lang-96d501e6.js";import"./index-c0d19a41.js";import{c,d as t,j as m,a as f}from"./data-13feb840.js";import{P as h}from"./index-122f1a13.js";import{d as F,a8 as r,_ as C,a9 as _,aa as o,f as a,E as u}from"./vue-7ba4ee8d.js";import{_ as B}from"./index.js";import"./BasicForm-106157f5.js";import"./FormItem.vue_vue_type_script_lang-0a88aed3.js";import"./helper-67eda2c0.js";import"./antd-f3f9d490.js";import"./BasicForm.vue_vue_type_style_index_0_lang-fd8e2ed6.js";import"./uniqBy-819cda2d.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./useForm-15663f97.js";import"./RadioButtonGroup-ae13c610.js";import"./useFormItem-224eedca.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-65eb8689.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-16614250.js";import"./index-2a4251e4.js";import"./sortable.esm-4ae27e0b.js";import"./useContentViewHeight-bfb9982c.js";const A=F({components:{BasicTable:d,PageWrapper:h},setup(){function e(){m({data:t,filename:"使用key作为默认头部.xlsx"})}function i(){m({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})}function s(){f({sheetList:[{data:t,sheetName:"使用key作为默认头部"},{data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},json2sheetOpts:{header:["name","id"]},sheetName:"自定义头部"}],filename:"多Sheet导出示例.xlsx"})}return{defaultHeader:e,customHeader:i,handleMultipleSheet:s,columns:c,data:t}}});function k(e,i,s,T,x,E){const n=r("a-button"),p=r("BasicTable"),l=r("PageWrapper");return C(),_(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:o(()=>[a(p,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o(()=>[a(n,{onClick:e.defaultHeader},{default:o(()=>[u(" 导出：默认头部 ")]),_:1},8,["onClick"]),a(n,{onClick:e.customHeader},{default:o(()=>[u(" 导出：自定义头部 ")]),_:1},8,["onClick"]),a(n,{onClick:e.handleMultipleSheet,danger:""},{default:o(()=>[u(" 导出多Sheet ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}const Y=B(A,[["render",k]]);export{Y as default};
