import Base from "../../../../services/base.js";
import { Res, WalletCollectionMethodFiatInfoRequest, WalletCollectionMethodFiatInfoResponse, WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest, WalletCollectionMethodFiatPayWithCardEmbedRequest, WalletCollectionMethodFiatPayWithCardNakedRequest, WalletCollectionMethodFiatPayWithSavedCardTokenRequest, WalletCollectionMethodFiatPayWithUSSDRequest, WalletCollectionMethodFiatPayWithUSSDResponse } from "../../../../types/index.js";
export default class WalletCollectionMethodFiat {
    private base;
    constructor(base: Base);
    info(payload: WalletCollectionMethodFiatInfoRequest): Promise<Res<WalletCollectionMethodFiatInfoResponse>>;
    payWithUSSD(payload: WalletCollectionMethodFiatPayWithUSSDRequest): Promise<Res<WalletCollectionMethodFiatPayWithUSSDResponse>>;
    payToDynamicVirtualAccount(payload: WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest): Promise<Res<any>>;
    payWithCardNaked(payload: WalletCollectionMethodFiatPayWithCardNakedRequest): Promise<Res<any>>;
    payWithCardEmbed(payload: WalletCollectionMethodFiatPayWithCardEmbedRequest): Promise<Res<any>>;
    payWithSavedCardToken(payload: WalletCollectionMethodFiatPayWithSavedCardTokenRequest): Promise<Res<any>>;
}
