const request = require("request");
const endpoints = require('../endpoints.json');
const get_auth_header = require('../get_auth_header');

function update_user(panel, body, user_id, callback) {
    const req_url = panel.url + endpoints.user + '/' + user_id;
    get_auth_header(req_url,JSON.stringify(body),panel.public_key, panel.private_key, (auth_header) => {
        request.put(req_url, {
            'auth': {
                'bearer': auth_header
            },
            json: true,
            body:body
        }, function (error, response, body) {
            if (error) throw new Error(error);
            if (response.statusCode === 200) {
                callback(body.data);
            }
            if (response.statusCode !== 200) {
                callback(null, 'There was an error processing the request.')
            }
        });
    });

}


module.exports = update_user;