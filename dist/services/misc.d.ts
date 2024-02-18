import Base from "./base.js";
import { MiscCountriesResponse, MiscFileUploadResponse } from "../types/index.js";
import { Res } from "../types/index.js";
export default class Misc {
    private base;
    constructor(base: Base);
    fileUpload(payload: File): Promise<Res<MiscFileUploadResponse>>;
    countries(): Promise<Res<MiscCountriesResponse[]>>;
}
