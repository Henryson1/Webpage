import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        We are a dedicated team committed to providing the best services to our clients.
        Our mission is to deliver quality and excellence in every project we undertake.
      </p>
      <p>
        With years of experience in the industry, we have the expertise to help you achieve your goals.
        Our team is passionate about what they do, and we strive to exceed expectations.
      </p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
};

export default About;