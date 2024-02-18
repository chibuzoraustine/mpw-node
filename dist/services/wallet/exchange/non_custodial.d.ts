import Base from "../../../services/base";
import { Response, WalletExchangeNonCustodialCalculateRequest, WalletExchangeNonCustodialInitiateRequest } from "../../../types";
export default class WalletExchangeNonCustodial {
    private base;
    constructor(base: Base);
    initiate(payload: WalletExchangeNonCustodialInitiateRequest): Promise<Response<any>>;
    calculate(payload: WalletExchangeNonCustodialCalculateRequest): Promise<Response<any>>;
}
