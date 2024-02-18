import Base from "../base.js";
import TokenStorage from "./storage.js";
import TokenToken from "./multi.js";

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