(this["webpackJsonpmy-porfolio"]=this["webpackJsonpmy-porfolio"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"title":"AZAMARA","thumbnail":"images/AZA/azamara.jpg","gallery":["../images/AZA/azamara-1.jpg","../images/AZA/azamara-2.jpg","../images/AZA/azamara-3.jpg"],"banners":"","client":"Azamara Club Cruises - Royal Caribbean","info":"These are HTML Email Campaigns I developed and coded for Azamara Club Cruises, a branch of Royal Caribbean. The emails were designed creatively through Sketch or Adobe XD. Emails were then coded through PHP Mailer Generator and deployed through Salesforce Marketing Cloud (Email Content Builder). ","link":"https://view.email.azamaraclubcruises.com/?qs=33f46ff12aa402185aa7c572354dbd8e29f31b273342c36a9f233fe3ccfc8f93754bfe4c057cbb5cf238a88d990f5e09b8ee1876b54c80379dc76a9a4bbd9047c80cb8e9e3dcbe1bdf7078cf2157a2a0ac6296ddb2b8c128","technology":"HTML, CSS, AMPSCRIPT, and Salesforce Marketing Cloud"},{"id":2,"title":"SongSearch","thumbnail":"images/SONG/song-search.jpg","gallery":["../images/SONG/image-1.jpg","../images/SONG/image-2.jpg","../images/SONG/image-3.jpg"],"banners":"","client":"Personal Project","info":"SongSearch is a React App that I created connected with Apple Music API to search for any artist. The application provides a 30-second clip of songs and links to the album and artist library on Apple Music.","link":"https://song-search.herokuapp.com/","technology":"ReactJS, Express, and Apple Music API"},{"id":3,"title":"Vice Media ","thumbnail":"images/VICE/vice-media.jpg","video":"video/Video-1.mp4","gallery":["../images/VICE/vice-media-1.png","../images/VICE/vice-media-2.png","../images/VICE/vice-media-3.png"],"banners":"","client":"Vice Media 2030 Fellowship Application","info":"This was my video submission for Vice Media 2030 Residency Fellowship. The prompt question was: The world is reeling from a global health pandemic and a global injustice pandemic. What is your hope post-pandemic? How would you use your voice to push the world towards that vision?","link":"https://vimeo.com/467418286","technology":"Adobe After Effects"},{"id":4,"title":"European Wax Center","thumbnail":"images/EWC/ewc.jpeg","gallery":"","banners":["../images/EWC/banner-1/banner-1.html","../images/EWC/banner-2/banner-2.html","../images/EWC/banner-3/banner-3.html"],"client":"European Wax Center","info":"A set of HTML5 banners that were created on Google Web Designer for European Wax Center at Republica Havas. The copy for the banners was written for a bilingual audience so they are in Spanish.","technology":"Google Web Designer"}]')},23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),i=(t(28),t(6)),o=t(7),s=t(9),m=t(8),u=t(3),d=t(12),p=t.n(d),E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).update=function(){e.setState({width:window.innerWidth}),e.state.width>=1031&&e.setState({isActive:!1})},e.state={isActive:!1,width:0},window.addEventListener("resize",e.update),e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"toggleClass",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"main-header"},l.a.createElement("div",{className:this.state.isActive?"container active":"container",id:"nav"},l.a.createElement(p.a,{up:!0,duration:2e3},l.a.createElement("div",{className:"nav"},l.a.createElement(u.c,{to:"/",className:"logo"},l.a.createElement("img",{src:"../logo.png",width:"300",height:"30",className:this.state.isActive?"logo-image active":"logo-image",alt:"Karla Cortes"})),l.a.createElement("div",{className:this.state.isActive?"main-container active":"main-container",id:"button",onClick:function(){return e.toggleClass()}},l.a.createElement("div",{className:"line-one"}),l.a.createElement("div",{className:"line-two"}),l.a.createElement("div",{className:"line-three"})),l.a.createElement("ul",{className:this.state.isActive?"desktop-menu active":"desktop-menu",id:"js-menu"},l.a.createElement("div",{className:"bg-active"}),l.a.createElement("li",null,l.a.createElement(u.c,{to:"/",className:"nav-links"},"Home")),l.a.createElement("li",null,l.a.createElement(u.c,{to:"/about",className:"nav-links"},"About")),l.a.createElement("li",null,l.a.createElement(u.c,{to:"/",className:"nav-links"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"../KarlaCortes-Resume-2020.pdf",className:"nav-links",target:"_blank"},"Resume")),l.a.createElement("li",null,l.a.createElement(u.c,{to:"/about",className:"nav-links"},"Connect")))))))}}]),t}(n.Component),h=t(14),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sortable"},l.a.createElement("div",{className:"sortable-media"},l.a.createElement("div",{className:"projects-main-container"},l.a.createElement("div",{className:"projects-container"},l.a.createElement(p.a,{bottom:!0,duration:1e3},h.map((function(e){return l.a.createElement("div",{className:"project-image-container project-".concat(e.id),key:e.id},l.a.createElement(u.b,{to:"/info/".concat(e.id)},l.a.createElement("div",{className:"project-image",key:e.id},l.a.createElement("img",{src:e.thumbnail,alt:"".concat(e.id)})),l.a.createElement("div",{className:"overlay"},l.a.createElement("p",null,e.title))))}))))))))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"goUp",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return l.a.createElement("div",{onClick:this.goUp,className:"moveUp"},l.a.createElement("label",{htmlFor:"animation2"},l.a.createElement("p",null,"Back to Top"),l.a.createElement("div",{className:"arrow"})))}}]),t}(n.Component),f=function(){return l.a.createElement("footer",null,l.a.createElement(b,null),l.a.createElement("div",{className:"footer-links"},l.a.createElement("p",null,"Designed & Built by Karla Cortes"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:kmcortes7@gmail.com"},l.a.createElement("i",{className:"fas fa-at"}))),l.a.createElement("li",null," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/karla-cortes/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin-in"}))),l.a.createElement("li",null," ",l.a.createElement("a",{href:"https://codepen.io/karlacortes",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-codepen"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/karla-cortes",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://vimeo.com/karlacortes",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-vimeo-v"}))))))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(g,null),l.a.createElement(f,null))},y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(l.a.Component),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={post:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return h.map((function(a){var t=parseInt(e.props.match.params.post_id),n=h.length;if(a.id===t)return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"container"},l.a.createElement(y,null),l.a.createElement("div",{className:"project-bio"},l.a.createElement("div",{className:"bio"},l.a.createElement("video",{controls:!0,width:"100%",height:"500",className:"bio-video",poster:"/images/vice-media.jpg",style:{display:a.video?"block":"none"}},l.a.createElement("source",{src:"../".concat(a.video),type:"video/mp4"})),l.a.createElement("img",{src:"../".concat(a.thumbnail),style:{display:a.video?"none":"block"},className:a.video?"project-image-video-hero":"project-image-hero",id:"project-top",alt:""}),l.a.createElement("div",{className:"project-stats"},l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.info),l.a.createElement("div",{className:"project-info"},l.a.createElement("h4",null,"Client"),l.a.createElement("p",null,a.client),l.a.createElement("h4",null,"Technologies Used"),l.a.createElement("p",null,a.technology),l.a.createElement("button",null,l.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},"View Project"))))),l.a.createElement("div",{className:"portfolio-images"},l.a.createElement("iframe",{src:a.banners[0],width:"500",height:"417",style:{display:a.banners[0]?"block":"none"},frameBorder:"0",className:"port-img frame",title:"frame-1"}),l.a.createElement("iframe",{src:a.banners[1],width:"500",height:"417",style:{display:a.banners[1]?"block":"none"},frameBorder:"0",className:"port-img frame",title:"frame-2"}),l.a.createElement("iframe",{src:a.banners[2],width:"500",height:"417",style:{display:a.banners[2]?"block":"none"},frameBorder:"0",className:"port-img frame",title:"frame-3"}),l.a.createElement("img",{src:a.gallery[0],style:{display:a.gallery[0]?"block":"none"},alt:"",className:"port-img"}),l.a.createElement("img",{src:a.gallery[1],style:{display:a.gallery[1]?"block":"none"},alt:"",className:"port-img"}),l.a.createElement("img",{src:a.gallery[2],style:{display:a.gallery[2]?"block":"none"},alt:"",className:"port-img"}))),l.a.createElement("div",{className:"previous-next"},l.a.createElement(u.b,{to:a.id>1?"/info/".concat(a.id-1):"/info/".concat(n),className:"previous"},"Previous Project"),l.a.createElement(u.b,{to:a.id<n?"/info/".concat(a.id+1):"/info/1",className:"next"},"Next Project"))),l.a.createElement(f,null))}))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"aboutme-container"},l.a.createElement("div",{className:"about-skills-container"},l.a.createElement("div",{className:"aboutme-bio"},l.a.createElement(p.a,{up:!0,duration:2e3},l.a.createElement("div",null,l.a.createElement("h1",null,"Who I Am"),l.a.createElement("p",null,"I am a Creative Developer from the Greater Boston area currently residing in Miami, FL.Web Development fell into my lap around three years ago, and I have not stopped coding ever since."),l.a.createElement("br",null),l.a.createElement("p",null,"My passion is combining the attributes of design with technology and problem-solving. My prior experience helps bridge the gap between customer service and my individuality."),l.a.createElement("button",null,l.a.createElement("a",{href:"mailto:kmcortes7@gmail.com"},"Talk to Me"))),l.a.createElement("img",{src:"images/me.jpg",width:"500",height:"400",className:"me",alt:""}))),l.a.createElement("div",{className:"skills"},l.a.createElement(p.a,{up:!0,duration:2e3},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",{className:"tech-skills"},l.a.createElement("h2",null,"Technology"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS/SCSS"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"Salesforce Marketing Cloud"),l.a.createElement("li",null,"Salesforce Email Studio"),l.a.createElement("li",null,"Wordpress"),l.a.createElement("li",null,"Squarespace Template Development"),l.a.createElement("li",null,"Google Web Design - HTML5 Digital Banners"))),l.a.createElement("div",{className:"design-skills"},l.a.createElement("h2",null,"Design"),l.a.createElement("ul",null,l.a.createElement("li",null,"Sketch"),l.a.createElement("li",null,"Adobe XD"),l.a.createElement("li",null,"Adobe Photoshop"),l.a.createElement("li",null,"Adobe After Effects"),l.a.createElement("li",null,"Adobe Illustrator"),l.a.createElement("li",null,"Procreate"))))))),l.a.createElement("div",{className:"barcode-container"},l.a.createElement("img",{src:"images/barcode.png",className:"bar-code",alt:""}))),l.a.createElement(f,null))}}]),t}(n.Component),w=t(1);t(36),t(37);var j=function(){return l.a.createElement("div",null,l.a.createElement(u.a,{basename:"/portfolio-2020"},l.a.createElement(y,null),l.a.createElement(w.c,null,l.a.createElement(w.a,{exact:!0,path:"/",component:v}),l.a.createElement(w.a,{path:"/info/:post_id",component:k}),l.a.createElement(w.a,{path:"/about",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(u.a,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.68c13e9d.chunk.js.map