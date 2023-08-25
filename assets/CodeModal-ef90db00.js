var p=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var r=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))u.call(o,t)&&r(e,t,o[t]);if(s)for(var t of s(o))v.call(o,t)&&r(e,t,o[t]);return e},i=(e,o)=>c(e,f(o));import{r as C,a as b}from"./index-c8f99757.js";import _ from"./PreviewCode-c5df5cfb.js";import{P as w}from"./antd-f3f9d490.js";import{d as D,r as h,e as M,H as J,a8 as l,_ as V,a9 as $,aa as x,f as y}from"./vue-7ba4ee8d.js";import{_ as A}from"./index.js";import"./index-fca015bd.js";import"./useWindowSizeFn-997fa1d0.js";const P=`<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">提交</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `;let g=`
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
     }
  }
}
<\/script>`;const j=D({name:"CodeModal",components:{PreviewCode:_,Modal:w},setup(){const e=h({visible:!1,jsonData:{}}),o=a=>{a.schemas&&b(a.schemas),e.visible=!0,e.jsonData=a},t=M(()=>P+JSON.stringify(C(e.jsonData),null,"	")+g);return i(n({},J(e)),{editorVueJson:t,showModal:o})}});function k(e,o,t,a,N,B){const m=l("PreviewCode"),d=l("Modal");return V(),$(d,{title:"代码",footer:null,visible:e.visible,onCancel:o[0]||(o[0]=E=>e.visible=!1),wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px",destroyOnClose:!0},{default:x(()=>[y(m,{editorJson:e.editorVueJson,fileFormat:"vue"},null,8,["editorJson"])]),_:1},8,["visible"])}const G=A(j,[["render",k]]);export{G as default};
