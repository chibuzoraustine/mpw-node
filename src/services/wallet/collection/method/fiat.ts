import Base from "../../../../services/base.js";
import {
    Res,
    WalletCollectionMethodFiatInfoRequest,
    WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest,
    WalletCollectionMethodFiatPayWithCardEmbedRequest,
    WalletCollectionMethodFiatPayWithCardNakedRequest,
    WalletCollectionMethodFiatPayWithSavedCardTokenRequest,
    WalletCollectionMethodFiatPayWithUSSDRequest
} from "../../../../types/index.js";
import { response } from "../../../../utils/helpers.js";

export default class WalletCollectionMethodFiat {

    private base: Base

    constructor(base: Base) {
        this.base = base;
    }

    async info(payload: WalletCollectionMethodFiatInfoRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/get-info', payload);
        return response<any>(res);
    }

    async payWithUSSD(payload: WalletCollectionMethodFiatPayWithUSSDRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/ussd', payload);
        return response<any>(res);
    }

    async payToDynamicVirtualAccount(payload: WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/dynamic-virtual-account', payload);
        return response<any>(res);
    }

    async payWithCardNaked(payload: WalletCollectionMethodFiatPayWithCardNakedRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/card-naked', payload);
        return response<any>(res);
    }

    async payWithCardEmbed(payload: WalletCollectionMethodFiatPayWithCardEmbedRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/card-embed', payload);
        return response<any>(res);
    }

    async payWithSavedCardToken(payload: WalletCollectionMethodFiatPayWithSavedCardTokenRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/method/saved-card-token', payload);
        return response<any>(res);
    }

}