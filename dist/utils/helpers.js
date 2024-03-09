"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = exports.responsePaginate = exports.response = void 0;
const config_1 = require("./config");
const errors_1 = require("./errors");
// @dev returns a strutured response.
function response(data) {
    if (data.status !== 'success')
        throw new errors_1.BadRequestError(data.message);
    return {
        status: data.status,
        message: data.message,
        data: data.data
    };
}
exports.response = response;
// @dev returns a strutured response with pagination metadatas.
function responsePaginate(data) {
    if (data.status !== 'success')
        throw new errors_1.BadRequestError(data.message);
    return {
        status: data.status,
        message: data.message,
        data: data.data,
        counts: data.counts,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
        listPerPage: data.listPerPage,
    };
}
exports.responsePaginate = responsePaginate;
// @dev prepends baseUrl and returns it (i.e baseURL + path)
function url(path) {
    if (path === '')
        return path;
    const validatedPath = path.startsWith('/') ? path.substring(1) : path;
    return `${config_1.baseUrl}/${validatedPath}`;
}
exports.url = url;
