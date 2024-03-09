import {
    TokenStorageDetailsRequest,
    TokenMultiBurnRequest,
    TokenMultiDeployRequest,
    TokenMultiMintRequest,
    TokenMultiTransferRequest
} from "../../types/index";
import Base from "../base";
import { Res } from "../../types/index";
import { response } from "../../utils/helpers";

export default class TokenMulti {

    private base: Base

    constructor(base: Base) {
        this.base = base;
    }

    async details(payload: TokenStorageDetailsRequest): Promise<Res<any>> {
        const res = await this.base.request('token/multitoken/details', payload);
        return response<any>(res);
    }

    async deploy(payload: TokenMultiDeployRequest): Promise<Res<any>> {
        const res = await this.base.request('token/multitoken/deploy', payload);
        return response<any>(res);
    }

    async mint(payload: TokenMultiMintRequest): Promise<Res<any>> {
        const res = await this.base.request('token/multitoken/mint', payload);
        return response<any>(res);
    }

    async transfer(payload: TokenMultiTransferRequest): Promise<Res<any>> {
        const res = await this.base.request('token/multitoken/transfer', payload);
        return response<any>(res);
    }

    async burn(payload: TokenMultiBurnRequest): Promise<Res<any>> {
        const res = await this.base.request('token/multitoken/burn', payload);
        return response<any>(res);
    }

}