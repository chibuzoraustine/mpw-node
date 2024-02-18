import Base from "../../../services/base";
import { Response, WalletCollectionInitiateRequest } from "../../../types";
import { response } from "../../../utils/helpers";
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