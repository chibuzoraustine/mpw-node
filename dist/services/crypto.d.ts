import { Res } from "../types/index.js";
import { TransactionParams } from "../types/crypto.js";
export default class Crypto {
    ethSignTransaction(privateKey: string, txParams: TransactionParams): Promise<Res<string>>;
}
