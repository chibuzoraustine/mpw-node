import Base from "../../../services/base";
import { Res, WalletCollectionInitiateRequest } from "../../../types/index";
import WalletCollectionMethod from "./method/index";
export default class WalletCollection {
    private base;
    method: WalletCollectionMethod;
    constructor(base: Base);
    initiate(payload: WalletCollectionInitiateRequest): Promise<Res<any>>;
}
