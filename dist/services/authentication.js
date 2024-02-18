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
const http_1 = __importDefault(require("../libs/http"));
const helpers_1 = require("../utils/helpers");
class Authentication {
    static initiate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let _req = yield (0, http_1.default)().post('authentication/initiate', payload);
            return (0, helpers_1.response)(_req.data);
        });
    }
    static connect(accessToken, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let _req = yield (0, http_1.default)(accessToken).post('authentication/connect', payload);
            return (0, helpers_1.response)(_req.data);
        });
    }
}
exports.default = Authentication;
