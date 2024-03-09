"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fiat_1 = require("./fiat");
const crypto_1 = require("./crypto");
class WalletCollectionMethod {
    constructor(base) {
        this.base = base;
        this.fiat = new fiat_1.default(this.base);
        this.crypto = new crypto_1.default(this.base);
    }
}
exports.default = WalletCollectionMethod;
