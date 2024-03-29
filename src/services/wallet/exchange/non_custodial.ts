import Base from "../../../services/base";
import { Res, WalletExchangeNonCustodialCalculateRequest, WalletExchangeNonCustodialInitiateRequest } from "../../../types/index";
import { response } from "../../../utils/helpers";

export default class WalletExchangeNonCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async initiate(payload: WalletExchangeNonCustodialInitiateRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/exchange/initiate', {code: "crypto_crypto", custodial: "No", ...payload});
        return response<any>(res);
    }

    async calculate(payload: WalletExchangeNonCustodialCalculateRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/exchange/calculate', {code: "crypto_crypto", custodial: "No", ...payload});
        return response<any>(res);
    }
    
}