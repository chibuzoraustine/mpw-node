import Base from "@/services/base";
import WalletExchangeCustodial from "./custodial";
import WalletExchangeNonCustodial from "./non_custodial";

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