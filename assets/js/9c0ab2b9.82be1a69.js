"use strict";(self.webpackChunksaturn_docs=self.webpackChunksaturn_docs||[]).push([[6829],{7246:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(1527),s=n(7279);const r={id:"cip-68",title:"CIP-68",sidebar_position:7},i="CIP-68",o={id:"cip-68",title:"CIP-68",description:"CIP-68 Brief History",source:"@site/docs/cip-68.md",sourceDirName:".",slug:"/cip-68",permalink:"/docs/cip-68",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"cip-68",title:"CIP-68",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Swap NFTs",permalink:"/docs/wormhole-projects/swap-nfts/"},next:{title:"API Documentation",permalink:"/docs/api-documentation"}},c={},d=[{value:"CIP-68 Brief History",id:"cip-68-brief-history",level:2},{value:"CIP-68 Platform",id:"cip-68-platform",level:2},{value:"CIP-68 Datum and Smart Contracts",id:"cip-68-datum-and-smart-contracts",level:2},{value:"CIP-68 Future and Conclusion",id:"cip-68-future-and-conclusion",level:2}];function l(t){const e={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"cip-68",children:"CIP-68"}),"\n",(0,a.jsx)(e.h2,{id:"cip-68-brief-history",children:"CIP-68 Brief History"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0068",children:(0,a.jsx)(e.strong,{children:"CIP-68"})})," is the modern standard for Cardano NFTs."]}),"\n",(0,a.jsxs)(e.p,{children:["Back before ",(0,a.jsx)(e.strong,{children:"CIP-68"})," and smart contracts were live on Cardano, Tokens and NFTs could actually be created using Cardano's Native Asset Standard that was introduced in the Mary Chain Upgrade in March 2021. This led to the creation of the ",(0,a.jsx)(e.a,{href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0025",children:(0,a.jsx)(e.strong,{children:"CIP-25"})})," NFT standard which was designed to simplify NFT metadata viewing on Cardano."]}),"\n",(0,a.jsxs)(e.p,{children:["However, after the introduction of Smart Contracts on Cardano, ",(0,a.jsx)(e.strong,{children:"CIP-25"})," had 3 key flaws:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Lack of programmability;"}),"\n",(0,a.jsx)(e.li,{children:"Difficult metadata update / evolution;"}),"\n",(0,a.jsx)(e.li,{children:"Non-inspectable metadata from within Plutus validators"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Effectively what this means is that CIP-25 cannot be upgraded, no programatic functionality can be implemented with them, and data within the NFTs cannot be read by smart contracts. Needless to say these are 3 massive flaws with the ",(0,a.jsx)(e.strong,{children:"CIP-25"})," standard and it is why ",(0,a.jsx)(e.a,{href:"https://saturnnft.io/",children:"Saturn"})," considers ",(0,a.jsx)(e.strong,{children:"CIP-25"})," a deprecated Cardano NFT standard and no longer supports it."]}),"\n",(0,a.jsx)(e.h2,{id:"cip-68-platform",children:"CIP-68 Platform"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"CIP-68 Moon Blobs Page",src:n(4574).Z+"",width:"1904",height:"926"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://saturnnft.io/",children:"Saturn"})," was the first NFT creation platform on the Cardano blockchain to rememdy the above issues by implementing ",(0,a.jsx)(e.strong,{children:"CIP-68"})," along with a sophisticated leveling and upgrade system. This was used in Februrary 2023 to create the free Moon Blobs which are the first 10k ",(0,a.jsx)(e.strong,{children:"CIP-68"})," NFT collection on Cardano."]}),"\n",(0,a.jsxs)(e.p,{children:["As of December 2023, Saturn is the only platform on Cardano to support ",(0,a.jsx)(e.strong,{children:"CIP-68"})," using secure smart contracts with a built in upgrade and leveling system. The largest projects in the ecosystem such as ",(0,a.jsx)(e.a,{href:"https://www.theapesociety.io/",children:"The Ape Society"})," all use Saturn and our Level / Upgrade system to substantially enhance user engagement with their NFT Projects."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"CIP-68 Upgrade Moon Blobs Page",src:n(3042).Z+"",width:"1898",height:"928"})}),"\n",(0,a.jsx)(e.h2,{id:"cip-68-datum-and-smart-contracts",children:"CIP-68 Datum and Smart Contracts"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"CIP-68"})," NFT data is upgradable and readable by smart contracts because it places the data in something called the ",(0,a.jsx)(e.strong,{children:"datum"}),". The ",(0,a.jsx)(e.strong,{children:"datum"})," is a extra piece of data on each Cardano UTXO (Unspent Transaction Output) that can be used as control logic in smart contracts."]}),"\n",(0,a.jsxs)(e.p,{children:["Because ",(0,a.jsx)(e.strong,{children:"CIP-68"})," NFT data is located in the ",(0,a.jsx)(e.strong,{children:"datum"}),", it is explicitly readable and changable by smart contracts designed to update this data. Where as ",(0,a.jsx)(e.strong,{children:"CIP-25"})," has metadata in the transaction metadata field, which is not on the UTXO and thus cannot be read by smart contracts."]}),"\n",(0,a.jsxs)(e.p,{children:["Saturn comes built in with all smart contracts and systems needed to take full advantage of the ",(0,a.jsx)(e.strong,{children:"CIP-68"})," standard. All of our contracts leverage the brand new ",(0,a.jsx)(e.a,{href:"https://aiken-lang.org/",children:"Aiken"})," programming language on Cardano. Aiken allows for maximially efficient and fast smart contract transaction execution which enables users to execute hundreds of update transactions at once."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"CIP-68 Aiken Contracts",src:n(9402).Z+"",width:"1299",height:"931"})}),"\n",(0,a.jsx)(e.h2,{id:"cip-68-future-and-conclusion",children:"CIP-68 Future and Conclusion"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"CIP-68"})," is the optimal NFT standard on Cardano allowing for infinitely complex systems to be created that rival even ETH functionality. Leveraging ",(0,a.jsx)(e.strong,{children:"CIP-68"}),", ",(0,a.jsx)(e.a,{href:"https://saturnnft.io/",children:"Saturn"})," has also recently pioneered ",(0,a.jsx)(e.strong,{children:"Virtual Assets"})," on Cardano which are assets with extra smart contract features such as clawbacks that were only previously available on Ethereum."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"CIP-68"})," allows Cardano NFTs to gain the power of Ethereum NFTs while still having in-wallet native asset ownership of traditional Cardano NFTs. We are excited for the future of Cardano NFTs leveraging ",(0,a.jsx)(e.strong,{children:"CIP-68"}),"!!"]})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},9402:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/aiken-docs-9b8d81abc8d24b2ed2af1e477d908211.png"},4574:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/moon-blobs-8d15d9d53921af22990ef8c98a631722.png"},3042:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/upgrade-blobs-d63417c85a683dd14c584b1b47346dc0.png"},7279:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>i});var a=n(959);const s={},r=a.createContext(s);function i(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);