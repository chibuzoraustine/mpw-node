import Token from "./services/token/index";
import Misc from "./services/misc";
import User from "./services/user/index";
import Verification from "./services/verification";
import Wallet from "./services/wallet/index";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "./types/index";
import Crypto from "./services/crypto";
export default class MoiPayWay {
    private secret_token;
    private base;
    user: User;
    misc: Misc;
    verification: Verification;
    token: Token;
    wallet: Wallet;
    constructor(secret_token: string);
    static initiate(payload: AuthInitiatePayload): Promise<Res<AuthResponse>>;
    static connect(access_token: string, payload: AuthConnectPayload): Promise<Res<AuthResponse>>;
    static crypto: Crypto;
}
