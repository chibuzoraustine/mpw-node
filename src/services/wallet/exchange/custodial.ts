import Base from "../../../services/base.js";
import { Res, WalletExchangeCustodialCalculateRequest, WalletExchangeCustodialInitiateRequest } from "../../../types/index.js";
import { response } from "../../../utils/helpers.js";

export default class WalletExchangeCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async initiate(payload: WalletExchangeCustodialInitiateRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/exchange/initiate', {code: "internal", ...payload});
        return response<any>(res);
    }

    async calculate(payload: WalletExchangeCustodialCalculateRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/exchange/calculate', {code: "internal", ...payload});
        return response<any>(res);
    }
    
}