import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <h3>Tu carrito esta vacio</h3>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-2 my-2">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;