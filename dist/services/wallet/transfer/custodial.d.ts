import Base from "../../../services/base";
import { Res, WalletTransferCustodialBulkRequest, WalletTransferCustodialBulkWithFileUploadRequest, WalletTransferCustodialSingleRequest } from "../../../types/index";
export default class WalletTransferCustodial {
    private base;
    constructor(base: Base);
    single(payload: WalletTransferCustodialSingleRequest): Promise<Res<any>>;
    bulk(payload: WalletTransferCustodialBulkRequest): Promise<Res<any>>;
    bulkWithFileUpload(payload: WalletTransferCustodialBulkWithFileUploadRequest): Promise<Res<any>>;
}
