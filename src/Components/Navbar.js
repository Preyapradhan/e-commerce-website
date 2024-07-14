import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMeta, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ cartItemCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <NavLink to='/' style={{ color: 'white', textDecoration: 'none' }}>Vaalam</NavLink>
      </div>
      <div className="nav-links">
        <form className="search-form">
          <input type="text" placeholder="Search products..." />
          <button type="submit">Search</button>
        </form>
        <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
        <NavLink to="/Shop" onClick={() => setMenuOpen(!menuOpen)}>Shop</NavLink>
        <NavLink to="/Contact" onClick={() => setMenuOpen(!menuOpen)}>Contact</NavLink>
        <NavLink to="/login" onClick={() => setMenuOpen(!menuOpen)}>Login</NavLink>
        <NavLink to="/AddToCart" className='navbar-link cart-trolley--link' onClick={() => setMenuOpen(!menuOpen)}>
          <FiShoppingCart className='cart-trolley' />
          <span className='cart-total--items'>{cartItemCount}</span>
        </NavLink>
        <span></span>
        <div className="social-links">
          <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink>
          <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </NavLink>
          <NavLink to="https://meta.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMeta} />
          </NavLink>
        </div>
        {localStorage.getItem('token') && (
          <NavLink onClick={handleLogout} className="logout-button">Logout</NavLink>
        )}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
