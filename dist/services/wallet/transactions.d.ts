import Base from "../../services/base";
import { Response, WalletTransactionsCustodialRequest, WalletTransactionsNonCustodialRequest } from "../../types";
export default class WalletTransactions {
    private base;
    constructor(base: Base);
    custodial(payload: WalletTransactionsCustodialRequest): Promise<Response<any>>;
    nonCustodial(payload: WalletTransactionsNonCustodialRequest): Promise<Response<any>>;
}
