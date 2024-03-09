import http from "../libs/http";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Res } from "../types/index";
import { response } from "../utils/helpers";

export default class Authentication {

    static async initiate(payload: AuthInitiatePayload): Promise<Res<AuthResponse>> {
        let _req = await http().post('authentication/initiate', payload);
        return response<AuthResponse>(_req.data);
    }

    static async connect(connectionToken: string, payload: AuthConnectPayload): Promise<Res<AuthResponse>> {
        let _req = await http(connectionToken).post('authentication/connect', payload);
        return response<AuthResponse>(_req.data);
    }
}