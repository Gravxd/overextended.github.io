"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7330],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,y=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(4250),o=(n(9496),n(9613));const a={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/GetItem",id:"ox_inventory/Functions/Server/Inventory/GetItem",title:"GetItem",description:"Returns generic item data from the specified inventory, with the total count.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/GetItem.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/GetItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetItem",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/GetItem.md",tags:[],version:"current",lastUpdatedAt:1683377988,formattedLastUpdatedAt:"May 6, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"GetInventoryItems",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetInventoryItems"},next:{title:"GetItemCount",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetItemCount"}},u={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns ",(0,o.kt)("em",{parentName:"p"},"generic")," item data from the specified inventory, with the total count."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:GetItem(inv, item, metadata, returnsCount)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inv: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"item: ",(0,o.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Can be items array."))),(0,o.kt)("li",{parentName:"ul"},"metadata?: ",(0,o.kt)("inlineCode",{parentName:"li"},"any"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only returns the count of items that strictly match the given metadata."))),(0,o.kt)("li",{parentName:"ul"},"returnsCount?: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"returnsCount")," is set to true, the returned value will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," based on\nhow many times the item was found."),(0,o.kt)("p",null,"Otherwise returns the data related to the item ",(0,o.kt)("em",{parentName:"p"},"and")," its total count found in the inventory."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local item = ox_inventory:GetItem(source, \'water\', nil, false)\n\nprint(json.encode(item, {indent=true}))\n--[[\n    {\n        "consume": 1,\n        "count": 15,\n        "stack": true,\n        "name": "water",\n        "weight": 500,\n        "label": "Water",\n        "close": true\n    }\n]]\n')))}m.isMDXComponent=!0}}]);