import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Shop.css';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios.get('https://mocki.io/v1/1ccbf1ed-ea46-4785-851d-8deffc480abf') // Replace with your Mock API endpoint
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) &&
        (selectedCategory === 'All' || product.category === selectedCategory)
      )
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      products.filter(product =>
        (category === 'All' || product.category === category)
      )
    );
  };

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="search-bar"
      />
      <Tabs>
        <TabList>
          {categories.map((category, index) => (
            <Tab key={index} onClick={() => handleCategoryChange(category)}>
              {category}
            </Tab>
          ))}
        </TabList>
        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="product-list">
              {filteredProducts
                .filter(product => category === 'All' || product.category === category)
                .map(product => (
                  <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Shop;
