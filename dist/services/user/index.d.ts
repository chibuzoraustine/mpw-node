import { Response, ResponsePaginate, UserCreateRequest, UserCreateResponse, UserDetailsRequest, UserDetailsResponse, UserUpdateRequest, UserUpdateResponse } from "../../types";
import Base from "../base";
import UserVerification from "./verification";
export default class User {
    private base;
    verification: UserVerification;
    constructor(base: Base);
    create(payload: UserCreateRequest): Promise<Response<UserCreateResponse>>;
    update(payload: UserUpdateRequest): Promise<Response<UserUpdateResponse>>;
    details(payload: UserDetailsRequest): Promise<ResponsePaginate<UserDetailsResponse[]>>;
}
