"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const helpers_1 = require("../../utils/helpers");
const index_1 = require("./channel/index");
const index_2 = require("./collection/index");
const index_3 = require("./transfer/index");
const details_1 = require("./details");
const transactions_1 = require("./transactions");
const index_4 = require("./exchange/index");
class Wallet {
    constructor(base) {
        this.base = base;
        this.create = new create_1.default(this.base);
        this.channel = new index_1.default(this.base);
        this.collection = new index_2.default(this.base);
        this.transfer = new index_3.default(this.base);
        this.details = new details_1.default(this.base);
        this.transactions = new transactions_1.default(this.base);
        this.exchange = new index_4.default(this.base);
    }
    update(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/update', payload);
            return (0, helpers_1.response)(res);
        });
    }
}
exports.default = Wallet;
