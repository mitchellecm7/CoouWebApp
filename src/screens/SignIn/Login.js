// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PasswordInput from "./PasswordInput";
// import { account } from "../UploadScreens/config";
// import "../UploadScreens/styles/Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Auto-fill saved credentials from localStorage
//     const savedEmail = localStorage.getItem("email");
//     const savedPassword = localStorage.getItem("password");
//     if (savedEmail && savedPassword) {
//       setEmail(savedEmail);
//       setPassword(savedPassword);
//     }
//   }, []);

//   const validateInputs = () => {
//     const validationErrors = {};
//     if (!email) {
//       validationErrors.email = "Please enter an email address.";
//     }
//     if (!email.includes("@")) {
//       validationErrors.email = "What you entered is not an email address. It must contain @";
//     }
//     if (password.length < 8) {
//       validationErrors.password = "Password must be at least 8 characters long.";
//     }
//     if (!password) {
//       validationErrors.password = "Please enter a Password";
//     }
//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleLogin = async () => {
//     if (!validateInputs()) return;

//     setLoading(true);

//     try {
//       const session = await account.createEmailPasswordSession(email, password);
//       const user = await account.get();
//       console.log(session);
//       console.log(user);

//       // Save session and credentials
//       localStorage.setItem("session", JSON.stringify(session));
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);

//       setErrors({});
//       setLoading(false);
//       navigate("/upload");
//     } catch (error) {
//       const newErrors = {};
//       if (error.message.includes("Invalid credentials")) {
//         newErrors.email = "Incorrect email or password.";
//         newErrors.password = "Incorrect email or password.";
//       } else {
//         newErrors.general = "Something went wrong. Please try again.";
//       }
//       setErrors(newErrors);
//       setLoading(false);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       setErrors({ email: "Please enter your email to reset your password." });
//       return;
//     }

//     try {
//       await account.createRecovery(email, `${window.location.origin}/reset-password`);
//       setErrors({ general: "Password reset instructions sent to your email." });
//     } catch (error) {
//       setErrors({ email: error.message || "Failed to send password reset email." });
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-header">Log In</h1>

//       {/* Email Input */}
//       <input
//         className={`login-input ${errors.email ? "input-error" : ""}`}
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//           setErrors((prev) => ({ ...prev, email: null }));
//         }}
//       />
//       {errors.email && <div className="error-text">{errors.email}</div>}

//       <PasswordInput
//         password={password}
//         placeholder="Password"
//         setPassword={(text) => {
//           setPassword(text);
//           setErrors((prev) => ({ ...prev, password: null }));
//         }}
//         error={errors.password}
//       />
//       {errors.password && <div className="error-text">{errors.password}</div>}

//       {/* General Errors */}
//       {errors.general && <div className="error-text">{errors.general}</div>}

//       {/* Login Button with Loading Spinner */}
//       {loading ? (
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//           <span>Logging in...</span>
//         </div>
//       ) : (
//         <button className="login-button" onClick={handleLogin}>
//           Log In
//         </button>
//       )}

//       {/* Forgot Password */}
//       <button className="link-button" onClick={handleForgotPassword}>
//         Forgot Password?
//       </button>

//       {/* Sign Up Link */}
//       <button className="link-button" onClick={() => navigate("/signup")}>
//         Don't have an account? Sign Up
//       </button>
//     </div>
//   );
// };

// export default Login;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import PasswordInput from "./PasswordInput";
// // import { account } from "../UploadScreens/config";
// // import "../UploadScreens/styles/Login.css";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     console.log("=== APPWRITE DEBUG ===");
// //     console.log("1. Account object:", account);
// //     console.log("2. Account type:", typeof account);
    
// //     // Check if account has the expected methods
// //     const methodsToCheck = [
// //       'createEmailPasswordSession',
// //       'createEmailSession', 
// //       'createSession',
// //       'get',
// //       'createRecovery'
// //     ];
    
// //     methodsToCheck.forEach(method => {
// //       console.log(`3. ${method}:`, typeof account[method]);
// //     });
    
