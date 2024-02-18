import Base from "../../../services/base.js";
import { Res, WalletTransferCustodialBulkRequest, WalletTransferCustodialBulkWithFileUploadRequest, WalletTransferCustodialSingleRequest } from "../../../types/index.js";
import { response } from "../../../utils/helpers.js";

export default class WalletTransferCustodial {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload: WalletTransferCustodialSingleRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/transfer/single', payload);
        return response<any>(res);
    }

    async bulk(payload: WalletTransferCustodialBulkRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/transfer/bulk', payload);
        return response<any>(res);
    }

    async bulkWithFileUpload(payload: WalletTransferCustodialBulkWithFileUploadRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/transfer/bulk', payload);
        return response<any>(res);
    }
    
}