import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../UploadScreens/styles/Arts.css';
import logo from './assets/Images/logo.png';
import facaultiesData from './assets/facultiesData';

const Arts = () => {
    const navigate = useNavigate();

    return (
      <div className="safe-area">
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="header-text">
            CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY<br />Study App
          </h1>
        </div>
        
        <div className="scroll-view">
          {facaultiesData.filter(item => item.category === 'Arts').map((item) => (
            <div key={item.id} className="content-view">
              <button 
                onClick={() => {
                  switch (item.id) {
                    case 2:
                      navigate('/departments1b');
                      break;
                    case 7:
                      navigate('/departments1g');
                      break;
                    default:
                      break;
                  }
                }} 
                className="department-button"
              >
                <span className="department-text">{item.name}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="background-container">
          <div 
            className="background-image" 
            style={{ backgroundImage: `url(${logo})` }}
          >
            {/* Your content goes here */}
          </div>
        </div>
      </div>
    );
}

export default Arts;