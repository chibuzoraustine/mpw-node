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
const http_js_1 = require("../libs/http.js");
const helpers_js_1 = require("../utils/helpers.js");
class Authentication {
    static initiate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let _req = yield (0, http_js_1.default)().post('authentication/initiate', payload);
            return (0, helpers_js_1.response)(_req.data);
        });
    }
    static connect(connectionToken, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let _req = yield (0, http_js_1.default)(connectionToken).post('authentication/connect', payload);
            return (0, helpers_js_1.response)(_req.data);
        });
    }
}
exports.default = Authentication;
