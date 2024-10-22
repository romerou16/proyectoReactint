import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white text-center p-3">
      <h1>Video Game Store</h1>
      <nav>
        <Link className="btn btn-light mx-2" to="/">Home</Link>
        <Link className="btn btn-light mx-2" to="/cart">Cart</Link>
        <Link className="btn btn-light mx-2" to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;