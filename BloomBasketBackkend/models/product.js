const pool = require('../config/dbConfig');

class Product {
    static async getAllProducts() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Product', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getProductById(productId) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Product WHERE product_id = ?', [productId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    // Add more methods as needed (e.g., createProduct, updateProduct, deleteProduct)
}

module.exports = Product;
