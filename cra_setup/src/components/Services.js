import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>
            We create responsive and high-performance websites tailored to your needs.
          </p>
        </div>
        <div className="service-item">
          <h2>Mobile App Development</h2>
          <p>
            Our team develops user-friendly mobile applications for both iOS and Android platforms.
          </p>
        </div>
        <div className="service-item">
          <h2>Digital Marketing</h2>
          <p>
            We provide comprehensive digital marketing strategies to help you reach your target audience.
          </p>
        </div>
        <div className="service-item">
          <h2>Consulting Services</h2>
          <p>
            Our experts offer consulting services to help you optimize your business processes.
          </p>
        </div>
      </div>
      <button className="contact-button">Contact Us for More Info</button>
    </div>
  );
};

export default Services;