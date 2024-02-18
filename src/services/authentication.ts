import http from "../libs/http.js";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "../types/index.js";
import { response } from "../utils/helpers.js";

export default class Authentication {

    static async initiate(payload: AuthInitiatePayload): Promise<Res<AuthResponse>> {
        let _req = await http().post('authentication/initiate', payload);
        return response<AuthResponse>(_req.data);
    }

    static async connect(accessToken: string, payload: AuthConnectPayload): Promise<Res<AuthResponse>> {
        let _req = await http(accessToken).post('authentication/connect', payload);
        return response<AuthResponse>(_req.data);
    }
}