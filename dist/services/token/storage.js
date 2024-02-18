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
const helpers_1 = require("@/utils/helpers");
class TokenStorage {
    constructor(base) {
        this.base = base;
    }
    upload(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', payload.file);
            formData.append('chain', payload.chain);
            const res = yield this.base.request('token/storage/upload', formData, "multipart/form-data");
            return (0, helpers_1.response)(res);
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/storage/create', payload);
            return (0, helpers_1.response)(res);
        });
    }
    details(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('token/storage/details', payload);
            return (0, helpers_1.response)(res);
        });
    }
}
exports.default = TokenStorage;
