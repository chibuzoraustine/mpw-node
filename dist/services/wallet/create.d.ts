import { Response, WalletCreateCryptoRequest, WalletCreateFiatRequest } from "@/types";
export default class WalletCreate {
    private base;
    constructor(base: any);
    fiat(payload: WalletCreateFiatRequest): Promise<Response<any>>;
    crypto(payload: WalletCreateCryptoRequest): Promise<Response<any>>;
}
