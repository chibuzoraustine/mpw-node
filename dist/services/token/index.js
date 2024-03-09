"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("./storage");
const multi_1 = require("./multi");
class Token {
    constructor(base) {
        this.base = base;
        this.storage = new storage_1.default(this.base);
        this.token = new multi_1.default(this.base);
    }
}
exports.default = Token;
