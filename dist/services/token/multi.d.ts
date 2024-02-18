import { TokenStorageDetailsRequest, TokenMultiBurnRequest, TokenMultiDeployRequest, TokenMultiMintRequest, TokenMultiTransferRequest } from "@/types";
import Base from "../base";
import { Response } from "@/types";
export default class TokenMulti {
    private base;
    constructor(base: Base);
    details(payload: TokenStorageDetailsRequest): Promise<Response<any>>;
    deploy(payload: TokenMultiDeployRequest): Promise<Response<any>>;
    mint(payload: TokenMultiMintRequest): Promise<Response<any>>;
    transfer(payload: TokenMultiTransferRequest): Promise<Response<any>>;
    burn(payload: TokenMultiBurnRequest): Promise<Response<any>>;
}
