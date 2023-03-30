import { http } from "../services/http-service.js";
import { BadRequestError } from "../utils/errors.js";

export default class Base {

    #secret_token;
    #base_url = 'https://api.moipayway.com/';

    constructor(secret_token) {
        this.#secret_token = secret_token;
    }

    getSecretToken() {
        return this.#secret_token;
    }

    async request(url, payload) {
        let _req = await http(this.#base_url, this.#secret_token).post(url, payload);
        if (_req.data.status == 'success') {
            return _req.data;
        } else {
            throw new BadRequestError(_req.data.message);
        }
    }

}