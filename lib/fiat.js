
export default class Fiat {

    #base

    constructor(base) {
        this.#base = base;
    }

    async create(payload) {
        return await this.#base.request('wallet/create', payload);
    }

    async generate(payload) {
        return await this.#base.request('wallet/generate', payload);
    }

    async collect(payload) {
        return await this.#base.request('wallet/collect', payload);
    }

    async transfer(payload) {
        return await this.#base.request('wallet/transfer', payload);
    }

    async details(payload) {
        return await this.#base.request('wallet/details', payload);
    }

    async info(payload) {
        return await this.#base.request('wallet/info', payload);
    }
    
}