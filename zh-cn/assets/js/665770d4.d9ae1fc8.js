"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[28326],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>b});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),u=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=u(n.components);return a.createElement(c.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},x=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),p=u(t),x=r,b=p["".concat(c,".").concat(x)]||p[x]||d[x]||o;return t?a.createElement(b,l(l({ref:e},s),{},{components:t})):a.createElement(b,l({ref:e},s))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,l=new Array(o);l[0]=x;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[p]="string"==typeof n?n:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},89039:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={title:"API \u652f\u6301",keywords:["Seata"],description:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API\u3002"},l="1. \u6982\u8ff0",i={unversionedId:"user/api",id:"version-v1.7/user/api",title:"API \u652f\u6301",description:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/user/api.md",sourceDirName:"user",slug:"/user/api",permalink:"/zh-cn/docs/user/api",draft:!1,tags:[],version:"v1.7",frontMatter:{title:"API \u652f\u6301",keywords:["Seata"],description:"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API\u3002"},sidebar:"docs",previous:{title:"Zookeeper \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/user/registry/zookeeper"},next:{title:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301",permalink:"/zh-cn/docs/user/microservice"}},c={},u=[{value:"2.1 GlobalTransaction",id:"21-globaltransaction",level:2},{value:"2.2 GlobalTransactionContext",id:"22-globaltransactioncontext",level:2},{value:"2.3 TransactionalTemplate",id:"23-transactionaltemplate",level:2},{value:"3.1 RootContext",id:"31-rootcontext",level:2},{value:"1. \u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad",id:"1-\u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad",level:3},{value:"2. \u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d",id:"2-\u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d",level:3}],s={toc:u},p="wrapper";function d(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,r.kt)("p",null,"Seata API \u5206\u4e3a\u4e24\u5927\u7c7b\uff1aHigh-Level API \u548c Low-Level API \uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High-Level API")," \uff1a\u7528\u4e8e\u4e8b\u52a1\u8fb9\u754c\u5b9a\u4e49\u3001\u63a7\u5236\u53ca\u4e8b\u52a1\u72b6\u6001\u67e5\u8be2\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Low-Level API")," \uff1a\u7528\u4e8e\u63a7\u5236\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad\u3002")),(0,r.kt)("h1",{id:"2-high-level-api"},"2. High-Level API"),(0,r.kt)("h2",{id:"21-globaltransaction"},"2.1 GlobalTransaction"),(0,r.kt)("p",null,"\u5168\u5c40\u4e8b\u52a1\uff1a\u5305\u62ec\u5f00\u542f\u4e8b\u52a1\u3001\u63d0\u4ea4\u3001\u56de\u6eda\u3001\u83b7\u53d6\u5f53\u524d\u72b6\u6001\u7b49\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface GlobalTransaction {\n\n    /**\n     * \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff08\u4f7f\u7528\u9ed8\u8ba4\u7684\u4e8b\u52a1\u540d\u548c\u8d85\u65f6\u65f6\u95f4\uff09\n     */\n    void begin() throws TransactionException;\n\n    /**\n     * \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff0c\u5e76\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\uff08\u4f7f\u7528\u9ed8\u8ba4\u7684\u4e8b\u52a1\u540d\uff09\n     */\n    void begin(int timeout) throws TransactionException;\n\n    /**\n     * \u5f00\u542f\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\uff0c\u5e76\u6307\u5b9a\u4e8b\u52a1\u540d\u548c\u8d85\u65f6\u65f6\u95f4\n     */\n    void begin(int timeout, String name) throws TransactionException;\n\n    /**\n     * \u5168\u5c40\u63d0\u4ea4\n     */\n    void commit() throws TransactionException;\n\n    /**\n     * \u5168\u5c40\u56de\u6eda\n     */\n    void rollback() throws TransactionException;\n\n    /**\n     * \u83b7\u53d6\u4e8b\u52a1\u7684\u5f53\u524d\u72b6\u6001\n     */\n    GlobalStatus getStatus() throws TransactionException;\n\n    /**\n     * \u83b7\u53d6\u4e8b\u52a1\u7684 XID\n     */\n    String getXid();\n\n}\n")),(0,r.kt)("h2",{id:"22-globaltransactioncontext"},"2.2 GlobalTransactionContext"),(0,r.kt)("p",null,"GlobalTransaction \u5b9e\u4f8b\u7684\u83b7\u53d6\u9700\u8981\u901a\u8fc7 GlobalTransactionContext\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n    /**\n     * \u83b7\u53d6\u5f53\u524d\u7684\u5168\u5c40\u4e8b\u52a1\u5b9e\u4f8b\uff0c\u5982\u679c\u6ca1\u6709\u5219\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b9e\u4f8b\u3002\n     */\n    public static GlobalTransaction getCurrentOrCreate() {\n        GlobalTransaction tx = getCurrent();\n        if (tx == null) {\n            return createNew();\n        }\n        return tx;\n    }\n\n    /**\n     * \u91cd\u65b0\u8f7d\u5165\u7ed9\u5b9a XID \u7684\u5168\u5c40\u4e8b\u52a1\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u6267\u884c\u5f00\u542f\u4e8b\u52a1\u7684\u64cd\u4f5c\u3002\n     * \u8fd9\u4e2a API \u901a\u5e38\u7528\u4e8e\u5931\u8d25\u7684\u4e8b\u52a1\u7684\u540e\u7eed\u96c6\u4e2d\u5904\u7406\u3002\n     * \u6bd4\u5982\uff1a\u5168\u5c40\u63d0\u4ea4\u8d85\u65f6\uff0c\u540e\u7eed\u96c6\u4e2d\u5904\u7406\u901a\u8fc7\u91cd\u65b0\u8f7d\u5165\u8be5\u5b9e\u4f8b\uff0c\u901a\u8fc7\u5b9e\u4f8b\u65b9\u6cd5\u83b7\u53d6\u4e8b\u52a1\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u6839\u636e\u72b6\u6001\u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u8bd5\u5168\u5c40\u63d0\u4ea4\u64cd\u4f5c\u3002\n     */\n    public static GlobalTransaction reload(String xid) throws TransactionException {\n        GlobalTransaction tx = new DefaultGlobalTransaction(xid, GlobalStatus.UnKnown, GlobalTransactionRole.Launcher) {\n            @Override\n            public void begin(int timeout, String name) throws TransactionException {\n                throw new IllegalStateException("Never BEGIN on a RELOADED GlobalTransaction. ");\n            }\n        };\n        return tx;\n    }\n')),(0,r.kt)("h2",{id:"23-transactionaltemplate"},"2.3 TransactionalTemplate"),(0,r.kt)("p",null,"\u4e8b\u52a1\u5316\u6a21\u677f\uff1a\u901a\u8fc7\u4e0a\u8ff0 GlobalTransaction \u548c GlobalTransactionContext API \u628a\u4e00\u4e2a\u4e1a\u52a1\u670d\u52a1\u7684\u8c03\u7528\u5305\u88c5\u6210\u5e26\u6709\u5206\u5e03\u5f0f\u4e8b\u52a1\u652f\u6301\u7684\u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class TransactionalTemplate {\n\n    public Object execute(TransactionalExecutor business) throws TransactionalExecutor.ExecutionException {\n\n        // 1. \u83b7\u53d6\u5f53\u524d\u5168\u5c40\u4e8b\u52a1\u5b9e\u4f8b\u6216\u521b\u5efa\u65b0\u7684\u5b9e\u4f8b\n        GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n\n        // 2. \u5f00\u542f\u5168\u5c40\u4e8b\u52a1\n        try {\n            tx.begin(business.timeout(), business.name());\n\n        } catch (TransactionException txe) {\n            // 2.1 \u5f00\u542f\u5931\u8d25\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.BeginFailure);\n\n        }\n\n        Object rs = null;\n        try {\n            // 3. \u8c03\u7528\u4e1a\u52a1\u670d\u52a1\n            rs = business.execute();\n\n        } catch (Throwable ex) {\n\n            // \u4e1a\u52a1\u8c03\u7528\u672c\u8eab\u7684\u5f02\u5e38\n            try {\n                // \u5168\u5c40\u56de\u6eda\n                tx.rollback();\n\n                // 3.1 \u5168\u5c40\u56de\u6eda\u6210\u529f\uff1a\u629b\u51fa\u539f\u59cb\u4e1a\u52a1\u5f02\u5e38\n                throw new TransactionalExecutor.ExecutionException(tx, TransactionalExecutor.Code.RollbackDone, ex);\n\n            } catch (TransactionException txe) {\n                // 3.2 \u5168\u5c40\u56de\u6eda\u5931\u8d25\uff1a\n                throw new TransactionalExecutor.ExecutionException(tx, txe,\n                    TransactionalExecutor.Code.RollbackFailure, ex);\n\n            }\n\n        }\n\n        // 4. \u5168\u5c40\u63d0\u4ea4\n        try {\n            tx.commit();\n\n        } catch (TransactionException txe) {\n            // 4.1 \u5168\u5c40\u63d0\u4ea4\u5931\u8d25\uff1a\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.CommitFailure);\n\n        }\n        return rs;\n    }\n\n}\n")),(0,r.kt)("p",null,"\u6a21\u677f\u65b9\u6cd5\u6267\u884c\u7684\u5f02\u5e38\uff1aExecutionException"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    class ExecutionException extends Exception {\n\n        // \u53d1\u751f\u5f02\u5e38\u7684\u4e8b\u52a1\u5b9e\u4f8b\n        private GlobalTransaction transaction;\n\n        // \u5f02\u5e38\u7f16\u7801\uff1a\n        // BeginFailure\uff08\u5f00\u542f\u4e8b\u52a1\u5931\u8d25\uff09\n        // CommitFailure\uff08\u5168\u5c40\u63d0\u4ea4\u5931\u8d25\uff09\n        // RollbackFailure\uff08\u5168\u5c40\u56de\u6eda\u5931\u8d25\uff09\n        // RollbackDone\uff08\u5168\u5c40\u56de\u6eda\u6210\u529f\uff09\n        private Code code;\n\n        // \u89e6\u53d1\u56de\u6eda\u7684\u4e1a\u52a1\u539f\u59cb\u5f02\u5e38\n        private Throwable originalException;\n")),(0,r.kt)("p",null,"\u5916\u5c42\u8c03\u7528\u903b\u8f91 try-catch \u8fd9\u4e2a\u5f02\u5e38\uff0c\u6839\u636e\u5f02\u5e38\u7f16\u7801\u8fdb\u884c\u5904\u7406\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BeginFailure")," \uff08\u5f00\u542f\u4e8b\u52a1\u5931\u8d25\uff09\uff1agetCause() \u5f97\u5230\u5f00\u542f\u4e8b\u52a1\u5931\u8d25\u7684\u6846\u67b6\u5f02\u5e38\uff0cgetOriginalException() \u4e3a\u7a7a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CommitFailure")," \uff08\u5168\u5c40\u63d0\u4ea4\u5931\u8d25\uff09\uff1agetCause() \u5f97\u5230\u5168\u5c40\u63d0\u4ea4\u5931\u8d25\u7684\u6846\u67b6\u5f02\u5e38\uff0cgetOriginalException() \u4e3a\u7a7a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RollbackFailure")," \uff08\u5168\u5c40\u56de\u6eda\u5931\u8d25\uff09\uff1agetCause() \u5f97\u5230\u5168\u5c40\u56de\u6eda\u5931\u8d25\u7684\u6846\u67b6\u5f02\u5e38\uff0cgetOriginalException() \u4e1a\u52a1\u5e94\u7528\u7684\u539f\u59cb\u5f02\u5e38\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RollbackDone")," \uff08\u5168\u5c40\u56de\u6eda\u6210\u529f\uff09\uff1agetCause() \u4e3a\u7a7a\uff0cgetOriginalException() \u4e1a\u52a1\u5e94\u7528\u7684\u539f\u59cb\u5f02\u5e38\u3002")),(0,r.kt)("h1",{id:"3-low-level-api"},"3. Low-Level API"),(0,r.kt)("h2",{id:"31-rootcontext"},"3.1 RootContext"),(0,r.kt)("p",null,"\u4e8b\u52a1\u7684\u6839\u4e0a\u4e0b\u6587\uff1a\u8d1f\u8d23\u5728\u5e94\u7528\u7684\u8fd0\u884c\u65f6\uff0c\u7ef4\u62a4 XID \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    /**\n     * \u5f97\u5230\u5f53\u524d\u5e94\u7528\u8fd0\u884c\u65f6\u7684\u5168\u5c40\u4e8b\u52a1 XID\n     */\n    public static String getXID() {\n        return CONTEXT_HOLDER.get(KEY_XID);\n    }\n\n    /**\n     * \u5c06\u5168\u5c40\u4e8b\u52a1 XID \u7ed1\u5b9a\u5230\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u4e2d\n     */\n    public static void bind(String xid) {\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("bind " + xid);\n        }\n        CONTEXT_HOLDER.put(KEY_XID, xid);\n    }\n\n    /**\n     * \u5c06\u5168\u5c40\u4e8b\u52a1 XID \u4ece\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u4e2d\u89e3\u9664\u7ed1\u5b9a\uff0c\u540c\u65f6\u5c06 XID \u8fd4\u56de\n     */\n    public static String unbind() {\n        String xid = CONTEXT_HOLDER.remove(KEY_XID);\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("unbind " + xid);\n        }\n        return xid;\n    }\n\n    /**\n     * \u5224\u65ad\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u662f\u5426\u5904\u4e8e\u5168\u5c40\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u4e2d\n     */\n    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n')),(0,r.kt)("p",null,"High-Level API \u7684\u5b9e\u73b0\u90fd\u662f\u57fa\u4e8e RootContext \u4e2d\u7ef4\u62a4\u7684 XID \u6765\u505a\u7684\u3002"),(0,r.kt)("p",null,"\u5e94\u7528\u7684\u5f53\u524d\u8fd0\u884c\u7684\u64cd\u4f5c\u662f\u5426\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u5c31\u662f\u770b RootContext \u4e2d\u662f\u5426\u6709 XID\u3002"),(0,r.kt)("p",null,"RootContext \u7684\u9ed8\u8ba4\u5b9e\u73b0\u662f\u57fa\u4e8e ThreadLocal \u7684\uff0c\u5373 XID \u4fdd\u5b58\u5728\u5f53\u524d\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u3002"),(0,r.kt)("p",null,"Low-Level API \u7684\u4e24\u4e2a\u5178\u578b\u7684\u5e94\u7528\u573a\u666f\uff1a"),(0,r.kt)("h3",{id:"1-\u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad"},"1. \u8fdc\u7a0b\u8c03\u7528\u4e8b\u52a1\u4e0a\u4e0b\u6587\u7684\u4f20\u64ad"),(0,r.kt)("p",null,"\u8fdc\u7a0b\u8c03\u7528\u524d\u83b7\u53d6\u5f53\u524d XID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String xid = RootContext.getXID();\n")),(0,r.kt)("p",null,"\u8fdc\u7a0b\u8c03\u7528\u8fc7\u7a0b\u628a XID \u4e5f\u4f20\u9012\u5230\u670d\u52a1\u63d0\u4f9b\u65b9\uff0c\u5728\u6267\u884c\u670d\u52a1\u63d0\u4f9b\u65b9\u7684\u4e1a\u52a1\u903b\u8f91\u524d\uff0c\u628a XID \u7ed1\u5b9a\u5230\u5f53\u524d\u5e94\u7528\u7684\u8fd0\u884c\u65f6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RootContext.bind(rpcXid);\n")),(0,r.kt)("h3",{id:"2-\u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d"},"2. \u4e8b\u52a1\u7684\u6682\u505c\u548c\u6062\u590d"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u4e2d\uff0c\u5982\u679c\u9700\u8981\u67d0\u4e9b\u4e1a\u52a1\u903b\u8f91\u4e0d\u5728\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u8f96\u8303\u56f4\u5185\uff0c\u5219\u5728\u8c03\u7528\u524d\uff0c\u628a XID \u89e3\u7ed1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String unbindXid = RootContext.unbind();\n")),(0,r.kt)("p",null,"\u5f85\u76f8\u5173\u4e1a\u52a1\u903b\u8f91\u6267\u884c\u5b8c\u6210\uff0c\u518d\u628a XID \u7ed1\u5b9a\u56de\u53bb\uff0c\u5373\u53ef\u5b9e\u73b0\u5168\u5c40\u4e8b\u52a1\u7684\u6062\u590d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"RootContext.bind(unbindXid);\n")))}d.isMDXComponent=!0}}]);