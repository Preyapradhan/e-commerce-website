import React, { useEffect, useState } from 'react';
import './AddToCart.css'; // Import the CSS file for styling

const AddToCart = ({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price);
        const itemQuantity = parseInt(item.quantity, 10);
        console.log(`Item: ${item.title}, Price: ${itemPrice}, Quantity: ${itemQuantity}`); // Logging
        if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
          return total + itemPrice * itemQuantity;
        }
        return total;
      }, 0);
      return total;
    };
    setTotalPrice(calculateTotalPrice());
  }, [cartItems]); // Dependency array ensures this runs when cartItems changes

  const handleIncrement = (itemId) => {
    incrementQuantity(itemId);
  };

  const handleDecrement = (itemId) => {
    decrementQuantity(itemId);
  };

  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Cart Items</div>
      {cartItems.length === 0 && (
        <div className='cart-items-empty'>No items are added in the cart!</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className='cart-items-list'>
            <img className='cart-items-image' src={item.image} alt={item.name} />
            <div className='cart-items-details'>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <div>
                Quantity: {item.quantity}
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
            <div className='cart-item-price'>
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>
      
      <div className='cart-totals'>
        <div>Subtotal: ${totalPrice.toFixed(2)}</div>
        <div>Grand Total: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default AddToCart;
