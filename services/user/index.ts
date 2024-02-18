import {
    Response,
    ResponsePaginate,
    UserCreateRequest,
    UserCreateResponse,
    UserDetailsRequest,
    UserDetailsResponse,
    UserUpdateRequest,
    UserUpdateResponse
} from "@/types";
import Base from "../base";
import { response, responsePaginate } from "@/utils/helpers";
import UserVerification from "./verification";

export default class User {

    private base:Base;
    public verification:UserVerification;

    constructor(base: Base) {
        this.base = base;
        this.verification = new UserVerification(base)
    }

    async create(payload: UserCreateRequest): Promise<Response<UserCreateResponse>> {
        const res = await this.base.request('user/create', payload);
        return response<UserCreateResponse>(res);
    }

    async update(payload: UserUpdateRequest): Promise<Response<UserUpdateResponse>> {
        const res = await this.base.request('user/update', payload);
        return response<UserUpdateResponse>(res);
    }

    async details(payload: UserDetailsRequest): Promise<ResponsePaginate<UserDetailsResponse[]>> {
        const res = await this.base.request('user/details', payload);
        return responsePaginate<UserDetailsResponse[]>(res);
    }

}