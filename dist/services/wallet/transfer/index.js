"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custodial_js_1 = require("./custodial.js");
const non_custodial_js_1 = require("./non_custodial.js");
class WalletDetails {
    constructor(base) {
        this.base = base;
        this.custodial = new custodial_js_1.default(this.base);
        this.nonCustodial = new non_custodial_js_1.default(this.base);
    }
}
exports.default = WalletDetails;
