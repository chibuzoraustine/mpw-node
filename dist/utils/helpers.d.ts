import { ApiResponse, ApiResponsePaginate, Response, ResponsePaginate } from "@/types";
export declare function response<U>(data: ApiResponse<U>): Response<U>;
export declare function responsePaginate<U>(data: ApiResponsePaginate<U>): ResponsePaginate<U>;
export declare function url(path: string): string;
