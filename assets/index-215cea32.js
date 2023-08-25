import{M as k,a as w}from"./index-f91c3902.js";import{P as g}from"./index-122f1a13.js";import{af as C}from"./antd-f3f9d490.js";import{d as D,k as d,u as E,a8 as t,_ as M,a9 as V,aa as r,a0 as i,f as n,E as c}from"./vue-7ba4ee8d.js";import{_ as R}from"./index.js";import"./index-20acfc43.js";import"./useWindowSizeFn-997fa1d0.js";import"./onMountedOrActivated-65eb8689.js";import"./useContentViewHeight-bfb9982c.js";const b=D({components:{MarkDown:k,PageWrapper:g,MarkdownViewer:w,ACard:C},setup(){const e=d(null),a=d(`
# 标题h1

##### 标题h5

**加粗**
*斜体*
~~删除线~~
[链接](https://github.com/vbenjs/vue-vben-admin)
↓分割线↓

---


* 无序列表1
  * 无序列表1.1

1. 有序列表1
2. 有序列表2

* [ ] 任务列表1
* [x] 任务列表2

> 引用示例

\`\`\`js
// 代码块:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| 表格 | 示例 | 🎉️ |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function l(){const o=E(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function s(o){a.value=o}function m(){a.value=""}return{value:a,toggleTheme:l,markDownRef:e,handleChange:s,clearValue:m}}}),A={class:"mt-2"};function B(e,a,l,s,m,o){const u=t("a-button"),p=t("MarkDown"),f=t("MarkdownViewer"),_=t("a-card"),h=t("PageWrapper");return M(),V(h,{title:"MarkDown组件示例"},{default:r(()=>[i("div",null,[n(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[c(" 黑暗主题 ")]),_:1},8,["onClick"]),n(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[c(" 清空内容 ")]),_:1},8,["onClick"]),n(p,{value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])]),i("div",A,[n(_,{title:"Markdown Viewer 组件演示"},{default:r(()=>[n(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}const x=R(b,[["render",B]]);export{x as default};
