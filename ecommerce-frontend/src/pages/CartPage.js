// src/pages/CartPage.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Assume you have a CartContext for managing the cart

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${totalPrice}</h2>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
