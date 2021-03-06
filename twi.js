require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.getChannelList = (serviceSid) => {
    return new Promise((resolve, reject) => {
        client.chat.services(serviceSid).channels.list()
        .then(channels => {
            resolve(channels);
        })
        .catch(err => {
            reject(err);
        })
    });
};

exports.delChannel = (serviceSid, channelSid) => {
    return new Promise((resolve, reject) => {
        client.chat.services(serviceSid).channels(channelSid).remove()
        .then(() => {
            resolve();
        })
        .catch(err => {
            reject(err);
        })
    });
};

exports.getUserList = (serviceSid) => {
    return new Promise((resolve, reject) => {
        client.chat.services(serviceSid).users.list()
        .then(users => {
            resolve(users);
        })
        .catch(err => {
            reject(err);
        })
    });
};

exports.delUser = (serviceSid, userSid) => {
    return new Promise((resolve, reject) => {
        client.chat.services(serviceSid).users(userSid).remove()
        .then(() => {
            resolve();
        })
        .catch(err => {
            reject(err);
        })
    });
};