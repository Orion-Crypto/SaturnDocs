---
id: cip-68
title: CIP-68
sidebar_position: 7
---

# CIP-68

## CIP-68 Brief History

[**CIP-68**](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0068) is the modern standard for Cardano NFTs. 

Back before **CIP-68** and smart contracts were live on Cardano, Tokens and NFTs could actually be created using Cardano's Native Asset Standard that was introduced in the Mary Chain Upgrade in March 2021. This led to the creation of the [**CIP-25**](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0025) NFT standard which was designed to simplify NFT metadata viewing on Cardano.

However, after the introduction of Smart Contracts on Cardano, **CIP-25** had 3 key flaws: 
 - Lack of programmability;
 - Difficult metadata update / evolution;
 - Non-inspectable metadata from within Plutus validators

Effectively what this means is that CIP-25 cannot be upgraded, no programatic functionality can be implemented with them, and data within the NFTs cannot be read by smart contracts. Needless to say these are 3 massive flaws with the **CIP-25** standard and it is why [Saturn](https://saturnnft.io/) considers **CIP-25** a deprecated Cardano NFT standard and no longer supports it.

## CIP-68 Platform

![CIP-68 Moon Blobs Page](/img/cip-68/moon-blobs.png)

[Saturn](https://saturnnft.io/) was the first NFT creation platform on the Cardano blockchain to rememdy the above issues by implementing **CIP-68** along with a sophisticated leveling and upgrade system. This was used in Februrary 2023 to create the free Moon Blobs which are the first 10k **CIP-68** NFT collection on Cardano.

As of December 2023, Saturn is the only platform on Cardano to support **CIP-68** using secure smart contracts with a built in upgrade and leveling system. The largest projects in the ecosystem such as [The Ape Society](https://www.theapesociety.io/) and [Jelly Cubes](https://blockinvestmentgroup.com/?uid=1669648397873x405895762844057600&tab=project) all use Saturn and our Level / Upgrade system to substantially enhance user engagement with their NFT Projects.

![CIP-68 Upgrade Moon Blobs Page](/img/cip-68/upgrade-blobs.png)

## CIP-68 Datum and Smart Contracts

**CIP-68** NFT data is upgradable and readable by smart contracts because it places the data in something called the **datum**. The **datum** is a extra piece of data on each Cardano UTXO (Unspent Transaction Output) that can be used as control logic in smart contracts. 

Because **CIP-68** NFT data is located in the **datum**, it is explicitly readable and changable by smart contracts designed to update this data. Where as **CIP-25** has metadata in the transaction metadata field, which is not on the UTXO and thus cannot be read by smart contracts.

Saturn comes built in with all smart contracts and systems needed to take full advantage of the **CIP-68** standard. All of our contracts leverage the brand new [Aiken](https://aiken-lang.org/) programming language on Cardano. Aiken allows for maximially efficient and fast smart contract transaction execution which enables users to execute hundreds of update transactions at once. 

![CIP-68 Aiken Contracts](/img/cip-68/aiken-docs.png)

## CIP-68 Future and Conclusion

**CIP-68** is the optimal NFT standard on Cardano allowing for infinitely complex systems to be created that rival even ETH functionality. Leveraging **CIP-68**, [Saturn](https://saturnnft.io/) has also recently pioneered **Virtual Assets** on Cardano which are assets with extra smart contract features such as clawbacks that were only previously available on Ethereum.

**CIP-68** allows Cardano NFTs to gain the power of Ethereum NFTs while still having in-wallet native asset ownership of traditional Cardano NFTs. We are excited for the future of Cardano NFTs leveraging **CIP-68**!!








