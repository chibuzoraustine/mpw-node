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
const errors_js_1 = require("../utils/errors.js");
class Base {
    constructor(secret_token) {
        this.secret_token = secret_token;
    }
    request(url, payload = {}, contentType = "application/json") {
        return __awaiter(this, void 0, void 0, function* () {
            let _req = yield (0, http_js_1.default)(this.secret_token, contentType).post(url, payload);
            if (_req.data.status == 'success') {
                return _req.data;
            }
            else {
                throw new errors_js_1.BadRequestError(_req.data.message);
            }
        });
    }
}
exports.default = Base;
