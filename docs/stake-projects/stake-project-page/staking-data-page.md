---
sidebar_position: 1
---

# Stake Project Page

The **Stake Projects** page is the first stop when creating your Stake project. Here you can create new projects or delete old ones.

## User Interface

The stake project page is where you interact with your newly created Stake Project

(Picture of empty Stake project page)

The various Tabs on the Stake Project Page allow you to edit parts of your new Stake Project

[Stakeing Data]

This tab allows you to edit the main aspects of your stake project. 

Stake project name: 

This will be the name for your Stake Project within the Saturn Database. 

(Picture of it filled out)

Staking NFT Policy Id:

This field is meant for the policy id of the NFT project you want to be able to stake with. 

A holder of the NFT of this policy id will be able to stake this NFT with the project, and earn daily rewards in doing so. 

The NFT never leaves the wallet, "Staking" the NFT just means the system puts a datum into the SmartContract associated with this project. 

i.e. if you input the policy id of "123", which is the policy id of the AdaBlobs collection, then you would be able to "stake" your blob, and earn daily rewards by doing so. 

(Picture of such)

[[Token Data]]

Token Policy Id:

This is the policy ID of the token you want to distribute as rewards to people who stake with your project. 

for example, the token of The Ape Society, "$Society" ($SOC) has a Policy ID of: "25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c"

(Picture)

Token Hex Asset Name:

This is the Hex Asset Name of the token you want to distribute as rewards to people who stake with your project. 

Be careful, it can show up differently in some wallets. The best way to find this is by typing in your token's policy ID into "Cardanoscan.com"

(Picture of such)

Once you do so, select the one that has more than one token in distribution

(Picture of such)

Total Supply:

This number represents the total supply of tokens you are putting into the stake contract when you add tokens to it. This will be the pool of tokens that are distributed to the 
users that stake to your Stake Project. In the below example, I want to put 5 million (5,000,000) tokens into the smart contract.

(Pic)

Daily Stake Tokens:

This is the amount of tokens an individual earns per day for staking one of their NFTs of the main Stake Project Policy Id. 

Example, if this is set to 10, then each day a staked NFT will earn 10 tokens, which can be claimed at anytime. 

Token Decimals:

If you do not know what this is, leave it at 6. Each Token on the Cardano blockchain is made up of small "subunits" 

For example, 1 "Society" (the official Token of "The Ape Society" mentioned above) is actually composed of 1,000,000 sub-tokens. 

This allows the Cardano Blockchain to process values such as 0.5 tokens (500,000 sub-tokens) behind the scenes. 

The default value (especially with tokens created by Saturn) is 6, but if your not sure how many sub-tokens your token is created with, 

Check the token on Cardanoscan and divide it by what it appears as there vs what it appears as in your wallet

(Image example)

[[Fee Data]]

Price:

This Input field details the price that a person pays (in Ada) to you (The project owner) each time an NFT is claimed for the rewards. 

For instance, if I stake an NFT, wait a number of days, and then unstake, if the Price is set to 1 Ada, then I will pay 1 Ada to the project owner in the transaction when unstaking the NFT