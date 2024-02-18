import Authentication from "./services/authentication.js";
import Base from "./services/base.js"; 
import Token from "./services/token/index.js";
import Misc from "./services/misc.js";
import User from "./services/user/index.js";
import Verification from "./services/verification.js";
import Wallet from "./services/wallet/index.js";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "./types/index.js";

export default class MoiPayWay {

    private secret_token: string;
    private base;

    user: User;
    misc: Misc;
    verification: Verification;
    token: Token;
    wallet: Wallet;

    constructor(secret_token: string) {
        this.secret_token = secret_token;
        this.base = new Base(this.secret_token);
        this.user = new User(this.base);
        this.misc = new Misc(this.base);
        this.verification = new Verification(this.base);
        this.token = new Token(this.base);
        this.wallet = new Wallet(this.base);
    }

    static async initiate(payload: AuthInitiatePayload): Promise<Res<AuthResponse>> {
        return Authentication.initiate(payload)
    }

    static async connect(access_token: string, payload: AuthConnectPayload): Promise<Res<AuthResponse>> {
        return Authentication.connect(access_token, payload)
    }

}