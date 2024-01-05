"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[68421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"Metrics Design",keywords:["Seata","Metrics"],description:"Seata Metrics"},o=void 0,l={unversionedId:"dev/seata-mertics",id:"version-v1.2/dev/seata-mertics",title:"Metrics Design",description:"Seata Metrics",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/dev/seata-mertics.md",sourceDirName:"dev",slug:"/dev/seata-mertics",permalink:"/docs/v1.2/dev/seata-mertics",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/dev/seata-mertics.md",tags:[],version:"v1.2",frontMatter:{title:"Metrics Design",keywords:["Seata","Metrics"],description:"Seata Metrics"},sidebar:"docs",previous:{title:"Transaction Coordinator(TC)",permalink:"/docs/v1.2/dev/domain/tc"},next:{title:"Version Upgrade Guide",permalink:"/docs/v1.2/ops/upgrade"}},s={},m=[{value:"Metrics",id:"metrics",level:3},{value:"Design Philosophy",id:"design-philosophy",level:4},{value:"Module Description",id:"module-description",level:4},{value:"How to Use",id:"how-to-use",level:4},{value:"Add Configuration",id:"add-configuration",level:5},{value:"Download and start Prometheus",id:"download-and-start-prometheus",level:5},{value:"View data output",id:"view-data-output",level:5},{value:"How to extend",id:"how-to-extend",level:4}],c={toc:m},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("h4",{id:"design-philosophy"},"Design Philosophy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Seata, as an integrated data consistency framework, will minimize the use of third-party dependencies to reduce the risk of conflicts in the Metrics module."),(0,r.kt)("li",{parentName:"ol"},"The Metrics module will strive for higher measurement performance and lower resource overhead, minimizing side effects when enabled."),(0,r.kt)("li",{parentName:"ol"},"When configuring, whether Metrics is activated and how data are published depend on the corresponding configuration; enabling configuration will automatically activate Metrics and publish measurement data to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus"},"Prometheus"),"."),(0,r.kt)("li",{parentName:"ol"},"Using Service Provider Interface (SPI) for loading extensions instead of Spring."),(0,r.kt)("li",{parentName:"ol"},"Initially, only core Transaction-related metrics will be published, and all other operational metrics will be gradually improved based on community needs.")),(0,r.kt)("h4",{id:"module-description"},"Module Description"),(0,r.kt)("p",null,"It consists of two core API modules, ",(0,r.kt)("inlineCode",{parentName:"p"},"seata-metrics-api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"seata-metrics-core"),", as well as N implementation modules such as ",(0,r.kt)("inlineCode",{parentName:"p"},"seata-metrics-registry-compact")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"seata-metrics-exporter-prometheus"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seata-metrics-api Module")),(0,r.kt)("p",null,"This module is the core of Metrics and is part of the Seata infrastructure, referenced by TC, TM, and RM. It ",(0,r.kt)("strong",{parentName:"p"},"does not contain any specific implementation code"),", but it only includes interface definitions, including:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Meter class interfaces: ",(0,r.kt)("inlineCode",{parentName:"li"},"Gauge"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Counter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Timer"),", etc."),(0,r.kt)("li",{parentName:"ol"},"Registry container interface ",(0,r.kt)("inlineCode",{parentName:"li"},"Registry")),(0,r.kt)("li",{parentName:"ol"},"Measurement publishing interface ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: There are many existing implementations of Metrics in the open-source community, such as"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Netflix/spectator"},"Netflix-Spectator")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dropwizard/metrics"},"Dropwizard-Metrics")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dubbo/dubbo-metrics"},"Dubbo-Metrics"),'\nSome of them are lightweight and agile, while others are heavy and powerful. Since they are also "implementations", they will not be included in ',(0,r.kt)("inlineCode",{parentName:"li"},"seata-metrics-api")," to avoid implementation binding."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seata-metrics-core Module")),(0,r.kt)("p",null,"This core module of Metrics organizes (loads) one Registry and N Exporters based on configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seata-metrics-registry-compact Module")),(0,r.kt)("p",null,"This is the default (built-in) Registry implementation we provide.Instead of using other open-source Metrics libraries, it provides lightweight implementations of four types of Meters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seata-metrics-exporter-prometheus Module")),(0,r.kt)("p",null,"This is the default Metrics implementation we provide. Without using other open-source Metrics implementations, it provides lightweight implementations of three types of Meters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Meter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,r.kt)("td",{parentName:"tr",align:null},"Single latest value meter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"Single accumulating meter, can increase or decrease")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Summary"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-measurement output counter, outputs ",(0,r.kt)("inlineCode",{parentName:"td"},"total"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"count"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"tps")," (total per second) with no units")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-measurement output timer, outputs ",(0,r.kt)("inlineCode",{parentName:"td"},"total"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"max"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"average"),", supports accumulation in microseconds")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"More complex meters such as Histogram may be added in the future. Histogram is a type of meter that locally aggregates 75th, 90th, 95th, 98th, 99th, 99.9th, etc., and is suitable for certain scenarios but requires more memory."),(0,r.kt)("li",{parentName:"ol"},"All meters inherit from Meter, and after executing the measure() method, all meters will generate 1 or N normalized Measurement results."))),(0,r.kt)("p",null,"It also implements an in-memory Registry and Prometheus Exporter to synchronize measurement data with Prometheus."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Different monitoring systems have different ways of collecting measurement data. For example, Zabbix supports pushing with zabbix-agent, while Prometheus recommends using prometheus-server ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/pushing/"},"pulling"),". Similarly, data exchange protocols are also different, so adaptation is often needed one by one.")),(0,r.kt)("h4",{id:"how-to-use"},"How to Use"),(0,r.kt)("h5",{id:"add-configuration"},"Add Configuration"),(0,r.kt)("p",null,"If you need to enable TC Metrics, you need to add configuration items in its configuration file:"),(0,r.kt)("p",null,"Take file.conf for example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'## metrics settings\nmetrics {\n  enabled = true\n  registryType = "compact"\n  # multi exporters use comma divided\n  exporterList = "prometheus"\n  exporterPrometheusPort = 9898\n}\n')),(0,r.kt)("p",null,"Or You can use application.yaml for versions above 1.5.0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  metrics:\n    enabled: true\n    registryType: compact\n    exporterList: prometheus\n    exporterPrometheusPort: 9898\n")),(0,r.kt)("p",null,"Or You can also use a third-party configuration center such as nacos, apollo, etc."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/config-center"},"Please refer to here")," to upload the seata metrics configuration items to the corresponding configuration center, or open the corresponding configuration center console for manually adding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"metrics.enabled=true\nmetrics.registryType=compact\nmetrics.exporterList=prometheus\nmetrics.exporterPrometheusPort=9898\n")),(0,r.kt)("p",null,"After starting TC, you can get the text format data of Metrics on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://tc-server-ip:9898/metrics"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: Port ",(0,r.kt)("inlineCode",{parentName:"p"},"9898")," is used by default, and the list of ports registered by Prometheus ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/wiki/Default-port-allocations"},"can be visited here"),". If you want to change this port, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics.exporter.prometheus.port")," to modify the configuration.")),(0,r.kt)("h5",{id:"download-and-start-prometheus"},"Download and start Prometheus"),(0,r.kt)("p",null,"After the download is complete, modify the Prometheus configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.yml"),", and add an item to grab Seata's measurement data in ",(0,r.kt)("inlineCode",{parentName:"p"},"scrape_configs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n   # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n   - job_name: 'prometheus'\n\n     # metrics_path defaults to '/metrics'\n     # scheme defaults to 'http'.\n\n     static_configs:\n     - targets: ['localhost:9090']\n\n   - job_name: 'seata'\n\n     # metrics_path defaults to '/metrics'\n     # scheme defaults to 'http'.\n\n     static_configs:\n     - targets: ['tc-server-ip:9898']\n")),(0,r.kt)("h5",{id:"view-data-output"},"View data output"),(0,r.kt)("p",null,"It is recommended to combine the configuration ","[Grafana]"," (",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/visualization/grafana/"},"https://prometheus.io/docs/visualization/grafana/"),") to obtain better query results. The initial Metrics exported by Seata include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TC :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc,meter=counter,status=active/committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of currently active/committed/rollback transactions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc, meter=summary, statistic=count, status=committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of transactions committed/rolled back in the current cycle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc,meter=summary,statistic=tps,status=committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction TPS(transaction per second) committed/rolled back in the current cycle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc, meter=timer, statistic=total, status=committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of time-consuming transactions committed/rolled back in the current cycle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc, meter=timer, statistic=count, status=committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of transactions committed/rolled back in the current cycle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc, meter=timer, statistic=average, status=committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"The average transaction time spent on committing/rolling back in the current cycle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seata.transaction(role=tc, meter=timer, statistic=max, status=committed/rollback)"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time-consuming transaction committed/rolled back in the current cycle")))),(0,r.kt)("p",null,"Hint: the values of seata.transaction(role=tc, meter=summary, statistic=count, status=committed/rollback) and seata.transaction(role=tc, meter=timer, statistic=count, status=committed/rollback) may be the same, but they are derived from two different metrics."),(0,r.kt)("p",null,"-TM:"),(0,r.kt)("p",null,"TM will be implemented later, including:\nseata.transaction(role=tm,name={GlobalTransactionalName},meter=counter,status=active/committed/rollback) : Use GlobalTransactionalName as the dimension to distinguish the status of different Transactional."),(0,r.kt)("p",null,"-RM:"),(0,r.kt)("p",null,"RM will be implemented later, including:\nseata.transaction(role=rm, name={BranchTransactionalName}, mode=at/mt, meter=counter, status=active/committed/rollback): Use BranchTransactionalName as the dimension and AT/MT dimension to distinguish the transactional status of different branches."),(0,r.kt)("h4",{id:"how-to-extend"},"How to extend"),(0,r.kt)("p",null,"If there are any of the following situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You do not use Prometheus as the operation and maintenance monitoring system, but you want to integrate Seata's Metrics data into Dashboard;"),(0,r.kt)("li",{parentName:"ol"},"You need more complex and powerful metric types, which already exist in other Metrics implementation libraries, and hope to integrate these third-party dependencies for direct use;"),(0,r.kt)("li",{parentName:"ol"},"You need to change the Measurement output of the default Metric, such as adding a ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"sd")," (variance) to the Timer;"),(0,r.kt)("li",{parentName:"ol"},"...")),(0,r.kt)("p",null,"Then you need to extend the implementation of Metrics by yourself, please create a new module project such as ",(0,r.kt)("inlineCode",{parentName:"p"},"seata-metrics-xxxx"),", after that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For 1: you need to implement a new Exporter;"),(0,r.kt)("li",{parentName:"ul"},"For 2: You can change the default Registry implementation and return the third-party Meter implementation;"),(0,r.kt)("li",{parentName:"ul"},"For 3: You can modify the implementation of the corresponding Meter, including the Measurement list returned by the ",(0,r.kt)("inlineCode",{parentName:"li"},"measure()")," method.")))}p.isMDXComponent=!0}}]);