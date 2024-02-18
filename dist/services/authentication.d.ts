import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Response } from "@/types";
export default class Authentication {
    static initiate(payload: AuthInitiatePayload): Promise<Response<AuthResponse>>;
    static connect(accessToken: string, payload: AuthConnectPayload): Promise<Response<AuthResponse>>;
}
