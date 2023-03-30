
<p align="center"><br><br>
    <img title="Flutterwave" src="https://moipayway.com/image/logo-main-black.png" width="50%"/>
</p>

# MoiPayWay Api Wrapper For Node.js

## Intoduction

This Node library provides easy access to Moipayway APIs for your Node apps. It abstracts the complexity involved in direct integration and allows you to make quick calls to the APIs.


- [MoiPayWay Api Wrapper For Node.js](#moipayway-api-wrapper-for-nodejs)
  - [Intoduction](#intoduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Sending requests with a payload](#sending-requests-with-a-payload)
  - [Error handling](#error-handling)
  - [Authenticate](#authenticate)
  - [License](#license)


## Installation

```bash
npm install mpw-node
```

## Usage

```javascript
import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.misc.banks())
} catch (e) {
    console.log(e)
}

```

## Sending requests with a payload

Some endpoint requires data to be parsed with the request. Below is an example of sending requests with a payload:

```javascript
import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

const payload = {
    "code": "",
    "order_reference_code": "",
    "meta": {
        "amount": "", //amount
        "name": "", //label
        "narration": "", //details of value collection
        "from": "", //customID
        "to": "",
        "route": "" //enum: internal - customID  [Pass if transfer is from one wallet to another wallet within MoiPayWay] or external pass settlement account ID
    }
}

try {
    const req = await mpw.fiat.transfer(payload);
    console.log(req)
} catch (e) {
    console.log(e)
}

```

## Error handling

You can catch request errors by wrapping the request method in a try / catch block.

```javascript
...

try {
    const req = await mpw.blockchain.details(payload);
    console.log(req)
} catch (e) {
    console.log(e)
}

```

Response :
```console
BadRequestError {
  name: 'BadRequestError',
  status: 400,
  message: 'You are not authorized to perform this request. Please contact support'
}
```

## Authenticate
Merchants can reset/get their secret token by calling `MoiPayWayAuth` method. This method requires the merchant's Public/API Key.

```javascript
import { MoiPayWayAuth } from "mpw-node"

const payload = {
    email:"", 
    password: ""
}

try {
    const req = await MoiPayWayAuth("public_key", payload); 
    console.log(req)
} catch (e) {
    console.log(e)
}

```


## License

[ISC](https://choosealicense.com/licenses/isc/)
