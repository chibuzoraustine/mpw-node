import { Response, UserVerifyBVNPhotoPhoneMatchRequest } from "@/types";
import Base from "../base";
import { response } from "@/utils/helpers";

export default class UserVerification {

    #base

    constructor(base:Base) {
        this.#base = base;
    }

    async bvnPhotoPhoneMatch(payload: UserVerifyBVNPhotoPhoneMatchRequest): Promise<Response<any>> {
        const res = await this.#base.request('user/verification/process', {code: "bvn", ...payload});
        return response<any>(res);
    }
    
}