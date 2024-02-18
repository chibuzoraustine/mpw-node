import { Response, UserVerifyBVNPhotoPhoneMatchRequest } from "../../types";
import Base from "../base";
export default class UserVerification {
    #private;
    constructor(base: Base);
    bvnPhotoPhoneMatch(payload: UserVerifyBVNPhotoPhoneMatchRequest): Promise<Response<any>>;
}
