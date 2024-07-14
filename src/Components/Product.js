import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>Product: {product.title}</h3>
      <p>Made By: {product.artist}</p>
      <p>Product Details: {product.description}</p>
      <p>category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/Product/${product.id}`} className="view-product">View Product</Link>
      <div className="addtocart-button">
        <button onClick={handleAddToCart} style={{ color: 'white', textDecoration: 'none', alignSelf: 'baseline' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
