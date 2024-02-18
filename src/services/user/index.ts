import {
    Res,
    ResponsePaginate,
    UserCreateRequest,
    UserCreateResponse,
    UserDetailsRequest,
    UserDetailsResponse,
    UserUpdateRequest,
    UserUpdateResponse
} from "../../types/index.js";
import Base from "../base.js";
import { response, responsePaginate } from "../../utils/helpers.js";
import UserVerification from "./verification.js";

export default class User {

    private base:Base;
    public verification:UserVerification;

    constructor(base: Base) {
        this.base = base;
        this.verification = new UserVerification(base)
    }

    async create(payload: UserCreateRequest): Promise<Res<UserCreateResponse>> {
        const res = await this.base.request('user/create', payload);
        return response<UserCreateResponse>(res);
    }

    async update(payload: UserUpdateRequest): Promise<Res<UserUpdateResponse>> {
        const res = await this.base.request('user/update', payload);
        return response<UserUpdateResponse>(res);
    }

    async details(payload: UserDetailsRequest): Promise<ResponsePaginate<UserDetailsResponse[]>> {
        const res = await this.base.request('user/details', payload);
        return responsePaginate<UserDetailsResponse[]>(res);
    }

}