// //     // Check the account's prototype
// //     console.log("4. Account prototype:", Object.getPrototypeOf(account));
    
// //     // Auto-fill saved credentials
// //     const savedEmail = localStorage.getItem("email");
// //     const savedPassword = localStorage.getItem("password");
// //     if (savedEmail && savedPassword) {
// //       setEmail(savedEmail);
// //       setPassword(savedPassword);
// //     }
// //   }, []);

// //   const validateInputs = () => {
// //     const validationErrors = {};
// //     if (!email) {
// //       validationErrors.email = "Please enter an email address.";
// //     }
// //     if (!email.includes("@")) {
// //       validationErrors.email = "What you entered is not an email address. It must contain @";
// //     }
// //     if (password.length < 8) {
// //       validationErrors.password = "Password must be at least 8 characters long.";
// //     }
// //     if (!password) {
// //       validationErrors.password = "Please enter a Password";
// //     }
// //     setErrors(validationErrors);
// //     return Object.keys(validationErrors).length === 0;
// //   };

// //   const handleLogin = async () => {
// //     console.log("=== LOGIN ATTEMPT ===");
// //     console.log("Email:", email);
// //     console.log("Password length:", password.length);
    
// //     if (!validateInputs()) {
// //       console.log("Validation failed");
// //       return;
// //     }

// //     setLoading(true);
// //     console.log("Starting login process...");

// //     try {
// //       console.log("Calling Appwrite...");
      
// //       // Try the most common method first
// //       const session = account.createEmailPasswordSession(email, password);
// //       console.log("Session created:", session);
      
// //       const user = await account.get();
// //       console.log("User data:", user);

// //       // Save session and credentials
// //       localStorage.setItem("session", JSON.stringify(session));
// //       localStorage.setItem("email", email);
// //       localStorage.setItem("password", password);

// //       setErrors({});
// //       setLoading(false);
// //       console.log("Login successful, navigating to upload...");
// //       navigate("/upload");
      
// //     } catch (error) {
// //       console.error("LOGIN ERROR DETAILS:", error);
// //       console.error("Error message:", error.message);
// //       console.error("Error code:", error.code);
// //       console.error("Error type:", error.type);
      
// //       const newErrors = {};
// //       if (error.message.includes("Invalid credentials") || error.code === 401) {
// //         newErrors.email = "Incorrect email or password.";
// //         newErrors.password = "Incorrect email or password.";
// //       } else if (error.message.includes("User") || error.code === 404) {
// //         newErrors.email = "No account found with this email.";
// //       } else if (error.message.includes("rate limit") || error.code === 429) {
// //         newErrors.general = "Too many attempts. Please try again later.";
// //       } else {
// //         newErrors.general = error.message || "Something went wrong. Please try again.";
// //       }
// //       setErrors(newErrors);
// //       setLoading(false);
// //     }
// //   };

// //   const handleForgotPassword = async () => {
// //     if (!email) {
// //       setErrors({ email: "Please enter your email to reset your password." });
// //       return;
// //     }

// //     try {
// //       await account.createRecovery(email, `${window.location.origin}/reset-password`);
// //       setErrors({ general: "Password reset instructions sent to your email." });
// //     } catch (error) {
// //       setErrors({ email: error.message || "Failed to send password reset email." });
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h1 className="login-header">Log In</h1>

