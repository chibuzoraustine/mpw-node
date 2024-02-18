import Base from "./base";
import { MiscCountriesResponse, MiscFileUploadResponse } from "../types";
import { Response } from "../types";
export default class Misc {
    private base;
    constructor(base: Base);
    fileUpload(payload: File): Promise<Response<MiscFileUploadResponse>>;
    countries(): Promise<Response<MiscCountriesResponse[]>>;
}
