const pool = require('../config/dbConfig');

class Cart {
    static async addToCart(userId, productId, quantity, totalPrice, productName) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO Cart (user_id, product_id, quantity, total_price, product_name) VALUES (?, ?, ?, ?, ?)', 
                [userId, productId, quantity, totalPrice, productName], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Add more methods as needed (e.g., getCartItemsByUserId, updateCartItemQuantity, removeCartItem)
}

module.exports = Cart;
