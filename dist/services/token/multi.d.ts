import { TokenStorageDetailsRequest, TokenMultiBurnRequest, TokenMultiDeployRequest, TokenMultiMintRequest, TokenMultiTransferRequest } from "../../types/index.js";
import Base from "../base.js";
import { Res } from "../../types/index.js";
export default class TokenMulti {
    private base;
    constructor(base: Base);
    details(payload: TokenStorageDetailsRequest): Promise<Res<any>>;
    deploy(payload: TokenMultiDeployRequest): Promise<Res<any>>;
    mint(payload: TokenMultiMintRequest): Promise<Res<any>>;
    transfer(payload: TokenMultiTransferRequest): Promise<Res<any>>;
    burn(payload: TokenMultiBurnRequest): Promise<Res<any>>;
}
