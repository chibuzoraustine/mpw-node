import { TokenStorageCreateRequest, TokenStorageDetailsRequest, TokenStorageUploadRequest } from "../../types/index";
import Base from "../base";
import { Res } from "../../types/index";
export default class TokenStorage {
    private base;
    constructor(base: Base);
    upload(payload: TokenStorageUploadRequest): Promise<Res<any>>;
    create(payload: TokenStorageCreateRequest): Promise<Res<any>>;
    details(payload: TokenStorageDetailsRequest): Promise<Res<any>>;
}
