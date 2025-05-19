import{s as o}from"./CmDd6fmd.js";import{aj as r,ak as e,d as n,i as p,a1 as s,G as a}from"./Biax1PE7.js";var u=r`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`,i={root:"p-buttongroup p-component"},d=e.extend({name:"buttongroup",style:u,classes:i}),l={name:"BaseButtonGroup",extends:o,style:d,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},b={name:"ButtonGroup",extends:l,inheritAttrs:!1};function c(t,f,y,g,m,v){return p(),n("span",a({class:t.cx("root"),role:"group"},t.ptmi("root")),[s(t.$slots,"default")],16)}b.render=c;export{b as default};
