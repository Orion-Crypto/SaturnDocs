---
sidebar_position: 1
---

# Stake Data Page

The **Stake data** page is where you interact with your newly created Stake Project

![Stake Data Page new project](/img/stake-projects/stake-data-page/stake-data-page-01.png)

The various tabs on the **Stake Project Page** allow you to edit parts of your new Stake Project.

The default tab, **Staking Data** allows you to edit the main aspects of your stake project.

## Staking Data:

### Stake project name: 
This will be the name for your stake project within the **Saturn Database**. 

![Stake Data Page Stake Project Name](/img/stake-projects/stake-data-page/stake-data-page-02.png)

### Staking NFT Policy Id:

This field is meant for the **policy id** of the **NFT project** you want to be able to stake with. 

A holder of the NFT of this policy id will be able to stake this NFT with the project, and earn daily rewards in doing so. 

The NFT never leaves the wallet, "Staking" the NFT just means the system puts a datum into the Smart-Contract associated with this project. 

For example, if you input the policy id of **4a4c17cc89b90f7239ce83f41e4f47005859870178f4e6815b1cd318**, which is the policy id of the **AdaBlobs** collection, then you would be able to "stake" your blob, and earn daily rewards by doing so. 

![Stake Data NFT Policy Id](/img/stake-projects/stake-data-page/stake-data-page-03.png)

## Token Data:

### Token Policy Id:

This is the policy ID of the **token** you want to distribute as rewards to people who stake with your project. 

For example, the token of The Ape Society, **$SOCIETY** has a Policy ID of: **25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c**, so you would enter that in here.

![Stake Data Token Policy Id](/img/stake-projects/stake-data-page/stake-data-page-04.png)

### Token Hex Asset Name:

This is the **Hex Asset Name** of the token you want to distribute as rewards to people who stake with your project. 

Be careful, it can show up differently in some wallets. The best way to find this is by typing in your token's policy ID into [Cardanoscan.io](https://cardanoscan.io/)

![Stake Data Token Policy Id in Cardanoscan.io](/img/stake-projects/stake-data-page/stake-data-page-05.png)

Once you do such, you click the fingerprint of the token you have chosen. 

![Stake Data Token token fingerprint Cardanoscan.io](/img/stake-projects/stake-data-page/stake-data-page-06.png)

If your token has more than one option (as in the case of a **CIP-68** Token), click the one that has more than one token in distribution

![Stake Data Token Click the one with more than one token in distribution](/img/stake-projects/stake-data-page/stake-data-page-07.png)

Once you have selected such, you can find the **hex asset name** here: 

![Stake Data Token Showing the Hex asset](/img/stake-projects/stake-data-page/stake-data-page-08.png)

So now we enter the hex asset name into the input field:

![Stake Data Token Entering in Hex Asset](/img/stake-projects/stake-data-page/stake-data-page-09.png)

### Total Supply:

This number represents the **total supply** of tokens you are putting into the stake contract when you add tokens to it. This will be the pool of tokens that are distributed to the 
users that stake to your stake project. In the below example, let's say we want to put **5 million** (5,000,000) tokens into the smart contract. This is the amount of tokens you will be putting in once you begin adding tokens to the contract (this will be described later in the tutorial)

![Stake Data Token total supply](/img/stake-projects/stake-data-page/stake-data-page-10.png)

### Daily Stake Tokens:

This is the amount of tokens an individual earns **per day** for staking one of their NFTs of the main stake project policy Id. 

For Example, the default value is set to 10 daily stake tokens, so each day a staked NFT will earn 10 tokens, which can be claimed at anytime.

### Token Decimals:

If you do not know what this is, leave it at 6. Each Token on the Cardano blockchain is made up of small **subunits**. 

For example, 1 "$SOCIETY" (the official Token of "The Ape Society" mentioned above) is actually composed of 1,000,000 sub-tokens. 

This allows the Cardano Blockchain to process values such as 0.5 tokens (500,000 sub-tokens) behind the scenes. 

The default value (especially with tokens created by **Saturn's Token Creator**) is 6, this reflects the power multiplier of how your tokens appear. for example, 1 Ada is comprised of 1,000,000 lovelaces, and thus, has a decimal of 6, due to 1 ada being 10^6 lovelaces. 

## Fee Data:

### Price:

This Input field details the **price** that a person pays (in Ada) to you (The project owner) each time an NFT is **claimed or unstaked** for the rewards. 

For instance, if I stake an NFT, wait a number of days, and then claim the tokens or unstake, if the Price is set to 1 Ada, then I will pay 1 Ada to the project owner in the transaction when claiming or unstaking the NFT to get the rewards

![Stake Data Fee example](/img/stake-projects/stake-data-page/stake-data-page-11.png)