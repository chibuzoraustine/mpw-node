import Base from "@/services/base";
import { Response, WalletChannelTransferRecipientGBPSingleRequest } from "@/types";
export default class WalletChannelTransferRecipientGBP {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientGBPSingleRequest): Promise<Response<string[]>>;
}
