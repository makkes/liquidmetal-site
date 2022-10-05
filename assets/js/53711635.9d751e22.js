"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(y,a(a({ref:t},s),{},{components:n})):o.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={title:"Start Here"},a="Welcome!",c={unversionedId:"community/contributing/welcome",id:"community/contributing/welcome",title:"Start Here",description:"Are you looking to contribute to an interesting a challenging project at",source:"@site/docs/community/contributing/welcome.md",sourceDirName:"community/contributing",slug:"/community/contributing/welcome",permalink:"/site/docs/community/contributing/welcome",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/community/contributing/welcome.md",tags:[],version:"current",frontMatter:{title:"Start Here"},sidebar:"community",previous:{title:"Guide for Contributors",permalink:"/site/docs/category/guide-for-contributors"},next:{title:"What can I work on?",permalink:"/site/docs/community/contributing/choices"}},u={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Github account",id:"create-a-github-account",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:3},{value:"Create a GPG key",id:"create-a-gpg-key",level:3},{value:"Join Slack",id:"join-slack",level:3},{value:"Extras",id:"extras",level:2},{value:"Community Meetings",id:"community-meetings",level:3}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome"},"Welcome!"),(0,r.kt)("p",null,"Are you looking to contribute to an interesting a challenging project at\nthe bleeding edge of platform development? You have come to the right place!"),(0,r.kt)("p",null,"Liquid Metal \u2764\ufe0fs your contributions."),(0,r.kt)("p",null,"This guide will help you understand the overall organization of the Liquid Metal project,\nand direct you to the best places to get started contributing.\nYou'll be able to pick up issues, write code/words to fix them, and get your work\nreviewed and merged. There is something for everyone, and we hope you find some\nenjoyable challenges."),(0,r.kt)("p",null,"If you are new here, we recommend that you follow the steps on this page in order to become\ncomfortable working with us."),(0,r.kt)("p",null,"Reading docs is often tedious, so we'll put our most important contributing rule\nright at the start: ",(0,r.kt)("strong",{parentName:"p"},"Always be kind!")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Completing these steps will make your first contribution easier. We have checks on\nPRs to ensure you have complied with some of them."),(0,r.kt)("h3",{id:"create-a-github-account"},"Create a Github account"),(0,r.kt)("p",null,"All Liquid Metal components are hosted in Github.\nBefore you get started, you will need to ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/signup"},"signup")," for a GitHub user account."),(0,r.kt)("h3",{id:"code-of-conduct"},"Code of Conduct"),(0,r.kt)("p",null,"Please make sure to read and observe the ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/coc"},"Code of Conduct"),"."),(0,r.kt)("h3",{id:"create-a-gpg-key"},"Create a GPG key"),(0,r.kt)("p",null,"All commits to Liquid Metal repositories must be signed. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification"},"Create and associate"),"\na key with your account before you start work."),(0,r.kt)("h3",{id:"join-slack"},"Join Slack"),(0,r.kt)("p",null,"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://weave-community.slack.com/archives/C02KARWGR7S"},"Slack")," channel to let people know what you are working on."),(0,r.kt)("h2",{id:"extras"},"Extras"),(0,r.kt)("h3",{id:"community-meetings"},"Community Meetings"),(0,r.kt)("p",null,"We are in the process of setting up an open-invite community call on Wednesdays\nat 4pm UTC. Links will be posted here when they are ready and we encourage you\nto stop by and let us know what you are working on!"))}m.isMDXComponent=!0}}]);