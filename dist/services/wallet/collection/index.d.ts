import Base from "../../../services/base.js";
import { Res, WalletCollectionInitiateRequest } from "../../../types/index.js";
import WalletCollectionMethod from "./method/index.js";
export default class WalletCollection {
    private base;
    method: WalletCollectionMethod;
    constructor(base: Base);
    initiate(payload: WalletCollectionInitiateRequest): Promise<Res<any>>;
}
