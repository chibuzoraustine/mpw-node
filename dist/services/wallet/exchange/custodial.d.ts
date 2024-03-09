import Base from "../../../services/base";
import { Res, WalletExchangeCustodialCalculateRequest, WalletExchangeCustodialInitiateRequest } from "../../../types/index";
export default class WalletExchangeCustodial {
    private base;
    constructor(base: Base);
    initiate(payload: WalletExchangeCustodialInitiateRequest): Promise<Res<any>>;
    calculate(payload: WalletExchangeCustodialCalculateRequest): Promise<Res<any>>;
}
