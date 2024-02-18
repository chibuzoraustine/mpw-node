import Base from "@/services/base";
import WalletCollectionMethodFiat from "./fiat";
import WalletCollectionMethodCrypto from "./crypto";
export default class WalletCollectionMethod {
    private base;
    fiat: WalletCollectionMethodFiat;
    crypto: WalletCollectionMethodCrypto;
    constructor(base: Base);
}
