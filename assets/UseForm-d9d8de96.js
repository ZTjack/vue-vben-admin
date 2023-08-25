var m=(e,o,p)=>new Promise((f,d)=>{var b=a=>{try{s(p.next(a))}catch(r){d(r)}},t=a=>{try{s(p.throw(a))}catch(r){d(r)}},s=a=>a.done?f(a.value):Promise.resolve(a.value).then(b,t);s((p=p.apply(e,o)).next())});import{B as A}from"./BasicForm-106157f5.js";import"./componentMap-3c747af9.js";import{u as v}from"./useForm-15663f97.js";import"./RadioButtonGroup-ae13c610.js";import{C as D,_}from"./index.js";import{P as R}from"./index-122f1a13.js";import{a as S}from"./cascader-c1ebc95c.js";import{d as O,k as C,a8 as u,_ as T,a9 as G,aa as l,f as n,E as c}from"./vue-7ba4ee8d.js";import{aj as z,ak as I}from"./antd-f3f9d490.js";import"./FormItem.vue_vue_type_script_lang-0a88aed3.js";import"./helper-67eda2c0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-fd8e2ed6.js";import"./uniqBy-819cda2d.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-224eedca.js";import"./uuid-31b8b5a4.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-16614250.js";import"./index-2a4251e4.js";import"./useContentViewHeight-bfb9982c.js";import"./onMountedOrActivated-65eb8689.js";const L=[{value:"large",label:"large"},{value:"middle",label:"middle"},{value:"small",label:"small"},{value:"default",label:"defualt"}],N=[{value:"vertical",label:"vertical"},{value:"inline",label:"inline"},{value:"horizontal",label:"horizontal"}],W=[{value:"left",label:"left"},{value:"right",label:"right"}],g=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"时间字段",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"联动",colProps:{span:8},componentProps:{api:S,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3)}},{field:"field9",component:"ApiCascader",label:"联动回显",colProps:{span:8},componentProps:{api:S,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3)}}],Y=[{field:"d1",component:"Divider",label:"基础属性",colProps:{span:24},componentProps:{orientation:"center"}},{field:"name",defaultValue:"useForm",component:"Input",label:"name",colProps:{span:24}},{field:"layout",defaultValue:"horizontal",component:"RadioButtonGroup",label:"layout",colProps:{span:24},componentProps:{options:N}},{field:"labelAlign",defaultValue:"right",component:"RadioButtonGroup",label:"labelAlign",colProps:{span:24},componentProps:{options:W}},{field:"labelWidth",defaultValue:120,component:"InputNumber",label:"labelWidth",colProps:{span:24}},{field:"size",defaultValue:"default",component:"Select",label:"size",colProps:{span:24},componentProps:{options:L}},{field:"colon",defaultValue:!1,component:"Switch",label:"colon",colProps:{span:24}},{field:"disabled",defaultValue:!1,component:"Switch",label:"disabled",colProps:{span:24}},{field:"compact",defaultValue:!1,component:"Switch",label:"compact",colProps:{span:24}},{field:"autoSetPlaceHolder",defaultValue:!0,component:"Switch",label:"autoSetPlaceHolder",colProps:{span:24}},{field:"autoSubmitOnEnter",defaultValue:!1,component:"Switch",label:"autoSubmitOnEnter",colProps:{span:24}},{field:"showAdvancedButton",defaultValue:!1,component:"Switch",label:"showAdvancedButton",colProps:{span:24}},{field:"d2",component:"Divider",label:"网格布局(rowProps)",colProps:{span:24},componentProps:{orientation:"center"}},{field:"rowProps.gutter.0",component:"InputNumber",defaultValue:0,label:"Horizontal Gutter",colProps:{span:24},componentProps:{addonAfter:"px"}},{field:"rowProps.gutter.1",component:"InputNumber",defaultValue:0,label:"Vertical Gutter",colProps:{span:24},componentProps:{addonAfter:"px"}},{field:"rowProps.align",defaultValue:"top",component:"Select",label:"align",colProps:{span:24},componentProps:{options:[{value:"stretch",label:"stretch"},{value:"bottom",label:"bottom"},{value:"top",label:"top"},{value:"middle",label:"middle"}]}},{field:"rowProps.justify",defaultValue:"start",component:"Select",label:"justify",colProps:{span:24},componentProps:{options:[{value:"space-around",label:"space-around"},{value:"space-between",label:"space-between"},{value:"center",label:"center"},{value:"end",label:"end"},{value:"start",label:"start"}]}},{field:"wrap",defaultValue:!0,component:"Switch",label:"wrap",colProps:{span:24}},{field:"d3",component:"Divider",label:"操作按钮",colProps:{span:24},componentProps:{orientation:"center"}},{field:"showActionButtonGroup",defaultValue:!0,component:"Switch",label:"showActionButtonGroup",colProps:{span:24},componentProps:({formActionType:e})=>({onChange:o=>m(void 0,null,function*(){e.updateSchema([{field:"showResetButton",componentProps:{disabled:!o}},{field:"showSubmitButton",componentProps:{disabled:!o}},{field:"actionColOptions.span",componentProps:{disabled:!o}}])})})},{field:"showResetButton",defaultValue:!0,component:"Switch",label:"showResetButton",colProps:{span:24}},{field:"showSubmitButton",defaultValue:!0,component:"Switch",label:"showSubmitButton",colProps:{span:24}},{field:"d4",component:"Divider",label:"操作按钮网格布局(actionColOptions)",colProps:{span:24},componentProps:{orientation:"center"}},{field:"actionColOptions.span",component:"Slider",defaultValue:24,label:"span",colProps:{span:24},componentProps:{min:0,max:24}},{field:"d5",component:"Divider",label:"其他事件",colProps:{span:24},componentProps:{orientation:"center"}},{field:"other",component:"Input",label:"",colProps:{span:24},colSlot:"other"}],$=O({components:{BasicForm:A,CollapseContainer:D,PageWrapper:R,Drawer:z,Space:I},setup(){const e=C(!1),o=C(),[p]=v({size:"small",schemas:Y,compact:!0,actionColOptions:{span:24},showActionButtonGroup:!1}),f=()=>m(this,null,function*(){var i;t({resetButtonOptions:{disabled:!1,text:"重置"}}),t({submitButtonOptions:{disabled:!1,loading:!1}}),yield s({field9:[]}),yield(i=o.value)==null?void 0:i.resetFields()}),d=i=>m(this,null,function*(){yield t(i),e.value=!1}),[b,{setProps:t,setFieldsValue:s,updateSchema:a}]=v({labelWidth:120,schemas:g,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function r(){return m(this,null,function*(){const F=yield function(){return new Promise(k=>{setTimeout(()=>{k({field9:["430000","430100","430102"],province:"湖南省",city:"长沙市",district:"岳麓区"})},1e3)})}(),{field9:B,province:V,city:y,district:E}=F;yield a({field:"field9",componentProps:{displayRenderArray:[V,y,E]}}),yield s({field9:B}),e.value=!1})}return{register:b,schemas:g,handleSubmit:i=>{},setProps:t,handleLoad:r,visible:e,showDrawer:()=>{e.value=!0},settingFormRef:o,withClose:i=>{t(i),e.value=!1},onSettings:()=>{var i;(i=o.value)==null||i.submit()},resetSettings:f,registerSetting:p,handleSubmitSetting:d}}});function j(e,o,p,f,d,b){const t=u("a-button"),s=u("Space"),a=u("BasicForm"),r=u("Drawer"),P=u("CollapseContainer"),h=u("PageWrapper");return T(),G(h,{title:"UseForm操作示例"},{default:l(()=>[n(t,{class:"mb-4",type:"primary",onClick:e.showDrawer},{default:l(()=>[c(" 更改设置 ")]),_:1},8,["onClick"]),n(r,{visible:e.visible,"onUpdate:visible":o[2]||(o[2]=w=>e.visible=w),title:"更改设置",placement:"right"},{extra:l(()=>[n(s,null,{default:l(()=>[n(t,{onClick:e.resetSettings},{default:l(()=>[c("重置设置")]),_:1},8,["onClick"]),n(t,{type:"primary",onClick:e.onSettings},{default:l(()=>[c("应用")]),_:1},8,["onClick"])]),_:1})]),default:l(()=>[n(a,{ref:"settingFormRef",onRegister:e.registerSetting,onSubmit:e.handleSubmitSetting},{other:l(()=>[n(s,null,{default:l(()=>[n(t,{onClick:o[0]||(o[0]=()=>e.withClose({resetButtonOptions:{disabled:!0,text:"重置New"}}))},{default:l(()=>[c(" 修改重置按钮 ")]),_:1}),n(t,{onClick:o[1]||(o[1]=()=>e.withClose({submitButtonOptions:{disabled:!0,loading:!0}}))},{default:l(()=>[c(" 修改查询按钮 ")]),_:1}),n(t,{onClick:e.handleLoad,class:"mr-2"},{default:l(()=>[c(" 联动回显 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onRegister","onSubmit"])]),_:1},8,["visible"]),n(P,{title:"useForm示例"},{default:l(()=>[n(a,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}const fe=_($,[["render",j]]);export{fe as default};
