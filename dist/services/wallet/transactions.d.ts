import Base from "../../services/base.js";
import { Res, WalletTransactionsCustodialRequest, WalletTransactionsNonCustodialRequest } from "../../types/index.js";
export default class WalletTransactions {
    private base;
    constructor(base: Base);
    custodial(payload: WalletTransactionsCustodialRequest): Promise<Res<any>>;
    nonCustodial(payload: WalletTransactionsNonCustodialRequest): Promise<Res<any>>;
}
