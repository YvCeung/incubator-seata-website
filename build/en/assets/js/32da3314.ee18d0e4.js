"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[53177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(y,s(s({ref:n},c),{},{components:t})):a.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={hidden:!0,title:"Deploy Seata Server By Kubernetes",keywords:["kubernetes","ops"],description:"Deploy Seata Server By Kubernetes",author:"helloworlde",date:new Date("2022-07-23T00:00:00.000Z")},s="Deploy Seata Server By Kubernetes",i={unversionedId:"ops/deploy-by-kubernetes",id:"version-v1.7/ops/deploy-by-kubernetes",title:"Deploy Seata Server By Kubernetes",description:"Deploy Seata Server By Kubernetes",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/ops/deploy-by-kubernetes.md",sourceDirName:"ops",slug:"/ops/deploy-by-kubernetes",permalink:"/en/docs/ops/deploy-by-kubernetes",draft:!1,tags:[],version:"v1.7",frontMatter:{hidden:!0,title:"Deploy Seata Server By Kubernetes",keywords:["kubernetes","ops"],description:"Deploy Seata Server By Kubernetes",author:"helloworlde",date:"2022-07-23T00:00:00.000Z"},sidebar:"docs",previous:{title:"deploy-by-docker-compose",permalink:"/en/docs/ops/deploy-by-docker-compose"},next:{title:"Deploy Seata Server By Helm",permalink:"/en/docs/ops/deploy-by-helm"}},l={},p=[{value:"Last Updated",id:"last-updated",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Custom configuration",id:"custom-configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"Use specify configuration file",id:"use-specify-configuration-file",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-seata-server-by-kubernetes"},"Deploy Seata Server By Kubernetes"),(0,r.kt)("h3",{id:"last-updated"},"Last Updated"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2022.07.23 \u9002\u914d Seata 1.5.x \u589e\u52a0\u63a7\u5236\u53f0\u9ed8\u8ba4\u7aef\u53e37091\uff1bseata-sever \u57281.5.x \u4ee5\u4e0b\u7248\u672c\u8bfb\u53d6conf\u914d\u7f6e\u66f4\u6539\u4e3ayml\u914d\u7f6e\u6587\u4ef6\u3002")),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Create file ",(0,r.kt)("inlineCode",{parentName:"p"},"seata-server.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  type: NodePort\n  ports:\n    - port: 8091\n      nodePort: 30091\n      protocol: TCP\n      name: service\n    - port: 7091\n      nodePort: 30092\n      protocol: TCP\n      name: console\n  selector:\n    k8s-app: seata-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_PORT\n              value: "8091"\n            - name: STORE_MODE\n              value: file\n          ports:\n            - name: service\n              containerPort: 8091\n              protocol: TCP\n            - name: console\n              containerPort: 7091\n              protocol: TCP\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f seata-server.yaml\n")),(0,r.kt)("h2",{id:"custom-configuration"},"Custom configuration"),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"The environment is same with Docker, can reference ",(0,r.kt)("a",{parentName:"p",href:"./deploy-by-docker"},"Deploy Seata Server By Docker")),(0,r.kt)("h3",{id:"use-specify-configuration-file"},"Use specify configuration file"),(0,r.kt)("p",null,"Can specify configuration file by mount files or use ConfigMap, and then need specify environment ",(0,r.kt)("inlineCode",{parentName:"p"},"SEATA_CONFIG_NAME"),", the value need start with ",(0,r.kt)("inlineCode",{parentName:"p"},"file:"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"file:/root/seata-config/registry")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deployment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/seata-server/conf/\n          ports:\n            - name: service\n              containerPort: 8091\n              protocol: TCP\n            - name: console\n              containerPort: 7091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-server-config\n\n---\n1.5.x \u4ee5\u4e0b\u7248\u672c ConfigMap\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "127.0.0.1:8848"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "127.0.0.1:8848"\n        group = "SEATA_GROUP"\n      }\n    }\n\n---\n1.5.x \u7248\u672c ConfigMap\n---\n\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-server-config\ndata:\n  application.yml: |\n    server:\n      port: 7091\n    \n    spring:\n      application:\n        name: seata-server\n    \n    logging:\n      config: classpath:logback-spring.xml\n      file:\n        path: ${user.home}/logs/seata\n    \n    console:\n      user:\n        username: seata\n        password: seata\n    \n    seata:\n      config:\n        # support: nacos, consul, apollo, zk, etcd3\n        type: nacos\n        nacos:\n          server-addr: 127.0.0.1:8848\n          group: SEATA_GROUP\n          username: xxx\n          password: xxx\n          ##if use MSE Nacos with auth, mutex with username/password attribute\n          #access-key: ""\n          #secret-key: ""\n          data-id: seataServer.properties\n      registry:\n        # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n        type: nacos\n        nacos:\n          application: seata-server\n          server-addr: 127.0.0.1:8848\n          group: SEATA_GROUP\n          cluster: default\n          username: xxx\n          password: xxx\n          ##if use MSE Nacos with auth, mutex with username/password attribute\n          #access-key: ""\n          #secret-key: ""\n      store:\n        # support: file \u3001 db \u3001 redis\n        mode: db\n        db:\n          datasource: druid\n          db-type: mysql\n          driver-class-name: com.mysql.cj.jdbc.Driver\n          url: jdbc:mysql://xxx:3306/seata\n          user: xxx\n          password: xxx\n          min-conn: 5\n          max-conn: 100\n      security:\n        secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n        tokenValidityInMilliseconds: 1800000\n        ignore:\n          urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n')))}d.isMDXComponent=!0}}]);