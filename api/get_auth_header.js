const crypto = require('crypto');

let hash,hmac;

function get_auth_hash(url, body,public_key,private_key, callback) {
    if (url && private_key) {
        hmac = crypto.createHmac('sha256', private_key);
        hmac.write(url+body);
        hmac.end();
        hash = hmac.read().toString('base64');
        callback(public_key + '.' + hash);
    }
    if (!url || !private_key) {
        console.log('You did not specify one of the auth parameters');
        console.log('The Params are as follows:');
        console.log('URL: ' + url);
        console.log('Private Key: ' + private_key);
    }
}

module.exports = get_auth_hash;