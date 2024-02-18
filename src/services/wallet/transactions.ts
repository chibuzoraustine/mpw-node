import Base from "../../services/base.js";
import { Res, WalletTransactionsCustodialRequest, WalletTransactionsNonCustodialRequest } from "../../types/index.js";
import { response } from "../../utils/helpers.js";

export default class WalletTransactions {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async custodial(payload: WalletTransactionsCustodialRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/transactions', {code: "internal", ...payload});
        return response<any>(res);
    }

    async nonCustodial(payload: WalletTransactionsNonCustodialRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/transactions', {code: "extrenal", ...payload});
        return response<any>(res);
    }
    
}