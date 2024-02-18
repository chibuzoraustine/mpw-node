import Base from "../../../../services/base.js";
import WalletCollectionMethodFiat from "./fiat.js";
import WalletCollectionMethodCrypto from "./crypto.js";
export default class WalletCollectionMethod {
    private base;
    fiat: WalletCollectionMethodFiat;
    crypto: WalletCollectionMethodCrypto;
    constructor(base: Base);
}
