"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fiat_js_1 = require("./fiat.js");
const crypto_js_1 = require("./crypto.js");
class WalletCollectionMethod {
    constructor(base) {
        this.base = base;
        this.fiat = new fiat_js_1.default(this.base);
        this.crypto = new crypto_js_1.default(this.base);
    }
}
exports.default = WalletCollectionMethod;
