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
const authentication_1 = require("./services/authentication");
const base_1 = require("./services/base");
const index_1 = require("./services/token/index");
const misc_1 = require("./services/misc");
const index_2 = require("./services/user/index");
const verification_1 = require("./services/verification");
const index_3 = require("./services/wallet/index");
const crypto_1 = require("./services/crypto");
class MoiPayWay {
    constructor(secret_token) {
        this.secret_token = secret_token;
        this.base = new base_1.default(this.secret_token);
        this.user = new index_2.default(this.base);
        this.misc = new misc_1.default(this.base);
        this.verification = new verification_1.default(this.base);
        this.token = new index_1.default(this.base);
        this.wallet = new index_3.default(this.base);
    }
    static initiate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return authentication_1.default.initiate(payload);
        });
    }
    static connect(access_token, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return authentication_1.default.connect(access_token, payload);
        });
    }
}
MoiPayWay.crypto = new crypto_1.default();
exports.default = MoiPayWay;
