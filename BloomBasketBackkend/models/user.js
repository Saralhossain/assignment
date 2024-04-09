const db = require('../config/dbConfig');

class User {
    static async createUser(username, password, email) {
        return db.query('INSERT INTO User (username, password, email) VALUES (?, ?, ?)', [username, password, email]);
    }

    static async getUserByEmail(email) {
        try {
            return await db.query('SELECT * FROM user WHERE email = ?', [email]);
        } catch (error) {
            console.error('Error fetching user by email:', error);
            throw error; 
        }
        }
}

module.exports = User;
