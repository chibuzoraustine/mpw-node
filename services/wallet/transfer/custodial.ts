import Base from "@/services/base";
import { Response, WalletTransferCustodialBulkRequest, WalletTransferCustodialBulkWithFileUploadRequest, WalletTransferCustodialSingleRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletTransferCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload: WalletTransferCustodialSingleRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/transfer/single', payload);
        return response<any>(res);
    }

    async bulk(payload: WalletTransferCustodialBulkRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/transfer/bulk', payload);
        return response<any>(res);
    }

    async bulkWithFileUpload(payload: WalletTransferCustodialBulkWithFileUploadRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/transfer/bulk', payload);
        return response<any>(res);
    }
    
}