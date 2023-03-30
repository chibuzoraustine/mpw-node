
import Authentication from "./lib/authentication.js";
import Base from "./lib/base.js";
import Blockchain from "./lib/blockchain.js";
import Exchange from "./lib/exchange.js";
import Fiat from "./lib/fiat.js";
import Misc from "./lib/misc.js";
import SettlementAccount from "./lib/settlement_account.js";
import Token from "./lib/token.js";
import Verification from "./lib/verification.js";

export default class MoiPayWay {

    #secret_token;
    #base;
    misc;
    verification;
    settlementAccount;
    blockchain;
    fiat;
    exchange;
    token;

    constructor(secret_token) {

        this.#secret_token = secret_token;
        this.#base = new Base(this.#secret_token)

        this.misc = new Misc(this.#base);
        this.verification = new Verification(this.#base);
        this.settlementAccount = new SettlementAccount(this.#base);
        this.blockchain = new Blockchain(this.#base);
        this.fiat = new Fiat(this.#base);
        this.exchange = new Exchange(this.#base);
        this.token = new Token(this.#base);
    }

}

export async function MoiPayWayAuth(public_key, payload) {

    const _auth = new Authentication(public_key)
    return await _auth.init(payload);

}