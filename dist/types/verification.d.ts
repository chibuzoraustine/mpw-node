export type VerifyIntBasicBankAccountRequest = {
    meta: {
        iban: string;
    };
};
export type VerifyNgBasicBankAccountRequest = {
    meta: {
        account_no: string;
        bank_code: string;
    };
};
export type VerifyNgAdvanceBankAccountRequest = {
    meta: {
        account_no: string;
        bank_code: string;
    };
};
export type VerifyNgBVNBankAccountMatchRequest = {
    meta: {
        number: string;
        account_no: string;
        bank_code: string;
    };
};
export type VerifyInstitutionsRequest = {
    meta: {
        type?: string;
        operation?: string;
        country_code?: string;
        destination?: string;
        currency?: string;
    };
};
export type VerifyBVNAssociatedFinancialAccountsInitiateRequest = {
    meta: {
        number: string;
        contact: string;
    };
};
export type VerifyBVNAssociatedFinancialAccountsFetchRequest = {
    meta: {
        number: string;
        contact: string;
        confirmation_code: string;
    };
};
export type VerifyBVNContactRequest = {
    meta: {
        number: string;
    };
};
export type VerifyBVNPhotoPhoneMatchRequest = {
    meta: {
        number: string;
        image: string;
        phone_number: string;
    };
};
export type VerifyBVNPhotoMatchRequest = {
    meta: {
        number: string;
        image: string;
    };
};
export type VerifyBVNRequest = {
    meta: {
        number: string;
    };
};
export type VerifyCACRequest = {
    meta: {
        number: string;
        name: string;
        type: string;
    };
};
export type VerifyCompanySearchRequest = {
    meta: {
        country_code: string;
        name: string;
    };
};
export type VerifyDocumentImageRequest = {
    meta: {
        country_code: string;
        image: string;
    };
};
export type VerifyFaceComparisonRequest = {
    meta: {
        image_one: string;
        image_two: string;
    };
};
export type VerifyNgIndividualCreditCheckRequest = {
    meta: {
        number: string;
        amount: string;
    };
};
export type VerifyNgBusinessCreditCheckRequest = {
    meta: {
        number: string;
    };
};
export type VerifyNgDriverLicenseDateofBirthFaceMatchRequest = {
    meta: {
        number: string;
        image: string;
        dob: string;
    };
};
export type VerifyNgDriverLicenseRequest = {
    meta: {
        image: string;
    };
};
export type VerifyNgIntPassportNameFaceMatchRequest = {
    meta: {
        number: string;
        image: string;
        lastname: string;
        firstname: string;
    };
};
export type VerifyNgPhoneRequest = {
    meta: {
        phone_number: string;
    };
};
export type VerifyNgPhoneResponse = {
    code: string;
    order_reference_code: string;
    firstname: string;
    lastname: string;
    middlename: string;
    phone: {
        primary: string;
    };
    dob: string;
    gender: string;
};
export type VerifyNINFaceMatchRequest = {
    meta: {
        number: string;
        image: string;
    };
};
export type VerifyNINPhoneMatchRequest = {
    meta: {
        number: string;
        phone_number: string;
    };
};
export type VerifyLivenessCheckRequest = {
    meta: {
        video: string;
        phone_number: string;
    };
};
export type VerifyGlobalSanctionRequest = {
    meta: {
        name: string;
    };
};
export type VerifyPEPRequest = {
    meta: {
        name: string;
    };
};
export type VerifyNgVotersCardRequest = {
    meta: {
        lastname: string;
        firstname: string;
        number: string;
        dob: string;
        lga: string;
        state: string;
    };
};
export type VerifyNgPhoneConfirmationInitiateRequest = {
    meta: {
        timer: string;
        phone_number: string;
        sender_name: string;
    };
};
export type VerifyNgPhoneConfirmationRequest = {
    order_id: string;
    meta: {
        confirmation_code: string;
    };
};
export type VerifyNgSMSPromptRequest = {
    meta: {
        phone_number: string;
        sender_name?: string;
        message: string;
    };
};
export type VerifyWalletAddressRequest = {
    meta: {
        wallet: string;
        address: string;
    };
};
