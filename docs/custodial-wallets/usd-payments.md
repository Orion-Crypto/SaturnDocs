---
sidebar_position: 5
---

# USD Payments

Using custodial wallets, USD payments (and payments with other cryptocurrencies) are supported!

For example, if minting an NFT, you can accept a USD payment from a provider (such as **Stripe** or **Plaid**). After a payment is successful you can automatically execute a transaction with the custodial wallet to mint your NFT!

![Mint With USD](/img/custodial-wallets/usd-payments/mint-with-usd.png)
![Stripe USD Payment](/img/custodial-wallets/usd-payments/usd-payment-stripe.png)
![Success USD Payment](/img/custodial-wallets/usd-payments/usd-payment-success.png)

This can be used to exectue any smart contract on the Cardano Blockchain as well such as CIP-68 Update Transactions.

The code is available in the [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration), but no UI component is currently in the library.
