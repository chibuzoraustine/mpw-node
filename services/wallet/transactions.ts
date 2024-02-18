import Base from "../../services/base";
import { Response, WalletTransactionsCustodialRequest, WalletTransactionsNonCustodialRequest } from "../../types";
import { response } from "../../utils/helpers";

export default class WalletTransactions {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async custodial(payload: WalletTransactionsCustodialRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/transactions', {code: "internal", ...payload});
        return response<any>(res);
    }

    async nonCustodial(payload: WalletTransactionsNonCustodialRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/transactions', {code: "extrenal", ...payload});
        return response<any>(res);
    }
    
}