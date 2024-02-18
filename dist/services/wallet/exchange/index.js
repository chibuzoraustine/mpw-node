"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const custodial_1 = __importDefault(require("./custodial"));
const non_custodial_1 = __importDefault(require("./non_custodial"));
class WalletExchange {
    constructor(base) {
        this.base = base;
        this.custodial = new custodial_1.default(this.base);
        this.nonCustodial = new non_custodial_1.default(this.base);
    }
}
exports.default = WalletExchange;
