const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

// Route to retrieve all cart items for a specific user
router.get('/user/:userId', cartController.getCartItemsByUser);
router.delete('/user/:userId', cartController.deleteAllCartItemsByUser);
// Route to add a product to the cart
router.get('/', cartController.getAllCartItems);
router.post('/', cartController.createCartItem);
router.put('/:id', cartController.updateCartItem);
router.delete('/:id', cartController.deleteCartItem);

// Add more routes for viewing cart items, updating quantities, and removing items from cart

module.exports = router;
