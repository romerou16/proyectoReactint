import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ProductItem from './productItem';

const products = [
  { id: 1, name: 'The Lengend of zelda', price: 150.000},
  { id: 2, name: ' Mario kart', price: 120.000 },
  { id: 3, name: 'fifa 25', price: 200.000 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="my-4">Available Games</h2>
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={() => addToCart(product)} />
      ))}
    </div>
  );
};
export default ProductList