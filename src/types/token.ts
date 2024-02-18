export type TokenStorageUploadRequest = {
    chain: string,
    file: File
}

export type TokenStorageCreateRequest = {
    order_reference_code?: string,
    meta: {
        chain: string,
        data: string,
        private_key: string,
        gas_price?: string,
        gas_limit?: string,
        recipient: {
            id: string
        }
    }
}

export type TokenStorageDetailsRequest = {
    meta: {
        chain: string,
        token: string,
    }
}

export type TokenMultiDeployRequest = {
    order_reference_code?: string,
    meta: {
        chain: string,
        data: string,
        private_key: string,
        gas_price?: string,
        gas_limit?: string
    }
}

export type TokenMultiDetailsRequest = {
    type: "balance" | "data",
    meta: {
        chain: string,
        recipient: {
            id: string
        },
        token_id: string,
        contract_address: string
    }
}

export type TokenMultiMintRequest = {
    order_reference_code?: string,
    meta: {
        chain: string,
        value: string,
        data: string,
        private_key: string,
        contract_address: string,
        token_id: string,
        gas_price?: string,
        gas_limit?: string,
        recipient: {
            id: string
        }
    }
}

export type TokenMultiTransferRequest = {
    order_reference_code?: string,
    meta: {
        chain: string,
        value: string,
        private_key: string,
        contract_address: string,
        token_id: string,
        gas_price?: string,
        gas_limit?: string,
        recipient: {
            id: string
        }
    }
}

export type TokenMultiBurnRequest = {
    order_reference_code?: string,
    meta: {
        chain: string,
        value: string,
        private_key: string,
        contract_address: string,
        token_id: string,
        gas_price?: string,
        gas_limit?: string,
        recipient: {
            id: string
        }
    }
}
