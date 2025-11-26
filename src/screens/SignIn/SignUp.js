// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PasswordInput from './PasswordInput';
// import { account, account1, account2, account3, ID } from '../UploadScreens/config';
// import '../UploadScreens/styles/SignUp.css';
// import { storage } from './utils/storage';

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [lecturerCode, setLecturerCode] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Get lecturer code from environment variables
//   const LECTURER_CODE = process.env.REACT_APP_LECTURER_CODE;

//   // Function to create user across all projects
//   const createUserInAllProjects = async (email, password) => {
//     const accounts = [account, account1, account2, account3];
//     const createdUsers = [];

//     for (let i = 0; i < accounts.length; i++) {
//       try {
//         const user = await accounts[i].create(ID.unique(), email, password);
//         createdUsers.push(user);
//         console.log(`User created in project ${i} successfully`);
//       } catch (error) {
//         console.error(`Failed to create user in project ${i}:`, error);
//         // If user already exists in some projects, that's okay
//         if (error.code !== 409) { // 409 = user already exists
//           throw error;
//         }
//       }
//     }

//     return createdUsers.length > 0;
//   };

//   // Function to create sessions across all projects
//   const createSessionsInAllProjects = async (email, password) => {
//     const accounts = [account, account1, account2, account3];
//     const sessions = [];

//     for (let i = 0; i < accounts.length; i++) {
//       try {
//         const session = await accounts[i].createEmailPasswordSession(email, password);
//         sessions.push(session);
//         console.log(`Session created in project ${i} successfully`);
//       } catch (error) {
//         console.error(`Failed to create session in project ${i}:`, error);
//         // Continue with other projects even if one fails
//       }
//     }

//     return sessions;
//   };

//   const handleSignUp = async () => {
//     setErrors({});
//     setLoading(true);

//     // Validation
//     const validationErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) validationErrors.email = 'Please enter an email address';
//     else if (!emailRegex.test(email)) validationErrors.email = 'Invalid email format';

//     // Use environment variable for lecturer code validation
//     if (lecturerCode !== LECTURER_CODE) {
//       validationErrors.lecturerCode = 'Invalid Lecturer Code';
//     }

//     const passwordErrors = getPasswordErrors(password);
//     if (!password) validationErrors.password = 'Please enter a password';
//     else if (passwordErrors.length > 0)
//       validationErrors.password = `Password must: ${passwordErrors.join(', ')}.`;

//     if (!confirmPassword) validationErrors.confirmPassword = 'Please confirm your password';
//     else if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setLoading(false);
//       return;
//     }

//     try {
//       // Step 1: Create user in all projects
//       const userCreated = await createUserInAllProjects(email, password);
      
//       if (!userCreated) {
//         throw new Error('Failed to create user in any project');
//       }

//       // Step 2: Create sessions in all projects
//       const sessions = await createSessionsInAllProjects(email, password);
      
//       if (sessions.length === 0) {
//         throw new Error('Failed to create sessions in any project');
//       }

//       // Store sessions and email
//       await storage.setItem('sessions', sessions);
//       await storage.setItem('email', email);
      
//       alert('Sign Up Successful! You are now logged in.');
//       navigate('/upload');
      
//     } catch (error) {
//       console.error('SignUp Error:', error);
      
//       // Handle specific error cases
//       if (error.code === 409) {
//         setErrors({ general: 'User already exists. Please log in instead.' });
//       } else if (error.code === 401) {
//         setErrors({ general: 'Invalid credentials. Please try again.' });
//       } else {
//         setErrors({ general: error.message || 'Sign Up failed. Try again.' });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getPasswordErrors = (password) => {
//     const errors = [];
//     if (password.length < 8) errors.push('be at least 8 characters long');
//     if (!/[A-Z]/.test(password)) errors.push('contain an uppercase letter');
//     if (!/[a-z]/.test(password)) errors.push('contain a lowercase letter');
//     if (!/\d/.test(password)) errors.push('contain a number');
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push('contain a special character');
//     return errors;
//   };

