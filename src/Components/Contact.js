/* eslint-disable jsx-a11y/iframe-has-title */
// Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to send formData to backend or handle it in some way
    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        navigate('/ThankYou');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h2 className='contactus'>Contact Us</h2>
      <div className='mapping'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117426.456776802!2d72.4341498469711!
      3d23.112583872615023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e825297517f8d%3A0x6050cbc15
      d89dd3d!2sChandkheda%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717150038813!5m2!1sen!2sin" 
      width="100%"
      height="350" 
      style={{border:0}} 
      allowFullscreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe></div>

      <form className="contact-form" onSubmit={handleSubmit}>
      <p>Please feel free to reach out to us for any queries or assistance.</p>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
