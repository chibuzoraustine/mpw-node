import {
    TokenStorageDetailsRequest,
    TokenMultiBurnRequest,
    TokenMultiDeployRequest,
    TokenMultiMintRequest,
    TokenMultiTransferRequest
} from "../../types";
import Base from "../base";
import { Response } from "../../types";
import { response } from "../../utils/helpers";

export default class TokenMulti {

    private base: Base

    constructor(base: Base) {
        this.base = base;
    }

    async details(payload: TokenStorageDetailsRequest): Promise<Response<any>> {
        const res = await this.base.request('token/multitoken/details', payload);
        return response<any>(res);
    }

    async deploy(payload: TokenMultiDeployRequest): Promise<Response<any>> {
        const res = await this.base.request('token/multitoken/deploy', payload);
        return response<any>(res);
    }

    async mint(payload: TokenMultiMintRequest): Promise<Response<any>> {
        const res = await this.base.request('token/multitoken/mint', payload);
        return response<any>(res);
    }

    async transfer(payload: TokenMultiTransferRequest): Promise<Response<any>> {
        const res = await this.base.request('token/multitoken/transfer', payload);
        return response<any>(res);
    }

    async burn(payload: TokenMultiBurnRequest): Promise<Response<any>> {
        const res = await this.base.request('token/multitoken/burn', payload);
        return response<any>(res);
    }

}