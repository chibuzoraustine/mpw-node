
export class BadRequestError {
    name = 'BadRequestError';
    status = 400;
    message;

    constructor(msg) {
        this.message = msg;
    }
}

export class UnauthorizedError {
    name = 'UnauthorizedError';
    status = 401;
    message;

    constructor(msg) {
        this.message = msg;
    }
}

export class ValidationError {
    name = 'ValidationError';
    status = 422;
    message;

    constructor(msg) {
        this.message = msg;
    }
}

export class InternalServerError {
    name = 'InternalServerError';
    status = 500;
    message;

    constructor(msg) {
        this.message = msg;
    }
}