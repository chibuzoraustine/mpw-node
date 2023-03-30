import Base from "./base.js";

export default class Misc {

    #base

    constructor(base) {
        this.#base = base;
    }

    async banks(payload = {}) {
        return await this.#base.request('banks', payload);
    }

    async fileUpload(payload) {
        return await this.#base.request('file-upload', payload);
    }

    async status(payload) {
        return await this.#base.request('status', payload);
    }
}