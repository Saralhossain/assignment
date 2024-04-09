const pool = require('../config/dbConfig');

class Order {
    static async createOrder(userId, totalAmount) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO `Order` (user_id, total_amount) VALUES (?, ?)', [userId, totalAmount], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getOrderById(orderId) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM `Order` WHERE order_id = ?', [orderId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    // Add more methods as needed (e.g., getOrderHistoryByUserId)
}

module.exports = Order;
