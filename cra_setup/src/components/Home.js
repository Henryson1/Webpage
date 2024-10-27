import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website!</h1>
      <p>
        We are glad to have you here. Explore our services, learn more about us, or get in touch!
      </p>
      <button className="explore-button">Explore Now</button>
    </div>
  );
};

export default Home;