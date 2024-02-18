import Base from "../../../../services/base.js";
import WalletChannelTransferRecipientEUR from "./eur.js";
import WalletChannelTransferRecipientGBP from "./gbp.js";
import WalletChannelTransferRecipientNGN from "./ngn.js";
import WalletChannelTransferRecipientUSD from "./usd.js";
export default class WalletChannelTransferRecipient {
    private base;
    eur: WalletChannelTransferRecipientEUR;
    gbp: WalletChannelTransferRecipientGBP;
    ngn: WalletChannelTransferRecipientNGN;
    usd: WalletChannelTransferRecipientUSD;
    constructor(base: Base);
}
