import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products/');
      const products = await response.json();

      if (Array.isArray(products) && products.length > 0) {
        setProducts(products);
      } else {
        console.log('No products found.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = async (productId, productName, productPrice, img_url, quantity) => {
    if (quantity <= 0) {
      alert('Product is out of stock.');
      return;
    }

    const token = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');

    const body = {
      user_id: userId,
      product_id: productId,
      quantity: 1,
      product_name: productName,
      total_price: productPrice * quantity,
      img_url: img_url,
    };

    try {
      const response = await fetch('http://localhost:3000/api/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        alert('Item added to cart successfully!');
        const updateQuantityResponse = await fetch(`http://localhost:3000/api/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ quantity: -1 })
        });

        if (updateQuantityResponse.ok) {
          console.log('Product quantity updated successfully.');
          fetchProducts(); // Fetch products again after updating quantity
        } else {
          console.error('Failed to update product quantity.');
        }
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  // Helper function to group products by category
  const groupProductsByCategory = (products) => {
    const groupedProducts = {};
    products.forEach((product) => {
      const { category } = product;
      if (!groupedProducts[category]) {
        groupedProducts[category] = [];
      }
      groupedProducts[category].push(product);
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory(products);

  return (
    <Container className="mt-5">
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className="jumbotron jumbotron-body">
          <div className="container">
            <h2 className="text-center mb-5">{category}</h2>
            <Row>
              {groupedProducts[category].map((product) => (
                <Col key={product.product_id} md={4}>
                  <div className="text-center">
                    <img src={product.img_url} alt={product.name} className="category-img img-fluid" />
                    <h3 className="category-title">{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Quantities: <span>{product.quantity}</span></p>
                    <Button
                      variant="primary"
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product.product_id, product.name, product.price, product.img_url, product.quantity)}
                      disabled={product.quantity <= 0}
                    >
                      Add to Cart - ${product.price.toFixed(2)}
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Shop;
