require('dotenv').config();
const twi = require('./twi.js');

const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;

twi.getUserList(serviceSid)
.then(users => {
    console.log(`対象ユーザ件数は、${users.length}件です。`);
    users.forEach(u => {
        twi.delUser(serviceSid, u.sid)
        .then(() => {
            console.log(`Deleted. ${u.sid}`);
        })
        .catch(err => {
            console.error(err);
        })
    });
})
.catch(err => {
    console.error(err);
});
