import Base from "./base";
import { MiscCountriesResponse, MiscFileUploadResponse } from "../types/index";
import { Res } from "../types/index";
export default class Misc {
    private base;
    constructor(base: Base);
    fileUpload(payload: File): Promise<Res<MiscFileUploadResponse>>;
    countries(): Promise<Res<MiscCountriesResponse[]>>;
}
