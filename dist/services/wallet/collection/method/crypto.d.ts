import Base from "@/services/base";
import { Response, WalletCollectionMethodCryptoChainAddressRequest } from "@/types";
export default class WalletCollectionMethodCrypto {
    private base;
    constructor(base: Base);
    chainAddress(payload: WalletCollectionMethodCryptoChainAddressRequest): Promise<Response<any>>;
}
