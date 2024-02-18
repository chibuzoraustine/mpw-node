import MoiPayWay from '@/index';
import dotenv from "dotenv";
dotenv.config();

describe('MoiPayWay SDK Misc Tests', () => {

  let moipayway: MoiPayWay;

  beforeEach(async () => {
    // Initialize MoiPayWay SDK with secret token
    moipayway = new MoiPayWay(process.env.testSecretKey!);
  });

  it('must return one or more countries', async () => {
    const res = await moipayway.misc.countries();
    expect(res.data.length).toBeGreaterThan(0);
  });

  // more unit tests...


});