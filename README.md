# MoiPayWay Nodejs Library

<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

## Introduction

The library simplifies interaction with Moipayway APIs in your Node applications. It streamlines the process of integration, eliminating the need to deal with intricate details, and facilitates rapid API calls. Key features includes:

- Wallets: creating and managing wallets (fiat, crypto).
- Making transfers, single/bulk. Fiat (NGN, GBP, EUR, USD) & Crypto.
- Manage virtual accounts.
- Tokens: create and manage token, such as; NFT, fungible token, stable coins, storage token, etc.
- Verification: running identity checks, credit checks etc.
- AI: verify document image (drivers license NIN, BVN, etc), Face Comparison.
- Lookups: Document validity check, CAC, etc.

## Table of Content
- [MoiPayWay Nodejs Library](#moipayway-nodejs-library)
  - [Introduction](#introduction)
  - [Table of Content](#table-of-content)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Initialization](#initialization)
  - [Authenticate](#authenticate)
  - [Sending requests with payload](#sending-requests-with-payload)
  - [Error handling](#error-handling)
  - [More usage documentation](#more-usage-documentation)
  - [Testing](#testing)
  - [License](#license)


## Requirements

1. Node 14 or higher.

## Installation

```bash
npm install mpw-node
```

## Initialization

```javascript
import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.misc.countries())
} catch (e) {
    console.log(e)
}

```

## Authenticate

Refer to the documentation linked below to understand how to generate secret tokens for authenticating the Moipayway SDK.

[Authentication](documentation/Authentication.md)


## Sending requests with payload

Some endpoint requires additional data to be included in the request payload. Below is an example demonstrating sending requests with payload:

```javascript
import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    const response = await mpw.wallet.create.fiat({
        code: "***",
        meta: {
            name: "***",
            user_id: "***" 
        }
    });
    console.log(response)
} catch (e) {
    console.log(e)
}

```

Furthermore, your IDE may offer payload suggestions to facilitate the process. Each response has a return type which will also aid in consuming the data received.

<!-- <img title="MoiPayWay" src="https://api.moipayway.co/files/3dd4df526de6f97e976e17e5ef10deefq6JbleDsS4.gif" width="70%"/> -->

![Preview](https://api.moipayway.co/files/3dd4df526de6f97e976e17e5ef10deefq6JbleDsS4.gif)

## Error handling

You can catch request errors by wrapping the method in a try / catch block.

```javascript
...

const mpw = new MoiPayWay("invalid_api_secret_key");

try {
    const response = await mpw.token.multi.mint(payload);
    console.log(response)
} catch (e) {
    console.log(e)
}

```

Response :
```console
BadRequestError {
  name: 'BadRequestError',
  status: 400,
  message: 'Invalid authorization bearer'
}
```

## More usage documentation
- [Authentication](documentation/Authentication.md)
- [User](documentation/User.md)
- [Wallet](documentation/Wallet.md)
- [Token](documentation/Token.md)
- [Verification](documentation/Authentication.md)
- [Misc](documentation/Authentication.md)

## Testing

Prior to running tests, ensure you have renamed the `.env.example` file to `.env` and populated it with a test key (testSecretKey). Then, execute the following command:

```bash
npm test
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
