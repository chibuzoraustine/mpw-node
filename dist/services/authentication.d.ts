import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "../types/index.js";
export default class Authentication {
    static initiate(payload: AuthInitiatePayload): Promise<Res<AuthResponse>>;
    static connect(accessToken: string, payload: AuthConnectPayload): Promise<Res<AuthResponse>>;
}
