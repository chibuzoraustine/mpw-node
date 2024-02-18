import Base from "../../../services/base.js";
import WalletChannelTransferRecipient from "./transfer_recipient/index.js";
import { Res, WalletChannelChainAddressRequest, WalletChannelDetailsRequest, WalletChannelDownloadRequest, WalletChannelRemoveRequest, WalletChannelVirtualAccountRequest } from "../../../types/index.js";
export default class WalletChannel {
    private base;
    transferRecipient: WalletChannelTransferRecipient;
    constructor(base: Base);
    details(payload: WalletChannelDetailsRequest): Promise<Res<any>>;
    remove(payload: WalletChannelRemoveRequest): Promise<Res<any>>;
    virtualAccount(payload: WalletChannelVirtualAccountRequest): Promise<Res<any>>;
    chainAddress(payload: WalletChannelChainAddressRequest): Promise<Res<any>>;
    download(payload: WalletChannelDownloadRequest): Promise<Res<any>>;
}
