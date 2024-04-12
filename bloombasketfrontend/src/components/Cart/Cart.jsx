import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const apiUrl = `http://localhost:3000/api/cart/user/${userId}`;
      const response = await fetch(apiUrl);
      const cartItems = await response.json();

      if (Array.isArray(cartItems) && cartItems.length > 0) {
        setCartItems(cartItems);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const removeCartItem = async (cartId, productId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/${cartId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const token = localStorage.getItem('accessToken');
        const updateQuantityResponse = await fetch(`http://localhost:3000/api/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ quantity: 1 })
        });

        if (updateQuantityResponse.ok) {
          fetchCartItems();
        } else {
          console.error('Failed to update product quantity.');
        }
      } else {
        console.error('Failed to remove cart item.');
      }
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const confirmOrderAndDeleteCartItems = async (totalPrice) => {
    try {
      const userId = localStorage.getItem('userId');
      const apiUrl = `http://localhost:3000/api/cart/user/${userId}`;
      const response = await fetch(apiUrl, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert(`Your order is complete. Total amount: £${totalPrice.toFixed(2)}`);
        fetchCartItems();
      } else {
        console.error('Failed to delete cart items after confirming order.');
      }
    } catch (error) {
      console.error('Error confirming order and deleting cart items:', error);
    }
  };

  return (
    <Container className="mt-5">
      <div className="jumbotron jumbotron-body">
        <div className="container">
          <h2 className="text-center mb-5">Shopping Cart</h2>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div key={item.cart_id} className="cart-item">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img src={item.img_url} alt={item.product_name} className="img-fluid" />
                      </div>
                      <div className="col-md-4">
                        <div className="cart-item-details">
                          <h4>{item.product_name}</h4>
                          <p>Price: £{item.total_price.toFixed(2)}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <p className="cart-item-total">Total: £{(item.quantity * item.total_price).toFixed(2)}</p>
                      </div>
                      <div className="col-md-3">
                        <Button
                          variant="danger"
                          className="remove-btn"
                          onClick={() => removeCartItem(item.cart_id, item.product_id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="row justify-content-end mt-5">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Cart Summary</h5>
                      <p>Total Items: {cartItems.length}</p>
                      <p>
                        Total Cost: £{cartItems.reduce((total, item) => total + item.quantity * item.total_price, 0).toFixed(2)}
                      </p>
                      <Button
                        variant="primary"
                        className="btn-block"
                        onClick={() =>
                          confirmOrderAndDeleteCartItems(
                            cartItems.reduce((total, item) => total + item.quantity * item.total_price, 0)
                          )
                        }
                      >
                        Confirm Order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-item text-center">
              <h4>No Item Found</h4>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
