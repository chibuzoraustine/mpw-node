import { VerifyBVNAssociatedFinancialAccountsFetchRequest, VerifyBVNAssociatedFinancialAccountsInitiateRequest, VerifyBVNContactRequest, VerifyBVNPhotoMatchRequest, VerifyBVNPhotoPhoneMatchRequest, VerifyBVNRequest, VerifyCACRequest, VerifyCompanySearchRequest, VerifyDocumentImageRequest, VerifyFaceComparisonRequest, VerifyGlobalSanctionRequest, VerifyInstitutionsRequest, VerifyIntBasicBankAccountRequest, VerifyLivenessCheckRequest, VerifyNINFaceMatchRequest, VerifyNINPhoneMatchRequest, VerifyNgAdvanceBankAccountRequest, VerifyNgBVNBankAccountMatchRequest, VerifyNgBasicBankAccountRequest, VerifyNgBusinessCreditCheckRequest, VerifyNgDriverLicenseDateofBirthFaceMatchRequest, VerifyNgDriverLicenseRequest, VerifyNgIndividualCreditCheckRequest, VerifyNgIntPassportNameFaceMatchRequest, VerifyNgPhoneConfirmationInitiateRequest, VerifyNgPhoneConfirmationRequest, VerifyNgPhoneRequest, VerifyNgPhoneResponse, VerifyNgSMSPromptRequest, VerifyNgVotersCardRequest, VerifyPEPRequest, VerifyWalletAddressRequest } from "@/types";
import Base from "./base.js";
import { Response } from "@/types/global";
export default class Verification {
    private base;
    constructor(base: Base);
    intBasicBankAccount(payload: VerifyIntBasicBankAccountRequest): Promise<Response<any>>;
    ngBasicBankAccount(payload: VerifyNgBasicBankAccountRequest): Promise<Response<any>>;
    ngAdvanceBankAccount(payload: VerifyNgAdvanceBankAccountRequest): Promise<Response<any>>;
    ngBVNBankAccountMatch(payload: VerifyNgBVNBankAccountMatchRequest): Promise<Response<any>>;
    institutions(payload: VerifyInstitutionsRequest): Promise<Response<any>>;
    bvnAssociatedFinancialAccountsInitiate(payload: VerifyBVNAssociatedFinancialAccountsInitiateRequest): Promise<Response<any>>;
    bvnAssociatedFinancialAccountsFetch(payload: VerifyBVNAssociatedFinancialAccountsFetchRequest): Promise<Response<any>>;
    bvnContact(payload: VerifyBVNContactRequest): Promise<Response<any>>;
    bvnPhotoPhoneMatch(payload: VerifyBVNPhotoPhoneMatchRequest): Promise<Response<any>>;
    bvnPhotoMatch(payload: VerifyBVNPhotoMatchRequest): Promise<Response<any>>;
    bvn(payload: VerifyBVNRequest): Promise<Response<any>>;
    cac(payload: VerifyCACRequest): Promise<Response<any>>;
    companySearch(payload: VerifyCompanySearchRequest): Promise<Response<any>>;
    documentImage(payload: VerifyDocumentImageRequest): Promise<Response<any>>;
    faceComparison(payload: VerifyFaceComparisonRequest): Promise<Response<any>>;
    ngIndividualCreditCheckt(payload: VerifyNgIndividualCreditCheckRequest): Promise<Response<any>>;
    ngBusinessCreditCheck(payload: VerifyNgBusinessCreditCheckRequest): Promise<Response<any>>;
    ngDriverLicenseDateofBirthFaceMatch(payload: VerifyNgDriverLicenseDateofBirthFaceMatchRequest): Promise<Response<any>>;
    ngDriverLicense(payload: VerifyNgDriverLicenseRequest): Promise<Response<any>>;
    ngIntPassportNameFaceMatch(payload: VerifyNgIntPassportNameFaceMatchRequest): Promise<Response<any>>;
    ngPhone(payload: VerifyNgPhoneRequest): Promise<Response<VerifyNgPhoneResponse>>;
    ninFaceMatch(payload: VerifyNINFaceMatchRequest): Promise<Response<any>>;
    ninPhoneMatch(payload: VerifyNINPhoneMatchRequest): Promise<Response<any>>;
    LivenessCheck(payload: VerifyLivenessCheckRequest): Promise<Response<any>>;
    GlobalSanction(payload: VerifyGlobalSanctionRequest): Promise<Response<any>>;
    pep(payload: VerifyPEPRequest): Promise<Response<any>>;
    ngVotersCard(payload: VerifyNgVotersCardRequest): Promise<Response<any>>;
    ngPhoneConfirmationInitiate(payload: VerifyNgPhoneConfirmationInitiateRequest): Promise<Response<any>>;
    ngPhoneConfirmation(payload: VerifyNgPhoneConfirmationRequest): Promise<Response<any>>;
    ngSMSPrompt(payload: VerifyNgSMSPromptRequest): Promise<Response<any>>;
    WalletAddress(payload: VerifyWalletAddressRequest): Promise<Response<any>>;
}
