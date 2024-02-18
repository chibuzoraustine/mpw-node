import Base from "../../../services/base.js";
import { Res, WalletTransferCustodialBulkRequest, WalletTransferCustodialBulkWithFileUploadRequest, WalletTransferCustodialSingleRequest } from "../../../types/index.js";
export default class WalletTransferCustodial {
    private base;
    constructor(base: Base);
    single(payload: WalletTransferCustodialSingleRequest): Promise<Res<any>>;
    bulk(payload: WalletTransferCustodialBulkRequest): Promise<Res<any>>;
    bulkWithFileUpload(payload: WalletTransferCustodialBulkWithFileUploadRequest): Promise<Res<any>>;
}
