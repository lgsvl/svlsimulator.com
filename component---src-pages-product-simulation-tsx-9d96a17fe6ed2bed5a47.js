(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{n57c:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a("Z3vd"),r=a("+zGO"),i=a("q1tI"),o=a.n(i),l=a("vOnD"),c=a("/TFN"),s=Object(r.a)(Object(l.b)(n.a).withConfig({displayName:"Button__StyledButton",componentId:"sc-186zjmo-0"})([""])),d=o.a.forwardRef((function(e,t){return o.a.createElement(s,Object.assign({variant:"outlined"},e,{ref:t}))})),u=o.a.forwardRef((function(e,t){var a=Object(c.a)().t;return o.a.createElement(d,Object.assign({color:"primary",variant:"contained"},e,{ref:t}),a("main.buttons.getDemo"))})),m=o.a.forwardRef((function(e,t){var a=Object(c.a)().t;return o.a.createElement(d,Object.assign({},e,{ref:t}),a("main.buttons.readMore"))}));t.c=d},nrjT:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("+zGO"),r=a("hlFM"),i=a("Ji2X"),o=a("tRbT"),l=a("kKAo"),c=a("ofer"),s=a("q1tI"),d=a.n(s),u=a("n57c"),m=a("pZ2g"),b=a("t3i7"),p=a("vOnD"),g=Object(n.a)(Object(p.b)(i.a).withConfig({displayName:"Section__SectionContainer",componentId:"sc-1dytjc2-0"})(["margin-bottom:",";&:last-child{margin-bottom:0;}"],(function(e){var t=e.theme;return Object(b.a)(t.spacing(9))}))),h=Object(n.a)(Object(p.b)(l.a).withConfig({displayName:"Section__StyledPaper",componentId:"sc-1dytjc2-1"})([""])),f=Object(n.a)(Object(p.b)(r.a).withConfig({displayName:"Section__Image",componentId:"sc-1dytjc2-2"})(["height:100%;width:100%;min-height:300px;background-image:linear-gradient(-205deg,#e83d95,#862155 30%,black);border-radius:8px;"])),E=function(e){var t,a=e.buttonText,n=e.children,r=e.title,i=e.variant,l=void 0===i?"h5":i;switch(a){case"getDemo":t=d.a.createElement(u.a,null);break;case"readMore":t=d.a.createElement(u.b,null);break;default:t=d.a.createElement(u.c,null,a)}return d.a.createElement(o.a,{container:!0,direction:"column"},d.a.createElement(m.b,{item:!0},d.a.createElement(c.a,{variant:l},r)),d.a.createElement(m.b,{item:!0,my:5},n),a&&d.a.createElement(m.b,{item:!0},t))};t.b=function(e){var t=e.buttonText,a=e.children,n=e.flip,i=e.title,l=(e.tuckImage,e.variant);return d.a.createElement(g,{component:"section"},d.a.createElement(h,{elevation:0},d.a.createElement(o.a,{container:!0,spacing:2,direction:n?"row-reverse":"row"},d.a.createElement(o.a,{item:!0,xs:12,md:6},d.a.createElement(f,null)),d.a.createElement(o.a,{item:!0,xs:12,md:6},d.a.createElement(r.a,{px:2},d.a.createElement(E,{title:i,buttonText:t,variant:l},a))))))}},nspD:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return te}));var n=a("zLVn"),r=a("+zGO"),i=a("Ff2n"),o=a("wx14"),l=a("q1tI"),c=a.n(l),s=a("iuhU"),d=a("H2TA"),u=a("NqtD"),m=a("ye/S");var b=l.createContext();var p=l.createContext(),g=l.forwardRef((function(e,t){var a,n,r=e.align,c=void 0===r?"inherit":r,d=e.classes,m=e.className,g=e.component,h=e.padding,f=e.scope,E=e.size,v=e.sortDirection,y=e.variant,j=Object(i.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=l.useContext(b),w=l.useContext(p),x=w&&"head"===w.variant;g?(n=g,a=x?"columnheader":"cell"):n=x?"th":"td";var C=f;!C&&x&&(C="col");var N=h||(O&&O.padding?O.padding:"default"),T=E||(O&&O.size?O.size:"medium"),k=y||w&&w.variant,R=null;return v&&(R="asc"===v?"ascending":"descending"),l.createElement(n,Object(o.a)({ref:t,className:Object(s.a)(d.root,d[k],m,"inherit"!==c&&d["align".concat(Object(u.a)(c))],"default"!==N&&d["padding".concat(Object(u.a)(N))],"medium"!==T&&d["size".concat(Object(u.a)(T))],"head"===k&&O&&O.stickyHeader&&d.stickyHeader),"aria-sort":R,role:a,scope:C},j))})),h=Object(d.a)((function(e){return{root:Object(o.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(m.d)(Object(m.b)(e.palette.divider,1),.88):Object(m.a)(Object(m.b)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(g),f=a("tr08"),E=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"tr":r,d=e.hover,u=void 0!==d&&d,m=e.selected,b=void 0!==m&&m,g=Object(i.a)(e,["classes","className","component","hover","selected"]),h=l.useContext(p);return l.createElement(c,Object(o.a)({ref:t,className:Object(s.a)(a.root,n,h&&{head:a.head,footer:a.footer}[h.variant],u&&a.hover,b&&a.selected),role:"tr"===c?null:"row"},g))})),v=Object(d.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(m.b)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(E),y=a("PsDL"),j=a("ODXe"),O=a("dRu9"),w=a("wpWl"),x=a("4Hym"),C=a("bfFb"),N=l.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,c=e.collapsedHeight,d=void 0===c?"0px":c,u=e.component,m=void 0===u?"div":u,b=e.disableStrictModeCompat,p=void 0!==b&&b,g=e.in,h=e.onEnter,E=e.onEntered,v=e.onEntering,y=e.onExit,N=e.onExited,T=e.onExiting,k=e.style,R=e.timeout,H=void 0===R?w.b.standard:R,S=e.TransitionComponent,D=void 0===S?O.a:S,F=Object(i.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),z=Object(f.a)(),M=l.useRef(),_=l.useRef(null),I=l.useRef(),A="number"==typeof d?"".concat(d,"px"):d;l.useEffect((function(){return function(){clearTimeout(M.current)}}),[]);var B=z.unstable_strictMode&&!p,L=l.useRef(null),q=Object(C.a)(t,B?L:void 0),P=function(e){return function(t,a){if(e){var n=B?[L.current,t]:[t,a],r=Object(j.a)(n,2),i=r[0],o=r[1];void 0===o?e(i):e(i,o)}}},G=P((function(e,t){e.style.height=A,h&&h(e,t)})),J=P((function(e,t){var a=_.current?_.current.clientHeight:0,n=Object(x.a)({style:k,timeout:H},{mode:"enter"}).duration;if("auto"===H){var r=z.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),I.current=r}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),v&&v(e,t)})),$=P((function(e,t){e.style.height="auto",E&&E(e,t)})),W=P((function(e){var t=_.current?_.current.clientHeight:0;e.style.height="".concat(t,"px"),y&&y(e)})),X=P(N),Z=P((function(e){var t=_.current?_.current.clientHeight:0,a=Object(x.a)({style:k,timeout:H},{mode:"exit"}).duration;if("auto"===H){var n=z.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),I.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=A,T&&T(e)}));return l.createElement(D,Object(o.a)({in:g,onEnter:G,onEntered:$,onEntering:J,onExit:W,onExited:X,onExiting:Z,addEndListener:function(e,t){var a=B?e:t;"auto"===H&&(M.current=setTimeout(a,I.current||0))},nodeRef:B?L:void 0,timeout:"auto"===H?null:H},F),(function(e,t){return l.createElement(m,Object(o.a)({className:Object(s.a)(n.container,r,{entered:n.entered,exited:!g&&"0px"===A&&n.hidden}[e]),style:Object(o.a)({minHeight:A},k),ref:q},t),l.createElement("div",{className:n.wrapper,ref:_},l.createElement("div",{className:n.wrapperInner},a)))}))}));N.muiSupportAuto=!0;var T=Object(d.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(N),k=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"table":r,d=e.padding,u=void 0===d?"default":d,m=e.size,p=void 0===m?"medium":m,g=e.stickyHeader,h=void 0!==g&&g,f=Object(i.a)(e,["classes","className","component","padding","size","stickyHeader"]),E=l.useMemo((function(){return{padding:u,size:p,stickyHeader:h}}),[u,p,h]);return l.createElement(b.Provider,{value:E},l.createElement(c,Object(o.a)({role:"table"===c?null:"table",ref:t,className:Object(s.a)(a.root,n,h&&a.stickyHeader)},f)))})),R=Object(d.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(k),H={variant:"body"},S=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"tbody":r,d=Object(i.a)(e,["classes","className","component"]);return l.createElement(p.Provider,{value:H},l.createElement(c,Object(o.a)({className:Object(s.a)(a.root,n),ref:t,role:"tbody"===c?null:"rowgroup"},d)))})),D=Object(d.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(S),F=a("hlFM"),z={variant:"head"},M=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"thead":r,d=Object(i.a)(e,["classes","className","component"]);return l.createElement(p.Provider,{value:z},l.createElement(c,Object(o.a)({className:Object(s.a)(a.root,n),ref:t,role:"thead"===c?null:"rowgroup"},d)))})),_=Object(d.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(M),I=a("vOnD"),A=a("ofer"),B=a("n57c"),L=a("5oGM"),q=a("NqE+"),P=a("nrjT"),G=a("/TFN"),J=function(e){return c.a.createElement(A.a,{paragraph:!0},e)},$=function(e){return c.a.createElement(A.a,Object.assign({variant:"body2",display:"block"},e))},W=Object(r.a)(Object(I.b)((function(e){e.noBorder;var t=Object(n.a)(e,["noBorder"]);return c.a.createElement(h,t)})).withConfig({displayName:"simulation__StyledTableCell",componentId:"sc-6g74js-0"})(["border-bottom-style:none;",""],(function(e){return e.noBorder?"":"border-top-style: solid;"}))),X=Object(r.a)(Object(I.b)(h).withConfig({displayName:"simulation__StyledSubTableCell",componentId:"sc-6g74js-1"})(["border-bottom-style:none;"])),Z=Object(r.a)(Object(I.b)((function(e){return c.a.createElement(W,Object.assign({component:"th",scope:"row"},e))})).withConfig({displayName:"simulation__FeatureCell",componentId:"sc-6g74js-2"})(["width:50%;"])),K=Object(r.a)(Object(I.b)(Z).withConfig({displayName:"simulation__SubFeatureCell",componentId:"sc-6g74js-3"})(["border-top-style:none;"])),U=function(e){var t=e.height,a=void 0===t?32:t,r=e.width,i=void 0===r?32:r,o=Object(n.a)(e,["height","width"]),l=Object(f.a)();return c.a.createElement("span",Object.assign({role:"img","aria-label":"yes"},o),c.a.createElement(L.c,{color:l.palette.success.light,height:a,width:i}))},V=function(e){var t=e.height,a=void 0===t?32:t,r=e.width,i=void 0===r?32:r,o=Object(n.a)(e,["height","width"]),l=Object(f.a)();return c.a.createElement("span",Object.assign({role:"img","aria-label":"no"},o),c.a.createElement(L.m,{color:l.palette.error.light,height:a,width:i}))},Q=function(e,t,a,n){return{name:"simulation.featuresTable.features."+e,free:t,premium:a,subFeatures:n}},Y=[Q("0.name",!0,!0,[Q("0.subFeatures.0",!0,!0),Q("0.subFeatures.1",!0,!0),Q("0.subFeatures.2",!0,!0),Q("0.subFeatures.3",!0,!0),Q("0.subFeatures.4",!0,!0),Q("0.subFeatures.5",!0,!0)]),Q("1.name",!1,!0),Q("2.name",!1,!0),Q("3.name",!1,!0),Q("4.name",!1,!0),Q("5.name",!1,!0)];function ee(e){var t=e.row,a=e.index,n=c.a.useState(!1),r=n[0],i=n[1],o=Object(G.a)().t,l=0===a;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null,c.a.createElement(Z,{noBorder:l},c.a.createElement(A.a,null,o(t.name),c.a.createElement(y.a,{"aria-label":"expand row",size:"small",onClick:function(){return i(!r)}},r?c.a.createElement(L.e,null):c.a.createElement(L.d,null)))),c.a.createElement(W,{noBorder:l},t.free?c.a.createElement(U,null):c.a.createElement(V,null)),c.a.createElement(W,{noBorder:l},t.premium?c.a.createElement(U,null):c.a.createElement(V,null))),t.subFeatures&&t.subFeatures.length?c.a.createElement(v,null,c.a.createElement(X,{padding:"none",colSpan:3},c.a.createElement(T,{in:r,timeout:"auto",unmountOnExit:!0},c.a.createElement(R,{size:"small","aria-label":"sub-features"},c.a.createElement(D,null,t.subFeatures.map((function(e){return c.a.createElement(v,{key:e.name},c.a.createElement(K,null,c.a.createElement(F.a,{ml:2},c.a.createElement(A.a,{variant:"body2"},o(e.name)))),c.a.createElement(X,null,e.free?c.a.createElement(U,{height:24,width:24}):c.a.createElement(V,{height:24,width:24})),c.a.createElement(X,null,e.premium?c.a.createElement(U,{height:24,width:24}):c.a.createElement(V,{height:24,width:24})))}))))))):null)}function te(){var e=Object(G.a)(),t=e.t,a=e.tMap;return c.a.createElement(q.a,{title:t("simulation.title")},c.a.createElement(P.b,{title:t("simulation.title"),variant:"h2",buttonText:"getDemo"},a("simulation.body",J)),c.a.createElement(P.b,{title:t("simulation.section1.title"),flip:!0},a("simulation.section1.body",J)),c.a.createElement(P.b,{title:t("simulation.section2.title")},a("simulation.section2.body",J)),c.a.createElement(R,null,c.a.createElement(_,null,c.a.createElement(v,null,c.a.createElement(W,{noBorder:!0}),c.a.createElement(W,{noBorder:!0},c.a.createElement(A.a,{variant:"h6"},t("simulation.featuresTable.products.0.title")),c.a.createElement($,null,t("simulation.featuresTable.products.0.body"))),c.a.createElement(W,{noBorder:!0},c.a.createElement(A.a,{variant:"h6"},t("simulation.featuresTable.products.1.title")),c.a.createElement($,null,t("simulation.featuresTable.products.1.body"))))),c.a.createElement(D,null,Y.map((function(e,t){return c.a.createElement(ee,{key:e.name,row:e,index:t})})))),c.a.createElement(B.a,null))}}}]);
//# sourceMappingURL=component---src-pages-product-simulation-tsx-9d96a17fe6ed2bed5a47.js.map