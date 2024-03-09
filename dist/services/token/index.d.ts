import Base from "../base";
import TokenStorage from "./storage";
import TokenToken from "./multi";
export default class Token {
    private base;
    storage: TokenStorage;
    token: TokenToken;
    constructor(base: Base);
}
