const request = require("request");
const endpoints = require('../endpoints.json');
const get_auth_header = require('../get_auth_header');

/**
 *
 * BODY SHOULD BE AS FOLLOWS:
 * {
 * email:string,
 * username:string,
 * name_first:string
 * name_last:string
 * password:string
 * root_admin:boolean
 *
 */

function create_user(panel,body,callback){
    const req_url = panel.url + endpoints.user;
    get_auth_header(req_url, JSON.stringify(body),panel.public_key, panel.private_key, (auth_header) => {
        request.post(req_url, {
            'auth': {
                'bearer': auth_header
            },
            body:body,
            json: true
        }, function (error, response, body) {
            if (error) throw new Error(error);
            if (response.statusCode === 200) {
                callback(body.data);
            }
            if(response.statusCode === 422){
                callback(null,'Server Returned 422 Unprocessable Entity')
            }
            if(response.statusCode === 422){
                callback(null,'Server Returned 503 Service Unavailable')
            }
        });
    });

}


module.exports = create_user;