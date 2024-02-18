export interface WalletCreateFiatRequest {
    code: string,
    order_reference_code?: string,
    meta?: {
        name?: string,
        user_id?: string
    }
}

export interface WalletCreateCryptoRequest {
    code: string,
    order_reference_code?: string,
    meta?: {
        custodial?: string,
        name?: string,
        user_id?: string
    }
}

export interface WalletUpdateRequest {
    meta: {
        wallet_id: Update,
        name?: Update,
        user_id?: Update,
        settlement_account?: {
            channel_id?: Update,
            amount?: Update
        }
    }
}

export interface WalletChannelDetailsRequest {
    order_by?: string,
    page?: string,
    limit?: string,
    time?: {
        from?: string,
        to?: string
    },
    meta: {
        wallet_id: string,
        id?: string,
        type?: string,
        account_type?: string,
        bank_code?: string,
        address?: string,
        account_no?: string,
        swift_code?: string,
        sort_code?: string,
        routing_number?: string,
        iban?: string,
        status?: string
    }
}

export interface WalletChannelRemoveRequest {
    meta: {
        channel: {
            id: string,
            type: string
        }[]
    }
}

export interface WalletChannelTransferRecipientNGNSingleRequest {
    meta: {
        wallet_id: string,
        recipient: [
            {
                bank_code: string,
                account_no: string,
                account_type?: string,
                user_id?: string
            }
        ]
    }
}

export interface WalletChannelTransferRecipientNGNBulkRequest {
    meta: {
        wallet_id: string,
        recipient: {
            bank_code: string,
            account_no: string,
            account_type: string,
            user_id?: string
        }[]
    }
}

export interface WalletChannelTransferRecipientNGNCSVRequest {
    meta: {
        wallet_id: string,
        file_url: string
    }
}

export interface WalletChannelTransferRecipientGBPSingleRequest {
    meta: {
        wallet_id: string,
        recipient: {
            account_type: 'individual' | 'business',
            business_name?: string,
            bank_name: string,
            account_no: string,
            sort_code: string,
            firstname?: string,
            lastname?: string,
            user_id?: string
        }[]

    }
}

export interface WalletChannelTransferRecipientEURSingleRequest {
    meta: {
        wallet_id: string,
        recipient: {
            account_type: 'individual' | 'business',
            business_name?: string,
            bank_name: string,
            iban: string,
            firstname?: string,
            lastname?: string,
            user_id?: string
        }[]

    }
}

export interface WalletChannelTransferRecipientUSDSingleRequest {
    meta: {
        wallet_id: string,
        recipient: [
            {
                account_type: 'individual' | 'business',
                business_name?: string,
                bank_name: string,
                routing_number: string,
                account_no: string,
                firstname?: string,
                lastname?: string,
                user_id?: string
            }
        ]
    }
}

export interface WalletChannelVirtualAccountRequest {
    code: string,
    meta: {
        wallet_id: string,
        bank_name?: string,
        prefix?: string,
        suffix?: string,
        user_id?: string,
        holder: {
            email?: string,
            phone?: string,
            account_type: string,
            lastname: string,
            firstname: string,
            middlename: string,
            gender: string,
            dob: string,
            business: {
                name: string,
                registration_number: string
            },
            address?: {
                street?: string,
                city?: string,
                state?: string,
                postal_code?: string,
                country_code?: string
            },
            kyc: [
                {
                    id: string,
                    type: string,
                    file_url: string
                }
            ]
        }
    }
}

export interface WalletChannelChainAddressRequest {
    code: string,
    meta: {
        wallet_id: string,
        public_key: string,
        user_id?: string
    }
}

export interface WalletChannelDownloadRequest {
    order_by?: string,
    page?: string,
    limit?: string,
    time?: {
        from?: string,
        to?: string
    },
    meta?: {
        wallet_id: string,
        type?: string,
        file_type: string,
        status?: string
    }
}

export interface WalletCollectionInitiateRequest {
    code: string,
    order_reference_code?: string,
    meta: {
        amount: string,
        narration: string,
        wallet_id: string,
        redirect_url?: string,
        bearer?: string,
        user_id: string,
        split: {
            type: string,
            wallet: [
                {
                    id: string,
                    share: string
                },
                {
                    id: string,
                    share: string
                }
            ]
        },
        allow_payment_method?: string[],
        allow_currency_exchange?: string[]
    }
}

export interface WalletCollectionMethodCryptoChainAddressRequest {
    order_reference_code?: string,
    meta: {
        duration: string,
        public_key: string
    }
}

