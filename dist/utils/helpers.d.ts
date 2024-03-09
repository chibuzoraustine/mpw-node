import { ApiResponse, ApiResponsePaginate, Res, ResponsePaginate } from "../types/index";
export declare function response<U>(data: ApiResponse<U>): Res<U>;
export declare function responsePaginate<U>(data: ApiResponsePaginate<U>): ResponsePaginate<U>;
export declare function url(path: string): string;
