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
const index_1 = require("./transfer_recipient/index");
const helpers_1 = require("../../../utils/helpers");
class WalletChannel {
    constructor(base) {
        this.base = base;
        this.transferRecipient = new index_1.default(this.base);
    }
    details(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/channel/details', payload);
            return (0, helpers_1.response)(res);
        });
    }
    remove(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/channel/remove', payload);
            return (0, helpers_1.response)(res);
        });
    }
    virtualAccount(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/channel/generate-virtual-account', payload);
            return (0, helpers_1.response)(res);
        });
    }
    chainAddress(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/channel/generate-chain-address', payload);
            return (0, helpers_1.response)(res);
        });
    }
    download(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/channel/generate-downloadable-file', payload);
            return (0, helpers_1.response)(res);
        });
    }
}
exports.default = WalletChannel;
