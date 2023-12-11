---
sidebar_position: 4
---

# Sign Transaction

After sending **Ada** to a custodial wallet we can execute transactions from that wallet with the **SignTransaction** graphQL mutation.

![Saturn Integration Sign Transaction API](/img/custodial-wallets/sign-transaction/sign-transaction-api.png)

If you pass in the custodial wallet address, and your api key is associated with the wallet, you will be returned a signed transaction which can be submitted to a Cardano Node to execute the transaction.

The code is available in the [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration), but no UI component is currently in the library.
