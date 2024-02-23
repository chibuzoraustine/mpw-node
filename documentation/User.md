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
- [Update User](#update-user)
- [User Details](#user-details)
- [User BVN Photo, Phone Number Match](#user-bvn-photo-phone-number-match)

## Create User

This method allow partner to create a user

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.user.create({
        "meta": {
            "email": "testman@moipayway.com",
            "phone": "+44241689261020",
            "lastname": "Right",
            "firstname": "Hand",
            "middlename": "Man",
            "gender": "Male",
            "dob": "1960-10-01",
            "address": {
                "street": "",
                "city": "",
                "state": "",
                "postal_code": "",
                "country_code": "NG"
            },
            "business": {
                "name": "",
                "registration_number": ""
            }
        }
    }))
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

## Update User

This endpoint allow partner to update a user details

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.user.update({
        "meta": {
            "user_id": "2",
            "black_list": "",
            "email": "",
            "phone": "",
            "lastname": "",
            "firstname": "",
            "middlename": "",
            "gender": "",
            "dob": "",
            "address": {
                "street": "",
                "city": "",
                "state": "",
                "postal_code": "",
                "country_code": ""
            },
            "business": {
                "name": "",
                "registration_number": ""
            }
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
    {
        "status": "success",
        "response_code": 200,
        "message": "User account update initiated successfully",
        "data": {
            "user_id": 2
        }
    }
```

## User Details

View user information

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.user.details({
        "order_by": "",
        "page": "",
        "limit": "",
        "meta": {
            "user_id": "",
            "email": "",
            "phone": "",
            "country_code": "",
            "black_list": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
    {
        "status": "success",
        "response_code": 200,
        "message": "User details retrieved successfully",
        "data": [
            {
            "id": "5682",
            "lastname": "",
            "firstname": "",
            "middlename": "",
            "business": {
                "name": "",
                "registration_number": ""
            },
            "address": {
                "street": "",
                "city": "",
                "state": "",
                "country": "United Kingdom",
                "postal_code": ""
            },
            "email": "testman@moipayway.com",
            "phone": "",
            "gender": "",
            "country": "United Kingdom",
            "dob": "",
            "verification": []
            }
        ],
        "counts": 1,
        "totalPages": 1,
        "currentPage": 0,
        "listPerPage": "21"
    }
```

## User BVN Photo, Phone Number Match

Validate partner's user based on KYC tracks provided.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.user.verification.bvnPhotoPhoneMatch({
        "code": "bvn",
        "meta": {
            "user_id": "",
            "number": "",
            "image": "",
            "phone_number": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```