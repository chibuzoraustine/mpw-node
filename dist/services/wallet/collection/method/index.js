"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fiat_1 = __importDefault(require("./fiat"));
const crypto_1 = __importDefault(require("./crypto"));
class WalletCollectionMethod {
    constructor(base) {
        this.base = base;
        this.fiat = new fiat_1.default(this.base);
        this.crypto = new crypto_1.default(this.base);
    }
}
exports.default = WalletCollectionMethod;
