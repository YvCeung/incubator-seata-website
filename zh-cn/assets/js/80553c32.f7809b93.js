"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[28385],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},64324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Seata\u5206\u5e03\u5f0fGo Server\u6b63\u5f0f\u5f00\u6e90-TaaS\u8bbe\u8ba1\u7b80\u4ecb",author:"fagongzi(zhangxu19830126@gmail.com)",date:"2019/04/23",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001\u9ad8\u53ef\u7528"]},i="Seata \u9ad8\u53ef\u7528\u670d\u52a1\u7aef TaaS \u6b63\u5f0f\u5f00\u6e90",o={permalink:"/zh-cn/blog/seata-analysis-go-server",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-go-server.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-go-server.md",title:"Seata\u5206\u5e03\u5f0fGo Server\u6b63\u5f0f\u5f00\u6e90-TaaS\u8bbe\u8ba1\u7b80\u4ecb",description:"\u524d\u8a00",date:"2019-04-23T00:00:00.000Z",formattedDate:"2019\u5e744\u670823\u65e5",tags:[],readingTime:6.17,hasTruncateMarker:!1,authors:[{name:"fagongzi(zhangxu19830126@gmail.com)"}],frontMatter:{title:"Seata\u5206\u5e03\u5f0fGo Server\u6b63\u5f0f\u5f00\u6e90-TaaS\u8bbe\u8ba1\u7b80\u4ecb",author:"fagongzi(zhangxu19830126@gmail.com)",date:"2019/04/23",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001\u9ad8\u53ef\u7528"]},prevItem:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e2d\u95f4\u4ef6 Seata \u7684\u8bbe\u8ba1\u539f\u7406",permalink:"/zh-cn/blog/seata-at-mode-design"},nextItem:{title:"Fescar \u4e0e Spring Cloud \u96c6\u6210\u6e90\u7801\u6df1\u5ea6\u5256\u6790",permalink:"/zh-cn/blog/how-to-support-spring-cloud"}},p={authorsImageUrls:[void 0]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u8bbe\u8ba1\u539f\u5219",id:"\u8bbe\u8ba1\u539f\u5219",level:3},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",level:3},{value:"\u9ad8\u6027\u80fd",id:"\u9ad8\u6027\u80fd",level:4},{value:"\u9ad8\u53ef\u7528",id:"\u9ad8\u53ef\u7528",level:4},{value:"\u5f3a\u4e00\u81f4",id:"\u5f3a\u4e00\u81f4",level:4},{value:"Auto-Rebalance",id:"auto-rebalance",level:4},{value:"Fragment\u526f\u672c\u521b\u5efa",id:"fragment\u526f\u672c\u521b\u5efa",level:5},{value:"Fragment\u526f\u672c\u8fc1\u79fb",id:"fragment\u526f\u672c\u8fc1\u79fb",level:5},{value:"\u5728\u7ebf\u5feb\u901f\u4f53\u9a8c",id:"\u5728\u7ebf\u5feb\u901f\u4f53\u9a8c",level:3},{value:"\u672c\u5730\u5feb\u901f\u4f53\u9a8c",id:"\u672c\u5730\u5feb\u901f\u4f53\u9a8c",level:3},{value:"Seata\u670d\u52a1\u5730\u5740",id:"seata\u670d\u52a1\u5730\u5740",level:4},{value:"Seata UI",id:"seata-ui",level:4},{value:"\u5173\u4e8eInfiniVision",id:"\u5173\u4e8einfinivision",level:3},{value:"\u5173\u4e8e\u4f5c\u8005",id:"\u5173\u4e8e\u4f5c\u8005",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"TaaS \u662f Seata \u670d\u52a1\u7aef\uff08TC, Transaction Coordinator\uff09\u7684\u4e00\u79cd\u9ad8\u53ef\u7528\u5b9e\u73b0\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Golang")," \u7f16\u5199\u3002Taas \u7531InfiniVision (",(0,r.kt)("a",{parentName:"p",href:"http://infinivision.cn"},"http://infinivision.cn"),") \u8d21\u732e\u7ed9Seata\u5f00\u6e90\u793e\u533a\u3002\u73b0\u5df2\u6b63\u5f0f\u5f00\u6e90\uff0c\u5e76\u8d21\u732e\u7ed9 Seata \u793e\u533a\u3002"),(0,r.kt)("p",null,"\u5728Seata\u5f00\u6e90\u4e4b\u524d\uff0c\u6211\u4eec\u5185\u90e8\u5f00\u59cb\u501f\u9274GTS\u4ee5\u53ca\u4e00\u4e9b\u5f00\u6e90\u9879\u76ee\u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u89e3\u51b3\u65b9\u6848TaaS(Transaction as a Service)\u3002"),(0,r.kt)("p",null,"\u5728\u6211\u4eec\u5b8c\u6210TaaS\u7684\u670d\u52a1\u7aef\u7684\u5f00\u53d1\u5de5\u4f5c\u540e\uff0cSeata\uff08\u5f53\u65f6\u8fd8\u53ebFescar\uff09\u5f00\u6e90\u4e86\uff0c\u5e76\u4e14\u5f15\u8d77\u4e86\u5f00\u6e90\u793e\u533a\u7684\u5e7f\u6cdb\u5173\u6ce8\uff0c\u52a0\u4e0a\u963f\u91cc\u5df4\u5df4\u7684\u5e73\u53f0\u5f71\u54cd\u529b\u4ee5\u53ca\u793e\u533a\u6d3b\u8dc3\u5ea6\uff0c\u6211\u4eec\u8ba4\u4e3aSeata\u4f1a\u6210\u4e3a\u4eca\u540e\u5f00\u6e90\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u6807\u51c6\uff0c\u6211\u4eec\u51b3\u5b9aTaaS\u517c\u5bb9Seata\u3002"),(0,r.kt)("p",null,"\u5728\u53d1\u73b0Seata\u7684\u670d\u52a1\u7aef\u7684\u5b9e\u73b0\u662f\u5355\u673a\u7684\uff0c\u9ad8\u53ef\u7528\u7b49\u5e76\u6ca1\u6709\u5b9e\u73b0\uff0c\u4e8e\u662f\u6211\u4eec\u4e0eSeata\u793e\u533a\u8d1f\u8d23\u4eba\u53d6\u5f97\u8054\u7cfb\uff0c\u5e76\u4e14\u51b3\u5b9a\u628aTaaS\u5f00\u6e90\uff0c\u56de\u9988\u5f00\u6e90\u793e\u533a\u3002 \u540c\u65f6\uff0c\u6211\u4eec\u4f1a\u957f\u671f\u7ef4\u62a4\uff0c\u5e76\u4e14\u548cSeata\u7248\u672c\u4fdd\u6301\u540c\u6b65\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\uff0cSeata\u5b98\u65b9\u7684Java\u9ad8\u53ef\u7528\u7248\u672c\u4e5f\u5728\u5f00\u53d1\u4e2d\uff0cTaaS\u548c\u8be5\u9ad8\u53ef\u7528\u7248\u672c\u7684\u8bbe\u8ba1\u601d\u60f3\u4e0d\u540c\uff0c\u5728\u4eca\u540e\u4f1a\u957f\u671f\u5171\u5b58\u3002"),(0,r.kt)("p",null,"TaaS\u5df2\u7ecf\u5f00\u6e90\uff0c github (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata-go-server)%EF%BC%8C%E6%AC%A2%E8%BF%8E%E5%A4%A7%E5%AE%B6%E8%AF%95%E7%94%A8%E3%80%82"},"https://github.com/seata/seata-go-server)\uff0c\u6b22\u8fce\u5927\u5bb6\u8bd5\u7528\u3002")),(0,r.kt)("h3",{id:"\u8bbe\u8ba1\u539f\u5219"},"\u8bbe\u8ba1\u539f\u5219"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9ad8\u6027\u80fd\uff0c\u6027\u80fd\u548c\u673a\u5668\u6570\u91cf\u6210\u6b63\u6bd4\uff0c\u5373\u901a\u8fc7\u52a0\u5165\u65b0\u673a\u5668\u5230\u96c6\u7fa4\u4e2d\uff0c\u5c31\u53ef\u4ee5\u63d0\u5347\u6027\u80fd"),(0,r.kt)("li",{parentName:"ol"},"\u9ad8\u53ef\u7528\uff0c\u4e00\u53f0\u673a\u5668\u51fa\u73b0\u6545\u969c\uff0c\u7cfb\u7edf\u80fd\u4f9d\u65e7\u53ef\u4ee5\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u6216\u8005\u5728\u8f83\u77ed\u7684\u65f6\u95f4\u5185\u6062\u590d\u5bf9\u5916\u670d\u52a1\uff08Leader\u5207\u6362\u7684\u65f6\u95f4\uff09"),(0,r.kt)("li",{parentName:"ol"},"Auto-Rebalance\uff0c\u96c6\u7fa4\u4e2d\u589e\u52a0\u65b0\u7684\u673a\u5668\uff0c\u6216\u8005\u6709\u673a\u5668\u4e0b\u7ebf\uff0c\u7cfb\u7edf\u80fd\u591f\u81ea\u52a8\u7684\u505a\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("li",{parentName:"ol"},"\u5f3a\u4e00\u81f4\uff0c\u7cfb\u7edf\u7684\u5143\u6570\u636e\u5f3a\u4e00\u81f4\u5728\u591a\u4e2a\u526f\u672c\u4e2d\u5b58\u50a8")),(0,r.kt)("h3",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3059).Z,width:"828",height:"1003"})),(0,r.kt)("h4",{id:"\u9ad8\u6027\u80fd"},"\u9ad8\u6027\u80fd"),(0,r.kt)("p",null,"TaaS\u7684\u6027\u80fd\u548c\u673a\u5668\u6570\u91cf\u6210\u6b63\u6bd4\uff0c\u4e3a\u4e86\u652f\u6301\u8fd9\u4e2a\u7279\u6027\uff0c\u5728TaaS\u4e2d\u5904\u7406\u5168\u5c40\u4e8b\u52a1\u7684\u6700\u5c0f\u5355\u5143\u79f0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"\uff0c\u7cfb\u7edf\u5728\u542f\u52a8\u7684\u65f6\u5019\u4f1a\u8bbe\u5b9a\u6bcf\u4e2aFragment\u652f\u6301\u7684\u6d3b\u8dc3\u5168\u5c40\u4e8b\u52a1\u7684\u5e76\u53d1\u6570\uff0c\u540c\u65f6\u7cfb\u7edf\u4f1a\u5bf9\u6bcf\u4e2aFragment\u8fdb\u884c\u91c7\u6837\uff0c\u4e00\u65e6\u53d1\u73b0Fragment\u8d85\u8d1f\u8377\uff0c\u4f1a\u751f\u6210\u65b0\u7684Fragment\u6765\u5904\u7406\u66f4\u591a\u7684\u5e76\u53d1\u3002"),(0,r.kt)("h4",{id:"\u9ad8\u53ef\u7528"},"\u9ad8\u53ef\u7528"),(0,r.kt)("p",null,"\u6bcf\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"\u6709\u591a\u4e2a\u526f\u672c\u548c\u4e00\u4e2aLeader\uff0c\u7531Leader\u6765\u5904\u7406\u8bf7\u6c42\u3002\u5f53Leader\u51fa\u73b0\u6545\u969c\uff0c\u7cfb\u7edf\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684Leader\u6765\u5904\u7406\u8bf7\u6c42\uff0c\u5728\u65b0Leader\u7684\u9009\u4e3e\u8fc7\u7a0b\u4e2d\uff0c\u8fd9\u4e2aFragment\u5bf9\u5916\u4e0d\u63d0\u4f9b\u670d\u52a1\uff0c\u901a\u5e38\u8fd9\u4e2a\u95f4\u9694\u65f6\u95f4\u662f\u51e0\u79d2\u949f\u3002"),(0,r.kt)("h4",{id:"\u5f3a\u4e00\u81f4"},"\u5f3a\u4e00\u81f4"),(0,r.kt)("p",null,"TaaS\u672c\u8eab\u4e0d\u5b58\u50a8\u5168\u5c40\u4e8b\u52a1\u7684\u5143\u6570\u636e\uff0c\u5143\u6570\u636e\u5b58\u50a8\u5728Elasticell   (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepfabric/elasticell"},"https://github.com/deepfabric/elasticell"),") \u4e2d\uff0cElasticell\u662f\u4e00\u4e2a\u517c\u5bb9redis\u534f\u8bae\u7684\u5206\u5e03\u5f0f\u7684KV\u5b58\u50a8\uff0c\u5b83\u57fa\u4e8eRaft\u534f\u8bae\u6765\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("h4",{id:"auto-rebalance"},"Auto-Rebalance"),(0,r.kt)("p",null,"\u968f\u7740\u7cfb\u7edf\u7684\u8fd0\u884c\uff0c\u5728\u7cfb\u7edf\u4e2d\u4f1a\u5b58\u5728\u8bb8\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"\u4ee5\u53ca\u5b83\u4eec\u7684\u526f\u672c\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u5728\u6bcf\u4e2a\u673a\u5668\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"\u7684\u5206\u5e03\u4e0d\u5747\u5300\uff0c\u7279\u522b\u662f\u5f53\u65e7\u7684\u673a\u5668\u4e0b\u7ebf\u6216\u8005\u65b0\u7684\u673a\u5668\u4e0a\u7ebf\u7684\u65f6\u5019\u3002TaaS\u5728\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u9009\u62e93\u4e2a\u8282\u70b9\u4f5c\u4e3a\u8c03\u5ea6\u5668\u7684\u89d2\u8272\uff0c\u8c03\u5ea6\u5668\u8d1f\u8d23\u8c03\u5ea6\u8fd9\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment"),"\uff0c\u7528\u6765\u4fdd\u8bc1\u6bcf\u4e2a\u673a\u5668\u4e0a\u7684Fragment\u7684\u6570\u91cf\u4ee5\u53caLeader\u4e2a\u6570\u5927\u81f4\u76f8\u7b49\uff0c\u540c\u65f6\u8fd8\u4f1a\u4fdd\u8bc1\u6bcf\u4e2aFragment\u7684\u526f\u672c\u6570\u7ef4\u6301\u5728\u6307\u5b9a\u7684\u526f\u672c\u4e2a\u6570\u3002"),(0,r.kt)("h5",{id:"fragment\u526f\u672c\u521b\u5efa"},"Fragment\u526f\u672c\u521b\u5efa"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(68288).Z,width:"885",height:"596"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"t0\u65f6\u95f4\u70b9\uff0cFragment1\u5728Seata-TC1\u673a\u5668\u4e0a\u521b\u5efa"),(0,r.kt)("li",{parentName:"ol"},"t1\u65f6\u95f4\u70b9\uff0cFragment1\u7684\u526f\u672cFragment1'\u5728Seata-TC2\u673a\u5668\u4e0a\u521b\u5efa"),(0,r.kt)("li",{parentName:"ol"},'t2\u65f6\u95f4\u70b9\uff0cFragment1\u7684\u526f\u672cFragment1"\u5728Seata-TC3\u673a\u5668\u4e0a\u521b\u5efa')),(0,r.kt)("p",null,"\u5728t2\u65f6\u95f4\u70b9\uff0cFragment1\u7684\u4e09\u4e2a\u526f\u672c\u521b\u5efa\u5b8c\u6bd5\u3002"),(0,r.kt)("h5",{id:"fragment\u526f\u672c\u8fc1\u79fb"},"Fragment\u526f\u672c\u8fc1\u79fb"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(84595).Z,width:"1081",height:"1121"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"t0\u65f6\u523b\u70b9\uff0c\u7cfb\u7edf\u4e00\u4e2a\u5b58\u57284\u4e2aFragment\uff0c\u5206\u522b\u5b58\u5728\u4e8eSeata-TC1\uff0cSeata-TC2\uff0cSeata-TC3\u4e09\u53f0\u673a\u5668\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"t1\u65f6\u523b\uff0c\u52a0\u5165\u65b0\u673a\u5668Seata-TC4"),(0,r.kt)("li",{parentName:"ol"},"t2\u65f6\u523b\uff0c\u67093\u4e2aFragment\u7684\u526f\u672c\u88ab\u8fc1\u79fb\u5230\u4e86Seata-TC4\u8fd9\u53f0\u673a\u5668\u4e0a")),(0,r.kt)("h3",{id:"\u5728\u7ebf\u5feb\u901f\u4f53\u9a8c"},"\u5728\u7ebf\u5feb\u901f\u4f53\u9a8c"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u516c\u7f51\u642d\u5efa\u4e86\u4e00\u4e2a\u4f53\u9a8c\u7684\u73af\u5883\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seata\u670d\u52a1\u7aef\u5730\u5740\uff1a 39.97.115.141:8091"),(0,r.kt)("li",{parentName:"ul"},"UI\uff1a ",(0,r.kt)("a",{parentName:"li",href:"http://39.97.115.141:8084/ui/index.html"},"http://39.97.115.141:8084/ui/index.html"))),(0,r.kt)("h3",{id:"\u672c\u5730\u5feb\u901f\u4f53\u9a8c"},"\u672c\u5730\u5feb\u901f\u4f53\u9a8c"),(0,r.kt)("p",null,"\u4f7f\u7528docker-compose\u5feb\u901f\u4f53\u9a8cTaaS\u7684\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/seata/taas.git\ndocker-compse up -d\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u7ec4\u4ef6\u4f9d\u8d56\u8f83\u591a\uff0cdocker-compose\u542f\u52a830\u79d2\u540e\uff0c\u53ef\u4ee5\u5bf9\u5916\u670d\u52a1"),(0,r.kt)("h4",{id:"seata\u670d\u52a1\u5730\u5740"},"Seata\u670d\u52a1\u5730\u5740"),(0,r.kt)("p",null,"\u670d\u52a1\u9ed8\u8ba4\u76d1\u542c\u57288091\u7aef\u53e3\uff0c\u4fee\u6539Seata\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u5730\u5740\u4f53\u9a8c"),(0,r.kt)("h4",{id:"seata-ui"},"Seata UI"),(0,r.kt)("p",null,"\u8bbf\u95eeWEB UI ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8084/ui/index.html")),(0,r.kt)("h3",{id:"\u5173\u4e8einfinivision"},"\u5173\u4e8eInfiniVision"),(0,r.kt)("p",null,"\u6df1\u89c1\u7f51\u7edc\u662f\u4e00\u5bb6\u6280\u672f\u9a71\u52a8\u7684\u4f01\u4e1a\u7ea7\u670d\u52a1\u63d0\u4f9b\u5546\uff0c\u81f4\u529b\u4e8e\u5229\u7528\u4eba\u5de5\u667a\u80fd\u3001\u4e91\u8ba1\u7b97\u3001\u533a\u5757\u94fe\u3001\u5927\u6570\u636e\uff0c\u4ee5\u53ca\u7269\u8054\u7f51\u8fb9\u7f18\u8ba1\u7b97\u6280\u672f\u52a9\u529b\u4f20\u7edf\u4f01\u4e1a\u7684\u6570\u5b57\u5316\u8f6c\u578b\u548c\u5347\u7ea7\u3002\u6df1\u89c1\u7f51\u7edc\u79ef\u6781\u62e5\u62b1\u5f00\u6e90\u6587\u5316\u5e76\u5c06\u6838\u5fc3\u7b97\u6cd5\u548c\u67b6\u6784\u5f00\u6e90\uff0c\u77e5\u540d\u4eba\u8138\u8bc6\u522b\u8f6f\u4ef6 InsightFace (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepinsight/insightface"},"https://github.com/deepinsight/insightface"),") (\u66fe\u591a\u6b21\u83b7\u5f97\u5927\u89c4\u6a21\u4eba\u8138\u8bc6\u522b\u6311\u6218\u51a0\u519b)\uff0c\u4ee5\u53ca\u5206\u5e03\u5f0f\u5b58\u50a8\u5f15\u64ce Elasticell (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/deepfabric/elasticell"},"https://github.com/deepfabric/elasticell"),") \u7b49\u5747\u662f\u6df1\u89c1\u7f51\u7edc\u7684\u5f00\u6e90\u4ea7\u54c1\u3002"),(0,r.kt)("h3",{id:"\u5173\u4e8e\u4f5c\u8005"},"\u5173\u4e8e\u4f5c\u8005"),(0,r.kt)("p",null,"\u4f5c\u8005\u5f20\u65ed\uff0c\u5f00\u6e90\u7f51\u5173Gateway (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fagongzi/gateway"},"https://github.com/fagongzi/gateway"),") \u4f5c\u8005\uff0c\u76ee\u524d\u5c31\u804c\u4e8eInfiniVision\uff0c\u8d1f\u8d23\u57fa\u7840\u67b6\u6784\u76f8\u5173\u7684\u7814\u53d1\u5de5\u4f5c\u3002"))}m.isMDXComponent=!0},3059:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/taas-7be6d3d8b28495c0c4e06791b334836a.png"},68288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/taas_add-6451cc0e5ab23c96d9d4db5e3c6cb510.png"},84595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/taas_move-a147fafaaf5a403fe3b493756aeefdea.png"}}]);