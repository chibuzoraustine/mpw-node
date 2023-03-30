
export default class Exchange {

    #base

    constructor(base) {
        this.#base = base;
    }

    async rates(payload) {
        return await this.#base.request('wallet/exchange/rate', payload);
    }

    async initiate(payload) {
        return await this.#base.request('wallet/exchange/initiate', payload);
    }
    
}