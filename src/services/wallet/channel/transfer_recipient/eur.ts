import Base from "../../../../services/base";
import { Res, WalletChannelTransferRecipientEURSingleRequest } from "../../../../types/index";
import { response } from "../../../../utils/helpers";

export default class WalletChannelTransferRecipientEUR {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async single(payload:WalletChannelTransferRecipientEURSingleRequest): Promise<Res<string[]>> {
        const res = await this.base.request('wallet/channel/add-transfer-recipient-account', payload);
        return response<string[]>(res);
    }
    
}