require('dotenv').config();
const twi = require('./twi.js');

const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;

twi.getChannelList(serviceSid)
.then(channels => {
    console.log(`対象件数は、${channels.length}件です。`);
    channels.forEach(c => {
        twi.delChannel(serviceSid, c.sid)
        .then(() => {
            console.log(`Deleted. ${c.sid}`);
        })
        .catch(err => {
            console.error(err);
        })
    });
})
.catch(err => {
    console.error(err);
});
