import Base from "../../../services/base.js";
import { Res, WalletExchangeNonCustodialCalculateRequest, WalletExchangeNonCustodialInitiateRequest } from "../../../types/index.js";
export default class WalletExchangeNonCustodial {
    private base;
    constructor(base: Base);
    initiate(payload: WalletExchangeNonCustodialInitiateRequest): Promise<Res<any>>;
    calculate(payload: WalletExchangeNonCustodialCalculateRequest): Promise<Res<any>>;
}
