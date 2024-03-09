import Base from "../../../../services/base";
import {
    Res,
    WalletCollectionMethodFiatInfoRequest,
    WalletCollectionMethodFiatInfoResponse,
    WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest,
    WalletCollectionMethodFiatPayWithCardEmbedRequest,
    WalletCollectionMethodFiatPayWithCardNakedRequest,
    WalletCollectionMethodFiatPayWithSavedCardTokenRequest,
    WalletCollectionMethodFiatPayWithUSSDRequest,
    WalletCollectionMethodFiatPayWithUSSDResponse
} from "../../../../types/index";
import { response } from "../../../../utils/helpers";

export default class WalletCollectionMethodFiat {

    private base: Base

    constructor(base: Base) {
        this.base = base;
    }

    async info(payload: WalletCollectionMethodFiatInfoRequest): Promise<Res<WalletCollectionMethodFiatInfoResponse>> {
        const res = await this.base.request('wallet/collection/method/get-info', payload);
        return response<WalletCollectionMethodFiatInfoResponse>(res);
    }

    async payWithUSSD(payload: WalletCollectionMethodFiatPayWithUSSDRequest): Promise<Res<WalletCollectionMethodFiatPayWithUSSDResponse>> {
        const res = await this.base.request('wallet/collection/method/ussd', payload);
        return response<WalletCollectionMethodFiatPayWithUSSDResponse>(res);
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