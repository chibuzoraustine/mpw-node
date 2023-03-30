import Base from "./base.js";

export default class Verification extends Base {

    constructor(secret) {
        super(secret)
    }

    async lookup(payload) {
        return await this.request('verification/lookup', payload);
    }

    async details(payload) {
        return await this.request('verification/details', payload);
    }

    async info(payload) {
        return await this.request('verification/info', payload);
    }
}