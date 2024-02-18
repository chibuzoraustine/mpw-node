import Base from "@/services/base";
import { Response, WalletCollectionMethodFiatInfoRequest, WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest, WalletCollectionMethodFiatPayWithCardEmbedRequest, WalletCollectionMethodFiatPayWithCardNakedRequest, WalletCollectionMethodFiatPayWithSavedCardTokenRequest, WalletCollectionMethodFiatPayWithUSSDRequest } from "@/types";
import { response } from "@/utils/helpers";

export default class WalletCollectionMethodFiat {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async info(payload: WalletCollectionMethodFiatInfoRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/get-info', payload);
        return response<any>(res);
    }

    async payWithUSSD(payload: WalletCollectionMethodFiatPayWithUSSDRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/ussd', payload);
        return response<any>(res);
    }

    async payToDynamicVirtualAccount(payload: WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/dynamic-virtual-account', payload);
        return response<any>(res);
    }

    async payWithCardNaked(payload: WalletCollectionMethodFiatPayWithCardNakedRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/card-naked', payload);
        return response<any>(res);
    }

    async payWithCardEmbed(payload: WalletCollectionMethodFiatPayWithCardEmbedRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/card-embed', payload);
        return response<any>(res);
    }

    async payWithSavedCardToken(payload: WalletCollectionMethodFiatPayWithSavedCardTokenRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/method/saved-card-token', payload);
        return response<any>(res);
    }
    
}