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
} from "../types/index.js";
import Base from "./base.js";
import { Res } from "../types/index.js";
import { response } from "../utils/helpers.js";

export default class Verification {

    private base;

    constructor(base: Base) {
        this.base = base;
    }

    async intBasicBankAccount(payload: VerifyIntBasicBankAccountRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "international_basic_bank_account", ...payload });
        return response<any>(res);
    }

    async ngBasicBankAccount(payload: VerifyNgBasicBankAccountRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_basic_bank_account", ...payload });
        return response<any>(res);
    }

    async ngAdvanceBankAccount(payload: VerifyNgAdvanceBankAccountRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_advance_bank_account", ...payload });
        return response<any>(res);
    }

    async ngBVNBankAccountMatch(payload: VerifyNgBVNBankAccountMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_bank_account_match", ...payload });
        return response<any>(res);
    }

    async institutions(payload: VerifyInstitutionsRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "institutions", ...payload });
        return response<any>(res);
    }

    async bvnAssociatedFinancialAccountsInitiate(payload: VerifyBVNAssociatedFinancialAccountsInitiateRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_associated_financial_accounts", mode: "initiate", ...payload });
        return response<any>(res);
    }

    async bvnAssociatedFinancialAccountsFetch(payload: VerifyBVNAssociatedFinancialAccountsFetchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_associated_financial_accounts", mode: "fetch", ...payload });
        return response<any>(res);
    }

    async bvnContact(payload: VerifyBVNContactRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_contact", ...payload });
        return response<any>(res);
    }

    async bvnPhotoPhoneMatch(payload: VerifyBVNPhotoPhoneMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_photo_phone_match", ...payload });
        return response<any>(res);
    }

    async bvnPhotoMatch(payload: VerifyBVNPhotoMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn_photo_match", ...payload });
        return response<any>(res);
    }

    async bvn(payload: VerifyBVNRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "bvn", ...payload });
        return response<any>(res);
    }

    async cac(payload: VerifyCACRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "cac", ...payload });
        return response<any>(res);
    }

    async companySearch(payload: VerifyCompanySearchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "company_search", ...payload });
        return response<any>(res);
    }

    async documentImage(payload: VerifyDocumentImageRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "document_image", ...payload });
        return response<any>(res);
    }

    async faceComparison(payload: VerifyFaceComparisonRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "face_comparison", ...payload });
        return response<any>(res);
    }

    async ngIndividualCreditCheck(payload: VerifyNgIndividualCreditCheckRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_credit_check_individual", ...payload });
        return response<any>(res);
    }

    async ngBusinessCreditCheck(payload: VerifyNgBusinessCreditCheckRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_credit_check_business", ...payload });
        return response<any>(res);
    }

    async ngDriverLicenseDateofBirthFaceMatch(payload: VerifyNgDriverLicenseDateofBirthFaceMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_driver_license_dob_face_match", ...payload });
        return response<any>(res);
    }

    async ngDriverLicense(payload: VerifyNgDriverLicenseRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_driver_license_id_image", ...payload });
        return response<any>(res);
    }

    async ngIntPassportNameFaceMatch(payload: VerifyNgIntPassportNameFaceMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_international_passport_name_face_match", ...payload });
        return response<any>(res);
    }

    async ngPhone(payload: VerifyNgPhoneRequest): Promise<Res<VerifyNgPhoneResponse>> {
        const res = await this.base.request('verification/lookup', { code: "ng_phone_number", ...payload });
        return response<VerifyNgPhoneResponse>(res);
    }

    async ninFaceMatch(payload: VerifyNINFaceMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "nin_face_match", ...payload });
        return response<any>(res);
    }

    async ninPhoneMatch(payload: VerifyNINPhoneMatchRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "nin_phone_number_match", ...payload });
        return response<any>(res);
    }

    async livenessCheck(payload: VerifyLivenessCheckRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "user_liveness_check", ...payload });
        return response<any>(res);
    }

    async GlobalSanction(payload: VerifyGlobalSanctionRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "global_sanction", ...payload });
        return response<any>(res);
    }

    async pep(payload: VerifyPEPRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "pep", ...payload });
        return response<any>(res);
    }

    async ngVotersCard(payload: VerifyNgVotersCardRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_voters_card", ...payload });
        return response<any>(res);
    }

    async ngPhoneConfirmationInitiate(payload: VerifyNgPhoneConfirmationInitiateRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_phone_number_confirmation", mode: "send_code", ...payload });
        return response<any>(res);
    }

    async ngPhoneConfirmation(payload: VerifyNgPhoneConfirmationRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_phone_number_confirmation", mode: "verify_code", ...payload });
        return response<any>(res);
    }

    async ngSMSPrompt(payload: VerifyNgSMSPromptRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "ng_sms_prompt", ...payload });
        return response<any>(res);
    }

    async WalletAddress(payload: VerifyWalletAddressRequest): Promise<Res<any>> {
        const res = await this.base.request('verification/lookup', { code: "wallet_address", ...payload });
        return response<any>(res);
    }
}