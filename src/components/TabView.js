// import React, { useState } from 'react';
// import '../screens/UploadScreens/styles/tabview.css';

// const TabView = ({ routes, renderScene, initialIndex = 0 }) => {
//   const [activeIndex, setActiveIndex] = useState(initialIndex);

//   return (
//     <div className="tab-view">
//       <div className="tab-bar">
//         {routes.map((route, index) => (
//           <button
//             key={route.key}
//             className={`tab-button ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//           >
//             {route.title}
//           </button>
//         ))}
//       </div>
//       <div className="tab-content">
//         {renderScene(routes[activeIndex])}
//       </div>
//     </div>
//   );
// };

// export default TabView;
