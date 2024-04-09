const db = require('../config/dbConfig');
const jwt = require('jsonwebtoken');
const getUserIdFromToken = require('../utils/jwtMiddleware');


// Controller function to get all cart items
const getAllCartItems = (req, res) => {
    db.query('SELECT * FROM cart', (err, results) => {
        if (err) {
            console.error('Error getting cart items:', err);
            res.status(500).json({ error: 'Error getting cart items' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Controller function to create a new item in the cart
const createCartItem = (req, res) => {
    const { user_id, product_id, product_name, quantity , total_price , img_url } = req.body;
    console.log("user : ", user_id);
    if (!user_id) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    let newItem = {user_id: user_id , product_id: product_id , product_name: product_name, quantity: quantity , total_price: total_price , img_url:img_url };
    console.log('user ', newItem);
    db.query('INSERT INTO cart SET ?', newItem, (err, results) => {
        if (err) {
            console.error('Error creating cart item:', err);
            res.status(500).json({ error: 'Error creating cart item' });
        } else {
            res.status(201).json({ message: 'Cart item created successfully', cartItemId: results.insertId });
        }
    });
};

// Controller function to update an existing item in the cart
const updateCartItem = (req, res) => {
    const cartItemId = req.params.id;
    const { quantity } = req.body;
    const updatedItem = { quantity };

    db.query('UPDATE cart SET ? WHERE cart_id = ?', [updatedItem, cartItemId], (err, results) => {
        if (err) {
            console.error('Error updating cart item:', err);
            res.status(500).json({ error: 'Error updating cart item' });
        } else {
            res.status(200).json({ message: 'Cart item updated successfully', cartItemId });
        }
    });
};

// Controller function to delete an item from the cart
const deleteCartItem = (req, res) => {
    const cartItemId = req.params.id;
    console.log("cart item : ",cartItemId);

    db.query('DELETE FROM cart WHERE cart_id = ?', [cartItemId], (err, results) => {
        if (err) {
            console.error('Error deleting cart item:', err);
            res.status(500).json({ error: 'Error deleting cart item' });
        } else {
            res.status(200).json({ message: 'Cart item deleted successfully', cartItemId });
        }
    });
};

const getCartItemsByUser = (req, res) => {
    const userId = req.params.userId;

    db.query('SELECT * FROM Cart WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            console.error('Error fetching cart items:', err);
            res.status(500).json({ error: 'Error fetching cart items' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Delete all cart items for a specific user
const deleteAllCartItemsByUser = (req, res) => {
    const userId = req.params.userId;

    db.query('DELETE FROM cart WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            console.error('Error deleting cart items for user:', err);
            res.status(500).json({ error: 'Error deleting cart items' });
        } else {
            res.status(200).json({ message: 'All cart items deleted successfully for user', userId });
        }
    });
};

module.exports = {
    getAllCartItems,
    createCartItem,
    updateCartItem,
    deleteCartItem,
    getCartItemsByUser,
    deleteAllCartItemsByUser
};
