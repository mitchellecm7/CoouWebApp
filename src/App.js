// import React from 'react';
// import { Routes, Route, useNavigate, useLocation, Router } from 'react-router-dom';
// import { Home, House, 
//   // Book, BookOpen, PlayCircle, PlayCircleOutline, Info, InfoIcon, Gamepad2, Gamepad2Icon,
//    ArrowLeft } from 'lucide-react';

// // Import your components (you'll need to convert these too)
// import Home1 from './screens/Home1';
// // import QuickStudy from './screens/QuickStudy';
// // import About from './screens/About';
// // import GameMode from './screens/GameMode';
// // import ExamIntro from './screens/ExamIntro';
// // import SignUp from './screens/SignIn/SignUp';
// // import LogIn from './screens/SignIn/LogIn';
// // import ResetPasswordScreen from './screens/SignIn/ResetPasswordScreen';
// // import Screen1001 from './screens/Screen1001';
// // import Screen1002 from './screens/Screen1002';
// // import Screen2001 from './screens/Screen2001';
// // import Screen2002 from './screens/Screen2002';
// // import Screen3001 from './screens/Screen3001';
// // import Screen3002 from './screens/Screen3002';
// // import Screen4001 from './screens/Screen4001';
// // import Screen4002 from './screens/Screen4002';
// // import Screen5001 from './screens/Screen5001';
// // import Screen5002 from './screens/Screen5002';

// // Add these routes to your Routes component


// const App = () => {
//   return (
//     // <div className="mobile-container">
//         <Router>
//       <Routes>

//         <Route path="/" element={<BottomTabScreen />} />
//         <Route path="/home" element={<Home1 />} />
//         {/* <Route path="/exam-mode" element={<ExamMode />} />
//         <Route path="/quick-study" element={<QuickStudy />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/game-mode" element={<GameMode />} />
//         <Route path="/exam-intro" element={<ExamIntro />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<LogIn />} />
//         <Route path="/reset-password" element={<ResetPasswordScreen />} /> */}
        

//         {/* <Route path="/screen1001" element={<Screen1001 />} /> */}
//         {/* <Route path="/screen1002" element={<Screen1002 />} /> */}
//         {/* <Route path="/screen2001" element={<Screen2001 />} />
//         <Route path="/screen2002" element={<Screen2002 />} />
//         <Route path="/screen3001" element={<Screen3001 />} />
//         <Route path="/screen3002" element={<Screen3002 />} />
//         <Route path="/screen4001" element={<Screen4001 />} />
//         <Route path="/screen4002" element={<Screen4002 />} />
//         <Route path="/screen5001" element={<Screen5001 />} />
//         <Route path="/screen5002" element={<Screen5002 />} />        You'll need to convert each screen component */}
//       </Routes>
//         </Router>
//   );
// };

// const BottomTabScreen = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

  // const tabs = [
  //   { name: 'Home', path: '/', icon: Home, outlineIcon: House },
  //   // { name: 'QuickStudy', path: '/quick-study', icon: Book, outlineIcon: BookOpen },
  //   // { name: 'ExamIntro', path: '/exam-intro', icon: PlayCircle, outlineIcon: PlayCircleOutline },
  //   // { name: 'About', path: '/about', icon: Info, outlineIcon: InfoIcon },
  //   // { name: 'GameMode', path: '/game-mode', icon: Gamepad2, outlineIcon: Gamepad2Icon },
  // ];

//   return (
//     <div style={{ minHeight: '100vh', paddingBottom: '60px' }}>
//       {/* Render current screen based on route */}
//       <Routes>
//         <Route path="/" element={<Home1 />} />
//         {/* <Route path="/quick-study" element={<QuickStudy />} /> */}
//         {/* <Route path="/exam-intro" element={<ExamIntro />} /> */}
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* <Route path="/game-mode" element={<GameMode />} /> */}
//       </Routes>

//       {/* Bottom Tab Navigation */}
//       <nav className="bottom-tabs">
//         {tabs.map((tab) => {
//           const isActive = location.pathname === tab.path;
//           const IconComponent = isActive ? tab.icon : tab.outlineIcon;
          
//           return (
//             <button
//               key={tab.name}
//               className={`tab-item ${isActive ? 'active' : ''}`}
//               onClick={() => navigate(tab.path)}
//               style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//             >
//               <IconComponent size={20} />
//               <span style={{ fontSize: '12px', marginTop: '2px' }}>{tab.name}</span>
//             </button>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// // Header Component for individual screens
// export const ScreenHeader = ({ title, onBack }) => {
//   return (
//     <header className="header">
//       {onBack && (
//         <button className="back-button" onClick={onBack}>
//           <ArrowLeft size={20} />
//         </button>
//       )}
//       <h1 className="header-title">{title}</h1>
//     </header>
//   );
// };

// export default App;
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