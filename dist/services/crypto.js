"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class Crypto {
    constructor(base) {
        this.base = base;
    }
    ethSignTransaction(privateKey, txParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = new ethers_1.ethers.Wallet(privateKey);
                const signature = yield wallet.signTransaction(txParams);
                return {
                    status: "success",
                    message: "",
                    data: signature
                };
            }
            catch (error) {
                return {
                    status: "error",
                    message: "Error while signing transaction",
                    data: ""
                };
            }
        });
    }
}
exports.default = Crypto;
