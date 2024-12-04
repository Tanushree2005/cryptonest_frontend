import React from 'react';
import './Card.css';

const Cards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h3>Convenience</h3>
        <p>Access all your passwords with a single master password, and auto-fill credentials on websites and apps, saving time and hassle.</p>
      </div>
      
      <div className="card">
        <h3>Safe Storage</h3>
        <p>Store your passwords, secure notes, and personal information in an encrypted vault, ensuring only you can access your sensitive data.</p>
      </div>
    </div>
  );
}

export default Cards;
