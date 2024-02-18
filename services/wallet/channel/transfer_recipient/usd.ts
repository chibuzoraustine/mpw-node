import Base from "@/services/base";
import { Response, WalletChannelTransferRecipientUSDSingleRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletChannelTransferRecipientUSD {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload:WalletChannelTransferRecipientUSDSingleRequest): Promise<Response<string[]>> {
        const res = await this.base.request('wallet/channel/add-transfer-recipient-account', payload);
        return response<string[]>(res);
    }
    
}