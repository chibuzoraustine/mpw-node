export interface UserCreateRequest {
    meta: {
        email: string,
        phone?: string,
        lastname?: string,
        firstname?: string,
        middlename?: string,
        gender?: string,
        dob?: string,
        address: {
            street?: string,
            city?: string,
            state?: string,
            postal_code?: string,
            country_code: string,
        },
        business: {
            name: string,
            registration_number: string
        },
    }
}

export interface UserCreateResponse {
    user_id: number
}

export interface UserUpdateRequest {
    meta: {
        user_id: string,
        black_list?: string,
        email?: string,
        phone?: string,
        lastname?: string,
        firstname?: string,
        middlename?: string,
        gender?: string,
        dob?: string,
        address?: {
            street?: string,
            city?: string,
            state?: string,
            postal_code?: string,
            country_code?: string
        },
        business?: {
            name?: string,
            registration_number?: string
        }
    }
}

export interface UserUpdateResponse {
    user_id: number
}

export interface UserDetailsRequest {
    order_by?: string,
    page?: string,
    limit?: string,
    meta?: {
        user_id?: string,
        email?: string,
        phone?: string,
        country_code?: string,
        black_list?: string
    }
}

export interface UserDetailsResponse {
    id: string,
    lastname: string,
    firstname: string,
    middlename: string,
    business: {
        name: string,
        registration_number: string
    },
    address: {
        street: string,
        city: string,
        state: string,
        country: string,
        postal_code: string
    },
    email: string,
    phone: string,
    gender: string,
    country: string,
    dob: string,
    verification: any[]
}

export interface UserVerifyBVNPhotoPhoneMatchRequest {
    meta: {
        user_id:string,
        number:string,
        image:string,
        phone_number:string
    }
}