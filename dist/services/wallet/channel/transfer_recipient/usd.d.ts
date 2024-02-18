import Base from "../../../../services/base.js";
import { Res, WalletChannelTransferRecipientUSDSingleRequest } from "../../../../types/index.js";
export default class WalletChannelTransferRecipientUSD {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientUSDSingleRequest): Promise<Res<string[]>>;
}
