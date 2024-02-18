import { Response, ResponsePaginate } from "../../types";
import Base from "../base";
import TokenStorage from "./storage";
import TokenToken from "./multi";
import { response, responsePaginate } from "../../utils/helpers";

export default class Token {

    private base:Base;
    storage: TokenStorage;
    token: TokenToken;

    constructor(base:Base) {
        this.base = base;
        this.storage = new TokenStorage(this.base);
        this.token = new TokenToken(this.base);
    }
    
}