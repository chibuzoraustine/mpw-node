
export class BadRequestError implements Error {
    name = 'BadRequestError';
    status = 400;
    message;

    constructor(msg: string) {
        this.message = msg;
    }
}

export class UnauthorizedError implements Error {
    name = 'UnauthorizedError';
    status = 401;
    message;

    constructor(msg:string) {
        this.message = msg;
    }
}

export class ValidationError implements Error {
    name = 'ValidationError';
    status = 422;
    message;

    constructor(msg:string) {
        this.message = msg;
    }
}

export class InternalServerError implements Error {
    name = 'InternalServerError';
    status = 500;
    message;

    constructor(msg:string) {
        this.message = msg;
    }
}