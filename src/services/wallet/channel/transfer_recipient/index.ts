import Base from "../../../../services/base.js";
import WalletChannelTransferRecipientEUR from "./eur.js";
import WalletChannelTransferRecipientGBP from "./gbp.js";
import WalletChannelTransferRecipientNGN from "./ngn.js";
import WalletChannelTransferRecipientUSD from "./usd.js";

export default class WalletChannelTransferRecipient {

    private base:Base
    eur: WalletChannelTransferRecipientEUR;
    gbp: WalletChannelTransferRecipientGBP;
    ngn: WalletChannelTransferRecipientNGN;
    usd: WalletChannelTransferRecipientUSD;

    constructor(base:Base) {
        this.base = base;
        this.eur = new WalletChannelTransferRecipientEUR(this.base);
        this.gbp = new WalletChannelTransferRecipientGBP(this.base);
        this.ngn = new WalletChannelTransferRecipientNGN(this.base);
        this.usd = new WalletChannelTransferRecipientUSD(this.base);
    }
    
}