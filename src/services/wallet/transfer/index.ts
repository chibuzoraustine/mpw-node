import Base from "../../../services/base";
import WalletTransferCustodial from "./custodial";
import WalletTransferNonCustodial from "./non_custodial";

export default class WalletDetails {

    private base:Base
    custodial: WalletTransferCustodial;
    nonCustodial: WalletTransferNonCustodial;

    constructor(base:Base) {
        this.base = base;
        this.custodial = new WalletTransferCustodial(this.base);
        this.nonCustodial = new WalletTransferNonCustodial(this.base);
    }
    
}