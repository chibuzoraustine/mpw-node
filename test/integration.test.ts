import MoiPayWay from '../src/index.js';
import dotenv from "dotenv";
dotenv.config();

describe('MoiPayWay SDK Integration Tests', () => {

  let moipayway: MoiPayWay;

  beforeEach(() => {
    // Initialize MoiPayWay SDK with a mock secret token
    moipayway = new MoiPayWay(process.env.testSecretKey!);
  });

  it('must be initialized with a valid secret token', async () => {
    // console.log(process.env.testSecretKey)
    let valid: boolean = false;
    try {
      await moipayway.misc.countries();
      valid = true;
    } catch (error) {
      console.log('response error:', error);
      valid = false;
    }

    expect(valid).toBe(true);
  });

  // More tests ...

});