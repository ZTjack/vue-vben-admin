import{B as k}from"./BasicTable-f23818ec.js";import"./componentMap-3c747af9.js";import"./TableImg.vue_vue_type_style_index_0_lang-96d501e6.js";import{u as h}from"./useTable-84c92132.js";import{getBasicColumns as y,getFormConfig as b}from"./tableData-ede872c7.js";import{d as B}from"./table-9286518d.js";import{d as F,k as E,a8 as m,_ as p,a9 as v,aa as t,E as c,f,$ as g,F as C,a0 as T,a1 as w}from"./vue-7ba4ee8d.js";import{ao as A}from"./antd-f3f9d490.js";import{_ as S}from"./index.js";import"./BasicForm-106157f5.js";import"./FormItem.vue_vue_type_script_lang-0a88aed3.js";import"./helper-67eda2c0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-fd8e2ed6.js";import"./uniqBy-819cda2d.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./useForm-15663f97.js";import"./RadioButtonGroup-ae13c610.js";import"./useFormItem-224eedca.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-65eb8689.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-16614250.js";import"./index-2a4251e4.js";import"./sortable.esm-4ae27e0b.js";import"./select-93eac05e.js";const D=F({components:{BasicTable:k,AAlert:A},setup(){const e=E([]),[a,{getForm:_}]=h({title:"开启搜索区域",api:B,columns:y(),useSearchForm:!0,formConfig:b(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:e,onSelect:i,onSelectAll:n}});function d(){}function i(o,s){s?e.value=[...e.value,o.id]:e.value=e.value.filter(r=>r!==o.id)}function n(o,s,r){const l=r.map(u=>u.id);o?e.value=[...e.value,...l]:e.value=e.value.filter(u=>!l.includes(u))}return{registerTable:a,getFormValues:d,checkedKeys:e,onSelect:i,onSelectAll:n}}}),K={key:1};function $(e,a,_,d,i,n){const o=m("a-button"),s=m("a-alert"),r=m("BasicTable");return p(),v(r,{onRegister:e.registerTable},{"form-custom":t(()=>[c(" custom-slot ")]),headerTop:t(()=>[f(s,{type:"info","show-icon":""},{message:t(()=>[e.checkedKeys.length>0?(p(),g(C,{key:0},[T("span",null,"已选中"+w(e.checkedKeys.length)+"条记录(可跨页)",1),f(o,{type:"link",onClick:a[0]||(a[0]=l=>e.checkedKeys=[]),size:"small"},{default:t(()=>[c("清空")]),_:1})],64)):(p(),g("span",K,"未选中任何项目"))]),_:1})]),toolbar:t(()=>[f(o,{type:"primary",onClick:e.getFormValues},{default:t(()=>[c("获取表单数据")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}const ie=S(D,[["render",$]]);export{ie as default};
