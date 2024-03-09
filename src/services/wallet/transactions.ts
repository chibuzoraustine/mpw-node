import Base from "../../services/base";
import { Res, WalletTransactionsCustodialRequest, WalletTransactionsNonCustodialRequest } from "../../types/index";
import { response } from "../../utils/helpers";

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