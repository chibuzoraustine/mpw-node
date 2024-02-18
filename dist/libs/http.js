"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@/utils/config");
const axios_1 = __importDefault(require("axios"));
function http(token, contentType) {
    return axios_1.default.create({
        baseURL: config_1.baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": contentType
            // Authorization: token && token.length > 0 && `Bearer ${token}`
        }
    });
}
exports.default = http;
