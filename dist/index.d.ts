import Token from "./services/token";
import Misc from "./services/misc";
import User from "./services/user";
import Verification from "./services/verification";
import Wallet from "./services/wallet";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Response } from "./types";
export default class MoiPayWay {
    private secret_token;
    private base;
    user: User;
    misc: Misc;
    verification: Verification;
    token: Token;
    wallet: Wallet;
    constructor(secret_token: string);
    static initiate(payload: AuthInitiatePayload): Promise<Response<AuthResponse>>;
    static connect(access_token: string, payload: AuthConnectPayload): Promise<Response<AuthResponse>>;
}
