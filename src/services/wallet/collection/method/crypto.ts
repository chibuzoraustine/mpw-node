import Base from "../../../../services/base.js";
import { Res, WalletCollectionMethodCryptoChainAddressRequest } from "../../../../types/index.js";
import { response } from "../../../../utils/helpers.js";

export default class WalletCollectionMethodCrypto {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async chainAddress(payload: WalletCollectionMethodCryptoChainAddressRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/chain-address', payload);
        return response<any>(res);
    }
    
}