import Base from "../../../../services/base";
import { Res, WalletChannelTransferRecipientEURSingleRequest } from "../../../../types/index";
export default class WalletChannelTransferRecipientEUR {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientEURSingleRequest): Promise<Res<string[]>>;
}
