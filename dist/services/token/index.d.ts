import Base from "../base.js";
import TokenStorage from "./storage.js";
import TokenToken from "./multi.js";
export default class Token {
    private base;
    storage: TokenStorage;
    token: TokenToken;
    constructor(base: Base);
}
