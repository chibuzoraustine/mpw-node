import Base from "@/services/base";
import WalletExchangeCustodial from "./custodial";
import WalletExchangeNonCustodial from "./non_custodial";
export default class WalletExchange {
    private base;
    custodial: WalletExchangeCustodial;
    nonCustodial: WalletExchangeNonCustodial;
    constructor(base: Base);
}
