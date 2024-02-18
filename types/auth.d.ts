export interface AuthResponse {
    token: string,
    enviroment: string
}

export interface AuthInitiatePayload {
    email: string, 
    password: string
}

export interface AuthConnectPayload {
    api_key: string, 
    period?: string
}