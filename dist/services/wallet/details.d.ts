import Base from "../../services/base";
import { Response, WalletDetailsCustodialRequest, WalletDetailsNonCustodialRequest } from "../../types";
export default class WalletDetails {
    private base;
    constructor(base: Base);
    custodial(payload: WalletDetailsCustodialRequest): Promise<Response<any>>;
    nonCustodial(payload: WalletDetailsNonCustodialRequest): Promise<Response<any>>;
}
