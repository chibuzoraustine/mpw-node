"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_js_1 = require("../utils/config.js");
const axios_1 = require("axios");
function http(token, contentType) {
    return axios_1.default.create({
        baseURL: config_js_1.baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": contentType
            // Authorization: token && token.length > 0 && `Bearer ${token}`
        }
    });
}
exports.default = http;
