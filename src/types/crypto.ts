export interface TransactionParams {
    to: string;
    value: string; // Value in Ether
    gasLimit?: string;
    gasPrice?: string;
    nonce?: number;
    data?: string; // Optional data field
}