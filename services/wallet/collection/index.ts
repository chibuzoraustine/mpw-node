import Base from "@/services/base";
import { Response, WalletCollectionInitiateRequest } from "@/types";
import { response } from "@/utils/helpers";
import WalletCollectionMethod from "./method";

export default class WalletCollection {

    private base:Base
    method: WalletCollectionMethod;

    constructor(base:Base) {
        this.base = base;
        this.method = new WalletCollectionMethod(this.base);
    }

    async initiate(payload: WalletCollectionInitiateRequest): Promise<Response<any>> {
        const res = await this.base.request('wallet/collection/initiate', payload);
        return response<any>(res);
    }
    
}