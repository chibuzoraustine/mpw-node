import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "../types/index.js";
export default class Authentication {
    static initiate(payload: AuthInitiatePayload): Promise<Res<AuthResponse>>;
    static connect(connectionToken: string, payload: AuthConnectPayload): Promise<Res<AuthResponse>>;
}
