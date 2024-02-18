import { Response, WalletUpdateRequest } from "../../types";
import Base from "../base";
import WalletCreate from "./create";
import WalletChannel from "./channel";
import WalletCollection from "./collection";
import WalletTransfer from "./transfer";
import WalletDetails from "./details";
import WalletTransactions from "./transactions";
import WalletExchange from "./exchange";
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
    update(payload: WalletUpdateRequest): Promise<Response<any>>;
}
