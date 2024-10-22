import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn btn-success" onClick={onAddToCart}>añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductItem;