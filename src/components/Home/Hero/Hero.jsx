import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    setIsVisible(true); 
  }, []);


  const handleButtonClick = () => {
    setShowForm(true); 
  };

  return (
    <section className="hero-section">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1>Secure Your Online World</h1>
        <p>Your passwords are your first line of defense. Protect them with our secure and easy-to-use password manager.</p>
        <button className="cta-button" onClick={handleButtonClick}>Get Started</button>
      </div>

      {}
      {showForm && (
        <div className="form-container">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Hero;
