const pool = require('./pool');
const bcrypt = require('bcrypt');

function Admin() { };

Admin.prototype = {
    // Find the admin data by id or username.
    find: function (admin = null, callback) {
        // if the admin variable is defind
        if (admin) {
            // if admin = number return field = id, if admin = string return field = username.
            var field = Number.isInteger(admin) ? 'id' : 'username';
        }
        // prepare the sql query
        let sql = `SELECT * FROM adminusers WHERE ${field} = ?`;

        pool.query(sql, admin, function (err, result) {
            if (err) throw err

            if (result.length) {
                callback(result[0]);
            } else {
                callback(null);
            }
        });
    },

    // Insert data into data base (Create a new Admin User)
    // body is an object
    create: function (body, callback) {

        var pwd = body.password;
        // Hash the password before insert it into the database.
        body.password = bcrypt.hashSync(pwd, 10);

        // this array will contain the values of the fields.
        var bind = [];
        // loop in the attributes of the object and push the values into the bind array.
        for (prop in body) {
            bind.push(body[prop]);
        }
        // prepare the sql query
        let sql = `INSERT INTO adminusers(username, email, password) VALUES (?, ?, ?)`;
        // call the query give it the sql string and the values (bind array)
        pool.query(sql, bind, function (err, result) {
            if (err) throw err;
            // return the last inserted id. if there is no error
            callback(result.insertId);
        });
    },

    login: function (username, password, callback) {
        // find the admin data by his username.
        this.find(username, function (admin) {
            // if there is a admin by this username.
            if (admin) {
                // now we check his password.
                if (bcrypt.compareSync(password, admin.password)) {
                    // return this data.
                    callback(admin);
                    return;
                }
            }
            // if the username/password is wrong then return null.
            callback(null);
        });

    }
}

module.exports = Admin;