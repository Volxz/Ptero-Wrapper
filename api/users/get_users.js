const request = require("request");
const endpoints = require('../endpoints.json');
const get_auth_header = require('../get_auth_header');

function get_users(panel, callback) {
    const req_url = panel.url + endpoints.user;
    get_auth_header(req_url, '',panel.public_key, panel.private_key, (auth_header) => {
        request.get(req_url, {
            'auth': {
                'bearer': auth_header
            },
            json: true
        }, function (error, response, body) {
            if (error) throw new Error(error);
            if(response.statusCode === 200){
                callback(body.data)
            }
            if (response.statusCode !== 200) {
                callback(null, 'No data was returned from the panel.')
            }

        });
    });

}


module.exports = get_users;