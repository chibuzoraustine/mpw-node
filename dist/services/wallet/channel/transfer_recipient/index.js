"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eur_1 = __importDefault(require("./eur"));
const gbp_1 = __importDefault(require("./gbp"));
const ngn_1 = __importDefault(require("./ngn"));
const usd_1 = __importDefault(require("./usd"));
class WalletChannelTransferRecipient {
    constructor(base) {
        this.base = base;
        this.eur = new eur_1.default(this.base);
        this.gbp = new gbp_1.default(this.base);
        this.ngn = new ngn_1.default(this.base);
        this.usd = new usd_1.default(this.base);
    }
}
exports.default = WalletChannelTransferRecipient;
