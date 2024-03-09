import { TokenStorageDetailsRequest, TokenMultiBurnRequest, TokenMultiDeployRequest, TokenMultiMintRequest, TokenMultiTransferRequest } from "../../types/index";
import Base from "../base";
import { Res } from "../../types/index";
export default class TokenMulti {
    private base;
    constructor(base: Base);
    details(payload: TokenStorageDetailsRequest): Promise<Res<any>>;
    deploy(payload: TokenMultiDeployRequest): Promise<Res<any>>;
    mint(payload: TokenMultiMintRequest): Promise<Res<any>>;
    transfer(payload: TokenMultiTransferRequest): Promise<Res<any>>;
    burn(payload: TokenMultiBurnRequest): Promise<Res<any>>;
}
