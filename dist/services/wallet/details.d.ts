import Base from "../../services/base.js";
import { Res, WalletDetailsCustodialRequest, WalletDetailsNonCustodialRequest } from "../../types/index.js";
export default class WalletDetails {
    private base;
    constructor(base: Base);
    custodial(payload: WalletDetailsCustodialRequest): Promise<Res<any>>;
    nonCustodial(payload: WalletDetailsNonCustodialRequest): Promise<Res<any>>;
}
