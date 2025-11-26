// import React, { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import { account } from '../UploadScreens/config';
// import '../UploadScreens/styles/ResetPasswordScreen.css';

// const ResetPasswordScreen = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const userId = searchParams.get('userId');
//   const secret = searchParams.get('secret');

//   useEffect(() => {
//     if (!userId || !secret) {
//       setError('Invalid or expired link.');
//     }
//   }, [userId, secret]);

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   const handleResetPassword = async () => {
//     if (!newPassword || !confirmPassword) {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (!validatePassword(newPassword)) {
//       setError('Password must be at least 8 characters');
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       await account.updateRecovery(userId, secret, newPassword, newPassword);
//       alert('Password reset successfully');
//       navigate("/login");
//     } catch (err) {
//       setError(err.message || 'Failed to reset password.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="reset-password-container">
//       <h1 className="reset-password-header">Reset Password</h1>
      
//       {error && <div className="error-text">{error}</div>}
      
//       <input
//         className="reset-input"
//         type="password"
//         placeholder="New Password (min 8 characters)"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//       />
      
//       <input
//         className="reset-input"
//         type="password"
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
//       />
      
//       <button 
//         className="reset-button"
//         onClick={handleResetPassword}
//         disabled={isLoading}
//       >
//         {isLoading ? 'Processing...' : 'Reset Password'}
//       </button>
//     </div>
//   );
// };

// export default ResetPasswordScreen;
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { account } from '../UploadScreens/config';
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
      setError('Invalid or expired reset link. Please request a new password reset.');
    }
  }, [userId, secret]);

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      return 'Password must contain both uppercase and lowercase letters';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Password must contain at least one number';
    }
    return null;
  };

  const handleResetPassword = async () => {
    // Clear previous errors
    setError('');

    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!userId || !secret) {
      setError('Invalid reset link');
      return;
    }

    setIsLoading(true);

    try {
      await account.updateRecovery(userId, secret, newPassword, newPassword);
      alert('Password reset successfully! You can now login with your new password.');
      navigate("/login");
    } catch (err) {
      console.error('Password reset error:', err);
      if (err.message.includes('expired')) {
        setError('This reset link has expired. Please request a new password reset.');
      } else if (err.message.includes('invalid')) {
        setError('Invalid reset link. Please request a new password reset.');
      } else {
        setError(err.message || 'Failed to reset password. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleResetPassword();
    }
  };

  return (
    <div className="reset-password-container">
      <h1 className="reset-password-header">Reset Password</h1>
      
      {error && <div className="error-text">{error}</div>}
      
      <input
        className="reset-input"
        type="password"
        placeholder="New Password (min 8 characters with uppercase, lowercase, and number)"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      
      <input
        className="reset-input"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      
      <button 
        className="reset-button"
        onClick={handleResetPassword}
        disabled={isLoading || !userId || !secret}
      >
        {isLoading ? 'Processing...' : 'Reset Password'}
      </button>

      {(!userId || !secret) && (
        <button 
          className="back-button"
          onClick={() => navigate('/forgot-password')}
        >
          Request New Reset Link
        </button>
      )}
    </div>
  );
};

export default ResetPasswordScreen;