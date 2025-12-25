import React, { useState, useEffect } from 'react';
import CartItem from './cartItem'
import PropTypes from 'prop-types';
import sum from './sum'
import './App.css';

function CartView(props) {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const taxMultiplier = .1;

  // Fetch the cart by id
  useEffect(() => {
    fetch(`/api/carts/${props.cartId}`, {
      method: 'GET',
      // headers: new Headers({
      //   'x-auth': props.session.token
      // }),
      cache: 'default'
    })
      .then(r => r.json().then(json => ({ ok: r.ok, status: r.status, json })))
      .then(response => {
        if (!response.ok || response.status !== 200) {
          throw new Error(response.json.message);
        }
        setCart(response.json);
      })
      .catch(error => {
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cartId]);

  if (error) {
    return (
      <div className="error-message">
        <h1 data-testid="error_heading_id">❌ Failed to retrieve cart ({error.message})</h1>
      </div>
    );
  } else if (!cart) {
    return (
      <div className="loading-message">
        <h1>⏳ Loading shopping cart...</h1>
      </div>
    );
  } else {
    const costs = cart.cartItems.map(a => a.cost);
    const itemTotal = sum(...costs);
    const tax = sum(itemTotal, props.shippingCost) * taxMultiplier;
    const total = sum(itemTotal, props.shippingCost) + tax;
    return (
      <>
        <div>
          <h2 data-testid="cart_heading_id" style={{ color: '#333', marginBottom: '20px', fontSize: '1.8rem', fontWeight: 700 }}>
            🛍️ Your Items
          </h2>
          <ul className="cart-items-list">
            {cart.cartItems.map((cartItemData, idx) =>
              <li key={idx}>
                <CartItem item={cartItemData} />
              </li>
            )}
          </ul>
        </div>
        <div className="cart-summary">
          <p data-testid="itemscost_id">
            <span>Items:</span>
            <span>${(itemTotal/100).toFixed(2)}</span>
          </p>
          <p>
            <span>Shipping:</span>
            <span>${(props.shippingCost/100).toFixed(2)}</span>
          </p>
          <p>
            <span>Tax (10%):</span>
            <span>${(tax/100).toFixed(2)}</span>
          </p>
          <hr />
          <p>
            <span>Order Total:</span>
            <span>${(total/100).toFixed(2)}</span>
          </p>
        </div>
      </>
    );
  }
}

CartView.propTypes = {
  cartId: PropTypes.number.isRequired,
  shippingCost: PropTypes.number.isRequired
};

export default CartView
