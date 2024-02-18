import Base from "../../../services/base.js";
import WalletExchangeCustodial from "./custodial.js";
import WalletExchangeNonCustodial from "./non_custodial.js";

export default class WalletExchange {

    private base:Base
    custodial: WalletExchangeCustodial;
    nonCustodial: WalletExchangeNonCustodial;

    constructor(base:Base) {
        this.base = base;
        this.custodial = new WalletExchangeCustodial(this.base);
        this.nonCustodial = new WalletExchangeNonCustodial(this.base);
    }
    
}