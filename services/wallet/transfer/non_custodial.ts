import Base from "../../../services/base";
import { Response, WalletTransferNonCustodialSingleRequest } from "../../../types";
import { response } from "../../../utils/helpers";

export default class WalletTransferNonCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload: WalletTransferNonCustodialSingleRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/transfer/single', payload);
        return response<any>(res);
    }
    
}