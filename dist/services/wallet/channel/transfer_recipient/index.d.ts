import Base from "../../../../services/base";
import WalletChannelTransferRecipientEUR from "./eur";
import WalletChannelTransferRecipientGBP from "./gbp";
import WalletChannelTransferRecipientNGN from "./ngn";
import WalletChannelTransferRecipientUSD from "./usd";
export default class WalletChannelTransferRecipient {
    private base;
    eur: WalletChannelTransferRecipientEUR;
    gbp: WalletChannelTransferRecipientGBP;
    ngn: WalletChannelTransferRecipientNGN;
    usd: WalletChannelTransferRecipientUSD;
    constructor(base: Base);
}
