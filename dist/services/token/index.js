"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(require("./storage"));
const multi_1 = __importDefault(require("./multi"));
class Token {
    constructor(base) {
        this.base = base;
        this.storage = new storage_1.default(this.base);
        this.token = new multi_1.default(this.base);
    }
}
exports.default = Token;
