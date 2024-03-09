import { Res, WalletCreateCryptoRequest, WalletCreateFiatRequest } from "../../types/index";
export default class WalletCreate {
    private base;
    constructor(base: any);
    fiat(payload: WalletCreateFiatRequest): Promise<Res<any>>;
    crypto(payload: WalletCreateCryptoRequest): Promise<Res<any>>;
}
