import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaPlayCircle, 
  FaInfo, 
  FaGamepad,
  FaArrowLeft 
} from 'react-icons/fa';import Home1 from './screens/Home1';
import About from './screens/About';
import ExamIntro from './screens/ExamIntro';
import ExamMode from './screens/ExamMode';
import GameMode from './screens/GameMode';
import QuickStudy from './screens/QuickStudy';
import Screen1001 from './screens/ExamScreens/Screen1001';
import Screen1002 from './screens/ExamScreens/Screen1002';
import Login from './screens/SignIn/Login';
import SignUp from './screens/SignIn/SignUp';
import ResetPasswordScreen from './screens/SignIn/ResetPasswordScreen';
import Upload from './screens/UploadScreens/Upload';
import './App.css';
// import  from '../Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/Cis1001';
import Cis1001 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/Cis1001';
import COS101 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/COS101';
import Screen4002 from './screens/ExamScreens/Screen4002';
import Screen2001 from './screens/ExamScreens/Screen2001';
import Screen2002 from './screens/ExamScreens/Screen2002';
import Screen3001 from './screens/ExamScreens/Screen3001';
import Screen3002 from './screens/ExamScreens/Screen3002';
import Screen4001 from './screens/ExamScreens/Screen4001';
import Screen5001 from './screens/ExamScreens/Screen5001';
import Screen5002 from './screens/ExamScreens/Screen5002';
import PHY101 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/PHY101';
import MTH101 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/MTH101';
import CSC111 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/CSC111';
import GST111 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/GST111';
import STA111 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/STA111';
import PHY107 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/PHY107';
import COS115 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/COS115';
import CSC105 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/CSC105';
import COS102 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/COS102';
import COS192 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/COS192';
import CSC104 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/CSC104';
import CSC128 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/CSC128';
import GST112 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/GST112';
import MTH102 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/MTH102';
import PHY102 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/PHY102';
import PHY106 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/PHY106';
import PHY108 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/PHY108';
import GEY116 from './Faculties/Faculty of Physical Sciences/100level/2nd Semester/Computer Science/GEY116';
import ENT211 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/ENT211';
import MTH201 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/MTH201';
import COS201 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/COS201';
import CSC221 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/CSC221';
import CSC203 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/CSC203';
import CSC267 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/CSC267';
import CSC231 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/CSC231';
import IFT211 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/IFT211';
import COS261 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/COS261';
import SEN201 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/SEN201';
import COS202 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/COS202';
import COS262 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/COS262';
import COS264 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/COS264';
import CSC208 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/CSC208';
import CSC266 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/CSC266';
import CSC299 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/CSC299';
import GEY206 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/GEY206';
import GST212 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/GST212';
import IFT212 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/IFT212';
import MTH202 from './Faculties/Faculty of Physical Sciences/200level/2nd Semester/Computer Science/MTH202';
import CSC309 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC309';
import CSC321 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC321';
import CSC323 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC323';
import CSC371 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC371';
import CSC375 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC375';
import CYB301 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CYB301';
import ICT305 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/ICT305';
import CSC301 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC301';
import CSC308 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/CSC308';
import CSC310 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/CSC310';
import CSC322 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/CSC322';
import CSC399 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/CSC399';
import DTS304 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/DTS304';
import ENT312 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/ENT312';
import GST312 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/GST312';
import CCS409 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CCS409';
import CSC400 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC400';
import CSC401 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC401';
import CSC405 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC405';
import CSC411 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC411';
import CSC415 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC415';
import CSC421 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC421';
import CSC431 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC431';
import CSC441 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC441';
import CSC451 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC451';
import CSC471 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC471';
import CSC473 from './Faculties/Faculty of Physical Sciences/400level/1st semester/Computer Science/CSC473';
import COOUCSC322 from './Faculties/Faculty of Physical Sciences/300level/2nd Semester/Computer Science/COOUCSC322';
import CSC404 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC404';
import CSC412 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC412';
import CSC424 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC424';
import CSC426 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC426';
import CSC428 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC428';
import CSC454 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC454';
import CSC464 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC464';
import CSC472 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC472';
import CSC474 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CSC474';
import CYB407 from './Faculties/Faculty of Physical Sciences/400level/2nd Semester/Computer Science/CYB407';
import Arts from './screens/Faculties/Arts';
import Sciences from './screens/Faculties/Sciences';
// import CSC309 from './Faculties/Faculty of Physical Sciences/300level/1st semester/Computer Science/CSC309';
// import ENT211 from './Faculties/Faculty of Physical Sciences/200level/1st semester/Computer Science/ENT211';
// import COS115 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/COS115';
// import COS115 from './Faculties/Faculty of Physical Sciences/100level/1st semester/Computer Science/COS115';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<BottomTabScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/screen1001" element={<Screen1001 />} />
        <Route path="/screen1002" element={<Screen1002 />} />
        <Route path="/screen2001" element={<Screen2001 />} />
        <Route path="/screen2002" element={<Screen2002 />} />
        <Route path="/screen3001" element={<Screen3001 />} />
        <Route path="/screen3002" element={<Screen3002 />} />
        <Route path="/screen4001" element={<Screen4001 />} />
        <Route path="/screen4002" element={<Screen4002 />} />
        <Route path="/screen5001" element={<Screen5001 />} />
        <Route path="/screen5002" element={<Screen5002 />} />
        <Route path="/cos115" element={<COS115 />} />
        <Route path="/csc105" element={<CSC105 />} />
        <Route path="/csc111" element={<CSC111 />} />
        <Route path="/gst111" element={<GST111 />} />
        <Route path="/mth101" element={<MTH101 />} />
        <Route path="/phy101" element={<PHY101 />} />
        <Route path="/phy107" element={<PHY107 />} />
        <Route path="/sta111" element={<STA111 />} />
        <Route path="/cos102" element={<COS102 />} />
        <Route path="/cos192" element={<COS192 />} />
        <Route path="/csc104" element={<CSC104 />} />
        <Route path="/csc128" element={<CSC128 />} />
        <Route path="/gst112" element={<GST112 />} />
        <Route path="/mth102" element={<MTH102 />} />
        <Route path="/phy102" element={<PHY102 />} />
        <Route path="/phy106" element={<PHY106 />} />
        <Route path="/phy108" element={<PHY108 />} />
        <Route path="/gey116" element={<GEY116 />} />
        <Route path="/ent211" element={<ENT211 />} />
        <Route path="/mth201" element={<MTH201 />} />
        <Route path="/cos201" element={<COS201 />} />
        <Route path="/csc221" element={<CSC221 />} />
        <Route path="/csc203" element={<CSC203 />} />
        <Route path="/csc267" element={<CSC267 />} />
        <Route path="/csc231" element={<CSC231 />} />
        <Route path="/ift211" element={<IFT211 />} />
        <Route path="/cos261" element={<COS261 />} />
        <Route path="/sen201" element={<SEN201 />} />
        <Route path="/cos202" element={<COS202 />} />
        <Route path="/cos262" element={<COS262 />} />
        <Route path="/cos264" element={<COS264 />} />
        <Route path="/csc208" element={<CSC208 />} />
        <Route path="/csc266" element={<CSC266 />} />
        <Route path="/csc299" element={<CSC299 />} />
        <Route path="/gey206" element={<GEY206 />} />
        <Route path="/gst212" element={<GST212 />} />
        <Route path="/ift212" element={<IFT212 />} />
        <Route path="/mth202" element={<MTH202 />} />
        <Route path="/csc309" element={<CSC309 />} />
        <Route path="/csc321" element={<CSC321 />} />
        <Route path="/csc323" element={<CSC323 />} />
        <Route path="/csc371" element={<CSC371 />} />
        <Route path="/csc375" element={<CSC375 />} />
        <Route path="/cyb301" element={<CYB301 />} />
        <Route path="/ict305" element={<ICT305 />} />
        <Route path="/csc301" element={<CSC301 />} />
        <Route path="/csc309" element={<CSC309 />} />
        <Route path="/csc308" element={<CSC308 />} />
        <Route path="/csc310" element={<CSC310 />} />
        <Route path="/csc322" element={<CSC322 />} />
        <Route path="/csc399" element={<CSC399 />} />
        <Route path="/dts304" element={<DTS304 />} />
        <Route path="/ent312" element={<ENT312 />} />
        <Route path="/gst312" element={<GST312 />} />
        <Route path="/cooucsc322" element={<COOUCSC322 />} />
        <Route path="/csc309" element={<CSC309 />} />
        <Route path="/ccs409" element={<CCS409 />} />
        <Route path="/csc400" element={<CSC400 />} />
        <Route path="/csc401" element={<CSC401 />} />
        <Route path="/csc405" element={<CSC405 />} />
        <Route path="/csc411" element={<CSC411 />} />
        <Route path="/csc415" element={<CSC415 />} />
        <Route path="/csc421" element={<CSC421 />} />
        <Route path="/csc431" element={<CSC431 />} />
        <Route path="/csc441" element={<CSC441 />} />
        <Route path="/csc451" element={<CSC451 />} />
        <Route path="/csc471" element={<CSC471 />} />
        <Route path="/csc473" element={<CSC473 />} />
        <Route path="/csc473" element={<CSC404 />} />
        <Route path="/csc412" element={<CSC412 />} />
        <Route path="/csc424" element={<CSC424 />} />
        <Route path="/csc426" element={<CSC426 />} />
        <Route path="/csc428" element={<CSC428 />} />
        <Route path="/csc454" element={<CSC454 />} />
        <Route path="/csc464" element={<CSC464 />} />
        <Route path="/csc472" element={<CSC472 />} />
        <Route path="/csc474" element={<CSC474 />} />
        <Route path="/cyb407" element={<CYB407 />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/sciences" element={<Sciences />} />
        
        <Route path="/screen1002" element={<Screen1002 />} />
        <Route path="/cis1001" element={<Cis1001 />} />
        <Route path="/cos101" element={<COS101 title="Introduction to Computing Sciences"/>} />
        <Route path="/exammode" element={<ExamMode />} />
      </Routes>
    </Router>
  );
};

const BottomTabScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { 
      name: 'Home', 
      path: '/', 
      icon: FaHome
    },
    { 
      name: 'QuickStudy', 
      path: '/quick-study', 
      icon: FaBook
    },
    { 
      name: 'ExamIntro', 
      path: '/exam-intro', 
      icon: FaPlayCircle
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: FaInfo
    },
    { 
      name: 'GameMode', 
      path: '/game-mode', 
      icon: FaGamepad
    },
  ];

  const isTabPath = tabs.some(tab => tab.path === location.pathname);

  return (
    <div className={`screen-container ${isTabPath ? 'with-tabs' : ''}`}>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/quick-study" element={<QuickStudy />} />
        <Route path="/exam-intro" element={<ExamIntro />} />
        <Route path="/about" element={<About />} />
        <Route path="/game-mode" element={<GameMode />} />
      </Routes>

      {isTabPath && (
        <nav className="bottom-tabs">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            const IconComponent = tab.icon;
            
            return (
              <button
                key={tab.name}
                className={`tab-item ${isActive ? 'active' : ''}`}
                onClick={() => navigate(tab.path)}
              >
                <IconComponent size={20} />
                <span className="tab-label">{tab.name}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export const ScreenHeader = ({ title, onBack }) => {
  return (
    <header className="header">
      {onBack && (
        <button className="back-button" onClick={onBack}>
          <FaArrowLeft size={20} />
        </button>
      )}
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default App;
// // // Home,           // Filled home
// // // House,          // Alternative home
// // // Building,       // Building icon
// // // Building2,      // Alternative building
// // // HousePlus,      // Home with plus
// // // HouseHeart  

// // import React from 'react';
// // import {BrowserRouter as Routes, Route } from 'react-router-dom';
// // import Home from './screens/Home';
// // import './App.css';

// // // ScreenHeader component
// // export const ScreenHeader = ({ title }) => {
// //   return (
// //     <div className="screen-header">
// //       <h1>{title}</h1>
// //     </div>
// //   );
// // };

// // function App() {
// //   return (
// //     <div className="App">
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/quick-study" />
// //         <Route path="/exam-intro" />
// //         <Route path="/game-mode" />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;
// /* <style>

//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   body {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
//     background-color: #f5f5f5;
//     color: #333;
//   }
  
//   .App {
//     min-height: 100vh;
//     background-color: #fff;
//   }
  
//   /* Screen Header */
//   // .screen-header {
//   //   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   //   color: white;
//   //   padding: 20px;
//   //   text-align: center;
//   //   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//   // }
  
//   // .screen-header h1 {
//   //   font-size: 1.5rem;
//   //   font-weight: 600;
//   //   margin: 0;
//   // }
  
//   // /* Screen Content */
//   // .screen-content {
//   //   padding: 20px;
//   //   max-width: 400px;
//   //   margin: 0 auto;
//   // }
  
//   // /* Card Styles */
//   // .card {
//   //   background: white;
//   //   border-radius: 12px;
//   //   padding: 20px;
//   //   margin-bottom: 20px;
//   //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   //   border: 1px solid #e1e5e9;
//   // }
  
//   // .card-title {
//   //   font-size: 1.25rem;
//   //   font-weight: 600;
//   //   margin-bottom: 8px;
//   //   color: #2d3748;
//   // }
  
//   // .card-description {
//   //   color: #718096;
//   //   line-height: 1.5;
//   //   font-size: 0.9rem;
//   // }
  
//   // /* Button Styles */
//   // .btn {
//   //   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   //   color: white;
//   //   border: none;
//   //   padding: 12px 20px;
//   //   border-radius: 8px;
//   //   font-size: 1rem;
//   //   font-weight: 500;
//   //   cursor: pointer;
//   //   transition: all 0.3s ease;
//   //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   // }
  
//   // .btn:hover {
//   //   transform: translateY(-1px);
//   //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
//   // }
  
//   // .btn:active {
//   //   transform: translateY(0);
//   // }
  
//   // .btn-outline {
//   //   background: transparent;
//   //   border: 2px solid #667eea;
//   //   color: #667eea;
//   // }
  
//   // .btn-outline:hover {
//   //   background: #667eea;
//   //   color: white;
//   // }
  
//   // /* Responsive Design */
//   // @media (max-width: 480px) {
//   //   .screen-content {
//   //     padding: 15px;
//   //   }
    
//   //   .screen-header {
//   //     padding: 15px;
//   //   }
    
//   //   .screen-header h1 {
//   //     font-size: 1.3rem;
//   //   }
    
//   //   .card {
//   //     padding: 15px;
//   //   }
//   // }
// // </style> */}

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { Home, BookOpen, PlayCircle, Gamepad2, Info } from 'lucide-react';

// function HomeScreen() {
//   return (
//     <div style={{ padding: 20, textAlign: 'center' }}>
//       <h1>COOU Study App</h1>
//       <p>Welcome to the study application</p>
//     </div>
//   );
// }

// function StudyScreen() {
//   return <div style={{ padding: 20 }}><h2>Quick Study</h2></div>;
// }

// function ExamScreen() {
//   return <div style={{ padding: 20 }}><h2>Exam Mode</h2></div>;
// }

// function GameScreen() {
//   return <div style={{ padding: 20 }}><h2>Game Mode</h2></div>;
// }

// function AboutScreen() {
//   return <div style={{ padding: 20 }}><h2>About</h2></div>;
// }

// function BottomTabs() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const tabs = [
//     { path: '/', icon: Home, label: 'Home' },
//     { path: '/study', icon: BookOpen, label: 'Study' },
//     { path: '/exam', icon: PlayCircle, label: 'Exam' },
//     { path: '/game', icon: Gamepad2, label: 'Game' },
//     { path: '/about', icon: Info, label: 'About' },
//   ];

//   return (
//     <nav style={{
//       position: 'fixed',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: 'white',
//       borderTop: '1px solid #e0e0e0',
//       display: 'flex',
//       padding: '8px 0',
//     }}>
//       {tabs.map((tab) => {
//         const Icon = tab.icon;
//         const isActive = location.pathname === tab.path;
        
//         return (
//           <button
//             key={tab.path}
//             onClick={() => navigate(tab.path)}
//             style={{
//               flex: 1,
//               background: 'none',
//               border: 'none',
//               padding: '8px 4px',
//               color: isActive ? '#007AFF' : '#8e8e93',
//               cursor: 'pointer',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               fontSize: '12px'
//             }}
//           >
//             <Icon size={20} />
//             <span style={{ marginTop: '4px' }}>{tab.label}</span>
//           </button>
//         );
//       })}
//     </nav>
//   );
// }

// function App() {
//   return (
//     <Router>

//     <Routes>
//       {/* <div style={{ paddingBottom: '70px', minHeight: '100vh' }}> */}
//         {/* <Routes> */}
//           <Route path="/" element={<HomeScreen />} />
//           <Route path="/study" element={<StudyScreen />} />
//           <Route path="/exam" element={<ExamScreen />} />
//           <Route path="/game" element={<GameScreen />} />
//           <Route path="/about" element={<AboutScreen />} />
//         {/* </Routes> */}
//         {/* <BottomTabs /> */}
//       {/* </div> */}
//     </Routes>
//     </Router>
//   );
// }

// export default App;