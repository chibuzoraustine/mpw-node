import Base from "@/services/base";
import { Response, WalletCollectionInitiateRequest } from "@/types";
import WalletCollectionMethod from "./method";
export default class WalletCollection {
    private base;
    method: WalletCollectionMethod;
    constructor(base: Base);
    initiate(payload: WalletCollectionInitiateRequest): Promise<Response<any>>;
}
