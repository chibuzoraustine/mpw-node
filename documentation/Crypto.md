<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

<h1>Crypto</h1>

This documentation include helper methods to perform certain crypto operations. The methods outlined in this document are static and do not require initialization

- [Sign ETH Transaction](#sign-eth-transaction)

## Sign ETH Transaction

Sign an evm compatible chain transaction and get back a signature. Note, your private key is secured and does not leave your client/server. 

```javascript

import MoiPayWay from "mpw-node"

// Transaction parameters
const txParams = {
    to: "0xRECIPIENT_ADDRESS", // Recipient address
    data: '', // Include provided data or default to '0x'
    value: '100000000000000000' // Value in Wei
};

try {
    console.log(await MoiPayWay.crypto.ethSignTransaction("private_key", txParams))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
{
  "status": "success",
  "message": "",
  "data": "0x02f86880808080809487db92ad7a03727063d58846617c977b3aaa423688016345785d8a000080c001a09f910a36989c98083d0c76b9954e0f6b5bd42f52772d23ad241c2e160269d607a077759873f76133493c6f4a6606d8b932c6c6e8f6b57ebd440a6f83379224a2c6"
}
```
