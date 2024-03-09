import Authentication from "./services/authentication";
import Base from "./services/base"; 
import Token from "./services/token/index";
import Misc from "./services/misc";
import User from "./services/user/index";
import Verification from "./services/verification";
import Wallet from "./services/wallet/index";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "./types/index";
import Crypto from "./services/crypto";

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

    static crypto: Crypto = new Crypto();

}