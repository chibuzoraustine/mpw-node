import Base from "../../../../services/base";
import { Res, WalletChannelTransferRecipientUSDSingleRequest } from "../../../../types/index";
export default class WalletChannelTransferRecipientUSD {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientUSDSingleRequest): Promise<Res<string[]>>;
}
