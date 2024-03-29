import { VerifyBVNAssociatedFinancialAccountsFetchRequest, VerifyBVNAssociatedFinancialAccountsInitiateRequest, VerifyBVNContactRequest, VerifyBVNPhotoMatchRequest, VerifyBVNPhotoPhoneMatchRequest, VerifyBVNRequest, VerifyCACRequest, VerifyCompanySearchRequest, VerifyDocumentImageRequest, VerifyFaceComparisonRequest, VerifyGlobalSanctionRequest, VerifyInstitutionsRequest, VerifyIntBasicBankAccountRequest, VerifyLivenessCheckRequest, VerifyNINFaceMatchRequest, VerifyNINPhoneMatchRequest, VerifyNgAdvanceBankAccountRequest, VerifyNgBVNBankAccountMatchRequest, VerifyNgBasicBankAccountRequest, VerifyNgBusinessCreditCheckRequest, VerifyNgDriverLicenseDateofBirthFaceMatchRequest, VerifyNgDriverLicenseRequest, VerifyNgIndividualCreditCheckRequest, VerifyNgIntPassportNameFaceMatchRequest, VerifyNgPhoneConfirmationInitiateRequest, VerifyNgPhoneConfirmationRequest, VerifyNgPhoneRequest, VerifyNgPhoneResponse, VerifyNgSMSPromptRequest, VerifyNgVotersCardRequest, VerifyPEPRequest, VerifyWalletAddressRequest } from "../types/index";
import Base from "./base";
import { Res } from "../types/index";
export default class Verification {
    private base;
    constructor(base: Base);
    intBasicBankAccount(payload: VerifyIntBasicBankAccountRequest): Promise<Res<any>>;
    ngBasicBankAccount(payload: VerifyNgBasicBankAccountRequest): Promise<Res<any>>;
    ngAdvanceBankAccount(payload: VerifyNgAdvanceBankAccountRequest): Promise<Res<any>>;
    ngBVNBankAccountMatch(payload: VerifyNgBVNBankAccountMatchRequest): Promise<Res<any>>;
    institutions(payload: VerifyInstitutionsRequest): Promise<Res<any>>;
    bvnAssociatedFinancialAccountsInitiate(payload: VerifyBVNAssociatedFinancialAccountsInitiateRequest): Promise<Res<any>>;
    bvnAssociatedFinancialAccountsFetch(payload: VerifyBVNAssociatedFinancialAccountsFetchRequest): Promise<Res<any>>;
    bvnContact(payload: VerifyBVNContactRequest): Promise<Res<any>>;
    bvnPhotoPhoneMatch(payload: VerifyBVNPhotoPhoneMatchRequest): Promise<Res<any>>;
    bvnPhotoMatch(payload: VerifyBVNPhotoMatchRequest): Promise<Res<any>>;
    bvn(payload: VerifyBVNRequest): Promise<Res<any>>;
    cac(payload: VerifyCACRequest): Promise<Res<any>>;
    companySearch(payload: VerifyCompanySearchRequest): Promise<Res<any>>;
    documentImage(payload: VerifyDocumentImageRequest): Promise<Res<any>>;
    faceComparison(payload: VerifyFaceComparisonRequest): Promise<Res<any>>;
    ngIndividualCreditCheck(payload: VerifyNgIndividualCreditCheckRequest): Promise<Res<any>>;
    ngBusinessCreditCheck(payload: VerifyNgBusinessCreditCheckRequest): Promise<Res<any>>;
    ngDriverLicenseDateofBirthFaceMatch(payload: VerifyNgDriverLicenseDateofBirthFaceMatchRequest): Promise<Res<any>>;
    ngDriverLicense(payload: VerifyNgDriverLicenseRequest): Promise<Res<any>>;
    ngIntPassportNameFaceMatch(payload: VerifyNgIntPassportNameFaceMatchRequest): Promise<Res<any>>;
    ngPhone(payload: VerifyNgPhoneRequest): Promise<Res<VerifyNgPhoneResponse>>;
    ninFaceMatch(payload: VerifyNINFaceMatchRequest): Promise<Res<any>>;
    ninPhoneMatch(payload: VerifyNINPhoneMatchRequest): Promise<Res<any>>;
    livenessCheck(payload: VerifyLivenessCheckRequest): Promise<Res<any>>;
    GlobalSanction(payload: VerifyGlobalSanctionRequest): Promise<Res<any>>;
    pep(payload: VerifyPEPRequest): Promise<Res<any>>;
    ngVotersCard(payload: VerifyNgVotersCardRequest): Promise<Res<any>>;
    ngPhoneConfirmationInitiate(payload: VerifyNgPhoneConfirmationInitiateRequest): Promise<Res<any>>;
    ngPhoneConfirmation(payload: VerifyNgPhoneConfirmationRequest): Promise<Res<any>>;
    ngSMSPrompt(payload: VerifyNgSMSPromptRequest): Promise<Res<any>>;
    WalletAddress(payload: VerifyWalletAddressRequest): Promise<Res<any>>;
}
