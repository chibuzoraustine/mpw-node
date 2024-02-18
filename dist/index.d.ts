import Token from "./services/token/index.js";
import Misc from "./services/misc.js";
import User from "./services/user/index.js";
import Verification from "./services/verification.js";
import Wallet from "./services/wallet/index.js";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "./types/index.js";
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
}
