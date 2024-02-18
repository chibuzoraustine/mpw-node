import http from "@/libs/http";
import { AuthConnectPayload, AuthInitiatePayload, AuthResponse, Response } from "@/types";
import { response } from "@/utils/helpers";

export default class Authentication {

    static async initiate(payload: AuthInitiatePayload): Promise<Response<AuthResponse>> {
        let _req = await http().post('authentication/initiate', payload);
        return response<AuthResponse>(_req.data);
    }

    static async connect(accessToken: string, payload: AuthConnectPayload): Promise<Response<AuthResponse>> {
        let _req = await http(accessToken).post('authentication/connect', payload);
        return response<AuthResponse>(_req.data);
    }
}