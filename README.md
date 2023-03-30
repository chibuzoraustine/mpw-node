
# MoiPayWay Api Wrapper For Node.js

This Node library provides easy access to Moipayway APIs for your Node apps. It abstracts the complexity involved in direct integration and allows you to make quick calls to the APIs.


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install mpw-node.

```bash
npm install mpw-node
```

## Usage

```javascript
Import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("public_key", "secret_token");

try {
    console.log(await mpw.misc.banks())
} catch (e) {
    console.log(e)
}

```


## License

[ISC](https://choosealicense.com/licenses/isc/)
