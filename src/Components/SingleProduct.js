import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({ product, addToCart }) => {

  return (
    <div className="single-product">
      <div className="product-images">
        {product.image.map((image, index) => (
          <ReactImageMagnify
            key={index}
            {...{
              smallImage: {
                alt: product.title,
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 1800,
              },
              enlargedImagePosition: 'over',
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              hintTextMouse: 'Hover to Zoom',
            }}
          />
        ))}
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div className="rating">
          <span>Rating: {product.rating}/5</span>
          <span>Reviews: {product.reviews}</span>
        </div>
        <Link to="/" className="back-link">Back to Shop</Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};



export default SingleProduct;
