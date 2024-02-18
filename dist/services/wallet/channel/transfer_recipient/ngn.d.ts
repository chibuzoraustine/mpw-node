import Base from "@/services/base";
import { Response, WalletChannelTransferRecipientNGNSingleRequest } from "@/types";
export default class WalletChannelTransferRecipientNGN {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientNGNSingleRequest): Promise<Response<string[]>>;
    bulk(payload: WalletChannelTransferRecipientNGNSingleRequest): Promise<Response<string[]>>;
    csv(payload: WalletChannelTransferRecipientNGNSingleRequest): Promise<Response<string[]>>;
}
