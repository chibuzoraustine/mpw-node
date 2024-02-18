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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
describe('MoiPayWay SDK Integration Tests', () => {
    let moipayway;
    beforeEach(() => {
        // Initialize MoiPayWay SDK with a mock secret token
        moipayway = new index_1.default(process.env.testSecretKey);
    });
    it('must be initialized with a valid secret token', () => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(process.env.testSecretKey)
        let valid = false;
        try {
            yield moipayway.misc.countries();
            valid = true;
        }
        catch (error) {
            console.log('response error:', error);
            valid = false;
        }
        expect(valid).toBe(true);
    }));
    // More tests ...
});
