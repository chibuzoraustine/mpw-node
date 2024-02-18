export declare class BadRequestError implements Error {
    name: string;
    status: number;
    message: string;
    constructor(msg: string);
}
export declare class UnauthorizedError implements Error {
    name: string;
    status: number;
    message: string;
    constructor(msg: string);
}
export declare class ValidationError implements Error {
    name: string;
    status: number;
    message: string;
    constructor(msg: string);
}
export declare class InternalServerError implements Error {
    name: string;
    status: number;
    message: string;
    constructor(msg: string);
}
