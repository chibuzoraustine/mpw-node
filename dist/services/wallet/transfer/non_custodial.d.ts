import Base from "@/services/base";
import { Response, WalletTransferNonCustodialSingleRequest } from "@/types";
export default class WalletTransferNonCustodial {
    private base;
    constructor(base: Base);
    single(payload: WalletTransferNonCustodialSingleRequest): Promise<Response<any>>;
}
