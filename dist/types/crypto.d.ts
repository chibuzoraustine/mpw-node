export interface TransactionParams {
    to: string;
    value: string;
    gasLimit?: string;
    gasPrice?: string;
    nonce?: number;
    data?: string;
}
