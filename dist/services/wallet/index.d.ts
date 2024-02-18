import { Res, WalletUpdateRequest } from "../../types/index.js";
import Base from "../base.js";
import WalletCreate from "./create.js";
import WalletChannel from "./channel/index.js";
import WalletCollection from "./collection/index.js";
import WalletTransfer from "./transfer/index.js";
import WalletDetails from "./details.js";
import WalletTransactions from "./transactions.js";
import WalletExchange from "./exchange/index.js";
export default class Wallet {
    private base;
    create: WalletCreate;
    channel: WalletChannel;
    collection: WalletCollection;
    transfer: WalletTransfer;
    details: WalletDetails;
    transactions: WalletTransactions;
    exchange: WalletExchange;
    constructor(base: Base);
    update(payload: WalletUpdateRequest): Promise<Res<any>>;
}
