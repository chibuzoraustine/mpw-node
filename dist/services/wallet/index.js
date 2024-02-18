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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = __importDefault(require("./create"));
const helpers_1 = require("@/utils/helpers");
const channel_1 = __importDefault(require("./channel"));
const collection_1 = __importDefault(require("./collection"));
const transfer_1 = __importDefault(require("./transfer"));
const details_1 = __importDefault(require("./details"));
const transactions_1 = __importDefault(require("./transactions"));
const exchange_1 = __importDefault(require("./exchange"));
class Wallet {
    constructor(base) {
        this.base = base;
        this.create = new create_1.default(this.base);
        this.channel = new channel_1.default(this.base);
        this.collection = new collection_1.default(this.base);
        this.transfer = new transfer_1.default(this.base);
        this.details = new details_1.default(this.base);
        this.transactions = new transactions_1.default(this.base);
        this.exchange = new exchange_1.default(this.base);
    }
    update(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/update', payload);
            return (0, helpers_1.response)(res);
        });
    }
}
exports.default = Wallet;
