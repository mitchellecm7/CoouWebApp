import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import { account, ID } from '../UploadScreens/config';
import '../UploadScreens/styles/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lecturerCode, setLecturerCode] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [lecturerCodeError, setLecturerCodeError] = useState('');

  const handleSignUp = async () => {
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setLecturerCodeError('');

    // Validate inputs
    if (!email) {
      setEmailError('Please enter an email address');
      return;
    }
    if (!email.includes('@')) {
      setEmailError('Email Address must contain @');
      return;
    }
    if (lecturerCode !== 'COMPUTERSCIENCE2025') {
      setLecturerCodeError('Invalid Lecturer Code');
      return;
    }

    // Validate password
    const passwordErrors = getPasswordErrors(password);
    if (passwordErrors.length > 0) {
      setPasswordError(`Password must: ${passwordErrors.join(', ')}.`);
      return;
    }
  
    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
  
    try {
      // Attempt sign up with Appwrite
      const response = await account.create(ID.unique(), email, password);
  
      // Success
      alert('Sign Up Successful! Please check your email to confirm your account.');
      navigate('/upload');
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Signup Failed: ' + error.message);
    }
  };
  
  const getPasswordErrors = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('be at least 8 characters long');
    }
    if (!containsSpecialCharacter(password)) {
      errors.push('contain a special character');
    }
    if (!containsUppercase(password)) {
      errors.push('contain an uppercase letter');
    }
    if (!containsLowercase(password)) {
      errors.push('contain a lowercase letter');
    }
    if (!/\d/.test(password)) {
      errors.push('contain a number');
    }
    return errors;
  };
  
  // Helper functions
  const containsSpecialCharacter = (password) => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterRegex.test(password);
  };
  
  const containsUppercase = (password) => {
    const uppercaseRegex = /[A-Z]/;
    return uppercaseRegex.test(password);
  };
  
  const containsLowercase = (password) => {
    const lowercaseRegex = /[a-z]/;
    return lowercaseRegex.test(password);
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
      {emailError && <div className="error-text">{emailError}</div>}

      <input
        className="signup-input"
        type="text"
        placeholder="Lecturer Code"
        value={lecturerCode}
        onChange={(e) => setLecturerCode(e.target.value)}
        autoCapitalize="none"
      />
      {lecturerCodeError && <div className="error-text">{lecturerCodeError}</div>}

      <PasswordInput 
        password={password} 
        setPassword={setPassword} 
        placeholder="Password" 
      />
      {passwordError && <div className="error-text">{passwordError}</div>}

      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        placeholder="Confirm Password"
      />
      {confirmPasswordError && <div className="error-text">{confirmPasswordError}</div>}

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