import { Res, UserVerifyBVNPhotoPhoneMatchRequest } from "../../types/index.js";
import Base from "../base.js";
export default class UserVerification {
    #private;
    constructor(base: Base);
    bvnPhotoPhoneMatch(payload: UserVerifyBVNPhotoPhoneMatchRequest): Promise<Res<any>>;
}
