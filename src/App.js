import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import AddToCart from './Components/AddToCart';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map((item) => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (productId) => {
    setCart(cart.map((item) => 
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const ProtectedRoute = ({ element: Component, ...rest }) => {
    return token ? <Component {...rest} /> : <Navigate to="/" />;
  };

  return (
    
    <Router>
      <Navbar cartItemCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<ProtectedRoute element={Shop} addToCart={addToCart} />} />
        <Route path="/Product" element={<ProtectedRoute element={Product} addToCart={addToCart} />} />
        <Route path="/Contact" element={<ProtectedRoute element={Contact} />} />
        <Route path="/AddToCart" element={<ProtectedRoute element={AddToCart} 
          cartItems={cart} 
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
