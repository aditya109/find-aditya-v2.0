(this["webpackJsonpfind-aditya-v2.0"]=this["webpackJsonpfind-aditya-v2.0"]||[]).push([[0],[,,function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return l}));var a=s(3),i=s(1),c=s(0),n=Object(i.createContext)(),r={darkMode:!1},o=function(e,t){switch(t.type){case"TOGGLE":return{darkMode:!e.darkMode};default:return e}},l=function(e){var t=Object(i.useReducer)(o,r),s=Object(a.a)(t,2),l=s[0],d=s[1];return Object(c.jsx)(n.Provider,{value:{state:l,dispatch:d},children:e.children})}},,,,,,function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return b}));var a=s(4),i=s(6),c=s(3),n=(s(25),s(9)),r=s(10),o=s(11),l=s(1),d=s(12),m=s(2),u=s(0),b=function(){var t=Object(l.useRef)(),s=Object(l.useContext)(m.a).state.darkMode,b=Object(l.useState)({user_name:"",user_email:"",user_subject:"",message:""}),j=Object(c.a)(b,2),h=j[0],p=j[1],g=Object(l.useState)(!1),f=Object(c.a)(g,2),v=f[0],x=(f[1],e.secrets.EMAIL_TEMPLATE_ID),O=Object({NODE_ENV:"production",PUBLIC_URL:"/find-aditya-v2.0",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).USER_ID,N=function(e){var t=e.target.name,s=e.target.value;p(Object(i.a)(Object(i.a)({},h),{},Object(a.a)({},t,s)))};var k=function(e){console.log(e);var t,s="",a=!1;return t=e.user_email,/\S+@\S+\.\S+/.test(t)?a=!0:s="Please enter a valid email.",{errorMessage:s,Ok:a}};return Object(u.jsxs)("div",{className:"c",children:[Object(u.jsx)("div",{className:"c-bg"}),Object(u.jsxs)("div",{className:"c-wrapper",children:[Object(u.jsx)("div",{className:"c-left",children:Object(u.jsxs)("div",{className:"c-info",children:[Object(u.jsx)("div",{className:"c-title",children:"Connect with me !"}),Object(u.jsxs)("div",{className:"c-info-item",children:[Object(u.jsx)("img",{src:n.a,alt:"",className:"c-icon email"}),"kumaraditya1096@outlook.com"]}),Object(u.jsxs)("div",{className:"c-info-item",children:[Object(u.jsx)("img",{src:r.a,alt:"",className:"c-icon github"}),"https://github.com/aditya109"]}),Object(u.jsxs)("div",{className:"c-info-item",children:[Object(u.jsx)("img",{src:o.a,alt:"",className:"c-icon linkedin"}),"https://www.linkedin.com/in/aditya109/"]})]})}),Object(u.jsxs)("div",{className:"c-right",children:[Object(u.jsxs)("p",{className:"c-desc",children:[Object(u.jsx)("b",{children:" Like what you see ? "})," Feel free to reach out !"]}),Object(u.jsxs)("form",{name:"contact-form",ref:t,onSubmit:function(e){e.preventDefault();var s=k(h);s.Ok?d.a.sendForm("portfolio-mail",x,t.current,O).then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})):alert(s.errorMessage)},children:[Object(u.jsx)("input",{style:{backgroundColor:s&&"#333"},autoComplete:"off",type:"text",placeholder:"Name",name:"user_name",value:h.username,onChange:N,required:!0}),Object(u.jsx)("input",{style:{backgroundColor:s&&"#333"},autoComplete:"off",type:"text",placeholder:"Subject",name:"user_subject",value:h.subject,onChange:N,required:!0}),Object(u.jsx)("input",{style:{backgroundColor:s&&"#333"},autoComplete:"off",type:"text",placeholder:"Email",name:"user_email",value:h.email,onChange:N,required:!0}),Object(u.jsx)("textarea",{style:{backgroundColor:s&&"#333"},name:"message",value:h.message,onChange:N,id:"",placeholder:"Message",rows:"5"}),Object(u.jsx)("button",{className:"submit-btn",children:"Submit"}),v&&"Thank you ...."]})]})]})]})}}).call(this,s(24))},function(e,t,s){"use strict";t.a=s.p+"static/media/email.c7f87348.svg"},function(e,t,s){"use strict";t.a=s.p+"static/media/github.3dfe2ad4.svg"},function(e,t,s){"use strict";t.a=s.p+"static/media/linkedin.cfe4cd5b.svg"},,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),c=s(7),n=s.n(c),r=(s(17),s.p+"static/media/skill-graphics.e17f19dd.svg"),o=s.p+"static/media/cka-certified-kubernetes-administrator.9b561980.png",l=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)},d=s(0),m=function(){return Object(d.jsxs)("div",{className:"a",children:[Object(d.jsx)("div",{className:"a-left",children:Object(d.jsx)("div",{className:"a-card",children:Object(d.jsx)("img",{src:r,alt:"",className:"a-img"})})}),Object(d.jsxs)("div",{className:"a-right",children:[Object(d.jsxs)("div",{className:"a-about",children:[Object(d.jsx)("h1",{className:"a-title",children:"About me"}),Object(d.jsx)("p",{className:"a-sub",children:"Not your average software developer !"}),Object(d.jsxs)("p",{className:"a-desc",children:["I am a software engineer who constantly seeks out innovative solutions to everyday problems. ",Object(d.jsx)("br",{}),"In my two years in this industry, I've honed my analytical thinking and collaboration skills, ",Object(d.jsx)("br",{}),"and I love working with a team. ",Object(d.jsx)("br",{}),"Backend engineering and devops has been my speciality for major part of my career. ",Object(d.jsx)("br",{}),"I love working on open-source projects in my free-time,",Object(d.jsx)("br",{}),"aspiring to be a successful\xa0",Object(d.jsx)("i",{children:Object(d.jsx)("strong",{children:"Cloud Architect"})}),". (*\xb0\uff70\xb0)\uff89"]})]}),Object(d.jsxs)("div",{className:"a-cards",children:[Object(d.jsx)("div",{className:"a-skills",children:Object(d.jsxs)("div",{className:"a-skills-cards",children:[Object(d.jsxs)("div",{className:"a-skills-card",children:[Object(d.jsx)("p",{className:"a-skills-list",children:"Golang, .NET Core, Python, MySQL"}),Object(d.jsx)("p",{className:"a-skills-type",children:"Backend stack"})]}),Object(d.jsxs)("div",{className:"a-skills-card",children:[Object(d.jsx)("p",{className:"a-skills-list",children:"Docker, Kubernetes, Travis, GCP"}),Object(d.jsx)("p",{className:"a-skills-type",children:"DevOps stack"})]})]})}),Object(d.jsxs)("div",{className:"a-award",title:"Click to verify certificate",onClick:function(){return l("https://www.credly.com/badges/65b33e5c-851e-4db6-aba7-8f96cbe837b9/public_url")},children:[Object(d.jsx)("img",{src:o,alt:"cka-badge",className:"a-award-img"}),Object(d.jsxs)("div",{className:"a-award-texts",children:[Object(d.jsx)("h4",{className:"a-award-title",children:"Certified Kubernetes Administrator"}),Object(d.jsx)("p",{className:"a-award-desc",children:"The Certified Kubernetes Administrator (CKA) program was created by the Cloud Native Computing Foundation (CNCF), in collaboration with The Linux Foundation, to help develop the Kubernetes ecosystem."})]})]})]})]})]})},u=(s(19),s(20),s.p+"static/media/dev-profile.947d20ed.svg"),b=function(){return Object(d.jsxs)("div",{className:"i",children:[Object(d.jsxs)("div",{className:"i-left",children:[Object(d.jsxs)("div",{className:"i-left-wrapper",children:[Object(d.jsx)("h2",{className:"i-intro",children:"Hello, I am"}),Object(d.jsx)("h1",{className:"i-name",children:"Aditya Kumar"}),Object(d.jsx)("div",{className:"i-title-sub",children:"working as"}),Object(d.jsx)("div",{className:"i-title",children:Object(d.jsxs)("div",{className:"i-title-wrapper",children:[Object(d.jsx)("div",{className:"i-title-item",children:"Backend Developer"}),Object(d.jsx)("div",{className:"i-title-item",children:"DevOps Engineer"}),Object(d.jsx)("div",{className:"i-title-item",children:"Open-source Advocate"})]})})]}),Object(d.jsxs)("svg",{className:"i-scroll-full",width:"41",height:"67",viewBox:"0 0 41 67",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("rect",{x:"3",y:"3",width:"35",height:"61",rx:"17.5",stroke:"green","stroke-width":"6"}),Object(d.jsx)("circle",{className:"i-scroll-dot",cx:"20.5",cy:"21.5",r:"10.5",fill:"green"})]})]}),Object(d.jsxs)("div",{className:"i-right",children:[Object(d.jsx)("div",{className:"i-bg"}),Object(d.jsx)("img",{src:u,alt:"",className:"i-img"})]})]})},j=(s(21),s.p+"static/media/litmus.248d107e.png"),h=s.p+"static/media/GitHub_Logo.746ec8f0.png",p=function(){return Object(d.jsxs)("div",{className:"f",children:[Object(d.jsxs)("div",{className:"f-left",children:[Object(d.jsx)("h1",{className:"f-preface",children:"Featured"}),Object(d.jsx)("h2",{className:"f-title",children:"LitmusChaosHub"}),Object(d.jsx)("p",{className:"f-subtitle",children:"Community chart hub for LitmusChaos"}),Object(d.jsxs)("p",{className:"f-desc",children:["Built and maintained the website ",Object(d.jsx)("br",{}),"which hosts chaos declarative and tunable experiments for Kubernetes for ",Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"LitmusChaos"}),"\xa0- CNCF Sandbox Project."]}),Object(d.jsx)("div",{className:"f-logo-container",onClick:function(){return l("https://github.com/litmuschaos/charthub.litmuschaos.io")},children:Object(d.jsx)("img",{src:h,title:"Click to view repository",alt:"",className:"f-logo"})})]}),Object(d.jsxs)("div",{className:"f-right",children:[Object(d.jsx)("div",{className:"f-card bg"}),Object(d.jsx)("div",{className:"f-card",children:Object(d.jsx)("img",{src:j,alt:"Featured Project",className:"f-img"})})]})]})},g=(s(22),function(e){var t=e.img,s=e.link;return Object(d.jsxs)("div",{className:"p",children:[Object(d.jsxs)("div",{className:"p-browser",children:[Object(d.jsx)("div",{className:"p-circle"}),Object(d.jsx)("div",{className:"p-circle"}),Object(d.jsx)("div",{className:"p-circle"})]}),Object(d.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:t,alt:"",className:"p-img"})})]})}),f=(s(23),{fullName:"Aditya Kumar",shortName:"Aditya",navigation:{navLinks:["My work","My skills","My experience","Ping me!"],socialHeaders:{logos:[{linkName:"twitter",logoLocations:"assets/twitter.svg"},{linkName:"github",logoLocations:"assets/github.svg"},{linkName:"linkedin",logoLocations:"assets/linkedin.svg"}]}},hero:{mainContent:"Not Your Average Software Developer",downMarker:"\ud83d\udc47",subtitle:"Meet Aditya Kumar",logo:"assets/hero-graphics.svg"},featured:{subtitle:"Featured Project",featuredTitle:"LitmusChaosHub",featuredDesc:"Built and maintained LitmusChaosHub which hosts chaos declarative and tunable experiments for Kubernetes.",image:"assets/litmus.png",gitlink:"https://github.com/litmuschaos/charthub.litmuschaos.io",weblink:"https://hub.litmuschaos.io/"},skills:[{skillTitle:"Backend Engineering",logo:"assets/backend.svg",desc:"Seasoned experience on Java Spring & Hibernate and Django-based Frameworks with PostgreSQL and Neo4J. Currently exploring .NET Core and other types of graph Databases like CosmosDB and ArangoDB."},{skillTitle:"Frontend Development",logo:"assets/frontend.svg",desc:"Worked with mainly ReactJS, HTML, CSS/SASS and vanilla Javascript. Currently learning AngularJS."},{skillTitle:"DevOps",logo:"assets/devops.svg",desc:"Certified Kubernetes Administrator with ample experience with Docker. Worked with Travis CI, Circle CI and Azure DevOps."}],portfolio:[{id:1,projectTitle:"Upgrade Controller",subtitle:"Open Source Project",desc:"Python-framework for pushing smooth upgrades for an application being hosted in GitHub as a routine.",image:"/assets/upgrade1.png",gitlink:"https://github.com/aditya109/upgrade-controller",weblink:""},{id:2,projectTitle:"QR Code Generator",subtitle:"Freelancing Project",desc:"A simple NodeJS and ReactJS application which reads text and generates QR Code for it.",image:"/assets/qrcode.png",gitlink:"https://github.com/aditya109/qrcode-generator-app",weblink:"https://enigmatic-shore-57208.herokuapp.com/"},{id:3,projectTitle:"Bank Reconcilation System Validator",subtitle:"Freelancing Project",desc:"Designed and implemented a ReactJS/Flask tool for LIC of India\u2019s CRM Department which solved their business problem for cross-checking payment transactions by the bank of policyholders of filtering the non-redundant transactions and generate reports.",image:"/assets/brsv.png",gitlink:"https://github.com/aditya109/bank-reconcilation-statement-validator",weblink:""},{id:4,projectTitle:"Goodreads API Project",subtitle:"Freelancing Project",desc:"Built a high performance, shared memory algorithm to web scrape data for creation of datasets for running sentiment analysis in Python and PostgreSQL.",image:"/assets/WebCrawlerImage.jpg",gitlink:"https://github.com/aditya109/goodreads-api-project",weblink:""}],experience:[{companyName:"Gravity iLabs",locationCity:"Canberra",locationCountry:"AUS",designation:"Associate Software Developer",duration:"Oct \u201920 \u2013 Present",jobDesc:[{desc:"Work on Architecture, Design and Implementation of Microservices and Microfrontends focusing on Event Driven Programming, Polyglot Persistence, Scalability and Multitenancy.",result:""}]},{companyName:"HoundIO",locationCity:"Remote",locationCountry:"IN",designation:"Full Stack Developer",duration:"March '20 - Sep '20",jobDesc:[{desc:"Developed Python applications and Jock-stack (MERN) web applications.",result:""},{desc:"Designed and implemented a ReactJS/Flask tool for Life Insurance Corporation of India\u2019s CRM Department which solved their business problem for cross-checking payment transactions by the bank of policyholders of filtering the non-redundant transactions and generate reports.",result:"Implemented hashing and multithreading on backend which reduced drastically reduced time to 90.6 % of prior runtime of legacy system in place."},{desc:"Built a high performance, shared memory algorithm to web scrape data for creation of datasets for running sentiment analysis in Python and PostgreSQL.",result:"Used asynchronous framework to solve the problem and helped the client to further reduce the time of processing."},{desc:"Performed on-site software maintenance for end users.",result:""},{desc:"Communicated with clients to deliver quality software projects and followed up with them to ensure that the customer was happy with the work.",result:""}]},{companyName:"MayaData Inc.",locationCity:"San Jose",locationCountry:"US",designation:"Software Engineering Intern",duration:"July '19 - Feb '20",jobDesc:[{desc:"Created and maintained the product showcase website for CNCF Sandbox Project \u2018Litmus\u2019.",result:""},{desc:"Implemented the frontend in ReactJS and wrote backend APIs in Golang for rendering frontend, running analytics, and feedback control.",result:""},{desc:"Created and maintained the product showcase website for CNCF Sandbox Project \u2018Litmus\u2019.",result:""},{desc:"Implemented CI in Travis.",result:"Increased the open source contribution by 137% in 8 months."}]},{companyName:"Bharat Sanchar Nigam Limited",locationCity:"Bhagalpur",locationCountry:"IND",designation:"Technical Intern",duration:"April \u201918 \u2013 Jul \u201818",jobDesc:[{desc:"Implemented gRPC on Python for an experimental analytics server.",result:"Increased client handling capacity of the server by 10x."}]}],callToAction:{callText:"Like what you see ?",actionText:"Connect with me !"}}),v=function(){return Object(d.jsxs)("div",{className:"pl",children:[Object(d.jsxs)("div",{className:"pl-texts",children:[Object(d.jsx)("h1",{className:"pl-title",children:"Lorem ipsum dolor sit amet"}),Object(d.jsx)("p",{className:"pl-desc",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam accusamus cum amet ea cumque reiciendis modi voluptatem doloribus neque perferendis. Est architecto minima accusantium rerum facilis incidunt quibusdam iste reiciendis!"})]}),Object(d.jsx)("div",{className:"pl-list",children:f.portfolio.map((function(e){return Object(d.jsx)(g,{img:"/find-aditya-v2.0"+e.image,link:e.gitlink},e.id)}))})]})},x=s(8),O=(s(26),s.p+"static/media/sun.92bfad64.svg"),N=s.p+"static/media/moon.cdba51e1.svg",k=s(2),y=function(){var e=Object(a.useContext)(k.a);return Object(d.jsxs)("div",{className:"t",onClick:function(){e.dispatch({type:"TOGGLE"})},children:[Object(d.jsx)("img",{src:O,alt:"",className:"t-icon"}),Object(d.jsx)("img",{src:N,alt:"",className:"t-icon"}),e.state.darkMode?Object(d.jsx)("div",{className:"t-button night"}):Object(d.jsx)("div",{className:"t-button day"})]})},w=function(){var e=Object(a.useContext)(k.a).state.darkMode;return Object(d.jsxs)("div",{style:{backgroundColor:e?"#151518":"white",color:e&&"white"},children:[Object(d.jsx)(y,{}),Object(d.jsx)(b,{}),Object(d.jsx)(m,{}),Object(d.jsx)(p,{}),Object(d.jsx)(v,{}),Object(d.jsx)(x.a,{})]})};s(27);n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k.b,{children:Object(d.jsx)(w,{})})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.f1632e1c.chunk.js.map