<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

<h1>Verification</h1>

Enrol & Verify information like bank verification numbers (BVN), SSN, international passport, card bins, account information & other financial footprints, security checklist, and so much more.

- [International Basic Bank Account](#international-basic-bank-account)


## International Basic Bank Account

International Basic Bank Account Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.intBasicBankAccount({
        "meta": {
            "iban": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Basic Bank Account

Nigeria Basic Bank Account Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngBasicBankAccount({
        "meta": {
            "account_no": "",
            "bank_code": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Advance Bank Account

Nigeria Advance Bank Account Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngAdvanceBankAccount({
        "meta": {
            "account_no": "",
            "bank_code": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## BVN Bank Account Match

BVN Bank Account Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngBVNBankAccountMatch({
        "meta": {
            "number": "",
            "account_no": "",
            "bank_code": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Institutions

Institutions Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.institutions({
        "meta": {
            "type": "",
            "operation": "",
            "country_code": "",
            "destination": "",
            "currency": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## BVN Associated Financial Accounts (Initiate)

This sends confirmation_code to provided contact associated with the BVN (number)

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.bvnAssociatedFinancialAccountsInitiate({
        "meta": {
            "number": "",
            "contact": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## BVN Associated Financial Accounts (Fetch)

This returns financial accounts associated with the BVN if confirmation_code matches.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.bvnAssociatedFinancialAccountsFetch({
        "meta": {
            "number": "",
            "contact": "",
            "confirmation_code": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Bvn Contact

Bvn Contact Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.bvnContact({
        "meta": {
            "number": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria BVN with Photo, Phone Number Match

Nigeria BVN with Photo, Phone Number Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.bvnPhotoPhoneMatch({
    "meta": {
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

## BVN Photo Match

BVN Photo Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.bvnPhotoMatch({
    "meta": {
        "number": "",
        "image": ""
    }
}))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## BVN

BVN Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.bvn({
        "number": ""
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## CAC

CAC Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.cac({
    "meta": {
        "number": "",
        "name": "",
        "type": ""
    }
}))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Company Search (Global)

Company Search (Global)

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.companySearch({
        "code": "company_search",
        "meta": {
            "country_code": "",
            "name": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Document Image (AI)

Document Image (AI)

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.documentImage({
        "meta": {
            "country_code": "",
            "image": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Face Comparison

Document Image Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.faceComparison({
        "meta": {
            "image_one": "",
            "image_two": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Individual Credit Check

Nigeria Individual Credit Check

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngIndividualCreditCheck({
        "meta": {
            "number": "",
            "amount" : ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Business Credit Check

Nigeria Business Credit Check

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngBusinessCreditCheck({
        "meta": {
            "number": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Driver License with Date of Birth & Face Match

Nigeria Driver License with Date of Birth & Face Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngDriverLicenseDateofBirthFaceMatch({
        "meta": {
            "number": "",
            "image": "",
            "dob": ""

        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Driver License (ID Image)

Nigeria Driver License (ID Image)

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngDriverLicense({
        "code": "ng_driver_license_id_image",
        "meta": {
            "image": "" //base64
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria International Passport with Name & Face Match

Nigeria International Passport with Name & Face Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngIntPassportNameFaceMatch({
        "meta": {
            "number": "",
            "image": "",
            "lastname": "",
            "firstname": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Phone Number

Nigeria Phone Number Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngPhone({
        "meta": {
            "phone_number": "+2348000000000"
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
  "message": "Verification successful",
  "data": {
    "code": "ng_phone_number",
    "order_reference_code": "houw65oEZS",
    "firstname": "Derick",
    "lastname": "Ray",
    "middlename": "Bala",
    "phone": {
      "primary": "+2348000000000"
    },
    "dob": "1960-10-01",
    "gender": "Male"
  }
}
```

## NIN Face Match

NIN Face Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ninFaceMatch({
    "meta": {
        "number": "",
        "image": ""
    }
}))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## NIN Phone Number Match

NIN Phone Number Match

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ninPhoneMatch({
        "meta": {
            "number": "",
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

## Liveness Check

Liveness Check

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.livenessCheck({
        "meta": {
            "video": "",
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

## Global Sanction

Global Sanction Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.GlobalSanction({
        "meta": {
            "name": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## PEP (Politically Exposed Persons)

PEP (Politically Exposed Persons) Lookup

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.pep({
        "meta": {
            "name": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Voters Card

This allows you to confirm if details provided by a user is valid

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngVotersCard({
        "meta": {
            "lastname": "",
            "firstname": "",
            "number": "",
            "dob": "",
            "lga": "",
            "state": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Phone Number Confirmation (Initiate)

This allows you to confirm if a phone number is active or you are doing authentication.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngPhoneConfirmationInitiate({
        "meta": {
            "phone_number": "",
            "timer": "",
            "sender_name": "",
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria Phone Number Confirmation (Confirm)

Confirm

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngPhoneConfirmation({
        "order_id": "",
        "meta": {
            "confirmation_code": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Nigeria SMS Prompt

This allows you to send notification to a phone number

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.ngSMSPrompt({
        "meta": {
            "phone_number": "",
            "sender_name": "",
            "message": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Wallet Address Verification

This allows you to verify if the address is a valid address for provided blockchain wallet

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.verification.WalletAddress({
        "meta": {
            "wallet": "",
            "address": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```
