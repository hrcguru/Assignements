import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Home</h1>
      <div className="home-content">
        <div className="home-text">
          <p>
            Welcome to our amazing React Single Page Application! This is the home page 
            where you can discover all the fantastic features we have to offer.
          </p>
          <p>
            Our application is built with modern React practices and provides a 
            seamless user experience with dynamic content loading and beautiful animations.
          </p>
          <p style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
            <strong>Features:</strong> Fast Navigation • Responsive Design • Modern UI • Easy to Use
          </p>
        </div>
        <div className="home-image">
          React SPA Demo
        </div>
      </div>
    </div>
  );
};

export default Home;