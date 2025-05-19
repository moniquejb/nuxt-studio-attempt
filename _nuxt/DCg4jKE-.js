import{ai as x,aj as T,H as l,aA as b,aD as w,aF as f,am as u,b1 as L,aw as P,d as c,i as d,g as p,F as v,D as F,e as h,az as B,E as g,n as D,G as I,t as C}from"./BBNW6-kU.js";import{R as M}from"./CyOo-vL2.js";import{s as K}from"./CGoqdGSW.js";import"./BZTCtQCy.js";import"./DmfvTtO6.js";var E=x`
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-tablist {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        background: dt('tabmenu.tablist.background');
        border-style: solid;
        border-color: dt('tabmenu.tablist.border.color');
        border-width: dt('tabmenu.tablist.border.width');
        position: relative;
    }

    .p-tabmenu-item-link {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        background: dt('tabmenu.item.background');
        border-style: solid;
        border-width: dt('tabmenu.item.border.width');
        border-color: dt('tabmenu.item.border.color');
        color: dt('tabmenu.item.color');
        padding: dt('tabmenu.item.padding');
        font-weight: dt('tabmenu.item.font.weight');
        transition:
            background dt('tabmenu.transition.duration'),
            border-color dt('tabmenu.transition.duration'),
            color dt('tabmenu.transition.duration'),
            outline-color dt('tabmenu.transition.duration'),
            box-shadow dt('tabmenu.transition.duration');
        margin: dt('tabmenu.item.margin');
        outline-color: transparent;
        gap: dt('tabmenu.item.gap');
    }

    .p-tabmenu-item-link:focus-visible {
        z-index: 1;
        box-shadow: dt('tabmenu.item.focus.ring.shadow');
        outline: dt('tabmenu.item.focus.ring.width') dt('tabmenu.item.focus.ring.style') dt('tabmenu.item.focus.ring.color');
        outline-offset: dt('tabmenu.item.focus.ring.offset');
    }

    .p-tabmenu-item-icon {
        color: dt('tabmenu.item.icon.color');
        transition:
            background dt('tabmenu.transition.duration'),
            border-color dt('tabmenu.transition.duration'),
            color dt('tabmenu.transition.duration'),
            outline-color dt('tabmenu.transition.duration'),
            box-shadow dt('tabmenu.transition.duration');
    }

    .p-tabmenu-item-label {
        line-height: 1;
    }

    .p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
        background: dt('tabmenu.item.hover.background');
        border-color: dt('tabmenu.item.hover.border.color');
        color: dt('tabmenu.item.hover.color');
    }

    .p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {
        color: dt('tabmenu.item.icon.hover.color');
    }

    .p-tabmenu-item-active .p-tabmenu-item-link {
        background: dt('tabmenu.item.active.background');
        border-color: dt('tabmenu.item.active.border.color');
        color: dt('tabmenu.item.active.color');
    }

    .p-tabmenu-item-active .p-tabmenu-item-icon {
        color: dt('tabmenu.item.icon.active.color');
    }

    .p-tabmenu-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        bottom: dt('tabmenu.active.bar.bottom');
        height: dt('tabmenu.active.bar.height');
        background: dt('tabmenu.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
`,N={root:"p-tabmenu p-component",tablist:"p-tabmenu-tablist",item:function(e){var t=e.instance,r=e.index,s=e.item;return["p-tabmenu-item",{"p-tabmenu-item-active":t.d_activeIndex===r,"p-disabled":t.disabled(s)}]},itemLink:"p-tabmenu-item-link",itemIcon:"p-tabmenu-item-icon",itemLabel:"p-tabmenu-item-label",activeBar:"p-tabmenu-active-bar"},S=T.extend({name:"tabmenu",style:E,classes:N}),O={name:"BaseTabMenu",extends:K,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$pcTabMenu:this,$parentInstance:this}}},$={name:"TabMenu",extends:O,inheritAttrs:!1,emits:["update:activeIndex","tab-change"],data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:{flush:"post",handler:function(e){this.d_activeIndex=e,this.updateInkBar()}}},mounted:function(){var e=this;this.$nextTick(function(){e.updateInkBar()});var t=this.findActiveItem();t&&(t.tabIndex="0")},updated:function(){this.updateInkBar()},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r}})},onItemClick:function(e,t,r){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeIndex&&(this.d_activeIndex=r,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:r})},onKeydownItem:function(e,t,r){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"NumpadEnter":case"Enter":{this.onItemClick(e,t,r),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?b(t,"data-p-disabled")===!0?this.findNextItem(t.children[0]):t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?b(t,"data-p-disabled")===!0?this.findPrevItem(t.children[0]):t.children[0]:null},findFirstItem:function(){var e=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=L(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},onTabKey:function(){var e=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]'),t=u(this.$refs.nav,'[data-pc-section="itemlink"][tabindex="0"]');t!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),t.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,t=!1,r=0;r<e.length;r++){var s=e[r];b(s,"data-p-active")&&(this.$refs.inkbar.style.width=w(s)+"px",this.$refs.inkbar.style.left=f(s).left-f(this.$refs.nav).left+"px",t=!0)}t||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(e,t){var r=this;return{action:l({class:this.cx("itemLink"),tabindex:-1,onClick:function(n){return r.onItemClick(n,e,t)},onKeyDown:function(n){return r.onKeydownItem(n,e,t)}},this.getPTOptions("itemLink",e,t)),icon:l({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon",e,t)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t))}}},directives:{ripple:M}},A=["aria-labelledby","aria-label"],_=["onClick","onKeydown","data-p-active","data-p-disabled"],z=["href","target","aria-label","aria-disabled"];function H(a,e,t,r,s,n){var k=P("ripple");return d(),c("div",l({class:a.cx("root")},a.ptmi("root")),[p("ul",l({ref:"nav",class:a.cx("tablist"),role:"menubar","aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptm("tablist")),[(d(!0),c(v,null,F(a.model,function(i,o){return d(),c(v,{key:n.label(i)+"_"+o.toString()},[n.visible(i)?(d(),c("li",l({key:0,ref_for:!0,ref:"tab",class:[a.cx("item",{item:i,index:o}),i.class],role:"presentation",onClick:function(m){return n.onItemClick(m,i,o)},onKeydown:function(m){return n.onKeydownItem(m,i,o)}},n.getPTOptions("item",i,o),{"data-p-active":s.d_activeIndex===o,"data-p-disabled":n.disabled(i)}),[a.$slots.item?(d(),g(I(a.$slots.item),{key:1,item:i,index:o,active:o===s.d_activeIndex,label:n.label(i),props:n.getMenuItemProps(i,o)},null,8,["item","index","active","label","props"])):B((d(),c("a",l({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:i.url,class:a.cx("itemLink"),target:i.target,"aria-label":n.label(i),"aria-disabled":n.disabled(i),tabindex:-1},n.getPTOptions("itemLink",i,o)),[a.$slots.itemicon?(d(),g(I(a.$slots.itemicon),{key:0,item:i,class:D(a.cx("itemIcon"))},null,8,["item","class"])):i.icon?(d(),c("span",l({key:1,class:[a.cx("itemIcon"),i.icon],ref_for:!0},n.getPTOptions("itemIcon",i,o)),null,16)):h("",!0),p("span",l({class:a.cx("itemLabel"),ref_for:!0},n.getPTOptions("itemLabel",i,o)),C(n.label(i)),17)],16,z)),[[k]])],16,_)):h("",!0)],64)}),128)),p("li",l({ref:"inkbar",role:"none",class:a.cx("activeBar")},a.ptm("activeBar")),null,16)],16,A)],16)}$.render=H;export{$ as default};
