import {
    TokenStorageCreateRequest,
    TokenStorageDetailsRequest,
    TokenStorageUploadRequest
} from "../../types";
import Base from "../base";
import { Response } from "../../types";
import { response } from "../../utils/helpers";

export default class TokenStorage {

    private base: Base

    constructor(base: Base) {
        this.base = base;
    }

    async upload(payload: TokenStorageUploadRequest): Promise<Response<any>> {
        const formData = new FormData();
        formData.append('file', payload.file)
        formData.append('chain', payload.chain)
        const res = await this.base.request('token/storage/upload', formData, "multipart/form-data");
        return response<any>(res);
    }

    async create(payload: TokenStorageCreateRequest): Promise<Response<any>> {
        const res = await this.base.request('token/storage/create', payload);
        return response<any>(res);
    }

    async details(payload: TokenStorageDetailsRequest): Promise<Response<any>> {
        const res = await this.base.request('token/storage/details', payload);
        return response<any>(res);
    }

}