export interface WalletCollectionMethodFiatInfoRequest {
    method: string,
    currency?: string,
    order_reference_code: string
}

export interface WalletCollectionMethodFiatPayWithUSSDRequest {
    order_reference_code: string,
    meta: {
        institution_id: string,
        narration?: string
    }
}

export interface WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest {
    order_reference_code: string,
    meta?: {
        institution_id?: string,
        duration?: string
    }
}

export interface WalletCollectionMethodFiatPayWithCardNakedRequest {
    order_reference_code: string,
    meta: {
        pan: string,
        month: string,
        year: string,
        pin: string,
        cvv: string,
        otp?: string,
        callback_url?: string
    }
}

export interface WalletCollectionMethodFiatPayWithCardEmbedRequest {
    order_reference_code: string,
    meta?: {
        provider?: string
    }
}

export interface WalletCollectionMethodFiatPayWithSavedCardTokenRequest {
    order_reference_code: string,
    meta: {
        card_token: string
    }
}

export interface WalletTransferCustodialSingleRequest {
    order_reference_code?: string,
    meta: {
        narration: string,
        method: string,
        from: {
            transferable_value?: string,
            id: string,
            bearer?: string,
            type: string
        },
        to: {
            route: string,
            id: string,
            value: string
        }
    }
}

export interface WalletTransferCustodialBulkRequest {
    order_reference_code?: string,
    meta: {
        narration: string,
        from: {
            transferable_value?: string,
            id: string,
            bearer?: string,
            type: string
        },
        to: [
            {
                route: string,
                id: string,
                value: string
            }
        ]
    }
}

export interface WalletTransferCustodialBulkWithFileUploadRequest {
    order_reference_code?: string,
    meta: {
        narration: string,
        from: {
            transferable_value?: string,
            id: string,
            bearer?: string,
            type: string
        },
        to: {
            route: string,
            file_url: string
        }
    }
}

export interface WalletTransferNonCustodialSingleRequest {
    code: string,
    order_reference_code?: string,
    meta: {
        narration: string,
        from: {
            id: string,
            private_key: string,
            bearer_currency?: string,
            gas_price: string,
            gas_limit: string
        },
        to: {
            id: string,
            value: string,
            receiving_currency?: string
        }
    }
}

export interface WalletDetailsCustodialRequest {
    order_reference_code?: string,
    order_by?: string,
    page?: string,
    limit?: string,
    section?: string,
    meta?: {
        wallet_id?: string,
        currency?: string,
        user_id?: string,
        main?: string
    }
}

export interface WalletDetailsNonCustodialRequest {
    order_reference_code?: string,
    meta: {
        wallet: string,
        address: string,
        index?: string,
        mnemonic_phrase?: string
    }
}

export interface WalletTransactionsCustodialRequest {
    order_reference_code?: string,
    order_id?: string,
    order_type?: string,
    order_by?: string,
    page?: string,
    limit?: string,
    action?: string,
    time?: {
        from?: string,
        to?: string
    },
    payment_status?: string,
    order_status?: string,
    meta?: {
        wallet_id?: string,
        currency?: string,
        channel_id?: string,
        notify?: {
            channel?: string,
            recipient?: string
        }
    }
}

export interface WalletTransactionsNonCustodialRequest {
    order_type?: string,
    order_by?: string,
    order_status?: string,
    page?: string,
    limit?: string,
    time?: {
        from?: string,
        to?: string
    },
    block?: {
        from?: string,
        to?: string
    },
    meta: {
        wallet: string,
        address?: string,
        token_address?: string,
        contract_address?: string,
        show_other_token?: "Yes" | "No",
        tx_id?: string
    }
}

export interface WalletExchangeCustodialInitiateRequest {
    meta: {
        from: {
            amount: string,
            wallet_id: string
        },
        to: {
            wallet_id: string
        }
    }
}

export interface WalletExchangeCustodialCalculateRequest {
    meta: {
        from: {
            amount: string,
            currency: string
        },
        to: {
            currency: string
        }
    }
}

export interface WalletExchangeNonCustodialInitiateRequest {
    meta: {
        from: {
            amount: string,
            currency: string,
            address?: string
        },
        to: {
            currency: string,
            address: string
        }
    }
}

export interface WalletExchangeNonCustodialCalculateRequest {
    meta: {
        from: {
            amount: string,
            currency: string
        },
        to: {
            currency: string
        }
    }
}