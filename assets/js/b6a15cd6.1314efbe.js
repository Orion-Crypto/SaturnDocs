"use strict";(self.webpackChunksaturn_docs=self.webpackChunksaturn_docs||[]).push([[3288],{666:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=t(1527),s=t(7279);const o={sidebar_position:5},i="Image / Metadata Upload",d={id:"nft-projects/create-nft-project/image-metadata-upload",title:"Image / Metadata Upload",description:"The Image Upload page allows you to bulk upload both images and metadata for your NFT Project. Note, this page also allows you to automatically generate images from layers! But we will go over that in another section.",source:"@site/docs/nft-projects/create-nft-project/image-metadata-upload.md",sourceDirName:"nft-projects/create-nft-project",slug:"/nft-projects/create-nft-project/image-metadata-upload",permalink:"/SaturnDocs/docs/nft-projects/create-nft-project/image-metadata-upload",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Whitelist",permalink:"/SaturnDocs/docs/nft-projects/create-nft-project/whitelist"},next:{title:"Mint Settings",permalink:"/SaturnDocs/docs/nft-projects/create-nft-project/mint-settings"}},l={},c=[{value:"Uploading Metadata",id:"uploading-metadata",level:2},{value:"Reviewing Uploaded NFTs",id:"reviewing-uploaded-nfts",level:2},{value:"Editing and Reuploading Metadata",id:"editing-and-reuploading-metadata",level:2},{value:"Uploading Images",id:"uploading-images",level:2}];function r(e){const a={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"image--metadata-upload",children:"Image / Metadata Upload"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.strong,{children:"Image Upload"})," page allows you to bulk upload both images and metadata for your NFT Project. Note, this page also allows you to automatically generate images from layers! But we will go over that in another section."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Upload Images Page",src:t(8).Z+"",width:"1900",height:"929"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Upload Images Page 2",src:t(1345).Z+"",width:"1903",height:"931"})}),"\n",(0,n.jsx)(a.h2,{id:"uploading-metadata",children:"Uploading Metadata"}),"\n",(0,n.jsxs)(a.p,{children:['We will start with uploading metadata as this is the faster of the 2 upload methods. Click on the button that says "Download Example Metadata". This will download a zip file with 30 ',(0,n.jsx)(a.strong,{children:".json"})," files inside."]}),"\n",(0,n.jsx)(a.p,{children:"Unzip the zip file and the folder should look like this:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Json Files",src:t(5789).Z+"",width:"1220",height:"617"})}),"\n",(0,n.jsxs)(a.p,{children:["This will look slightly different on ",(0,n.jsx)(a.strong,{children:"Windows"}),", ",(0,n.jsx)(a.strong,{children:"Mac"}),", or ",(0,n.jsx)(a.strong,{children:"Linux"})," but you should 30 ",(0,n.jsx)(a.strong,{children:".json"})," files."]}),"\n",(0,n.jsx)(a.p,{children:'Now inside the Saturn website, where it says "Upload NFT Metadata" click on the purple box with the words "Select .json files" inside. When that opens. Navigate to the 30 files, highlight them all and click "open" to upload them all!'}),"\n",(0,n.jsx)(a.p,{children:"After a few seconds you should see a success message!"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Upload Metadata Success",src:t(2841).Z+"",width:"1900",height:"929"})}),"\n",(0,n.jsx)(a.h2,{id:"reviewing-uploaded-nfts",children:"Reviewing Uploaded NFTs"}),"\n",(0,n.jsxs)(a.p,{children:["Navigate back to the ",(0,n.jsx)(a.strong,{children:"NFTs"})," page and you will see that our project has filled with a series of Blob NFT images! It should look like this:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Review Metadata Images",src:t(4647).Z+"",width:"1899",height:"930"})}),"\n",(0,n.jsx)(a.p,{children:"This is a more complete NFT project with 30 NFTs. This works because there was data in those .json files that correspond to data that will be filled in, in the Saturn app."}),"\n",(0,n.jsx)(a.p,{children:'If we click on "Blob #1" we can see all of the data associated with the NFT. It should look like this (your policy id will be different):'}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"Edit Blob 1",src:t(3197).Z+"",width:"1901",height:"929"}),"\n",(0,n.jsx)(a.img,{alt:"Edit Blob 2",src:t(9177).Z+"",width:"1895",height:"928"})]}),"\n",(0,n.jsx)(a.h2,{id:"editing-and-reuploading-metadata",children:"Editing and Reuploading Metadata"}),"\n",(0,n.jsx)(a.p,{children:"Lets edit some of the metadata files and reupload them so we can alter our NFTs a little bit."}),"\n",(0,n.jsx)(a.p,{children:'Go to the "1.json" on your compute and open inside any text editor you would like. You should see a data format similar to this:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n    "721": {\n        "daa4cfb5a12065d6e65a8f9c83442fd21dd5e228bb39171b16028ccf": {\n            "Blob1": {\n                "name": "Blob #1",\n                "Background": "Pink",\n                "Wallet": "Eternl",\n                "Social Media": "Discord",\n                "Blob": "Glob",\n                "Small Blob": "Peep",\n                "image": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",\n                "mediaType": "image/png",\n                "files": [\n                    {\n                        "name": "Blob #1",\n                        "src": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",\n                        "mediaType": "image/png"\n                    }\n                ]\n            }\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:'Lets update this to change the "Blob" field value from "Glob" to "Mega Glob" and lets add a field that has a key of "Test" and a value of "True". It should look like this:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n    "721": {\n        "daa4cfb5a12065d6e65a8f9c83442fd21dd5e228bb39171b16028ccf": {\n            "Blob1": {\n                "name": "Blob #1",\n                "Background": "Pink",\n                "Wallet": "Eternl",\n                "Social Media": "Discord",\n                "Blob": "Mega Glob",\n                "Small Blob": "Peep",\n                "image": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",\n                "mediaType": "image/png",\n                "files": [\n                    {\n                        "name": "Blob #1",\n                        "src": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",\n                        "mediaType": "image/png"\n                    }\n                ],\n                "Test": "True"\n            }\n        }\n    }\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:'Lets say the 1.json file and go back to the "Upload Images" page on Saturn. Click on the "Select .json files" box again and lets upload the new 1.json file.'}),"\n",(0,n.jsx)(a.p,{children:"After it succeeds, go back to our Blob #1 and we should see this:"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"Edit Changed Blob 1",src:t(6359).Z+"",width:"1901",height:"932"}),"\n",(0,n.jsx)(a.img,{alt:"Edit Changed Blob 2",src:t(9581).Z+"",width:"1901",height:"932"})]}),"\n",(0,n.jsxs)(a.p,{children:["This data format can be used to edit all other NFTs and be used to add or remove various properties from each. Remember, you can download the metadata .json files for your entire project by going to the ",(0,n.jsx)(a.strong,{children:"NFTs"})," page, clicking ",(0,n.jsx)(a.strong,{children:"Show Adv"}),", and then clicking ",(0,n.jsx)(a.strong,{children:"Download Metadata"}),". These files can then be updated to bring the project back to where it was when you downloaded the metadata."]}),"\n",(0,n.jsx)(a.h2,{id:"uploading-images",children:"Uploading Images"}),"\n",(0,n.jsx)(a.p,{children:"Saturn also allows you to upload images. Now you may have noticed that when you uploaded the metadata, images appeared! That is because the metadata has the special image URL that is required to display them known as an IPFS url. You don't need to know the specifics of how this works. Just know that uploading images to Saturn will upload them to IPFS."}),"\n",(0,n.jsx)(a.p,{children:'Lets go back to the Upload Images page, click the "Download Example Images" on the left side, unzip the images, and upload them by clicking on the "Select images" box. Images are larger then .json files so it will be a bit slower. While uploading your screen should look like this:'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Upload Images Blob",src:t(1120).Z+"",width:"1899",height:"931"})}),"\n",(0,n.jsx)(a.p,{children:"The images we uploaded are the same ones in the metadata, so we won't notice any difference in our apps, but we can use this to upload new images or change images that we don't like!"}),"\n",(0,n.jsx)(a.p,{children:'Congratulations! Our NFT project is ready to start minting. The next section will cover everything you need to know in the "Mint Settings" page.'})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},3197:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/edit-blob-1-44a879cfef400846cfeed000d5d6651a.png"},9177:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/edit-blob-2-67db4dc0ca1aed3820dbdeb41dd49e63.png"},6359:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/edit-changed-blob-1-40be048546cbc7baf002c2466f42b49c.png"},9581:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/edit-changed-blob-2-85c523f6b845fdb8fee23e5a81d5ee85.png"},5789:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/json-files-ab908f396177004c19885bcd78c855d7.png"},4647:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/review-images-859203d2a7b05faa7e3736a981a6544f.png"},1120:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-images-blob-6fa3c3b1c40bd9597afa8603435ee64a.png"},1345:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-images-page-2-b5ecce06a62f4c52e9f590926f6a1f63.png"},8:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-images-page-455fecebd90cc2c11995688fc2072d95.png"},2841:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-metadata-success-4d7dec7149a3917773d5aafc154acb87.png"},7279:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>i});var n=t(959);const s={},o=n.createContext(s);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);