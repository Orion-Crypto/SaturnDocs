---
sidebar_position: 1
---

# Stake Multiplier Page

The **Stake Project Multipliers** page is where you can assign multiplier values to your stake project depending on the trait of an NFT. 

![Stake Multipliers screen](/img/stake-projects/stake-multipliers-page/stake-multipliers-page-01.png)

There are two sections, **Staking NFT Multiplier Rules**, and **Pairing NFT Multiplier Rules**. 

## Staking NFT Multiplier Rules:

A stake multiplier rule enables you to add a **multiplier** depending on a particular **trait** of an NFT for your Stake project.

For example, let's assume you hold an "AdaBlobs" NFT. AdaBlobs have a trait called "Color". 

If you wanted to make blobs of a certain colors earn more, you would create a multiplier. 

If you wanted to make a blue blob earn 50% more staking rewards than blobs of other colors, then you would enter the policy Id of the adablobs NFT project, the name of the trait ("Color"), the value of the trait ("Blue"), and finally how much the earned tokens is to be multiplied. Since in our example we decided to have it earn 50% more than normal Adablob tokens (150%), we would put 1.5

![Stake Multipliers multiplier example](/img/stake-projects/stake-multipliers-page/stake-multipliers-page-02.png)

If our adablobs were earning 10 tokens a day from being staked, this means any adablob with the "Color" trait of "Blue" would be earning 15 tokens a day

**Warning**

Giving a project a multiplier on a trait means that it will now add all multipliers together and multiply the original amount by such. 

This means for a particular trait, if it matches nothing, it will come out with a multiplier of zero, meaning they will receive no tokens. 

So if you do choose a trait to have a multiplier, it is important to add all of the values of that trait to be accounted for, the value being 1 if there is no multiplier.

In our example below, we have decided that "Blue" should have a multiplier of 1.5 (for a 50% increase, or a total of 150%), and Black to have a multiplier of 2 (for twice the amount of tokens). All other multipliers are set to 1, so that it is simply the normal amount of tokens earned: (10) x 1, which equates to: 10 x 1 = 10

![Stake Multipliers completely filled out multiplier example](/img/stake-projects/stake-multipliers-page/stake-multipliers-page-03.png)

## Pairing NFT Multiplier Rules:

This system is a bit advanced, so we will just jump right in with an example. 

Let's assume my Stake project has two NFT policy id's associated with it that a person can stake with. 

Policy ID 1, the "AdaBlobs"

And PolicyID 2, the "BlobHats" (Making this up), with a policy id of "043d93dd99bf07bfc83dbed2986d19c73ea14731c006e902c620dd61" (again, making this up)
Say I wanted a system where, if you staked your "Adablob", and paired it with an "AdaHat", your Adablob will accumulate more tokens, depending on what kind of AdaHat it was paired with. 

Let's assume I wanted an adablob paired with an adahat with the trait "Type" equalling "Wizard hat" to accumulate twice the amount of normal tokens. 

Let's also assume that I wanted an adablob paired with an adahat with the trait "Type" equalling "Top Hat" to accumulate 50% more tokens than when simply staked alone. The below is what you would do. 

![Stake Multipliers completely filled out multiplier example](/img/stake-projects/stake-multipliers-page/stake-multipliers-page-04.png)

### Main Policy Id: 

This is the policy ID of the **main** nft you are creating a pairing rule for. In our example, it would be the AdaBlob

So in our example, if an adablob is staked, and paired with an AdaHat, and you claim your tokens (either through Claim or Unstake of the adablob), then you will get the adablob's normal distribution, multiplied by the multiplier that pairing with the adaHat gives. 

So if an adablob, staked for 1 day, is paired with the WizardHat (x2 multiplier), and I unstake or claim the adablob, I will get 20 tokens, since the daily tokens for an adablob are 10. This means 10 (daily tokens) x 1 (days staked) x 2 (adahat multiplier) = 20 tokens

### Pair Policy Id:

In our above example, this would be the "Adahat" nft policy ID. the **secondary** NFT that is to be paired with the main one. 

(Image circling pair policy id)

### Trait:
 
This is the trait that is on the **pair** nft, that you want to create a multiplier from. In our above example, it would be the "Color".

### Value:

The value is the value of the trait you are creating the multiplier for. In our above example, it would be the color "Blue" or "Black"

### Multiplier

This is the multiplier value of the rule. In our above example, it was 1.5 for blue, signifying a 50% increase (or total of 150%), and 2 for black (signifying earning twice the amount of rewards for this trait)

## Pairing NFTs:

"But how does one Pair NFTs?"

In order to pair an NFT with a partner NFT, both NFT's must be staked at the same time, and in the order by which they are to be paired. 

Say I have NFT-1, NFT-2, and NFT-3 as **Main** NFTs, and I want to pair them respectively with **Pair** NFTs: NFT-X, NFT-Y and NFT-Z. 

I could stake them as 3 separate transactions: 1 transaction staking NFT-1 and NFT-X, the second staking NFT-2 and NFT-Y, and the third staking NFT-3 and NFT-Z. 

This would have them paired with each other. 

But say I wanted to do the pairing all at once in one transaction? For this, it's a bit more complicated. 

The system will pair NFTs with multiplier pairs together based on the order they are sent in a list to the API. So if I wanted to do the above, I would do:

[NFT-1, NFT-2, NFT-3, NFT-X, NFT-Y, NFT-Z]

The system will then automatically pair NFT-1 (the first main NFT it encounters) with NFT-X (the first pair NFT it encounters).

It will then pair the next main NFT it encounters (NFT-2) with the next pair NFT it encounters (NFT-Y), and so on. 

## Notes:

If you claim/unstake the Main NFT and the Pair NFT at the same time, you will still get the multiplier applied. 

Adding a Pair Multiplier Rule does not affect the amount of daily tokens a person accumulates from their staked Pair NFT

For now, per stake project, you can only have **one** combination of Main and Pair Multiplier rule at a time. This means that, while you can have multiple multiplier-rules for the same combination of policy IDs (In our example the adablob policy id, and the adahat policy id), you cannot have any other combinations. 

So attempting to add another rule with a different pair policy id, or a different main policy id (or both) will not work if you already have a set of rules with a different main-parnter policy id combination.





