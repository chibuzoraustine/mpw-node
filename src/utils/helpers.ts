import { ApiResponse, ApiResponsePaginate, Res, ResponsePaginate } from "../types/index";
import { baseUrl } from "./config";
import { BadRequestError } from "./errors";

// @dev returns a strutured response.
export function response<U>(data: ApiResponse<U>): Res<U> {
    if (data.status !== 'success') throw new BadRequestError(data.message);
    return {
        status: data.status,
        message: data.message,
        data: data.data
    }
}

// @dev returns a strutured response with pagination metadatas.
export function responsePaginate<U>(data: ApiResponsePaginate<U>): ResponsePaginate<U> {
    if (data.status !== 'success') throw new BadRequestError(data.message);
    return {
        status: data.status,
        message: data.message,
        data: data.data,
        counts: data.counts,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
        listPerPage: data.listPerPage,
    }
}

// @dev prepends baseUrl and returns it (i.e baseURL + path)
export function url(path: string): string {
    if (path === '') return path;
    const validatedPath = path.startsWith('/') ? path.substring(1) : path;
    return `${baseUrl}/${validatedPath}`;
}