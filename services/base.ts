import http from "@/libs/http";
import { BadRequestError } from "@/utils/errors";

export default class Base {

    private secret_token;

    constructor(secret_token: string) {
        this.secret_token = secret_token;
    }

    async request(url: string, payload:any = {}, contentType = "application/json") {
        let _req = await http(this.secret_token, contentType).post(url, payload);
        if (_req.data.status == 'success') {
            return _req.data;
        } else {
            throw new BadRequestError(_req.data.message);
        }
    }

}