import { TokenStorageCreateRequest, TokenStorageDetailsRequest, TokenStorageUploadRequest } from "../../types/index.js";
import Base from "../base.js";
import { Res } from "../../types/index.js";
export default class TokenStorage {
    private base;
    constructor(base: Base);
    upload(payload: TokenStorageUploadRequest): Promise<Res<any>>;
    create(payload: TokenStorageCreateRequest): Promise<Res<any>>;
    details(payload: TokenStorageDetailsRequest): Promise<Res<any>>;
}
