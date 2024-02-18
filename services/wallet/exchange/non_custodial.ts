import Base from "@/services/base";
import { Response, WalletExchangeNonCustodialCalculateRequest, WalletExchangeNonCustodialInitiateRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletExchangeNonCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async initiate(payload: WalletExchangeNonCustodialInitiateRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/exchange/initiate', {code: "crypto_crypto", custodial: "No", ...payload});
        return response<any>(res);
    }

    async calculate(payload: WalletExchangeNonCustodialCalculateRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/exchange/calculate', {code: "crypto_crypto", custodial: "No", ...payload});
        return response<any>(res);
    }
    
}