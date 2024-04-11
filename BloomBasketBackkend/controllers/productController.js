const db = require('../config/dbConfig');

// Controller function to fetch all products
exports.getAllProducts = (req, res) => {
    db.query('SELECT * FROM product', (err, results) => {
        if (err) {
            console.error('Error fetching product:', err);
            res.status(500).json({ error: 'Failed to fetch products' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Controller function to create a new product
exports.createProduct = (req, res) => {
    const { name, category, description, price } = req.body;
    
    if (!name || !category || !description || !price) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const newProduct = {
        name,
        category,
        description,
        price
    };

    db.query('INSERT INTO products SET ?', newProduct, (err, result) => {
        if (err) {
            console.error('Error creating product:', err);
            res.status(500).json({ error: 'Failed to create product' });
        } else {
            res.status(201).json({ message: 'Product created successfully', productId: result.insertId });
        }
    });
};

// Controller function to get a product by ID
exports.getProductById = (req, res) => {
    const productId = req.params.id;

    db.query('SELECT * FROM products WHERE id = ?', productId, (err, results) => {
        if (err) {
            console.error('Error fetching product:', err);
            res.status(500).json({ error: 'Failed to fetch product' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.status(200).json(results[0]);
            }
        }
    });
};

// Controller function to update a product by ID
exports.updateProduct = (req, res) => {
    const product_id = req.params.id;
    const { quantity } = req.body;
    console.log("p_id & Q ", product_id , quantity);
    

    const operator = Number(quantity) > 0 ? '+' : '-';
    const absQuantity = Math.abs(quantity); 
    // console.log("operator & asbQ ", operator , absQuantity);

    const sql = `UPDATE product SET quantity = quantity ${operator} ? WHERE product_id = ?`;
    const values = [absQuantity, product_id];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ error: 'Failed to update product' });
        } else {
            res.status(200).json({ message: 'Product updated successfully' });
        }
    });
};


// Controller function to delete a product by ID
exports.deleteProduct = (req, res) => {
    const productId = req.params.id;

    db.query('DELETE FROM products WHERE id = ?', productId, (err, result) => {
        if (err) {
            console.error('Error deleting product:', err);
            res.status(500).json({ error: 'Failed to delete product' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    });
};
