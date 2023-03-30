
export default class SettlementAccount {

    #base

    constructor(base) {
        this.#base = base;
    }

    async add(payload) {
        return await this.#base.request('wallet/settlementaccounts/add', payload);
    }

    async attachWallet(payload) {
        return await this.#base.request('wallet/settlementaccounts/attach-wallet', payload);
    }

    async detachWallet(payload) {
        return await this.#base.request('wallet/settlementaccounts/detach-wallet', payload);
    }

    async list(payload) {
        return await this.#base.request('wallet/settlementaccounts/list', payload);
    }

}