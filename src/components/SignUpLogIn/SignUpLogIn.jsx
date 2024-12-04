import React, { useState } from 'react';
import './SignUpLogIn.css';

const SignUpLogIn = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Track whether to show SignUp or Login form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  // Switch between SignUp and Login forms
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(''); // Reset error on form switch
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for signup
    if (isSignUp && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // You can add logic to handle API calls for signup/login here
    console.log('Form Submitted:', formData);
    setError('');
  };

  return (
    <div className="auth-container">
      <div className="auth-forms">
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Sign Up Form */}
        {isSignUp ? (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Sign Up</button>
          </form>
        ) : (
          // Login Form
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Login</button>
          </form>
        )}

        <p className="toggle-text" onClick={toggleForm}>
          {isSignUp
            ? 'Already have an account? Login'
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default SignUpLogIn;
