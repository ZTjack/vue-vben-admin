import{b8 as b,f as k,bw as h,l as M,aM as R,k as O,aZ as v,bC as f,bL as B,bM as T,bN as $,b as A,_ as N}from"./index.js";import{bM as w,a_ as F}from"./antd-f3f9d490.js";import{d as P,u as m,a8 as c,_ as j,$ as x,f as o,aa as i,E as u,a1 as d,a2 as D}from"./vue-7ba4ee8d.js";const E=P({name:"SettingFooter",components:{CopyOutlined:w,RedoOutlined:F},setup(){const e=b(),{prefixCls:p}=k("setting-footer"),{t:s}=O(),{createSuccessModal:g,createMessage:r}=A(),C=h(),l=M(),t=R();function n(){const{isSuccessRef:a}=v(JSON.stringify(m(t.getProjectConfig),null,2));m(a)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function _(){try{t.setProjectConfig(f);const{colorWeak:a,grayMode:y}=f;B(),T(a),$(y),r.success(s("layout.setting.resetSuccess"))}catch(a){r.error(a)}}function S(){localStorage.clear(),t.resetAllState(),e.resetState(),C.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:n,handleResetSetting:_,handleClearAndRedo:S}}});function I(e,p,s,g,r,C){const l=c("CopyOutlined"),t=c("a-button"),n=c("RedoOutlined");return j(),x("div",{class:D(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),u(" "+d(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}const G=N(E,[["render",I],["__scopeId","data-v-7282eaa7"]]);export{G as default};
