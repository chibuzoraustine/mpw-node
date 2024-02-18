import Base from "../../../services/base.js";
import WalletTransferCustodial from "./custodial.js";
import WalletTransferNonCustodial from "./non_custodial.js";
export default class WalletDetails {
    private base;
    custodial: WalletTransferCustodial;
    nonCustodial: WalletTransferNonCustodial;
    constructor(base: Base);
}
