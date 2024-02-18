import { Res, WalletUpdateRequest } from "../../types/index.js";
import Base from "../base.js";
import WalletCreate from "./create.js";
import { response } from "../../utils/helpers.js";
import WalletChannel from "./channel/index.js";
import WalletCollection from "./collection/index.js";
import WalletTransfer from "./transfer/index.js";
import WalletDetails from "./details.js";
import WalletTransactions from "./transactions.js";
import WalletExchange from "./exchange/index.js";

export default class Wallet {

    private base:Base
    create:WalletCreate;
    channel:WalletChannel;
    collection:WalletCollection;
    transfer:WalletTransfer;
    details:WalletDetails;
    transactions: WalletTransactions;
    exchange: WalletExchange;

    constructor(base:Base) {
        this.base = base;
        this.create = new WalletCreate(this.base);
        this.channel = new WalletChannel(this.base);
        this.collection = new WalletCollection(this.base);
        this.transfer = new WalletTransfer(this.base);
        this.details = new WalletDetails(this.base);
        this.transactions = new WalletTransactions(this.base);
        this.exchange = new WalletExchange(this.base);
    }    

    async update(payload:WalletUpdateRequest): Promise<Res<any>> {
        const res = await this.base.request('wallet/update', payload);
        return response<any>(res)
    }
    
}