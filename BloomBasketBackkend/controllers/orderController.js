const db = require('../config/dbConfig');

// Controller function to get all orders
const getAllOrders = (req, res) => {
    db.query('SELECT * FROM orders', (err, results) => {
        if (err) {
            console.error('Error getting orders:', err);
            res.status(500).json({ error: 'Error getting orders' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Controller function to create a new order
const createOrder = (req, res) => {
    const { userId, productId, quantity, totalPrice } = req.body;
    const newOrder = { userId, productId, quantity, totalPrice };

    db.query('INSERT INTO orders SET ?', newOrder, (err, results) => {
        if (err) {
            console.error('Error creating order:', err);
            res.status(500).json({ error: 'Error creating order' });
        } else {
            res.status(201).json({ message: 'Order created successfully', orderId: results.insertId });
        }
    });
};

// Controller function to update an existing order by ID
const updateOrderById = (req, res) => {
    const orderId = req.params.id;
    const { quantity, totalPrice } = req.body;
    const updatedOrder = { quantity, totalPrice };

    db.query('UPDATE orders SET ? WHERE id = ?', [updatedOrder, orderId], (err, results) => {
        if (err) {
            console.error('Error updating order:', err);
            res.status(500).json({ error: 'Error updating order' });
        } else {
            res.status(200).json({ message: 'Order updated successfully', orderId });
        }
    });
};

// Controller function to delete an order by ID
const deleteOrderById = (req, res) => {
    const orderId = req.params.id;

    db.query('DELETE FROM orders WHERE id = ?', [orderId], (err, results) => {
        if (err) {
            console.error('Error deleting order:', err);
            res.status(500).json({ error: 'Error deleting order' });
        } else {
            res.status(200).json({ message: 'Order deleted successfully', orderId });
        }
    });
};

module.exports = {
    getAllOrders,
    createOrder,
    updateOrderById,
    deleteOrderById
};
