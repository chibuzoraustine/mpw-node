import Base from "../../../services/base";
import { Res, WalletTransferNonCustodialSingleRequest } from "../../../types/index";
import { response } from "../../../utils/helpers";

export default class WalletTransferNonCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload: WalletTransferNonCustodialSingleRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/transfer/single', payload);
        return response<any>(res);
    }
    
}