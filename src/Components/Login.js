// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setToken }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password, confirmPassword, name } = formData;
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (isRegister && !confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (isRegister && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (isRegister && !name) newErrors.name = 'Name is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    if (isRegister) {
      // Handle registration
      axios.post('http://localhost:5000/api/register', formData)
        .then(response => {
          setMessage('Registration successful');
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
          });
        })
        .catch(error => {
          setMessage('Registration failed: ' + error.response.data);
          console.error('Error registering:', error);
        });
    } else {
      // Handle login
      axios.post('http://localhost:5000/api/login', { email: formData.email, password: formData.password })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          setToken(token);
          setMessage('Login successful');
        })
        .catch(error => {
          setMessage('Login failed: ' + error.response.data);
          console.error('Error logging in:', error);
        });
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {isRegister && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
          )}
          <button type="submit" className="btn">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <p onClick={() => setIsRegister(!isRegister)} className="toggle-form">
          {isRegister
            ? 'Already have an account? Login here'
            : "Don't have an account? Register here"}
        </p>
      </div>
    </div>
  );
};

export default Login;
