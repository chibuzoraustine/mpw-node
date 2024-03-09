import { Res, WalletUpdateRequest } from "../../types/index";
import Base from "../base";
import WalletCreate from "./create";
import WalletChannel from "./channel/index";
import WalletCollection from "./collection/index";
import WalletTransfer from "./transfer/index";
import WalletDetails from "./details";
import WalletTransactions from "./transactions";
import WalletExchange from "./exchange/index";
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
