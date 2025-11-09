import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../UploadScreens/styles/Sciences.css';
import logo from './assets/Images/logo.png';
import facaultiesData from './assets/facultiesData';

const Sciences = () => {
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
          {facaultiesData.filter(item => item.category === 'Sciences').map((item) => (
            <div key={item.id}>
              <button 
                onClick={() => {
                  switch (item.id) {
                    case 1:
                      navigate('/departments1a');
                      break;
                    case 3:
                      navigate('/departments1c');
                      break;
                    case 4:
                      navigate('/departments1d');
                      break;
                    case 5:
                      navigate('/departments1e');
                      break;
                    case 6:
                      navigate('/departments1f');
                      break;
                    case 8:
                      navigate('/departments1h');
                      break;
                    case 9:
                      navigate('/departments1i');
                      break;
                    case 10:
                      navigate('/departments1j');
                      break;
                    case 11:
                      navigate('/departments1k');
                      break;
                    case 12:
                      navigate('/departments1l');
                      break;
                    default:
                      navigate('/departments1m');
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

export default Sciences;