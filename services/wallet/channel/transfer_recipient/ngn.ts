import Base from "@/services/base";
import { Response, WalletChannelTransferRecipientNGNSingleRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletChannelTransferRecipientNGN {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload:WalletChannelTransferRecipientNGNSingleRequest): Promise<Response<string[]>> {
        const res = await this.base.request('wallet/channel/add-transfer-recipient-account', payload);
        return response<string[]>(res);
    }

    async bulk(payload:WalletChannelTransferRecipientNGNSingleRequest): Promise<Response<string[]>> {
        const res = await this.base.request('wallet/channel/add-transfer-recipient-account', payload);
        return response<string[]>(res);
    }

    async csv(payload:WalletChannelTransferRecipientNGNSingleRequest): Promise<Response<string[]>> {
        const res = await this.base.request('wallet/channel/add-transfer-recipient-account', payload);
        return response<string[]>(res);
    }
    
}