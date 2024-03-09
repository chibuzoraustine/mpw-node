import Base from "../../../../services/base";
import { Res, WalletChannelTransferRecipientGBPSingleRequest } from "../../../../types/index";
export default class WalletChannelTransferRecipientGBP {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientGBPSingleRequest): Promise<Res<string[]>>;
}
