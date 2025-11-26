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
// //     // Auto-fill saved credentials from localStorage
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
// //     if (!validateInputs()) return;

// //     setLoading(true);

// //     try {
// //       const session = await account.createEmailPasswordSession(email, password);
// //       const user = await account.get();
// //       console.log(session);
// //       console.log(user);

// //       // Save session and credentials
// //       localStorage.setItem("session", JSON.stringify(session));
// //       localStorage.setItem("email", email);
// //       localStorage.setItem("password", password);

// //       setErrors({});
// //       setLoading(false);
// //       navigate("/upload");
// //     } catch (error) {
// //       const newErrors = {};
// //       if (error.message.includes("Invalid credentials")) {
// //         newErrors.email = "Incorrect email or password.";
// //         newErrors.password = "Incorrect email or password.";
// //       } else {
// //         newErrors.general = "Something went wrong. Please try again.";
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

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import PasswordInput from "./PasswordInput";
// // // import { account } from "../UploadScreens/config";
// // // import "../UploadScreens/styles/Login.css";

// // // const Login = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [errors, setErrors] = useState({});
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     console.log("=== APPWRITE DEBUG ===");
// // //     console.log("1. Account object:", account);
// // //     console.log("2. Account type:", typeof account);
    
// // //     // Check if account has the expected methods
// // //     const methodsToCheck = [
// // //       'createEmailPasswordSession',
// // //       'createEmailSession', 
// // //       'createSession',
// // //       'get',
// // //       'createRecovery'
// // //     ];
    
// // //     methodsToCheck.forEach(method => {
// // //       console.log(`3. ${method}:`, typeof account[method]);
// // //     });
    
// // //     // Check the account's prototype
// // //     console.log("4. Account prototype:", Object.getPrototypeOf(account));
    
// // //     // Auto-fill saved credentials
// // //     const savedEmail = localStorage.getItem("email");
// // //     const savedPassword = localStorage.getItem("password");
// // //     if (savedEmail && savedPassword) {
// // //       setEmail(savedEmail);
// // //       setPassword(savedPassword);
// // //     }
// // //   }, []);

// // //   const validateInputs = () => {
// // //     const validationErrors = {};
// // //     if (!email) {
// // //       validationErrors.email = "Please enter an email address.";
// // //     }
// // //     if (!email.includes("@")) {
// // //       validationErrors.email = "What you entered is not an email address. It must contain @";
// // //     }
// // //     if (password.length < 8) {
// // //       validationErrors.password = "Password must be at least 8 characters long.";
// // //     }
// // //     if (!password) {
// // //       validationErrors.password = "Please enter a Password";
// // //     }
// // //     setErrors(validationErrors);
// // //     return Object.keys(validationErrors).length === 0;
// // //   };

// // //   const handleLogin = async () => {
// // //     console.log("=== LOGIN ATTEMPT ===");
// // //     console.log("Email:", email);
// // //     console.log("Password length:", password.length);
    
// // //     if (!validateInputs()) {
// // //       console.log("Validation failed");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     console.log("Starting login process...");

// // //     try {
// // //       console.log("Calling Appwrite...");
      
// // //       // Try the most common method first
// // //       const session = account.createEmailPasswordSession(email, password);
// // //       console.log("Session created:", session);
      
// // //       const user = await account.get();
// // //       console.log("User data:", user);

// // //       // Save session and credentials
// // //       localStorage.setItem("session", JSON.stringify(session));
// // //       localStorage.setItem("email", email);
// // //       localStorage.setItem("password", password);

// // //       setErrors({});
// // //       setLoading(false);
// // //       console.log("Login successful, navigating to upload...");
// // //       navigate("/upload");
      
// // //     } catch (error) {
// // //       console.error("LOGIN ERROR DETAILS:", error);
// // //       console.error("Error message:", error.message);
// // //       console.error("Error code:", error.code);
// // //       console.error("Error type:", error.type);
      
