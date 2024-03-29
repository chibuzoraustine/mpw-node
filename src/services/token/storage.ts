import {
    TokenStorageCreateRequest,
    TokenStorageDetailsRequest,
    TokenStorageUploadRequest
} from "../../types/index";
import Base from "../base";
import { Res } from "../../types/index";
import { response } from "../../utils/helpers";

export default class TokenStorage {

    private base: Base

    constructor(base: Base) {
        this.base = base;
    }

    async upload(payload: TokenStorageUploadRequest): Promise<Res<any>> {
        const formData = new FormData();
        formData.append('file', payload.file)
        formData.append('chain', payload.chain)
        const res = await this.base.request('token/storage/upload', formData, "multipart/form-data");
        return response<any>(res);
    }

    async create(payload: TokenStorageCreateRequest): Promise<Res<any>> {
        const res = await this.base.request('token/storage/create', payload);
        return response<any>(res);
    }

    async details(payload: TokenStorageDetailsRequest): Promise<Res<any>> {
        const res = await this.base.request('token/storage/details', payload);
        return response<any>(res);
    }

}