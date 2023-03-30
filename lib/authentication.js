import http from "../services/http-service.js";
import { BadRequestError } from "../utils/errors.js";

export default class Authentication {

    #public_key;

    constructor(public_key) {

        this.#public_key = public_key
    }

    async init(payload) {
        let _req = await http('https://api.moipayway.com/user/', this.#public_key).post('sign-in', payload);
        if (_req.data.status == 'success') {
            return _req.data;
        } else {
            throw new BadRequestError(_req.data.message);
        }
    }
}