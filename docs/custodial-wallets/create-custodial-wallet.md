---
sidebar_position: 1
---

# Create Custodial Wallet

Sometimes you want to create applications without the user knowing they are using Blockchain. Saturn has a solution for this allowing you to create custodial wallets with our API.

Before we begin, it is important to note the full [api documentation](/docs/api-documentation.md) and example library can be used to lookup any inputs and payloads needed for our graphQL queries and mutations.

## Saturn Integration Library

We're going to be using the [Saturn Integration Library](https://github.com/Orion-Crypto/Saturn-V2-Integration) to manage our custodial wallets

![Saturn Integration Library](/img/api-documentation/saturn-integration-library.png).

-   First, clone the V2 integration library
-   Next, follow the readme and run the commands to install the packages and start the dev server. Saturn uses the [pnpm package manager](https://pnpm.io/):

```
pnpm i
pnpm dev
```

-   Navigate to our local web servers: localhost:3000/
-   Click on the "Custodial Wallets" button in the Navbar.

![Saturn Integration Mint](/img/api-documentation/saturn-integration-mint.png)

-   We need to get a preprod Saturn API key by following these steps:

1. Go to [Preprod Saturn](https://preprod.saturnnft.io)
2. Connect a preprod wallet (Nami is recommended you can switch to preprod in the settings).
3. Enter the studio and go to the "Settings Page" which is the gear icon on the left hand sidebar.
4. Click on the "Add API Key" button. Make sure to save this key as you will not be able to view it again (**Note**: the key in the image is revoked)

![Saturn Integration API Key](/img/api-documentation/saturn-api-key.png)

-   After we have our API Key, paste it into the Saturn V2 Integration "Custodial Wallets" page, connect your wallet, and press the "Create Custodial Wallet" button.

This is the code that is being run (Create custoidal wallet code)

Congratulations! We have created a custodial wallet and we should see the wallet in the list! In the next section we will go over how to delete this wallet
