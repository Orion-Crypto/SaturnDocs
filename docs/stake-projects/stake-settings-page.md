---
sidebar_position: 5
---

# Stake Settings page

The **Stake Settings** page is where one can deploy the **Smart Contract** for their stake project, and where one can **add the tokens** from their wallet into the deployed stake contract:

![Stake Settings page](/img/stake-projects/stake-settings-page/stake-settings-page-01.png)

Note: Before one can deploy the **smart contract** for their project, they must contact us at the Saturn Discord to discuss with us payment for contract deployment for their project. 

## Step 1: Deploy Contract:

The **Deploy Contract** button is used to deploy the **Smart Contract** for your stake project. Pressing this button will cause a transaction to appear that, if signed, will deploy the smart contract into the blockchain.

![Stake Settings page](/img/stake-projects/stake-settings-page/stake-settings-page-02.png)

Once the Smart Contract has been deployed, you can begin staking to it with the approved NFTs

Note: Even after the smart contract has been deployed, you can still add or remove **policies** and **multipliers**. 

## Step 2: Add Tokens to Contract:

This page displays all of the statistics for your stake project from the Stake Data page. This is meant to only show information and **not** to be edited. 

### Required Token Policy ID/Required Token Hex Asset Name:

These two values display the **token policy Id** and **token asset names** that were assigned from Stake Data

### Required Amount:

This is the **amount** of tokens the smart contract is expecting to be filled with (the pot of tokens to be distributed to those who stake their NFTs).

### Daily Stake Tokens:

This is the **amount** of tokens an NFT of the main policy id will earn for **each day** it is staked. 

### Add Tokens

Pressing this button will cause a transaction to be generated that, if signed, will put the **Required Amount**'s worth of "Required Token Policy Id/Required Token Hex Asset Name" tokens into the smart contract. 

Signing the transaction that appears will take the tokens from your wallet, and place them into the smart contract, where they will be distributed as rewards to those who stake their NFTs.

## Important Notice, Staking NFT's and Transaction Size:

Unlike most staking systems, Saturn uses **datums** placed on the Cardano Blockchain to track the staked NFTs. Because of this, transactions that place these datums can only hold so many inputs at once, and thus there is a set limit to how many NFT's can be **Staked**, **Unstaked**, and **Claimed** at once. 

The suggested limit for **Staking** and **Unstaking** NFT's is **20** at a time, for **Claim** (which simply Unstakes an NFT and then Stakes it again in the same transaction), the suggested limit is **10** NFT's at a time.

## Implementation:

You can find everything you need for implementation of the saturn staking system (along with examples of the various API calls) in the [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration).



