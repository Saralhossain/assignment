const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes for order-related operations
router.get('/', orderController.getAllOrders);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrderById);
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;
