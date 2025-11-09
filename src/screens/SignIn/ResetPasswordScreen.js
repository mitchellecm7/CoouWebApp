import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { account2 } from '../UploadScreens/config';
import '../UploadScreens/styles/ResetPasswordScreen.css';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');

  useEffect(() => {
    if (!userId || !secret) {
      setError('Invalid or expired link.');
    }
  }, [userId, secret]);

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!validatePassword(newPassword)) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await account2.updateRecovery(userId, secret, newPassword, newPassword);
      alert('Password reset successfully');
      navigate("/login");
    } catch (err) {
      setError(err.message || 'Failed to reset password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h1 className="reset-password-header">Reset Password</h1>
      
      {error && <div className="error-text">{error}</div>}
      
      <input
        className="reset-input"
        type="password"
        placeholder="New Password (min 8 characters)"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      
      <input
        className="reset-input"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
      />
      
      <button 
        className="reset-button"
        onClick={handleResetPassword}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Reset Password'}
      </button>
    </div>
  );
};

export default ResetPasswordScreen;
