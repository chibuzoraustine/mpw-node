import Base from "@/services/base";
import { Response, WalletCollectionMethodCryptoChainAddressRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletCollectionMethodCrypto {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async chainAddress(payload: WalletCollectionMethodCryptoChainAddressRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/chain-address', payload);
        return response<any>(res);
    }
    
}