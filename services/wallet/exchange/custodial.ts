import Base from "@/services/base";
import { Response, WalletExchangeCustodialCalculateRequest, WalletExchangeCustodialInitiateRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletExchangeCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async initiate(payload: WalletExchangeCustodialInitiateRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/exchange/initiate', {code: "internal", ...payload});
        return response<any>(res);
    }

    async calculate(payload: WalletExchangeCustodialCalculateRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/exchange/calculate', {code: "internal", ...payload});
        return response<any>(res);
    }
    
}