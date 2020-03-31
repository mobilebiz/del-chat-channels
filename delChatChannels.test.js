// テストプログラム
require('dotenv').config();
const twi = require('./twi.js');
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;

describe('件数の確認', () => {
    test('対象となる件数がある', async () => {
        await twi.getChannelList(serviceSid)
        .then(channels => {
            console.log(`対象件数は${channels.length}件です。`);
            expect(channels.length).toBeGreaterThan(0);
        });
    });
});
