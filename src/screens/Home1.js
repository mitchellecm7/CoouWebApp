// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { FaUserPlus } from 'react-icons/fa';
// // // // // import '../screens/UploadScreens/styles/Home1.css';
// // // // // import path from "../assets/Images/logo.png";
// // // // // import BottomTabs from './BottomTabs'; // Make sure to import your BottomTabs component
// // // // // import Navbar from './Navbar'; // You'll need to create this Navbar component

// // // // // const Home1 = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [isMobile, setIsMobile] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const checkScreenSize = () => {
// // // // //       setIsMobile(window.innerWidth < 768);
// // // // //     };

// // // // //     checkScreenSize();
// // // // //     window.addEventListener('resize', checkScreenSize);

// // // // //     return () => window.removeEventListener('resize', checkScreenSize);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="home-container">
// // // // //       {/* Header - Show on all devices */}
// // // // //       <div className="header-container">
// // // // //         <img src={path} alt="Logo" className="logo" />
// // // // //         <div className="header-text-container">
// // // // //           <h1 className="header-text">
// // // // //             CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY {'\n'}Study Apps
// // // // //           </h1>
// // // // //         </div>
// // // // //         <div className="icon-container">
// // // // //           <button onClick={() => navigate('/login')} className="icon-button">
// // // // //             <FaUserPlus size={22} color="#fff" />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Navbar - Show only on desktop */}
// // // // //       {!isMobile && <Navbar />}

// // // // //       {/* Content */}
// // // // //       <div className="academia-section">
// // // // //         <p className="academia-text">
// // // // //           Choose your Human Knowledge or Academia i.e indicate whether your faculty
// // // // //           belongs to either Arts or Sciences
// // // // //         </p>
// // // // //       </div>
      
// // // // //       <div className="content-view">
// // // // //         <button className="department-button" onClick={() => navigate('/arts')}>
// // // // //           <span className="department-text">ARTS</span>
// // // // //         </button>

// // // // //         <button className="department-button" onClick={() => navigate('/sciences')}>
// // // // //           <span className="department-text">SCIENCES</span>
// // // // //         </button>
// // // // //       </div>
      
// // // // //       <div className="background-container">
// // // // //         <div className="background-image"></div>
// // // // //       </div>

// // // // //       {/* Bottom Tabs - Show only on mobile */}
// // // // //       {isMobile && <BottomTabs />}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home1;
// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { FaUserPlus } from 'react-icons/fa';
// // // // import '../screens/UploadScreens/styles/Home1.css';
// // // // import path from "../assets/Images/logo.png";

// // // // const Home1 = () => {
// // // //   const navigate = useNavigate();

// // // //   return (
// // // //     <div className="home-container">
// // // //       {/* Header */}
// // // //       <div className="header-container">
// // // //         <img src={path} alt="Logo" className="logo" />
// // // //         <div className="header-text-container">
// // // //           <h1 className="header-text">
// // // //             CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY {'\n'}Study Apps
// // // //           </h1>
// // // //         </div>
// // // //         <div className="icon-container">
// // // //           <button onClick={() => navigate('/login')} className="icon-button">
// // // //             <FaUserPlus size={22} color="#fff" />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Content */}
// // // //       <div className="academia-section">
// // // //         <p className="academia-text">
// // // //           Choose your Human Knowledge or Academia i.e indicate whether your faculty
// // // //           belongs to either Arts or Sciences
// // // //         </p>
// // // //       </div>
      
// // // //       <div className="content-view">
// // // //         <button className="department-button" onClick={() => navigate('/arts')}>
// // // //           <span className="department-text">ARTS</span>
// // // //         </button>

// // // //         <button className="department-button" onClick={() => navigate('/sciences')}>
// // // //           <span className="department-text">SCIENCES</span>
// // // //         </button>
// // // //       </div>
      
// // // //       <div className="background-container">
// // // //         <div className="background-image"></div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home1;
// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { FaUserPlus } from 'react-icons/fa';
// // // import '../screens/UploadScreens/styles/Home1.css';
// // // import path from "../assets/Images/logo.png";

// // // const Home1 = () => {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <div className="home-container-native">
// // //       {/* Header */}
// // //       <div className="header-container-native">
// // //         <img src={path} alt="Logo" className="logo-native" />
// // //         <div className="header-text-container-native">
// // //           <h1 className="header-text-native">
// // //             CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY {'\n'}Study Apps
// // //           </h1>
// // //         </div>
// // //         <div className="icon-container-native">
// // //           <button onClick={() => navigate('/login')} className="icon-button-native">
// // //             <FaUserPlus size={22} color="#fff" />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Academia Text */}
// // //       <div className="academia-section-native">
// // //         <p className="academia-text-native">
// // //           Choose your Human Knowledge or Academia i.e indicate whether your faculty
// // //           belongs to either Arts or Sciences
// // //         </p>
// // //       </div>
      
