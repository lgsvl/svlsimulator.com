(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{N3r7:function(e,n,t){"use strict";var a=t("zLVn"),r=t("hlFM"),o=t("+zGO"),l=t("q1tI"),i=t.n(l),c=t("vOnD"),d=t("t3i7"),p=Object(o.a)(Object(c.c)((function(e){e.xs,e.sm,e.md,e.lg,e.xl,e.spacing,e.dense;var n=Object(a.a)(e,["xs","sm","md","lg","xl","spacing","dense"]);return i.a.createElement(r.a,n)})).withConfig({displayName:"LayoutGrid__StyledBox",componentId:"zyu7aj-0"})(["",""],(function(e){var n=e.theme,t=e.xs,a=e.sm,r=e.md,o=e.lg,l=e.xl,i=e.spacing,c=e.dense;return"\n  display: grid;\n  grid-gap: "+Object(d.b)(n.spacing(i))+";\n  "+(c?"grid-auto-flow: dense;":"")+"\n  // grid-template-columns: repeat(4, 1fr);\n\n  "+(t&&n.breakpoints.up("xs"))+" {\n    grid-template-columns: repeat("+t+", 1fr);\n  }\n  "+(a&&n.breakpoints.up("sm"))+" {\n    grid-template-columns: repeat("+a+", 1fr);\n  }\n  "+(r&&n.breakpoints.up("md"))+" {\n    grid-template-columns: repeat("+r+", 1fr);\n  }\n  "+(o&&n.breakpoints.up("lg"))+" {\n    grid-template-columns: repeat("+o+", 1fr);\n  }\n  "+(l&&n.breakpoints.up("xl"))+" {\n    grid-template-columns: repeat("+t+", 1fr);\n  }\n"})));n.a=function(e){return i.a.createElement(p,e)}},OGr7:function(e,n,t){"use strict";t.r(n),t.d(n,"queryNews",(function(){return x})),t.d(n,"default",(function(){return O}));var a=t("zLVn"),r=t("+zGO"),o=t("hlFM"),l=t("kKAo"),i=t("ofer"),c=t("q1tI"),d=t.n(c),p=t("N3r7"),s=t("mqTt"),u=t("NqE+"),m=t("j8uL"),g=t("/TFN"),b=t("t3i7"),v=t("vOnD"),f={news:"",event:"rgba(0, 0, 255, 0.05)",article:"rgba(255, 255, 0, 0.05)",announcement:"rgba(0, 255, 0, 0.05)"},w={normal:{colSpan:1,rowSpan:1},big:{colSpan:2,rowSpan:1},biggest:{colSpan:4,rowSpan:1}},k=Object(r.a)(Object(v.c)(l.a).withConfig({displayName:"news__StyledNewsBox",componentId:"sc-5f3s93-0"})(["",""],(function(e){var n=e.theme,t=e.category,a=e.colSpan,r=e.rowSpan,o=e.src;return"\n  grid-column-end: "+(a?"span "+a:"auto")+";\n  grid-row-end: "+(r?"span "+r:"auto")+";\n  padding: "+Object(b.b)(n.spacing(2))+";\n  // background-color: "+Object(b.a)(n.palette.background.paper,.6)+";\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  height: 360px;\n  position: relative;\n  overflow: hidden;\n\n  "+n.breakpoints.only("sm")+" {\n    grid-column-end: "+(a>2?"auto":"span "+a)+";\n  }\n  "+n.breakpoints.only("xs")+" {\n    grid-column-end: "+(a>1?"auto":"span "+a)+';\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    // background-color: '+f[t]+";\n    // background-color: "+Object(b.a)(n.palette.background.paper,.6)+";\n    background-color: "+n.palette.background.paper+";\n    background-image: url("+o+");\n    background-position: center center;\n    background-size: cover;\n    opacity: 0.4;\n    filter: blur(1px);\n    will-change: opacity, filter;\n  }\n  &:hover::before {\n    filter: blur(0);\n    opacity: 0.6;\n  }\n  "}))),h=Object(r.a)(Object(v.c)(o.a).withConfig({displayName:"news__FadeBox",componentId:"sc-5f3s93-1"})(["overflow:hidden;height:100%;mask-box-image:linear-gradient(to bottom,black calc(100% - 5em),transparent);mask-box-image-width:0 0 1em 0;"])),y=function(e,n,t){return t instanceof Array||(t=Object.keys(t)),-1!==t.indexOf(n)||(console.error('Unknown news %s: "%s". Use one of the following: %s.',e,n,t.join(", ")),!1)},S=function(e){var n=e.children,t=e.category,r=void 0===t?"news":t,l=e.colSpan,c=void 0===l?1:l,p=e.link,u=e.rowSpan,m=void 0===u?1:u,b=e.title,v=Object(a.a)(e,["children","category","colSpan","link","rowSpan","title"]),w=Object(g.a)().t;y("category",r,f);var S=p&&p.match("://");return d.a.createElement(k,Object.assign({elevation:4},v,{category:r,colSpan:c,rowSpan:m}),d.a.createElement(o.a,{position:"relative"},d.a.createElement(i.a,{variant:"overline"},w("news.categories."+r))),d.a.createElement(h,null,b&&d.a.createElement(i.a,{variant:"h5"},b),n),p?d.a.createElement(o.a,{alignSelf:"start",mt:"auto"},d.a.createElement(s.a,{buttonVariant:"outlined",to:p,target:S?"_blank":void 0},w("main.buttons.readNews"))):null)},x="2850067263";function O(e){var n=e.data,t=Object(g.a)().t;return d.a.createElement(u.a,{title:t("news.title")},d.a.createElement(o.a,{mt:{xs:2,md:6},mb:4},d.a.createElement(i.a,{variant:"h3"},t("news.title"))),d.a.createElement(p.a,{sm:2,md:4,spacing:2,dense:!0},n.allMdx.edges.map((function(e){var n=function(e){var n,t,a,r=e.id,o=e.frontmatter,l=e.headings,i=e.excerpt,c=e.slug,d=(null==o?void 0:o.link)||(null==c?void 0:c.replace(/^pages/,""))||void 0,p="",s="",u=(null==o?void 0:o.category)||"news",m=(null==o?void 0:o.prominence)||"normal",g=(null==o||null===(n=o.featuredImage)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(a=t.fluid)||void 0===a?void 0:a.src)||void 0;return(null==o?void 0:o.title)?p=o.title:(null==l?void 0:l.length)&&l[0]&&l[0].value&&(p=l[0].value),(null==o?void 0:o.preview)?s=null==o?void 0:o.preview:i&&(s=i.slice(p.length)),{bodyPreview:s,category:u,date:void 0,featuredImageSrc:g,id:r,link:d,prominence:m,title:p}}(e.node),t=n.id,a=n.title,r=n.bodyPreview,o=n.category,l=n.link,c=n.featuredImageSrc,p=n.prominence;y("prominence",p,w);var s=w[p].colSpan,u=w[p].rowSpan;return d.a.createElement(S,{key:t,title:a,src:c,category:o,colSpan:s,rowSpan:u,link:l},d.a.createElement(i.a,null,r))}))),d.a.createElement(m.a,null))}}}]);
//# sourceMappingURL=component---src-pages-news-index-tsx-631da30845da7fce3943.js.map