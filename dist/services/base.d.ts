export default class Base {
    private secret_token;
    constructor(secret_token: string);
    request(url: string, payload?: any, contentType?: string): Promise<any>;
}
