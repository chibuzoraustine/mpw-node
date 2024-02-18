import Base from "../../../../services/base.js";
import { Res, WalletChannelTransferRecipientGBPSingleRequest } from "../../../../types/index.js";
export default class WalletChannelTransferRecipientGBP {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientGBPSingleRequest): Promise<Res<string[]>>;
}
