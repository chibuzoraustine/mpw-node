import Base from "../../../../services/base.js";
import WalletCollectionMethodFiat from "./fiat.js";
import WalletCollectionMethodCrypto from "./crypto.js";

export default class WalletCollectionMethod {

    private base:Base
    fiat: WalletCollectionMethodFiat;
    crypto: WalletCollectionMethodCrypto;

    constructor(base:Base) {
        this.base = base;
        this.fiat = new WalletCollectionMethodFiat(this.base);
        this.crypto = new WalletCollectionMethodCrypto(this.base);
    }
    
}