import React from 'react';
import '../screens/UploadScreens/styles/About.css';

const About = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">About Our App</h1>

        <p className="description">
          Welcome to the 1st Edition of CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY study application! This is a fantastic platform designed to 
          help and assist its students in achieving tremendous success in their area of discipline. It was built by its very own team
          of great Coou Computer Science students.
        </p>
        
        <p className="info">For more information or assistance contact Engineer KingTech: 08039234319</p>
        <p className="developer">
          Developed by: 
          <span className="developer-name">
            CM7 
            <span className="verified-icon">✓</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;