//   return (
//     <div className="signup-container">
//       <h1 className="signup-header">Sign Up</h1>

//       <input
//         className="signup-input"
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {errors.email && <div className="error-text">{errors.email}</div>}

//       <input
//         className="signup-input"
//         type="text"
//         placeholder="Lecturer Code"
//         value={lecturerCode}
//         onChange={(e) => setLecturerCode(e.target.value)}
//         autoCapitalize="none"
//       />
//       {errors.lecturerCode && <div className="error-text">{errors.lecturerCode}</div>}

//       <PasswordInput
//         password={password}
//         setPassword={setPassword}
//         placeholder="Password"
//       />
//       {errors.password && <div className="error-text">{errors.password}</div>}

//       <PasswordInput
//         password={confirmPassword}
//         setPassword={setConfirmPassword}
//         placeholder="Confirm Password"
//       />
//       {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}

//       {errors.general && <div className="error-text">{errors.general}</div>}

//       {loading ? (
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//           <span>Creating account...</span>
//         </div>
//       ) : (
//         <button className="signup-button" onClick={handleSignUp}>
//           Sign Up
//         </button>
//       )}

//       <button className="link-button" onClick={() => navigate('/login')}>
//         Already have an account? Log in
//       </button>
//     </div>
//   );
// };

// export default SignUp;
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
  const [loading, setLoading] = useState(false);

  // Get lecturer code from environment variables
  const LECTURER_CODE = process.env.REACT_APP_LECTURER_CODE;

  const handleSignUp = async () => {
    setErrors({});
    setLoading(true);

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
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create user in only ONE project (base account)
      const user = await account.create(ID.unique(), email, password);
      console.log('User created successfully in base project');

      // Store basic auth info
      await storage.setItem('email', email);
      
      alert('Sign Up Successful! Please log in to continue.');
      navigate('/login');
      
    } catch (error) {
      console.error('SignUp Error:', error);
      
      // Handle specific error cases
      if (error.code === 409) {
        setErrors({ general: 'User already exists. Please log in instead.' });
      } else if (error.code === 401) {
        setErrors({ general: 'Invalid credentials. Please try again.' });
      } else if (error.code === 429) {
        setErrors({ general: 'Too many attempts. Please wait and try again.' });
      } else {
        setErrors({ general: error.message || 'Sign Up failed. Please try again.' });
      }
    } finally {
      setLoading(false);
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>

      <input
        className={`signup-input ${errors.email ? "input-error" : ""}`}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors((prev) => ({ ...prev, email: null, general: null }));
        }}
        onKeyPress={handleKeyPress}
      />
      {errors.email && <div className="error-text-bold error-text-center">{errors.email}</div>}

      <input
        className={`signup-input ${errors.lecturerCode ? "input-error" : ""}`}
        type="text"
        placeholder="Lecturer Code"
        value={lecturerCode}
        onChange={(e) => {
          setLecturerCode(e.target.value);
          setErrors((prev) => ({ ...prev, lecturerCode: null, general: null }));
        }}
        autoCapitalize="none"
        onKeyPress={handleKeyPress}
      />
      {errors.lecturerCode && <div className="error-text-bold error-text-center">{errors.lecturerCode}</div>}

      <PasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Password"
        onKeyPress={handleKeyPress}
      />
      {errors.password && <div className="error-text-bold error-text-center">{errors.password}</div>}

      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        placeholder="Confirm Password"
        onKeyPress={handleKeyPress}
      />
      {errors.confirmPassword && <div className="error-text-bold error-text-center">{errors.confirmPassword}</div>}

      {errors.general && <div className="error-text-bold error-text-center general-error">{errors.general}</div>}

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <span>Creating account...</span>
        </div>
      ) : (
        <button className="signup-button" onClick={handleSignUp} disabled={loading}>
          Sign Up
        </button>
      )}

      <button className="link-button" onClick={() => navigate('/login')} disabled={loading}>
        Already have an account? Log in
      </button>
    </div>
  );
};

export default SignUp;