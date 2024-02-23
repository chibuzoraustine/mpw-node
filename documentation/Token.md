<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

<h1>Token</h1>

We suggest starting with the main README document first. It explains the requirements for using the library and provides instructions on how to set it up in your applications. This guide assumes that you have already read the README.

Create and manage token, such as; NFT, fungible token, stable coins, storage token, etc.

- (Multi Token) create a functional token ecosystems that has multiple use cases such as stablecoins, utility tokens, security tokens, governance tokens, and more.
- (Storage) store data on the blockchain, which we called storage token.

Easy blockchain access. explore endpoints below.

- [Deploy Multi Token](#deploy-multi-token)
- [Multi Token Details](#multi-token-details)
- [Mint Multi Token](#mint-multi-token)
- [Transfer Multi Token](#transfer-multi-token)
- [Burn Multi Token](#burn-multi-token)
- [Upload multimedia file to the blockchain](#upload-multimedia-file-to-the-blockchain)
- [Create and post data to the blockchain](#create-and-post-data-to-the-blockchain)
- [Storage Details](#storage-details)

## Deploy Multi Token

Deploy Multi Token Smart Contract

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.multi.deploy({
        "order_reference_code": "",
        "meta": {
            "chain": "",
            "data": "",
            "private_key": "",
            "gas_price": "",
            "gas_limit": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Multi Token Details

Retrieve Details About a Multi Token or View Token Balance of a Wallet Address

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.multi.details({
        "type": "",
        "meta": {
            "chain": "",
            "recipient": {
                "id": ""
            },
            "token_id": "",
            "contract_address": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Mint Multi Token

<!-- Mint Multi Token -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.multi.mint({
        "order_reference_code": "",
        "meta": {
            "chain": "",
            "value": "",
            "data": "",
            "private_key": "",
            "contract_address": "",
            "token_id": "",
            "gas_price": "",
            "gas_limit": "",
            "recipient": {
                "id": ""
            }
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Transfer Multi Token

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.multi.transfer({
        "order_reference_code": "",
        "meta": {
            "chain": "",
            "value": "",
            "private_key": "",
            "contract_address": "",
            "token_id": "",
            "gas_price": "",
            "gas_limit": "",
            "recipient": {
                "id": ""
            }
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Burn Multi Token

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.multi.burn({
        "order_reference_code": "",
        "meta": {
            "chain": "",
            "value": "",
            "private_key": "",
            "contract_address": "",
            "token_id": "",
            "gas_price": "",
            "gas_limit": "",
            "recipient": {
                "id": ""
            }
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Upload multimedia file to the blockchain

<!-- Upload multimedia file to the blockchain -->

```javascript

import MoiPayWay from "mpw-node"
import {readFileSync} from "fs"

const mpw = new MoiPayWay("secret_token");

// file is of type `File`
let file = fs.readFileSync('image.png');

// or
const fileInput = document.getElementById('yourFileId');
let file = fileInput.files[0]; 

try {
    console.log(await mpw.token.storage.upload({
        chain: "",
        file: file
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Create and post data to the blockchain

<!-- Create and post data to the blockchain -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.storage.create({
        "order_reference_code": "",
        "meta": {
            "chain": "",
            "data": "",
            "private_key": "",
            "gas_price": "",
            "gas_limit": "",
            "recipient": {
                "id": ""
            }
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Storage Details

Retrieve details of multimedia file uploaded to the blockchain

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.token.storage.details({
        "meta": {
            "chain": "",
            "token": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

