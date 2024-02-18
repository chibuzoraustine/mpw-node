import Base from "@/services/base";
import { Response, WalletChannelTransferRecipientEURSingleRequest } from "@/types";
export default class WalletChannelTransferRecipientEUR {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientEURSingleRequest): Promise<Response<string[]>>;
}
