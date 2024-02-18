import Base from "../../../../services/base.js";
import { Res, WalletChannelTransferRecipientEURSingleRequest } from "../../../../types/index.js";
export default class WalletChannelTransferRecipientEUR {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientEURSingleRequest): Promise<Res<string[]>>;
}
