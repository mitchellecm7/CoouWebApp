import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../screens/UploadScreens/styles/Home1.css';

const Home1 = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="header-container">
        <img 
        // src="/assets/Images/logo.png"
         alt="Logo" className="logo" />
        <h1 className="header-text">
          CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY {'\n'}Study Apps
        </h1>
        <div className="icon-container">
          <button onClick={() => navigate('/login')} className="icon-button">
            <span className="icon">👤</span>
          </button>
        </div>
      </div>

      <div className="academia-section">
        <p className="academia-text">
          Choose your Human Knowledge or Academia i.e indicate whether your faculty
          belongs to either Arts or Sciences
        </p>
      </div>
      
      <div className="content-view">
        <button className="department-button" onClick={() => navigate('/arts')}>
          <span className="department-text">ARTS</span>
        </button>

        <button className="department-button" onClick={() => navigate('/sciences')}>
          <span className="department-text">SCIENCES</span>
        </button>
      </div>
      
      <div className="background-container">
        <div className="background-image"></div>
      </div>
    </div>
  );
};

export default Home1;