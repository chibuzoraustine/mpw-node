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
const helpers_js_1 = require("../../../../utils/helpers.js");
class WalletCollectionMethodFiat {
    constructor(base) {
        this.base = base;
    }
    info(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/collection/method/get-info', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    payWithUSSD(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/collection/method/ussd', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    payToDynamicVirtualAccount(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/collection/method/dynamic-virtual-account', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    payWithCardNaked(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/collection/method/card-naked', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    payWithCardEmbed(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/collection/method/card-embed', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    payWithSavedCardToken(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('wallet/collection/method/saved-card-token', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
}
exports.default = WalletCollectionMethodFiat;