// // //       {/* Content Buttons */}
// // //       <div className="content-view-native">
// // //         <button className="department-button-native" onClick={() => navigate('/arts')}>
// // //           <span className="department-text-native">ARTS</span>
// // //         </button>

// // //         <button className="department-button-native" onClick={() => navigate('/sciences')}>
// // //           <span className="department-text-native">SCIENCES</span>
// // //         </button>
// // //       </div>
      
// // //       {/* Background */}
// // //       <div className="background-container-native">
// // //         <div className="background-image-native"></div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home1;
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { FaUserPlus } from 'react-icons/fa';
// // import '../screens/UploadScreens/styles/Home1.css';
// // import path from "../assets/Images/logo.png";

// // const Home1 = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="home-container">
// //       {/* Header */}
// //       <div className="header-container">
// //         <img src={path} alt="Logo" className="logo" />
// //         <div className="header-text-container">
// //           <h1 className="header-text">
// //             CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY {'\n'}Study Apps
// //           </h1>
// //         </div>
// //         <div className="icon-container">
// //           <button onClick={() => navigate('/login')} className="icon-button">
// //             <FaUserPlus size={22} color="#fff" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Academia Text */}
// //       <div className="academia-section">
// //         <p className="academia-text">
// //           Choose your Human Knowledge or Academia i.e indicate whether your faculty
// //           belongs to either Arts or Sciences
// //         </p>
// //       </div>
      
// //       {/* Content Buttons */}
// //       <div className="content-view">
// //         <button className="department-button" onClick={() => navigate('/arts')}>
// //           <span className="department-text">ARTS</span>
// //         </button>

// //         <button className="department-button" onClick={() => navigate('/sciences')}>
// //           <span className="department-text">SCIENCES</span>
// //         </button>
// //       </div>
      
// //       {/* Background */}
// //       <div className="background-container">
// //         <img src={path} alt="Background" className="background-image" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home1;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUserPlus } from 'react-icons/fa';
// import '../screens/UploadScreens/styles/Home1.css';
// import path from "../assets/Images/logo.png";

// const Home1 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="mobile-container">
//       {/* Status Bar */}
//       <div className="status-bar">
//         <div className="status-time">9:41</div>
//         <div className="status-icons">
//           <span className="status-icon"/span>
//           <span className="status-icon"></span>
//           <span className="status-icon"></span>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="header-container">
//         <img src={path} alt="Logo" className="logo" />
//         <div className="header-text-container">
//           <h1 className="header-text">
//             CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY
//           </h1>
//           <p className="header-subtext">Study Apps</p>
//         </div>
//         <div className="icon-container">
//           <button onClick={() => navigate('/login')} className="icon-button">
//             <FaUserPlus size={20} color="#fff" />
//           </button>
//         </div>
//       </div>

//       {/* Academia Text */}
//       <div className="academia-section">
//         <p className="academia-text">
//           Choose your Human Knowledge or Academia i.e indicate whether your faculty
//           belongs to either Arts or Sciences
//         </p>
//       </div>
      
//       {/* Content Buttons */}
//       <div className="content-view">
//         <button className="department-button" onClick={() => navigate('/arts')}>
//           <span className="department-text">ARTS</span>
//         </button>

//         <button className="department-button" onClick={() => navigate('/sciences')}>
//           <span className="department-text">SCIENCES</span>
//         </button>
//       </div>
      
//       {/* Background */}
//       <div className="background-container">
//         <img src={path} alt="Background" className="background-image" />
//       </div>

//       {/* iOS Home Indicator */}
//       <div className="home-indicator"></div>
//     </div>
//   );
// };

// export default Home1;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import '../screens/UploadScreens/styles/Home1.css';
import path from "../assets/Images/logo.png";

const Home1 = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="header-container">
        <img src={path} alt="Logo" className="logo" />
        <div className="header-text">
          CHUKWUEMEKA ODUMEGWU OJUKWU UNIVERSITY {'\n'}Study Apps
        </div>
        <div className="icon-container">
          <button onClick={() => navigate('/login')} className="icon-button">
            <FaUserPlus size={22} color="#fff" />
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
        <img src={path} alt="Background" className="background-image" />
      </div>
    </div>
  );
};

export default Home1;