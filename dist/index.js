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
const authentication_js_1 = require("./services/authentication.js");
const base_js_1 = require("./services/base.js");
const index_js_1 = require("./services/token/index.js");
const misc_js_1 = require("./services/misc.js");
const index_js_2 = require("./services/user/index.js");
const verification_js_1 = require("./services/verification.js");
const index_js_3 = require("./services/wallet/index.js");
class MoiPayWay {
    constructor(secret_token) {
        this.secret_token = secret_token;
        this.base = new base_js_1.default(this.secret_token);
        this.user = new index_js_2.default(this.base);
        this.misc = new misc_js_1.default(this.base);
        this.verification = new verification_js_1.default(this.base);
        this.token = new index_js_1.default(this.base);
        this.wallet = new index_js_3.default(this.base);
    }
    static initiate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return authentication_js_1.default.initiate(payload);
        });
    }
    static connect(access_token, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return authentication_js_1.default.connect(access_token, payload);
        });
    }
}
exports.default = MoiPayWay;
