const request = require("request");
const endpoints = require('../endpoints.json');
const get_auth_header = require('../get_auth_header');

function get_user(panel, user_id, callback) {
    const req_url = panel.url + endpoints.user + '/' + user_id;
    get_auth_header(req_url, '',panel.public_key, panel.private_key, (auth_header) => {
        request.delete(req_url, {
            'auth': {
                'bearer': auth_header
            },
            json: true
        }, function (error, response) {
            if (error) throw new Error(error);
            if(response.statusCode === 204){
                callback(true)
            }
            if (response.statusCode !== 204) {
                callback(false, 'Panel error occurred')
            }

        });
    });

}


module.exports = get_user;