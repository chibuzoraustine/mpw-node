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
const authentication_1 = __importDefault(require("./services/authentication"));
const base_1 = __importDefault(require("./services/base"));
const token_1 = __importDefault(require("./services/token"));
const misc_1 = __importDefault(require("./services/misc"));
const user_1 = __importDefault(require("./services/user"));
const verification_1 = __importDefault(require("./services/verification"));
const wallet_1 = __importDefault(require("./services/wallet"));
class MoiPayWay {
    constructor(secret_token) {
        this.secret_token = secret_token;
        this.base = new base_1.default(this.secret_token);
        this.user = new user_1.default(this.base);
        this.misc = new misc_1.default(this.base);
        this.verification = new verification_1.default(this.base);
        this.token = new token_1.default(this.base);
        this.wallet = new wallet_1.default(this.base);
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
exports.default = MoiPayWay;
