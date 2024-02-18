import { Res, WalletCreateCryptoRequest, WalletCreateFiatRequest } from "../../types/index.js";
import Base from "../base.js";
import { response } from "../../utils/helpers.js";

export default class WalletCreate {

    private base:Base

    constructor(base:any) {
        this.base = base;
    }

    async fiat(payload:WalletCreateFiatRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/create', payload);
        return response<any>(res);
    }

    async crypto(payload:WalletCreateCryptoRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/create', payload);
        return response<any>(res);
    }
    
}