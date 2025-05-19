import{u as r}from"./DmfvTtO6.js";import{s as t}from"./BXbMp1hq.js";import{ai as a,aj as s,d as n,i as p,a0 as c,H as i}from"./BBNW6-kU.js";import"./CGoqdGSW.js";var u=a`
    .p-checkbox-group {
        display: inline-flex;
    }
`,m={root:"p-checkbox-group p-component"},d=s.extend({name:"checkboxgroup",style:u,classes:m}),l={name:"BaseCheckboxGroup",extends:t,style:d,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},h={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function x(e,o,f,k,g,b){return p(),n("div",i({class:e.cx("root")},e.ptmi("root")),[c(e.$slots,"default")],16)}h.render=x;export{h as default};
