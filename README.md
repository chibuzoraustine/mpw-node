
# MoiPayWay Api Wrapper For Node.js

This Node library provides easy access to Moipayway APIs for your Node apps. It abstracts the complexity involved in direct integration and allows you to make quick calls to the APIs.


## Usage

```javascript
import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("public_key", "secret_token");

try {
    console.log(await mpw.misc.banks())
} catch (e) {
    console.log(e)
}

```

