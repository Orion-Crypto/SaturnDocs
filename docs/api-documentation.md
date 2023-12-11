---
id: api-documentation
title: API Documentation
sidebar_position: 10
---

# Saturn API

## API Documentation

Saturn uses a modern [GraphQL API](https://api.saturnnft.io/v2/graphql) for a simple developer experience implementing the interface on any front ends you build.

![API Documentation](/img/api-documentation/api-documentation.png)

## Saturn Integration Library

Reading raw API documentation can be daunting, and there are still elements on Cardano that need to be implemented such as Wallet Connect. With this, we have created a sample [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration) front end that fully implements the Saturn GraphQL API. You can copy and paste a large chunk of the code in this repository to quickly create any NFT / Smart Contact project you want!

![Saturn Integration Library](/img/api-documentation/saturn-integration-library.png)

### API Minting NFTs

Minting NFTs with our API is as simple as implementing the copy / pastable code in the [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration).

![Saturn Integration Home](/img/api-documentation/saturn-integration-home.png)

-   First, clone the V2 integration library
-   Next, follow the readme and run the commands to install the packages and start the dev server. Saturn uses the [pnpm package manager](https://pnpm.io/):

```
pnpm i
pnpm dev
```

-   Navigate to our local web servers: localhost:3000/
-   Click on the "Mint NFTs" button in the Navbar.

![Saturn Integration Mint](/img/api-documentation/saturn-integration-mint.png)

-   We need to get a preprod Saturn API key by following these steps:

1. Go to [Preprod Saturn](https://preprod.saturnnft.io)
2. Connect a preprod wallet (Nami is recommended you can switch to preprod in the settings).
3. Enter the studio and go to the "Settings Page" which is the gear icon on the left hand sidebar.
4. Click on the "Add API Key" button. Make sure to save this key as you will not be able to view it again (**Note**: the key in the image is revoked)

![Saturn Integration API Key](/img/api-documentation/saturn-api-key.png)

-   After we have our API Key, paste it into the Saturn V2 Integration "Mint NFTs" page, connect your wallet, and press the "Mint NFT" button.
-   This will have us execute 2 transactions, 1 to deploy the minting smart contract on the blockchain and 1 right after to mint the NFT.
-   **Note**: when you mint your project, you only need to deploy the smart contract once and you can do so in the Saturn app. You do not need to deploy the contract on chain multiple times.

Here is the code for the 2 graphQL mutations required to **Create an NFT Minting Transaction** and to **Submit an NFT Minting Transaction**:

```
//---------------------------------------------------------------------------------------------------//
// Create and Submit NFT Transaction Functions
//---------------------------------------------------------------------------------------------------//
export const mutateCreateNFTMintBurnUpdateTransaction = async (input: CreateNFTMintBurnUpdateTransactionInput) => {
    const parameters = { input: input };
    v2GraphQLClient.setHeaders(await getGraphQLHeaders());
    const response: any = await v2GraphQLClient.request(
        gql`
            mutation CreateNFTMintBurnUpdateTransaction($input: CreateNFTMintBurnUpdateTransactionInput!) {
                createNFTMintBurnUpdateTransaction(input: $input) {
                    successTransactions {
                        transactionId
                        hexTransaction
                    }
                    error {
                        message
                    }
                }
            }
        `,
        parameters
    );
    const createNFTMintBurnUpdateTransactionPayload: CreateNFTMintBurnUpdateTransactionPayload =
        response?.createNFTMintBurnUpdateTransaction || {};
    return createNFTMintBurnUpdateTransactionPayload;
};

export const mutateSubmitNFTMintBurnUpdateTransaction = async (input: SubmitNFTMintBurnUpdateTransactionInput) => {
    const parameters = { input: input };
    v2GraphQLClient.setHeaders(await getGraphQLHeaders());
    const response: any = await v2GraphQLClient.request(
        gql`
            mutation SubmitNFTMintBurnUpdateTransaction($input: SubmitNFTMintBurnUpdateTransactionInput!) {
                submitNFTMintBurnUpdateTransaction(input: $input) {
                    transactionIds
                    error {
                        message
                    }
                }
            }
        `,
        parameters
    );
    const submitNFTMintBurnUpdateTransactionPayload: SubmitNFTMintBurnUpdateTransactionPayload =
        response?.submitNFTMintBurnUpdateTransaction || {};
    return submitNFTMintBurnUpdateTransactionPayload;
};
//---------------------------------------------------------------------------------------------------//
```

### API Upgrading NFTs

After minting an NFT, now we want to upgrade the NFT. Make sure to check the console for the Saturn NFT Id that we just minted. Take that NFT Id along with the API Key and navigate to the Upgrade NFTs page.

![Saturn Integration Upgrade](/img/api-documentation/saturn-integration-upgrade.png)

Input the API Key as well as the NFT Id, click "Upgrade NFT" and you will be asked to sign an upgrade transaction! Congrats we have minted and upgraded an NFT!

The graphQL mutations that allow for minting the NFTs are the same for updating the NFTs to allow for composable transactions. This code is copy and pastable from the integration library so you can customize any type of minting logic you like.

You can even create complex gamification and crafting systems by combing Token Project and NFT Project transactions together with the APIs!

## Discord Server

If you have any further questions, or need support with the [API Documentation](https://api.saturnnft.io/v2/graphql) or the [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration), we have the [Saturn Discord Server](https://discord.gg/NvVNfQmPjp) to ask any questions that you have!
