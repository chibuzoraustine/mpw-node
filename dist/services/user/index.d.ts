import { Res, ResponsePaginate, UserCreateRequest, UserCreateResponse, UserDetailsRequest, UserDetailsResponse, UserUpdateRequest, UserUpdateResponse } from "../../types/index.js";
import Base from "../base.js";
import UserVerification from "./verification.js";
export default class User {
    private base;
    verification: UserVerification;
    constructor(base: Base);
    create(payload: UserCreateRequest): Promise<Res<UserCreateResponse>>;
    update(payload: UserUpdateRequest): Promise<Res<UserUpdateResponse>>;
    details(payload: UserDetailsRequest): Promise<ResponsePaginate<UserDetailsResponse[]>>;
}
