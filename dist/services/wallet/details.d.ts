import Base from "../../services/base";
import { Res, WalletDetailsCustodialRequest, WalletDetailsNonCustodialRequest } from "../../types/index";
export default class WalletDetails {
    private base;
    constructor(base: Base);
    custodial(payload: WalletDetailsCustodialRequest): Promise<Res<any>>;
    nonCustodial(payload: WalletDetailsNonCustodialRequest): Promise<Res<any>>;
}
