
import Misc from "./lib/misc.js";
import Verification from "./lib/verification.js";

export default class MoiPayWay {

    #public_key;
    #secret_token;
    misc;
    verification;

    constructor(public_key, secret_token) {

        this.#public_key = public_key;
        this.#secret_token = secret_token;
        
        this.misc = new Misc(this.#secret_token);
        this.verification = new Verification(this.#secret_token);
    }   


}