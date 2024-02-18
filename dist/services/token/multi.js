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
const helpers_js_1 = require("../../utils/helpers.js");
class TokenMulti {
    constructor(base) {
        this.base = base;
    }
    details(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/multitoken/details', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    deploy(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/multitoken/deploy', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    mint(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/multitoken/mint', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    transfer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/multitoken/transfer', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
    burn(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/multitoken/burn', payload);
            return (0, helpers_js_1.response)(res);
        });
    }
}
exports.default = TokenMulti;
