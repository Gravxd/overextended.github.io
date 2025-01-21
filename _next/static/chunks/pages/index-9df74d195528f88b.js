(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5850:function(e,t,r){"use strict";r.d(t,{Z:function(){return createReactComponent}});var s=r(5271),o=r(507),a=r.n(o),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&__defNormalProp(e,r,t[r]);if(d)for(var r of d(t))h.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>c(e,l(t)),__objRest=(e,t)=>{var r={};for(var s in e)p.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&d)for(var s of d(e))0>t.indexOf(s)&&h.call(e,s)&&(r[s]=e[s]);return r},createReactComponent=(e,t,r)=>{let o=(0,s.forwardRef)((t,o)=>{var{color:a="currentColor",size:i=24,stroke:c=2,children:l}=t,d=__objRest(t,["color","size","stroke","children"]);return(0,s.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:o},n),{width:i,height:i,stroke:a,strokeWidth:c,className:`tabler-icon tabler-icon-${e}`}),d),[...r.map(([e,t])=>(0,s.createElement)(e,t)),...l||[]])});return o.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},o.displayName=`${t}`,o}},2616:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3810)}])},3810:function(e,t,r){"use strict";r.r(t),r.d(t,{__toc:function(){return m},default:function(){return u}});var s=r(2676),o=r(2140),a=r(8745),n=r(5271),i=r(5850),c=(0,i.Z)("coffee","IconCoffee",[["path",{d:"M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1",key:"svg-0"}],["path",{d:"M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2",key:"svg-1"}],["path",{d:"M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2",key:"svg-2"}],["path",{d:"M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z",key:"svg-3"}],["path",{d:"M16.746 16.726a3 3 0 1 0 .252 -5.555",key:"svg-4"}]]),components_MemberLink=e=>{let{image:t,name:r,sponsor:o}=e;return(0,s.jsxs)("div",{className:"flex w-32 flex-col items-center justify-center gap-2",children:[(0,s.jsxs)("a",{href:"https://github.com/".concat(r),target:"_blank",className:"flex flex-col items-center gap-2",children:[(0,s.jsx)("p",{className:"text-sky-500 font-semibold",children:r}),(0,s.jsx)("img",{src:t,alt:"".concat(r,"-image"),className:"rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900"})]}),(0,s.jsx)("a",{href:o?"https://ko-fi.com/".concat(o):"",target:"_blank",className:"w-full",children:(0,s.jsxs)("button",{className:"flex w-full items-center justify-center gap-2 rounded-md p-2 ".concat(o?"text-sky-500 bg-sky-500/20 hover:bg-sky-500/30":"text-slate-500 bg-slate-500/20"),children:[(0,s.jsx)(c,{}),"Support"]})})]},r)};let l="overextendedMembers",d={thelindat:"thelindat",LukeWasTakenn:"lukewastaken",DokaDoka:"dokadoka"};async function FetchMembers(){let e=localStorage.getItem(l),t=e?JSON.parse(e):{},r=!t.timestamp||new Date().getTime()-t.timestamp>864e5;if(!r)return t;let s={};t.etag&&(s["If-None-Match"]=t.etag);let o=await fetch("https://api.github.com/orgs/overextended/members",{headers:s});return 304===o.status||(t.data=await o.json(),t.etag=o.headers.get("ETag"),t.timestamp=new Date().getTime(),localStorage.setItem(l,JSON.stringify(t)),console.log("fetched data and set cache (etag ".concat(t.etag,")"),t.timestamp)),t}var components_DisplayMembers=()=>{let[e,t]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>t(await FetchMembers()))()},[]),(null==e?void 0:e.data)?(0,s.jsx)("div",{className:"grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-4 gap-16",children:e.data.map(e=>{var t;return components_MemberLink({image:e.avatar_url,name:null!==(t=e.name)&&void 0!==t?t:e.login,sponsor:d[e.login]})})}):""},p=(0,i.Z)("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]),h=(0,i.Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),components_CreatorCode=e=>{let[t,r,o,a,i]=e,[c,l]=n.useState(!1);return(0,s.jsxs)("div",{className:"flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md",children:[(0,s.jsx)("a",{href:r,target:"_blank",className:"h-[150px] flex items-center justify-center bg-neutral-800 dark:hover:bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-900 rounded-none rounded-tl-lg rounded-tr-lg",children:(0,s.jsx)("img",{className:"self-center",width:"150",src:i,alt:t})}),(0,s.jsxs)("div",{className:"p-2 flex items-center justify-center flex-col gap-2",children:[(0,s.jsx)("p",{className:"font-bold text-lg line-clamp-1",children:t}),(0,s.jsxs)("p",{className:"text-sm",children:["Code: ",(0,s.jsx)("code",{className:"font-bold",children:o})," ",c?(0,s.jsx)("button",{children:(0,s.jsx)(h,{size:16})}):(0,s.jsx)("button",{onClick:function(){l(!0),navigator.clipboard.writeText(o).then(),setTimeout(()=>l(!1),1500)},children:(0,s.jsx)(p,{size:16})})]}),(0,s.jsxs)("p",{className:"text-sm self-end text-red-400 font-bold mt-4",children:[a,"% off"]})]})]},t)};let m=[{depth:2,value:"Our team",id:"our-team"},{depth:2,value:"Fivemanage",id:"fivemanage"},{depth:2,value:"Creator codes",id:"creator-codes"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",code:"code",ul:"ul",li:"li"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Overextended is a small group working to create open-source resources for FiveM, with a focus on quality, security, performance and stability.\nYou can find all of the official documentation for resources developed by the Overextended team on this website."}),"\n",(0,s.jsx)(t.p,{children:"If you feel like our documentation is lacking, please leat us know or suggest improvements by using the links in the sidebar."}),"\n",(0,s.jsx)(t.h2,{id:"our-team",children:"Our team"}),"\n",(0,s.jsxs)(t.p,{children:["We're a small team made up of both hobby and professional programmers. We enjoy being able to create and share ",(0,s.jsx)(t.a,{href:"https://opensource.org/osd",children:"free and open-source"})," resources, but it can often require considerable time and investment to maintain and support them."]}),"\n",(0,s.jsx)(t.p,{children:"Our team members volunteer to help keep things running smoothly; feel free to check out their work or show your appreciation by supporting them below."}),"\n",(0,s.jsx)(components_DisplayMembers,{}),"\n",(0,s.jsx)(t.h2,{id:"fivemanage",children:"Fivemanage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://fivemanage.com/?ref=overextended",children:"Fivemanage"})," is a cloud management service tailored for game servers, offering a range of features to facilitate easier management and administration of your FiveM server."]}),"\n",(0,s.jsx)(t.p,{children:"Their services includes a free plan with limited media storage space, along with several paid plans designed to accommodate larger servers requiring more extensive storage and logging capabilities."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://fivemanage.com/?ref=overextended",children:"Get started with Fivemanage"})," and use code ",(0,s.jsx)(t.code,{children:"OX10"})," for 10% off your subscription - forever!"]}),"\n",(0,s.jsx)(t.h2,{id:"creator-codes",children:"Creator codes"}),"\n",(0,s.jsx)(t.p,{children:"Creator codes allow Tebex stores to share a percentage of a purchase with us, while giving a discount to the customer. We make these deals to advertise trusted creators who meet our criteria."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Resources are highly configurable or, preferably, source-available."}),"\n",(0,s.jsx)(t.li,{children:"We trust that customers will be given assistance."}),"\n",(0,s.jsx)(t.li,{children:"The creator is a known member of our community."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["More information about these creators is available in our ",(0,s.jsx)(t.a,{href:"https://discord.com/channels/813030955598086174/1028912864389496903",children:"Discord"}),"."]}),"\n",(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-4 gap-4",children:[["Andyyy","https://andyyy.tebex.io/","ox20",20,"/static/creators/andy.png"],["Berkie's Workshop","https://berkie.tebex.io/","ox10",10,"/static/creators/berkie.png"],["Dolu Mods","https://dolu.tebex.io/","overextended",25,"/static/creators/dolu.png"],["Electus Scripts","https://store.electus-scripts.com/","ox10",10,"/static/creators/electus.png"],["Loaf Scripts","https://store.loaf-scripts.com/","ox10",10,"/static/creators/loaf.png"],["OT Studios","https://store.otstudios.net/ox","ox10",10,"/static/creators/otstudios.png"],["Randolio Scripts","https://randolio.tebex.io/","OVEREXTENDED",20,"/static/creators/randolio.png"],["rcore","https://store.rcore.cz/","ox10",10,"/static/creators/rcore.png"],["Artwork Inventory","https://artwork-inventory.tebex.io/","ox10",10,"/static/creators/artworkInventory.gif"],["Renewed Scripts","https://renewed.tebex.io/ox","ox15",15,"/static/creators/renewed.png"],["Wasabi Scripts","https://store.wasabiscripts.com/ox","OX20",20,"/static/creators/wasabi.png"],["Three Amigos Modding","https://threeamigos.shop/","overextended",10,"/static/creators/tam.png"],["RAHE Development","https://rahe.tebex.io/","ox10",10,"/static/creators/rahe.png"],["CeebStudio","https://store.ceeb.studio/","ox10",10,"/static/creators/ceeb.png"],["Ehbw Scripts","https://ehbw.tebex.io/","ox10",10,"/static/creators/ehbw.png"]].sort((e,t)=>e[0].localeCompare(t[0])).map(e=>components_CreatorCode(e))}),"\n",(0,s.jsx)(t.p,{children:'You can apply a creator code at checkout under "Support A Creator".'})]})}var u=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/index.mdx",route:"/",frontMatter:{title:"Introduction"},timestamp:1737470198e3,title:"Introduction",headings:m},pageNextRoute:"/"})},4049:function(e,t,r){"use strict";var s=r(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,r,o,a,n){if(n!==s){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,t,r){e.exports=r(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=2616)}),_N_E=e.O()}]);