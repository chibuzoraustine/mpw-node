import { Res, UserVerifyBVNPhotoPhoneMatchRequest } from "../../types/index";
import Base from "../base";
export default class UserVerification {
    #private;
    constructor(base: Base);
    bvnPhotoPhoneMatch(payload: UserVerifyBVNPhotoPhoneMatchRequest): Promise<Res<any>>;
}
