export type Response<T> = {
    status: string,
    message: string,
    data: T
}

export type ResponsePaginate<T> = {
    status: string,
    message: string,
    data: T,
    counts: number,
    totalPages: number,
    currentPage: number,
    listPerPage: string,
}

export type ApiResponse<U> = {
    status: string,
    message: string,
    data: U,
    response_code: number,
}

export type ApiResponsePaginate<U> = {
    status: string,
    message: string,
    data: U,
    response_code: number,
    counts: number,
    totalPages: number,
    currentPage: number,
    listPerPage: string,
}