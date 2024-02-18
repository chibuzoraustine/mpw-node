import Base from "../../../../services/base";
import { Response, WalletCollectionMethodFiatInfoRequest, WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest, WalletCollectionMethodFiatPayWithCardEmbedRequest, WalletCollectionMethodFiatPayWithCardNakedRequest, WalletCollectionMethodFiatPayWithSavedCardTokenRequest, WalletCollectionMethodFiatPayWithUSSDRequest } from "../../../../types";
export default class WalletCollectionMethodFiat {
    private base;
    constructor(base: Base);
    info(payload: WalletCollectionMethodFiatInfoRequest): Promise<Response<any>>;
    payWithUSSD(payload: WalletCollectionMethodFiatPayWithUSSDRequest): Promise<Response<any>>;
    payToDynamicVirtualAccount(payload: WalletCollectionMethodFiatPayToDynamicVirtualAccountRequest): Promise<Response<any>>;
    payWithCardNaked(payload: WalletCollectionMethodFiatPayWithCardNakedRequest): Promise<Response<any>>;
    payWithCardEmbed(payload: WalletCollectionMethodFiatPayWithCardEmbedRequest): Promise<Response<any>>;
    payWithSavedCardToken(payload: WalletCollectionMethodFiatPayWithSavedCardTokenRequest): Promise<Response<any>>;
}
