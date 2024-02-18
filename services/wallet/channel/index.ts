import Base from "../../../services/base";
import WalletChannelTransferRecipient from "./transfer_recipient";
import {
    Response,
    WalletChannelChainAddressRequest,
    WalletChannelDetailsRequest,
    WalletChannelDownloadRequest,
    WalletChannelRemoveRequest,
    WalletChannelVirtualAccountRequest
} from "../../../types";
import { response } from "../../../utils/helpers";

export default class WalletChannel {

    private base: Base
    transferRecipient: WalletChannelTransferRecipient;

    constructor(base: Base) {
        this.base = base;
        this.transferRecipient = new WalletChannelTransferRecipient(this.base);
    }

    async details(payload: WalletChannelDetailsRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/channel/details', payload);
        return response<any>(res);
    }

    async remove(payload: WalletChannelRemoveRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/channel/remove', payload);
        return response<any>(res);
    }

    async virtualAccount(payload: WalletChannelVirtualAccountRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/channel/generate-virtual-account', payload);
        return response<any>(res);
    }

    async chainAddress(payload: WalletChannelChainAddressRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/channel/generate-chain-address', payload);
        return response<any>(res);
    }

    async download(payload: WalletChannelDownloadRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/channel/generate-downloadable-file', payload);
        return response<any>(res);
    }

}