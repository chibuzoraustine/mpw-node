import Base from "../../../../services/base";
import WalletChannelTransferRecipientEUR from "./eur";
import WalletChannelTransferRecipientGBP from "./gbp";
import WalletChannelTransferRecipientNGN from "./ngn";
import WalletChannelTransferRecipientUSD from "./usd";

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