import { Res, WalletUpdateRequest } from "../../types/index";
import Base from "../base";
import WalletCreate from "./create";
import { response } from "../../utils/helpers";
import WalletChannel from "./channel/index";
import WalletCollection from "./collection/index";
import WalletTransfer from "./transfer/index";
import WalletDetails from "./details";
import WalletTransactions from "./transactions";
import WalletExchange from "./exchange/index";

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