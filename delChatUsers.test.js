// テストプログラム
require('dotenv').config();
const twi = require('./twi.js');
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;

describe('件数の確認', () => {
    test('対象となる件数がある', async () => {
        await twi.getUserList(serviceSid)
        .then(users => {
            console.log(`対象ユーザ件数は${users.length}件です。`);
            expect(users.length).toBeGreaterThan(0);
        });
    });
});
