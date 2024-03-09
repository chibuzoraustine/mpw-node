import Base from "../../../../services/base";
import { Res, WalletCollectionMethodCryptoChainAddressRequest } from "../../../../types/index";
export default class WalletCollectionMethodCrypto {
    private base;
    constructor(base: Base);
    chainAddress(payload: WalletCollectionMethodCryptoChainAddressRequest): Promise<Res<any>>;
}
