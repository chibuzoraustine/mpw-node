import Base from "../../../../services/base.js";
import { Res, WalletChannelTransferRecipientUSDSingleRequest } from "../../../../types/index.js";
import { response } from "../../../../utils/helpers.js";

export default class WalletChannelTransferRecipientUSD {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload:WalletChannelTransferRecipientUSDSingleRequest): Promise<Res<string[]>> {
        const res = await this.base.request('wallet/channel/add-transfer-recipient-account', payload);
        return response<string[]>(res);
    }
    
}