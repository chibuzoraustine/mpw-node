import Base from "../../services/base";
import { Res, WalletTransactionsCustodialRequest, WalletTransactionsNonCustodialRequest } from "../../types/index";
export default class WalletTransactions {
    private base;
    constructor(base: Base);
    custodial(payload: WalletTransactionsCustodialRequest): Promise<Res<any>>;
    nonCustodial(payload: WalletTransactionsNonCustodialRequest): Promise<Res<any>>;
}
