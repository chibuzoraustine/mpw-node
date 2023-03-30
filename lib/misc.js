import base from "./base.js";

export default class Misc extends base {

    constructor(secret) {
        super(secret)
    }

    async banks(payload = {}) {
        return await this.request('banks', payload);
    }

    async fileUpload(payload) {
        return await this.request('file-upload', payload);
    }

    async status(payload) {
        return await this.request('status', payload);
    }
}