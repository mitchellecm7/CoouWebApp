import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import { account, ID } from '../UploadScreens/config';
import '../UploadScreens/styles/SignUp.css';
import { storage } from './utils/storage';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lecturerCode, setLecturerCode] = useState('');

  const [errors, setErrors] = useState({});

  // Get lecturer code from environment variables
  const LECTURER_CODE = process.env.REACT_APP_LECTURER_CODE;

  const handleSignUp = async () => {
    setErrors({});

    // Validation
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) validationErrors.email = 'Please enter an email address';
    else if (!emailRegex.test(email)) validationErrors.email = 'Invalid email format';

    // Use environment variable for lecturer code validation
    if (lecturerCode !== LECTURER_CODE) {
      validationErrors.lecturerCode = 'Invalid Lecturer Code';
    }

    const passwordErrors = getPasswordErrors(password);
    if (!password) validationErrors.password = 'Please enter a password';
    else if (passwordErrors.length > 0)
      validationErrors.password = `Password must: ${passwordErrors.join(', ')}.`;

    if (!confirmPassword) validationErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Sign up user
      const user = await account.create(ID.unique(), email, password);

      // Optional: Auto-login safely
      try {
        // Delete any existing sessions to avoid conflict
        await account.deleteSessions();
        const session = await account.createEmailPasswordSession(email, password);
        
        // Store session and email using idb-keyval
        await storage.setItem('session', JSON.stringify(session));
        await storage.setItem('email', email);
        
        alert('Sign Up Successful! You are now logged in.');
        navigate('/upload');
      } catch (sessionError) {
        // If session creation fails (e.g., already active), just redirect to login
        console.warn('Auto-login failed:', sessionError.message);
        alert('Sign Up Successful! Please log in to continue.');
        navigate('/login');
      }
    } catch (error) {
      console.error('SignUp Error:', error);
      setErrors({ general: error.message || 'Sign Up failed. Try again.' });
    }
  };

  const getPasswordErrors = (password) => {
    const errors = [];
    if (password.length < 8) errors.push('be at least 8 characters long');
    if (!/[A-Z]/.test(password)) errors.push('contain an uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('contain a lowercase letter');
    if (!/\d/.test(password)) errors.push('contain a number');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push('contain a special character');
    return errors;
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>

      <input
        className="signup-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="error-text">{errors.email}</div>}

      <input
        className="signup-input"
        type="text"
        placeholder="Lecturer Code"
        value={lecturerCode}
        onChange={(e) => setLecturerCode(e.target.value)}
        autoCapitalize="none"
      />
      {errors.lecturerCode && <div className="error-text">{errors.lecturerCode}</div>}

      <PasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Password"
      />
      {errors.password && <div className="error-text">{errors.password}</div>}

      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}

      {errors.general && <div className="error-text">{errors.general}</div>}

      <button className="signup-button" onClick={handleSignUp}>
        Sign Up
      </button>

      <button className="link-button" onClick={() => navigate('/login')}>
        Already have an account? Log in
      </button>
    </div>
  );
};

export default SignUp;