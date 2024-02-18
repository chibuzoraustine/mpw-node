import Base from "../../../services/base";
import { Response, WalletExchangeCustodialCalculateRequest, WalletExchangeCustodialInitiateRequest } from "../../../types";
export default class WalletExchangeCustodial {
    private base;
    constructor(base: Base);
    initiate(payload: WalletExchangeCustodialInitiateRequest): Promise<Response<any>>;
    calculate(payload: WalletExchangeCustodialCalculateRequest): Promise<Response<any>>;
}
