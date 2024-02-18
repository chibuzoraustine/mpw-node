import Base from "../../../services/base.js";
import WalletExchangeCustodial from "./custodial.js";
import WalletExchangeNonCustodial from "./non_custodial.js";
export default class WalletExchange {
    private base;
    custodial: WalletExchangeCustodial;
    nonCustodial: WalletExchangeNonCustodial;
    constructor(base: Base);
}
