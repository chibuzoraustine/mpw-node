export interface TokenStorageUploadRequest {
    chain: string,
    file: File
}

export interface TokenStorageCreateRequest {
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

export interface TokenStorageDetailsRequest {
    meta: {
        chain: string,
        token: string,
    }
}

export interface TokenMultiDeployRequest {
    order_reference_code?: string,
    meta: {
        chain: string,
        data: string,
        private_key: string,
        gas_price?: string,
        gas_limit?: string
    }
}

export interface TokenMultiDetailsRequest {
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

export interface TokenMultiMintRequest {
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

export interface TokenMultiTransferRequest {
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

export interface TokenMultiBurnRequest {
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

export interface TokenInfo {}