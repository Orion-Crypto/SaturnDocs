---
sidebar_position: 2
---

# NFT Project Data

The **NFT Project Data** page allows you to update data related to the overall project:

-   Update the collection name.
-   Update the price per nft of your collection (in **Ada** or any **Cardano Native Asset**).
-   Updating the lock date / Policy Id for your collection.
-   Update the royalty data of your collection.

![NFT Project Data Page](/img/nft-projects/create-nft-project/nft-project-data/nft-project-data-page.png)

## Update Our NFT Project Data

Lets update our Collection Name to "Adorable Blobs" and change the price to 12 **Ada** per NFT.

![NFT Project Updated 1](/img/nft-projects/create-nft-project/nft-project-data/nft-project-data-page-updated-1.png)

Now lets update our lock date to be 1 year in the future and add our address as a royalty address and set the royalty percent to 5%. Your project data page should now look like this:

![NFT Project Updated 2](/img/nft-projects/create-nft-project/nft-project-data/nft-project-data-page-updated-2.png)

Save the changes and our data for our project is complete!

## Data Info

In this section we will highlight what each of these fields means for your NFT project.

-   **Collection Name**: This is your NFT Project's name and will be the name that appears on the various dapps in the Cardano ecosystem. This name will appear on your NFT Project's IP (Intellectual Property) Token that will exist on chain when the mint begins.

-   **Price**: This is the price per NFT a user will pay for each NFT that they mint. The default pricing is in **Ada** but you can also charge in other **Cardano Native Assets** such as a game token using the "Use Advanced Pricing" option. The "Allow Ada Payment" and "Allow Token Payment" options give the minter the ability to select the asset they want to pay in.

![Price Token Full Name](/img/nft-projects/create-nft-project/nft-project-data/price-token-full-name.png)

-   **Policy Id**: This is your NFT Project's Policy Id. All tokens within your project are grouped on the blockchain by this Policy Id. The Policy Id is calculated based on the lock date and a variety of other parameters.

-   **Lock Date**: The Lock Date is the date at which no more NFTs can be minted on this policy id, you can change this anytime before the smart contract that will mint the NFTs is deployed.

-   **Update Requires Project Owner**: This parameter within the "Show Advanced Options" under the Lock Date makes it so the owner of the NFT project must sign any transaction that updates an NFT after the NFT is minted.

-   **Update Requires NFT Owner**: This parameter within the "Show Advanced Options" under the Lock Date makes it so the owner of the individual NFT must sign any transaction that updates the NFT after the NFT is minted.

-   **Royalty Address**: The Royalty Address indicates which address royalties will go to on resale of the NFT. Royalties are crucial for artists so make sure to set the correct address with an appropriate royalty percent. This values can be updated after the project has started minting.

![Policy Id Data](/img/nft-projects/create-nft-project/nft-project-data/policy-id-data.png)
