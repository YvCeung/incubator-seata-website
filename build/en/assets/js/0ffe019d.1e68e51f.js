"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[83304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={title:"Seata AT Mode",keywords:["Seata","AT mode"],description:"Seata AT mode."},o="Seata AT mode",i={unversionedId:"dev/mode/at-mode",id:"version-v1.4/dev/mode/at-mode",title:"Seata AT Mode",description:"Seata AT mode.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/dev/mode/at-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/at-mode",permalink:"/en/docs/v1.4/dev/mode/at-mode",draft:!1,tags:[],version:"v1.4",frontMatter:{title:"Seata AT Mode",keywords:["Seata","AT mode"],description:"Seata AT mode."},sidebar:"docs",previous:{title:"isolation",permalink:"/en/docs/v1.4/user/appendix/isolation"},next:{title:"Seata TCC Mode",permalink:"/en/docs/v1.4/dev/mode/tcc-mode"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Overall mechanism",id:"overall-mechanism",level:2},{value:"Phase 1",id:"phase-1",level:2},{value:"Phase 2 - Rollback case",id:"phase-2---rollback-case",level:2},{value:"Phase 2 - Commit case",id:"phase-2---commit-case",level:2},{value:"Undo log table",id:"undo-log-table",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"seata-at-mode"},"Seata AT mode"),(0,l.kt)("h1",{id:"the-basic-idea"},"The basic idea"),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Relational databases that support local ACID transaction."),(0,l.kt)("li",{parentName:"ul"},"Java applications that access database via JDBC.")),(0,l.kt)("h2",{id:"overall-mechanism"},"Overall mechanism"),(0,l.kt)("p",null,"Evolution from the two phases commit protocol:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Phase 1\uff1acommit business data and rollback log in the same local transaction, then release local lock and connection resources."),(0,l.kt)("li",{parentName:"ul"},"Phase 2\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for commit case, do the work asynchronously and quickly."),(0,l.kt)("li",{parentName:"ul"},"for rollback case, do compensation, base on the rollback log created in the phase 1.")))),(0,l.kt)("h1",{id:"write-isolation"},"Write isolation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"global lock")," must be acquired before committing the local transaction of phase 1. "),(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("strong",{parentName:"li"},"global lock")," is not acquired, the local transaction should not be committed."),(0,l.kt)("li",{parentName:"ul"},"One transaction will try to acquire the ",(0,l.kt)("strong",{parentName:"li"},"global lock")," many times if it fails to, but there is a timeout, if it's timeout, rollback local transaction and release local lock as well. ")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("p",null,"Two transactions tx1 and tx2 are trying to update field m of table a. The original value of m is 1000."),(0,l.kt)("p",null,"tx1 starts first, begins a local transaction, acquires the local lock, do the update operation: m = 1000 - 100 = 900. tx1 must acquire the ",(0,l.kt)("strong",{parentName:"p"},"global lock")," before committing the local transaction, after that, commit local transaction and release local lock. "),(0,l.kt)("p",null,"next, tx2 begins local transaction, acquires local lock, do the update operation: m = 900 - 100 = 800. Before tx2 can commit local transaction, it must acquire the ",(0,l.kt)("strong",{parentName:"p"},"global lock"),", but the ",(0,l.kt)("strong",{parentName:"p"},"global lock")," may be hold by tx1, so tx2 will do retry. After tx1 does the global commit and releases the ",(0,l.kt)("strong",{parentName:"p"},"global lock"),", tx2 can acquire the ",(0,l.kt)("strong",{parentName:"p"},"global lock"),", then it can commit local transaction and release local lock."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Write-Isolation: Commit",src:a(64729).Z,width:"702",height:"521"})),(0,l.kt)("p",null,"See the figure above, tx1 does the global commit in phase 2 and release the ",(0,l.kt)("strong",{parentName:"p"},"global lock"),", tx2 acquires the ",(0,l.kt)("strong",{parentName:"p"},"global lock")," and commits local transaction."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Write-Isolation: Rollback",src:a(77689).Z,width:"718",height:"521"})),(0,l.kt)("p",null,"See the figure above, if tx1 wants to do the global rollback, it must acquire local lock to revert the update operation of phase 1."),(0,l.kt)("p",null,"However, now the local lock is held by tx2 which hopes to acquire the ",(0,l.kt)("strong",{parentName:"p"},"global lock"),", so tx1 fails to rollback, but it would try it many times until it's timeout for tx2 to acquire the ",(0,l.kt)("strong",{parentName:"p"},"global lock"),", then tx2 rollbacks local transaction and releases local lock, after that, tx1 can acquire the local lock, and do the branch rollback successfully."),(0,l.kt)("p",null,"Because the ",(0,l.kt)("strong",{parentName:"p"},"global lock")," is held by tx1 during the whole process, there isn't no problem of ",(0,l.kt)("strong",{parentName:"p"},"dirty write"),"."),(0,l.kt)("h1",{id:"read-isolation"},"Read isolation"),(0,l.kt)("p",null,"The isolation level of local database is ",(0,l.kt)("strong",{parentName:"p"},"read committed")," or above, so the default isolation level of the global transaction is ",(0,l.kt)("strong",{parentName:"p"},"read uncommitted"),"."),(0,l.kt)("p",null,"If it needs the isolation level of the global transaction is ",(0,l.kt)("strong",{parentName:"p"},"read committed"),", currently, Fescar implements it via SELECT FOR UPDATE statement."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Read Isolation: SELECT FOR UPDATE",src:a(43983).Z,width:"724",height:"521"})),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"global lock")," is be applied during the execution of SELECT FOR UPDATE statement, if the ",(0,l.kt)("strong",{parentName:"p"},"global lock")," is held by other transactions, the transaction will release local lock retry execute the SELECT FOR UPDATE statement. During the whole process, the query is blocked until the ",(0,l.kt)("strong",{parentName:"p"},"global lock")," is acquired, if the lock is acquired, it means the other global transaction has committed, so the isolation level of global transaction is ",(0,l.kt)("strong",{parentName:"p"},"read committed"),"."),(0,l.kt)("p",null,"For the performance consideration, Fescar only does proxy work for SELECT FOR UPDATE. For the general SELECT statement, do nothing."),(0,l.kt)("h1",{id:"work-process"},"Work process"),(0,l.kt)("p",null,"Take an example to illustrate it."),(0,l.kt)("p",null,"A business table:",(0,l.kt)("inlineCode",{parentName:"p"},"product")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Key"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint(20)"),(0,l.kt)("td",{parentName:"tr",align:null},"PRI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"since"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The sql of branch transaction in AT mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update product set name = 'GTS' where name = 'TXC';\n")),(0,l.kt)("h2",{id:"phase-1"},"Phase 1"),(0,l.kt)("p",null,"Process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Parse sql:  know the sql type is update operation, table name is product, the where condition is name = 'TXC' and so on."),(0,l.kt)("li",{parentName:"ol"},"Query the data before update(Named before image): In order to  locate the data that will be updated, generate a query statement by the where condition above.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select id, name, since from product where name = 'TXC';\n")),(0,l.kt)("p",null,'Got the "before image"\uff1a'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"TXC"),(0,l.kt)("td",{parentName:"tr",align:null},"2014")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Execute the update sql: update the record of name equals 'GTS'. "),(0,l.kt)("li",{parentName:"ol"},"Query the data after update(Named after image): locate the record by the ",(0,l.kt)("strong",{parentName:"li"},"primary key")," of image data before update.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select id, name, since from product where id = 1;\n")),(0,l.kt)("p",null,"Got the after image:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"GTS"),(0,l.kt)("td",{parentName:"tr",align:null},"2014")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Insert a rollback log: build the rollback log with image before and after, as well as SQL statement relelated information, then insert into table ",(0,l.kt)("inlineCode",{parentName:"li"},"UNDO_LOG")," .")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "branchId": 641789253,\n    "undoItems": [{\n        "afterImage": {\n            "rows": [{\n                "fields": [{\n                    "name": "id",\n                    "type": 4,\n                    "value": 1\n                }, {\n                    "name": "name",\n                    "type": 12,\n                    "value": "GTS"\n                }, {\n                    "name": "since",\n                    "type": 12,\n                    "value": "2014"\n                }]\n            }],\n            "tableName": "product"\n        },\n        "beforeImage": {\n            "rows": [{\n                "fields": [{\n                    "name": "id",\n                    "type": 4,\n                    "value": 1\n                }, {\n                    "name": "name",\n                    "type": 12,\n                    "value": "TXC"\n                }, {\n                    "name": "since",\n                    "type": 12,\n                    "value": "2014"\n                }]\n            }],\n            "tableName": "product"\n        },\n        "sqlType": "UPDATE"\n    }],\n    "xid": "xid:xxx"\n}\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Before local commit, the transaction submit an application to TC to acquire a ",(0,l.kt)("strong",{parentName:"li"},"global lock")," for the record whose primary key equals 1 in the table product. "),(0,l.kt)("li",{parentName:"ol"},"Commit local transaction: commit the update of PRODUCT table and the insert of UNDO_LOG table in the same local transaction."),(0,l.kt)("li",{parentName:"ol"},"Report the result of step 7 to TC.")),(0,l.kt)("h2",{id:"phase-2---rollback-case"},"Phase 2 - Rollback case"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"After receive the rollback request from TC, begin a local transaction, execute operation as following."),(0,l.kt)("li",{parentName:"ol"},"Retrieve the UNDO LOG by XID and Branch ID. "),(0,l.kt)("li",{parentName:"ol"},"Validate data: Compare the image data after update in UNDO LOG with current data, if there is difference, it means the data has been changed by operation out of current transaction, it should be handled in different policy, we will describe it detailedly in other document."),(0,l.kt)("li",{parentName:"ol"},"Generate rollback SQL statement base on before image in UNDO LOG and related information of the business SQL. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update product set name = 'TXC' where id = 1;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Commit local transaction, report the result of execution of local transaction(The rollback result of the Branch transaction) to TC.")),(0,l.kt)("h2",{id:"phase-2---commit-case"},"Phase 2 - Commit case"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"After receive the commit request from TC, put the request into a work queue, return success to TC immediately. "),(0,l.kt)("li",{parentName:"ol"},"During the phase of doing the asynchronous work in the queue, the UNDO LOGs are deleted in batch way.")),(0,l.kt)("h1",{id:"appendix"},"Appendix"),(0,l.kt)("h2",{id:"undo-log-table"},"Undo log table"),(0,l.kt)("p",null,"UNDO_LOG Table\uff1athere is a little bit difference on the data type for different databases."),(0,l.kt)("p",null,"For MySQL example:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch_id"),(0,l.kt)("td",{parentName:"tr",align:null},"bigint     PK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xid"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rollback_info"),(0,l.kt)("td",{parentName:"tr",align:null},"longblob")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_status"),(0,l.kt)("td",{parentName:"tr",align:null},"tinyint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_created"),(0,l.kt)("td",{parentName:"tr",align:null},"datetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_modified"),(0,l.kt)("td",{parentName:"tr",align:null},"datetime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ext"),(0,l.kt)("td",{parentName:"tr",align:null},"varchar(100)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'increment id',\n  `branch_id` bigint(20) NOT NULL COMMENT 'branch transaction id',\n  `xid` varchar(100) NOT NULL COMMENT 'global transaction id',\n  `context` varchar(128) NOT NULL COMMENT 'undo_log context,such as serialization',\n  `rollback_info` longblob NOT NULL COMMENT 'rollback info',\n  `log_status` int(11) NOT NULL COMMENT '0:normal status,1:defense status',\n  `log_created` datetime NOT NULL COMMENT 'create datetime',\n  `log_modified` datetime NOT NULL COMMENT 'modify datetime',\n  `ext` varchar(100) DEFAULT NULL COMMENT 'reserved field',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='AT transaction mode undo table';\n")))}p.isMDXComponent=!0},64729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/seata_at-1-96def0232a005cd851727d5e3d309e2e.png"},77689:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/seata_at-2-c7537b8cd8036580215240d037ea4278.png"},43983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/seata_at-3-f5d071f55ecde9189c4f2c0d9dec7f5d.png"}}]);