// // //       const newErrors = {};
// // //       if (error.message.includes("Invalid credentials") || error.code === 401) {
// // //         newErrors.email = "Incorrect email or password.";
// // //         newErrors.password = "Incorrect email or password.";
// // //       } else if (error.message.includes("User") || error.code === 404) {
// // //         newErrors.email = "No account found with this email.";
// // //       } else if (error.message.includes("rate limit") || error.code === 429) {
// // //         newErrors.general = "Too many attempts. Please try again later.";
// // //       } else {
// // //         newErrors.general = error.message || "Something went wrong. Please try again.";
// // //       }
// // //       setErrors(newErrors);
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleForgotPassword = async () => {
// // //     if (!email) {
// // //       setErrors({ email: "Please enter your email to reset your password." });
// // //       return;
// // //     }

// // //     try {
// // //       await account.createRecovery(email, `${window.location.origin}/reset-password`);
// // //       setErrors({ general: "Password reset instructions sent to your email." });
// // //     } catch (error) {
// // //       setErrors({ email: error.message || "Failed to send password reset email." });
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <h1 className="login-header">Log In</h1>

// // //       {/* Email Input */}
// // //       <input
// // //         className={`login-input ${errors.email ? "input-error" : ""}`}
// // //         type="email"
// // //         placeholder="Email"
// // //         value={email}
// // //         onChange={(e) => {
// // //           setEmail(e.target.value);
// // //           setErrors((prev) => ({ ...prev, email: null }));
// // //         }}
// // //       />
// // //       {errors.email && <div className="error-text">{errors.email}</div>}

// // //       <PasswordInput
// // //         password={password}
// // //         placeholder="Password"
// // //         setPassword={(text) => {
// // //           setPassword(text);
// // //           setErrors((prev) => ({ ...prev, password: null }));
// // //         }}
// // //         error={errors.password}
// // //       />
// // //       {errors.password && <div className="error-text">{errors.password}</div>}

// // //       {/* General Errors */}
// // //       {errors.general && <div className="error-text">{errors.general}</div>}

// // //       {/* Login Button with Loading Spinner */}
// // //       {loading ? (
// // //         <div className="loading-container">
// // //           <div className="loading-spinner"></div>
// // //           <span>Logging in...</span>
// // //         </div>
// // //       ) : (
// // //         <button className="login-button" onClick={handleLogin}>
// // //           Log In
// // //         </button>
// // //       )}

// // //       {/* Forgot Password */}
// // //       <button className="link-button" onClick={handleForgotPassword}>
// // //         Forgot Password?
// // //       </button>

// // //       {/* Sign Up Link */}
// // //       <button className="link-button" onClick={() => navigate("/signup")}>
// // //         Don't have an account? Sign Up
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PasswordInput from "./PasswordInput";
// import { account } from "../UploadScreens/config";
// import "../UploadScreens/styles/Login.css";
// import { storage } from "./utils/storage";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Check if already logged in
//   useEffect(() => {
//     const checkExistingAuth = async () => {
//       try {
//         await account.get(); // Check if session exists
//         // If we get here, user is authenticated
//         navigate("/upload");
//       } catch (error) {
//         // Not authenticated, stay on login page
//         console.log("No existing session");
        
//         // Load saved email if exists
//         const savedEmail = await storage.getItem("email");
//         if (savedEmail) setEmail(savedEmail);
//       }
//     };
//     checkExistingAuth();
//   }, [navigate]);

//   const validateInputs = () => {
//     const validationErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//       validationErrors.email = "Please enter an email address.";
//     } else if (!emailRegex.test(email)) {
//       validationErrors.email = "Invalid email format.";
//     }

//     if (!password) {
//       validationErrors.password = "Please enter a password.";
//     } else if (password.length < 8) {
//       validationErrors.password = "Password must be at least 8 characters long.";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleLogin = async () => {
//     if (!validateInputs()) return;
//     setLoading(true);

//     try {
//       // Simple login with base account only
//       const session = await account.createEmailPasswordSession(email, password);
      
//       // Store basic auth info
//       await storage.setItem('email', email);
//       await storage.setItem('authenticated', 'true');
      
//       setErrors({});
//       setLoading(false);
//       navigate("/upload");
//     } catch (error) {
//       console.error('Login error:', error);
//       const newErrors = {};
//       if (error.code === 401) {
//         newErrors.general = "Incorrect email or password. Please try again.";
//       } else if (error.message.includes('Failed to fetch') || error.code === 0) {
//         newErrors.general = "Network error. Please check your internet connection and try again.";
//       } else if (error.code === 429) {
//         newErrors.general = "Too many login attempts. Please wait a few minutes and try again.";
//       } else {
//         newErrors.general = "Something went wrong. Please try again.";
//       }
//       setErrors(newErrors);
//       setLoading(false);
//     }
//   };

//   // const handleForgotPassword = async () => {
//   //   if (!email) {
//   //     setErrors({ general: "Please enter your email address to reset your password." });
//   //     return;
//   //   }

//   //   try {
//   //     await account.createRecovery(email, `${window.location.origin}/reset-password`);
//   //     setErrors({ general: "Password reset instructions have been sent to your email." });
//   //   } catch (error) {
//   //     console.error('Password reset error:', error);
//   //     if (error.code === 429) {
//   //       setErrors({ general: "Too many reset attempts. Please wait before trying again." });
//   //     } else {
//   //       setErrors({ general: "Failed to send password reset email. Please check your email address and try again." });
//   //     }
//   //   }
//   // };
//   const handleForgotPassword = async () => {
//   if (!email) {
//     setErrors({ general: "Please enter your email address." });
//     return;
//   }

//   try {
//     // This automatically works in both environments
//     const resetUrl = `${window.location.origin}/reset-password`;
    
//     await account.createRecovery(email, resetUrl);
//     setErrors({ general: "Password reset instructions have been sent to your email." });
//   } catch (error) {
//     console.error('Password reset error:', error);
//     if (error.code === 429) {
//       setErrors({ general: "Too many reset attempts. Please wait before trying again." });
//     } else {
//       setErrors({ general: "Failed to send password reset email. Please check your email address and try again." });
//     }
//   }
// };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleLogin();
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
//           setErrors((prev) => ({ ...prev, email: null, general: null }));
//         }}
//         onKeyPress={handleKeyPress}
//       />
//       {errors.email && (
//         <div className="error-text-bold error-text-center">
//           {errors.email}
//         </div>
//       )}

//       {/* Password Input */}
//       <PasswordInput
//         password={password}
//         placeholder="Password"
//         setPassword={(text) => {
//           setPassword(text);
//           setErrors((prev) => ({ ...prev, password: null, general: null }));
//         }}
//         error={errors.password}
//         onKeyPress={handleKeyPress}
//       />
//       {errors.password && (
//         <div className="error-text-bold error-text-center">
//           {errors.password}
//         </div>
//       )}

//       {/* General Errors - Bold and Centered */}
//       {errors.general && (
//         <div className="error-text-bold error-text-center general-error">
//           {errors.general}
//         </div>
//       )}

//       {/* Login Button */}
//       {loading ? (
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//           <span>Logging in...</span>
//         </div>
//       ) : (
//         <button 
//           className="login-button" 
//           onClick={handleLogin}
//           disabled={loading}
//         >
//           Log In
//         </button>
//       )}

//       {/* Forgot Password */}
//       <button 
//         className="link-button" 
//         onClick={handleForgotPassword}
//         disabled={loading}
//       >
//         Forgot Password?
//       </button>

//       {/* Sign Up Link */}
//       <button 
//         className="link-button" 
//         onClick={() => navigate("/signup")}
//         disabled={loading}
//       >
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
// // import { storage } from "./utils/storage";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   // Auto-fill saved email (optional) and check for existing session
// //   useEffect(() => {
// //   const loadSession = async () => {
// //     const savedEmail = await storage.getItem("email");
// //     if (savedEmail) setEmail(savedEmail);
// //     // Do NOT navigate automatically
// //   };
// //   loadSession();
// // }, []);


// //   const validateInputs = () => {
// //     const validationErrors = {};
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// //     if (!email) validationErrors.email = "Please enter an email address.";
// //     else if (!emailRegex.test(email)) validationErrors.email = "Invalid email format.";

// //     if (!password) validationErrors.password = "Please enter a password.";
// //     else if (password.length < 8) validationErrors.password = "Password must be at least 8 characters long.";

// //     setErrors(validationErrors);
// //     return Object.keys(validationErrors).length === 0;
// //   };

// //  const handleLogin = async () => {
// //   if (!validateInputs()) return;
// //   setLoading(true);

// //   try {
// //     let sessionExists = false;

// //     try {
// //       // Try to get the current session
// //       const currentUser = await account.get();
// //       sessionExists = true;

// //       // Store existing session in IndexedDB
// //       await storage.setItem('session', currentUser);
// //       await storage.setItem('email', email);

// //       setErrors({});
// //       setLoading(false);
// //       navigate("/upload");
// //     } catch (err) {
// //       // No session exists → safe to create a new one
// //       if (err.code === 401 || err.message.includes('no active session')) {
// //         // Create a new session
// //         const session = await account.createEmailPasswordSession(email, password);
// //         await storage.setItem('session', session);
// //         await storage.setItem('email', email);

// //         setErrors({});
// //         setLoading(false);
// //         navigate("/upload");
// //       } else {
// //         // Other errors
// //         throw err;
// //       }
// //     }
// //   } catch (error) {
// //     console.error('Login error:', error);
// //     const newErrors = {};
// //     if (error.code === 401) {
// //       newErrors.email = "Incorrect email or password.";
// //       newErrors.password = "Incorrect email or password.";
// //     } else {
// //       newErrors.general = "Something went wrong. Please try again.";
// //     }
// //     setErrors(newErrors);
// //     setLoading(false);
// //   }
// // };

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

// //       {/* Password Input */}
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

// //       {/* Login Button */}
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

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import PasswordInput from "./PasswordInput";
// // import { account, account1, account2, account3 } from "../UploadScreens/config"; // Import all account instances
// // import "../UploadScreens/styles/Login.css";
// // import { storage } from "./utils/storage";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const loadSession = async () => {
// //       const savedEmail = await storage.getItem("email");
// //       if (savedEmail) setEmail(savedEmail);
// //     };
// //     loadSession();
// //   }, []);

// //   const validateInputs = () => {
// //     const validationErrors = {};
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// //     if (!email) validationErrors.email = "Please enter an email address.";
// //     else if (!emailRegex.test(email)) validationErrors.email = "Invalid email format.";

// //     if (!password) validationErrors.password = "Please enter a password.";
// //     else if (password.length < 8) validationErrors.password = "Password must be at least 8 characters long.";

// //     setErrors(validationErrors);
// //     return Object.keys(validationErrors).length === 0;
// //   };

// //   // Function to authenticate across all clients
// //   const authenticateAllClients = async (email, password) => {
// //     const accounts = [account, account1, account2, account3];
// //     const sessions = [];

// //     try {
// //       // Create sessions for all clients
// //       for (let i = 0; i < accounts.length; i++) {
// //         try {
// //           const session = await accounts[i].createEmailPasswordSession(email, password);
// //           sessions.push(session);
// //           console.log(`Authenticated client ${i} successfully`);
// //         } catch (error) {
// //           console.error(`Failed to authenticate client ${i}:`, error);
// //           // If one fails, continue with others but log the error
// //         }
// //       }

// //       // Store sessions in storage
// //       await storage.setItem('sessions', sessions);
// //       await storage.setItem('email', email);
      
// //       return sessions.length > 0; // Return true if at least one session was created
// //     } catch (error) {
// //       console.error('Authentication failed for all clients:', error);
// //       return false;
// //     }
// //   };

// //   // Function to check existing sessions across all clients
// //   const checkExistingSessions = async () => {
// //     const accounts = [account, account1, account2, account3];
    
// //     for (let i = 0; i < accounts.length; i++) {
// //       try {
// //         const user = await accounts[i].get();
// //         console.log(`Existing session found for client ${i}`);
// //         return true;
// //       } catch (error) {
// //         // Continue to next client
// //       }
// //     }
// //     return false;
// //   };

// //   const handleLogin = async () => {
// //     if (!validateInputs()) return;
// //     setLoading(true);

// //     try {
// //       // First, check if we already have valid sessions
// //       const hasExistingSession = await checkExistingSessions();
      
// //       if (hasExistingSession) {
// //         // We already have valid sessions, proceed to upload
// //         console.log('Using existing sessions');
// //         setErrors({});
// //         setLoading(false);
// //         navigate("/upload");
// //         return;
// //       }

// //       // No valid sessions, create new ones
// //       const authSuccess = await authenticateAllClients(email, password);
      
// //       if (authSuccess) {
// //         setErrors({});
// //         setLoading(false);
// //         navigate("/upload");
// //       } else {
// //         throw new Error('Failed to authenticate with any client');
// //       }

// //     } catch (error) {
// //       console.error('Login error:', error);
// //       const newErrors = {};
      
// //       if (error.code === 401 || error.message.includes('Invalid credentials')) {
// //         newErrors.email = "Incorrect email or password.";
// //         newErrors.password = "Incorrect email or password.";
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
// //       // Use base client for password recovery
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

// //       {/* Password Input */}
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

// //       {/* Login Button */}
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
import "../UploadScreens/styles/Login.css";
import { storage } from "./utils/storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const checkExistingAuth = async () => {
      try {
        await account.get(); // Check if session exists
        // If we get here, user is authenticated
        navigate("/upload");
      } catch (error) {
        // Not authenticated, stay on login page
        console.log("No existing session");
        
        // Load saved email if exists
        const savedEmail = await storage.getItem("email");
        if (savedEmail) setEmail(savedEmail);
      }
    };
    checkExistingAuth();
  }, [navigate]);

  const validateInputs = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      validationErrors.email = "Please enter an email address.";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (!password) {
      validationErrors.password = "Please enter a password.";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;
    setLoading(true);

    try {
      // Simple login with base account only
      const session = await account.createEmailPasswordSession(email, password);
      
      // Store basic auth info
      await storage.setItem('email', email);
      await storage.setItem('authenticated', 'true');
      
      setErrors({});
      setLoading(false);
      navigate("/upload");
    } catch (error) {
      console.error('Login error:', error);
      const newErrors = {};
      
      // Specific error for user not found/not signed up
      if (error.code === 401 || error.message?.includes('user') || error.message?.includes('not found') || error.message?.includes('invalid credentials')) {
        newErrors.general = "No account found with this email. Please sign up first.";
      } else if (error.message?.includes('Failed to fetch') || error.code === 0) {
        newErrors.general = "Network error. Please check your internet connection and try again.";
      } else if (error.code === 429) {
        newErrors.general = "Too many login attempts. Please wait a few minutes and try again.";
      } else {
        newErrors.general = "Something went wrong. Please try again.";
      }
      setErrors(newErrors);
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setErrors({ general: "Please enter your email address." });
      return;
    }

    try {
      // This automatically works in both environments
      const resetUrl = `${window.location.origin}/reset-password`;
      
      await account.createRecovery(email, resetUrl);
      setErrors({ general: "Password reset instructions have been sent to your email." });
    } catch (error) {
      console.error('Password reset error:', error);
      if (error.code === 429) {
        setErrors({ general: "Too many reset attempts. Please wait before trying again." });
      } else {
        setErrors({ general: "Failed to send password reset email. Please check your email address and try again." });
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
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
          setErrors((prev) => ({ ...prev, email: null, general: null }));
        }}
        onKeyPress={handleKeyPress}
      />
      {errors.email && (
        <div className="error-text-bold error-text-center">
          {errors.email}
        </div>
      )}

      {/* Password Input */}
      <PasswordInput
        password={password}
        placeholder="Password"
        setPassword={(text) => {
          setPassword(text);
          setErrors((prev) => ({ ...prev, password: null, general: null }));
        }}
        error={errors.password}
        onKeyPress={handleKeyPress}
      />
      {errors.password && (
        <div className="error-text-bold error-text-center">
          {errors.password}
        </div>
      )}

      {/* General Errors - Bold and Centered */}
      {errors.general && (
        <div className="error-text-bold error-text-center general-error">
          {errors.general}
        </div>
      )}

      {/* Login Button */}
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <span>Logging in...</span>
        </div>
      ) : (
        <button 
          className="login-button" 
          onClick={handleLogin}
          disabled={loading}
        >
          Log In
        </button>
      )}

      {/* Forgot Password */}
      <button 
        className="link-button" 
        onClick={handleForgotPassword}
        disabled={loading}
      >
        Forgot Password?
      </button>

      {/* Sign Up Link */}
      <button 
        className="link-button" 
        onClick={() => navigate("/signup")}
        disabled={loading}
      >
        Don't have an account? Sign Up
      </button>
    </div>
  );
};

export default Login;