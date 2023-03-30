
export default class Token {

    #base

    constructor(base) {
        this.#base = base;
    }

    async deploy(payload) {
        return await this.#base.request('token/deploy', payload);
    }

    async mint(payload) {
        return await this.#base.request('token/mint', payload);
    }

    async transfer(payload) {
        return await this.#base.request('token/transfer', payload);
    }

    async burn(payload) {
        return await this.#base.request('token/burn', payload);
    }

    async details(payload) {
        return await this.#base.request('token/details', payload);
    }

    async file(payload) {
        return await this.#base.request('token/file', payload);
    }
    
}