// api/users functions
const get_user = require('../api/users/get_user');
const get_users = require('../api/users/get_users');
const create_user = require('../api/users/create_user');
const update_user = require('../api/users/update_user');
const delete_user = require('../api/users/delete_user');
// api/servers functions
const get_servers = require('../api/servers/get_servers');
const get_server = require('../api/servers/get_server');

function Panel(url, public_key, private_key) {
    this.url = url;
    this.public_key = public_key;
    this.private_key = private_key;
}
/**
 * Show all of the data from the object
 */
Panel.prototype.showdata = function () {
    console.log(this);
};

/**
 * Get All Of The Users From The Panel
 * @param callback
 */
Panel.prototype.get_users = function (callback) {
    get_users(this, callback);
};

/**
 * Get A Single Users Data From The Panel
 * @user_id callback
 */
Panel.prototype.get_user = function (user_id, callback) {
    get_user(this, user_id, callback);
};

/**
 * Create a User from JSON user object
 * @param user
 * @param callback
 */
Panel.prototype.create_user = function (user, callback) {
    create_user(this, user, callback);
};

/**
 * Delete a user by IDs
 * @param user_id
 * @param body
 * @param callback
 */
Panel.prototype.update_user = function (user_id, body, callback) {
    update_user(this, body, user_id, callback);
};

/**
 * Delete a user by ID
 * @param user_id
 * @param callback
 */

Panel.prototype.delete_user = function (user_id, callback) {
    delete_user(this, user_id, callback);
};

Panel.prototype.get_servers = function (callback) {
    get_servers(this, callback);
};
Panel.prototype.get_server = function (server_id, callback) {
    get_server(this,server_id, callback);
};

module.exports = Panel;