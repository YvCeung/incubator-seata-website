"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[88570],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),u=o(a),d=l,s=u["".concat(m,".").concat(d)]||u[d]||N[d]||r;return a?n.createElement(s,p(p({ref:e},k),{},{components:a})):n.createElement(s,p({ref:e},k))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[u]="string"==typeof t?t:l,p[1]=i;for(var o=2;o<r;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3455:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={title:"Seata \u662f\u4ec0\u4e48\uff1f",keywords:["Seata"],description:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002Seata \u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86 AT\u3001TCC\u3001SAGA \u548c XA \u4e8b\u52a1\u6a21\u5f0f\uff0c\u4e3a\u7528\u6237\u6253\u9020\u4e00\u7ad9\u5f0f\u7684\u5206\u5e03\u5f0f\u89e3\u51b3\u65b9\u6848\u3002"},p="Seata \u662f\u4ec0\u4e48?",i={unversionedId:"overview/what-is-seata",id:"version-v1.0/overview/what-is-seata",title:"Seata \u662f\u4ec0\u4e48\uff1f",description:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002Seata \u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86 AT\u3001TCC\u3001SAGA \u548c XA \u4e8b\u52a1\u6a21\u5f0f\uff0c\u4e3a\u7528\u6237\u6253\u9020\u4e00\u7ad9\u5f0f\u7684\u5206\u5e03\u5f0f\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/overview/what-is-seata.md",sourceDirName:"overview",slug:"/overview/what-is-seata",permalink:"/zh-cn/docs/v1.0/overview/what-is-seata",draft:!1,tags:[],version:"v1.0",frontMatter:{title:"Seata \u662f\u4ec0\u4e48\uff1f",keywords:["Seata"],description:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002Seata \u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86 AT\u3001TCC\u3001SAGA \u548c XA \u4e8b\u52a1\u6a21\u5f0f\uff0c\u4e3a\u7528\u6237\u6253\u9020\u4e00\u7ad9\u5f0f\u7684\u5206\u5e03\u5f0f\u89e3\u51b3\u65b9\u6848\u3002"},sidebar:"docs",next:{title:"Seata\u672f\u8bed\u8868",permalink:"/zh-cn/docs/v1.0/overview/terminology"}},m={},o=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u6574\u4f53\u673a\u5236",id:"\u6574\u4f53\u673a\u5236",level:2},{value:"\u4e00\u9636\u6bb5",id:"\u4e00\u9636\u6bb5",level:2},{value:"\u4e8c\u9636\u6bb5-\u56de\u6eda",id:"\u4e8c\u9636\u6bb5-\u56de\u6eda",level:2},{value:"\u4e8c\u9636\u6bb5-\u63d0\u4ea4",id:"\u4e8c\u9636\u6bb5-\u63d0\u4ea4",level:2},{value:"\u56de\u6eda\u65e5\u5fd7\u8868",id:"\u56de\u6eda\u65e5\u5fd7\u8868",level:2},{value:"\u9002\u7528\u573a\u666f\uff1a",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u4f18\u52bf\uff1a",id:"\u4f18\u52bf",level:2},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9",level:2}],k={toc:o},u="wrapper";function N(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"seata-\u662f\u4ec0\u4e48"},"Seata \u662f\u4ec0\u4e48?"),(0,l.kt)("p",null,"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002Seata \u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86 AT\u3001TCC\u3001SAGA \u548c XA \u4e8b\u52a1\u6a21\u5f0f\uff0c\u4e3a\u7528\u6237\u6253\u9020\u4e00\u7ad9\u5f0f\u7684\u5206\u5e03\u5f0f\u89e3\u51b3\u65b9\u6848\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/68344696/145942191-7a2d469f-94c8-4cd2-8c7e-46ad75683636.png",alt:"image"})),(0,l.kt)("h1",{id:"at-\u6a21\u5f0f"},"AT \u6a21\u5f0f"),(0,l.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u652f\u6301\u672c\u5730 ACID \u4e8b\u52a1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},"Java \u5e94\u7528\uff0c\u901a\u8fc7 JDBC \u8bbf\u95ee\u6570\u636e\u5e93\u3002")),(0,l.kt)("h2",{id:"\u6574\u4f53\u673a\u5236"},"\u6574\u4f53\u673a\u5236"),(0,l.kt)("p",null,"\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\u7684\u6f14\u53d8\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u9636\u6bb5\uff1a\u4e1a\u52a1\u6570\u636e\u548c\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u5728\u540c\u4e00\u4e2a\u672c\u5730\u4e8b\u52a1\u4e2d\u63d0\u4ea4\uff0c\u91ca\u653e\u672c\u5730\u9501\u548c\u8fde\u63a5\u8d44\u6e90\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e8c\u9636\u6bb5\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u5f02\u6b65\u5316\uff0c\u975e\u5e38\u5feb\u901f\u5730\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56de\u6eda\u901a\u8fc7\u4e00\u9636\u6bb5\u7684\u56de\u6eda\u65e5\u5fd7\u8fdb\u884c\u53cd\u5411\u8865\u507f\u3002")))),(0,l.kt)("h1",{id:"\u5199\u9694\u79bb"},"\u5199\u9694\u79bb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u524d\uff0c\u9700\u8981\u786e\u4fdd\u5148\u62ff\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u5168\u5c40\u9501")," \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62ff\u4e0d\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u5168\u5c40\u9501")," \uff0c\u4e0d\u80fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62ff ",(0,l.kt)("strong",{parentName:"li"},"\u5168\u5c40\u9501")," \u7684\u5c1d\u8bd5\u88ab\u9650\u5236\u5728\u4e00\u5b9a\u8303\u56f4\u5185\uff0c\u8d85\u51fa\u8303\u56f4\u5c06\u653e\u5f03\uff0c\u5e76\u56de\u6eda\u672c\u5730\u4e8b\u52a1\uff0c\u91ca\u653e\u672c\u5730\u9501\u3002")),(0,l.kt)("p",null,"\u4ee5\u4e00\u4e2a\u793a\u4f8b\u6765\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u4e24\u4e2a\u5168\u5c40\u4e8b\u52a1 tx1 \u548c tx2\uff0c\u5206\u522b\u5bf9 a \u8868\u7684 m \u5b57\u6bb5\u8fdb\u884c\u66f4\u65b0\u64cd\u4f5c\uff0cm \u7684\u521d\u59cb\u503c 1000\u3002"),(0,l.kt)("p",null,"tx1 \u5148\u5f00\u59cb\uff0c\u5f00\u542f\u672c\u5730\u4e8b\u52a1\uff0c\u62ff\u5230\u672c\u5730\u9501\uff0c\u66f4\u65b0\u64cd\u4f5c m = 1000 - 100 = 900\u3002\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u524d\uff0c\u5148\u62ff\u5230\u8be5\u8bb0\u5f55\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \uff0c\u672c\u5730\u63d0\u4ea4\u91ca\u653e\u672c\u5730\u9501\u3002\ntx2 \u540e\u5f00\u59cb\uff0c\u5f00\u542f\u672c\u5730\u4e8b\u52a1\uff0c\u62ff\u5230\u672c\u5730\u9501\uff0c\u66f4\u65b0\u64cd\u4f5c m = 900 - 100 = 800\u3002\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u524d\uff0c\u5c1d\u8bd5\u62ff\u8be5\u8bb0\u5f55\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \uff0ctx1 \u5168\u5c40\u63d0\u4ea4\u524d\uff0c\u8be5\u8bb0\u5f55\u7684\u5168\u5c40\u9501\u88ab tx1 \u6301\u6709\uff0ctx2 \u9700\u8981\u91cd\u8bd5\u7b49\u5f85 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1zaknwVY7gK0jSZKzXXaikpXa-702-521.png",alt:"Write-Isolation: Commit"})),(0,l.kt)("p",null,"tx1 \u4e8c\u9636\u6bb5\u5168\u5c40\u63d0\u4ea4\uff0c\u91ca\u653e ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u3002tx2 \u62ff\u5230 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1xW0UwubviK0jSZFNXXaApXXa-718-521.png",alt:"Write-Isolation: Rollback"})),(0,l.kt)("p",null,"\u5982\u679c tx1 \u7684\u4e8c\u9636\u6bb5\u5168\u5c40\u56de\u6eda\uff0c\u5219 tx1 \u9700\u8981\u91cd\u65b0\u83b7\u53d6\u8be5\u6570\u636e\u7684\u672c\u5730\u9501\uff0c\u8fdb\u884c\u53cd\u5411\u8865\u507f\u7684\u66f4\u65b0\u64cd\u4f5c\uff0c\u5b9e\u73b0\u5206\u652f\u7684\u56de\u6eda\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u5982\u679c tx2 \u4ecd\u5728\u7b49\u5f85\u8be5\u6570\u636e\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501"),"\uff0c\u540c\u65f6\u6301\u6709\u672c\u5730\u9501\uff0c\u5219 tx1 \u7684\u5206\u652f\u56de\u6eda\u4f1a\u5931\u8d25\u3002\u5206\u652f\u7684\u56de\u6eda\u4f1a\u4e00\u76f4\u91cd\u8bd5\uff0c\u76f4\u5230 tx2 \u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u7b49\u9501\u8d85\u65f6\uff0c\u653e\u5f03 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u5e76\u56de\u6eda\u672c\u5730\u4e8b\u52a1\u91ca\u653e\u672c\u5730\u9501\uff0ctx1 \u7684\u5206\u652f\u56de\u6eda\u6700\u7ec8\u6210\u529f\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6574\u4e2a\u8fc7\u7a0b ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u5728 tx1 \u7ed3\u675f\u524d\u4e00\u76f4\u662f\u88ab tx1 \u6301\u6709\u7684\uff0c\u6240\u4ee5\u4e0d\u4f1a\u53d1\u751f ",(0,l.kt)("strong",{parentName:"p"},"\u810f\u5199")," \u7684\u95ee\u9898\u3002"),(0,l.kt)("h1",{id:"\u8bfb\u9694\u79bb"},"\u8bfb\u9694\u79bb"),(0,l.kt)("p",null,"\u5728\u6570\u636e\u5e93\u672c\u5730\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b ",(0,l.kt)("strong",{parentName:"p"},"\u8bfb\u5df2\u63d0\u4ea4\uff08Read Committed\uff09")," \u6216\u4ee5\u4e0a\u7684\u57fa\u7840\u4e0a\uff0cSeata\uff08AT \u6a21\u5f0f\uff09\u7684\u9ed8\u8ba4\u5168\u5c40\u9694\u79bb\u7ea7\u522b\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u8bfb\u672a\u63d0\u4ea4\uff08Read Uncommitted\uff09")," \u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5e94\u7528\u5728\u7279\u5b9a\u573a\u666f\u4e0b\uff0c\u5fc5\u9700\u8981\u6c42\u5168\u5c40\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u8bfb\u5df2\u63d0\u4ea4")," \uff0c\u76ee\u524d Seata \u7684\u65b9\u5f0f\u662f\u901a\u8fc7 SELECT FOR UPDATE \u8bed\u53e5\u7684\u4ee3\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB138wuwYj1gK0jSZFuXXcrHpXa-724-521.png",alt:"Read Isolation: SELECT FOR UPDATE"})),(0,l.kt)("p",null,"SELECT FOR UPDATE \u8bed\u53e5\u7684\u6267\u884c\u4f1a\u7533\u8bf7 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \uff0c\u5982\u679c ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u88ab\u5176\u4ed6\u4e8b\u52a1\u6301\u6709\uff0c\u5219\u91ca\u653e\u672c\u5730\u9501\uff08\u56de\u6eda SELECT FOR UPDATE \u8bed\u53e5\u7684\u672c\u5730\u6267\u884c\uff09\u5e76\u91cd\u8bd5\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u67e5\u8be2\u662f\u88ab block \u4f4f\u7684\uff0c\u76f4\u5230 ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u9501")," \u62ff\u5230\uff0c\u5373\u8bfb\u53d6\u7684\u76f8\u5173\u6570\u636e\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u5df2\u63d0\u4ea4")," \u7684\uff0c\u624d\u8fd4\u56de\u3002"),(0,l.kt)("p",null,"\u51fa\u4e8e\u603b\u4f53\u6027\u80fd\u4e0a\u7684\u8003\u8651\uff0cSeata \u76ee\u524d\u7684\u65b9\u6848\u5e76\u6ca1\u6709\u5bf9\u6240\u6709 SELECT \u8bed\u53e5\u90fd\u8fdb\u884c\u4ee3\u7406\uff0c\u4ec5\u9488\u5bf9 FOR UPDATE \u7684 SELECT \u8bed\u53e5\u3002"),(0,l.kt)("h1",{id:"\u5de5\u4f5c\u673a\u5236"},"\u5de5\u4f5c\u673a\u5236"),(0,l.kt)("p",null,"\u4ee5\u4e00\u4e2a\u793a\u4f8b\u6765\u8bf4\u660e\u6574\u4e2a AT \u5206\u652f\u7684\u5de5\u4f5c\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u4e1a\u52a1\u8868\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"product")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Key"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"since"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"AT \u5206\u652f\u4e8b\u52a1\u7684\u4e1a\u52a1\u903b\u8f91\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update product set name = 'GTS' where name = 'TXC';\n")),(0,l.kt)("h2",{id:"\u4e00\u9636\u6bb5"},"\u4e00\u9636\u6bb5"),(0,l.kt)("p",null,"\u8fc7\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u89e3\u6790 SQL\uff1a\u5f97\u5230 SQL \u7684\u7c7b\u578b\uff08UPDATE\uff09\uff0c\u8868\uff08product\uff09\uff0c\u6761\u4ef6\uff08where name = 'TXC'\uff09\u7b49\u76f8\u5173\u7684\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u524d\u955c\u50cf\uff1a\u6839\u636e\u89e3\u6790\u5f97\u5230\u7684\u6761\u4ef6\u4fe1\u606f\uff0c\u751f\u6210\u67e5\u8be2\u8bed\u53e5\uff0c\u5b9a\u4f4d\u6570\u636e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select id, name, since from product where name = 'TXC';\n")),(0,l.kt)("p",null,"\u5f97\u5230\u524d\u955c\u50cf\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"TXC"),(0,l.kt)("td",{parentName:"tr",align:null},"2014")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u4e1a\u52a1 SQL\uff1a\u66f4\u65b0\u8fd9\u6761\u8bb0\u5f55\u7684 name \u4e3a 'GTS'\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u540e\u955c\u50cf\uff1a\u6839\u636e\u524d\u955c\u50cf\u7684\u7ed3\u679c\uff0c\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},"\u4e3b\u952e")," \u5b9a\u4f4d\u6570\u636e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select id, name, since from product where id = 1;\n")),(0,l.kt)("p",null,"\u5f97\u5230\u540e\u955c\u50cf\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"GTS"),(0,l.kt)("td",{parentName:"tr",align:null},"2014")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u63d2\u5165\u56de\u6eda\u65e5\u5fd7\uff1a\u628a\u524d\u540e\u955c\u50cf\u6570\u636e\u4ee5\u53ca\u4e1a\u52a1 SQL \u76f8\u5173\u7684\u4fe1\u606f\u7ec4\u6210\u4e00\u6761\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\uff0c\u63d2\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"UNDO_LOG")," \u8868\u4e2d\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "branchId": 641789253,\n    "undoItems": [{\n        "afterImage": {\n            "rows": [{\n                "fields": [{\n                    "name": "id",\n                    "type": 4,\n                    "value": 1\n                }, {\n                    "name": "name",\n                    "type": 12,\n                    "value": "GTS"\n                }, {\n                    "name": "since",\n                    "type": 12,\n                    "value": "2014"\n                }]\n            }],\n            "tableName": "product"\n        },\n        "beforeImage": {\n            "rows": [{\n                "fields": [{\n                    "name": "id",\n                    "type": 4,\n                    "value": 1\n                }, {\n                    "name": "name",\n                    "type": 12,\n                    "value": "TXC"\n                }, {\n                    "name": "since",\n                    "type": 12,\n                    "value": "2014"\n                }]\n            }],\n            "tableName": "product"\n        },\n        "sqlType": "UPDATE"\n    }],\n    "xid": "xid:xxx"\n}\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u524d\uff0c\u5411 TC \u6ce8\u518c\u5206\u652f\uff1a\u7533\u8bf7 ",(0,l.kt)("inlineCode",{parentName:"li"},"product")," \u8868\u4e2d\uff0c\u4e3b\u952e\u503c\u7b49\u4e8e 1 \u7684\u8bb0\u5f55\u7684 ",(0,l.kt)("strong",{parentName:"li"},"\u5168\u5c40\u9501")," \u3002"),(0,l.kt)("li",{parentName:"ol"},"\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\uff1a\u4e1a\u52a1\u6570\u636e\u7684\u66f4\u65b0\u548c\u524d\u9762\u6b65\u9aa4\u4e2d\u751f\u6210\u7684 UNDO LOG \u4e00\u5e76\u63d0\u4ea4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u672c\u5730\u4e8b\u52a1\u63d0\u4ea4\u7684\u7ed3\u679c\u4e0a\u62a5\u7ed9 TC\u3002")),(0,l.kt)("h2",{id:"\u4e8c\u9636\u6bb5-\u56de\u6eda"},"\u4e8c\u9636\u6bb5-\u56de\u6eda"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6536\u5230 TC \u7684\u5206\u652f\u56de\u6eda\u8bf7\u6c42\uff0c\u5f00\u542f\u4e00\u4e2a\u672c\u5730\u4e8b\u52a1\uff0c\u6267\u884c\u5982\u4e0b\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 XID \u548c Branch ID \u67e5\u627e\u5230\u76f8\u5e94\u7684 UNDO LOG \u8bb0\u5f55\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u6821\u9a8c\uff1a\u62ff UNDO LOG \u4e2d\u7684\u540e\u955c\u4e0e\u5f53\u524d\u6570\u636e\u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u6709\u4e0d\u540c\uff0c\u8bf4\u660e\u6570\u636e\u88ab\u5f53\u524d\u5168\u5c40\u4e8b\u52a1\u4e4b\u5916\u7684\u52a8\u4f5c\u505a\u4e86\u4fee\u6539\u3002\u8fd9\u79cd\u60c5\u51b5\uff0c\u9700\u8981\u6839\u636e\u914d\u7f6e\u7b56\u7565\u6765\u505a\u5904\u7406\uff0c\u8be6\u7ec6\u7684\u8bf4\u660e\u5728\u53e6\u5916\u7684\u6587\u6863\u4e2d\u4ecb\u7ecd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e UNDO LOG \u4e2d\u7684\u524d\u955c\u50cf\u548c\u4e1a\u52a1 SQL \u7684\u76f8\u5173\u4fe1\u606f\u751f\u6210\u5e76\u6267\u884c\u56de\u6eda\u7684\u8bed\u53e5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update product set name = 'TXC' where id = 1;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\u3002\u5e76\u628a\u672c\u5730\u4e8b\u52a1\u7684\u6267\u884c\u7ed3\u679c\uff08\u5373\u5206\u652f\u4e8b\u52a1\u56de\u6eda\u7684\u7ed3\u679c\uff09\u4e0a\u62a5\u7ed9 TC\u3002")),(0,l.kt)("h2",{id:"\u4e8c\u9636\u6bb5-\u63d0\u4ea4"},"\u4e8c\u9636\u6bb5-\u63d0\u4ea4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6536\u5230 TC \u7684\u5206\u652f\u63d0\u4ea4\u8bf7\u6c42\uff0c\u628a\u8bf7\u6c42\u653e\u5165\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1\u7684\u961f\u5217\u4e2d\uff0c\u9a6c\u4e0a\u8fd4\u56de\u63d0\u4ea4\u6210\u529f\u7684\u7ed3\u679c\u7ed9 TC\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u4efb\u52a1\u9636\u6bb5\u7684\u5206\u652f\u63d0\u4ea4\u8bf7\u6c42\u5c06\u5f02\u6b65\u548c\u6279\u91cf\u5730\u5220\u9664\u76f8\u5e94 UNDO LOG \u8bb0\u5f55\u3002")),(0,l.kt)("h1",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,l.kt)("h2",{id:"\u56de\u6eda\u65e5\u5fd7\u8868"},"\u56de\u6eda\u65e5\u5fd7\u8868"),(0,l.kt)("p",null,"UNDO_LOG Table\uff1a\u4e0d\u540c\u6570\u636e\u5e93\u5728\u7c7b\u578b\u4e0a\u4f1a\u7565\u6709\u5dee\u522b\u3002"),(0,l.kt)("p",null,"\u4ee5 MySQL \u4e3a\u4f8b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch_id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint     PK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xid"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(128)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rollback_info"),(0,l.kt)("td",{parentName:"tr",align:null},"longblob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_status"),(0,l.kt)("td",{parentName:"tr",align:null},"tinyint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_created"),(0,l.kt)("td",{parentName:"tr",align:null},"datetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_modified"),(0,l.kt)("td",{parentName:"tr",align:null},"datetime")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6ce8\u610f\u6b64\u59040.7.0+ \u589e\u52a0\u5b57\u6bb5 context\nCREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `context` varchar(128) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n")),(0,l.kt)("h1",{id:"tcc-\u6a21\u5f0f"},"TCC \u6a21\u5f0f"),(0,l.kt)("p",null,"\u56de\u987e\u603b\u89c8\u4e2d\u7684\u63cf\u8ff0\uff1a\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u5c40\u4e8b\u52a1\uff0c\u6574\u4f53\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u7684\u6a21\u578b\u3002\u5168\u5c40\u4e8b\u52a1\u662f\u7531\u82e5\u5e72\u5206\u652f\u4e8b\u52a1\u7ec4\u6210\u7684\uff0c\u5206\u652f\u4e8b\u52a1\u8981\u6ee1\u8db3 ",(0,l.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u7684\u6a21\u578b\u8981\u6c42\uff0c\u5373\u9700\u8981\u6bcf\u4e2a\u5206\u652f\u4e8b\u52a1\u90fd\u5177\u5907\u81ea\u5df1\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u6216 rollback \u884c\u4e3a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB14Kguw1H2gK0jSZJnXXaT1FXa-853-482.png",alt:"Overview of a global transaction"})),(0,l.kt)("p",null,"\u6839\u636e\u4e24\u9636\u6bb5\u884c\u4e3a\u6a21\u5f0f\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u5c06\u5206\u652f\u4e8b\u52a1\u5212\u5206\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"Automatic (Branch) Transaction Mode")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"Manual (Branch) Transaction Mode"),"."),(0,l.kt)("p",null,"AT \u6a21\u5f0f\u57fa\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u652f\u6301\u672c\u5730 ACID \u4e8b\u52a1")," \u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u5728\u672c\u5730\u4e8b\u52a1\u4e2d\uff0c\u4e00\u5e76\u63d0\u4ea4\u4e1a\u52a1\u6570\u636e\u66f4\u65b0\u548c\u76f8\u5e94\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u9a6c\u4e0a\u6210\u529f\u7ed3\u675f\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u52a8")," \u5f02\u6b65\u6279\u91cf\u6e05\u7406\u56de\u6eda\u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u901a\u8fc7\u56de\u6eda\u65e5\u5fd7\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u52a8")," \u751f\u6210\u8865\u507f\u64cd\u4f5c\uff0c\u5b8c\u6210\u6570\u636e\u56de\u6eda\u3002")),(0,l.kt)("p",null,"\u76f8\u5e94\u7684\uff0cTCC \u6a21\u5f0f\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u5e95\u5c42\u6570\u636e\u8d44\u6e90\u7684\u4e8b\u52a1\u652f\u6301\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 prepare \u903b\u8f91\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 commit \u903b\u8f91\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 rollback \u903b\u8f91\u3002")),(0,l.kt)("p",null,"\u6240\u8c13 TCC \u6a21\u5f0f\uff0c\u662f\u6307\u652f\u6301\u628a ",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49")," \u7684\u5206\u652f\u4e8b\u52a1\u7eb3\u5165\u5230\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u7406\u4e2d\u3002"),(0,l.kt)("h1",{id:"saga-\u6a21\u5f0f"},"Saga \u6a21\u5f0f"),(0,l.kt)("p",null,"Saga\u6a21\u5f0f\u662fSEATA\u63d0\u4f9b\u7684\u957f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5728Saga\u6a21\u5f0f\u4e2d\uff0c\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u53c2\u4e0e\u8005\u90fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u5f53\u51fa\u73b0\u67d0\u4e00\u4e2a\u53c2\u4e0e\u8005\u5931\u8d25\u5219\u8865\u507f\u524d\u9762\u5df2\u7ecf\u6210\u529f\u7684\u53c2\u4e0e\u8005\uff0c\u4e00\u9636\u6bb5\u6b63\u5411\u670d\u52a1\u548c\u4e8c\u9636\u6bb5\u8865\u507f\u670d\u52a1\u90fd\u7531\u4e1a\u52a1\u5f00\u53d1\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png",alt:"Saga\u6a21\u5f0f\u793a\u610f\u56fe"})),(0,l.kt)("p",null,"\u7406\u8bba\u57fa\u7840\uff1aHector & Kenneth \u53d1\u8868\u8bba\u2f42 Sagas \uff081987\uff09"),(0,l.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u6d41\u7a0b\u957f\u3001\u4e1a\u52a1\u6d41\u7a0b\u591a"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u4e0e\u8005\u5305\u542b\u5176\u5b83\u516c\u53f8\u6216\u9057\u7559\u7cfb\u7edf\u670d\u52a1\uff0c\u65e0\u6cd5\u63d0\u4f9b TCC \u6a21\u5f0f\u8981\u6c42\u7684\u4e09\u4e2a\u63a5\u53e3")),(0,l.kt)("h2",{id:"\u4f18\u52bf"},"\u4f18\u52bf\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u65e0\u9501\uff0c\u9ad8\u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\uff0c\u53c2\u4e0e\u8005\u53ef\u5f02\u6b65\u6267\u884c\uff0c\u9ad8\u541e\u5410"),(0,l.kt)("li",{parentName:"ul"},"\u8865\u507f\u670d\u52a1\u6613\u4e8e\u5b9e\u73b0")),(0,l.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4fdd\u8bc1\u9694\u79bb\u6027\uff08\u5e94\u5bf9\u65b9\u6848\u89c1",(0,l.kt)("a",{parentName:"li",href:"../user/saga"},"\u7528\u6237\u6587\u6863"),"\uff09")))}N.isMDXComponent=!0}}]);