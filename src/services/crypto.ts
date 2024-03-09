import { Res } from "../types/index.js";
import { ethers } from "ethers";
import { TransactionParams } from "../types/crypto.js";

export default class Crypto {

    async ethSignTransaction(privateKey: string, txParams: TransactionParams): Promise<Res<string>> {
        try {
            const wallet = new ethers.Wallet(privateKey);
            const signature = await wallet.signTransaction(txParams);
            return {
                status: "success",
                message: "",
                data: signature
            };
        } catch (error) {
            return {
                status: "error",
                message: "Error while signing transaction",
                data: ""
            };
        }
    }
    
}