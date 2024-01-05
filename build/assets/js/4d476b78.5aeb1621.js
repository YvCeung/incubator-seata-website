"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[71808],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=o,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={title:"Overview of Domain Model",keywords:["Seata","domain model"],description:"Seata domain model."},r="Overview of Domain Model",s={unversionedId:"dev/domain/overviewDomainModel",id:"version-v1.7/dev/domain/overviewDomainModel",title:"Overview of Domain Model",description:"Seata domain model.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/dev/domain/overviewDomainModel.md",sourceDirName:"dev/domain",slug:"/dev/domain/overviewDomainModel",permalink:"/docs/v1.7/dev/domain/overviewDomainModel",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.7/dev/domain/overviewDomainModel.md",tags:[],version:"v1.7",frontMatter:{title:"Overview of Domain Model",keywords:["Seata","domain model"],description:"Seata domain model."},sidebar:"docs",previous:{title:"Seata XA Mode",permalink:"/docs/v1.7/dev/mode/xa-mode"},next:{title:"Transaction Manager(TM)",permalink:"/docs/v1.7/dev/domain/tm"}},c={},l=[{value:"Seata Domain Model",id:"seata-domain-model",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview-of-domain-model"},"Overview of Domain Model"),(0,o.kt)("p",null,"This article introduces the domain model of Seata (Simple Extensible Autonomous Transaction Architecture)."),(0,o.kt)("p",null,"Seata is a distributed transaction product designed to address data consistency issues in a distributed architecture. It uses two-phase commit (2PC) or eventual consistency based on the BASE theory to achieve transaction consistency. For a detailed explanation of the transaction modes, please refer to the Transaction Modes section in the developer's guide. Seata offers advantages such as XA and AT support without business intrusion, TCC decoupled from specific service frameworks, independence from underlying RPC protocols, and storage media. It also provides highly customizable SAGA mode, eventual consistency, and high performance. Seata is capable of effectively establishing secure transaction protection for different business scenarios on the Seata distributed transaction platform."),(0,o.kt)("h2",{id:"seata-domain-model"},"Seata Domain Model"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB19qmhOrY1gK0jSZTEXXXDQVXa-1330-924.png",alt:"image"})),(0,o.kt)("p",null,"As shown in the diagram above, the lifecycle of a transaction in Seata mainly consists of three parts: Begin (TM), Registry (RM), and Commit/Rollback (TM & TC)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transaction Creation")),(0,o.kt)("p",null,"Transaction Manager (TM):"),(0,o.kt)("p",null,"This is an entity in Seata used for creating and determining the transaction result. It is typically integrated into the upstream of the business invocation chain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Branch Transaction")),(0,o.kt)("p",null,"Resource Manager (RM):"),(0,o.kt)("p",null,"This is an entity in Seata used for managing resources. In most cases, it is equivalent to a provider in a microservice, managing resources within the service, such as database resources."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transaction Determination")),(0,o.kt)("p",null,"Transaction Coordinator (TC):"),(0,o.kt)("p",null,"This is an entity in Seata used for coordinating transactions in the two-phase commit (2PC) mode (except for SAGA). It can be driven by the transaction manager or self-driven for the two-phase transaction behavior."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Commit:"),(0,o.kt)("p",{parentName:"li"},'In Seata, when the transaction manager determines to commit, TC initiates the two-phase commit behavior for the transaction. For example, in TCC mode, it\'s the "confirm" step, in AT mode, it\'s the "undo log delete," and in XA mode, it\'s "XA Commit."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rollback:"),(0,o.kt)("p",{parentName:"li"},'In Seata, when the transaction manager determines to roll back, TC initiates the two-phase rollback behavior for the transaction. For example, in TCC mode, it\'s the "cancel" step, in AT mode, it\'s "undo," and in XA mode, it\'s "XA Rollback."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Timeout Rollback:"),(0,o.kt)("p",{parentName:"li"},"In Seata, when the transaction manager specifies a timeout for a created transaction and that timeout is reached without determination, TC will actively perform a timeout rollback for transactions that have exceeded the timeout. The behavior for timeouts is the same as the Rollback behavior described above."))),(0,o.kt)("p",null,"The three scenarios mentioned above are the transaction processing cases involving TC. These three states can expand into more transaction states. ",(0,o.kt)("a",{parentName:"p",href:"https://seata.io/docs/user/appendix/global-transaction-status"},"For specific details, you can refer to this link"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"High Availability")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://seata.io/docs/user/txgroup/transaction-group"},"Transaction Group")," (tx-service-group):"),(0,o.kt)("p",null,"Seata's logical resource grouping allows applications (clients) to define transaction groups based on their microservices' needs, with each group having a unique name."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://seata.io/docs/user/registry/index.html"},"Service Discovery"),":"),(0,o.kt)("p",null,"Seata supports service discovery for Eureka, Nacos, Consul, Etcd, ZooKeeper, Sofa, Redis, and file-based (using a specific file) configurations."))}m.isMDXComponent=!0}}]);