// //       {/* Email Input */}
// //       <input
// //         className={`login-input ${errors.email ? "input-error" : ""}`}
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => {
// //           setEmail(e.target.value);
// //           setErrors((prev) => ({ ...prev, email: null }));
// //         }}
// //       />
// //       {errors.email && <div className="error-text">{errors.email}</div>}

// //       <PasswordInput
// //         password={password}
// //         placeholder="Password"
// //         setPassword={(text) => {
// //           setPassword(text);
// //           setErrors((prev) => ({ ...prev, password: null }));
// //         }}
// //         error={errors.password}
// //       />
// //       {errors.password && <div className="error-text">{errors.password}</div>}

// //       {/* General Errors */}
// //       {errors.general && <div className="error-text">{errors.general}</div>}

// //       {/* Login Button with Loading Spinner */}
// //       {loading ? (
// //         <div className="loading-container">
// //           <div className="loading-spinner"></div>
// //           <span>Logging in...</span>
// //         </div>
// //       ) : (
// //         <button className="login-button" onClick={handleLogin}>
// //           Log In
// //         </button>
// //       )}

// //       {/* Forgot Password */}
// //       <button className="link-button" onClick={handleForgotPassword}>
// //         Forgot Password?
// //       </button>

// //       {/* Sign Up Link */}
// //       <button className="link-button" onClick={() => navigate("/signup")}>
// //         Don't have an account? Sign Up
// //       </button>
// //     </div>
// //   );
// // };

// // export default Login;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import { account } from "../UploadScreens/config";
import { storage } from "../UploadScreens/storage"; // your idb-keyval wrapper
import "../UploadScreens/styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Auto-fill saved email (optional) and check for existing session
  useEffect(() => {
    const loadSession = async () => {
      const savedEmail = await storage.getItem("email");
      const savedSession = await storage.getItem("session");
      if (savedEmail) setEmail(savedEmail);
      if (savedSession) {
        // Auto-login if session exists
        navigate("/upload");
      }
    };
    loadSession();
  }, [navigate]);

  const validateInputs = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) validationErrors.email = "Please enter an email address.";
    else if (!emailRegex.test(email)) validationErrors.email = "Invalid email format.";

    if (!password) validationErrors.password = "Please enter a password.";
    else if (password.length < 8) validationErrors.password = "Password must be at least 8 characters long.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleLogin = async () => {
  if (!validateInputs()) return;
  setLoading(true);

  try {
    // Check if a session exists
    let currentSession = null;
    try {
      currentSession = await account.get(); // returns active session if exists
    } catch (err) {
      // No session exists, ignore
    }

    if (currentSession) {
      // Session exists → store it and navigate
      await storage.setItem('session', currentSession);
      await storage.setItem('email', email);
      setErrors({});
      setLoading(false);
      navigate("/upload");
      return; // stop here, don't create a new session
    }

    // No session exists → create a new one
    const session = await account.createEmailPasswordSession(email, password);
    await storage.setItem('session', session);
    await storage.setItem('email', email);

    setErrors({});
    setLoading(false);
    navigate("/upload");
  } catch (error) {
    const newErrors = {};
    if (error.code === 401) {
      newErrors.email = "Incorrect email or password.";
      newErrors.password = "Incorrect email or password.";
    } else {
      newErrors.general = "Something went wrong. Please try again.";
    }
    setErrors(newErrors);
    setLoading(false);
  }
};


  const handleForgotPassword = async () => {
    if (!email) {
      setErrors({ email: "Please enter your email to reset your password." });
      return;
    }

    try {
      await account.createRecovery(email, `${window.location.origin}/reset-password`);
      setErrors({ general: "Password reset instructions sent to your email." });
    } catch (error) {
      setErrors({ email: error.message || "Failed to send password reset email." });
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Log In</h1>

      {/* Email Input */}
      <input
        className={`login-input ${errors.email ? "input-error" : ""}`}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors((prev) => ({ ...prev, email: null }));
        }}
      />
      {errors.email && <div className="error-text">{errors.email}</div>}

      {/* Password Input */}
      <PasswordInput
        password={password}
        placeholder="Password"
        setPassword={(text) => {
          setPassword(text);
          setErrors((prev) => ({ ...prev, password: null }));
        }}
        error={errors.password}
      />
      {errors.password && <div className="error-text">{errors.password}</div>}

      {/* General Errors */}
      {errors.general && <div className="error-text">{errors.general}</div>}

      {/* Login Button */}
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <span>Logging in...</span>
        </div>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      )}

      {/* Forgot Password */}
      <button className="link-button" onClick={handleForgotPassword}>
        Forgot Password?
      </button>

      {/* Sign Up Link */}
      <button className="link-button" onClick={() => navigate("/signup")}>
        Don't have an account? Sign Up
      </button>
    </div>
  );
};

export default Login;
