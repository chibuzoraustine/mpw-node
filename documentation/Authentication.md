<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

# Authenticate

Verify, authenticate, and gain access to MoiPayWay resources. The methods outlined in this document are static and do not require initialization. Generating a secret token involves a two-step process outlined below:

- [Authenticate](#authenticate)
  - [Initiate](#initiate)
  - [Connect](#connect)

## Initiate

This method allows a user to authenticate with the MoiPayWay system, resulting in the generation of a connection token. The `initiate` method can be called as shown:

```javascript

import MoiPayWay from "mpw-node"

try {
    const connectionToken = await MoiPayWay.initiate({
        email: "test@******",
        password: "pass***"
    });
    console.log(connectionToken)

} catch (e) {
    console.log(e)
}

```

Sample Response

```json
    {
        "status": "success",
        "response_code": 200,
        "message": "Signed in successfully",
        "data": {
            "token": "5cde62*********************",
            "environment": "live"
        }
    }
```

## Connect

This endpoint allows a user to connect to a merchant account and gain access to the MoiPayWay system. The token obtained from the `initiate` method (`connectionToken`) is required to call the `connect` method. `Connect` is a static method and can be called as shown:

```javascript

import MoiPayWay from "mpw-node"

try {
    const connectionToken = await MoiPayWay.connect(connectToken, {
        api_key: "your api public key",
        period: "specify token lifetime (Enum: `onetime` or `forever`)"
    });
    console.log(connectionToken)

} catch (e) {
    console.log(e)
}

```

Sample Response

```json
    {
    "status": "success",
    "response_code": 200,
    "message": "Account switched successfully",
    "data": {
        "token": "c8b551*****************",
        "environment": "test"
    }
}
```

The token obtained from the connect method is the secret token required to access MoiPayWay resources.

