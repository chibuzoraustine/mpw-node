"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eur_js_1 = require("./eur.js");
const gbp_js_1 = require("./gbp.js");
const ngn_js_1 = require("./ngn.js");
const usd_js_1 = require("./usd.js");
class WalletChannelTransferRecipient {
    constructor(base) {
        this.base = base;
        this.eur = new eur_js_1.default(this.base);
        this.gbp = new gbp_js_1.default(this.base);
        this.ngn = new ngn_js_1.default(this.base);
        this.usd = new usd_js_1.default(this.base);
    }
}
exports.default = WalletChannelTransferRecipient;
