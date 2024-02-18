import Base from "../../../services/base.js";
import WalletChannelTransferRecipient from "./transfer_recipient/index.js";
import {
    Res,
    WalletChannelChainAddressRequest,
    WalletChannelDetailsRequest,
    WalletChannelDownloadRequest,
    WalletChannelRemoveRequest,
    WalletChannelVirtualAccountRequest
} from "../../../types/index.js";
import { response } from "../../../utils/helpers.js";

export default class WalletChannel {

    private base: Base
    transferRecipient: WalletChannelTransferRecipient;

    constructor(base: Base) {
        this.base = base;
        this.transferRecipient = new WalletChannelTransferRecipient(this.base);
    }

    async details(payload: WalletChannelDetailsRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/channel/details', payload);
        return response<any>(res);
    }

    async remove(payload: WalletChannelRemoveRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/channel/remove', payload);
        return response<any>(res);
    }

    async virtualAccount(payload: WalletChannelVirtualAccountRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/channel/generate-virtual-account', payload);
        return response<any>(res);
    }

    async chainAddress(payload: WalletChannelChainAddressRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/channel/generate-chain-address', payload);
        return response<any>(res);
    }

    async download(payload: WalletChannelDownloadRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/channel/generate-downloadable-file', payload);
        return response<any>(res);
    }

}