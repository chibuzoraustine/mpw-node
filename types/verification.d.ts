export interface VerifyIntBasicBankAccountRequest {
    meta: {
        iban: string
    }
}

export interface VerifyNgBasicBankAccountRequest {
    meta: {
        account_no: string,
        bank_code: string
    }
}

export interface VerifyNgAdvanceBankAccountRequest {
    meta: {
        account_no: string,
        bank_code: string
    }
}

export interface VerifyNgBVNBankAccountMatchRequest {
    meta: {
        number: string,
        account_no: string,
        bank_code: string
    }
}

export interface VerifyInstitutionsRequest {
    meta: {
        type?: string,
        operation?: string,
        country_code?: string,
        destination?: string,
        currency?: string
    }
}

export interface VerifyBVNAssociatedFinancialAccountsInitiateRequest {
    meta: {
        number: string,
        contact: string,
    }
}

export interface VerifyBVNAssociatedFinancialAccountsFetchRequest {
    meta: {
        number: string,
        contact: string,
        confirmation_code: string
    }
}

export interface VerifyBVNContactRequest {
    meta: {
        number: string,
    }
}

export interface VerifyBVNPhotoPhoneMatchRequest {
    meta: {
        number: string,
        image: string,
        phone_number: string
    }
}

export interface VerifyBVNPhotoMatchRequest {
    meta: {
        number: string,
        image: string
    }
}

export interface VerifyBVNRequest {
    meta: {
        number: string
    }
}

export interface VerifyCACRequest {
    meta: {
        number: string,
        name: string,
        type: string
    }
}

export interface VerifyCompanySearchRequest {
    meta: {
        country_code: string,
        name: string
    }
}

export interface VerifyDocumentImageRequest {
    meta: {
        country_code: string,
        image: string
    }
}

export interface VerifyFaceComparisonRequest {
    meta: {
        image_one: string,
        image_two: string
    }
}

export interface VerifyNgIndividualCreditCheckRequest {
    meta: {
        number: string,
        amount: string
    }
}

export interface VerifyNgBusinessCreditCheckRequest {
    meta: {
        number: string
    }
}

export interface VerifyNgDriverLicenseDateofBirthFaceMatchRequest {
    meta: {
        number: string,
        image: string,
        dob: string
    }
}

export interface VerifyNgDriverLicenseRequest {
    meta: {
        image: string
    }
}

export interface VerifyNgIntPassportNameFaceMatchRequest {
    meta: {
        number: string,
        image: string,
        lastname: string,
        firstname: string
    }
}

export interface VerifyNgPhoneRequest {
    meta: {
        phone_number: string
    }
}

export interface VerifyNgPhoneResponse {
    code: string,
    order_reference_code: string,
    firstname: string,
    lastname: string,
    middlename: string,
    phone: {
        primary: string
    },
    dob: string,
    gender: string
}

export interface VerifyNINFaceMatchRequest {
    meta: {
        number: string,
        image: string
    }
}

export interface VerifyNINPhoneMatchRequest {
    meta: {
        number: string,
        phone_number: string
    }
}

export interface VerifyLivenessCheckRequest {
    meta: {
        video: string,
        phone_number: string
    }
}

export interface VerifyGlobalSanctionRequest {
    meta: {
        name: string
    }
}

export interface VerifyPEPRequest {
    meta: {
        name: string
    }
}

export interface VerifyNgVotersCardRequest {
    meta: {
        lastname: string,
        firstname: string,
        number: string,
        dob: string,
        lga: string,
        state: string
    }
}

export interface VerifyNgPhoneConfirmationInitiateRequest {
    meta: {
        timer: string,
        phone_number: string,
        sender_name: string,
    }
}

export interface VerifyNgPhoneConfirmationRequest {
    order_id: string,
    meta: {
        confirmation_code: string
    }
}

export interface VerifyNgSMSPromptRequest {
    meta: {
        phone_number: string,
        sender_name?: string,
        message: string
    }
}

export interface VerifyWalletAddressRequest {
    meta: {
        wallet: string,
        address: string
    }
}