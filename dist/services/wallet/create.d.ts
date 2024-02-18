import { Res, WalletCreateCryptoRequest, WalletCreateFiatRequest } from "../../types/index.js";
export default class WalletCreate {
    private base;
    constructor(base: any);
    fiat(payload: WalletCreateFiatRequest): Promise<Res<any>>;
    crypto(payload: WalletCreateCryptoRequest): Promise<Res<any>>;
}
