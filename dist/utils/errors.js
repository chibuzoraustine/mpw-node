"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.ValidationError = exports.UnauthorizedError = exports.BadRequestError = void 0;
class BadRequestError {
    constructor(msg) {
        this.name = 'BadRequestError';
        this.status = 400;
        this.message = msg;
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError {
    constructor(msg) {
        this.name = 'UnauthorizedError';
        this.status = 401;
        this.message = msg;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ValidationError {
    constructor(msg) {
        this.name = 'ValidationError';
        this.status = 422;
        this.message = msg;
    }
}
exports.ValidationError = ValidationError;
class InternalServerError {
    constructor(msg) {
        this.name = 'InternalServerError';
        this.status = 500;
        this.message = msg;
    }
}
exports.InternalServerError = InternalServerError;
