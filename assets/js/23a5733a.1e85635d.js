"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7835],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(5443),r=n(3010),s=(n(9496),n(9613)),o=["components"],i={},l="Transaction",c={unversionedId:"oxmysql/Usage/transaction",id:"oxmysql/Usage/transaction",title:"Transaction",description:"Transactions",source:"@site/docs/oxmysql/Usage/transaction.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/transaction",permalink:"/docs/oxmysql/Usage/transaction",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/transaction.md",tags:[],version:"current",lastUpdatedAt:1656737977,formattedLastUpdatedAt:"7/2/2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Single",permalink:"/docs/oxmysql/Usage/single"},next:{title:"Update",permalink:"/docs/oxmysql/Usage/update"}},u={},m=[{value:"Transactions",id:"transactions",level:2},{value:"Specific Format",id:"specific-format",level:3},{value:"Usage",id:"usage",level:3},{value:"Lua",id:"lua",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Shared Format",id:"shared-format",level:3},{value:"Lua",id:"lua-1",level:4},{value:"JavaScript",id:"javascript-1",level:4},{value:"Transaction Isolation Level",id:"transaction-isolation-level",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transaction"},"Transaction"),(0,s.kt)("h2",{id:"transactions"},"Transactions"),(0,s.kt)("p",null,"A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),", which is the result of the transaction."),(0,s.kt)("h3",{id:"specific-format"},"Specific Format"),(0,s.kt)("p",null,"When using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Specific")," format you must pass one parameter to the oxmysql export. In this case, the ",(0,s.kt)("inlineCode",{parentName:"p"},"queries")," parameter contains your queries and the SQL variables unique to each query."),(0,s.kt)("p",null,"This is useful for transactions where the queries do not share many SQL variables."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("h4",{id:"lua"},"Lua"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local queries = {\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 1 } },\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 2 } }\n} -- NOTE, the 'values' tables can be named 'parameters' here for MySQL-Async compatibility.\n\n-- Async\n-- Alias: exports.oxmysql:transaction\n-- Alias: MySQL.Async.transaction\nMySQL.transaction(queries, function(result)\n    print(result)\nend)\n\n-- Sync\n-- Alias: exports.oxmysql:transaction_async\n-- Alias: MySQL.Sync.transaction\nlocal result = MySQL.transaction.await(queries)\nprint(result)\n")),(0,s.kt)("h4",{id:"javascript"},"JavaScript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const queries = [\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { someid = 1 } },\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { someid = 2 } }\n] // NOTE, the 'values' objects can be named 'parameters' here for MySQL-Async compatibility.\n\n// Async\nexports.oxmysql.transaction(queries, (result) => {\n    console.log(result)\n})\n\n// Sync\nconst result = await exports.oxmysql.transactionSync(queries)\nconsole.log(result)\n")),(0,s.kt)("h3",{id:"shared-format"},"Shared Format"),(0,s.kt)("p",null,"When using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Shared")," format you must pass two parameters to the oxmysql export. The ",(0,s.kt)("inlineCode",{parentName:"p"},"queries")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"parameters")," those queries will use.",(0,s.kt)("br",{parentName:"p"}),"\n","This is useful if your queries use the same SQL variables."),(0,s.kt)("h4",{id:"lua-1"},"Lua"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local queries = {\n    'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',\n    'SET `name` = :newname IN `test` WHERE `id` = :someid'\n}\n\nlocal parameters = { ['someid'] = 2, ['somename'] = 'John Doe', ['newname'] = 'John Notdoe' }\n\n-- Async\n-- Alias: exports.oxmysql:transaction\n-- Alias: MySQL.Async.transaction\nMySQL.transaction(queries, parameters, function(result)\n    print(result)\nend)\n\n-- Sync\n-- Alias: exports.oxmysql:transaction_async\n-- Alias: MySQL.Sync.transaction\nlocal result = MySQL.transaction.await(queries, parameters)\nprint(result)\n")),(0,s.kt)("h4",{id:"javascript-1"},"JavaScript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const queries = [\n    'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',\n    'SET `name` = :newname IN `test` WHERE `id` = :someid'\n]\n\nconst parameters = { someid = 2, somename = 'John Doe', newname = 'John Notdoe' }\n\n// Async\nexports.oxmysql.transaction(queries, parameters, (result) => {\n    console.log(result)\n})\n\n// Sync\nconst result = await exports.oxmysql.transactionSync(queries, parameters)\nconsole.log(result)\n")),(0,s.kt)("h2",{id:"transaction-isolation-level"},"Transaction Isolation Level"),(0,s.kt)("p",null,"This can be set through the convar ",(0,s.kt)("inlineCode",{parentName:"p"},"mysql_transaction_isolation_level")," which should be an integer ranging from ",(0,s.kt)("inlineCode",{parentName:"p"},"1-4"),". The default convar value set by oxmysql is ",(0,s.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Convar Value"),(0,s.kt)("th",{parentName:"tr",align:null},"Result"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"Repeatable Read")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"2"),(0,s.kt)("td",{parentName:"tr",align:null},"Read Committed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"3"),(0,s.kt)("td",{parentName:"tr",align:null},"Read Uncommitted")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"4"),(0,s.kt)("td",{parentName:"tr",align:null},"Serializable")))))}d.isMDXComponent=!0}}]);