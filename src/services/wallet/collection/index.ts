import Base from "../../../services/base.js";
import { Res, WalletCollectionInitiateRequest } from "../../../types/index.js";
import { response } from "../../../utils/helpers.js";
import WalletCollectionMethod from "./method/index.js";

export default class WalletCollection {

    private base:Base
    method: WalletCollectionMethod;

    constructor(base:Base) {
        this.base = base;
        this.method = new WalletCollectionMethod(this.base);
    }

    async initiate(payload: WalletCollectionInitiateRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/collection/initiate', payload);
        return response<any>(res);
    }
    
}