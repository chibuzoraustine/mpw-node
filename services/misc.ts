import { response } from "../utils/helpers";
import Base from "./base";
import { MiscCountriesResponse, MiscFileUploadResponse } from "../types";
import { Response } from "../types";

export default class Misc {

    private base:Base

    constructor(base:Base) {
        this.base = base;
    }

    async fileUpload(payload: File): Promise<Response<MiscFileUploadResponse>> {
        const formData = new FormData();
        formData.append('file', payload)
        const res = await this.base.request('file-upload', formData, "multipart/form-data");
        return response<MiscFileUploadResponse>(res);
    }

    async countries(): Promise<Response<MiscCountriesResponse[]>> {
        const res = await this.base.request('countries');
        return response<MiscCountriesResponse[]>(res);
    }
}