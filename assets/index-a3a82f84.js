import{B as h}from"./BasicTable-f23818ec.js";import{T as _}from"./componentMap-3c747af9.js";import"./TableImg.vue_vue_type_style_index_0_lang-96d501e6.js";import{u as g}from"./useTable-84c92132.js";import{c as C}from"./system-82075152.js";import{u as T}from"./index-d58d6f86.js";import{_ as w,c as B,s as D}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-427c3f0e.js";import{d as R,a8 as t,_ as d,$ as k,f as i,aa as s,E as y,a9 as S,ac as E}from"./vue-7ba4ee8d.js";import{_ as $}from"./index.js";import"./BasicForm-106157f5.js";import"./FormItem.vue_vue_type_script_lang-0a88aed3.js";import"./helper-67eda2c0.js";import"./antd-f3f9d490.js";import"./BasicForm.vue_vue_type_style_index_0_lang-fd8e2ed6.js";import"./uniqBy-819cda2d.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./useForm-15663f97.js";import"./RadioButtonGroup-ae13c610.js";import"./useFormItem-224eedca.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-65eb8689.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-16614250.js";import"./index-2a4251e4.js";import"./sortable.esm-4ae27e0b.js";import"./index-f08c60da.js";import"./useContextMenu-68e0dc12.js";const A=R({name:"RoleManagement",components:{BasicTable:h,RoleDrawer:w,TableAction:_},setup(){const[e,{openDrawer:r}]=T(),[l,{reload:c}]=g({title:"角色列表",api:C,columns:B,formConfig:{labelWidth:120,schemas:D},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function m(){r(!0,{isUpdate:!1})}function p(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){c()}return{registerTable:l,registerDrawer:e,handleCreate:m,handleEdit:p,handleDelete:n,handleSuccess:a}}});function v(e,r,l,c,m,p){const n=t("a-button"),a=t("TableAction"),o=t("BasicTable"),f=t("RoleDrawer");return d(),k("div",null,[i(o,{onRegister:e.registerTable},{toolbar:s(()=>[i(n,{type:"primary",onClick:e.handleCreate},{default:s(()=>[y(" 新增角色 ")]),_:1},8,["onClick"])]),bodyCell:s(({column:b,record:u})=>[b.key==="action"?(d(),S(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,u)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),i(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const se=$(A,[["render",v]]);export{se as default};
