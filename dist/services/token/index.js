"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_js_1 = require("./storage.js");
const multi_js_1 = require("./multi.js");
class Token {
    constructor(base) {
        this.base = base;
        this.storage = new storage_js_1.default(this.base);
        this.token = new multi_js_1.default(this.base);
    }
}
exports.default = Token;
