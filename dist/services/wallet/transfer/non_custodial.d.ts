import Base from "../../../services/base.js";
import { Res, WalletTransferNonCustodialSingleRequest } from "../../../types/index.js";
export default class WalletTransferNonCustodial {
    private base;
    constructor(base: Base);
    single(payload: WalletTransferNonCustodialSingleRequest): Promise<Res<any>>;
}
