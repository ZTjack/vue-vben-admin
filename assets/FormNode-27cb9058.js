var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var n=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&n(e,t,o[t]);if(a)for(var t of a(o))v.call(o,t)&&n(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import N from"./FormNodeOperate-c6fb673f.js";import{u as S}from"./useFormDesignState-ba2ec14e.js";import k from"./index-232c1aea.js";import{d as b,r as y,H as V,a8 as c,_,$,a0 as f,f as d,a1 as B,a2 as O,B as D}from"./vue-7ba4ee8d.js";import{_ as w}from"./index.js";import"./index-c8f99757.js";import"./antd-f3f9d490.js";import"./formItemConfig-6c60c013.js";import"./componentMap-3c747af9.js";import"./useFormItem-224eedca.js";import"./RadioButtonGroup-ae13c610.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-16614250.js";import"./index-2a4251e4.js";const M=b({name:"FormNode",components:{VFormItem:k,FormNodeOperate:N},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=S(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(i({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,E){var s;const l=c("VFormItem"),h=c("FormNodeOperate");return _(),$("div",{class:O(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[d(l,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,B(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),d(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const re=w(M,[["render",z]]);export{re as default};
