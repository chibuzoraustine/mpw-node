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
const helpers_1 = require("../../utils/helpers");
const verification_1 = require("./verification");
class User {
    constructor(base) {
        this.base = base;
        this.verification = new verification_1.default(base);
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('user/create', payload);
            return (0, helpers_1.response)(res);
        });
    }
    update(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('user/update', payload);
            return (0, helpers_1.response)(res);
        });
    }
    details(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('user/details', payload);
            return (0, helpers_1.responsePaginate)(res);
        });
    }
}
exports.default = User;
