import Base from "./base.js";

export default class Verification {

    #base;

    constructor(base) {
        this.#base = base;
    }

    async lookup(payload) {
        return await this.#base.request('verification/lookup', payload);
    }

    async details(payload) {
        return await this.#base.request('verification/details', payload);
    }

    async info(payload) {
        return await this.#base.request('verification/info', payload);
    }
}