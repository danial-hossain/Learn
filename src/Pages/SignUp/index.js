import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import
import './style.css'; // You can reuse Login styles

const SignUp = () => {
  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Sign Up</h2>
        <form className="login-form">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="login-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        {/* Link to Login */}
        <p className="login-signup-text">
          Already have an account?{' '}
          <Link to="/login" className="login-signup-link">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
