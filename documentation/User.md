<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

<h1>User</h1>

We suggest starting with the main README document first. It explains the requirements for using the library and provides instructions on how to set it up in your applications. This guide assumes that you have already read the README.

This folder includes endpoints for a partner to create and manage users;

- User created can be assigned wallet (Which help in reconsilations)
- User created can be assign payment cards
- User created can be assign a bank account and chain address

Table of content:

- [Create User](#create-user)

## Create User

This endpoint allow partner to create a user

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.user.create())
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
    {
        "status": "success",
        "response_code": 200,
        "message": "User account created successfully",
        "data": {
            "user_id": "1010"
        }
    }
```