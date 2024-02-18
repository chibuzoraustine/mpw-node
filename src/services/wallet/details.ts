import Base from "../../services/base.js";
import { Res, WalletDetailsCustodialRequest, WalletDetailsNonCustodialRequest } from "../../types/index.js";
import { response } from "../../utils/helpers.js";

export default class WalletDetails {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async custodial(payload: WalletDetailsCustodialRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/details', {code: "internal", ...payload});
        return response<any>(res);
    }

    async nonCustodial(payload: WalletDetailsNonCustodialRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/details', {code: "extrenal", ...payload});
        return response<any>(res);
    }
    
}