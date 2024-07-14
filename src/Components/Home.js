import React from 'react';
import './Home.css';
import NavBar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMeta, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <NavBar />
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our E-Commerce Store!</h1>
          <p>Discover the best products at unbeatable prices.</p>
          <a href="/shop" className="cta-button">Shop Now</a>
        </div>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg" alt="Product 1" />
            <h3>Birmingham Museums</h3>
            <p>$29.99</p>
            <a href="birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg" className="view-product">View Product</a>
          </div>
          <div className="product-item">
            <img src="birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$49.99</p>
            <a href="birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg" className="view-product">View Product</a>
          </div>
          <div className="product-item">
            <img src="boston-public-library-YoK5pBcSY8s-unsplash.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$19.99</p>
            <a href="boston-public-library-YoK5pBcSY8s-unsplash.jpg" className="view-product">View Product</a>
          </div>
          <div className="product-item">
            <img src="boston-public-library-YoK5pBcSY8s-unsplash.jpg" alt="Product 4" />
            <h3>Product 4</h3>
            <p>$29.99</p>
            <a href="boston-public-library-YoK5pBcSY8s-unsplash.jpg" className="view-product">View Product</a>
          </div>
          
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/Shop">Shop</a>
            <a href="/Contact">Contact</a>
          </div>
          <div className="footer-contact">
            <p>Email: support@ecommerce.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 E-Commerce St, Shopsville, USA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 E-Commerce Store. All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /></Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /></Link>
          <Link to="https://meta.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMeta} /></Link>
        </div>
      </footer>
    </div>
  );
};


export default Home;
