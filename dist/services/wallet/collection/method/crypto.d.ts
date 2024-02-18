import Base from "../../../../services/base.js";
import { Res, WalletCollectionMethodCryptoChainAddressRequest } from "../../../../types/index.js";
export default class WalletCollectionMethodCrypto {
    private base;
    constructor(base: Base);
    chainAddress(payload: WalletCollectionMethodCryptoChainAddressRequest): Promise<Res<any>>;
}
