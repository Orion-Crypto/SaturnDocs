---
sidebar_position: 6
---

# Mint Settings

The mint settings page includes all of the settings you need to control how your mint will function. You can sell NFTs via the standard mint process or you can mint NFTs yourself into your wallet.

## Deploy Contract

Before minting can begin, you need to deploy the minting smart contract on the cardano blockchain. By clicking "Deploy Contract" you will be asked to sign a transaction that will put the smart contract on the blockchain at a specific transaction hash and transaction index so it can be found for future use.

![Mint Settings Contract Deploy](/img/nft-projects/create-nft-project/mint-settings/mint-settings-contract.png)

![Mint Settings Contract Deploy Transaction](/img/nft-projects/create-nft-project/mint-settings/mint-settings-contract-transaction.png)

After signing the transaction and putting the contract on the blockchain, your app will look like this:

![Mint Settings Page](/img/nft-projects/create-nft-project/mint-settings/mint-settings-page.png)

![Mint Settings Page Data](/img/nft-projects/create-nft-project/mint-settings/mint-settings-page-contract-data.png)

There are 2 Mint Types that we have available to us:

-   **Sell NFTs**: This optional has the settings for selling NFTs to your audience.
-   **Mint NFTs**: This option allows you to manually mint NFTs from your project.

## Sell NFTs

The Sell NFTs option allows you to adjust the end date for your mint, and allows you to start the mint by selecting the "I am ready to mint!" optional and clicking **Start Mint** after. It is important to note, if you have a royalty address and a royalty percent set in your "Project Data" page you will be asked to sign a transaction to put this royalty data on chain.

Below this box there is a **Smart Contract Settings** box that shows all the transaction details of your smart contract. You do not need to take any action in this section.

Below the **Smart Contract Settings** box is the **Website Mint Button** box. This is for if you want to put a button on your website that allows your audience to mint. You can select a variety of styles, then copy and paste the given javascript code into your website.

Now we will start our mint by signing a transaction to put the royalty information on chain.

![Mint Settings Start](/img/nft-projects/create-nft-project/mint-settings/mint-settings-start.png)

And congratulations we have started our NFT mint! You can have your supporters navigate to the link that is highlighted in yellow, and you will see a page that looks like this:

![Mint Settings Minter](/img/nft-projects/create-nft-project/mint-settings/mint-settings-minter.png)

More informtation about how your supporters can mint your NFTs will be highlighted in the [Mint NFTs](/docs/nft-projects/minting-nfts/mint-nfts.md) page

You can end and restart the mint at anytime by clicking the "End Mint" or the "Start Mint" buttons on the **Mint Settings** page respectively.

## Mint NFTs

Back to our **Mint Settings** page, if you select the "Mint NFTs" option, your page will now look like this:

![Mint Settings Individual Mints](/img/nft-projects/create-nft-project/mint-settings/mint-settings-individual-mints.png)

Here we can select NFTs to mint personally, lets click on "Blob #1", "Blob #2", and "Blob #3". We will then click on the yellow "Mint NFTs" button above them to attempt to mint the NFTs.

After clicking on the mint NFTs button, we get to our confirm screen. Clicking on the yellow Mint NFTs! button on the Confirm NFTs screen will open up a transaction.
Signing this transaction will mint our NFTs and give you the congratulations screen!

![Mint Settings Mints Select](/img/nft-projects/create-nft-project/mint-settings/mint-settings-individual-mints-select.png)

![Mint Settings Mints Confirm](/img/nft-projects/create-nft-project/mint-settings/mint-settings-individual-confirm.png)

![Mint Settings Mints Sign](/img/nft-projects/create-nft-project/mint-settings/mint-settings-individual-mints-sign.png)
![Mint Settings Mints Congrats](/img/nft-projects/create-nft-project/mint-settings/mint-settings-individual-mints-congrats.png)

Congratulations! You have minted your first NFTs on the Cardano Blockchain!

As a final note, the NFTs you have minted are the state of the art "CIP-68" format. That means these NFTs are updatable. If you navigate back to the NFTs page, you will see that Blob #1, Blob #2, and Blob #3 have a "Green Update" button now. We will go over how NFT updates work in the "Minting NFTs"

![Mint Settings Mints Congrats](/img/nft-projects/create-nft-project/mint-settings/mint-settings-individual-mints-update.png)
