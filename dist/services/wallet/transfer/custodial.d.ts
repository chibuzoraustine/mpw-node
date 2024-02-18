import Base from "@/services/base";
import { Response, WalletTransferCustodialBulkRequest, WalletTransferCustodialBulkWithFileUploadRequest, WalletTransferCustodialSingleRequest } from "@/types";
export default class WalletTransferCustodial {
    private base;
    constructor(base: Base);
    single(payload: WalletTransferCustodialSingleRequest): Promise<Response<any>>;
    bulk(payload: WalletTransferCustodialBulkRequest): Promise<Response<any>>;
    bulkWithFileUpload(payload: WalletTransferCustodialBulkWithFileUploadRequest): Promise<Response<any>>;
}
