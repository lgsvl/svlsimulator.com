(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"O+7z":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a("8o2o"),s=(a("q1tI"),a("7ljp")),o=a("qmQJ"),c={},i={_frontmatter:c},r=o.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(r,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The 2019.12 release of SVL Simulator release is now ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/simulator/releases/tag/2019.12"}),"available"),", and includes a new map, custom API callbacks, and many more additions and improvements."),Object(s.b)("h3",null,"New Environment: San Francisco"),Object(s.b)("p",null,"We have converted the San Francisco map to HDRP, on our ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://content.lgsvlsimulator.com/maps/sanfrancisco/"}),"content website"),". The San Francisco map is a re-creation of a section of SOMA San Francisco around Market Street. It features many traffic light intersections and multi-lane streets."),Object(s.b)("p",null,Object(s.b)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(s.b)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.668711656441715%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAC60lEQVQoz12SWVMiWRCF6x+Asu9QrFYptggorULTEzP2jBuo7FRRxQ7Foi3Q0RE+OA/zMvOf80zKREdHzMMXeWu5ec85eYWe8ZX6xgv1Zy80mK9psFjTcLGh7vwb3VTalMycUaFwSnrpjv7IX1ClfEdKWyVV7VClWqdyvUmXV79TtXxFy/V3EnTjBd3/wYdAm21QanYhHx7hOCWh8jGLfFJG+e4GmtZFR9VQqTbBDZHNnaBYOMPyaQWh0ZvRD5r9/2j0DFKnK6rpU5KlCIUCNspGRPqYOqbHhwfihtRmlffVBl3zc1gU6SyXo9XmlYRmd4pWz/hJ/71OoYyWUCfPOEjEYbeZUcqfYqkoUFoK1I6GFtdSpY6LT3k4bFYU83nom78h1PUxmt3JlgavGzpXbcSNZ9BnaxxJEkJBFxrnHzAo5tCo1dDRdNQaLXz+XESKY/B73Eil0rhpj94ts6LBHO3hglUtoLKyDqNPX9BhoqIIt3MXoteKg0iYlbWhcn7XtyVI8ei2mc1qgRj0ofRwBeFRHaLOtmusrKaNUe2MUOF3VV4/tHpw2e1s2YSA1ww5GuWGLShKB5lMGpGQHy6HHVbLLvZiYfT7TQiXtxUowzn42mDwzny1xVi94rpcg313hzMyI+SzIOh0Int8jMJFnpUHIQZ8sPB3m8WCg70Y/nydQZDlfZyef8KXUg1fbh+3XF7f4+q+jvOzPHxOG9ysUo47EPPbkQg7kE3H8EGWEPB5OA47knICxfMs/vmLr036UMZJKolc5mjLafoIGQ76kC0ko2EEvS74PC7EIx4cxkVIMR/29yKIhkIchxUnvMcwOH/O9u31GcK+lOAf4pASsa2NMIcb8nu3BHxueN1OeF1ODt+DRCzCihyIRq0I+h1s2YvpRMPiaYPZfI3xeAmhNzIwnC4xWa5Q+OW37akehxOBAE82YsKOyYwdswn+oImH4ICL80okrDxVF8q3v+Lt7RvGkydMjWeMxgv8C4GHsU5WjAIMAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",alt:"San Francisco map",title:"San Francisco map",src:"/static/26becdcaf4b7a3124c00323fa63a5b42/a6d36/2020-01-21-2019-12-release-san-francisco.png",srcSet:["/static/26becdcaf4b7a3124c00323fa63a5b42/222b7/2020-01-21-2019-12-release-san-francisco.png 163w","/static/26becdcaf4b7a3124c00323fa63a5b42/ff46a/2020-01-21-2019-12-release-san-francisco.png 325w","/static/26becdcaf4b7a3124c00323fa63a5b42/a6d36/2020-01-21-2019-12-release-san-francisco.png 650w","/static/26becdcaf4b7a3124c00323fa63a5b42/e548f/2020-01-21-2019-12-release-san-francisco.png 975w","/static/26becdcaf4b7a3124c00323fa63a5b42/3c492/2020-01-21-2019-12-release-san-francisco.png 1300w","/static/26becdcaf4b7a3124c00323fa63a5b42/3145a/2020-01-21-2019-12-release-san-francisco.png 2112w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"The HDRP version of the San Francisco map in California."),Object(s.b)("h3",null,"Python Custom Callback"),Object(s.b)("p",null,"The Python API now supports a ",Object(s.b)("inlineCode",{parentName:"p"},"custom")," type callback. This is useful when creating custom sensors and need to send data to the Python API. See the example ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/ComfortSensor/blob/master/ComfortSensor.cs#L69"}),"Comfort Sensor script")," for how to add this callback to a custom sensor."),Object(s.b)("h3",null,"Map Dependent NPCs"),Object(s.b)("p",null,"We've added properties to the ",Object(s.b)("inlineCode",{parentName:"p"},"MapOrigin")," component so that when creating a custom map, the type and quantity of NPCs can be controlled. For example, it does not make sense for School Busses to be in the AutonomouStuff parking lot so they will not be included in the list of potential NPCs."),Object(s.b)("h2",null,"Features from SVL Simulator 2019.11 Release"),Object(s.b)("h3",null,"Important Note"),Object(s.b)("p",null,"Assetbundle versions changed with this release. Re-build or re-download existing bundles to use them with this release."),Object(s.b)("h3",null,"New Environment: GoMentum Station"),Object(s.b)("p",null,"We have created a digital twin of GoMentum Station section Urban A, on our ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://content.lgsvlsimulator.com/maps/gomentum/"}),"content website"),". GoMentum Station is a dedicated testing facility for connected and automated vehicle technology, owned and operated by AAA. It is located at the former Concord Naval Weapons Station in Concord, California."),Object(s.b)("p",null,Object(s.b)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(s.b)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.601226993865026%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC0UlEQVQozx2Sa1MaZxiG+R390mnHfuiYOmPGGCNFI4bTIudAEDmzwMIusMsuIGAUSdSSIB4wjSZO2g/t1P7KK+/4B67nuu/7sXlcDoLSBg77UyIhP7PpB5TMLjHvJh7nMwLuFbpqmOmxzJ/TIfVimPwbO4d6DGl7mZhvjY0Xyzi37DxffYot4HNSzITI7YXpWTrX15/IxGMkg07C0pqABfl2qfHX3OC/L0eUs14SoTVmRzlqWT/1tIs3/hVyCSe7kZfYHOu/YZkWnY6JXCqgVnOEA3YGRpy/5zr/3pr889nk/68W89McetWHXg7QUUMYtSLn77rcTipcnFicDDRh6FqkkpFIRjeRU1sMmhGUnJteK8HVqUK/GeDLrM7D1wFDI0Q1u02zJJGK25mMD3jbH3A1GXN7Mebq4wSbXvRQFdqagJgVP7osCQMJSwnRkndoFCUB2BFGQUamn6N2HDXvobj7+2OnrVoGvZbk/rzBwydheNZPMD+pcGwlqe456VT9j+B84jlG2c2+FkYruGhXJXqqhJp1o5e8DBohmrlXtGUvIyvBaT/F55MitttpjfsLjcuxzP2lzrcr/XFBefcZ7bILOblOOvorau4FSnqLg8ZrpocFAYgx6gQ57UboKG7UzBazt2lstUIUORvlQE9y97HO+Ujhj4MiE7Hiw12Xm/cZXvsXSEcWhN0GhfgijYKDuohdL3rpaUF6pod900dtbxtbq9VGt0aMB2V6zRz7hk404mN19WduJlVuzgrCdgmj5KCZd1FJLYk/dWDUgyjFl6Qi6yhZl+h1WxxxYsvUBhi6zGGnzNA0KRQySK8WyMZWOBumRawwicBP9BUv1dS6AC4yf19Cq3hoqKK/wxKmpgjbBO3GDra+meeoU6FvGFTlPXY8v+Dd/JGBnuV6ss+xGWPY8DOsR8TKce4+lLifNXmy9ANO5zK9bomhZWI1VNpane8LhN/LM97ahQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",alt:"GoMentum map",title:"GoMentum map",src:"/static/489247721cab96f198b01637236f049b/a6d36/2020-01-21-2019-12-release-gomentum.png",srcSet:["/static/489247721cab96f198b01637236f049b/222b7/2020-01-21-2019-12-release-gomentum.png 163w","/static/489247721cab96f198b01637236f049b/ff46a/2020-01-21-2019-12-release-gomentum.png 325w","/static/489247721cab96f198b01637236f049b/a6d36/2020-01-21-2019-12-release-gomentum.png 650w","/static/489247721cab96f198b01637236f049b/e548f/2020-01-21-2019-12-release-gomentum.png 975w","/static/489247721cab96f198b01637236f049b/ae77d/2020-01-21-2019-12-release-gomentum.png 1111w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("p",null,"The new GoMentum map of the GoMentum Station Urban A area in Concord, CA."),Object(s.b)("h3",null,"Custom Sensors"),Object(s.b)("p",null,"It is now possible to write a custom sensor and attach it to a vehicle. These sensors can re-create other real-world sensors or record KPIs when running tests. See the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/ComfortSensor"}),"Comfort Sensor")," for an example and the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.lgsvlsimulator.com/docs/sensor-plugins/"}),"docs")," page for more information."),Object(s.b)("h3",null,"And many more improvements!"),Object(s.b)("p",null,"You can view the full release notes in our ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://www.lgsvlsimulator.com/docs/changelog/"}),"documentation"),"."),Object(s.b)("p",null,"Please don’t hesitate to submit a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/simulator/issues"}),"GitHub issue")," or email us directly at ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"mailto:contact@lgsvlsimulator.com"}),"contact@lgsvlsimulator.com")," with questions or feedback."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-news-2020-01-21-2019-12-release-md-ae5cf90261a9ffc5e559.js.map