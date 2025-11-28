import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>
        Have questions or want to get in touch? We'd love to hear from you. 
        Send us a message and we'll respond as soon as possible.
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Other Ways to Reach Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Web Street, Digital City, DC 10101</p>
      </div>
    </div>
  );
};

export default Contact;