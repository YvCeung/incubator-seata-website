"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[42521],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const s={title:"Seata Saga Mode",keywords:["Seata","Saga mode"],description:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."},o="SEATA Saga Mode",r={unversionedId:"dev/mode/saga-mode",id:"version-v1.5/dev/mode/saga-mode",title:"Seata Saga Mode",description:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/dev/mode/saga-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/saga-mode",permalink:"/docs/v1.5/dev/mode/saga-mode",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.5/dev/mode/saga-mode.md",tags:[],version:"v1.5",frontMatter:{title:"Seata Saga Mode",keywords:["Seata","Saga mode"],description:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."},sidebar:"docs",previous:{title:"Seata TCC Mode",permalink:"/docs/v1.5/dev/mode/tcc-mode"},next:{title:"Seata XA Mode",permalink:"/docs/v1.5/dev/mode/xa-mode"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Saga&#39;s implementation:",id:"sagas-implementation",level:2},{value:"Saga implementation based on state machine engine:",id:"saga-implementation-based-on-state-machine-engine",level:3},{value:"Design",id:"design",level:2},{value:"State Machine Engine Principle:",id:"state-machine-engine-principle",level:3},{value:"State Machine Engine Design:",id:"state-machine-engine-design",level:3}],p={toc:l},d="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"seata-saga-mode"},"SEATA Saga Mode"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png",alt:"Saga mode diagram"})),(0,i.kt)("p",null,"Theoretical basis: Hector & Kenneth Post a comment Sagas \uff081987\uff09"),(0,i.kt)("h2",{id:"sagas-implementation"},"Saga's implementation:"),(0,i.kt)("h3",{id:"saga-implementation-based-on-state-machine-engine"},"Saga implementation based on state machine engine:"),(0,i.kt)("p",null,"Currently, the Saga mode provided by SEATA is implemented based on the state machine engine. The mechanism is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the process of service invocation through state diagram and generate json state language definition file"),(0,i.kt)("li",{parentName:"ol"},"A node in the state diagram can call a service, and the node can configure its compensation node"),(0,i.kt)("li",{parentName:"ol"},"The state diagram json is driven by the state machine engine. When an exception occurs, the state engine reversely executes the compensation node corresponding to the successful node and rolls back the transaction",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: Whether to compensate when an exception occurs can also be determined by the user"))),(0,i.kt)("li",{parentName:"ol"},"Support the realization of service orchestration requirements, support single selection, concurrency, sub-process, parameter conversion, parameter mapping, service execution status judgment, exception capture and other functions")),(0,i.kt)("p",null,"Example state diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example state diagram",src:a(23490).Z,width:"508",height:"543"})),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("h3",{id:"state-machine-engine-principle"},"State Machine Engine Principle:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"State Machine Engine Principle",src:a(46833).Z,width:"936",height:"672"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state diagram in the figure is to execute stateA, then stateB, and then stateC"),(0,i.kt)("li",{parentName:"ul"},'The execution of "state" is based on the event-driven model. After the execution of stateA, routing messages will be generated and put into EventQueue. The event consumer will fetch messages from EventQueue and execute stateB.'),(0,i.kt)("li",{parentName:"ul"},'When the entire state machine is started, it will call Seata Server to start distributed transactions, and generate xid, and then record "state machine instance" startup events to the local database'),(0,i.kt)("li",{parentName:"ul"},'When the execution reaches a "state", it will call Seata Server to register branch transactions and produce branchId, and then record the "state instance" to start executing events to the local database'),(0,i.kt)("li",{parentName:"ul"},'When a "status" execution is completed, the "status instance" execution end event is recorded to the local database, and then the Seata Server is called to report the status of the branch transaction'),(0,i.kt)("li",{parentName:"ul"},'When the execution of the entire state machine is completed, the "state machine instance" execution completion event is recorded to the local database, and then Seata Server is called to submit or roll back the distributed transaction')),(0,i.kt)("h3",{id:"state-machine-engine-design"},"State Machine Engine Design:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"State Machine Engine Design",src:a(18230).Z,width:"1044",height:"702"})),(0,i.kt)("p",null,"The design of the state machine engine is mainly divided into three layers. The upper layer depends on the lower layer. From bottom to top:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eventing layer:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Implement event-driven architecture, which can push events and consume events by the consumer. This layer does not care what the event is and what the consumer performs."))),(0,i.kt)("li",{parentName:"ul"},"ProcessController layer:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'* Because the upper-level Eventing drives the execution of an "empty" process engine, the behavior and routing of "state" are not implemented.\n')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},'Based on the above two layers, in theory, you can customize and extend any "process" engine'))),(0,i.kt)("li",{parentName:"ul"},"StateMachineEngine layer:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Implement the behavior and routing logic of each state of the state machine engine"),(0,i.kt)("li",{parentName:"ul"},"Provide API, state machine language warehouse")))))}m.isMDXComponent=!0},23490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/demo_statelang-90f1fc01bfaf3a795c3b3357e1046f16.png"},18230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saga_engine-41e75396b108b8e6c157d08766368124.png"},46833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saga_engine_mechanism-38f1563ee8316a5dcabeeba27f511f79.png"}}]);