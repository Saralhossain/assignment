const db = require('../config/dbConfig');

class User {
    static async createUser(username, password, email) {
        return db.query('INSERT INTO User (username, password, email) VALUES (?, ?, ?)', [username, password, email]);
    }

    static async getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM `user` WHERE email = ?", [email], (err, results, fields) => {
                if (err) {
                    console.error('Error fetching user by email:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = User;
