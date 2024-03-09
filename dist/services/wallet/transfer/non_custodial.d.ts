import Base from "../../../services/base";
import { Res, WalletTransferNonCustodialSingleRequest } from "../../../types/index";
export default class WalletTransferNonCustodial {
    private base;
    constructor(base: Base);
    single(payload: WalletTransferNonCustodialSingleRequest): Promise<Res<any>>;
}
