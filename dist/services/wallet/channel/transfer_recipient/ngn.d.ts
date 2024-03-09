import Base from "../../../../services/base";
import { Res, WalletChannelTransferRecipientNGNSingleRequest } from "../../../../types/index";
export default class WalletChannelTransferRecipientNGN {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientNGNSingleRequest): Promise<Res<string[]>>;
    bulk(payload: WalletChannelTransferRecipientNGNSingleRequest): Promise<Res<string[]>>;
    csv(payload: WalletChannelTransferRecipientNGNSingleRequest): Promise<Res<string[]>>;
}
