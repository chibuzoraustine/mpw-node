"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../utils/helpers");
class Verification {
    constructor(base) {
        this.base = base;
    }
    intBasicBankAccount(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "international_basic_bank_account" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngBasicBankAccount(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_basic_bank_account" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngAdvanceBankAccount(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_advance_bank_account" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngBVNBankAccountMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn_bank_account_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    institutions(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "institutions" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    bvnAssociatedFinancialAccountsInitiate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn_associated_financial_accounts", mode: "initiate" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    bvnAssociatedFinancialAccountsFetch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn_associated_financial_accounts", mode: "fetch" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    bvnContact(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn_contact" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    bvnPhotoPhoneMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn_photo_phone_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    bvnPhotoMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn_photo_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    bvn(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "bvn" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    cac(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "cac" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    companySearch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "company_search" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    documentImage(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "document_image" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    faceComparison(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "face_comparison" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngIndividualCreditCheck(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_credit_check_individual" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngBusinessCreditCheck(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_credit_check_business" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngDriverLicenseDateofBirthFaceMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_driver_license_dob_face_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngDriverLicense(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_driver_license_id_image" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngIntPassportNameFaceMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_international_passport_name_face_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngPhone(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_phone_number" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ninFaceMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "nin_face_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ninPhoneMatch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "nin_phone_number_match" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    livenessCheck(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "user_liveness_check" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    GlobalSanction(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "global_sanction" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    pep(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "pep" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngVotersCard(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_voters_card" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngPhoneConfirmationInitiate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_phone_number_confirmation", mode: "send_code" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngPhoneConfirmation(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_phone_number_confirmation", mode: "verify_code" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    ngSMSPrompt(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "ng_sms_prompt" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
    WalletAddress(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.base.request('verification/lookup', Object.assign({ code: "wallet_address" }, payload));
            return (0, helpers_1.response)(res);
        });
    }
}
exports.default = Verification;
