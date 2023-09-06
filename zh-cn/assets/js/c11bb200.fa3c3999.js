"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={hidden:!0,title:"Helm\u90e8\u7f72",keywords:["kubernetes","helm","ops"],description:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-12-01T00:00:00.000Z")},l="\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",i={unversionedId:"ops/deploy-by-helm",id:"version-v1.4/ops/deploy-by-helm",title:"Helm\u90e8\u7f72",description:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/ops/deploy-by-helm.md",sourceDirName:"ops",slug:"/ops/deploy-by-helm",permalink:"/zh-cn/docs/v1.4/ops/deploy-by-helm",draft:!1,tags:[],version:"v1.4",frontMatter:{hidden:!0,title:"Helm\u90e8\u7f72",keywords:["kubernetes","helm","ops"],description:"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-12-01T00:00:00.000Z"},sidebar:"docs",previous:{title:"Kubernetes\u90e8\u7f72",permalink:"/zh-cn/docs/v1.4/ops/deploy-by-kubernetes"},next:{title:"\u9ad8\u53ef\u7528\u90e8\u7f72",permalink:"/zh-cn/docs/v1.4/ops/deploy-ha"}},s={},p=[{value:"\u5feb\u901f\u542f\u52a8",id:"\u5feb\u901f\u542f\u52a8",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-helm-\u90e8\u7f72-seata-server"},"\u4f7f\u7528 Helm \u90e8\u7f72 Seata Server"),(0,a.kt)("h3",{id:"\u5feb\u901f\u542f\u52a8"},"\u5feb\u901f\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ./script/server/helm/seata-server\n$ helm install seata-server ./seata-server\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u652f\u6301\u7684\u73af\u5883\u53d8\u91cf\u548c Docker \u76f8\u540c\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"./deploy-by-docker"},"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5982\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"/root/workspace/seata/seata-config/file"),"  \u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u6302\u8f7d\u5230 pod \u4e2d\uff0c\u6302\u8f7d\u540e\u9700\u8981\u901a\u8fc7\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"SEATA_CONFIG_NAME")," \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e\uff0c\u5e76\u4e14\u73af\u5883\u53d8\u91cf\u7684\u503c\u9700\u8981\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"file:"),"\u5f00\u59cb, \u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"file:/root/seata-config/registry")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Values.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'replicaCount: 1\n\nnamespace: default\n\nimage:\n  repository: seataio/seata-server\n  tag: latest\n  pullPolicy: IfNotPresent\n\nservice:\n  type: NodePort\n  port: 30091\n\nenv:\n  seataPort: "8091"\n  storeMode: "file"\n  seataIp: "127.0.0.1"\n  seataConfigName: "file:/root/seata-config/registry"\n\nvolume:\n  - name: seata-config\n    mountPath: /root/seata-config\n    hostPath: /root/workspace/seata/seata-config/file\n')))}d.isMDXComponent=!0}}]);