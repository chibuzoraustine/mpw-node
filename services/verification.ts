import {
    VerifyBVNAssociatedFinancialAccountsFetchRequest,
    VerifyBVNAssociatedFinancialAccountsInitiateRequest,
    VerifyBVNContactRequest,
    VerifyBVNPhotoMatchRequest,
    VerifyBVNPhotoPhoneMatchRequest,
    VerifyBVNRequest,
    VerifyCACRequest,
    VerifyCompanySearchRequest,
    VerifyDocumentImageRequest,
    VerifyFaceComparisonRequest,
    VerifyGlobalSanctionRequest,
    VerifyInstitutionsRequest,
    VerifyIntBasicBankAccountRequest,
    VerifyLivenessCheckRequest,
    VerifyNINFaceMatchRequest,
    VerifyNINPhoneMatchRequest,
    VerifyNgAdvanceBankAccountRequest,
    VerifyNgBVNBankAccountMatchRequest,
    VerifyNgBasicBankAccountRequest,
    VerifyNgBusinessCreditCheckRequest,
    VerifyNgDriverLicenseDateofBirthFaceMatchRequest,
    VerifyNgDriverLicenseRequest,
    VerifyNgIndividualCreditCheckRequest,
    VerifyNgIntPassportNameFaceMatchRequest,
    VerifyNgPhoneConfirmationInitiateRequest,
    VerifyNgPhoneConfirmationRequest,
    VerifyNgPhoneRequest,
    VerifyNgPhoneResponse,
    VerifyNgSMSPromptRequest,
    VerifyNgVotersCardRequest,
    VerifyPEPRequest,
    VerifyWalletAddressRequest
} from "../types";
import Base from "./base.js";
import { Response } from "../types/global";
import { response } from "../utils/helpers";

export default class Verification {

    private base;

    constructor(base: Base) {
        this.base = base;
    }

    async intBasicBankAccount(payload: VerifyIntBasicBankAccountRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "international_basic_bank_account", ...payload });
        return response<any>(res);
    }

    async ngBasicBankAccount(payload: VerifyNgBasicBankAccountRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_basic_bank_account", ...payload });
        return response<any>(res);
    }

    async ngAdvanceBankAccount(payload: VerifyNgAdvanceBankAccountRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_advance_bank_account", ...payload });
        return response<any>(res);
    }

    async ngBVNBankAccountMatch(payload: VerifyNgBVNBankAccountMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_bank_account_match", ...payload });
        return response<any>(res);
    }

    async institutions(payload: VerifyInstitutionsRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "institutions", ...payload });
        return response<any>(res);
    }

    async bvnAssociatedFinancialAccountsInitiate(payload: VerifyBVNAssociatedFinancialAccountsInitiateRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_associated_financial_accounts", mode: "initiate", ...payload });
        return response<any>(res);
    }

    async bvnAssociatedFinancialAccountsFetch(payload: VerifyBVNAssociatedFinancialAccountsFetchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_associated_financial_accounts", mode: "fetch", ...payload });
        return response<any>(res);
    }

    async bvnContact(payload: VerifyBVNContactRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_contact", ...payload });
        return response<any>(res);
    }

    async bvnPhotoPhoneMatch(payload: VerifyBVNPhotoPhoneMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_photo_phone_match", ...payload });
        return response<any>(res);
    }

    async bvnPhotoMatch(payload: VerifyBVNPhotoMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_photo_match", ...payload });
        return response<any>(res);
    }

    async bvn(payload: VerifyBVNRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn", ...payload });
        return response<any>(res);
    }

    async cac(payload: VerifyCACRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "cac", ...payload });
        return response<any>(res);
    }

    async companySearch(payload: VerifyCompanySearchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "company_search", ...payload });
        return response<any>(res);
    }

    async documentImage(payload: VerifyDocumentImageRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "document_image", ...payload });
        return response<any>(res);
    }

    async faceComparison(payload: VerifyFaceComparisonRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "face_comparison", ...payload });
        return response<any>(res);
    }

    async ngIndividualCreditCheckt(payload: VerifyNgIndividualCreditCheckRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_credit_check_individual", ...payload });
        return response<any>(res);
    }

    async ngBusinessCreditCheck(payload: VerifyNgBusinessCreditCheckRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_credit_check_business", ...payload });
        return response<any>(res);
    }

    async ngDriverLicenseDateofBirthFaceMatch(payload: VerifyNgDriverLicenseDateofBirthFaceMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_driver_license_dob_face_match", ...payload });
        return response<any>(res);
    }

    async ngDriverLicense(payload: VerifyNgDriverLicenseRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_driver_license_id_image", ...payload });
        return response<any>(res);
    }

    async ngIntPassportNameFaceMatch(payload: VerifyNgIntPassportNameFaceMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_international_passport_name_face_match", ...payload });
        return response<any>(res);
    }

    async ngPhone(payload: VerifyNgPhoneRequest): Promise<Response<VerifyNgPhoneResponse>> {
        const res = await this.base.request('verification/lookup', { code: "ng_phone_number", ...payload });
        return response<VerifyNgPhoneResponse>(res);
    }

    async ninFaceMatch(payload: VerifyNINFaceMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "nin_face_match", ...payload });
        return response<any>(res);
    }

    async ninPhoneMatch(payload: VerifyNINPhoneMatchRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "nin_phone_number_match", ...payload });
        return response<any>(res);
    }

    async LivenessCheck(payload: VerifyLivenessCheckRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "user_liveness_check", ...payload });
        return response<any>(res);
    }

    async GlobalSanction(payload: VerifyGlobalSanctionRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "global_sanction", ...payload });
        return response<any>(res);
    }

    async pep(payload: VerifyPEPRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "pep", ...payload });
        return response<any>(res);
    }

    async ngVotersCard(payload: VerifyNgVotersCardRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_voters_card", ...payload });
        return response<any>(res);
    }

    async ngPhoneConfirmationInitiate(payload: VerifyNgPhoneConfirmationInitiateRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_phone_number_confirmation", mode: "send_code", ...payload });
        return response<any>(res);
    }

    async ngPhoneConfirmation(payload: VerifyNgPhoneConfirmationRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_phone_number_confirmation", mode: "verify_code", ...payload });
        return response<any>(res);
    }

    async ngSMSPrompt(payload: VerifyNgSMSPromptRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_sms_prompt", ...payload });
        return response<any>(res);
    }

    async WalletAddress(payload: VerifyWalletAddressRequest): Promise<Response<any>> {
        const res = await this.base.request('verification/lookup', { code: "wallet_address", ...payload });
        return response<any>(res);
    }
}