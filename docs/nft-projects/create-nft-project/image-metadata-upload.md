---
sidebar_position: 4
---

# Image / Metadata Upload

The **Image Upload** page allows you to bulk upload both images and metadata for your NFT Project. Note, this page also allows you to automatically generate images from layers! But we will go over that in another section.

![Upload Images Page](/img/nft-projects/create-nft-project/image-metadata-upload/upload-images-page.png)

![Upload Images Page 2](/img/nft-projects/create-nft-project/image-metadata-upload/upload-images-page-2.png)

## Uploading Metadata

We will start with uploading metadata as this is the faster of the 2 upload methods. Click on the button that says "Download Example Metadata". This will download a zip file with 30 **.json** files inside.

Unzip the zip file and the folder should look like this:

![Json Files](/img/nft-projects/create-nft-project/image-metadata-upload/json-files.png)

This will look slightly different on **Windows**, **Mac**, or **Linux** but you should 30 **.json** files.

Now inside the Saturn website, where it says "Upload NFT Metadata" click on the purple box with the words "Select .json files" inside. When that opens. Navigate to the 30 files, highlight them all and click "open" to upload them all!

After a few seconds you should see a success message!

![Upload Metadata Success](/img/nft-projects/create-nft-project/image-metadata-upload/upload-metadata-success.png)

## Reviewing Uploaded NFTs

Navigate back to the **NFTs** page and you will see that our project has filled with a series of Blob NFT images! It should look like this:

![Review Metadata Images](/img/nft-projects/create-nft-project/image-metadata-upload/review-images.png)

This is a more complete NFT project with 30 NFTs. This works because there was data in those .json files that correspond to data that will be filled in, in the Saturn app.

If we click on "Blob #1" we can see all of the data associated with the NFT. It should look like this (your policy id will be different):

![Edit Blob 1](/img/nft-projects/create-nft-project/image-metadata-upload/edit-blob-1.png)
![Edit Blob 2](/img/nft-projects/create-nft-project/image-metadata-upload/edit-blob-2.png)

## Editing and Reuploading Metadata

Lets edit some of the metadata files and reupload them so we can alter our NFTs a little bit.

Go to the "1.json" on your compute and open inside any text editor you would like. You should see a data format similar to this:

```
{
    "721": {
        "daa4cfb5a12065d6e65a8f9c83442fd21dd5e228bb39171b16028ccf": {
            "Blob1": {
                "name": "Blob #1",
                "Background": "Pink",
                "Wallet": "Eternl",
                "Social Media": "Discord",
                "Blob": "Glob",
                "Small Blob": "Peep",
                "image": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",
                "mediaType": "image/png",
                "files": [
                    {
                        "name": "Blob #1",
                        "src": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",
                        "mediaType": "image/png"
                    }
                ]
            }
        }
    }
}
```

Lets update this to change the "Blob" field value from "Glob" to "Mega Glob" and lets add a field that has a key of "Test" and a value of "True". It should look like this:

```
{
    "721": {
        "daa4cfb5a12065d6e65a8f9c83442fd21dd5e228bb39171b16028ccf": {
            "Blob1": {
                "name": "Blob #1",
                "Background": "Pink",
                "Wallet": "Eternl",
                "Social Media": "Discord",
                "Blob": "Mega Glob",
                "Small Blob": "Peep",
                "image": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",
                "mediaType": "image/png",
                "files": [
                    {
                        "name": "Blob #1",
                        "src": "ipfs://QmP7tPxw9kcnxPEVNS7NRJuyR7VVz9c4Zahxz3gN8LEtFM",
                        "mediaType": "image/png"
                    }
                ],
                "Test": "True"
            }
        }
    }
}
```

Lets say the 1.json file and go back to the "Upload Images" page on Saturn. Click on the "Select .json files" box again and lets upload the new 1.json file.

After it succeeds, go back to our Blob #1 and we should see this:

![Edit Changed Blob 1](/img/nft-projects/create-nft-project/image-metadata-upload/edit-changed-blob-1.png)
![Edit Changed Blob 2](/img/nft-projects/create-nft-project/image-metadata-upload/edit-changed-blob-2.png)

This data format can be used to edit all other NFTs and be used to add or remove various properties from each. Remember, you can download the metadata .json files for your entire project by going to the **NFTs** page, clicking **Show Adv**, and then clicking **Download Metadata**. These files can then be updated to bring the project back to where it was when you downloaded the metadata.

## Uploading Images

Saturn also allows you to upload images. Now you may have noticed that when you uploaded the metadata, images appeared! That is because the metadata has the special image URL that is required to display them known as an IPFS url. You don't need to know the specifics of how this works. Just know that uploading images to Saturn will upload them to IPFS.

Lets go back to the Upload Images page, click the "Download Example Images" on the left side, unzip the images, and upload them by clicking on the "Select images" box. Images are larger then .json files so it will be a bit slower. While uploading your screen should look like this:

![Upload Images Blob](/img/nft-projects/create-nft-project/image-metadata-upload/upload-images-blob.png)

The images we uploaded are the same ones in the metadata, so we won't notice any difference in our apps, but we can use this to upload new images or change images that we don't like!

Congratulations! Our NFT project is ready to start minting. The next section will cover everything you need to know in the "Mint Settings" page.
