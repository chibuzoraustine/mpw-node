export type AuthResponse = {
    token: string,
    enviroment: string
}

export type AuthInitiatePayload = {
    email: string, 
    password: string
}

export type AuthConnectPayload = {
    api_key: string, 
    period?: string
}