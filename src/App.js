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
        <Route path="/gey116" element={<GEY116 />} />
        {/* <Route path="/gey116" element={<GEY116 />} />
        <Route path="/gey116" element={<GEY116 />} />
        <Route path="/gey116" element={<GEY116 />} />
        <Route path="/gey116" element={<GEY116 />} />
        <Route path="/gey116" element={<GEY116 />} />
        <Route path="/gey116" element={<GEY116 />} /> */}
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