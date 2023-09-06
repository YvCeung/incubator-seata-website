"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[57225],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94464:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={Title:"Seata parameter configuration",keywords:["Seata"],Description:"Seata parameter configuration."},i="The seata parameter configuration version 1.0.0",o={unversionedId:"user/configurations100",id:"version-v1.5/user/configurations100",title:"The seata parameter configuration version 1.0.0",description:"Change record",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/user/configurations100.md",sourceDirName:"user",slug:"/user/configurations100",permalink:"/en/docs/v1.5/user/configurations100",draft:!1,tags:[],version:"v1.5",frontMatter:{Title:"Seata parameter configuration",keywords:["Seata"],Description:"Seata parameter configuration."}},s={},d=[{value:"Change record",id:"change-record",level:3},{value:"Attention attribute (see all attributes for detailed description)",id:"attention-attribute-see-all-attributes-for-detailed-description",level:2},{value:"All attributes",id:"all-attributes",level:2},{value:"Public sector",id:"public-sector",level:3},{value:"Server side",id:"server-side",level:3},{value:"client\u7aef",id:"client\u7aef",level:3},{value:"Not in used",id:"not-in-used",level:3},{value:"synchronize parameters to the configuration center for use demo",id:"synchronize-parameters-to-the-configuration-center-for-use-demo",level:3},{value:"Nacos",id:"nacos",level:4},{value:"Apollo",id:"apollo",level:4},{value:"Consul",id:"consul",level:4},{value:"Etcd3",id:"etcd3",level:4},{value:"ZK",id:"zk",level:4},{value:"Appendix 1:",id:"appendix-1",level:3},{value:"Appendix 2:",id:"appendix-2",level:3},{value:"Appendix 3:",id:"appendix-3",level:3},{value:"Appendix 4:",id:"appendix-4",level:3}],u={toc:d},p="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-seata-parameter-configuration-version-100"},"The seata parameter configuration version 1.0.0"),(0,r.kt)("h3",{id:"change-record"},"Change record"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n20191221: Added seata. enabled, client. report. success. enable\n\ntransport.enable-client-batch-send-request\u3001client.log.exceptionRate\n\n")),(0,r.kt)("h2",{id:"attention-attribute-see-all-attributes-for-detailed-description"},"Attention attribute (see all attributes for detailed description)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"server side"),(0,r.kt)("th",{parentName:"tr",align:null},"client side"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registry.type"),(0,r.kt)("td",{parentName:"tr",align:null},"registry.type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.type"),(0,r.kt)("td",{parentName:"tr",align:null},"config.type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"service.vgroup_mapping.my_test_tx_group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.driver-class-name"),(0,r.kt)("td",{parentName:"tr",align:null},"service.default.grouplist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.url"),(0,r.kt)("td",{parentName:"tr",align:null},"service.disableGlobalTransaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.user"),(0,r.kt)("td",{parentName:"tr",align:null},"client.support.spring.datasource.autoproxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.password"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"all-attributes"},"All attributes"),(0,r.kt)("h3",{id:"public-sector"},"Public sector"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"),(0,r.kt)("th",{parentName:"tr",align:null},"remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transport.serialization"),(0,r.kt)("td",{parentName:"tr",align:null},"client and server communication codec method"),(0,r.kt)("td",{parentName:"tr",align:null},"seata (ByteBuf), protobuf, kryo, mission, default seata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transport.compressor"),(0,r.kt)("td",{parentName:"tr",align:null},"compression method of communication data between client and server"),(0,r.kt)("td",{parentName:"tr",align:null},"none, gzip, default: none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transport.heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},"the heartbeat detection switch for communication between client and server"),(0,r.kt)("td",{parentName:"tr",align:null},"True is enabled by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registry.type"),(0,r.kt)("td",{parentName:"tr",align:null},"registry type"),(0,r.kt)("td",{parentName:"tr",align:null},"default file, supporting file, nacos, eureka, redis, zk, consumer, etcd3, sofa, and custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.type"),(0,r.kt)("td",{parentName:"tr",align:null},"configuration center type"),(0,r.kt)("td",{parentName:"tr",align:null},"Default file, supporting file, nacos, apollo, zk, consult, etcd3, and custom")))),(0,r.kt)("h3",{id:"server-side"},"Server side"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"),(0,r.kt)("th",{parentName:"tr",align:null},"remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.undo.log.save.days"),(0,r.kt)("td",{parentName:"tr",align:null},"undo retention days"),(0,r.kt)("td",{parentName:"tr",align:null},"7 days by default, log_ Status=1 (Appendix 3) and undo not normally cleaned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.undo.log.delete.period"),(0,r.kt)("td",{parentName:"tr",align:null},"undo Cleanup thread interval"),(0,r.kt)("td",{parentName:"tr",align:null},"86400000 by default, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.max.commit.retry.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout duration of two-phase commit retry"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit: ms, s, m, h, d, corresponding to ms, s, min, h, d, and the default is ms. The default value of - 1 means unlimited retries. Formula: timeout>=now globalTransactionBeginTime, true means no retry if timeout occurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.max.rollback.retry.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout duration of two-phase rollback retry"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.recovery.committing-retry-period"),(0,r.kt)("td",{parentName:"tr",align:null},"Phase2 commit unfinished status Global transaction retry commit thread interval"),(0,r.kt)("td",{parentName:"tr",align:null},"1000 by default, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.recovery.async-committing-retry-period"),(0,r.kt)("td",{parentName:"tr",align:null},"Phase2 asynchronous submission status Retry submission thread interval"),(0,r.kt)("td",{parentName:"tr",align:null},"1000 by default, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.recovery.rollback-retry-period"),(0,r.kt)("td",{parentName:"tr",align:null},"Phase2 rollback status retry rollbacking thread interval"),(0,r.kt)("td",{parentName:"tr",align:null},"1000 by default, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server.recovery.timeout-retry-period"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout status detection Retry thread interval"),(0,r.kt)("td",{parentName:"tr",align:null},"1000 by default, in milliseconds. If timeout is detected, put the global transaction into the rollback session manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction session information storage mode"),(0,r.kt)("td",{parentName:"tr",align:null},"file Local file (HA is not supported), db database (HA is supported)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.file.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"file mode file storage folder name"),(0,r.kt)("td",{parentName:"tr",align:null},"default sessionStore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.datasource"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode data source type"),(0,r.kt)("td",{parentName:"tr",align:null},"default dbcp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.db-type"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode database type"),(0,r.kt)("td",{parentName:"tr",align:null},"default mysql")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.driver-class-name"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode database driver"),(0,r.kt)("td",{parentName:"tr",align:null},"default com.mysql.jdbc Driver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.url"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode database url"),(0,r.kt)("td",{parentName:"tr",align:null},"default jdbc: mysql://127.0.0.1:3306/seata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.user"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode database account"),(0,r.kt)("td",{parentName:"tr",align:null},"default MySQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.password"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode database account password"),(0,r.kt)("td",{parentName:"tr",align:null},"default MySQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.min-conn"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of initial connections to the database in db mode"),(0,r.kt)("td",{parentName:"tr",align:null},"1 by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.max-conn"),(0,r.kt)("td",{parentName:"tr",align:null},"maximum number of connections to database in db mode"),(0,r.kt)("td",{parentName:"tr",align:null},"3 by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.global.table"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode global transaction table name"),(0,r.kt)("td",{parentName:"tr",align:null},"default global_ table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.branch.table"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode branch transaction table name"),(0,r.kt)("td",{parentName:"tr",align:null},"default branch_ table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.lock-table"),(0,r.kt)("td",{parentName:"tr",align:null},"db mode global lock table name"),(0,r.kt)("td",{parentName:"tr",align:null},"default lock_ table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store.db.query-limit"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of global transactions queried in db mode"),(0,r.kt)("td",{parentName:"tr",align:null},"100 by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to enable Metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"False is off by default. In the false state, all Metrics related components will not be initialized to minimize the performance loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.registry-type"),(0,r.kt)("td",{parentName:"tr",align:null},"indicator registrar type"),(0,r.kt)("td",{parentName:"tr",align:null},"The indicator registrar type used by Metrics is a built-in compact (simple) implementation by default. Meters in this implementation only use limited memory counts, and the performance is high enough to meet most scenarios; Currently, only one indicator registrar can be set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.exporter-list"),(0,r.kt)("td",{parentName:"tr",align:null},"indicator result Measurement data outputter list"),(0,r.kt)("td",{parentName:"tr",align:null},'default prometheus. Multiple outputters are separated by English commas, such as "prometheus, jmx". Currently, only the prometheus outputters are connected')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.exporter-prometheus-port"),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus exporter client port number"),(0,r.kt)("td",{parentName:"tr",align:null},"9898 by default")))),(0,r.kt)("h3",{id:"client\u7aef"},"client\u7aef"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"),(0,r.kt)("th",{parentName:"tr",align:null},"remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to enable spring boot automatic assembly"),(0,r.kt)("td",{parentName:"tr",align:null},"true\u3001false\uff0cdefault true\uff08appendix 4\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.report.success.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to report success in the first phase"),(0,r.kt)("td",{parentName:"tr",align:null},"true, false, default true is used to keep the branch transaction lifecycle records complete, false can improve performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transport.enable-client-batch-send-request"),(0,r.kt)("td",{parentName:"tr",align:null},"client.log.exceptionRate"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to batch merge and send the client transaction message requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.vgroup_mapping.my_test_tx_group"),(0,r.kt)("td",{parentName:"tr",align:null},"service.default.grouplist"),(0,r.kt)("td",{parentName:"tr",align:null},"log exception output probability")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.disableGlobalTransaction"),(0,r.kt)("td",{parentName:"tr",align:null},"service.enableDegrade"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction Group (Appendix 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.rm.async.commit.buffer.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"client.rm.lock.retry.internal"),(0,r.kt)("td",{parentName:"tr",align:null},"TC Service List (Appendix 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.rm.lock.retry.times"),(0,r.kt)("td",{parentName:"tr",align:null},"client.rm.lock.retry.policy.branch-rollback-on-co"),(0,r.kt)("td",{parentName:"tr",align:null},"global transaction switch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.rm.report.retry.count"),(0,r.kt)("td",{parentName:"tr",align:null},"client.rm.table.meta.check.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"degradation switch (to be implemented)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.tm.commit.retry.count"),(0,r.kt)("td",{parentName:"tr",align:null},"client.tm.rollback.retry.count"),(0,r.kt)("td",{parentName:"tr",align:null},"asynchronous commit cache queue length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.undo.data.validation"),(0,r.kt)("td",{parentName:"tr",align:null},"client.undo.log.serialization"),(0,r.kt)("td",{parentName:"tr",align:null},"check or occupy the global lock retry interval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client.undo.log.table"),(0,r.kt)("td",{parentName:"tr",align:null},"client.support.spring.datasource.autoproxy"),(0,r.kt)("td",{parentName:"tr",align:null},"number of retries to verify or occupy the global lock")))),(0,r.kt)("h3",{id:"not-in-used"},"Not in used"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"),(0,r.kt)("th",{parentName:"tr",align:null},"remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lock.mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9501\u5b58\u50a8\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"local\u3001remote")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lock.local"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lock.remote"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"synchronize-parameters-to-the-configuration-center-for-use-demo"},"synchronize parameters to the configuration center for use demo"),(0,r.kt)("h4",{id:"nacos"},"Nacos"),(0,r.kt)("p",null,"shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh ${SEATAPATH}/script/config-center/nacos/nacos-config.sh -h localhost -p 8848 -g SEATA_GROUP -t 5a3c7d6c-f497-4d68-a71a-2e5e3340b3ca\n")),(0,r.kt)("p",null,"Parameter description:"),(0,r.kt)("p",null,"-h: Host, the default is localhost"),(0,r.kt)("p",null,"-p: Port, default 8848"),(0,r.kt)("p",null,"-g: Configure grouping. The default value is' SEATA_ GROUP'"),(0,r.kt)("p",null,"-t: Tenant information, corresponding to the namespace ID field of Nacos, the default value is null ''"),(0,r.kt)("h4",{id:"apollo"},"Apollo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh ${SEATAPATH}/script/config-center/apollo/apollo-config.sh -h localhost -p 8070 -e DEV -a seata-server -c default -n application -d apollo -r apollo -t 3aa026fc8435d0fc4505b345b8fa4578fb646a2c\n")),(0,r.kt)("p",null,"Parameter description:"),(0,r.kt)("p",null,"-h: Host, the default is localhost"),(0,r.kt)("p",null,"-p: Port, the default value is 8070"),(0,r.kt)("p",null,"-e: Managed configuration environment, default value DEV"),(0,r.kt)("p",null,"-a: AppId of the Namespace. The default value is seata server"),(0,r.kt)("p",null,"-c: The name of the managed configuration cluster is generally passed in as default. If it is a special cluster, just pass in the name of the corresponding cluster. The default value is default"),(0,r.kt)("p",null,"-n: The name of the namespace under management, if it is not in the properties format, needs to add a suffix, such as sample Yml, default value application"),(0,r.kt)("p",null,"-d: The creator of the item, in the format of domain account, that is, the user ID of the sso system"),(0,r.kt)("p",null,"-r: Publisher, domain account, note: if Apollo ConfigDB namespace.lock in ServerConfig If the switch is set to true (false by default), the environment does not allow the publisher and editor to be the same person. So if the editor is zhangsan, the publisher can no longer be zhangsan."),(0,r.kt)("p",null,"-t: The Apollo administrator can click http://{portal_address}/open/manage Html To create a third-party application, you'd better first query whether this AppId has been created. After successful creation, a token will be generated"),(0,r.kt)("p",null,"For details of the above parameters, see:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0"},"https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0")),(0,r.kt)("h4",{id:"consul"},"Consul"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh ${SEATAPATH}/script/config-center/consul/consul-config.sh -h localhost -p 8500\n")),(0,r.kt)("p",null,"Parameter description:"),(0,r.kt)("p",null,"-h: host, the default is localhost"),(0,r.kt)("p",null,"-p: port, the default value is 8500"),(0,r.kt)("h4",{id:"etcd3"},"Etcd3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh ${SEATAPATH}/script/config-center/etcd3/etcd3-config.sh -h localhost -p 2379\n")),(0,r.kt)("p",null,"Parameter description:"),(0,r.kt)("p",null,"-h: Host, the default is localhost"),(0,r.kt)("p",null,"-p: Port, the default value is 2379"),(0,r.kt)("p",null,"python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python ${SEATAPATH}/script/config-center/nacos/nacos-config.py localhost:8848\n")),(0,r.kt)("h4",{id:"zk"},"ZK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sh ${SEATAPATH}/script/config-center/zk/zk-config.sh -h localhost -p 2181 -z "/Users/zhangchenghui/zookeeper-3.4.14"\n')),(0,r.kt)("p",null,"Parameter description:"),(0,r.kt)("p",null,"-h: Host, the default is localhost"),(0,r.kt)("p",null,"-p: Port, the default value is 2181"),(0,r.kt)("p",null,"-z: zk path"),(0,r.kt)("h3",{id:"appendix-1"},"Appendix 1:"),(0,r.kt)("p",null,"Description of transaction grouping."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What is a transaction group?")),(0,r.kt)("p",null,"Transaction grouping is the resource logic of seata, similar to service instance. My in file.conf",(0,r.kt)("em",{parentName:"p"}," test")," tx_ A group is a transaction group."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"How to find the back-end cluster through transaction grouping?")),(0,r.kt)("p",null,"First, the program configures transaction grouping (txServiceGroup parameter of GlobalTransactionScanner construction method), and the program will search for service.vgroup through the user configured configuration center_ mapping. Transaction grouping configuration item. The value of the configuration item obtained is the name of the TC cluster. The program that obtains the cluster name constructs the service name through a certain prefix+cluster name. The service name of each configuration center is different. Get the service name, go to the corresponding registry, pull the service list of the corresponding service name, and get the real TC service list of the back-end."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Why is the design so that the service name is not directly taken?")),(0,r.kt)("p",null,"There is an additional layer to obtain the configuration of transaction groups to the mapping cluster. After this design, the transaction group can be used as the logical isolation unit of resources, which can quickly fail over when a failure occurs."),(0,r.kt)("h3",{id:"appendix-2"},"Appendix 2:"),(0,r.kt)("p",null,"About the grouplist question."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When will the default.grouplist in file.conf be used?")),(0,r.kt)("p",null,"It is used when registry. type=file. It is not read in other times."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Can multiple value lists be configured for default.grouplist?")),(0,r.kt)("p",null,"Multiple can be configured, which means cluster, but when store When mode=file, an error will be reported. The reason is that the file storage mode does not provide synchronization of local files, so you need to use store. mode=db to share data between TC clusters through db"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Is default.grouplist recommended?")),(0,r.kt)("p",null,"Not recommended. For example, question 1, when registering It is used when type=file, which means that the real registry is not used here, and the health check mechanism without specific services cannot automatically remove the list when the tc is unavailable. It is recommended to use nacos, eureka, redis, zk, consumer, etcd3, and sofa. Registry. type=file or config The original purpose of type=file design is to enable users to quickly verify the seata service through direct connection without relying on a third-party registry or configuration center."),(0,r.kt)("h3",{id:"appendix-3"},"Appendix 3:"),(0,r.kt)("p",null,"log_ Status=1 is defensive. It means that a global rollback request is received, but it is uncertain whether the local transaction of a transaction branch has been executed. At this time, a piece of data with the same branch ID is inserted in advance, and the inserted false data is successful. If the local transaction continues to execute, the master key conflict will be automatically rolled back."),(0,r.kt)("p",null,"If the insertion is unsuccessful, it indicates that the local transaction has been completed, and the undo data is taken out for reverse rollback."),(0,r.kt)("h3",{id:"appendix-4"},"Appendix 4:"),(0,r.kt)("p",null,"Whether to enable spring boot automatic assembly. If it is enabled, the integration of seata and spring boot will be automatically configured, including the automatic proxy of data source and initialization of GlobalTransactionScanner."),(0,r.kt)("p",null,"Note: New features of version 1.0 need to rely on seata spring boot starter."))}c.isMDXComponent=!0}}]);