<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

<h1>Wallet</h1>

Create and manage multicurrency and protocol wallets (Fiat & Blockchain)

Wallet created can be used to store, send, and receive offers and other various features like budgeting, expense tracking, savings, hold and financial management tools.

- Create and update wallet. view balance and other details of wallet created .
- Create and manage channels that can be attached to wallet created, which can also serve as a collection and transfer resources.
- Collection (various ways to accept funds or value to your wallet.)
- Initiate transfer from your wallet to another wallet, bank or to chain address
- View transaction status, history and other details of action provided on MoiPayWay
- Swap between wallets with different currencies.

<h2>Table of content</h2>

- [Create Wallet (Fiat)](#create-wallet-fiat)
- [Create Wallet (Crypto)](#create-wallet-crypto)
- [Update Wallet](#update-wallet)
- [Wallet Details (Custodial)](#wallet-details-custodial)
- [Wallet Details (Non-Custodial)](#wallet-details-non-custodial)
- [View Channel Details](#view-channel-details)
- [Remove Channel](#remove-channel)
- [Add Nigerian (NGN) Bank Account Transfer Recipient (Single)](#add-nigerian-ngn-bank-account-transfer-recipient-single)
- [Add Nigerian (NGN) Bank Account Transfer Recipient (Bulk)](#add-nigerian-ngn-bank-account-transfer-recipient-bulk)
- [Add Nigerian (NGN) Bank Account Transfer Recipient (Using CSV)](#add-nigerian-ngn-bank-account-transfer-recipient-using-csv)
- [Add UK (GBP) Bank Account Transfer Recipient (Single)](#add-uk-gbp-bank-account-transfer-recipient-single)
- [Add European (EUR) Bank Account Transfer Recipient (Single)](#add-european-eur-bank-account-transfer-recipient-single)
- [Add US (USD) Bank Account Transfer Recipient (Single)](#add-us-usd-bank-account-transfer-recipient-single)
- [Generate Virtual Account](#generate-virtual-account)
- [Generate Chain Address (Crypto)](#generate-chain-address-crypto)
- [Generate Downloadable File](#generate-downloadable-file)
- [Initiate Payment (Fiat \& Crypto)](#initiate-payment-fiat--crypto)
- [Get Collection Payment Method Info (Fiat)](#get-collection-payment-method-info-fiat)
- [Pay with USSD (Fiat)](#pay-with-ussd-fiat)
- [Pay to Dynamic Virtual Account (Bank Transfer) (Fiat)](#pay-to-dynamic-virtual-account-bank-transfer-fiat)
- [Pay with Card (Naked) (Fiat)](#pay-with-card-naked-fiat)
- [Pay with Card (Embed) (Fiat)](#pay-with-card-embed-fiat)
- [Pay with Saved Card (Fiat)](#pay-with-saved-card-fiat)
- [Chain Address (Crypto)](#chain-address-crypto)
- [Make Signle Transfer (Custodial)](#make-signle-transfer-custodial)
- [Make bulk Transfer (Custodial)](#make-bulk-transfer-custodial)
- [Make bulk Transfer with file upload (Custodial)](#make-bulk-transfer-with-file-upload-custodial)
- [Make Signle Transfer (Non Custodial)](#make-signle-transfer-non-custodial)
- [Transaction Informations (Custodial)](#transaction-informations-custodial)
- [Transaction Informations (Non Custodial)](#transaction-informations-non-custodial)
- [Initiate Exchange (Custodial)](#initiate-exchange-custodial)
- [Calculate Exchange (Custodial)](#calculate-exchange-custodial)
- [Initiate Exchange (Non Custodial)](#initiate-exchange-non-custodial)
- [Calculate Exchange (Non Custodial)](#calculate-exchange-non-custodial)

## Create Wallet (Fiat)

Create fiat wallet.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.create.fiat({
        "code": "",
        "order_reference_code": "",
        "meta": {
            "name": "",
            "user_id": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Create Wallet (Crypto)

Create crypto wallet.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.create.crypto({
        "code": "",
        "order_reference_code": "",
        "meta": {
            "custodial": "",
            "name": "",
            "user_id": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Update Wallet

Update fiat wallet.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.update({
        "meta": {
            "wallet_id": "",
            "name": "",
            "user_id": "",
            "settlement_account": {
                "channel_id": "",
                "amount": ""
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

## Wallet Details (Custodial)

<!-- -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.details.custodial({
        "code": "internal",
        "order_reference_code": "",
        "order_by": "",
        "page": "",
        "limit": "",
        "section": "",
        "meta": {
            "wallet_id": "",
            "currency": "",
            "user_id": "",
            "main": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Wallet Details (Non-Custodial)

<!-- -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.details.nonCustodial({
        "code": "external",
        "order_reference_code": "",
        "meta": {
            "wallet": "",
            "address": "",
            "index": "",
            "mnemonic_phrase": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## View Channel Details

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.details({
        "order_by": "",
        "page": "",
        "limit": "",
        "time": {
            "from": "",
            "to": ""
        },
        "meta": {
            "wallet_id": "",
            "id": "",
            "type": "",
            "account_type": "",
            "bank_code": "",
            "address": "",
            "account_no": "",
            "swift_code": "",
            "sort_code": "",
            "routing_number": "",
            "iban": "",
            "status": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Remove Channel

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.remove({
        "meta": {
            "channel": [
                {
                    "id": "",
                    "type": ""
                }
            ]
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Add Nigerian (NGN) Bank Account Transfer Recipient (Single)

Add single nigerian bank account transfer recipient. This helps to prevalid account before sending funds to the recipient.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.transferRecipient.ngn.single({
        "meta": {
            "wallet_id": "1180",
            "recipient": [
                {
                    "bank_code": "000013",
                    "account_no": "0126069407",
                    "user_id": "hello@moipayway.com"
                }
            ]
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
  "message": "Transfer recipient added successfully",
  "data": [
    "1327"
  ]
}
```

## Add Nigerian (NGN) Bank Account Transfer Recipient (Bulk)

Add multiple nigerian bank account transfer recipient. This helps to prevalid account before sending funds to the recipient.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.transferRecipient.ngn.bulk({
        "meta": {
            "wallet_id": "1000",
            "recipient": [
                {
                    "bank_code": "",
                    "account_no": "",
                    "account_type": "",
                    "user_id": ""
                },
                {
                    "bank_code": "",
                    "account_no": "",
                    "account_type": "",
                    "user_id": ""
                },
                {
                    "bank_code": "",
                    "account_no": "",
                    "account_type": "",
                    "user_id": ""
                },
                {
                    "bank_code": "",
                    "account_no": "",
                    "account_type": "",
                    "user_id": ""
                }
            ]
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Add Nigerian (NGN) Bank Account Transfer Recipient (Using CSV)

Add multiple nigerian bank account transfer recipient using CSV. This helps to prevalid account before sending funds to the recipient.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.transferRecipient.ngn.csv({
        "meta": {
            "wallet_id": "",
            "file_url": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Add UK (GBP) Bank Account Transfer Recipient (Single)

Add single UK bank account transfer recipient. This helps to prevalid account before sending funds to the recipient.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.transferRecipient.uk.single({
        "meta": {
            "wallet_id": "",
            "recipient": [
                {
                    "account_type": "",
                    "business_name": "",
                    "bank_name": "",
                    "account_no": "",
                    "sort_code": "",
                    "firstname": "",
                    "lastname": "",
                    "user_id": ""
                }
            ]
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Add European (EUR) Bank Account Transfer Recipient (Single)

Add single european bank account transfer recipient. This helps to prevalid account before sending funds to the recipient.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.transferRecipient.eur.single({
        "meta": {
            "wallet_id": "",
            "recipient": [
                {
                    "account_type": "",
                    "business_name": "",
                    "bank_name": "",
                    "iban": "",
                    "firstname": "",
                    "lastname": "",
                    "user_id": ""
                }
            ]
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Add US (USD) Bank Account Transfer Recipient (Single)

Add single US bank account transfer recipient. This helps to prevalid account before sending funds to the recipient.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.transferRecipient.us.single({
        "meta": {
            "wallet_id": "",
            "recipient": [
                {
                    "account_type": "",
                    "business_name": "",
                    "bank_name": "",
                    "routing_number": "",
                    "account_no": "",
                    "firstname": "",
                    "lastname": "",
                    "user_id": ""
                }
            ]
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Generate Virtual Account

Generate virtual bank account from available financial institutions

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.virtualAccount({
        "code": "",
        "meta": {
            "wallet_id": "",
            "bank_name": "",
            "prefix": "",
            "suffix": "",
            "user_id": "",
            "holder": {
                "email": "",
                "phone": "",
                "account_type": "",
                "lastname": "",
                "firstname": "",
                "middlename": "",
                "gender": "",
                "dob": "",
                "business": {
                    "name": "",
                    "registration_number": ""
                },
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "postal_code": "",
                    "country_code": ""
                },
                "kyc": [
                    {
                        "id": "",
                        "type": "",
                        "file_url": ""
                    }
                ]
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

## Generate Chain Address (Crypto)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.chainAddress({
        "code": "",
        "meta": {
            "wallet_id": "",
            "public_key": "",
            "user_id": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Generate Downloadable File

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.channel.download({
        "order_by": "",
        "page": "",
        "limit": "",
        "time": {
            "from": "",
            "to": ""
        },
        "meta": {
            "wallet_id": "",
            "type": "",
            "file_type": "",
            "status": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Initiate Payment (Fiat & Crypto)

Initiate a direct payment in fiat and crypto space.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.initiate({
        "code": "",
        "order_reference_code": "",
        "meta": {
            "amount": "",
            "narration": "",
            "wallet_id": "",
            "redirect_url": "",
            "bearer": "",
            "user_id": "",
            "split": {
                "type": "",
                "wallet": [
                    {
                        "id": "",
                        "share": ""
                    },
                    {
                        "id": "",
                        "share": ""
                    }
                ]
            },
            "allow_payment_method": [
                ""
            ],
            "allow_currency_exchange": [
                ""
            ]
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
  "message": "Initiated successfully",
  "data": {
    "order_reference_code": "ws2yo0rUYo"
  }
}
```

## Get Collection Payment Method Info (Fiat)

Filter method based on some query to view supported institutions or schemes or currency

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.fiat.info({
        "method": "",
        "currency": "",
        "order_reference_code": ""
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
  "message": "Retrieved successful",
  "data": [
    {
      "bank_name": "Sterling Bank",
      "institution_id": 40
    },
    {
      "bank_name": "Keystone Bank",
      "institution_id": 41
    },
    {
      "bank_name": "FCMB",
      "institution_id": 42
    },
    {
      "bank_name": "United Bank for Africa",
      "institution_id": 43
    },
    {
      "bank_name": "Diamond Bank",
      "institution_id": 44
    },
    {
      "bank_name": "JAIZ Bank",
      "institution_id": 45
    },
    {
      "bank_name": "Fidelity Bank",
      "institution_id": 46
    },
    {
      "bank_name": "Polaris Bank",
      "institution_id": 47
    },
    {
      "bank_name": "Ecobank Bank",
      "institution_id": 49
    },
    {
      "bank_name": "Unity Bank",
      "institution_id": 50
    },
    {
      "bank_name": "StanbicIBTC Bank",
      "institution_id": 51
    },
    {
      "bank_name": "GTBank Plc",
      "institution_id": 52
    },
    {
      "bank_name": "Access Bank",
      "institution_id": 53
    },
    {
      "bank_name": "Zenith Bank Plc",
      "institution_id": 54
    },
    {
      "bank_name": "First Bank of Nigeria",
      "institution_id": 55
    },
    {
      "bank_name": "Wema Bank",
      "institution_id": 56
    },
    {
      "bank_name": "Union Bank",
      "institution_id": 57
    },
    {
      "bank_name": "Heritage",
      "institution_id": 59
    },
    {
      "bank_name": "Moniepoint Microfinance Bank",
      "institution_id": 296
    }
  ]
}
```

## Pay with USSD (Fiat)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.fiat.payWithUSSD({
        "order_reference_code": "",
        "meta": {
            "institution_id": "",
            "narration": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Pay to Dynamic Virtual Account (Bank Transfer) (Fiat)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.fiat.payToDynamicVirtualAccount({
        "order_reference_code": "",
        "meta": {
            "institution_id": "",
            "duration": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Pay with Card (Naked) (Fiat)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.fiat.payWithCardNaked({
        "order_reference_code": "",
        "meta": {
            "pan": "",
            "month": "",
            "year": "",
            "pin": "",
            "cvv": "",
            "otp": "",
            "callback_url": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Pay with Card (Embed) (Fiat)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.fiat.payWithCardEmbed({
        "order_reference_code": "",
        "meta": {
            "provider": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Pay with Saved Card (Fiat)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.fiat.payWithSavedCardToken({
        "order_reference_code": "",
        "meta": {
            "card_token": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Chain Address (Crypto)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.collection.method.crypto.chainAddress({
        "order_reference_code": "",
        "meta": {
            "public_key": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Make Signle Transfer (Custodial)

Initiate single transfer from your MoiPayWay wallets (Fiat & Crypto) to another wallet or bank.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.transfer.custodial.single({
        "order_reference_code": "",
        "meta": {
            "narration": "",
            "method": "",
            "from": {
                "transferable_value": "",
                "id": "",
                "bearer": "",
                "type": ""
            },
            "to": {
                "route": "",
                "id": "",
                "value": ""
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

## Make bulk Transfer (Custodial)

Initiate bulk transfer from your MoiPayWay wallets (Fiat & Crypto) to other wallets or banks.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.transfer.custodial.bulk({
        "order_reference_code": "",
        "meta": {
            "narration": "",
            "from": {
                "transferable_value": "",
                "id": "",
                "bearer": "",
                "type": ""
            },
            "to": [
                {
                    "route": "",
                    "id": "",
                    "value": ""
                }
            ]
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Make bulk Transfer with file upload (Custodial)

Initiate bulk Transfer with file upload from your MoiPayWay wallets (Fiat & Crypto) to other wallets or banks.

<h3>CSV CSV Column Format</h3>
<table>
<tr style="margin-bottom:5px;">
<th>channel_id (settlement account)</th>
<th style="border-left: solid 1px rgb(150,150,150);">amount</th>
</tr>
<tr style="margin-bottom:5px;">
<td style="background-color: rgba(150,150,150,0.4); padding: 15px;"></td>
<td style="background-color: rgba(150,150,150,0.4); padding: 15px; border-left: solid 1px rgb(150,150,150);"></td>
</tr>
</table>
<br><br>

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.transfer.custodial.bulkWithFileUpload({
        "code": "internal",
        "order_reference_code": "",
        "meta": {
            "narration": "",
            "from": {
                "transferable_value": "",
                "id": "",
                "bearer": "",
                "type": ""
            },
            "to": {
                "route": "",
                "file_url": ""
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

## Make Signle Transfer (Non Custodial)

Initiate single transfer from your chain wallets (Crypto) to another wallet.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.transfer.nonCustodial.single({
        "code": "",
        "order_reference_code": "",
        "meta": {
            "narration": "",
            "from": {
                "id": "",
                "private_key": "",
                "bearer_currency": "",
                "gas_price": "",
                "gas_limit": ""
            },
            "to": {
                "id": "",
                "value": "",
                "receiving_currency": ""
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

## Transaction Informations (Custodial)

View transaction status, history and other details of action provided on MoiPayWay

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.transactions.custodial({
        "order_reference_code": "",
        "order_id": "",
        "order_type": "",
        "order_by": "",
        "page": "",
        "limit": "",
        "action": "",
        "time": {
            "from": "",
            "to": ""
        },
        "payment_status": "",
        "order_status": "",
        "meta": {
            "wallet_id": "",
            "currency": "",
            "channel_id": "",
            "notify": {
                "channel": "",
                "recipient": ""
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

## Transaction Informations (Non Custodial)

View transaction status, history and other details of action provided on MoiPayWay

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.transactions.nonCustodial({
        "order_type": "",
        "order_by": "",
        "order_status": "",
        "page": "",
        "limit": "",
        "time": {
            "from": "",
            "to": ""
        },
        "block": {
            "from": "",
            "to": ""
        },
        "meta": {
            "wallet": "",
            "address": "",
            "token_address": "",
            "contract_address": "",
            "show_other_token": "",
            "tx_id": ""
        }
    }))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
```

## Initiate Exchange (Custodial)

Swap between wallets with different currencies.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.exchange.custodial.initiate({
        "meta": {
            "from": {
                "amount": "",
                "wallet_id": ""
            },
            "to": {
                "wallet_id": ""
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

## Calculate Exchange (Custodial)

<!--  -->

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.exchange.custodial.calculate({
        "meta": {
            "from": {
                "amount": "",
                "currency": ""
            },
            "to": {
                "currency": ""
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

## Initiate Exchange (Non Custodial)

Swap between wallets with different currencies.

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.exchange.nonCustodial.initiate({
        "custodial": "No",
        "meta": {
            "from": {
                "amount": "",
                "currency": "",
                "address": ""
            },
            "to": {
                "currency": "",
                "address": ""
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

## Calculate Exchange (Non Custodial)

Calculate Exchange (DeFi) - Crypto

```javascript

import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.wallet.exchange.nonCustodial.calculate({
        "custodial": "No",
        "meta": {
            "from": {
                "amount": "",
                "currency": ""
            },
            "to": {
                "currency": ""
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