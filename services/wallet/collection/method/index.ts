import Base from "../../../../services/base";
import { Response } from "../../../../types";
import { response } from "../../../../utils/helpers";
import WalletCollectionMethodFiat from "./fiat";
import WalletCollectionMethodCrypto from "./crypto";

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