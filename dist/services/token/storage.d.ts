import { TokenStorageCreateRequest, TokenStorageDetailsRequest, TokenStorageUploadRequest } from "@/types";
import Base from "../base";
import { Response } from "@/types";
export default class TokenStorage {
    private base;
    constructor(base: Base);
    upload(payload: TokenStorageUploadRequest): Promise<Response<any>>;
    create(payload: TokenStorageCreateRequest): Promise<Response<any>>;
    details(payload: TokenStorageDetailsRequest): Promise<Response<any>>;
}
