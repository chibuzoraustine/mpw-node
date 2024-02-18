import Base from "@/services/base";
import WalletChannelTransferRecipient from "./transfer_recipient";
import { Response, WalletChannelChainAddressRequest, WalletChannelDetailsRequest, WalletChannelDownloadRequest, WalletChannelRemoveRequest, WalletChannelVirtualAccountRequest } from "@/types";
export default class WalletChannel {
    private base;
    transferRecipient: WalletChannelTransferRecipient;
    constructor(base: Base);
    details(payload: WalletChannelDetailsRequest): Promise<Response<any>>;
    remove(payload: WalletChannelRemoveRequest): Promise<Response<any>>;
    virtualAccount(payload: WalletChannelVirtualAccountRequest): Promise<Response<any>>;
    chainAddress(payload: WalletChannelChainAddressRequest): Promise<Response<any>>;
    download(payload: WalletChannelDownloadRequest): Promise<Response<any>>;
}
