"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[61796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Apollo"],description:"Apollo \u914d\u7f6e\u4e2d\u5fc3\u3002"},l="Apollo \u914d\u7f6e\u4e2d\u5fc3",p={unversionedId:"user/configuration/apollo",id:"version-v1.8/user/configuration/apollo",title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",description:"Apollo \u914d\u7f6e\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/configuration/apollo.md",sourceDirName:"user/configuration",slug:"/user/configuration/apollo",permalink:"/zh-cn/docs/v1.8/user/configuration/apollo",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/configuration/apollo.md",tags:[],version:"v1.8",frontMatter:{title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Apollo"],description:"Apollo \u914d\u7f6e\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Nacos \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.8/user/configuration/nacos"},next:{title:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.8/user/configuration/etcd3"}},i={},c=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e\u4e2d\u5fc3",id:"client\u7aef\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"Server\u7aef\u914d\u7f6e\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"\u4e0a\u4f20\u914d\u7f6e\u81f3 Apollo \u914d\u7f6e\u4e2d\u5fc3",id:"\u4e0a\u4f20\u914d\u7f6e\u81f3-apollo-\u914d\u7f6e\u4e2d\u5fc3",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apollo-\u914d\u7f6e\u4e2d\u5fc3"},"Apollo \u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u5f53\u60a8\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"apollo-client"),"\u6574\u5408\u5230\u60a8\u7684 Seata\u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Apollo \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Apollo \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apolloconfig.com/"},"Apollo \u5feb\u901f\u5165\u95e8"),"\u3002\u5efa\u8bae\u4f7f\u7528 Apollo ",(0,a.kt)("inlineCode",{parentName:"p"},"1.6.0")," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,a.kt)("p",null,"Seata \u878d\u5408 Apollo \u914d\u7f6e\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e Apollo \u914d\u7f6e\u4e2d\u5fc3\u201c\u548c\u63d0\u4ea4\u914d\u7f6e\u81f3 Apollo-Server\u3002"),(0,a.kt)("h3",{id:"\u589e\u52a0-maven-\u4f9d\u8d56"},"\u589e\u52a0 Maven \u4f9d\u8d56"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"apollo-client")," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\uff0c\u5efa\u8bae\u4f7f\u7528 Seata ",(0,a.kt)("inlineCode",{parentName:"p"},"1.4.0+"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"           <dependency>\n                <groupId>io.seata</groupId>\n                <artifactId>seata-spring-boot-starter</artifactId>\n                <version>\u6700\u65b0\u7248</version>\n            </dependency>\n            <dependency>\n                <groupId>com.ctrip.framework.apollo</groupId>\n                <artifactId>apollo-client</artifactId>\n                <version>${apollo-client.version}</version>\n            </dependency>\n")),(0,a.kt)("h3",{id:"client\u7aef\u914d\u7f6e\u4e2d\u5fc3"},"Client\u7aef\u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},(0,a.kt)("strong",{parentName:"a"},"application.yml"))," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/client"},"\u914d\u7f6e\u53c2\u8003")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'seata:\n  config:\n    type: apollo\n    apollo:\n      apollo-meta: http://192.168.1.204:8801\n      app-id: seata-server\n      namespace: application\n      apollo-accesskey-secret: ""\n')),(0,a.kt)("h3",{id:"server\u7aef\u914d\u7f6e\u4e2d\u5fc3"},"Server\u7aef\u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/server/config/registry.conf"},"registry.conf")," \u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/server"},"\u914d\u7f6e\u53c2\u8003")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config {\n  type = "apollo"\n\n  apollo {\n    appId = "seata-server"\n    apolloMeta = "http://192.168.1.204:8801"\n    namespace = "application"\n    apolloAccesskeySecret = ""\n  }\n}\n\n')),(0,a.kt)("h3",{id:"\u4e0a\u4f20\u914d\u7f6e\u81f3-apollo-\u914d\u7f6e\u4e2d\u5fc3"},"\u4e0a\u4f20\u914d\u7f6e\u81f3 Apollo \u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/config-center"},"https://github.com/seata/seata/tree/develop/script/config-center")," \u7684config.txt\u5e76\u4fee\u6539,\u4e4b\u540e\u8fd0\u884c\u4ed3\u5e93\u4e2d\u63d0\u4f9b\u7684 Apollo \u811a\u672c,\u5c06\u4fe1\u606f\u63d0\u4ea4\u5230Apollo \u63a7\u5236\u53f0, \u5982\u679c\u6709\u9700\u8981\u66f4\u6539,\u53ef\u76f4\u63a5\u901a\u8fc7\u63a7\u5236\u53f0\u66f4\u6539."),(0,a.kt)("p",null,"eg: sh ${SEATAPATH}/script/config-center/apollo/apollo-config.sh -h localhost -p 8070 -e DEV -a seata-server -c default -n application -d apollo -r apollo -t 3aa026fc8435d0fc4505b345b8fa4578fb646a2c"),(0,a.kt)("p",null,"\u8be6\u7ec6\u89e3\u6790\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/config-center/README.md"},"Readme\u6587\u6863")),(0,a.kt)("p",null,"\u968f\u540e,\u542f\u52a8 Seata-Server \u548c Client\uff08\u4e1a\u52a1\u4fa7\uff09\u5e94\u7528\uff0c\u5982\u679c\u5728\u5bfc\u5165\u914d\u7f6e\u81f3 Apollo \u524d\uff0c\u5df2\u542f\u52a8Seata-Server \u548cClient\uff08\u4e1a\u52a1\u4fa7\uff09\u5e94\u7528\u9700\u8981\u8fdb\u884c\u91cd\u542f\u3002"))}d.isMDXComponent=!0}}]);