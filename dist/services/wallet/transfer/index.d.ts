import Base from "@/services/base";
import WalletTransferCustodial from "./custodial";
import WalletTransferNonCustodial from "./non_custodial";
export default class WalletDetails {
    private base;
    custodial: WalletTransferCustodial;
    nonCustodial: WalletTransferNonCustodial;
    constructor(base: Base);
}
