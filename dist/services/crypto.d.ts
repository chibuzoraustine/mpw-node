import Base from "./base.js";
import { Res } from "../types/index.js";
import { TransactionParams } from "../types/crypto.js";
export default class Crypto {
    private base;
    constructor(base: Base);
    ethSignTransaction(privateKey: string, txParams: TransactionParams): Promise<Res<string>>;
}
