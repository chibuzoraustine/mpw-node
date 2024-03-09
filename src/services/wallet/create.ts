import { Res, WalletCreateCryptoRequest, WalletCreateFiatRequest } from "../../types/index";
import Base from "../base";
import { response } from "../../utils/helpers";

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