import Base from "../../services/base";
import { Response, WalletDetailsCustodialRequest, WalletDetailsNonCustodialRequest } from "../../types";
import { response } from "../../utils/helpers";

export default class WalletDetails {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async custodial(payload: WalletDetailsCustodialRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/details', {code: "internal", ...payload});
        return response<any>(res);
    }

    async nonCustodial(payload: WalletDetailsNonCustodialRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/details', {code: "extrenal", ...payload});
        return response<any>(res);
    }
    
}