import Base from "../../../../services/base";
import { Response, WalletChannelTransferRecipientUSDSingleRequest } from "../../../../types";
export default class WalletChannelTransferRecipientUSD {
    private base;
    constructor(base: Base);
    single(payload: WalletChannelTransferRecipientUSDSingleRequest): Promise<Response<string[]>>;
}
