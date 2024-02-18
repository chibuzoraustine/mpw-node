import { Res, UserVerifyBVNPhotoPhoneMatchRequest } from "../../types/index.js";
import Base from "../base.js";
import { response } from "../../utils/helpers.js";

export default class UserVerification {

    #base

    constructor(base:Base) {
        this.#base = base;
    }

    async bvnPhotoPhoneMatch(payload: UserVerifyBVNPhotoPhoneMatchRequest): Promise<Res<any>> {
        const res = await this.#base.request('user/verification/process', {code: "bvn", ...payload});
        return response<any>(res);
    }
    
}