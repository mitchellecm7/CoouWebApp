import React, { useState } from 'react';
import '../UploadScreens/styles/PasswordInput.css';

const PasswordInput = ({ password, setPassword, placeholder, error }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="password-container">
      <input
        className={`password-input ${error ? "input-error" : ""}`}
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        className="visibility-toggle"
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        {isPasswordVisible ? '🙈' : '👁️'}
      </button>
    </div>
  );
};

export default PasswordInput;
